import { checkTemp, createElement, hourMin, tempFn } from "./utility";
import fillDetailContainer from "./displayExtra";
import fillMainContainer from "./displayMain";
import { sortDays, findHighLow } from "./objFn";
import fillForecastContainer from "./displayForecast";

// fetch x3: current, forecast, and airquality
// easier to keep them separate?
const apiAction = (() => {
    const currentValue = "917a17f77a60ae96ee081212e94e3f75";
    const getForecast = async (location) => {
      const searchLocation = location;
      const forecastFetch = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${searchLocation}&appid=${currentValue}&units=imperial`,
        {
          mode: "cors",
        }
      );
      const forecastData = await forecastFetch.json();
      return forecastData;
    };
    const getCurrent = async (location) => {
      // !!! need to check api call - accurate for current conditions?
      const currentFetch = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${currentValue}&units=imperial`,
        {
          mode: "cors",
        }
      );
      const currentData = await currentFetch.json();
      return currentData;
    };
    const getAirQ = async (lat, lon) => {
      const airFetch = await fetch(
        `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${currentValue}`,
        {
          mode: "cors",
        }
      );
      const airData = await airFetch.json();
      return airData;
    };
    const decipherError = (input) => {
      const container = document.querySelector('div.inputContainer');
      if (input.cod === "404") {
        const errorDisplay = createElement('div', {class: "errorDisplay"});
        errorDisplay.textContent = "Location not found!";
        container.appendChild(errorDisplay);
      }
    }
    const errorCheck = (input) => {
      let send = "";
      if (input.cod !== "200") {
        send = false;
        decipherError(input);
      } else {
        send = true;
      }
      return send;
    }
    // get all the data into an object
    const declareData = ([forecast, current, air], tempArray) => {
      console.log([forecast, current, air]);
      const city = current.name;
      const gps = `${current.coord.lat}, ${current.coord.lon}`;
      const temp = tempFn(current.main.temp);
      const highLow = checkTemp(temp, tempArray[0], tempArray[1]);
      const high = tempFn(highLow[0]);
      const low = tempFn(highLow[1]);
      const conditions = current.weather[0].main;
      const { description } = current.weather[0];
      const { icon } = current.weather[0];
      const { wind } = forecast.list[0];
      const { pop } = forecast.list[0];
      const { timezone } = forecast.city;
      const sunrise = hourMin(forecast.city.sunrise, timezone);
      const sunset = hourMin(forecast.city.sunset, timezone);
      const { humidity } = forecast.list[0].main;
      const feelsLike = tempFn(forecast.list[0].main.feels_like);
      const { visibility } = forecast.list[0];
      const precip = forecast.list[0].rain;
      const airQuality = air.list[0].main.aqi;
      const { pressure } = forecast.list[0].main;
      return {
        city,
        gps,
        temp,
        high,
        low,
        conditions,
        description,
        icon,
        wind,
        pop,
        sunrise,
        sunset,
        timezone,
        humidity,
        feelsLike,
        visibility,
        precip,
        airQuality,
        pressure,
      };
    };
    // DOM
    const clearAll = (input) => {
        while (input.firstChild) {
          input.removeChild(input.firstChild);
        }
      }
    const clearMain = (mainDiv) => {
        console.log(mainDiv.children.length);
        for (let i = 1; i < mainDiv.children.length; i += 0) {
          console.log(mainDiv.children[0].nextElementSibling);
          clearAll(mainDiv.children[0].nextElementSibling);
          mainDiv.removeChild(mainDiv.children[0].nextElementSibling);
        }
    }
    // the main event
    const mainFn = async (location, boolean, mainDiv) => {
      try {
      const forecastW = await getForecast(location);
      if (errorCheck(forecastW)) {
        const daysF = sortDays(forecastW);
        const highLow = findHighLow(daysF[0]);
        const currentW = await getCurrent(location);
        const airQ = await getAirQ(forecastW.city.coord.lat, forecastW.city.coord.lon);
        const collective = Promise.all([forecastW, currentW, airQ]).then((data) => {
          const object = declareData(data, highLow);
          console.log(object);
          clearMain(mainDiv);
          const detail = fillDetailContainer(object, boolean);
          mainDiv.appendChild(detail);
          const current = fillMainContainer(object, boolean);
          mainDiv.appendChild(current);
          const forecast = fillForecastContainer(daysF, object, boolean);
          mainDiv.appendChild(forecast);
        }).catch((error) => {
          alert('Apologies! The site experienced an error, check the log for details.');
          console.log(error);
        });
      } else {
        console.log(`Apologies! The site experienced an error: "${forecastW.message}".`);
      }
      } catch (error) {
        alert('Apologies! The site experienced an error, check the log for details.');
        console.log(error);
      }
    };
    return { mainFn };
})();

export default apiAction;
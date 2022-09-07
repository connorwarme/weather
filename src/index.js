import "./style.css";
import { createElement, tempFn } from "./utility";
import { obj, fillDetailContainer } from "./displayExtra";
import fillMainContainer from "./displayMain";

// get main body in DOM
const body = document.querySelector("body");
const main = createElement("div", { class: "main" });
body.appendChild(main);
// make input field and submit button
const inputContainer = createElement("div", { class: "inputContainer" });
const inputField = createElement("input", {
  class: "inputField",
  id: "inputField",
});
const submitBtn = createElement("button", {
  class: "submitBtn",
  "aria-label": "Submit",
});
submitBtn.textContent = "Submit";
inputContainer.appendChild(inputField);
inputContainer.appendChild(submitBtn);
main.appendChild(inputContainer);
// submit listener function
const submitFn = () => {
  const userInput = inputField.value;
  // needs edit
  apiAction.mainFn(userInput);
  inputField.value = "";
};
submitBtn.addEventListener("click", () => {
  submitFn();
});
//
// figure out how to fetch x3: current, forecast, and airquality
// easier to keep them seperate?
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
  const getAirQ = async (location) => {
    const airFetch = await fetch(
      `http://api.openweathermap.org/data/2.5/air_pollution?lat=40.39&lon=-105.07&appid=${currentValue}`,
      {
        mode: "cors",
      }
    );
    const airData = await airFetch.json();
    return airData;
  };
  // get all the datas - thinking an array with 3 obj: [{current}, {forecast}, {airq}]
  //
  const declareData = ([forecast, current, air]) => {
    // !!! need to confirm current data, find airq, and think thru what else should be included
    // city, country, current temp, high, low, current conditions & descrrption, current weather icon?,
    // then stuff for detailContainer
    // !!! use f to destructure? is that was eslint is going for?
    console.log([forecast, current, air]);
    const f = forecast.list[0];
    console.log(f);
    const city = current.name;
    const gps = `${current.coord.lat}, ${current.coord.lon}`;
    const temp = tempFn(current.main.temp);
    // !!! needs edit (and add to return)
    // const high = tempFn();
    // const low = tempFn();
    const conditions = forecast.list[0].weather[0].main;
    const description = forecast.list[0].weather[0].description;
    const wind = forecast.list[0].wind;
    const pop = forecast.list[0].pop;
    const sunrise = forecast.city.sunrise;
    const sunset = forecast.city.sunset;
    const humidity = forecast.list[0].main.humidity;
    const feelsLike = tempFn(forecast.list[0].main.feels_like);
    const visibility = forecast.list[0].visibility;
    const precip = forecast.list[0].rain;
    const airQuality = air.list[0].main.aqi;
    const pressure = forecast.list[0].main.pressure;
    return {
      city,
      gps,
      temp,
      conditions,
      description,
      wind,
      pop,
      sunrise,
      sunset,
      humidity,
      feelsLike,
      visibility,
      precip,
      airQuality,
      pressure,
    };
  };

  const mainFn = async (location) => {
    const forecastW = await getForecast(location);
    console.log(forecastW);
    const currentW = await getCurrent(location);
    console.log(currentW);
    const airQ = await getAirQ(location);
    console.log(airQ);
    const collective = Promise.all([forecastW, currentW, airQ]).then((data) => {
      const object = declareData(data);
      return object;
    }

    );
    console.log(collective);
    // const extra = extraFactory(forDisplay);
    // main.appendChild(extra);
    // !!! need to remove, just for work while offline
    const detail = fillDetailContainer(obj);
    main.appendChild(detail);
    const current = fillMainContainer(obj);
    main.appendChild(current);
  };
  // still need to sort out how to parse data for forecast section
  // for desktop display: a card for each day, which has the values (3h increments) in list style
  // time, temp, conditions, pop? (if it's greater than 0)
  // show cards horizontally
  // for mobile display: same cards, but show vertically
  return { mainFn };
})();

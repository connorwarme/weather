import "./style.css";
import createElement from "./utility";
import { obj, fillDetailContainer } from "./display";

// get main body in DOM
const body = document.querySelector("body");
const main = createElement("div", { class: "main" });
body.appendChild(main);
// make input field and submit button
const inputField = createElement("input", {
  class: "inputField",
  id: "inputField",
});
const submitBtn = createElement("button", {
  class: "submitBtn",
  "aria-label": "Submit",
});
submitBtn.textContent = "Submit";
main.appendChild(inputField);
main.appendChild(submitBtn);
// submit listener function
const submitFn = () => {
  // const userInput = inputField.value;
  // needs edit
  apiAction.mainFn(obj);
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
  const getWeatherData = async (location) => {
    const searchLocation = location;
    const megaData = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${searchLocation}&appid=${currentValue}&units=imperial`,
      {
        mode: "cors",
      }
    );
    const forecastData = await megaData.json();
    return forecastData;
  };
  // get all the datas - thinking an array with 3 obj: [{current}, {forecast}, {airq}]
  // 
  const declareData = (input) => {
    const city = input.city.name;
    const country = input.city.country;
    const temp = input.list[0].main.temp;
    const conditions = input.list[0].weather[0].main;
    const description = input.list[0].weather[0].description;
    const wind = input.list[0].wind;
    const pop = input.list[0].pop;
    const sunrise = input.city.sunrise;
    const sunset = input.city.sunset;
    const humidity = input.list[0].main.humidity;
    const feelsLike = input.list[0].main.feels_like;
    const visibility = input.list[0].visibility;
    const precip3h = input.list[0].rain;
    const airQuality = "need other api";
    const pressure = input.list[0].main.pressure;
    return {city, country, temp, conditions, description, wind, pop, sunrise, sunset, humidity, feelsLike, visibility, precip3h, airQuality, pressure};
  };

  const mainFn = async (location) => {
    // const data = await getWeatherData(location);
    // console.log(data);
    // const forDisplay = (declareData(data));
    // const extra = extraFactory(forDisplay);
    // console.log(forDisplay);
    // main.appendChild(extra);
    // !!! need to remove, just for work while offline
    const input = fillDetailContainer(obj);
    main.appendChild(input);
  };

  return { mainFn };
})();

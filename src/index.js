import "./style.css";
import createElement from "./utility";

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
  const userInput = inputField.value;
  // needs edit
  apiAction.mainFn(userInput);
  inputField.value = "";
};
submitBtn.addEventListener("click", () => {
  submitFn();
});
//
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
  const declareData = (input) => {
    const currentTemp = input.list[0].main.temp;
    const currentConditions = input.list[0].weather[0].main;
    const currentDescription = input.list[0].weather[0].description;
    const currentWind = input.list[0].wind;
    const currentPop = input.list[0].pop;
    console.log(
      currentTemp,
      currentConditions,
      currentDescription,
      currentWind,
      currentPop
    );
  };
  const declareCity = (input) => {
    const city = input.city.name;
    const country = input.city.country;
    console.log(city, country);
  }
  const mainFn = async (location) => {
    const data = await getWeatherData(location);
    console.log(data);
    declareData(data);
    declareCity(data);
  };

  return { mainFn };
})();

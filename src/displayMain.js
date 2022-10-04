import { createElement, whatTemp } from "./utility";
// create content for main: city, temp, hi/low, image, and description
const displayMain = (() => {
  const create = (object, boolean) => {
    const mainContainer = createElement("div", { class: "mainContainer" });
    const locationContainer = createElement("div", {
      class: "locationContainer",
    });
    const city = createElement("div", { class: "mainCity" });
    const country = createElement("div", { class: "mainCountry" });
    const tempContainer = createElement("div", { class: "mainTempContainer" });
    const tempDiv = createElement("div", {id: "temp", class: `${object.temp.far} ${object.temp.cel}`});
    const highlowContainer = createElement("div", {
      class: "highlowContainer",
    });
    const highDiv = createElement("div", {id: "temp", class: `${object.high.far} ${object.high.cel}`});
    const lowDiv = createElement("div", {id: "temp", class: `${object.low.far} ${object.low.cel}`});
    const iconContainer = createElement("div", { class: "iconContainer" });
    const icon = createElement("img", {class: "mainWeatherIcon", "aria-label": "Weather Icon"});
    icon.src = `https://openweathermap.org/img/wn/${object.icon}@4x.png`;
    icon.alt = `${object.description}`;
    const description = createElement("div", { class: "mainDescription" });
    // content
    const tempUnit = whatTemp(boolean);
    city.textContent = object.city.toUpperCase();
    country.textContent = object.country;
    tempDiv.textContent = object.temp[tempUnit];
    highDiv.textContent = `${object.high[tempUnit]}`;
    lowDiv.textContent = `${object.low[tempUnit]}`;
    description.textContent = object.conditions;
    // append it all together
    mainContainer.appendChild(locationContainer);
    locationContainer.appendChild(city);
    locationContainer.appendChild(country);
    mainContainer.appendChild(tempContainer);
    tempContainer.appendChild(tempDiv);
    mainContainer.appendChild(highlowContainer);
    highlowContainer.appendChild(highDiv);
    highlowContainer.appendChild(lowDiv);
    mainContainer.appendChild(iconContainer);
    iconContainer.appendChild(icon);
    iconContainer.appendChild(description);

    return mainContainer;
  };
  return { create };
})();
const fillMainContainer = (object, boolean) => {
  const main = displayMain.create(object, boolean);
  return main;
};
export default fillMainContainer;

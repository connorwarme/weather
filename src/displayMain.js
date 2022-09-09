import { createElement, whatTemp } from "./utility";
//
const displayMain = (() => {
  const create = (object, boolean) => {
    const mainContainer = createElement("div", { class: "mainContainer" });
    const locationContainer = createElement("div", {
      class: "locationContainer",
    });
    const city = createElement("div", { class: "mainCity" });
    const country = createElement("div", { class: "mainCountry" });
    const tempContainer = createElement("div", { class: "mainTempContainer" });
    const highlowContainer = createElement("div", {
      class: "highlowContainer",
    });
    const iconContainer = createElement("div", { class: "iconContainer" });
    const icon = createElement("img", {class: "mainWeatherIcon", "aria-label": "Weather Icon"});
    icon.src = `http://openweathermap.org/img/wn/${object.icon}@4x.png`;
    icon.alt = `${object.description}`;
    const description = createElement("div", { class: "mainDescription" });
    // !!! don't know if I should display icon image BELOW other data, or as backdrop of the mainContainer
    // content
    const tempUnit = whatTemp(boolean);
    city.textContent = object.city;
    country.textContent = object.country;
    tempContainer.textContent = object.temp[tempUnit];
    highlowContainer.textContent = `High: ${object.high[tempUnit]} / Low: ${object.low[tempUnit]}`;
    description.textContent = object.conditions;
    // append it all together
    mainContainer.appendChild(locationContainer);
    locationContainer.appendChild(city);
    locationContainer.appendChild(country);
    mainContainer.appendChild(tempContainer);
    mainContainer.appendChild(highlowContainer);
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

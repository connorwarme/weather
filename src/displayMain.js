import { createElement } from "./utility";
//
const displayMain = (() => {
  const create = (object) => {
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
    const description = createElement("div", { class: "mainDescription" });
    // !!! don't know if I should display icon image BELOW other data, or as backdrop of the mainContainer
    // content
    city.textContent = object.city;
    country.textContent = object.country;
    tempContainer.textContent = object.temp.far;
    let highTemp = "";
    if (object.temp.far > object.high.far) {
      highTemp = object.temp.far;
    } else {
      highTemp = object.high.far;
    }
    highlowContainer.textContent = `High: ${highTemp} / Low: ${object.low.far}`;
    description.textContent = object.description;
    // append it all together
    mainContainer.appendChild(locationContainer);
    locationContainer.appendChild(city);
    locationContainer.appendChild(country);
    mainContainer.appendChild(tempContainer);
    mainContainer.appendChild(highlowContainer);
    mainContainer.appendChild(iconContainer);
    iconContainer.appendChild(description);

    return mainContainer;
  };
  return { create };
})();
const fillMainContainer = (object) => {
  const main = displayMain.create(object);
  return main;
};
export default fillMainContainer;

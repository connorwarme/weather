import { createElement, whatTemp } from "./utility";
// create display
const detailContainer = createElement("div", { class: "detailContainer" });
const detail = (() => {
  const helper = (description, value) => {
    const container = createElement("div", { class: "detailDiv" });
    const label = createElement("div", { class: "detailLabel" });
    const data = createElement("div", { class: "detailData" });
    label.textContent = `${description}`;
    data.textContent = `${value}`;
    container.appendChild(label);
    container.appendChild(data);
    return container;
  };
  const windFn = (value) => {
    // !!! might need a few things - one for wind speed, another for direction
    const wind = helper("WIND", `${value} kmh`);
    // check units
    return wind;
  };
  const visFn = (value) => {
    const vis = helper("VISIBILITY", `${value / 1000} km`);
    return vis;
  };
  const humidFn = (value) => {
    const humid = helper("HUMIDITY", `${value} %`);
    return humid;
  };
  const feelsFn = (specific, value) => {
    const feels = helper("FEELS LIKE", "");
    const feelsDiv = createElement("div", {id: "temp", class: `${value.feelsLike.far} ${value.feelsLike.cel}`});
    feelsDiv.textContent = `${specific}`;
    feels.children[1].appendChild(feelsDiv);
    return feels;
  };
  const popFn = (value) => {
    const pop = helper("PRECIPITATION", `${Math.round(value * 100)} %`);
    const label = createElement("div", { class: "popLabel" });
    label.textContent = "CHANCE OF";
    // !!! not sure if this works
    pop.insertBefore(label, pop.firstChild);
    return pop;
  };
  const precipFn = (value) => {
    let newVal = {
      '3h': 0,
    };
    if (value !== undefined) {
      newVal = value;
    }
    const precip = helper("ACCUMULATION", `${newVal['3h']}mm in last 3h`);
    const label = createElement("div", { class: "precipLabel" });
    label.textContent = "PRECIPITATION";
    // !!! not sure if this works
    precip.insertBefore(label, precip.firstChild);
    return precip;
  };
  const airFn = (value) => {
    const air = helper("AIR QUALITY", `${value}`);
    // !!! might need units clarifier (score out of 100?)
    return air;
  };
  const pressureFn = (value) => {
    const pressure = helper("PRESSURE", `${value}`);
    // !!! need units
    return pressure;
  };
  const sunriseFn = (value) => {
    // !!! need fn to convert value to time (also check for local time..)
    const time = value;
    const rise = helper("SUNRISE", `${time}`);
    return rise;
  };
  const sunsetFn = (value) => {
    // !!! need to run value in a fn, like above
    const time = value;
    const set = helper("SUNSET", `${time}`);
    return set;
  };
  return {
    windFn,
    visFn,
    humidFn,
    feelsFn,
    popFn,
    precipFn,
    airFn,
    pressureFn,
    sunriseFn,
    sunsetFn,
  };
})();
const fillDetailContainer = (input, boolean) => {
  const tempUnit = whatTemp(boolean);
  detailContainer.appendChild(detail.windFn(input.wind.speed));
  detailContainer.appendChild(detail.visFn(input.visibility));
  detailContainer.appendChild(detail.feelsFn(input.feelsLike[tempUnit], input));
  detailContainer.appendChild(detail.humidFn(input.humidity));
  detailContainer.appendChild(detail.popFn(input.pop));
  detailContainer.appendChild(detail.precipFn(input.precip));
  detailContainer.appendChild(detail.airFn(input.airQuality));
  detailContainer.appendChild(detail.pressureFn(input.pressure));
  detailContainer.appendChild(detail.sunriseFn(input.sunrise));
  detailContainer.appendChild(detail.sunsetFn(input.sunset));
  return detailContainer;
};

export default fillDetailContainer;

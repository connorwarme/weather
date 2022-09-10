import { createElement, whatTemp } from "./utility";
import Icon from './icons/arrow.png';
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
    const wind = helper("WIND", `${value.speed} mph`);
    const windIcon = createElement('img', {class: "windIcon"});
    windIcon.src = Icon;
    windIcon.style.transform = `rotate(${value.deg}deg)`;
    windIcon.alt = `Wind direction: ${value.deg}`
    wind.insertBefore(windIcon, wind.children[1])
    // check units !! yikes
    return wind;
  };
  const visFn = (value) => {
    const vis = helper("VISIBILITY", `${value / 1000} mi`);
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
    precip.insertBefore(label, precip.firstChild);
    return precip;
  };
  const airFn = (value) => {
    const air = helper("AIR QUALITY", `${value}`);
    // !!! might need units clarifier (score out of 100?)
    air.children[1].setAttribute('id', `quality${value}`);
    return air;
  };
  const pressureFn = (value) => {
    const pressure = helper("PRESSURE", `${value} hPa`);
    return pressure;
  };
  const sunriseFn = (value) => {
    const time = value;
    const rise = helper("SUNRISE", `${time}`);
    return rise;
  };
  const sunsetFn = (value) => {
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
  detailContainer.appendChild(detail.windFn(input.wind));
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

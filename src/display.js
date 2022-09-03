import createElement from "./utility";
// create display
const detailContainer = createElement('div', {"class": "extraContainer"});
const displaySingle = (input) => {
    const single = createElement('div', {"class": `${input}`});
    single.textContent = `${input}`;
    // !!! might need two lines of content - one for key, one for property
    return single;
}
const extraFactory = (input) => {
    console.log(input.city);
    const array = Object.keys(input);
    array.forEach(index => {
        console.log(`${index} in ${input[index]}`);
        detailContainer.appendChild(displaySingle(input[index]));
    })
    return extraDiv;
    // could use forEach
    // need input to be an array of the object's properties
}
const fillDetailContainer = (input) => {

}
const detail = (() => {
    _helper = (description, value) => {
        const container = createElement('div', {"class": "detailDiv"});
        const label = createElement('h4', {"class": "detailLabel"});
        const data = createElement('h3', {"class": "detailData"});
        label.textContent = `${description}`;
        data.textContent = `${value}`;
        container.appendChild(label);
        container.appendChild(data);
        return container;
    }
    windFn = (value) => {
        // might need a few things - one for wind speed, another for direction
    }
    visFn = (value) => {
        const vis = _helper('VISIBILITY', `${value / 1000} km`);
        return vis;
    }
    humidFn = (value) => {
        const humid = _helper('HUMIDITY', `${value}%`);
        return humid;
    }
    feelsFn = (value) => {
        const feels = _helper('FEELS LIKE', `${value}`);
        return feels;
    }
    popFn = (value) => {
        const pop = _helper('CHANCE OF PRECIP', `${value * 100}%`);
        return pop;
    }
    precipFn = (value) => {
        const precip = _helper('PRECIP ACCUMULATION', `${value}mm in last 3h`);
        return precip;
    }
    airFn = (value) => {
        const air = _helper('AIR QUALITY', `${value}`);
        // !!! might need units clarifier (score out of 100?)
        return air;
    }
    pressureFn = (value) => {
        const pressure = _helper('PRESSURE', `${value}`);
        // !!! need units
        return pressure;
    }
    sunriseFn = (value) => {
        // !!! need fn to convert value to time (also check for local time..)
        const time = value;
        const rise = _helper('SUNRISE', `${time}`);
        return rise;
    }
    sunsetFn = (value) => {
        // !!! need to run value in a fn, like above
        const time = value;
        const set = _helper('SUNSET', `${time}`);
        return set;
    }
})();
// goal: display of extra data (box)
// sunrise, sunset, feels like, pop, precip accum, pressure, airq, vis, wind, humidity 
const obj = {
    // city: "Denver",
    // country: "US",
    // temp: "82",
    // conditions: "Rain",
    // description: "light rain",
    wind: "8",
    visibility: 10000,
    humidity: 28,
    feelsLike: "81",
    pop: "0.47",
    precip3h: "0.13",
    airQuality: "unknown",
    pressure: 1015,
    sunrise: 1662121750,
    sunset: 1662168628,
}
export { extraDiv, extraFactory, obj }
import createElement from "./utility";
// create display
const extraDiv = createElement('div', {"class": "extraContainer"});
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
        extraDiv.appendChild(displaySingle(input[index]));
    })
    return extraDiv;
    // could use forEach
    // need input to be an array of the object's properties
}
// goal: display of extra data (box)
// sunrise, sunset, feels like, pop, precip accum, pressure, airq, vis, wind, humidity 
const obj = {
    city: "Denver",
    country: "US",
    temp: "82",
    conditions: "Rain",
    description: "light rain",
    wind: "8",
    pop: "0.47",
    sunrise: 1662121750,
    sunset: 1662168628,
    humidity: 28,
    feelsLike: "81",
    visibility: 10000,
    precip3h: "0.13",
    airQuality: "unknown",
    pressure: 1015,
}
export { extraDiv, extraFactory, obj }
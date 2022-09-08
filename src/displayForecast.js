import { createElement, time, checkTemp } from "./utility";
//
const create = (() => {
    const container = createElement('div', {class: "forecastContainer"});
    const forecast = (input) => {
        const array = Array.from(input);
        let i = 0;
        array.forEach(index => {
            const card = createElement('div', {class: `card${i}`});
            i += 1;

        })
    }
    const makeCard = (object, collective, card) => {
        const keys = Object.keys(collective);
        keys.forEach(index => {
// make container
// make time div
// make temp div
// make icon div
// make pop div
        })
    }
    const makeTime = (object, input) => {
        const forecastTime = time(input.dt, object.timeZone);
        const timeDiv = createElement('div', {class: "timeDiv"});
        timeDiv.textContent = `${forecastTime}`;
        return timeDiv;
    }
    const makeTemp = (forecastObj, input) => {
        const theTemp = tempFn(forecastObj.main.temp);
        forecastObj.temp = theTemp;
        const tempDiv = createElement('div', {class: "tempDiv"});
        tempDiv.textContent = `${theTemp.far}`;
        return tempDiv;
    }
})();
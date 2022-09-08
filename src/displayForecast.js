import { createElement, time, timeCheck, tempFn } from "./utility";
//
const create = (() => {
    const container = createElement('div', {class: "forecastContainer"});
    
    const makeTime = (object, input) => {
        const forecastTime = time(input.dt, object.timezone);
        const timeDiv = createElement('div', {class: "timeDiv"});
        timeDiv.textContent = `${timeCheck(forecastTime.getHours())}00`;
        return timeDiv;
    }
    const makeTemp = (forecastObj) => {
        const theTemp = tempFn(forecastObj.main.temp);
        forecastObj.temp = theTemp;
        const tempDiv = createElement('div', {class: "tempDiv"});
        tempDiv.textContent = `${theTemp.far}`;
        return tempDiv;
    }
    const makeIcon = () => {
        // !!! need to figure out how to do icons
    }
    const makePop = (forecastObj) => {
        const thePop = forecastObj.pop;
        const popDiv = createElement('div', {class: "popDiv"});
        popDiv.textContent = `${thePop * 100}%`;
        return popDiv;
    }

    const makeCard = (object, collective, card) => {
        const keys = Object.keys(collective);
        keys.forEach(index => {
            const block = createElement('div', {class: "forecastBlock"});
            card.appendChild(block);
            block.appendChild(makeTime(object, collective[index]));
            block.appendChild(makeTemp(collective[index]));
            // !!! need icon here
            block.appendChild(makePop(collective[index]));
        })
    }
    const forecast = (input, object) => {
        const length = Object.keys(input).length;
        let array = [];
        for (let i = 0; i < length; i += 1) {
            array[i] = input[i];
        }
        console.log(array);
        let i = 0;
        array.forEach(index => {
            console.log(index);
            const card = createElement('div', {class: `card${i}`});
            makeCard(object, index, card);
            container.appendChild(card);
            i += 1;
        })
        return container;
    }
    return { forecast }
})();
const fillForecastContainer = (input, object) => {
    console.log(input);
    console.log(object);
    const forecastDiv = create.forecast(input, object);
    return forecastDiv;
}
export default fillForecastContainer;
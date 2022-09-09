import { createElement, time, timeCheck, tempFn, whatTemp } from "./utility";
//
const create = (() => {
    const container = createElement('div', {class: "forecastContainer"});
    
    const makeTime = (object, input) => {
        const forecastTime = time(input.dt, object.timezone);
        const timeDiv = createElement('div', {class: "timeDiv"});
        timeDiv.textContent = `${timeCheck(forecastTime.getHours())}00`;
        return timeDiv;
    }
    const makeTemp = (forecastObj, boolean) => {
        const theTemp = tempFn(forecastObj.main.temp);
        const tempUnit = whatTemp(boolean);
        const tempContainer = createElement('div', {class: "tempDiv"})
        const tempDiv = createElement('div', {id: "temp", class: `${theTemp.far} ${theTemp.cel}`});
        tempDiv.textContent = `${theTemp[tempUnit]}`;
        tempContainer.appendChild(tempDiv);
        return tempContainer;
    }
    const makeIcon = (forecastObj) => {
        const iconDiv = createElement('div', {class: "forecastIconContainer"});
        const icon = createElement('img', {class: "forecastIcon", "aria-label": "Forecast Icon", title: `${forecastObj.weather[0].description}`});
        icon.src = `http://openweathermap.org/img/wn/${forecastObj.weather[0].icon}@2x.png`;
        icon.alt = forecastObj.weather[0].main;
        iconDiv.appendChild(icon);
        return iconDiv;
    }
    const makePop = (forecastObj) => {
        const thePop = forecastObj.pop;
        const popDiv = createElement('div', {class: "popDiv"});
        popDiv.textContent = `${Math.round(thePop * 100)}%`;
        return popDiv;
    }

    const makeCard = (object, collective, card, boolean) => {
        const keys = Object.keys(collective);
        keys.forEach(index => {
            const block = createElement('div', {class: "forecastBlock"});
            card.appendChild(block);
            block.appendChild(makeTime(object, collective[index]));
            block.appendChild(makeTemp(collective[index], boolean));
            // !!! need icon here
            block.appendChild(makeIcon(collective[index]));
            block.appendChild(makePop(collective[index]));
        })
    }
    const forecast = (input, object, boolean) => {
        const length = Object.keys(input).length;
        const array = [];
        for (let i = 0; i < length; i += 1) {
            array[i] = input[i];
        }
        let i = 0;
        array.forEach(index => {
            const card = createElement('div', {class: `card${i}`});
            makeCard(object, index, card, boolean);
            container.appendChild(card);
            i += 1;
        })
        return container;
    }
    return { forecast }
})();
const fillForecastContainer = (input, object, boolean) => {
    console.log(input);
    console.log(object);
    const forecastDiv = create.forecast(input, object, boolean);
    return forecastDiv;
}
export default fillForecastContainer;
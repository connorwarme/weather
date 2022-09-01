import './style.css';
import createElement from './utility';

// get main body in DOM
const body = document.querySelector('body');
const main = createElement('div', {"class": "main"});
body.appendChild(main);
// make input field and submit button
const inputField = createElement('input', {"class": "inputField", "id": "inputField"});
const submitBtn = createElement('button', {"class": "submitBtn", "aria-label": "Submit"});
submitBtn.textContent = "Submit";
main.appendChild(inputField);
main.appendChild(submitBtn);
// submit listener function
const submitFn = () => {
    const userInput = inputField.value;
    console.log(userInput);
    inputField.value = "";
}
submitBtn.addEventListener('click', () => {
    submitFn();
})
//
const apiAction = (() => {
    const currentValue = "917a17f77a60ae96ee081212e94e3f75";
    const getWeatherData = async (location) => {
        const searchLocation = location;
        const searchData = await fetch(`https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${currentValue}`, {
            mode: "cors"
        })
        return searchData;
    }
    const mainFn = (location) => {
        const data = getWeatherData(location);
        console.log(data);
    }
    return { mainFn };
})();
// helper functions
const setAttributes = (element, attributes) => {
    Object.entries(attributes).forEach(([key, value]) => {
        element.setAttribute(key, value);
    })
}
const createElement = (type, attributes) => {
    const newElement = document.createElement(`${type}`);
    if (attributes == null) return newElement;
    setAttributes(newElement, attributes);
    return newElement;
}
// get main div in DOM
const main = document.querySelector('div.main');
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
    const keycode = "917a17f77a60ae96ee081212e94e3f75";
    const getWeatherData = async (location) => {
        const searchLocation = location;
        const searchData = await fetch(`https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${keycode}`, {
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
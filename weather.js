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

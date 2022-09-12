import { createElement } from "./utility";
import apiAction from "./coreFns";
import Icon from "./icons/magnify.svg";

const create = (() => {
    // make temp toggle
    const temp = () => {
        const tempBtnContainer = createElement('div', {class: "tempBtnContainer"});
        const tempToggle = createElement('div', {class: "tempToggle"});
        tempToggle.textContent = `°F`;
        tempToggle.setAttribute('id', 'far');
        tempBtnContainer.appendChild(tempToggle);
        return tempBtnContainer;
    }
    // toggle on page
    const toggleDisplayUnits = (i) => {
        const array = Array.from(document.querySelectorAll('div#temp'));
        if (array !== undefined) {
            array.forEach(index => {
            const options = Array.from(index.classList);
            index.textContent = options[i];
        })
    }}    
    let tempUnit = false;
    // toggle function
    const toggleFn = (tempDiv) => {
        if (!tempUnit) {
            tempDiv.textContent = `°C`;
            toggleDisplayUnits(1);
            tempDiv.setAttribute('id', "cel");
        } else {
            tempDiv.textContent = `°F`;
            toggleDisplayUnits(0);
            tempDiv.setAttribute('id', "far");
        }
        tempUnit = !tempUnit;
        }
    // submit listener function
    const submitFn = (input, mainDiv) => {
        const userInput = input.value;
        apiAction.mainFn(userInput, tempUnit, mainDiv);
        input.value = "";
    };
    const initial = () => {
        const main = createElement("div", { class: "main" });
        // make input field and submit button
        const inputContainer = createElement("div", { class: "inputContainer" });
        const inputSearchContainer = createElement('div', {class: "inputSearch"});
        const inputField = createElement("input", {
        class: "inputField",
        id: "inputField",
        "aria-label": "Input Location",
        title: "Format as: 'City', 'City, State', OR 'City, Country'",
        "placeholder": "Search location...",
        });
        const submitBtn = createElement("button", {
        class: "submitBtn",
        "aria-label": "Submit",
        });
        const searchIcon = createElement('img', {class: "searchIcon"});
        searchIcon.src = Icon;
        searchIcon.alt = `Search`;
        inputContainer.appendChild(inputSearchContainer);
        inputSearchContainer.appendChild(inputField);
        inputSearchContainer.appendChild(submitBtn);
        submitBtn.appendChild(searchIcon);
        inputContainer.appendChild(temp());
        main.appendChild(inputContainer);
        return main;
    }
    return { initial, temp, submitFn, toggleFn }
})();
// 
const fillSearchContainer = () => {
    const main = create.initial();
    const inputField = main.children[0].children[0].children[0];
    const searchBtn = main.children[0].children[0].children[1];
    const tempToggle = main.children[0].children[1].children[0];

    // add listeners
    searchBtn.addEventListener("click", () => {
        create.submitFn(inputField, main);
    });
    tempToggle.addEventListener('click', () => {
        create.toggleFn(tempToggle);
        })
    return main;
}
//
export default fillSearchContainer;
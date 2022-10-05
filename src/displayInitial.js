import { createElement } from "./utility";
import apiAction from "./coreFns";
import Icon from "./icons/magnify.svg";
import Menu from "./icons/menu.svg";
import Github from './icons/github.svg';
import LinkedIn from './icons/linkedin.svg';

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
        // if a "location not found" error is displayed, hide it
        if (input.parentElement.parentElement.children[3]) {
            input.parentElement.parentElement.children[3].style.display = 'none';
        }
        // take user input location and fetch current conditions and forecast data
        apiAction.mainFn(userInput, tempUnit, mainDiv);
        input.value = "";
    };
    // 
    const resetFont = (array) => {
        array.forEach(index => {
            index.style.fontStyle = 'normal';
        });
    }
    const listFn = (event, parent, displayDiv, style, hideDivArray) => {
        resetFont(Array.from(parent.children[0].children));
        event.target.style.fontStyle = 'italic';
        parent.style.display = 'none';
        displayDiv.style.display = style;
        hideDivArray.forEach(index => {
            index.style.display = 'none';
        });
    }
    const menu = () => {
        const menuContainer = createElement('div', {class: 'menuContainer'});
        const button = createElement('button', {class: 'menuBtn', id: 'menu'});
        const img = createElement('img', {class: "menuIcon"});
        img.src = Menu;
        img.alt = 'Menu';
        const label = createElement('label', {class: 'menuBtnLabel', for: 'menu'});
        const container = createElement('div', {class: 'menuListContainer'});
        const list = createElement('div', {class: 'menuList'});
        const text = createElement('div', {class: 'menuText'});
        text.textContent = 'Please Select:';
        const current = createElement('li', {class: 'menuCurrent'});
        current.textContent = 'Current';
        const detail = createElement('li', {class: 'menuDetail'});
        detail.textContent = 'Details';
        const forecast = createElement('li', {class: 'menuForecast'});
        forecast.textContent = 'Forecast';
        list.appendChild(text);
        list.appendChild(current);
        list.appendChild(detail);
        list.appendChild(forecast);
        menuContainer.appendChild(button);
        button.appendChild(img);
        menuContainer.appendChild(label);
        menuContainer.appendChild(container);
        container.appendChild(list);
        return menuContainer;
    }
    const createFooter = () => {
        const footer = createElement('div', {class: 'footerContainer'});
        const footerBox = createElement('div', {class: "footerBox"});
        const linkContainer = createElement('div', {class: "linkContainer"});
        const gitLink = createElement('a', {"href": "https://github.com/connorwarme", "alt": "Github Profile", "target": "_blank"});
        const gitIcon = createElement('img', {class: 'githubImg'});
        gitIcon.src = Github;
        gitIcon.alt = "Github Profile";
        const linkLink = createElement('a', {"href": "https://www.linkedin.com/in/connor-warme-103a09167", "alt": "LinkedIn Profile", "target": "_blank"});
        const linkIcon = createElement('img', {class: 'linkImg'});
        linkIcon.src = LinkedIn;
        linkIcon.alt = "LinkedIn Profile";
        const textContainer = createElement('div', {class: "textContainer"});
        textContainer.textContent = "Peregrinning Productions";
        // append it all together
        footer.appendChild(footerBox);
        footerBox.appendChild(linkContainer);
        linkContainer.appendChild(gitLink);
        gitLink.appendChild(gitIcon);
        linkContainer.appendChild(linkLink);
        linkLink.appendChild(linkIcon);
        footerBox.appendChild(textContainer);
        return footer;
    }
    const initial = () => {
        const body = createElement("div", { class: "body" });
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
        // 
        const main = createElement('div', {class: 'main'});
        inputContainer.appendChild(menu());
        inputContainer.appendChild(inputSearchContainer);
        inputSearchContainer.appendChild(inputField);
        inputSearchContainer.appendChild(submitBtn);
        submitBtn.appendChild(searchIcon);
        inputContainer.appendChild(temp());
        body.appendChild(inputContainer);
        body.appendChild(main);
        body.appendChild(createFooter());
        return body;
    }
    return { initial, temp, listFn, submitFn, toggleFn }
})();
// 
const fillSearchContainer = () => {
    const body = create.initial();
    const menu = body.children[0].children[0];
    const menuList = menu.children[2];
    const main = body.children[1];
    const inputField = body.children[0].children[1].children[0];
    const searchBtn = body.children[0].children[1].children[1];
    const tempToggle = body.children[0].children[2].children[0];

    // add listeners
    menu.children[0].addEventListener('click', () => {
        menuList.style.display = 'flex';
    });
    menuList.children[0].children[1].addEventListener('click', (e) => {
        create.listFn(e, menuList, main.children[1], 'flex', [main.children[0], main.children[2]]);
    });
    menuList.children[0].children[2].addEventListener('click', (e) => {
        create.listFn(e, menuList, main.children[0], 'grid', [main.children[1], main.children[2]]);
    });
    menuList.children[0].children[3].addEventListener('click', (e) => {
        create.listFn(e, menuList, main.children[2], 'grid', [main.children[0], main.children[1]]);
    });
    searchBtn.addEventListener("click", () => {
        create.submitFn(inputField, main);
    });
    tempToggle.addEventListener('click', () => {
        create.toggleFn(tempToggle);
        })
    return body;
}
//
export default fillSearchContainer;
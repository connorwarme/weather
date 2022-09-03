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
export { extraDiv, extraFactory }
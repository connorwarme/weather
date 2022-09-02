import createElement from "./utility";
// create display
const extraData = () => {
    const extraDiv = createElement('div', {"class": "extraContainer"});
    return extraDiv;
}
const extraFactory = (input) => {
    for (let i = 0; i < input.length; i += 1) {
        console.log(input[i]);
    }
    // could use forEach
    // need input to be an array of the object's properties
}
const displaySingle = (input) => {
    const single = createElement('div', {"class": `${input}`});
    single.textContent = `${input}`;
    // !!! might need two lines of content - one for key, one for property
    return single;
}
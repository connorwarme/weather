import { createElement, dateFn } from "./utility";

// functions to run on the data, give obj proper values
// const actions = (() => {
//     const sortDays = (input)
// })();
const returnDate = (object, item) => {
    const day = item.dt_txt;
    const date = new Date(day);
    date.setMinutes(date.getMinutes() + (object.city.timezone / 60));
    return date;
}
const sortDays = (object) => {
    const date = returnDate(object, object.list[0]);
    const dday = date.getDate();
    const array = object.list;
    const collection = {
        0: {},
        1: {},
        2: {},
        3: {},
        4: {},
        5: {},
    };
    array.forEach(index => {
        const indexDate = returnDate(object, index);
        const i = indexDate.getDate() - dday;
        const value = indexDate.getHours();
        collection[i][value] = (index);
    });
    return collection;
}
const findHighLow = (object) => {
    const array = Object.keys(object);
    let high = object[array[0]].main.temp;
    let low = object[array[0]].main.temp;
    for (let i = 0; i < array.length; i += 1) {
        const temp = object[array[i]].main.temp;
        console.log(temp);
        if (temp > high) {
            high = temp;
        }
        if (temp < low) {
            low = temp;
        }
    }
    return [high, low];
}

export { sortDays, findHighLow };
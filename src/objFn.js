import { differenceInCalendarDays } from "date-fns";

// functions to run on the data, give obj proper values
const returnDate = (object, item) => {
    const day = item.dt_txt;
    const date = new Date(day);
    date.setMinutes(date.getMinutes() + (object.city.timezone / 60));
    return date;
}
const sortDays = (object) => {
    const date = returnDate(object, object.list[0]);
    console.log(date);
    const array = object.list;
    const collection = {
        // !!!
        0: {},
        1: {},
        2: {},
        3: {},
        4: {},
        5: {},
    };
    array.forEach(index => {
        const indexDate = returnDate(object, index);
        console.log(indexDate);
        let i = 0;
        if (differenceInCalendarDays(indexDate, date)) {
            i = differenceInCalendarDays(indexDate, date)
        };
        console.log(i);
        const value = indexDate.getHours();
        collection[i][value] = index;
    });
    return collection;
}
const findHighLow = (object) => {
    const array = Object.keys(object);
    let high = object[array[0]].main.temp;
    let low = object[array[0]].main.temp;
    for (let i = 0; i < array.length; i += 1) {
        const {temp} = object[array[i]].main;
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
import { fromUnixTime } from 'date-fns';
import { formatInTimeZone, toDate } from 'date-fns-tz';
// DOM functions
// helper functions to create DOM element and add attributes
// is there a more effective/efficient way to do this?!
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
// time -> transform unix to standard
const time = (input, offset) => {
    const localDate = fromUnixTime(input);
    const localOffset = localDate.getTimezoneOffset();
    console.log(localOffset);
    localDate.setMinutes(localDate.getMinutes() + localOffset);
    console.log(localDate);
    localDate.setMinutes(localDate.getMinutes() + (offset / 60));
    console.log(localDate);
    const value = `${localDate.getHours()}:${localDate.getMinutes()}`;
    return value;
    // const hours = date.getHours();
    // const minutes = date.getMinutes();
    // const timeDisplay = `${hours}:${minutes}`;
    // console.log(timeDisplay);
    // const parsedDate = toDate(date.toISOString());
    // console.log(parsedDate);
    // const attempt = formatInTimeZone(date, '-360', 'yyyy-MM-dd HH:mm:ss zzz');
    // console.log(attempt);
    // return timeDisplay;
    // needs a few steps
    // 1) find local time (of user)
    // 2) convert unix time to local time
    // return newTime
}
// temp -> convert F to C
// planning to have both in an object
const tempFn = (input) => {
    const tempObj = {
        far: Math.round(Number(input)),
        cel: Math.round((Number(input) - 32) * (5/9)),
    }
    return tempObj;
}
export { createElement, tempFn, time };
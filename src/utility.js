import { fromUnixTime } from "date-fns";
// DOM functions
// helper functions to create DOM element and add attributes
// is there a more effective/efficient way to do this?!
const setAttributes = (element, attributes) => {
  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
};
const createElement = (type, attributes) => {
  const newElement = document.createElement(`${type}`);
  if (attributes == null) return newElement;
  setAttributes(newElement, attributes);
  return newElement;
};
// time -> transform unix to local date/time at provided location
const time = (input, offset) => {
  const localDate = fromUnixTime(input);
  const localOffset = localDate.getTimezoneOffset();
  localDate.setMinutes(localDate.getMinutes() + localOffset);
  localDate.setMinutes(localDate.getMinutes() + offset / 60);
  return localDate;
};
// for time displays: if value is less than 10, add a 0 in front (e.g. '09:00')
const timeCheck = (input) => {
  let checked = input;
  if (input < 10) {
    checked = `0${input}`;
  }
  return checked;
};
const hourMin = (input, offset) => {
  const value = time(input, offset);
  const hours = timeCheck(value.getHours());
  const minutes = timeCheck(value.getMinutes());
  return `${hours}:${minutes}`;
};
const dateFn = (input, offset) => time(input, offset);
// receive index position of day, return value (aka the day of the week)
const getTheDay = (input) => {
  let value = input;
  if (input > 6) {
    value = input - 7;
  }
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[value];
};
// temp -> convert F to C
// planning to have both in an object
const tempFn = (input) => {
  const tempObj = {
    far: Math.round(Number(input)),
    cel: Math.round((Number(input) - 32) * (5 / 9)),
  };
  return tempObj;
};
// display C or F?
const whatTemp = (boolean) => {
  let value = "cel";
  if (boolean === false) {
    value = "far";
  }
  return value;
};
// debug: sometimes current temp is higher or lower than forecast high/low
// this check fn fixes it
const checkTemp = (current, high, low) => {
  let hi = high;
  let lo = low;
  if (current > high) {
    hi = current;
  }
  if (current < low) {
    lo = low;
  }
  return [hi, lo];
};
export {
  createElement,
  tempFn,
  whatTemp,
  checkTemp,
  hourMin,
  dateFn,
  getTheDay,
  time,
  timeCheck,
};

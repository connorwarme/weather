import { differenceInCalendarDays } from "date-fns";
// functions to run on the data, give obj proper values
// return the date, with proper time for provided location
// Safari required a slightly different format to work, hence '.replace(/ /g, "T");'
const returnDate = (object, item) => {
  const day = item.dt_txt;
  const date = new Date(day.replace(/ /g, "T"));
  console.log(date);
  date.setMinutes(date.getMinutes() + object.city.timezone / 60);
  console.log(date);
  return date;
};
// take forecast object (40 entries) and separate by day
// relied on date-fns' 'differenceInCalendarDays' to distinguish days
const sortDays = (object) => {
  const date = returnDate(object, object.list[0]);
  const array = object.list;
  const collection = {
    0: {},
    1: {},
    2: {},
    3: {},
    4: {},
    5: {},
  };
  array.forEach((index) => {
    const indexDate = returnDate(object, index);
    let i = 0;
    if (differenceInCalendarDays(indexDate, date)) {
      i = differenceInCalendarDays(indexDate, date);
    }
    const value = indexDate.getHours();
    collection[i][value] = index;
  });
  return collection;
};
// create a way of distinguishing the high and low temps on a given day
const findHighLow = (object) => {
  const array = Object.keys(object);
  let high = object[array[0]].main.temp;
  let low = object[array[0]].main.temp;
  for (let i = 0; i < array.length; i += 1) {
    const { temp } = object[array[i]].main;
    if (temp > high) {
      high = temp;
    }
    if (temp < low) {
      low = temp;
    }
  }
  return [high, low];
};

export { sortDays, findHighLow };

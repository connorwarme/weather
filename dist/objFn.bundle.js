/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/objFn.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "findHighLow": () => (/* binding */ findHighLow),
/* harmony export */   "sortDays": () => (/* binding */ sortDays)
/* harmony export */ });

// functions to run on the data, give obj proper values
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


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JqRm4uYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsYUFBYTtBQUNiLGFBQWE7QUFDYixhQUFhO0FBQ2IsYUFBYTtBQUNiLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGtCQUFrQjtBQUN0QyxlQUFlLE1BQU07QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9vYmpGbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIlxuLy8gZnVuY3Rpb25zIHRvIHJ1biBvbiB0aGUgZGF0YSwgZ2l2ZSBvYmogcHJvcGVyIHZhbHVlc1xuY29uc3QgcmV0dXJuRGF0ZSA9IChvYmplY3QsIGl0ZW0pID0+IHtcbiAgICBjb25zdCBkYXkgPSBpdGVtLmR0X3R4dDtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoZGF5KTtcbiAgICBkYXRlLnNldE1pbnV0ZXMoZGF0ZS5nZXRNaW51dGVzKCkgKyAob2JqZWN0LmNpdHkudGltZXpvbmUgLyA2MCkpO1xuICAgIHJldHVybiBkYXRlO1xufVxuY29uc3Qgc29ydERheXMgPSAob2JqZWN0KSA9PiB7XG4gICAgY29uc3QgZGF0ZSA9IHJldHVybkRhdGUob2JqZWN0LCBvYmplY3QubGlzdFswXSk7XG4gICAgY29uc3QgZGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xuICAgIGNvbnN0IGFycmF5ID0gb2JqZWN0Lmxpc3Q7XG4gICAgY29uc3QgY29sbGVjdGlvbiA9IHtcbiAgICAgICAgMDoge30sXG4gICAgICAgIDE6IHt9LFxuICAgICAgICAyOiB7fSxcbiAgICAgICAgMzoge30sXG4gICAgICAgIDQ6IHt9LFxuICAgICAgICA1OiB7fSxcbiAgICB9O1xuICAgIGFycmF5LmZvckVhY2goaW5kZXggPT4ge1xuICAgICAgICBjb25zdCBpbmRleERhdGUgPSByZXR1cm5EYXRlKG9iamVjdCwgaW5kZXgpO1xuICAgICAgICBjb25zdCBpID0gaW5kZXhEYXRlLmdldERhdGUoKSAtIGRkYXk7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gaW5kZXhEYXRlLmdldEhvdXJzKCk7XG4gICAgICAgIGNvbGxlY3Rpb25baV1bdmFsdWVdID0gKGluZGV4KTtcbiAgICB9KTtcbiAgICByZXR1cm4gY29sbGVjdGlvbjtcbn1cbmNvbnN0IGZpbmRIaWdoTG93ID0gKG9iamVjdCkgPT4ge1xuICAgIGNvbnN0IGFycmF5ID0gT2JqZWN0LmtleXMob2JqZWN0KTtcbiAgICBsZXQgaGlnaCA9IG9iamVjdFthcnJheVswXV0ubWFpbi50ZW1wO1xuICAgIGxldCBsb3cgPSBvYmplY3RbYXJyYXlbMF1dLm1haW4udGVtcDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IHt0ZW1wfSA9IG9iamVjdFthcnJheVtpXV0ubWFpbjtcbiAgICAgICAgY29uc29sZS5sb2codGVtcCk7XG4gICAgICAgIGlmICh0ZW1wID4gaGlnaCkge1xuICAgICAgICAgICAgaGlnaCA9IHRlbXA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRlbXAgPCBsb3cpIHtcbiAgICAgICAgICAgIGxvdyA9IHRlbXA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFtoaWdoLCBsb3ddO1xufVxuXG5leHBvcnQgeyBzb3J0RGF5cywgZmluZEhpZ2hMb3cgfTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
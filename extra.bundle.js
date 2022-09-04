/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/utility.js":
/*!************************!*\
  !*** ./src/utility.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
const time = (input) => {
    console.log(input);
    // needs a few steps
    // 1) find local time (of user)
    // 2) convert unix time to local time
    // return newTime
}
// temp -> convert F to C
// planning to have both in an object
const temp = (input) => {
    const tempObj = {
        far: Number(input),
        cel: Math.round(((Number(input) - 32) * (5/9))),
    }
    return tempObj;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createElement);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./src/displayExtra.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fillDetailContainer": () => (/* binding */ fillDetailContainer),
/* harmony export */   "obj": () => (/* binding */ obj)
/* harmony export */ });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility */ "./src/utility.js");

// create display
const detailContainer = (0,_utility__WEBPACK_IMPORTED_MODULE_0__["default"])("div", { class: "detailContainer" });
// const displaySingle = (input) => {
//     const single = createElement('div', {"class": `${input}`});
//     single.textContent = `${input}`;
//     !!! might need two lines of content - one for key, one for property
//     return single;
// }
// const extraFactory = (input) => {
//     console.log(input.city);
//     const array = Object.keys(input);
//     array.forEach(index => {
//         console.log(`${index} in ${input[index]}`);
//         detailContainer.appendChild(displaySingle(input[index]));
//     })
//     return extraDiv;
// need input to be an array of the object's properties
// }
const detail = (() => {
  const helper = (description, value) => {
    const container = (0,_utility__WEBPACK_IMPORTED_MODULE_0__["default"])("div", { class: "detailDiv" });
    const label = (0,_utility__WEBPACK_IMPORTED_MODULE_0__["default"])("div", { class: "detailLabel" });
    const data = (0,_utility__WEBPACK_IMPORTED_MODULE_0__["default"])("div", { class: "detailData" });
    label.textContent = `${description}`;
    data.textContent = `${value}`;
    container.appendChild(label);
    container.appendChild(data);
    return container;
  };
  const windFn = (value) => {
    // !!! might need a few things - one for wind speed, another for direction
    const wind = helper("WIND", `${value}km/h`);
    // check units
    return wind;
  };
  const visFn = (value) => {
    const vis = helper("VISIBILITY", `${value / 1000} km`);
    return vis;
  };
  const humidFn = (value) => {
    const humid = helper("HUMIDITY", `${value}%`);
    return humid;
  };
  const feelsFn = (value) => {
    const feels = helper("FEELS LIKE", `${value}`);
    return feels;
  };
  const popFn = (value) => {
    const pop = helper("PRECIPITATION", `${value * 100}%`);
    const label = (0,_utility__WEBPACK_IMPORTED_MODULE_0__["default"])("div", { class: "popLabel" });
    label.textContent = "CHANCE OF";
    // !!! not sure if this works
    pop.insertBefore(label, pop.firstChild);
    return pop;
  };
  const precipFn = (value) => {
    const precip = helper("ACCUMULATION", `${value}mm in last 3h`);
    const label = (0,_utility__WEBPACK_IMPORTED_MODULE_0__["default"])("div", { class: "precipLabel" });
    label.textContent = "PRECIPITATION";
    // !!! not sure if this works
    precip.insertBefore(label, precip.firstChild);
    return precip;
  };
  const airFn = (value) => {
    const air = helper("AIR QUALITY", `${value}`);
    // !!! might need units clarifier (score out of 100?)
    return air;
  };
  const pressureFn = (value) => {
    const pressure = helper("PRESSURE", `${value}`);
    // !!! need units
    return pressure;
  };
  const sunriseFn = (value) => {
    // !!! need fn to convert value to time (also check for local time..)
    const time = value;
    const rise = helper("SUNRISE", `${time}`);
    return rise;
  };
  const sunsetFn = (value) => {
    // !!! need to run value in a fn, like above
    const time = value;
    const set = helper("SUNSET", `${time}`);
    return set;
  };
  return {
    windFn,
    visFn,
    humidFn,
    feelsFn,
    popFn,
    precipFn,
    airFn,
    pressureFn,
    sunriseFn,
    sunsetFn,
  };
})();
const fillDetailContainer = (input) => {
  console.log(input);
  detailContainer.appendChild(detail.windFn(input.wind));
  detailContainer.appendChild(detail.visFn(input.visibility));
  detailContainer.appendChild(detail.feelsFn(input.feelsLike));
  detailContainer.appendChild(detail.humidFn(input.humidity));
  detailContainer.appendChild(detail.popFn(input.pop));
  detailContainer.appendChild(detail.precipFn(input.precip));
  detailContainer.appendChild(detail.airFn(input.airQuality));
  detailContainer.appendChild(detail.pressureFn(input.pressure));
  detailContainer.appendChild(detail.sunriseFn(input.sunrise));
  detailContainer.appendChild(detail.sunsetFn(input.sunset));
  return detailContainer;
};
// goal: display of extra data (box)
// sunrise, sunset, feels like, pop, precip accum, pressure, airq, vis, wind, humidity
const obj = {
  city: "Denver",
  country: "US",
  temp: "82",
  highlow: "85 / 62",
  conditions: "Rain",
  description: "light rain",
  wind: "8",
  visibility: 10000,
  humidity: 28,
  feelsLike: "81",
  pop: "0.47",
  precip: "0.13",
  airQuality: "unknown",
  pressure: 1015,
  sunrise: 1662121750,
  sunset: 1662168628,
};


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0cmEuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxpREFBaUQsS0FBSztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxhQUFhOzs7Ozs7VUMvQjVCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTnNDO0FBQ3RDO0FBQ0Esd0JBQXdCLG9EQUFhLFVBQVUsMEJBQTBCO0FBQ3pFO0FBQ0EsNENBQTRDLFlBQVksTUFBTSxFQUFFO0FBQ2hFLCtCQUErQixNQUFNO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLE9BQU8sS0FBSyxhQUFhO0FBQ25EO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isb0RBQWEsVUFBVSxvQkFBb0I7QUFDakUsa0JBQWtCLG9EQUFhLFVBQVUsc0JBQXNCO0FBQy9ELGlCQUFpQixvREFBYSxVQUFVLHFCQUFxQjtBQUM3RCwyQkFBMkIsWUFBWTtBQUN2QywwQkFBMEIsTUFBTTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsTUFBTTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxjQUFjO0FBQ3REO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxNQUFNO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxNQUFNO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxZQUFZO0FBQ3ZELGtCQUFrQixvREFBYSxVQUFVLG1CQUFtQjtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsTUFBTTtBQUNuRCxrQkFBa0Isb0RBQWEsVUFBVSxzQkFBc0I7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLE1BQU07QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsTUFBTTtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsS0FBSztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLEtBQUs7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNvQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXIvLi9zcmMvdXRpbGl0eS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9kaXNwbGF5RXh0cmEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRE9NIGZ1bmN0aW9uc1xuLy8gaGVscGVyIGZ1bmN0aW9ucyB0byBjcmVhdGUgRE9NIGVsZW1lbnQgYW5kIGFkZCBhdHRyaWJ1dGVzXG4vLyBpcyB0aGVyZSBhIG1vcmUgZWZmZWN0aXZlL2VmZmljaWVudCB3YXkgdG8gZG8gdGhpcz8hXG5jb25zdCBzZXRBdHRyaWJ1dGVzID0gKGVsZW1lbnQsIGF0dHJpYnV0ZXMpID0+IHtcbiAgICBPYmplY3QuZW50cmllcyhhdHRyaWJ1dGVzKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG4gICAgfSlcbn1cbmNvbnN0IGNyZWF0ZUVsZW1lbnQgPSAodHlwZSwgYXR0cmlidXRlcykgPT4ge1xuICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGAke3R5cGV9YCk7XG4gICAgaWYgKGF0dHJpYnV0ZXMgPT0gbnVsbCkgcmV0dXJuIG5ld0VsZW1lbnQ7XG4gICAgc2V0QXR0cmlidXRlcyhuZXdFbGVtZW50LCBhdHRyaWJ1dGVzKTtcbiAgICByZXR1cm4gbmV3RWxlbWVudDtcbn1cbi8vIHRpbWUgLT4gdHJhbnNmb3JtIHVuaXggdG8gc3RhbmRhcmRcbmNvbnN0IHRpbWUgPSAoaW5wdXQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhpbnB1dCk7XG4gICAgLy8gbmVlZHMgYSBmZXcgc3RlcHNcbiAgICAvLyAxKSBmaW5kIGxvY2FsIHRpbWUgKG9mIHVzZXIpXG4gICAgLy8gMikgY29udmVydCB1bml4IHRpbWUgdG8gbG9jYWwgdGltZVxuICAgIC8vIHJldHVybiBuZXdUaW1lXG59XG4vLyB0ZW1wIC0+IGNvbnZlcnQgRiB0byBDXG4vLyBwbGFubmluZyB0byBoYXZlIGJvdGggaW4gYW4gb2JqZWN0XG5jb25zdCB0ZW1wID0gKGlucHV0KSA9PiB7XG4gICAgY29uc3QgdGVtcE9iaiA9IHtcbiAgICAgICAgZmFyOiBOdW1iZXIoaW5wdXQpLFxuICAgICAgICBjZWw6IE1hdGgucm91bmQoKChOdW1iZXIoaW5wdXQpIC0gMzIpICogKDUvOSkpKSxcbiAgICB9XG4gICAgcmV0dXJuIHRlbXBPYmo7XG59XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVFbGVtZW50OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSBcIi4vdXRpbGl0eVwiO1xuLy8gY3JlYXRlIGRpc3BsYXlcbmNvbnN0IGRldGFpbENvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJkZXRhaWxDb250YWluZXJcIiB9KTtcbi8vIGNvbnN0IGRpc3BsYXlTaW5nbGUgPSAoaW5wdXQpID0+IHtcbi8vICAgICBjb25zdCBzaW5nbGUgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7XCJjbGFzc1wiOiBgJHtpbnB1dH1gfSk7XG4vLyAgICAgc2luZ2xlLnRleHRDb250ZW50ID0gYCR7aW5wdXR9YDtcbi8vICAgICAhISEgbWlnaHQgbmVlZCB0d28gbGluZXMgb2YgY29udGVudCAtIG9uZSBmb3Iga2V5LCBvbmUgZm9yIHByb3BlcnR5XG4vLyAgICAgcmV0dXJuIHNpbmdsZTtcbi8vIH1cbi8vIGNvbnN0IGV4dHJhRmFjdG9yeSA9IChpbnB1dCkgPT4ge1xuLy8gICAgIGNvbnNvbGUubG9nKGlucHV0LmNpdHkpO1xuLy8gICAgIGNvbnN0IGFycmF5ID0gT2JqZWN0LmtleXMoaW5wdXQpO1xuLy8gICAgIGFycmF5LmZvckVhY2goaW5kZXggPT4ge1xuLy8gICAgICAgICBjb25zb2xlLmxvZyhgJHtpbmRleH0gaW4gJHtpbnB1dFtpbmRleF19YCk7XG4vLyAgICAgICAgIGRldGFpbENvbnRhaW5lci5hcHBlbmRDaGlsZChkaXNwbGF5U2luZ2xlKGlucHV0W2luZGV4XSkpO1xuLy8gICAgIH0pXG4vLyAgICAgcmV0dXJuIGV4dHJhRGl2O1xuLy8gbmVlZCBpbnB1dCB0byBiZSBhbiBhcnJheSBvZiB0aGUgb2JqZWN0J3MgcHJvcGVydGllc1xuLy8gfVxuY29uc3QgZGV0YWlsID0gKCgpID0+IHtcbiAgY29uc3QgaGVscGVyID0gKGRlc2NyaXB0aW9uLCB2YWx1ZSkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJkZXRhaWxEaXZcIiB9KTtcbiAgICBjb25zdCBsYWJlbCA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJkZXRhaWxMYWJlbFwiIH0pO1xuICAgIGNvbnN0IGRhdGEgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwiZGV0YWlsRGF0YVwiIH0pO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gYCR7ZGVzY3JpcHRpb259YDtcbiAgICBkYXRhLnRleHRDb250ZW50ID0gYCR7dmFsdWV9YDtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRhKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xuICB9O1xuICBjb25zdCB3aW5kRm4gPSAodmFsdWUpID0+IHtcbiAgICAvLyAhISEgbWlnaHQgbmVlZCBhIGZldyB0aGluZ3MgLSBvbmUgZm9yIHdpbmQgc3BlZWQsIGFub3RoZXIgZm9yIGRpcmVjdGlvblxuICAgIGNvbnN0IHdpbmQgPSBoZWxwZXIoXCJXSU5EXCIsIGAke3ZhbHVlfWttL2hgKTtcbiAgICAvLyBjaGVjayB1bml0c1xuICAgIHJldHVybiB3aW5kO1xuICB9O1xuICBjb25zdCB2aXNGbiA9ICh2YWx1ZSkgPT4ge1xuICAgIGNvbnN0IHZpcyA9IGhlbHBlcihcIlZJU0lCSUxJVFlcIiwgYCR7dmFsdWUgLyAxMDAwfSBrbWApO1xuICAgIHJldHVybiB2aXM7XG4gIH07XG4gIGNvbnN0IGh1bWlkRm4gPSAodmFsdWUpID0+IHtcbiAgICBjb25zdCBodW1pZCA9IGhlbHBlcihcIkhVTUlESVRZXCIsIGAke3ZhbHVlfSVgKTtcbiAgICByZXR1cm4gaHVtaWQ7XG4gIH07XG4gIGNvbnN0IGZlZWxzRm4gPSAodmFsdWUpID0+IHtcbiAgICBjb25zdCBmZWVscyA9IGhlbHBlcihcIkZFRUxTIExJS0VcIiwgYCR7dmFsdWV9YCk7XG4gICAgcmV0dXJuIGZlZWxzO1xuICB9O1xuICBjb25zdCBwb3BGbiA9ICh2YWx1ZSkgPT4ge1xuICAgIGNvbnN0IHBvcCA9IGhlbHBlcihcIlBSRUNJUElUQVRJT05cIiwgYCR7dmFsdWUgKiAxMDB9JWApO1xuICAgIGNvbnN0IGxhYmVsID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcInBvcExhYmVsXCIgfSk7XG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBcIkNIQU5DRSBPRlwiO1xuICAgIC8vICEhISBub3Qgc3VyZSBpZiB0aGlzIHdvcmtzXG4gICAgcG9wLmluc2VydEJlZm9yZShsYWJlbCwgcG9wLmZpcnN0Q2hpbGQpO1xuICAgIHJldHVybiBwb3A7XG4gIH07XG4gIGNvbnN0IHByZWNpcEZuID0gKHZhbHVlKSA9PiB7XG4gICAgY29uc3QgcHJlY2lwID0gaGVscGVyKFwiQUNDVU1VTEFUSU9OXCIsIGAke3ZhbHVlfW1tIGluIGxhc3QgM2hgKTtcbiAgICBjb25zdCBsYWJlbCA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJwcmVjaXBMYWJlbFwiIH0pO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gXCJQUkVDSVBJVEFUSU9OXCI7XG4gICAgLy8gISEhIG5vdCBzdXJlIGlmIHRoaXMgd29ya3NcbiAgICBwcmVjaXAuaW5zZXJ0QmVmb3JlKGxhYmVsLCBwcmVjaXAuZmlyc3RDaGlsZCk7XG4gICAgcmV0dXJuIHByZWNpcDtcbiAgfTtcbiAgY29uc3QgYWlyRm4gPSAodmFsdWUpID0+IHtcbiAgICBjb25zdCBhaXIgPSBoZWxwZXIoXCJBSVIgUVVBTElUWVwiLCBgJHt2YWx1ZX1gKTtcbiAgICAvLyAhISEgbWlnaHQgbmVlZCB1bml0cyBjbGFyaWZpZXIgKHNjb3JlIG91dCBvZiAxMDA/KVxuICAgIHJldHVybiBhaXI7XG4gIH07XG4gIGNvbnN0IHByZXNzdXJlRm4gPSAodmFsdWUpID0+IHtcbiAgICBjb25zdCBwcmVzc3VyZSA9IGhlbHBlcihcIlBSRVNTVVJFXCIsIGAke3ZhbHVlfWApO1xuICAgIC8vICEhISBuZWVkIHVuaXRzXG4gICAgcmV0dXJuIHByZXNzdXJlO1xuICB9O1xuICBjb25zdCBzdW5yaXNlRm4gPSAodmFsdWUpID0+IHtcbiAgICAvLyAhISEgbmVlZCBmbiB0byBjb252ZXJ0IHZhbHVlIHRvIHRpbWUgKGFsc28gY2hlY2sgZm9yIGxvY2FsIHRpbWUuLilcbiAgICBjb25zdCB0aW1lID0gdmFsdWU7XG4gICAgY29uc3QgcmlzZSA9IGhlbHBlcihcIlNVTlJJU0VcIiwgYCR7dGltZX1gKTtcbiAgICByZXR1cm4gcmlzZTtcbiAgfTtcbiAgY29uc3Qgc3Vuc2V0Rm4gPSAodmFsdWUpID0+IHtcbiAgICAvLyAhISEgbmVlZCB0byBydW4gdmFsdWUgaW4gYSBmbiwgbGlrZSBhYm92ZVxuICAgIGNvbnN0IHRpbWUgPSB2YWx1ZTtcbiAgICBjb25zdCBzZXQgPSBoZWxwZXIoXCJTVU5TRVRcIiwgYCR7dGltZX1gKTtcbiAgICByZXR1cm4gc2V0O1xuICB9O1xuICByZXR1cm4ge1xuICAgIHdpbmRGbixcbiAgICB2aXNGbixcbiAgICBodW1pZEZuLFxuICAgIGZlZWxzRm4sXG4gICAgcG9wRm4sXG4gICAgcHJlY2lwRm4sXG4gICAgYWlyRm4sXG4gICAgcHJlc3N1cmVGbixcbiAgICBzdW5yaXNlRm4sXG4gICAgc3Vuc2V0Rm4sXG4gIH07XG59KSgpO1xuY29uc3QgZmlsbERldGFpbENvbnRhaW5lciA9IChpbnB1dCkgPT4ge1xuICBjb25zb2xlLmxvZyhpbnB1dCk7XG4gIGRldGFpbENvbnRhaW5lci5hcHBlbmRDaGlsZChkZXRhaWwud2luZEZuKGlucHV0LndpbmQpKTtcbiAgZGV0YWlsQ29udGFpbmVyLmFwcGVuZENoaWxkKGRldGFpbC52aXNGbihpbnB1dC52aXNpYmlsaXR5KSk7XG4gIGRldGFpbENvbnRhaW5lci5hcHBlbmRDaGlsZChkZXRhaWwuZmVlbHNGbihpbnB1dC5mZWVsc0xpa2UpKTtcbiAgZGV0YWlsQ29udGFpbmVyLmFwcGVuZENoaWxkKGRldGFpbC5odW1pZEZuKGlucHV0Lmh1bWlkaXR5KSk7XG4gIGRldGFpbENvbnRhaW5lci5hcHBlbmRDaGlsZChkZXRhaWwucG9wRm4oaW5wdXQucG9wKSk7XG4gIGRldGFpbENvbnRhaW5lci5hcHBlbmRDaGlsZChkZXRhaWwucHJlY2lwRm4oaW5wdXQucHJlY2lwKSk7XG4gIGRldGFpbENvbnRhaW5lci5hcHBlbmRDaGlsZChkZXRhaWwuYWlyRm4oaW5wdXQuYWlyUXVhbGl0eSkpO1xuICBkZXRhaWxDb250YWluZXIuYXBwZW5kQ2hpbGQoZGV0YWlsLnByZXNzdXJlRm4oaW5wdXQucHJlc3N1cmUpKTtcbiAgZGV0YWlsQ29udGFpbmVyLmFwcGVuZENoaWxkKGRldGFpbC5zdW5yaXNlRm4oaW5wdXQuc3VucmlzZSkpO1xuICBkZXRhaWxDb250YWluZXIuYXBwZW5kQ2hpbGQoZGV0YWlsLnN1bnNldEZuKGlucHV0LnN1bnNldCkpO1xuICByZXR1cm4gZGV0YWlsQ29udGFpbmVyO1xufTtcbi8vIGdvYWw6IGRpc3BsYXkgb2YgZXh0cmEgZGF0YSAoYm94KVxuLy8gc3VucmlzZSwgc3Vuc2V0LCBmZWVscyBsaWtlLCBwb3AsIHByZWNpcCBhY2N1bSwgcHJlc3N1cmUsIGFpcnEsIHZpcywgd2luZCwgaHVtaWRpdHlcbmNvbnN0IG9iaiA9IHtcbiAgY2l0eTogXCJEZW52ZXJcIixcbiAgY291bnRyeTogXCJVU1wiLFxuICB0ZW1wOiBcIjgyXCIsXG4gIGhpZ2hsb3c6IFwiODUgLyA2MlwiLFxuICBjb25kaXRpb25zOiBcIlJhaW5cIixcbiAgZGVzY3JpcHRpb246IFwibGlnaHQgcmFpblwiLFxuICB3aW5kOiBcIjhcIixcbiAgdmlzaWJpbGl0eTogMTAwMDAsXG4gIGh1bWlkaXR5OiAyOCxcbiAgZmVlbHNMaWtlOiBcIjgxXCIsXG4gIHBvcDogXCIwLjQ3XCIsXG4gIHByZWNpcDogXCIwLjEzXCIsXG4gIGFpclF1YWxpdHk6IFwidW5rbm93blwiLFxuICBwcmVzc3VyZTogMTAxNSxcbiAgc3VucmlzZTogMTY2MjEyMTc1MCxcbiAgc3Vuc2V0OiAxNjYyMTY4NjI4LFxufTtcbmV4cG9ydCB7IGZpbGxEZXRhaWxDb250YWluZXIsIG9iaiB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
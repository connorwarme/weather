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
/* harmony export */   "createElement": () => (/* binding */ createElement),
/* harmony export */   "tempFn": () => (/* binding */ tempFn)
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
const tempFn = (input) => {
    const tempObj = {
        far: Number(input),
        cel: Math.round((Number(input) - 32) * (5/9)),
    }
    return tempObj;
}


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
const detailContainer = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", { class: "detailContainer" });
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
    const container = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", { class: "detailDiv" });
    const label = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", { class: "detailLabel" });
    const data = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", { class: "detailData" });
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
    const label = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", { class: "popLabel" });
    label.textContent = "CHANCE OF";
    // !!! not sure if this works
    pop.insertBefore(label, pop.firstChild);
    return pop;
  };
  const precipFn = (value) => {
    let newVal = 0;
    if (value !== undefined) {
      newVal = value;
    }
    const precip = helper("ACCUMULATION", `${newVal}mm in last 3h`);
    const label = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", { class: "precipLabel" });
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
  detailContainer.appendChild(detail.windFn(input.wind.speed));
  detailContainer.appendChild(detail.visFn(input.visibility));
  detailContainer.appendChild(detail.feelsFn(input.feelsLike.far));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0cmEuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsaURBQWlELEtBQUs7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDOUJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTjBDO0FBQzFDO0FBQ0Esd0JBQXdCLHVEQUFhLFVBQVUsMEJBQTBCO0FBQ3pFO0FBQ0EsNENBQTRDLFlBQVksTUFBTSxFQUFFO0FBQ2hFLCtCQUErQixNQUFNO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLE9BQU8sS0FBSyxhQUFhO0FBQ25EO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsdURBQWEsVUFBVSxvQkFBb0I7QUFDakUsa0JBQWtCLHVEQUFhLFVBQVUsc0JBQXNCO0FBQy9ELGlCQUFpQix1REFBYSxVQUFVLHFCQUFxQjtBQUM3RCwyQkFBMkIsWUFBWTtBQUN2QywwQkFBMEIsTUFBTTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsTUFBTTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxjQUFjO0FBQ3REO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxNQUFNO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxNQUFNO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxZQUFZO0FBQ3ZELGtCQUFrQix1REFBYSxVQUFVLG1CQUFtQjtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxPQUFPO0FBQ3BELGtCQUFrQix1REFBYSxVQUFVLHNCQUFzQjtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsTUFBTTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxNQUFNO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxLQUFLO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsS0FBSztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ29DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy91dGlsaXR5LmpzIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2Rpc3BsYXlFeHRyYS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBET00gZnVuY3Rpb25zXG4vLyBoZWxwZXIgZnVuY3Rpb25zIHRvIGNyZWF0ZSBET00gZWxlbWVudCBhbmQgYWRkIGF0dHJpYnV0ZXNcbi8vIGlzIHRoZXJlIGEgbW9yZSBlZmZlY3RpdmUvZWZmaWNpZW50IHdheSB0byBkbyB0aGlzPyFcbmNvbnN0IHNldEF0dHJpYnV0ZXMgPSAoZWxlbWVudCwgYXR0cmlidXRlcykgPT4ge1xuICAgIE9iamVjdC5lbnRyaWVzKGF0dHJpYnV0ZXMpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcbiAgICB9KVxufVxuY29uc3QgY3JlYXRlRWxlbWVudCA9ICh0eXBlLCBhdHRyaWJ1dGVzKSA9PiB7XG4gICAgY29uc3QgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYCR7dHlwZX1gKTtcbiAgICBpZiAoYXR0cmlidXRlcyA9PSBudWxsKSByZXR1cm4gbmV3RWxlbWVudDtcbiAgICBzZXRBdHRyaWJ1dGVzKG5ld0VsZW1lbnQsIGF0dHJpYnV0ZXMpO1xuICAgIHJldHVybiBuZXdFbGVtZW50O1xufVxuLy8gdGltZSAtPiB0cmFuc2Zvcm0gdW5peCB0byBzdGFuZGFyZFxuY29uc3QgdGltZSA9IChpbnB1dCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGlucHV0KTtcbiAgICAvLyBuZWVkcyBhIGZldyBzdGVwc1xuICAgIC8vIDEpIGZpbmQgbG9jYWwgdGltZSAob2YgdXNlcilcbiAgICAvLyAyKSBjb252ZXJ0IHVuaXggdGltZSB0byBsb2NhbCB0aW1lXG4gICAgLy8gcmV0dXJuIG5ld1RpbWVcbn1cbi8vIHRlbXAgLT4gY29udmVydCBGIHRvIENcbi8vIHBsYW5uaW5nIHRvIGhhdmUgYm90aCBpbiBhbiBvYmplY3RcbmNvbnN0IHRlbXBGbiA9IChpbnB1dCkgPT4ge1xuICAgIGNvbnN0IHRlbXBPYmogPSB7XG4gICAgICAgIGZhcjogTnVtYmVyKGlucHV0KSxcbiAgICAgICAgY2VsOiBNYXRoLnJvdW5kKChOdW1iZXIoaW5wdXQpIC0gMzIpICogKDUvOSkpLFxuICAgIH1cbiAgICByZXR1cm4gdGVtcE9iajtcbn1cbmV4cG9ydCB7IGNyZWF0ZUVsZW1lbnQsIHRlbXBGbiB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuL3V0aWxpdHlcIjtcbi8vIGNyZWF0ZSBkaXNwbGF5XG5jb25zdCBkZXRhaWxDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwiZGV0YWlsQ29udGFpbmVyXCIgfSk7XG4vLyBjb25zdCBkaXNwbGF5U2luZ2xlID0gKGlucHV0KSA9PiB7XG4vLyAgICAgY29uc3Qgc2luZ2xlID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge1wiY2xhc3NcIjogYCR7aW5wdXR9YH0pO1xuLy8gICAgIHNpbmdsZS50ZXh0Q29udGVudCA9IGAke2lucHV0fWA7XG4vLyAgICAgISEhIG1pZ2h0IG5lZWQgdHdvIGxpbmVzIG9mIGNvbnRlbnQgLSBvbmUgZm9yIGtleSwgb25lIGZvciBwcm9wZXJ0eVxuLy8gICAgIHJldHVybiBzaW5nbGU7XG4vLyB9XG4vLyBjb25zdCBleHRyYUZhY3RvcnkgPSAoaW5wdXQpID0+IHtcbi8vICAgICBjb25zb2xlLmxvZyhpbnB1dC5jaXR5KTtcbi8vICAgICBjb25zdCBhcnJheSA9IE9iamVjdC5rZXlzKGlucHV0KTtcbi8vICAgICBhcnJheS5mb3JFYWNoKGluZGV4ID0+IHtcbi8vICAgICAgICAgY29uc29sZS5sb2coYCR7aW5kZXh9IGluICR7aW5wdXRbaW5kZXhdfWApO1xuLy8gICAgICAgICBkZXRhaWxDb250YWluZXIuYXBwZW5kQ2hpbGQoZGlzcGxheVNpbmdsZShpbnB1dFtpbmRleF0pKTtcbi8vICAgICB9KVxuLy8gICAgIHJldHVybiBleHRyYURpdjtcbi8vIG5lZWQgaW5wdXQgdG8gYmUgYW4gYXJyYXkgb2YgdGhlIG9iamVjdCdzIHByb3BlcnRpZXNcbi8vIH1cbmNvbnN0IGRldGFpbCA9ICgoKSA9PiB7XG4gIGNvbnN0IGhlbHBlciA9IChkZXNjcmlwdGlvbiwgdmFsdWUpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwiZGV0YWlsRGl2XCIgfSk7XG4gICAgY29uc3QgbGFiZWwgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwiZGV0YWlsTGFiZWxcIiB9KTtcbiAgICBjb25zdCBkYXRhID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcImRldGFpbERhdGFcIiB9KTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGAke2Rlc2NyaXB0aW9ufWA7XG4gICAgZGF0YS50ZXh0Q29udGVudCA9IGAke3ZhbHVlfWA7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0YSk7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgfTtcbiAgY29uc3Qgd2luZEZuID0gKHZhbHVlKSA9PiB7XG4gICAgLy8gISEhIG1pZ2h0IG5lZWQgYSBmZXcgdGhpbmdzIC0gb25lIGZvciB3aW5kIHNwZWVkLCBhbm90aGVyIGZvciBkaXJlY3Rpb25cbiAgICBjb25zdCB3aW5kID0gaGVscGVyKFwiV0lORFwiLCBgJHt2YWx1ZX1rbS9oYCk7XG4gICAgLy8gY2hlY2sgdW5pdHNcbiAgICByZXR1cm4gd2luZDtcbiAgfTtcbiAgY29uc3QgdmlzRm4gPSAodmFsdWUpID0+IHtcbiAgICBjb25zdCB2aXMgPSBoZWxwZXIoXCJWSVNJQklMSVRZXCIsIGAke3ZhbHVlIC8gMTAwMH0ga21gKTtcbiAgICByZXR1cm4gdmlzO1xuICB9O1xuICBjb25zdCBodW1pZEZuID0gKHZhbHVlKSA9PiB7XG4gICAgY29uc3QgaHVtaWQgPSBoZWxwZXIoXCJIVU1JRElUWVwiLCBgJHt2YWx1ZX0lYCk7XG4gICAgcmV0dXJuIGh1bWlkO1xuICB9O1xuICBjb25zdCBmZWVsc0ZuID0gKHZhbHVlKSA9PiB7XG4gICAgY29uc3QgZmVlbHMgPSBoZWxwZXIoXCJGRUVMUyBMSUtFXCIsIGAke3ZhbHVlfWApO1xuICAgIHJldHVybiBmZWVscztcbiAgfTtcbiAgY29uc3QgcG9wRm4gPSAodmFsdWUpID0+IHtcbiAgICBjb25zdCBwb3AgPSBoZWxwZXIoXCJQUkVDSVBJVEFUSU9OXCIsIGAke3ZhbHVlICogMTAwfSVgKTtcbiAgICBjb25zdCBsYWJlbCA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJwb3BMYWJlbFwiIH0pO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gXCJDSEFOQ0UgT0ZcIjtcbiAgICAvLyAhISEgbm90IHN1cmUgaWYgdGhpcyB3b3Jrc1xuICAgIHBvcC5pbnNlcnRCZWZvcmUobGFiZWwsIHBvcC5maXJzdENoaWxkKTtcbiAgICByZXR1cm4gcG9wO1xuICB9O1xuICBjb25zdCBwcmVjaXBGbiA9ICh2YWx1ZSkgPT4ge1xuICAgIGxldCBuZXdWYWwgPSAwO1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBuZXdWYWwgPSB2YWx1ZTtcbiAgICB9XG4gICAgY29uc3QgcHJlY2lwID0gaGVscGVyKFwiQUNDVU1VTEFUSU9OXCIsIGAke25ld1ZhbH1tbSBpbiBsYXN0IDNoYCk7XG4gICAgY29uc3QgbGFiZWwgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwicHJlY2lwTGFiZWxcIiB9KTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IFwiUFJFQ0lQSVRBVElPTlwiO1xuICAgIC8vICEhISBub3Qgc3VyZSBpZiB0aGlzIHdvcmtzXG4gICAgcHJlY2lwLmluc2VydEJlZm9yZShsYWJlbCwgcHJlY2lwLmZpcnN0Q2hpbGQpO1xuICAgIHJldHVybiBwcmVjaXA7XG4gIH07XG4gIGNvbnN0IGFpckZuID0gKHZhbHVlKSA9PiB7XG4gICAgY29uc3QgYWlyID0gaGVscGVyKFwiQUlSIFFVQUxJVFlcIiwgYCR7dmFsdWV9YCk7XG4gICAgLy8gISEhIG1pZ2h0IG5lZWQgdW5pdHMgY2xhcmlmaWVyIChzY29yZSBvdXQgb2YgMTAwPylcbiAgICByZXR1cm4gYWlyO1xuICB9O1xuICBjb25zdCBwcmVzc3VyZUZuID0gKHZhbHVlKSA9PiB7XG4gICAgY29uc3QgcHJlc3N1cmUgPSBoZWxwZXIoXCJQUkVTU1VSRVwiLCBgJHt2YWx1ZX1gKTtcbiAgICAvLyAhISEgbmVlZCB1bml0c1xuICAgIHJldHVybiBwcmVzc3VyZTtcbiAgfTtcbiAgY29uc3Qgc3VucmlzZUZuID0gKHZhbHVlKSA9PiB7XG4gICAgLy8gISEhIG5lZWQgZm4gdG8gY29udmVydCB2YWx1ZSB0byB0aW1lIChhbHNvIGNoZWNrIGZvciBsb2NhbCB0aW1lLi4pXG4gICAgY29uc3QgdGltZSA9IHZhbHVlO1xuICAgIGNvbnN0IHJpc2UgPSBoZWxwZXIoXCJTVU5SSVNFXCIsIGAke3RpbWV9YCk7XG4gICAgcmV0dXJuIHJpc2U7XG4gIH07XG4gIGNvbnN0IHN1bnNldEZuID0gKHZhbHVlKSA9PiB7XG4gICAgLy8gISEhIG5lZWQgdG8gcnVuIHZhbHVlIGluIGEgZm4sIGxpa2UgYWJvdmVcbiAgICBjb25zdCB0aW1lID0gdmFsdWU7XG4gICAgY29uc3Qgc2V0ID0gaGVscGVyKFwiU1VOU0VUXCIsIGAke3RpbWV9YCk7XG4gICAgcmV0dXJuIHNldDtcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICB3aW5kRm4sXG4gICAgdmlzRm4sXG4gICAgaHVtaWRGbixcbiAgICBmZWVsc0ZuLFxuICAgIHBvcEZuLFxuICAgIHByZWNpcEZuLFxuICAgIGFpckZuLFxuICAgIHByZXNzdXJlRm4sXG4gICAgc3VucmlzZUZuLFxuICAgIHN1bnNldEZuLFxuICB9O1xufSkoKTtcbmNvbnN0IGZpbGxEZXRhaWxDb250YWluZXIgPSAoaW5wdXQpID0+IHtcbiAgY29uc29sZS5sb2coaW5wdXQpO1xuICBkZXRhaWxDb250YWluZXIuYXBwZW5kQ2hpbGQoZGV0YWlsLndpbmRGbihpbnB1dC53aW5kLnNwZWVkKSk7XG4gIGRldGFpbENvbnRhaW5lci5hcHBlbmRDaGlsZChkZXRhaWwudmlzRm4oaW5wdXQudmlzaWJpbGl0eSkpO1xuICBkZXRhaWxDb250YWluZXIuYXBwZW5kQ2hpbGQoZGV0YWlsLmZlZWxzRm4oaW5wdXQuZmVlbHNMaWtlLmZhcikpO1xuICBkZXRhaWxDb250YWluZXIuYXBwZW5kQ2hpbGQoZGV0YWlsLmh1bWlkRm4oaW5wdXQuaHVtaWRpdHkpKTtcbiAgZGV0YWlsQ29udGFpbmVyLmFwcGVuZENoaWxkKGRldGFpbC5wb3BGbihpbnB1dC5wb3ApKTtcbiAgZGV0YWlsQ29udGFpbmVyLmFwcGVuZENoaWxkKGRldGFpbC5wcmVjaXBGbihpbnB1dC5wcmVjaXApKTtcbiAgZGV0YWlsQ29udGFpbmVyLmFwcGVuZENoaWxkKGRldGFpbC5haXJGbihpbnB1dC5haXJRdWFsaXR5KSk7XG4gIGRldGFpbENvbnRhaW5lci5hcHBlbmRDaGlsZChkZXRhaWwucHJlc3N1cmVGbihpbnB1dC5wcmVzc3VyZSkpO1xuICBkZXRhaWxDb250YWluZXIuYXBwZW5kQ2hpbGQoZGV0YWlsLnN1bnJpc2VGbihpbnB1dC5zdW5yaXNlKSk7XG4gIGRldGFpbENvbnRhaW5lci5hcHBlbmRDaGlsZChkZXRhaWwuc3Vuc2V0Rm4oaW5wdXQuc3Vuc2V0KSk7XG4gIHJldHVybiBkZXRhaWxDb250YWluZXI7XG59O1xuLy8gZ29hbDogZGlzcGxheSBvZiBleHRyYSBkYXRhIChib3gpXG4vLyBzdW5yaXNlLCBzdW5zZXQsIGZlZWxzIGxpa2UsIHBvcCwgcHJlY2lwIGFjY3VtLCBwcmVzc3VyZSwgYWlycSwgdmlzLCB3aW5kLCBodW1pZGl0eVxuY29uc3Qgb2JqID0ge1xuICBjaXR5OiBcIkRlbnZlclwiLFxuICBjb3VudHJ5OiBcIlVTXCIsXG4gIHRlbXA6IFwiODJcIixcbiAgaGlnaGxvdzogXCI4NSAvIDYyXCIsXG4gIGNvbmRpdGlvbnM6IFwiUmFpblwiLFxuICBkZXNjcmlwdGlvbjogXCJsaWdodCByYWluXCIsXG4gIHdpbmQ6IFwiOFwiLFxuICB2aXNpYmlsaXR5OiAxMDAwMCxcbiAgaHVtaWRpdHk6IDI4LFxuICBmZWVsc0xpa2U6IFwiODFcIixcbiAgcG9wOiBcIjAuNDdcIixcbiAgcHJlY2lwOiBcIjAuMTNcIixcbiAgYWlyUXVhbGl0eTogXCJ1bmtub3duXCIsXG4gIHByZXNzdXJlOiAxMDE1LFxuICBzdW5yaXNlOiAxNjYyMTIxNzUwLFxuICBzdW5zZXQ6IDE2NjIxNjg2MjgsXG59O1xuZXhwb3J0IHsgZmlsbERldGFpbENvbnRhaW5lciwgb2JqIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
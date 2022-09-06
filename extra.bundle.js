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
    const precip = helper("ACCUMULATION", `${value}mm in last 3h`);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0cmEuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsaURBQWlELEtBQUs7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDOUJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTjBDO0FBQzFDO0FBQ0Esd0JBQXdCLHVEQUFhLFVBQVUsMEJBQTBCO0FBQ3pFO0FBQ0EsNENBQTRDLFlBQVksTUFBTSxFQUFFO0FBQ2hFLCtCQUErQixNQUFNO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLE9BQU8sS0FBSyxhQUFhO0FBQ25EO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsdURBQWEsVUFBVSxvQkFBb0I7QUFDakUsa0JBQWtCLHVEQUFhLFVBQVUsc0JBQXNCO0FBQy9ELGlCQUFpQix1REFBYSxVQUFVLHFCQUFxQjtBQUM3RCwyQkFBMkIsWUFBWTtBQUN2QywwQkFBMEIsTUFBTTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsTUFBTTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxjQUFjO0FBQ3REO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxNQUFNO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxNQUFNO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxZQUFZO0FBQ3ZELGtCQUFrQix1REFBYSxVQUFVLG1CQUFtQjtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsTUFBTTtBQUNuRCxrQkFBa0IsdURBQWEsVUFBVSxzQkFBc0I7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLE1BQU07QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsTUFBTTtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsS0FBSztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLEtBQUs7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNvQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXIvLi9zcmMvdXRpbGl0eS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9kaXNwbGF5RXh0cmEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRE9NIGZ1bmN0aW9uc1xuLy8gaGVscGVyIGZ1bmN0aW9ucyB0byBjcmVhdGUgRE9NIGVsZW1lbnQgYW5kIGFkZCBhdHRyaWJ1dGVzXG4vLyBpcyB0aGVyZSBhIG1vcmUgZWZmZWN0aXZlL2VmZmljaWVudCB3YXkgdG8gZG8gdGhpcz8hXG5jb25zdCBzZXRBdHRyaWJ1dGVzID0gKGVsZW1lbnQsIGF0dHJpYnV0ZXMpID0+IHtcbiAgICBPYmplY3QuZW50cmllcyhhdHRyaWJ1dGVzKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG4gICAgfSlcbn1cbmNvbnN0IGNyZWF0ZUVsZW1lbnQgPSAodHlwZSwgYXR0cmlidXRlcykgPT4ge1xuICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGAke3R5cGV9YCk7XG4gICAgaWYgKGF0dHJpYnV0ZXMgPT0gbnVsbCkgcmV0dXJuIG5ld0VsZW1lbnQ7XG4gICAgc2V0QXR0cmlidXRlcyhuZXdFbGVtZW50LCBhdHRyaWJ1dGVzKTtcbiAgICByZXR1cm4gbmV3RWxlbWVudDtcbn1cbi8vIHRpbWUgLT4gdHJhbnNmb3JtIHVuaXggdG8gc3RhbmRhcmRcbmNvbnN0IHRpbWUgPSAoaW5wdXQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhpbnB1dCk7XG4gICAgLy8gbmVlZHMgYSBmZXcgc3RlcHNcbiAgICAvLyAxKSBmaW5kIGxvY2FsIHRpbWUgKG9mIHVzZXIpXG4gICAgLy8gMikgY29udmVydCB1bml4IHRpbWUgdG8gbG9jYWwgdGltZVxuICAgIC8vIHJldHVybiBuZXdUaW1lXG59XG4vLyB0ZW1wIC0+IGNvbnZlcnQgRiB0byBDXG4vLyBwbGFubmluZyB0byBoYXZlIGJvdGggaW4gYW4gb2JqZWN0XG5jb25zdCB0ZW1wRm4gPSAoaW5wdXQpID0+IHtcbiAgICBjb25zdCB0ZW1wT2JqID0ge1xuICAgICAgICBmYXI6IE51bWJlcihpbnB1dCksXG4gICAgICAgIGNlbDogTWF0aC5yb3VuZCgoTnVtYmVyKGlucHV0KSAtIDMyKSAqICg1LzkpKSxcbiAgICB9XG4gICAgcmV0dXJuIHRlbXBPYmo7XG59XG5leHBvcnQgeyBjcmVhdGVFbGVtZW50LCB0ZW1wRm4gfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi91dGlsaXR5XCI7XG4vLyBjcmVhdGUgZGlzcGxheVxuY29uc3QgZGV0YWlsQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcImRldGFpbENvbnRhaW5lclwiIH0pO1xuLy8gY29uc3QgZGlzcGxheVNpbmdsZSA9IChpbnB1dCkgPT4ge1xuLy8gICAgIGNvbnN0IHNpbmdsZSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcImNsYXNzXCI6IGAke2lucHV0fWB9KTtcbi8vICAgICBzaW5nbGUudGV4dENvbnRlbnQgPSBgJHtpbnB1dH1gO1xuLy8gICAgICEhISBtaWdodCBuZWVkIHR3byBsaW5lcyBvZiBjb250ZW50IC0gb25lIGZvciBrZXksIG9uZSBmb3IgcHJvcGVydHlcbi8vICAgICByZXR1cm4gc2luZ2xlO1xuLy8gfVxuLy8gY29uc3QgZXh0cmFGYWN0b3J5ID0gKGlucHV0KSA9PiB7XG4vLyAgICAgY29uc29sZS5sb2coaW5wdXQuY2l0eSk7XG4vLyAgICAgY29uc3QgYXJyYXkgPSBPYmplY3Qua2V5cyhpbnB1dCk7XG4vLyAgICAgYXJyYXkuZm9yRWFjaChpbmRleCA9PiB7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKGAke2luZGV4fSBpbiAke2lucHV0W2luZGV4XX1gKTtcbi8vICAgICAgICAgZGV0YWlsQ29udGFpbmVyLmFwcGVuZENoaWxkKGRpc3BsYXlTaW5nbGUoaW5wdXRbaW5kZXhdKSk7XG4vLyAgICAgfSlcbi8vICAgICByZXR1cm4gZXh0cmFEaXY7XG4vLyBuZWVkIGlucHV0IHRvIGJlIGFuIGFycmF5IG9mIHRoZSBvYmplY3QncyBwcm9wZXJ0aWVzXG4vLyB9XG5jb25zdCBkZXRhaWwgPSAoKCkgPT4ge1xuICBjb25zdCBoZWxwZXIgPSAoZGVzY3JpcHRpb24sIHZhbHVlKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcImRldGFpbERpdlwiIH0pO1xuICAgIGNvbnN0IGxhYmVsID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcImRldGFpbExhYmVsXCIgfSk7XG4gICAgY29uc3QgZGF0YSA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJkZXRhaWxEYXRhXCIgfSk7XG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBgJHtkZXNjcmlwdGlvbn1gO1xuICAgIGRhdGEudGV4dENvbnRlbnQgPSBgJHt2YWx1ZX1gO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGEpO1xuICAgIHJldHVybiBjb250YWluZXI7XG4gIH07XG4gIGNvbnN0IHdpbmRGbiA9ICh2YWx1ZSkgPT4ge1xuICAgIC8vICEhISBtaWdodCBuZWVkIGEgZmV3IHRoaW5ncyAtIG9uZSBmb3Igd2luZCBzcGVlZCwgYW5vdGhlciBmb3IgZGlyZWN0aW9uXG4gICAgY29uc3Qgd2luZCA9IGhlbHBlcihcIldJTkRcIiwgYCR7dmFsdWV9a20vaGApO1xuICAgIC8vIGNoZWNrIHVuaXRzXG4gICAgcmV0dXJuIHdpbmQ7XG4gIH07XG4gIGNvbnN0IHZpc0ZuID0gKHZhbHVlKSA9PiB7XG4gICAgY29uc3QgdmlzID0gaGVscGVyKFwiVklTSUJJTElUWVwiLCBgJHt2YWx1ZSAvIDEwMDB9IGttYCk7XG4gICAgcmV0dXJuIHZpcztcbiAgfTtcbiAgY29uc3QgaHVtaWRGbiA9ICh2YWx1ZSkgPT4ge1xuICAgIGNvbnN0IGh1bWlkID0gaGVscGVyKFwiSFVNSURJVFlcIiwgYCR7dmFsdWV9JWApO1xuICAgIHJldHVybiBodW1pZDtcbiAgfTtcbiAgY29uc3QgZmVlbHNGbiA9ICh2YWx1ZSkgPT4ge1xuICAgIGNvbnN0IGZlZWxzID0gaGVscGVyKFwiRkVFTFMgTElLRVwiLCBgJHt2YWx1ZX1gKTtcbiAgICByZXR1cm4gZmVlbHM7XG4gIH07XG4gIGNvbnN0IHBvcEZuID0gKHZhbHVlKSA9PiB7XG4gICAgY29uc3QgcG9wID0gaGVscGVyKFwiUFJFQ0lQSVRBVElPTlwiLCBgJHt2YWx1ZSAqIDEwMH0lYCk7XG4gICAgY29uc3QgbGFiZWwgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwicG9wTGFiZWxcIiB9KTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IFwiQ0hBTkNFIE9GXCI7XG4gICAgLy8gISEhIG5vdCBzdXJlIGlmIHRoaXMgd29ya3NcbiAgICBwb3AuaW5zZXJ0QmVmb3JlKGxhYmVsLCBwb3AuZmlyc3RDaGlsZCk7XG4gICAgcmV0dXJuIHBvcDtcbiAgfTtcbiAgY29uc3QgcHJlY2lwRm4gPSAodmFsdWUpID0+IHtcbiAgICBjb25zdCBwcmVjaXAgPSBoZWxwZXIoXCJBQ0NVTVVMQVRJT05cIiwgYCR7dmFsdWV9bW0gaW4gbGFzdCAzaGApO1xuICAgIGNvbnN0IGxhYmVsID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcInByZWNpcExhYmVsXCIgfSk7XG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBcIlBSRUNJUElUQVRJT05cIjtcbiAgICAvLyAhISEgbm90IHN1cmUgaWYgdGhpcyB3b3Jrc1xuICAgIHByZWNpcC5pbnNlcnRCZWZvcmUobGFiZWwsIHByZWNpcC5maXJzdENoaWxkKTtcbiAgICByZXR1cm4gcHJlY2lwO1xuICB9O1xuICBjb25zdCBhaXJGbiA9ICh2YWx1ZSkgPT4ge1xuICAgIGNvbnN0IGFpciA9IGhlbHBlcihcIkFJUiBRVUFMSVRZXCIsIGAke3ZhbHVlfWApO1xuICAgIC8vICEhISBtaWdodCBuZWVkIHVuaXRzIGNsYXJpZmllciAoc2NvcmUgb3V0IG9mIDEwMD8pXG4gICAgcmV0dXJuIGFpcjtcbiAgfTtcbiAgY29uc3QgcHJlc3N1cmVGbiA9ICh2YWx1ZSkgPT4ge1xuICAgIGNvbnN0IHByZXNzdXJlID0gaGVscGVyKFwiUFJFU1NVUkVcIiwgYCR7dmFsdWV9YCk7XG4gICAgLy8gISEhIG5lZWQgdW5pdHNcbiAgICByZXR1cm4gcHJlc3N1cmU7XG4gIH07XG4gIGNvbnN0IHN1bnJpc2VGbiA9ICh2YWx1ZSkgPT4ge1xuICAgIC8vICEhISBuZWVkIGZuIHRvIGNvbnZlcnQgdmFsdWUgdG8gdGltZSAoYWxzbyBjaGVjayBmb3IgbG9jYWwgdGltZS4uKVxuICAgIGNvbnN0IHRpbWUgPSB2YWx1ZTtcbiAgICBjb25zdCByaXNlID0gaGVscGVyKFwiU1VOUklTRVwiLCBgJHt0aW1lfWApO1xuICAgIHJldHVybiByaXNlO1xuICB9O1xuICBjb25zdCBzdW5zZXRGbiA9ICh2YWx1ZSkgPT4ge1xuICAgIC8vICEhISBuZWVkIHRvIHJ1biB2YWx1ZSBpbiBhIGZuLCBsaWtlIGFib3ZlXG4gICAgY29uc3QgdGltZSA9IHZhbHVlO1xuICAgIGNvbnN0IHNldCA9IGhlbHBlcihcIlNVTlNFVFwiLCBgJHt0aW1lfWApO1xuICAgIHJldHVybiBzZXQ7XG4gIH07XG4gIHJldHVybiB7XG4gICAgd2luZEZuLFxuICAgIHZpc0ZuLFxuICAgIGh1bWlkRm4sXG4gICAgZmVlbHNGbixcbiAgICBwb3BGbixcbiAgICBwcmVjaXBGbixcbiAgICBhaXJGbixcbiAgICBwcmVzc3VyZUZuLFxuICAgIHN1bnJpc2VGbixcbiAgICBzdW5zZXRGbixcbiAgfTtcbn0pKCk7XG5jb25zdCBmaWxsRGV0YWlsQ29udGFpbmVyID0gKGlucHV0KSA9PiB7XG4gIGNvbnNvbGUubG9nKGlucHV0KTtcbiAgZGV0YWlsQ29udGFpbmVyLmFwcGVuZENoaWxkKGRldGFpbC53aW5kRm4oaW5wdXQud2luZCkpO1xuICBkZXRhaWxDb250YWluZXIuYXBwZW5kQ2hpbGQoZGV0YWlsLnZpc0ZuKGlucHV0LnZpc2liaWxpdHkpKTtcbiAgZGV0YWlsQ29udGFpbmVyLmFwcGVuZENoaWxkKGRldGFpbC5mZWVsc0ZuKGlucHV0LmZlZWxzTGlrZSkpO1xuICBkZXRhaWxDb250YWluZXIuYXBwZW5kQ2hpbGQoZGV0YWlsLmh1bWlkRm4oaW5wdXQuaHVtaWRpdHkpKTtcbiAgZGV0YWlsQ29udGFpbmVyLmFwcGVuZENoaWxkKGRldGFpbC5wb3BGbihpbnB1dC5wb3ApKTtcbiAgZGV0YWlsQ29udGFpbmVyLmFwcGVuZENoaWxkKGRldGFpbC5wcmVjaXBGbihpbnB1dC5wcmVjaXApKTtcbiAgZGV0YWlsQ29udGFpbmVyLmFwcGVuZENoaWxkKGRldGFpbC5haXJGbihpbnB1dC5haXJRdWFsaXR5KSk7XG4gIGRldGFpbENvbnRhaW5lci5hcHBlbmRDaGlsZChkZXRhaWwucHJlc3N1cmVGbihpbnB1dC5wcmVzc3VyZSkpO1xuICBkZXRhaWxDb250YWluZXIuYXBwZW5kQ2hpbGQoZGV0YWlsLnN1bnJpc2VGbihpbnB1dC5zdW5yaXNlKSk7XG4gIGRldGFpbENvbnRhaW5lci5hcHBlbmRDaGlsZChkZXRhaWwuc3Vuc2V0Rm4oaW5wdXQuc3Vuc2V0KSk7XG4gIHJldHVybiBkZXRhaWxDb250YWluZXI7XG59O1xuLy8gZ29hbDogZGlzcGxheSBvZiBleHRyYSBkYXRhIChib3gpXG4vLyBzdW5yaXNlLCBzdW5zZXQsIGZlZWxzIGxpa2UsIHBvcCwgcHJlY2lwIGFjY3VtLCBwcmVzc3VyZSwgYWlycSwgdmlzLCB3aW5kLCBodW1pZGl0eVxuY29uc3Qgb2JqID0ge1xuICBjaXR5OiBcIkRlbnZlclwiLFxuICBjb3VudHJ5OiBcIlVTXCIsXG4gIHRlbXA6IFwiODJcIixcbiAgaGlnaGxvdzogXCI4NSAvIDYyXCIsXG4gIGNvbmRpdGlvbnM6IFwiUmFpblwiLFxuICBkZXNjcmlwdGlvbjogXCJsaWdodCByYWluXCIsXG4gIHdpbmQ6IFwiOFwiLFxuICB2aXNpYmlsaXR5OiAxMDAwMCxcbiAgaHVtaWRpdHk6IDI4LFxuICBmZWVsc0xpa2U6IFwiODFcIixcbiAgcG9wOiBcIjAuNDdcIixcbiAgcHJlY2lwOiBcIjAuMTNcIixcbiAgYWlyUXVhbGl0eTogXCJ1bmtub3duXCIsXG4gIHByZXNzdXJlOiAxMDE1LFxuICBzdW5yaXNlOiAxNjYyMTIxNzUwLFxuICBzdW5zZXQ6IDE2NjIxNjg2MjgsXG59O1xuZXhwb3J0IHsgZmlsbERldGFpbENvbnRhaW5lciwgb2JqIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
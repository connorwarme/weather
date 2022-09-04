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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0cmEuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsaURBQWlELEtBQUs7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDOUJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTnNDO0FBQ3RDO0FBQ0Esd0JBQXdCLG9EQUFhLFVBQVUsMEJBQTBCO0FBQ3pFO0FBQ0EsNENBQTRDLFlBQVksTUFBTSxFQUFFO0FBQ2hFLCtCQUErQixNQUFNO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLE9BQU8sS0FBSyxhQUFhO0FBQ25EO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isb0RBQWEsVUFBVSxvQkFBb0I7QUFDakUsa0JBQWtCLG9EQUFhLFVBQVUsc0JBQXNCO0FBQy9ELGlCQUFpQixvREFBYSxVQUFVLHFCQUFxQjtBQUM3RCwyQkFBMkIsWUFBWTtBQUN2QywwQkFBMEIsTUFBTTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsTUFBTTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxjQUFjO0FBQ3REO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxNQUFNO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxNQUFNO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxZQUFZO0FBQ3ZELGtCQUFrQixvREFBYSxVQUFVLG1CQUFtQjtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsTUFBTTtBQUNuRCxrQkFBa0Isb0RBQWEsVUFBVSxzQkFBc0I7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLE1BQU07QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsTUFBTTtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsS0FBSztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLEtBQUs7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNvQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXIvLi9zcmMvdXRpbGl0eS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9kaXNwbGF5RXh0cmEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRE9NIGZ1bmN0aW9uc1xuLy8gaGVscGVyIGZ1bmN0aW9ucyB0byBjcmVhdGUgRE9NIGVsZW1lbnQgYW5kIGFkZCBhdHRyaWJ1dGVzXG4vLyBpcyB0aGVyZSBhIG1vcmUgZWZmZWN0aXZlL2VmZmljaWVudCB3YXkgdG8gZG8gdGhpcz8hXG5jb25zdCBzZXRBdHRyaWJ1dGVzID0gKGVsZW1lbnQsIGF0dHJpYnV0ZXMpID0+IHtcbiAgICBPYmplY3QuZW50cmllcyhhdHRyaWJ1dGVzKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG4gICAgfSlcbn1cbmNvbnN0IGNyZWF0ZUVsZW1lbnQgPSAodHlwZSwgYXR0cmlidXRlcykgPT4ge1xuICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGAke3R5cGV9YCk7XG4gICAgaWYgKGF0dHJpYnV0ZXMgPT0gbnVsbCkgcmV0dXJuIG5ld0VsZW1lbnQ7XG4gICAgc2V0QXR0cmlidXRlcyhuZXdFbGVtZW50LCBhdHRyaWJ1dGVzKTtcbiAgICByZXR1cm4gbmV3RWxlbWVudDtcbn1cbi8vIHRpbWUgLT4gdHJhbnNmb3JtIHVuaXggdG8gc3RhbmRhcmRcbmNvbnN0IHRpbWUgPSAoaW5wdXQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhpbnB1dCk7XG4gICAgLy8gbmVlZHMgYSBmZXcgc3RlcHNcbiAgICAvLyAxKSBmaW5kIGxvY2FsIHRpbWUgKG9mIHVzZXIpXG4gICAgLy8gMikgY29udmVydCB1bml4IHRpbWUgdG8gbG9jYWwgdGltZVxuICAgIC8vIHJldHVybiBuZXdUaW1lXG59XG4vLyB0ZW1wIC0+IGNvbnZlcnQgRiB0byBDXG4vLyBwbGFubmluZyB0byBoYXZlIGJvdGggaW4gYW4gb2JqZWN0XG5jb25zdCB0ZW1wRm4gPSAoaW5wdXQpID0+IHtcbiAgICBjb25zdCB0ZW1wT2JqID0ge1xuICAgICAgICBmYXI6IE51bWJlcihpbnB1dCksXG4gICAgICAgIGNlbDogTWF0aC5yb3VuZCgoTnVtYmVyKGlucHV0KSAtIDMyKSAqICg1LzkpKSxcbiAgICB9XG4gICAgcmV0dXJuIHRlbXBPYmo7XG59XG5leHBvcnQgeyBjcmVhdGVFbGVtZW50LCB0ZW1wRm4gfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gXCIuL3V0aWxpdHlcIjtcbi8vIGNyZWF0ZSBkaXNwbGF5XG5jb25zdCBkZXRhaWxDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwiZGV0YWlsQ29udGFpbmVyXCIgfSk7XG4vLyBjb25zdCBkaXNwbGF5U2luZ2xlID0gKGlucHV0KSA9PiB7XG4vLyAgICAgY29uc3Qgc2luZ2xlID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge1wiY2xhc3NcIjogYCR7aW5wdXR9YH0pO1xuLy8gICAgIHNpbmdsZS50ZXh0Q29udGVudCA9IGAke2lucHV0fWA7XG4vLyAgICAgISEhIG1pZ2h0IG5lZWQgdHdvIGxpbmVzIG9mIGNvbnRlbnQgLSBvbmUgZm9yIGtleSwgb25lIGZvciBwcm9wZXJ0eVxuLy8gICAgIHJldHVybiBzaW5nbGU7XG4vLyB9XG4vLyBjb25zdCBleHRyYUZhY3RvcnkgPSAoaW5wdXQpID0+IHtcbi8vICAgICBjb25zb2xlLmxvZyhpbnB1dC5jaXR5KTtcbi8vICAgICBjb25zdCBhcnJheSA9IE9iamVjdC5rZXlzKGlucHV0KTtcbi8vICAgICBhcnJheS5mb3JFYWNoKGluZGV4ID0+IHtcbi8vICAgICAgICAgY29uc29sZS5sb2coYCR7aW5kZXh9IGluICR7aW5wdXRbaW5kZXhdfWApO1xuLy8gICAgICAgICBkZXRhaWxDb250YWluZXIuYXBwZW5kQ2hpbGQoZGlzcGxheVNpbmdsZShpbnB1dFtpbmRleF0pKTtcbi8vICAgICB9KVxuLy8gICAgIHJldHVybiBleHRyYURpdjtcbi8vIG5lZWQgaW5wdXQgdG8gYmUgYW4gYXJyYXkgb2YgdGhlIG9iamVjdCdzIHByb3BlcnRpZXNcbi8vIH1cbmNvbnN0IGRldGFpbCA9ICgoKSA9PiB7XG4gIGNvbnN0IGhlbHBlciA9IChkZXNjcmlwdGlvbiwgdmFsdWUpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwiZGV0YWlsRGl2XCIgfSk7XG4gICAgY29uc3QgbGFiZWwgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwiZGV0YWlsTGFiZWxcIiB9KTtcbiAgICBjb25zdCBkYXRhID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcImRldGFpbERhdGFcIiB9KTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGAke2Rlc2NyaXB0aW9ufWA7XG4gICAgZGF0YS50ZXh0Q29udGVudCA9IGAke3ZhbHVlfWA7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0YSk7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgfTtcbiAgY29uc3Qgd2luZEZuID0gKHZhbHVlKSA9PiB7XG4gICAgLy8gISEhIG1pZ2h0IG5lZWQgYSBmZXcgdGhpbmdzIC0gb25lIGZvciB3aW5kIHNwZWVkLCBhbm90aGVyIGZvciBkaXJlY3Rpb25cbiAgICBjb25zdCB3aW5kID0gaGVscGVyKFwiV0lORFwiLCBgJHt2YWx1ZX1rbS9oYCk7XG4gICAgLy8gY2hlY2sgdW5pdHNcbiAgICByZXR1cm4gd2luZDtcbiAgfTtcbiAgY29uc3QgdmlzRm4gPSAodmFsdWUpID0+IHtcbiAgICBjb25zdCB2aXMgPSBoZWxwZXIoXCJWSVNJQklMSVRZXCIsIGAke3ZhbHVlIC8gMTAwMH0ga21gKTtcbiAgICByZXR1cm4gdmlzO1xuICB9O1xuICBjb25zdCBodW1pZEZuID0gKHZhbHVlKSA9PiB7XG4gICAgY29uc3QgaHVtaWQgPSBoZWxwZXIoXCJIVU1JRElUWVwiLCBgJHt2YWx1ZX0lYCk7XG4gICAgcmV0dXJuIGh1bWlkO1xuICB9O1xuICBjb25zdCBmZWVsc0ZuID0gKHZhbHVlKSA9PiB7XG4gICAgY29uc3QgZmVlbHMgPSBoZWxwZXIoXCJGRUVMUyBMSUtFXCIsIGAke3ZhbHVlfWApO1xuICAgIHJldHVybiBmZWVscztcbiAgfTtcbiAgY29uc3QgcG9wRm4gPSAodmFsdWUpID0+IHtcbiAgICBjb25zdCBwb3AgPSBoZWxwZXIoXCJQUkVDSVBJVEFUSU9OXCIsIGAke3ZhbHVlICogMTAwfSVgKTtcbiAgICBjb25zdCBsYWJlbCA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJwb3BMYWJlbFwiIH0pO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gXCJDSEFOQ0UgT0ZcIjtcbiAgICAvLyAhISEgbm90IHN1cmUgaWYgdGhpcyB3b3Jrc1xuICAgIHBvcC5pbnNlcnRCZWZvcmUobGFiZWwsIHBvcC5maXJzdENoaWxkKTtcbiAgICByZXR1cm4gcG9wO1xuICB9O1xuICBjb25zdCBwcmVjaXBGbiA9ICh2YWx1ZSkgPT4ge1xuICAgIGNvbnN0IHByZWNpcCA9IGhlbHBlcihcIkFDQ1VNVUxBVElPTlwiLCBgJHt2YWx1ZX1tbSBpbiBsYXN0IDNoYCk7XG4gICAgY29uc3QgbGFiZWwgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwicHJlY2lwTGFiZWxcIiB9KTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IFwiUFJFQ0lQSVRBVElPTlwiO1xuICAgIC8vICEhISBub3Qgc3VyZSBpZiB0aGlzIHdvcmtzXG4gICAgcHJlY2lwLmluc2VydEJlZm9yZShsYWJlbCwgcHJlY2lwLmZpcnN0Q2hpbGQpO1xuICAgIHJldHVybiBwcmVjaXA7XG4gIH07XG4gIGNvbnN0IGFpckZuID0gKHZhbHVlKSA9PiB7XG4gICAgY29uc3QgYWlyID0gaGVscGVyKFwiQUlSIFFVQUxJVFlcIiwgYCR7dmFsdWV9YCk7XG4gICAgLy8gISEhIG1pZ2h0IG5lZWQgdW5pdHMgY2xhcmlmaWVyIChzY29yZSBvdXQgb2YgMTAwPylcbiAgICByZXR1cm4gYWlyO1xuICB9O1xuICBjb25zdCBwcmVzc3VyZUZuID0gKHZhbHVlKSA9PiB7XG4gICAgY29uc3QgcHJlc3N1cmUgPSBoZWxwZXIoXCJQUkVTU1VSRVwiLCBgJHt2YWx1ZX1gKTtcbiAgICAvLyAhISEgbmVlZCB1bml0c1xuICAgIHJldHVybiBwcmVzc3VyZTtcbiAgfTtcbiAgY29uc3Qgc3VucmlzZUZuID0gKHZhbHVlKSA9PiB7XG4gICAgLy8gISEhIG5lZWQgZm4gdG8gY29udmVydCB2YWx1ZSB0byB0aW1lIChhbHNvIGNoZWNrIGZvciBsb2NhbCB0aW1lLi4pXG4gICAgY29uc3QgdGltZSA9IHZhbHVlO1xuICAgIGNvbnN0IHJpc2UgPSBoZWxwZXIoXCJTVU5SSVNFXCIsIGAke3RpbWV9YCk7XG4gICAgcmV0dXJuIHJpc2U7XG4gIH07XG4gIGNvbnN0IHN1bnNldEZuID0gKHZhbHVlKSA9PiB7XG4gICAgLy8gISEhIG5lZWQgdG8gcnVuIHZhbHVlIGluIGEgZm4sIGxpa2UgYWJvdmVcbiAgICBjb25zdCB0aW1lID0gdmFsdWU7XG4gICAgY29uc3Qgc2V0ID0gaGVscGVyKFwiU1VOU0VUXCIsIGAke3RpbWV9YCk7XG4gICAgcmV0dXJuIHNldDtcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICB3aW5kRm4sXG4gICAgdmlzRm4sXG4gICAgaHVtaWRGbixcbiAgICBmZWVsc0ZuLFxuICAgIHBvcEZuLFxuICAgIHByZWNpcEZuLFxuICAgIGFpckZuLFxuICAgIHByZXNzdXJlRm4sXG4gICAgc3VucmlzZUZuLFxuICAgIHN1bnNldEZuLFxuICB9O1xufSkoKTtcbmNvbnN0IGZpbGxEZXRhaWxDb250YWluZXIgPSAoaW5wdXQpID0+IHtcbiAgY29uc29sZS5sb2coaW5wdXQpO1xuICBkZXRhaWxDb250YWluZXIuYXBwZW5kQ2hpbGQoZGV0YWlsLndpbmRGbihpbnB1dC53aW5kKSk7XG4gIGRldGFpbENvbnRhaW5lci5hcHBlbmRDaGlsZChkZXRhaWwudmlzRm4oaW5wdXQudmlzaWJpbGl0eSkpO1xuICBkZXRhaWxDb250YWluZXIuYXBwZW5kQ2hpbGQoZGV0YWlsLmZlZWxzRm4oaW5wdXQuZmVlbHNMaWtlKSk7XG4gIGRldGFpbENvbnRhaW5lci5hcHBlbmRDaGlsZChkZXRhaWwuaHVtaWRGbihpbnB1dC5odW1pZGl0eSkpO1xuICBkZXRhaWxDb250YWluZXIuYXBwZW5kQ2hpbGQoZGV0YWlsLnBvcEZuKGlucHV0LnBvcCkpO1xuICBkZXRhaWxDb250YWluZXIuYXBwZW5kQ2hpbGQoZGV0YWlsLnByZWNpcEZuKGlucHV0LnByZWNpcCkpO1xuICBkZXRhaWxDb250YWluZXIuYXBwZW5kQ2hpbGQoZGV0YWlsLmFpckZuKGlucHV0LmFpclF1YWxpdHkpKTtcbiAgZGV0YWlsQ29udGFpbmVyLmFwcGVuZENoaWxkKGRldGFpbC5wcmVzc3VyZUZuKGlucHV0LnByZXNzdXJlKSk7XG4gIGRldGFpbENvbnRhaW5lci5hcHBlbmRDaGlsZChkZXRhaWwuc3VucmlzZUZuKGlucHV0LnN1bnJpc2UpKTtcbiAgZGV0YWlsQ29udGFpbmVyLmFwcGVuZENoaWxkKGRldGFpbC5zdW5zZXRGbihpbnB1dC5zdW5zZXQpKTtcbiAgcmV0dXJuIGRldGFpbENvbnRhaW5lcjtcbn07XG4vLyBnb2FsOiBkaXNwbGF5IG9mIGV4dHJhIGRhdGEgKGJveClcbi8vIHN1bnJpc2UsIHN1bnNldCwgZmVlbHMgbGlrZSwgcG9wLCBwcmVjaXAgYWNjdW0sIHByZXNzdXJlLCBhaXJxLCB2aXMsIHdpbmQsIGh1bWlkaXR5XG5jb25zdCBvYmogPSB7XG4gIGNpdHk6IFwiRGVudmVyXCIsXG4gIGNvdW50cnk6IFwiVVNcIixcbiAgdGVtcDogXCI4MlwiLFxuICBoaWdobG93OiBcIjg1IC8gNjJcIixcbiAgY29uZGl0aW9uczogXCJSYWluXCIsXG4gIGRlc2NyaXB0aW9uOiBcImxpZ2h0IHJhaW5cIixcbiAgd2luZDogXCI4XCIsXG4gIHZpc2liaWxpdHk6IDEwMDAwLFxuICBodW1pZGl0eTogMjgsXG4gIGZlZWxzTGlrZTogXCI4MVwiLFxuICBwb3A6IFwiMC40N1wiLFxuICBwcmVjaXA6IFwiMC4xM1wiLFxuICBhaXJRdWFsaXR5OiBcInVua25vd25cIixcbiAgcHJlc3N1cmU6IDEwMTUsXG4gIHN1bnJpc2U6IDE2NjIxMjE3NTAsXG4gIHN1bnNldDogMTY2MjE2ODYyOCxcbn07XG5leHBvcnQgeyBmaWxsRGV0YWlsQ29udGFpbmVyLCBvYmogfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
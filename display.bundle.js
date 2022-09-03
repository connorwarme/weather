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
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fillDetailContainer": () => (/* binding */ fillDetailContainer),
/* harmony export */   "obj": () => (/* binding */ obj)
/* harmony export */ });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility */ "./src/utility.js");

// create display
const detailContainer = (0,_utility__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {"class": "detailContainer"});
const displaySingle = (input) => {
    const single = (0,_utility__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {"class": `${input}`});
    single.textContent = `${input}`;
    // !!! might need two lines of content - one for key, one for property
    return single;
}
const extraFactory = (input) => {
    console.log(input.city);
    const array = Object.keys(input);
    array.forEach(index => {
        console.log(`${index} in ${input[index]}`);
        detailContainer.appendChild(displaySingle(input[index]));
    })
    return extraDiv;
    // could use forEach
    // need input to be an array of the object's properties
}
const detail = (() => {
    const helper = (description, value) => {
        const container = (0,_utility__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {"class": "detailDiv"});
        const label = (0,_utility__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {"class": "detailLabel"});
        const data = (0,_utility__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {"class": "detailData"});
        label.textContent = `${description}`;
        data.textContent = `${value}`;
        container.appendChild(label);
        container.appendChild(data);
        return container;
    }
    const windFn = (value) => {
        // !!! might need a few things - one for wind speed, another for direction
        const wind = helper("WIND", `${value}km/h`);
        // check units
        return wind;
    }
    const visFn = (value) => {
        const vis = helper('VISIBILITY', `${value / 1000} km`);
        return vis;
    }
    const humidFn = (value) => {
        const humid = helper('HUMIDITY', `${value}%`);
        return humid;
    }
    const feelsFn = (value) => {
        const feels = helper('FEELS LIKE', `${value}`);
        return feels;
    }
    const popFn = (value) => {
        const pop = helper('PRECIPITATION', `${value * 100}%`);
        const label = (0,_utility__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {"class": "popLabel"});
        label.textContent = "CHANCE OF";
        // !!! not sure if this works
        pop.insertBefore(label, pop.firstChild);
        return pop;
    }
    const precipFn = (value) => {
        const precip = helper('ACCUMULATION', `${value}mm in last 3h`);
        const label = (0,_utility__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {"class": "precipLabel"});
        label.textContent = "PRECIPITATION";
        // !!! not sure if this works
        precip.insertBefore(label, precip.firstChild);
        return precip;
    }
    const airFn = (value) => {
        const air = helper('AIR QUALITY', `${value}`);
        // !!! might need units clarifier (score out of 100?)
        return air;
    }
    const pressureFn = (value) => {
        const pressure = helper('PRESSURE', `${value}`);
        // !!! need units
        return pressure;
    }
    const sunriseFn = (value) => {
        // !!! need fn to convert value to time (also check for local time..)
        const time = value;
        const rise = helper('SUNRISE', `${time}`);
        return rise;
    }
    const sunsetFn = (value) => {
        // !!! need to run value in a fn, like above
        const time = value;
        const set = helper('SUNSET', `${time}`);
        return set;
    }
    return { windFn, visFn, humidFn, feelsFn, popFn, precipFn, airFn, pressureFn, sunriseFn, sunsetFn }
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
}
// goal: display of extra data (box)
// sunrise, sunset, feels like, pop, precip accum, pressure, airq, vis, wind, humidity 
const obj = {
    // city: "Denver",
    // country: "US",
    // temp: "82",
    // conditions: "Rain",
    // description: "light rain",
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
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcGxheS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGlEQUFpRCxLQUFLO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsYUFBYTs7Ozs7O1VDZDVCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTnNDO0FBQ3RDO0FBQ0Esd0JBQXdCLG9EQUFhLFNBQVMsMkJBQTJCO0FBQ3pFO0FBQ0EsbUJBQW1CLG9EQUFhLFNBQVMsWUFBWSxNQUFNLEVBQUU7QUFDN0QsNEJBQTRCLE1BQU07QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsT0FBTyxLQUFLLGFBQWE7QUFDaEQ7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG9EQUFhLFNBQVMscUJBQXFCO0FBQ3JFLHNCQUFzQixvREFBYSxTQUFTLHVCQUF1QjtBQUNuRSxxQkFBcUIsb0RBQWEsU0FBUyxzQkFBc0I7QUFDakUsK0JBQStCLFlBQVk7QUFDM0MsOEJBQThCLE1BQU07QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLE1BQU07QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsY0FBYztBQUMxRDtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsTUFBTTtBQUNsRDtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsTUFBTTtBQUNwRDtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsWUFBWTtBQUMzRCxzQkFBc0Isb0RBQWEsU0FBUyxvQkFBb0I7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELE1BQU07QUFDdkQsc0JBQXNCLG9EQUFhLFNBQVMsdUJBQXVCO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxNQUFNO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLE1BQU07QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLEtBQUs7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxLQUFLO0FBQzdDO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXIvLi9zcmMvdXRpbGl0eS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9kaXNwbGF5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIERPTSBmdW5jdGlvbnNcbi8vIGhlbHBlciBmdW5jdGlvbnMgdG8gY3JlYXRlIERPTSBlbGVtZW50IGFuZCBhZGQgYXR0cmlidXRlc1xuLy8gaXMgdGhlcmUgYSBtb3JlIGVmZmVjdGl2ZS9lZmZpY2llbnQgd2F5IHRvIGRvIHRoaXM/IVxuY29uc3Qgc2V0QXR0cmlidXRlcyA9IChlbGVtZW50LCBhdHRyaWJ1dGVzKSA9PiB7XG4gICAgT2JqZWN0LmVudHJpZXMoYXR0cmlidXRlcykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuICAgIH0pXG59XG5jb25zdCBjcmVhdGVFbGVtZW50ID0gKHR5cGUsIGF0dHJpYnV0ZXMpID0+IHtcbiAgICBjb25zdCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgJHt0eXBlfWApO1xuICAgIGlmIChhdHRyaWJ1dGVzID09IG51bGwpIHJldHVybiBuZXdFbGVtZW50O1xuICAgIHNldEF0dHJpYnV0ZXMobmV3RWxlbWVudCwgYXR0cmlidXRlcyk7XG4gICAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVFbGVtZW50OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSBcIi4vdXRpbGl0eVwiO1xuLy8gY3JlYXRlIGRpc3BsYXlcbmNvbnN0IGRldGFpbENvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcImNsYXNzXCI6IFwiZGV0YWlsQ29udGFpbmVyXCJ9KTtcbmNvbnN0IGRpc3BsYXlTaW5nbGUgPSAoaW5wdXQpID0+IHtcbiAgICBjb25zdCBzaW5nbGUgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7XCJjbGFzc1wiOiBgJHtpbnB1dH1gfSk7XG4gICAgc2luZ2xlLnRleHRDb250ZW50ID0gYCR7aW5wdXR9YDtcbiAgICAvLyAhISEgbWlnaHQgbmVlZCB0d28gbGluZXMgb2YgY29udGVudCAtIG9uZSBmb3Iga2V5LCBvbmUgZm9yIHByb3BlcnR5XG4gICAgcmV0dXJuIHNpbmdsZTtcbn1cbmNvbnN0IGV4dHJhRmFjdG9yeSA9IChpbnB1dCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGlucHV0LmNpdHkpO1xuICAgIGNvbnN0IGFycmF5ID0gT2JqZWN0LmtleXMoaW5wdXQpO1xuICAgIGFycmF5LmZvckVhY2goaW5kZXggPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhgJHtpbmRleH0gaW4gJHtpbnB1dFtpbmRleF19YCk7XG4gICAgICAgIGRldGFpbENvbnRhaW5lci5hcHBlbmRDaGlsZChkaXNwbGF5U2luZ2xlKGlucHV0W2luZGV4XSkpO1xuICAgIH0pXG4gICAgcmV0dXJuIGV4dHJhRGl2O1xuICAgIC8vIGNvdWxkIHVzZSBmb3JFYWNoXG4gICAgLy8gbmVlZCBpbnB1dCB0byBiZSBhbiBhcnJheSBvZiB0aGUgb2JqZWN0J3MgcHJvcGVydGllc1xufVxuY29uc3QgZGV0YWlsID0gKCgpID0+IHtcbiAgICBjb25zdCBoZWxwZXIgPSAoZGVzY3JpcHRpb24sIHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcImNsYXNzXCI6IFwiZGV0YWlsRGl2XCJ9KTtcbiAgICAgICAgY29uc3QgbGFiZWwgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7XCJjbGFzc1wiOiBcImRldGFpbExhYmVsXCJ9KTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcImNsYXNzXCI6IFwiZGV0YWlsRGF0YVwifSk7XG4gICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gYCR7ZGVzY3JpcHRpb259YDtcbiAgICAgICAgZGF0YS50ZXh0Q29udGVudCA9IGAke3ZhbHVlfWA7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRhKTtcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9XG4gICAgY29uc3Qgd2luZEZuID0gKHZhbHVlKSA9PiB7XG4gICAgICAgIC8vICEhISBtaWdodCBuZWVkIGEgZmV3IHRoaW5ncyAtIG9uZSBmb3Igd2luZCBzcGVlZCwgYW5vdGhlciBmb3IgZGlyZWN0aW9uXG4gICAgICAgIGNvbnN0IHdpbmQgPSBoZWxwZXIoXCJXSU5EXCIsIGAke3ZhbHVlfWttL2hgKTtcbiAgICAgICAgLy8gY2hlY2sgdW5pdHNcbiAgICAgICAgcmV0dXJuIHdpbmQ7XG4gICAgfVxuICAgIGNvbnN0IHZpc0ZuID0gKHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IHZpcyA9IGhlbHBlcignVklTSUJJTElUWScsIGAke3ZhbHVlIC8gMTAwMH0ga21gKTtcbiAgICAgICAgcmV0dXJuIHZpcztcbiAgICB9XG4gICAgY29uc3QgaHVtaWRGbiA9ICh2YWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCBodW1pZCA9IGhlbHBlcignSFVNSURJVFknLCBgJHt2YWx1ZX0lYCk7XG4gICAgICAgIHJldHVybiBodW1pZDtcbiAgICB9XG4gICAgY29uc3QgZmVlbHNGbiA9ICh2YWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCBmZWVscyA9IGhlbHBlcignRkVFTFMgTElLRScsIGAke3ZhbHVlfWApO1xuICAgICAgICByZXR1cm4gZmVlbHM7XG4gICAgfVxuICAgIGNvbnN0IHBvcEZuID0gKHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IHBvcCA9IGhlbHBlcignUFJFQ0lQSVRBVElPTicsIGAke3ZhbHVlICogMTAwfSVgKTtcbiAgICAgICAgY29uc3QgbGFiZWwgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7XCJjbGFzc1wiOiBcInBvcExhYmVsXCJ9KTtcbiAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSBcIkNIQU5DRSBPRlwiO1xuICAgICAgICAvLyAhISEgbm90IHN1cmUgaWYgdGhpcyB3b3Jrc1xuICAgICAgICBwb3AuaW5zZXJ0QmVmb3JlKGxhYmVsLCBwb3AuZmlyc3RDaGlsZCk7XG4gICAgICAgIHJldHVybiBwb3A7XG4gICAgfVxuICAgIGNvbnN0IHByZWNpcEZuID0gKHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IHByZWNpcCA9IGhlbHBlcignQUNDVU1VTEFUSU9OJywgYCR7dmFsdWV9bW0gaW4gbGFzdCAzaGApO1xuICAgICAgICBjb25zdCBsYWJlbCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcImNsYXNzXCI6IFwicHJlY2lwTGFiZWxcIn0pO1xuICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9IFwiUFJFQ0lQSVRBVElPTlwiO1xuICAgICAgICAvLyAhISEgbm90IHN1cmUgaWYgdGhpcyB3b3Jrc1xuICAgICAgICBwcmVjaXAuaW5zZXJ0QmVmb3JlKGxhYmVsLCBwcmVjaXAuZmlyc3RDaGlsZCk7XG4gICAgICAgIHJldHVybiBwcmVjaXA7XG4gICAgfVxuICAgIGNvbnN0IGFpckZuID0gKHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IGFpciA9IGhlbHBlcignQUlSIFFVQUxJVFknLCBgJHt2YWx1ZX1gKTtcbiAgICAgICAgLy8gISEhIG1pZ2h0IG5lZWQgdW5pdHMgY2xhcmlmaWVyIChzY29yZSBvdXQgb2YgMTAwPylcbiAgICAgICAgcmV0dXJuIGFpcjtcbiAgICB9XG4gICAgY29uc3QgcHJlc3N1cmVGbiA9ICh2YWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCBwcmVzc3VyZSA9IGhlbHBlcignUFJFU1NVUkUnLCBgJHt2YWx1ZX1gKTtcbiAgICAgICAgLy8gISEhIG5lZWQgdW5pdHNcbiAgICAgICAgcmV0dXJuIHByZXNzdXJlO1xuICAgIH1cbiAgICBjb25zdCBzdW5yaXNlRm4gPSAodmFsdWUpID0+IHtcbiAgICAgICAgLy8gISEhIG5lZWQgZm4gdG8gY29udmVydCB2YWx1ZSB0byB0aW1lIChhbHNvIGNoZWNrIGZvciBsb2NhbCB0aW1lLi4pXG4gICAgICAgIGNvbnN0IHRpbWUgPSB2YWx1ZTtcbiAgICAgICAgY29uc3QgcmlzZSA9IGhlbHBlcignU1VOUklTRScsIGAke3RpbWV9YCk7XG4gICAgICAgIHJldHVybiByaXNlO1xuICAgIH1cbiAgICBjb25zdCBzdW5zZXRGbiA9ICh2YWx1ZSkgPT4ge1xuICAgICAgICAvLyAhISEgbmVlZCB0byBydW4gdmFsdWUgaW4gYSBmbiwgbGlrZSBhYm92ZVxuICAgICAgICBjb25zdCB0aW1lID0gdmFsdWU7XG4gICAgICAgIGNvbnN0IHNldCA9IGhlbHBlcignU1VOU0VUJywgYCR7dGltZX1gKTtcbiAgICAgICAgcmV0dXJuIHNldDtcbiAgICB9XG4gICAgcmV0dXJuIHsgd2luZEZuLCB2aXNGbiwgaHVtaWRGbiwgZmVlbHNGbiwgcG9wRm4sIHByZWNpcEZuLCBhaXJGbiwgcHJlc3N1cmVGbiwgc3VucmlzZUZuLCBzdW5zZXRGbiB9XG59KSgpO1xuY29uc3QgZmlsbERldGFpbENvbnRhaW5lciA9IChpbnB1dCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGlucHV0KTtcbiAgICBkZXRhaWxDb250YWluZXIuYXBwZW5kQ2hpbGQoZGV0YWlsLndpbmRGbihpbnB1dC53aW5kKSk7XG4gICAgZGV0YWlsQ29udGFpbmVyLmFwcGVuZENoaWxkKGRldGFpbC52aXNGbihpbnB1dC52aXNpYmlsaXR5KSk7XG4gICAgZGV0YWlsQ29udGFpbmVyLmFwcGVuZENoaWxkKGRldGFpbC5mZWVsc0ZuKGlucHV0LmZlZWxzTGlrZSkpO1xuICAgIGRldGFpbENvbnRhaW5lci5hcHBlbmRDaGlsZChkZXRhaWwuaHVtaWRGbihpbnB1dC5odW1pZGl0eSkpO1xuICAgIGRldGFpbENvbnRhaW5lci5hcHBlbmRDaGlsZChkZXRhaWwucG9wRm4oaW5wdXQucG9wKSk7XG4gICAgZGV0YWlsQ29udGFpbmVyLmFwcGVuZENoaWxkKGRldGFpbC5wcmVjaXBGbihpbnB1dC5wcmVjaXApKTtcbiAgICBkZXRhaWxDb250YWluZXIuYXBwZW5kQ2hpbGQoZGV0YWlsLmFpckZuKGlucHV0LmFpclF1YWxpdHkpKTtcbiAgICBkZXRhaWxDb250YWluZXIuYXBwZW5kQ2hpbGQoZGV0YWlsLnByZXNzdXJlRm4oaW5wdXQucHJlc3N1cmUpKTtcbiAgICBkZXRhaWxDb250YWluZXIuYXBwZW5kQ2hpbGQoZGV0YWlsLnN1bnJpc2VGbihpbnB1dC5zdW5yaXNlKSk7XG4gICAgZGV0YWlsQ29udGFpbmVyLmFwcGVuZENoaWxkKGRldGFpbC5zdW5zZXRGbihpbnB1dC5zdW5zZXQpKTtcbiAgICByZXR1cm4gZGV0YWlsQ29udGFpbmVyO1xufVxuLy8gZ29hbDogZGlzcGxheSBvZiBleHRyYSBkYXRhIChib3gpXG4vLyBzdW5yaXNlLCBzdW5zZXQsIGZlZWxzIGxpa2UsIHBvcCwgcHJlY2lwIGFjY3VtLCBwcmVzc3VyZSwgYWlycSwgdmlzLCB3aW5kLCBodW1pZGl0eSBcbmNvbnN0IG9iaiA9IHtcbiAgICAvLyBjaXR5OiBcIkRlbnZlclwiLFxuICAgIC8vIGNvdW50cnk6IFwiVVNcIixcbiAgICAvLyB0ZW1wOiBcIjgyXCIsXG4gICAgLy8gY29uZGl0aW9uczogXCJSYWluXCIsXG4gICAgLy8gZGVzY3JpcHRpb246IFwibGlnaHQgcmFpblwiLFxuICAgIHdpbmQ6IFwiOFwiLFxuICAgIHZpc2liaWxpdHk6IDEwMDAwLFxuICAgIGh1bWlkaXR5OiAyOCxcbiAgICBmZWVsc0xpa2U6IFwiODFcIixcbiAgICBwb3A6IFwiMC40N1wiLFxuICAgIHByZWNpcDogXCIwLjEzXCIsXG4gICAgYWlyUXVhbGl0eTogXCJ1bmtub3duXCIsXG4gICAgcHJlc3N1cmU6IDEwMTUsXG4gICAgc3VucmlzZTogMTY2MjEyMTc1MCxcbiAgICBzdW5zZXQ6IDE2NjIxNjg2MjgsXG59XG5leHBvcnQgeyBmaWxsRGV0YWlsQ29udGFpbmVyLCBvYmogfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
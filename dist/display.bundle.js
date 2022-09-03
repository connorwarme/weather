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
const detailContainer = (0,_utility__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {"class": "extraContainer"});
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
        const label = (0,_utility__WEBPACK_IMPORTED_MODULE_0__["default"])('h4', {"class": "detailLabel"});
        const data = (0,_utility__WEBPACK_IMPORTED_MODULE_0__["default"])('h3', {"class": "detailData"});
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
        const pop = helper('CHANCE OF PRECIP', `${value * 100}%`);
        return pop;
    }
    const precipFn = (value) => {
        const precip = helper('PRECIP ACCUMULATION', `${value}mm in last 3h`);
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
    detailContainer.appendChild(detail.popFn(input.pop));
    detailContainer.appendChild(detail.precipFn(input.precip3h));
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
    precip3h: "0.13",
    airQuality: "unknown",
    pressure: 1015,
    sunrise: 1662121750,
    sunset: 1662168628,
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcGxheS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGlEQUFpRCxLQUFLO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsYUFBYTs7Ozs7O1VDZDVCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTnNDO0FBQ3RDO0FBQ0Esd0JBQXdCLG9EQUFhLFNBQVMsMEJBQTBCO0FBQ3hFO0FBQ0EsbUJBQW1CLG9EQUFhLFNBQVMsWUFBWSxNQUFNLEVBQUU7QUFDN0QsNEJBQTRCLE1BQU07QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsT0FBTyxLQUFLLGFBQWE7QUFDaEQ7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG9EQUFhLFNBQVMscUJBQXFCO0FBQ3JFLHNCQUFzQixvREFBYSxRQUFRLHVCQUF1QjtBQUNsRSxxQkFBcUIsb0RBQWEsUUFBUSxzQkFBc0I7QUFDaEUsK0JBQStCLFlBQVk7QUFDM0MsOEJBQThCLE1BQU07QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLE1BQU07QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsY0FBYztBQUMxRDtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsTUFBTTtBQUNsRDtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsTUFBTTtBQUNwRDtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsWUFBWTtBQUM5RDtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsTUFBTTtBQUM5RDtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsTUFBTTtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxNQUFNO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxLQUFLO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsS0FBSztBQUM3QztBQUNBO0FBQ0EsYUFBYTtBQUNiLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXIvLi9zcmMvdXRpbGl0eS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9kaXNwbGF5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIERPTSBmdW5jdGlvbnNcbi8vIGhlbHBlciBmdW5jdGlvbnMgdG8gY3JlYXRlIERPTSBlbGVtZW50IGFuZCBhZGQgYXR0cmlidXRlc1xuLy8gaXMgdGhlcmUgYSBtb3JlIGVmZmVjdGl2ZS9lZmZpY2llbnQgd2F5IHRvIGRvIHRoaXM/IVxuY29uc3Qgc2V0QXR0cmlidXRlcyA9IChlbGVtZW50LCBhdHRyaWJ1dGVzKSA9PiB7XG4gICAgT2JqZWN0LmVudHJpZXMoYXR0cmlidXRlcykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuICAgIH0pXG59XG5jb25zdCBjcmVhdGVFbGVtZW50ID0gKHR5cGUsIGF0dHJpYnV0ZXMpID0+IHtcbiAgICBjb25zdCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgJHt0eXBlfWApO1xuICAgIGlmIChhdHRyaWJ1dGVzID09IG51bGwpIHJldHVybiBuZXdFbGVtZW50O1xuICAgIHNldEF0dHJpYnV0ZXMobmV3RWxlbWVudCwgYXR0cmlidXRlcyk7XG4gICAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVFbGVtZW50OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSBcIi4vdXRpbGl0eVwiO1xuLy8gY3JlYXRlIGRpc3BsYXlcbmNvbnN0IGRldGFpbENvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcImNsYXNzXCI6IFwiZXh0cmFDb250YWluZXJcIn0pO1xuY29uc3QgZGlzcGxheVNpbmdsZSA9IChpbnB1dCkgPT4ge1xuICAgIGNvbnN0IHNpbmdsZSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcImNsYXNzXCI6IGAke2lucHV0fWB9KTtcbiAgICBzaW5nbGUudGV4dENvbnRlbnQgPSBgJHtpbnB1dH1gO1xuICAgIC8vICEhISBtaWdodCBuZWVkIHR3byBsaW5lcyBvZiBjb250ZW50IC0gb25lIGZvciBrZXksIG9uZSBmb3IgcHJvcGVydHlcbiAgICByZXR1cm4gc2luZ2xlO1xufVxuY29uc3QgZXh0cmFGYWN0b3J5ID0gKGlucHV0KSA9PiB7XG4gICAgY29uc29sZS5sb2coaW5wdXQuY2l0eSk7XG4gICAgY29uc3QgYXJyYXkgPSBPYmplY3Qua2V5cyhpbnB1dCk7XG4gICAgYXJyYXkuZm9yRWFjaChpbmRleCA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGAke2luZGV4fSBpbiAke2lucHV0W2luZGV4XX1gKTtcbiAgICAgICAgZGV0YWlsQ29udGFpbmVyLmFwcGVuZENoaWxkKGRpc3BsYXlTaW5nbGUoaW5wdXRbaW5kZXhdKSk7XG4gICAgfSlcbiAgICByZXR1cm4gZXh0cmFEaXY7XG4gICAgLy8gY291bGQgdXNlIGZvckVhY2hcbiAgICAvLyBuZWVkIGlucHV0IHRvIGJlIGFuIGFycmF5IG9mIHRoZSBvYmplY3QncyBwcm9wZXJ0aWVzXG59XG5jb25zdCBkZXRhaWwgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGhlbHBlciA9IChkZXNjcmlwdGlvbiwgdmFsdWUpID0+IHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge1wiY2xhc3NcIjogXCJkZXRhaWxEaXZcIn0pO1xuICAgICAgICBjb25zdCBsYWJlbCA9IGNyZWF0ZUVsZW1lbnQoJ2g0Jywge1wiY2xhc3NcIjogXCJkZXRhaWxMYWJlbFwifSk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBjcmVhdGVFbGVtZW50KCdoMycsIHtcImNsYXNzXCI6IFwiZGV0YWlsRGF0YVwifSk7XG4gICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gYCR7ZGVzY3JpcHRpb259YDtcbiAgICAgICAgZGF0YS50ZXh0Q29udGVudCA9IGAke3ZhbHVlfWA7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRhKTtcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9XG4gICAgY29uc3Qgd2luZEZuID0gKHZhbHVlKSA9PiB7XG4gICAgICAgIC8vICEhISBtaWdodCBuZWVkIGEgZmV3IHRoaW5ncyAtIG9uZSBmb3Igd2luZCBzcGVlZCwgYW5vdGhlciBmb3IgZGlyZWN0aW9uXG4gICAgICAgIGNvbnN0IHdpbmQgPSBoZWxwZXIoXCJXSU5EXCIsIGAke3ZhbHVlfWttL2hgKTtcbiAgICAgICAgLy8gY2hlY2sgdW5pdHNcbiAgICAgICAgcmV0dXJuIHdpbmQ7XG4gICAgfVxuICAgIGNvbnN0IHZpc0ZuID0gKHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IHZpcyA9IGhlbHBlcignVklTSUJJTElUWScsIGAke3ZhbHVlIC8gMTAwMH0ga21gKTtcbiAgICAgICAgcmV0dXJuIHZpcztcbiAgICB9XG4gICAgY29uc3QgaHVtaWRGbiA9ICh2YWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCBodW1pZCA9IGhlbHBlcignSFVNSURJVFknLCBgJHt2YWx1ZX0lYCk7XG4gICAgICAgIHJldHVybiBodW1pZDtcbiAgICB9XG4gICAgY29uc3QgZmVlbHNGbiA9ICh2YWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCBmZWVscyA9IGhlbHBlcignRkVFTFMgTElLRScsIGAke3ZhbHVlfWApO1xuICAgICAgICByZXR1cm4gZmVlbHM7XG4gICAgfVxuICAgIGNvbnN0IHBvcEZuID0gKHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IHBvcCA9IGhlbHBlcignQ0hBTkNFIE9GIFBSRUNJUCcsIGAke3ZhbHVlICogMTAwfSVgKTtcbiAgICAgICAgcmV0dXJuIHBvcDtcbiAgICB9XG4gICAgY29uc3QgcHJlY2lwRm4gPSAodmFsdWUpID0+IHtcbiAgICAgICAgY29uc3QgcHJlY2lwID0gaGVscGVyKCdQUkVDSVAgQUNDVU1VTEFUSU9OJywgYCR7dmFsdWV9bW0gaW4gbGFzdCAzaGApO1xuICAgICAgICByZXR1cm4gcHJlY2lwO1xuICAgIH1cbiAgICBjb25zdCBhaXJGbiA9ICh2YWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCBhaXIgPSBoZWxwZXIoJ0FJUiBRVUFMSVRZJywgYCR7dmFsdWV9YCk7XG4gICAgICAgIC8vICEhISBtaWdodCBuZWVkIHVuaXRzIGNsYXJpZmllciAoc2NvcmUgb3V0IG9mIDEwMD8pXG4gICAgICAgIHJldHVybiBhaXI7XG4gICAgfVxuICAgIGNvbnN0IHByZXNzdXJlRm4gPSAodmFsdWUpID0+IHtcbiAgICAgICAgY29uc3QgcHJlc3N1cmUgPSBoZWxwZXIoJ1BSRVNTVVJFJywgYCR7dmFsdWV9YCk7XG4gICAgICAgIC8vICEhISBuZWVkIHVuaXRzXG4gICAgICAgIHJldHVybiBwcmVzc3VyZTtcbiAgICB9XG4gICAgY29uc3Qgc3VucmlzZUZuID0gKHZhbHVlKSA9PiB7XG4gICAgICAgIC8vICEhISBuZWVkIGZuIHRvIGNvbnZlcnQgdmFsdWUgdG8gdGltZSAoYWxzbyBjaGVjayBmb3IgbG9jYWwgdGltZS4uKVxuICAgICAgICBjb25zdCB0aW1lID0gdmFsdWU7XG4gICAgICAgIGNvbnN0IHJpc2UgPSBoZWxwZXIoJ1NVTlJJU0UnLCBgJHt0aW1lfWApO1xuICAgICAgICByZXR1cm4gcmlzZTtcbiAgICB9XG4gICAgY29uc3Qgc3Vuc2V0Rm4gPSAodmFsdWUpID0+IHtcbiAgICAgICAgLy8gISEhIG5lZWQgdG8gcnVuIHZhbHVlIGluIGEgZm4sIGxpa2UgYWJvdmVcbiAgICAgICAgY29uc3QgdGltZSA9IHZhbHVlO1xuICAgICAgICBjb25zdCBzZXQgPSBoZWxwZXIoJ1NVTlNFVCcsIGAke3RpbWV9YCk7XG4gICAgICAgIHJldHVybiBzZXQ7XG4gICAgfVxuICAgIHJldHVybiB7IHdpbmRGbiwgdmlzRm4sIGh1bWlkRm4sIGZlZWxzRm4sIHBvcEZuLCBwcmVjaXBGbiwgYWlyRm4sIHByZXNzdXJlRm4sIHN1bnJpc2VGbiwgc3Vuc2V0Rm4gfVxufSkoKTtcbmNvbnN0IGZpbGxEZXRhaWxDb250YWluZXIgPSAoaW5wdXQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhpbnB1dCk7XG4gICAgZGV0YWlsQ29udGFpbmVyLmFwcGVuZENoaWxkKGRldGFpbC53aW5kRm4oaW5wdXQud2luZCkpO1xuICAgIGRldGFpbENvbnRhaW5lci5hcHBlbmRDaGlsZChkZXRhaWwudmlzRm4oaW5wdXQudmlzaWJpbGl0eSkpO1xuICAgIGRldGFpbENvbnRhaW5lci5hcHBlbmRDaGlsZChkZXRhaWwucG9wRm4oaW5wdXQucG9wKSk7XG4gICAgZGV0YWlsQ29udGFpbmVyLmFwcGVuZENoaWxkKGRldGFpbC5wcmVjaXBGbihpbnB1dC5wcmVjaXAzaCkpO1xuICAgIGRldGFpbENvbnRhaW5lci5hcHBlbmRDaGlsZChkZXRhaWwuYWlyRm4oaW5wdXQuYWlyUXVhbGl0eSkpO1xuICAgIGRldGFpbENvbnRhaW5lci5hcHBlbmRDaGlsZChkZXRhaWwucHJlc3N1cmVGbihpbnB1dC5wcmVzc3VyZSkpO1xuICAgIGRldGFpbENvbnRhaW5lci5hcHBlbmRDaGlsZChkZXRhaWwuc3VucmlzZUZuKGlucHV0LnN1bnJpc2UpKTtcbiAgICBkZXRhaWxDb250YWluZXIuYXBwZW5kQ2hpbGQoZGV0YWlsLnN1bnNldEZuKGlucHV0LnN1bnNldCkpO1xuICAgIHJldHVybiBkZXRhaWxDb250YWluZXI7XG59XG4vLyBnb2FsOiBkaXNwbGF5IG9mIGV4dHJhIGRhdGEgKGJveClcbi8vIHN1bnJpc2UsIHN1bnNldCwgZmVlbHMgbGlrZSwgcG9wLCBwcmVjaXAgYWNjdW0sIHByZXNzdXJlLCBhaXJxLCB2aXMsIHdpbmQsIGh1bWlkaXR5IFxuY29uc3Qgb2JqID0ge1xuICAgIC8vIGNpdHk6IFwiRGVudmVyXCIsXG4gICAgLy8gY291bnRyeTogXCJVU1wiLFxuICAgIC8vIHRlbXA6IFwiODJcIixcbiAgICAvLyBjb25kaXRpb25zOiBcIlJhaW5cIixcbiAgICAvLyBkZXNjcmlwdGlvbjogXCJsaWdodCByYWluXCIsXG4gICAgd2luZDogXCI4XCIsXG4gICAgdmlzaWJpbGl0eTogMTAwMDAsXG4gICAgaHVtaWRpdHk6IDI4LFxuICAgIGZlZWxzTGlrZTogXCI4MVwiLFxuICAgIHBvcDogXCIwLjQ3XCIsXG4gICAgcHJlY2lwM2g6IFwiMC4xM1wiLFxuICAgIGFpclF1YWxpdHk6IFwidW5rbm93blwiLFxuICAgIHByZXNzdXJlOiAxMDE1LFxuICAgIHN1bnJpc2U6IDE2NjIxMjE3NTAsXG4gICAgc3Vuc2V0OiAxNjYyMTY4NjI4LFxufVxuZXhwb3J0IHsgZmlsbERldGFpbENvbnRhaW5lciwgb2JqIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
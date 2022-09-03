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
        const label = (0,_utility__WEBPACK_IMPORTED_MODULE_0__["default"])('h4', {"class": "detailLabel"});
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
    detailContainer.appendChild(detail.feelsFn(input.feelsLike));
    detailContainer.appendChild(detail.humidFn(input.humidity));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcGxheS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGlEQUFpRCxLQUFLO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsYUFBYTs7Ozs7O1VDZDVCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTnNDO0FBQ3RDO0FBQ0Esd0JBQXdCLG9EQUFhLFNBQVMsMkJBQTJCO0FBQ3pFO0FBQ0EsbUJBQW1CLG9EQUFhLFNBQVMsWUFBWSxNQUFNLEVBQUU7QUFDN0QsNEJBQTRCLE1BQU07QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsT0FBTyxLQUFLLGFBQWE7QUFDaEQ7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG9EQUFhLFNBQVMscUJBQXFCO0FBQ3JFLHNCQUFzQixvREFBYSxRQUFRLHVCQUF1QjtBQUNsRSxxQkFBcUIsb0RBQWEsU0FBUyxzQkFBc0I7QUFDakUsK0JBQStCLFlBQVk7QUFDM0MsOEJBQThCLE1BQU07QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLE1BQU07QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsY0FBYztBQUMxRDtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsTUFBTTtBQUNsRDtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsTUFBTTtBQUNwRDtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsWUFBWTtBQUM5RDtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsTUFBTTtBQUM5RDtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsTUFBTTtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxNQUFNO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxLQUFLO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsS0FBSztBQUM3QztBQUNBO0FBQ0EsYUFBYTtBQUNiLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL3V0aWxpdHkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvZGlzcGxheS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBET00gZnVuY3Rpb25zXG4vLyBoZWxwZXIgZnVuY3Rpb25zIHRvIGNyZWF0ZSBET00gZWxlbWVudCBhbmQgYWRkIGF0dHJpYnV0ZXNcbi8vIGlzIHRoZXJlIGEgbW9yZSBlZmZlY3RpdmUvZWZmaWNpZW50IHdheSB0byBkbyB0aGlzPyFcbmNvbnN0IHNldEF0dHJpYnV0ZXMgPSAoZWxlbWVudCwgYXR0cmlidXRlcykgPT4ge1xuICAgIE9iamVjdC5lbnRyaWVzKGF0dHJpYnV0ZXMpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcbiAgICB9KVxufVxuY29uc3QgY3JlYXRlRWxlbWVudCA9ICh0eXBlLCBhdHRyaWJ1dGVzKSA9PiB7XG4gICAgY29uc3QgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYCR7dHlwZX1gKTtcbiAgICBpZiAoYXR0cmlidXRlcyA9PSBudWxsKSByZXR1cm4gbmV3RWxlbWVudDtcbiAgICBzZXRBdHRyaWJ1dGVzKG5ld0VsZW1lbnQsIGF0dHJpYnV0ZXMpO1xuICAgIHJldHVybiBuZXdFbGVtZW50O1xufVxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRWxlbWVudDsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gXCIuL3V0aWxpdHlcIjtcbi8vIGNyZWF0ZSBkaXNwbGF5XG5jb25zdCBkZXRhaWxDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7XCJjbGFzc1wiOiBcImRldGFpbENvbnRhaW5lclwifSk7XG5jb25zdCBkaXNwbGF5U2luZ2xlID0gKGlucHV0KSA9PiB7XG4gICAgY29uc3Qgc2luZ2xlID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge1wiY2xhc3NcIjogYCR7aW5wdXR9YH0pO1xuICAgIHNpbmdsZS50ZXh0Q29udGVudCA9IGAke2lucHV0fWA7XG4gICAgLy8gISEhIG1pZ2h0IG5lZWQgdHdvIGxpbmVzIG9mIGNvbnRlbnQgLSBvbmUgZm9yIGtleSwgb25lIGZvciBwcm9wZXJ0eVxuICAgIHJldHVybiBzaW5nbGU7XG59XG5jb25zdCBleHRyYUZhY3RvcnkgPSAoaW5wdXQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhpbnB1dC5jaXR5KTtcbiAgICBjb25zdCBhcnJheSA9IE9iamVjdC5rZXlzKGlucHV0KTtcbiAgICBhcnJheS5mb3JFYWNoKGluZGV4ID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYCR7aW5kZXh9IGluICR7aW5wdXRbaW5kZXhdfWApO1xuICAgICAgICBkZXRhaWxDb250YWluZXIuYXBwZW5kQ2hpbGQoZGlzcGxheVNpbmdsZShpbnB1dFtpbmRleF0pKTtcbiAgICB9KVxuICAgIHJldHVybiBleHRyYURpdjtcbiAgICAvLyBjb3VsZCB1c2UgZm9yRWFjaFxuICAgIC8vIG5lZWQgaW5wdXQgdG8gYmUgYW4gYXJyYXkgb2YgdGhlIG9iamVjdCdzIHByb3BlcnRpZXNcbn1cbmNvbnN0IGRldGFpbCA9ICgoKSA9PiB7XG4gICAgY29uc3QgaGVscGVyID0gKGRlc2NyaXB0aW9uLCB2YWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7XCJjbGFzc1wiOiBcImRldGFpbERpdlwifSk7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gY3JlYXRlRWxlbWVudCgnaDQnLCB7XCJjbGFzc1wiOiBcImRldGFpbExhYmVsXCJ9KTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcImNsYXNzXCI6IFwiZGV0YWlsRGF0YVwifSk7XG4gICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gYCR7ZGVzY3JpcHRpb259YDtcbiAgICAgICAgZGF0YS50ZXh0Q29udGVudCA9IGAke3ZhbHVlfWA7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRhKTtcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9XG4gICAgY29uc3Qgd2luZEZuID0gKHZhbHVlKSA9PiB7XG4gICAgICAgIC8vICEhISBtaWdodCBuZWVkIGEgZmV3IHRoaW5ncyAtIG9uZSBmb3Igd2luZCBzcGVlZCwgYW5vdGhlciBmb3IgZGlyZWN0aW9uXG4gICAgICAgIGNvbnN0IHdpbmQgPSBoZWxwZXIoXCJXSU5EXCIsIGAke3ZhbHVlfWttL2hgKTtcbiAgICAgICAgLy8gY2hlY2sgdW5pdHNcbiAgICAgICAgcmV0dXJuIHdpbmQ7XG4gICAgfVxuICAgIGNvbnN0IHZpc0ZuID0gKHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IHZpcyA9IGhlbHBlcignVklTSUJJTElUWScsIGAke3ZhbHVlIC8gMTAwMH0ga21gKTtcbiAgICAgICAgcmV0dXJuIHZpcztcbiAgICB9XG4gICAgY29uc3QgaHVtaWRGbiA9ICh2YWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCBodW1pZCA9IGhlbHBlcignSFVNSURJVFknLCBgJHt2YWx1ZX0lYCk7XG4gICAgICAgIHJldHVybiBodW1pZDtcbiAgICB9XG4gICAgY29uc3QgZmVlbHNGbiA9ICh2YWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCBmZWVscyA9IGhlbHBlcignRkVFTFMgTElLRScsIGAke3ZhbHVlfWApO1xuICAgICAgICByZXR1cm4gZmVlbHM7XG4gICAgfVxuICAgIGNvbnN0IHBvcEZuID0gKHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IHBvcCA9IGhlbHBlcignQ0hBTkNFIE9GIFBSRUNJUCcsIGAke3ZhbHVlICogMTAwfSVgKTtcbiAgICAgICAgcmV0dXJuIHBvcDtcbiAgICB9XG4gICAgY29uc3QgcHJlY2lwRm4gPSAodmFsdWUpID0+IHtcbiAgICAgICAgY29uc3QgcHJlY2lwID0gaGVscGVyKCdQUkVDSVAgQUNDVU1VTEFUSU9OJywgYCR7dmFsdWV9bW0gaW4gbGFzdCAzaGApO1xuICAgICAgICByZXR1cm4gcHJlY2lwO1xuICAgIH1cbiAgICBjb25zdCBhaXJGbiA9ICh2YWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCBhaXIgPSBoZWxwZXIoJ0FJUiBRVUFMSVRZJywgYCR7dmFsdWV9YCk7XG4gICAgICAgIC8vICEhISBtaWdodCBuZWVkIHVuaXRzIGNsYXJpZmllciAoc2NvcmUgb3V0IG9mIDEwMD8pXG4gICAgICAgIHJldHVybiBhaXI7XG4gICAgfVxuICAgIGNvbnN0IHByZXNzdXJlRm4gPSAodmFsdWUpID0+IHtcbiAgICAgICAgY29uc3QgcHJlc3N1cmUgPSBoZWxwZXIoJ1BSRVNTVVJFJywgYCR7dmFsdWV9YCk7XG4gICAgICAgIC8vICEhISBuZWVkIHVuaXRzXG4gICAgICAgIHJldHVybiBwcmVzc3VyZTtcbiAgICB9XG4gICAgY29uc3Qgc3VucmlzZUZuID0gKHZhbHVlKSA9PiB7XG4gICAgICAgIC8vICEhISBuZWVkIGZuIHRvIGNvbnZlcnQgdmFsdWUgdG8gdGltZSAoYWxzbyBjaGVjayBmb3IgbG9jYWwgdGltZS4uKVxuICAgICAgICBjb25zdCB0aW1lID0gdmFsdWU7XG4gICAgICAgIGNvbnN0IHJpc2UgPSBoZWxwZXIoJ1NVTlJJU0UnLCBgJHt0aW1lfWApO1xuICAgICAgICByZXR1cm4gcmlzZTtcbiAgICB9XG4gICAgY29uc3Qgc3Vuc2V0Rm4gPSAodmFsdWUpID0+IHtcbiAgICAgICAgLy8gISEhIG5lZWQgdG8gcnVuIHZhbHVlIGluIGEgZm4sIGxpa2UgYWJvdmVcbiAgICAgICAgY29uc3QgdGltZSA9IHZhbHVlO1xuICAgICAgICBjb25zdCBzZXQgPSBoZWxwZXIoJ1NVTlNFVCcsIGAke3RpbWV9YCk7XG4gICAgICAgIHJldHVybiBzZXQ7XG4gICAgfVxuICAgIHJldHVybiB7IHdpbmRGbiwgdmlzRm4sIGh1bWlkRm4sIGZlZWxzRm4sIHBvcEZuLCBwcmVjaXBGbiwgYWlyRm4sIHByZXNzdXJlRm4sIHN1bnJpc2VGbiwgc3Vuc2V0Rm4gfVxufSkoKTtcbmNvbnN0IGZpbGxEZXRhaWxDb250YWluZXIgPSAoaW5wdXQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhpbnB1dCk7XG4gICAgZGV0YWlsQ29udGFpbmVyLmFwcGVuZENoaWxkKGRldGFpbC53aW5kRm4oaW5wdXQud2luZCkpO1xuICAgIGRldGFpbENvbnRhaW5lci5hcHBlbmRDaGlsZChkZXRhaWwudmlzRm4oaW5wdXQudmlzaWJpbGl0eSkpO1xuICAgIGRldGFpbENvbnRhaW5lci5hcHBlbmRDaGlsZChkZXRhaWwuZmVlbHNGbihpbnB1dC5mZWVsc0xpa2UpKTtcbiAgICBkZXRhaWxDb250YWluZXIuYXBwZW5kQ2hpbGQoZGV0YWlsLmh1bWlkRm4oaW5wdXQuaHVtaWRpdHkpKTtcbiAgICBkZXRhaWxDb250YWluZXIuYXBwZW5kQ2hpbGQoZGV0YWlsLnBvcEZuKGlucHV0LnBvcCkpO1xuICAgIGRldGFpbENvbnRhaW5lci5hcHBlbmRDaGlsZChkZXRhaWwucHJlY2lwRm4oaW5wdXQucHJlY2lwM2gpKTtcbiAgICBkZXRhaWxDb250YWluZXIuYXBwZW5kQ2hpbGQoZGV0YWlsLmFpckZuKGlucHV0LmFpclF1YWxpdHkpKTtcbiAgICBkZXRhaWxDb250YWluZXIuYXBwZW5kQ2hpbGQoZGV0YWlsLnByZXNzdXJlRm4oaW5wdXQucHJlc3N1cmUpKTtcbiAgICBkZXRhaWxDb250YWluZXIuYXBwZW5kQ2hpbGQoZGV0YWlsLnN1bnJpc2VGbihpbnB1dC5zdW5yaXNlKSk7XG4gICAgZGV0YWlsQ29udGFpbmVyLmFwcGVuZENoaWxkKGRldGFpbC5zdW5zZXRGbihpbnB1dC5zdW5zZXQpKTtcbiAgICByZXR1cm4gZGV0YWlsQ29udGFpbmVyO1xufVxuLy8gZ29hbDogZGlzcGxheSBvZiBleHRyYSBkYXRhIChib3gpXG4vLyBzdW5yaXNlLCBzdW5zZXQsIGZlZWxzIGxpa2UsIHBvcCwgcHJlY2lwIGFjY3VtLCBwcmVzc3VyZSwgYWlycSwgdmlzLCB3aW5kLCBodW1pZGl0eSBcbmNvbnN0IG9iaiA9IHtcbiAgICAvLyBjaXR5OiBcIkRlbnZlclwiLFxuICAgIC8vIGNvdW50cnk6IFwiVVNcIixcbiAgICAvLyB0ZW1wOiBcIjgyXCIsXG4gICAgLy8gY29uZGl0aW9uczogXCJSYWluXCIsXG4gICAgLy8gZGVzY3JpcHRpb246IFwibGlnaHQgcmFpblwiLFxuICAgIHdpbmQ6IFwiOFwiLFxuICAgIHZpc2liaWxpdHk6IDEwMDAwLFxuICAgIGh1bWlkaXR5OiAyOCxcbiAgICBmZWVsc0xpa2U6IFwiODFcIixcbiAgICBwb3A6IFwiMC40N1wiLFxuICAgIHByZWNpcDNoOiBcIjAuMTNcIixcbiAgICBhaXJRdWFsaXR5OiBcInVua25vd25cIixcbiAgICBwcmVzc3VyZTogMTAxNSxcbiAgICBzdW5yaXNlOiAxNjYyMTIxNzUwLFxuICAgIHN1bnNldDogMTY2MjE2ODYyOCxcbn1cbmV4cG9ydCB7IGZpbGxEZXRhaWxDb250YWluZXIsIG9iaiB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
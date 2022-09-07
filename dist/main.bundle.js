/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/fromUnixTime/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/fromUnixTime/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ fromUnixTime)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name fromUnixTime
 * @category Timestamp Helpers
 * @summary Create a date from a Unix timestamp.
 *
 * @description
 * Create a date from a Unix timestamp (in seconds). Decimal values will be discarded.
 *
 * @param {Number} unixTime - the given Unix timestamp (in seconds)
 * @returns {Date} the date
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Create the date 29 February 2012 11:45:05:
 * const result = fromUnixTime(1330515905)
 * //=> Wed Feb 29 2012 11:45:05
 */

function fromUnixTime(dirtyUnixTime) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var unixTime = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyUnixTime);
  return (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(unixTime * 1000);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/utility.js":
/*!************************!*\
  !*** ./src/utility.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createElement": () => (/* binding */ createElement),
/* harmony export */   "dateFn": () => (/* binding */ dateFn),
/* harmony export */   "hourMin": () => (/* binding */ hourMin),
/* harmony export */   "tempFn": () => (/* binding */ tempFn)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/fromUnixTime/index.js");

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
const time = (input, offset) => {
    const localDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(input);
    const localOffset = localDate.getTimezoneOffset();
    localDate.setMinutes(localDate.getMinutes() + localOffset);
    localDate.setMinutes(localDate.getMinutes() + (offset / 60));
    return localDate;
}
const hourMin = (input, offset) => {
    const value = time(input, offset);
    return `${value.getHours()}:${value.getMinutes()}`;
}
const dateFn = (input, offset) => {
    const value = time(input, offset);
    return value.getDate();
}
// temp -> convert F to C
// planning to have both in an object
const tempFn = (input) => {
    const tempObj = {
        far: Math.round(Number(input)),
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
/*!****************************!*\
  !*** ./src/displayMain.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility */ "./src/utility.js");


//
const displayMain = (() => {
  const create = (object) => {
    const mainContainer = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", { class: "mainContainer" });
    const locationContainer = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "locationContainer",
    });
    const city = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", { class: "mainCity" });
    const country = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", { class: "mainCountry" });
    const tempContainer = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", { class: "mainTempContainer" });
    const highlowContainer = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "highlowContainer",
    });
    const iconContainer = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", { class: "iconContainer" });
    const description = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", { class: "mainDescription" });
    // !!! don't know if I should display icon image BELOW other data, or as backdrop of the mainContainer
    // content
    city.textContent = object.city;
    country.textContent = object.country;
    tempContainer.textContent = object.temp.far;
    let highTemp = "";
    if (object.temp.far > object.high.far) {
      highTemp = object.temp.far;
    } else {
      highTemp = object.high.far;
    }
    highlowContainer.textContent = `High: ${highTemp} / Low: ${object.low.far}`;
    description.textContent = object.description;
    // append it all together
    mainContainer.appendChild(locationContainer);
    locationContainer.appendChild(city);
    locationContainer.appendChild(country);
    mainContainer.appendChild(tempContainer);
    mainContainer.appendChild(highlowContainer);
    mainContainer.appendChild(iconContainer);
    iconContainer.appendChild(description);

    return mainContainer;
  };
  return { create };
})();
const fillMainContainer = (object) => {
  const main = displayMain.create(object);
  return main;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fillMainContainer);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0plO0FBQ2Y7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1p3QztBQUNXO0FBQ007QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixhQUFhLE1BQU07QUFDbkIsWUFBWSxXQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmLEVBQUUsc0VBQVk7QUFDZCxpQkFBaUIsbUVBQVM7QUFDMUIsU0FBUyw0REFBTTtBQUNmOzs7Ozs7Ozs7Ozs7Ozs7QUN6QnlEO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLGFBQWEsTUFBTTtBQUNuQixZQUFZLFdBQVc7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmLEVBQUUsc0VBQVk7QUFDZCx5REFBeUQ7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsME9BQTBPOztBQUUxTztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkR3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGlEQUFpRCxLQUFLO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixvREFBWTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsaUJBQWlCLEdBQUcsbUJBQW1CO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUN2Q0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ04wQzs7QUFFMUM7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHVEQUFhLFVBQVUsd0JBQXdCO0FBQ3pFLDhCQUE4Qix1REFBYTtBQUMzQztBQUNBLEtBQUs7QUFDTCxpQkFBaUIsdURBQWEsVUFBVSxtQkFBbUI7QUFDM0Qsb0JBQW9CLHVEQUFhLFVBQVUsc0JBQXNCO0FBQ2pFLDBCQUEwQix1REFBYSxVQUFVLDRCQUE0QjtBQUM3RSw2QkFBNkIsdURBQWE7QUFDMUM7QUFDQSxLQUFLO0FBQ0wsMEJBQTBCLHVEQUFhLFVBQVUsd0JBQXdCO0FBQ3pFLHdCQUF3Qix1REFBYSxVQUFVLDBCQUEwQjtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSw0Q0FBNEMsVUFBVSxTQUFTLGVBQWU7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsaUJBQWlCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9mcm9tVW5peFRpbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvdXRpbGl0eS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9kaXNwbGF5TWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cblxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGZyb21Vbml4VGltZVxuICogQGNhdGVnb3J5IFRpbWVzdGFtcCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDcmVhdGUgYSBkYXRlIGZyb20gYSBVbml4IHRpbWVzdGFtcC5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENyZWF0ZSBhIGRhdGUgZnJvbSBhIFVuaXggdGltZXN0YW1wIChpbiBzZWNvbmRzKS4gRGVjaW1hbCB2YWx1ZXMgd2lsbCBiZSBkaXNjYXJkZWQuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHVuaXhUaW1lIC0gdGhlIGdpdmVuIFVuaXggdGltZXN0YW1wIChpbiBzZWNvbmRzKVxuICogQHJldHVybnMge0RhdGV9IHRoZSBkYXRlXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ3JlYXRlIHRoZSBkYXRlIDI5IEZlYnJ1YXJ5IDIwMTIgMTE6NDU6MDU6XG4gKiBjb25zdCByZXN1bHQgPSBmcm9tVW5peFRpbWUoMTMzMDUxNTkwNSlcbiAqIC8vPT4gV2VkIEZlYiAyOSAyMDEyIDExOjQ1OjA1XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZnJvbVVuaXhUaW1lKGRpcnR5VW5peFRpbWUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciB1bml4VGltZSA9IHRvSW50ZWdlcihkaXJ0eVVuaXhUaW1lKTtcbiAgcmV0dXJuIHRvRGF0ZSh1bml4VGltZSAqIDEwMDApO1xufSIsImltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgdHlwZW9mIGFyZ3VtZW50ID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjc3RyaW5nLWFyZ3VtZW50c1wiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsImltcG9ydCB7IGZyb21Vbml4VGltZSB9IGZyb20gJ2RhdGUtZm5zJztcbi8vIERPTSBmdW5jdGlvbnNcbi8vIGhlbHBlciBmdW5jdGlvbnMgdG8gY3JlYXRlIERPTSBlbGVtZW50IGFuZCBhZGQgYXR0cmlidXRlc1xuLy8gaXMgdGhlcmUgYSBtb3JlIGVmZmVjdGl2ZS9lZmZpY2llbnQgd2F5IHRvIGRvIHRoaXM/IVxuY29uc3Qgc2V0QXR0cmlidXRlcyA9IChlbGVtZW50LCBhdHRyaWJ1dGVzKSA9PiB7XG4gICAgT2JqZWN0LmVudHJpZXMoYXR0cmlidXRlcykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuICAgIH0pXG59XG5jb25zdCBjcmVhdGVFbGVtZW50ID0gKHR5cGUsIGF0dHJpYnV0ZXMpID0+IHtcbiAgICBjb25zdCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgJHt0eXBlfWApO1xuICAgIGlmIChhdHRyaWJ1dGVzID09IG51bGwpIHJldHVybiBuZXdFbGVtZW50O1xuICAgIHNldEF0dHJpYnV0ZXMobmV3RWxlbWVudCwgYXR0cmlidXRlcyk7XG4gICAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG4vLyB0aW1lIC0+IHRyYW5zZm9ybSB1bml4IHRvIHN0YW5kYXJkXG5jb25zdCB0aW1lID0gKGlucHV0LCBvZmZzZXQpID0+IHtcbiAgICBjb25zdCBsb2NhbERhdGUgPSBmcm9tVW5peFRpbWUoaW5wdXQpO1xuICAgIGNvbnN0IGxvY2FsT2Zmc2V0ID0gbG9jYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG4gICAgbG9jYWxEYXRlLnNldE1pbnV0ZXMobG9jYWxEYXRlLmdldE1pbnV0ZXMoKSArIGxvY2FsT2Zmc2V0KTtcbiAgICBsb2NhbERhdGUuc2V0TWludXRlcyhsb2NhbERhdGUuZ2V0TWludXRlcygpICsgKG9mZnNldCAvIDYwKSk7XG4gICAgcmV0dXJuIGxvY2FsRGF0ZTtcbn1cbmNvbnN0IGhvdXJNaW4gPSAoaW5wdXQsIG9mZnNldCkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gdGltZShpbnB1dCwgb2Zmc2V0KTtcbiAgICByZXR1cm4gYCR7dmFsdWUuZ2V0SG91cnMoKX06JHt2YWx1ZS5nZXRNaW51dGVzKCl9YDtcbn1cbmNvbnN0IGRhdGVGbiA9IChpbnB1dCwgb2Zmc2V0KSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSB0aW1lKGlucHV0LCBvZmZzZXQpO1xuICAgIHJldHVybiB2YWx1ZS5nZXREYXRlKCk7XG59XG4vLyB0ZW1wIC0+IGNvbnZlcnQgRiB0byBDXG4vLyBwbGFubmluZyB0byBoYXZlIGJvdGggaW4gYW4gb2JqZWN0XG5jb25zdCB0ZW1wRm4gPSAoaW5wdXQpID0+IHtcbiAgICBjb25zdCB0ZW1wT2JqID0ge1xuICAgICAgICBmYXI6IE1hdGgucm91bmQoTnVtYmVyKGlucHV0KSksXG4gICAgICAgIGNlbDogTWF0aC5yb3VuZCgoTnVtYmVyKGlucHV0KSAtIDMyKSAqICg1LzkpKSxcbiAgICB9XG4gICAgcmV0dXJuIHRlbXBPYmo7XG59XG5leHBvcnQgeyBjcmVhdGVFbGVtZW50LCB0ZW1wRm4sIGhvdXJNaW4sIGRhdGVGbiB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuL3V0aWxpdHlcIjtcblxuLy9cbmNvbnN0IGRpc3BsYXlNYWluID0gKCgpID0+IHtcbiAgY29uc3QgY3JlYXRlID0gKG9iamVjdCkgPT4ge1xuICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwibWFpbkNvbnRhaW5lclwiIH0pO1xuICAgIGNvbnN0IGxvY2F0aW9uQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzczogXCJsb2NhdGlvbkNvbnRhaW5lclwiLFxuICAgIH0pO1xuICAgIGNvbnN0IGNpdHkgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwibWFpbkNpdHlcIiB9KTtcbiAgICBjb25zdCBjb3VudHJ5ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcIm1haW5Db3VudHJ5XCIgfSk7XG4gICAgY29uc3QgdGVtcENvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJtYWluVGVtcENvbnRhaW5lclwiIH0pO1xuICAgIGNvbnN0IGhpZ2hsb3dDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzOiBcImhpZ2hsb3dDb250YWluZXJcIixcbiAgICB9KTtcbiAgICBjb25zdCBpY29uQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcImljb25Db250YWluZXJcIiB9KTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJtYWluRGVzY3JpcHRpb25cIiB9KTtcbiAgICAvLyAhISEgZG9uJ3Qga25vdyBpZiBJIHNob3VsZCBkaXNwbGF5IGljb24gaW1hZ2UgQkVMT1cgb3RoZXIgZGF0YSwgb3IgYXMgYmFja2Ryb3Agb2YgdGhlIG1haW5Db250YWluZXJcbiAgICAvLyBjb250ZW50XG4gICAgY2l0eS50ZXh0Q29udGVudCA9IG9iamVjdC5jaXR5O1xuICAgIGNvdW50cnkudGV4dENvbnRlbnQgPSBvYmplY3QuY291bnRyeTtcbiAgICB0ZW1wQ29udGFpbmVyLnRleHRDb250ZW50ID0gb2JqZWN0LnRlbXAuZmFyO1xuICAgIGxldCBoaWdoVGVtcCA9IFwiXCI7XG4gICAgaWYgKG9iamVjdC50ZW1wLmZhciA+IG9iamVjdC5oaWdoLmZhcikge1xuICAgICAgaGlnaFRlbXAgPSBvYmplY3QudGVtcC5mYXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhpZ2hUZW1wID0gb2JqZWN0LmhpZ2guZmFyO1xuICAgIH1cbiAgICBoaWdobG93Q29udGFpbmVyLnRleHRDb250ZW50ID0gYEhpZ2g6ICR7aGlnaFRlbXB9IC8gTG93OiAke29iamVjdC5sb3cuZmFyfWA7XG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBvYmplY3QuZGVzY3JpcHRpb247XG4gICAgLy8gYXBwZW5kIGl0IGFsbCB0b2dldGhlclxuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQobG9jYXRpb25Db250YWluZXIpO1xuICAgIGxvY2F0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGNpdHkpO1xuICAgIGxvY2F0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvdW50cnkpO1xuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQodGVtcENvbnRhaW5lcik7XG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChoaWdobG93Q29udGFpbmVyKTtcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGljb25Db250YWluZXIpO1xuICAgIGljb25Db250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gICAgcmV0dXJuIG1haW5Db250YWluZXI7XG4gIH07XG4gIHJldHVybiB7IGNyZWF0ZSB9O1xufSkoKTtcbmNvbnN0IGZpbGxNYWluQ29udGFpbmVyID0gKG9iamVjdCkgPT4ge1xuICBjb25zdCBtYWluID0gZGlzcGxheU1haW4uY3JlYXRlKG9iamVjdCk7XG4gIHJldHVybiBtYWluO1xufTtcbmV4cG9ydCBkZWZhdWx0IGZpbGxNYWluQ29udGFpbmVyO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
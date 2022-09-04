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
    const mainContainer = (0,_utility__WEBPACK_IMPORTED_MODULE_0__["default"])("div", { class: "mainContainer" });
    const locationContainer = (0,_utility__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
      class: "locationContainer",
    });
    const city = (0,_utility__WEBPACK_IMPORTED_MODULE_0__["default"])("div", { class: "mainCity" });
    const country = (0,_utility__WEBPACK_IMPORTED_MODULE_0__["default"])("div", { class: "mainCountry" });
    const tempContainer = (0,_utility__WEBPACK_IMPORTED_MODULE_0__["default"])("div", { class: "mainTempContainer" });
    const highlowContainer = (0,_utility__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
      class: "highlowContainer",
    });
    const iconContainer = (0,_utility__WEBPACK_IMPORTED_MODULE_0__["default"])("div", { class: "iconContainer" });
    const description = (0,_utility__WEBPACK_IMPORTED_MODULE_0__["default"])("div", { class: "mainDescription" });
    // !!! don't know if I should display icon image BELOW other data, or as backdrop of the mainContainer
    // content
    city.textContent = object.city;
    country.textContent = object.country;
    tempContainer.textContent = object.temp;
    highlowContainer.textContent = object.highlow;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGlEQUFpRCxLQUFLO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGFBQWE7Ozs7OztVQ3RCNUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ05zQzs7QUFFdEM7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG9EQUFhLFVBQVUsd0JBQXdCO0FBQ3pFLDhCQUE4QixvREFBYTtBQUMzQztBQUNBLEtBQUs7QUFDTCxpQkFBaUIsb0RBQWEsVUFBVSxtQkFBbUI7QUFDM0Qsb0JBQW9CLG9EQUFhLFVBQVUsc0JBQXNCO0FBQ2pFLDBCQUEwQixvREFBYSxVQUFVLDRCQUE0QjtBQUM3RSw2QkFBNkIsb0RBQWE7QUFDMUM7QUFDQSxLQUFLO0FBQ0wsMEJBQTBCLG9EQUFhLFVBQVUsd0JBQXdCO0FBQ3pFLHdCQUF3QixvREFBYSxVQUFVLDBCQUEwQjtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxpQkFBaUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXIvLi9zcmMvdXRpbGl0eS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9kaXNwbGF5TWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBET00gZnVuY3Rpb25zXG4vLyBoZWxwZXIgZnVuY3Rpb25zIHRvIGNyZWF0ZSBET00gZWxlbWVudCBhbmQgYWRkIGF0dHJpYnV0ZXNcbi8vIGlzIHRoZXJlIGEgbW9yZSBlZmZlY3RpdmUvZWZmaWNpZW50IHdheSB0byBkbyB0aGlzPyFcbmNvbnN0IHNldEF0dHJpYnV0ZXMgPSAoZWxlbWVudCwgYXR0cmlidXRlcykgPT4ge1xuICAgIE9iamVjdC5lbnRyaWVzKGF0dHJpYnV0ZXMpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcbiAgICB9KVxufVxuY29uc3QgY3JlYXRlRWxlbWVudCA9ICh0eXBlLCBhdHRyaWJ1dGVzKSA9PiB7XG4gICAgY29uc3QgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYCR7dHlwZX1gKTtcbiAgICBpZiAoYXR0cmlidXRlcyA9PSBudWxsKSByZXR1cm4gbmV3RWxlbWVudDtcbiAgICBzZXRBdHRyaWJ1dGVzKG5ld0VsZW1lbnQsIGF0dHJpYnV0ZXMpO1xuICAgIHJldHVybiBuZXdFbGVtZW50O1xufVxuLy8gdGltZSAtPiB0cmFuc2Zvcm0gdW5peCB0byBzdGFuZGFyZFxuY29uc3QgdGltZSA9IChpbnB1dCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGlucHV0KTtcbiAgICAvLyBuZWVkcyBhIGZldyBzdGVwc1xuICAgIC8vIDEpIGZpbmQgbG9jYWwgdGltZSAob2YgdXNlcilcbiAgICAvLyAyKSBjb252ZXJ0IHVuaXggdGltZSB0byBsb2NhbCB0aW1lXG4gICAgLy8gcmV0dXJuIG5ld1RpbWVcbn1cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUVsZW1lbnQ7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tIFwiLi91dGlsaXR5XCI7XG5cbi8vXG5jb25zdCBkaXNwbGF5TWFpbiA9ICgoKSA9PiB7XG4gIGNvbnN0IGNyZWF0ZSA9IChvYmplY3QpID0+IHtcbiAgICBjb25zdCBtYWluQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcIm1haW5Db250YWluZXJcIiB9KTtcbiAgICBjb25zdCBsb2NhdGlvbkNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3M6IFwibG9jYXRpb25Db250YWluZXJcIixcbiAgICB9KTtcbiAgICBjb25zdCBjaXR5ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcIm1haW5DaXR5XCIgfSk7XG4gICAgY29uc3QgY291bnRyeSA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJtYWluQ291bnRyeVwiIH0pO1xuICAgIGNvbnN0IHRlbXBDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwibWFpblRlbXBDb250YWluZXJcIiB9KTtcbiAgICBjb25zdCBoaWdobG93Q29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzczogXCJoaWdobG93Q29udGFpbmVyXCIsXG4gICAgfSk7XG4gICAgY29uc3QgaWNvbkNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJpY29uQ29udGFpbmVyXCIgfSk7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwibWFpbkRlc2NyaXB0aW9uXCIgfSk7XG4gICAgLy8gISEhIGRvbid0IGtub3cgaWYgSSBzaG91bGQgZGlzcGxheSBpY29uIGltYWdlIEJFTE9XIG90aGVyIGRhdGEsIG9yIGFzIGJhY2tkcm9wIG9mIHRoZSBtYWluQ29udGFpbmVyXG4gICAgLy8gY29udGVudFxuICAgIGNpdHkudGV4dENvbnRlbnQgPSBvYmplY3QuY2l0eTtcbiAgICBjb3VudHJ5LnRleHRDb250ZW50ID0gb2JqZWN0LmNvdW50cnk7XG4gICAgdGVtcENvbnRhaW5lci50ZXh0Q29udGVudCA9IG9iamVjdC50ZW1wO1xuICAgIGhpZ2hsb3dDb250YWluZXIudGV4dENvbnRlbnQgPSBvYmplY3QuaGlnaGxvdztcbiAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IG9iamVjdC5kZXNjcmlwdGlvbjtcbiAgICAvLyBhcHBlbmQgaXQgYWxsIHRvZ2V0aGVyXG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChsb2NhdGlvbkNvbnRhaW5lcik7XG4gICAgbG9jYXRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoY2l0eSk7XG4gICAgbG9jYXRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoY291bnRyeSk7XG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZW1wQ29udGFpbmVyKTtcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGhpZ2hsb3dDb250YWluZXIpO1xuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoaWNvbkNvbnRhaW5lcik7XG4gICAgaWNvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG5cbiAgICByZXR1cm4gbWFpbkNvbnRhaW5lcjtcbiAgfTtcbiAgcmV0dXJuIHsgY3JlYXRlIH07XG59KSgpO1xuY29uc3QgZmlsbE1haW5Db250YWluZXIgPSAob2JqZWN0KSA9PiB7XG4gIGNvbnN0IG1haW4gPSBkaXNwbGF5TWFpbi5jcmVhdGUob2JqZWN0KTtcbiAgcmV0dXJuIG1haW47XG59O1xuZXhwb3J0IGRlZmF1bHQgZmlsbE1haW5Db250YWluZXI7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
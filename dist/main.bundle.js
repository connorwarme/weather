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
/*!****************************!*\
  !*** ./src/displayMain.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fillMainContainer": () => (/* binding */ fillMainContainer)
/* harmony export */ });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility */ "./src/utility.js");


// 
const displayMain = (() => {
    const create = (object) => {
        const mainContainer = (0,_utility__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {"class": "mainContainer"});
        const locationContainer = (0,_utility__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {"class": "locationContainer"});
        const city = (0,_utility__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {"class": "mainCity"});
        const country = (0,_utility__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {"class": "mainCountry"});
        const tempContainer = (0,_utility__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {"class": "mainTempContainer"});
        const highlowContainer = (0,_utility__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {"class": "highlowContainer"});
        const iconContainer = (0,_utility__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {"class": "iconContainer"});
        const description = (0,_utility__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {"class": "mainDescription"});
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
    }
    return { create }
})();
const fillMainContainer = (object) => {
    const main = displayMain.create(object);
    return main;
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGlEQUFpRCxLQUFLO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsYUFBYTs7Ozs7O1VDZDVCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOc0M7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixvREFBYSxTQUFTLHlCQUF5QjtBQUM3RSxrQ0FBa0Msb0RBQWEsU0FBUyw2QkFBNkI7QUFDckYscUJBQXFCLG9EQUFhLFNBQVMsb0JBQW9CO0FBQy9ELHdCQUF3QixvREFBYSxTQUFTLHVCQUF1QjtBQUNyRSw4QkFBOEIsb0RBQWEsU0FBUyw2QkFBNkI7QUFDakYsaUNBQWlDLG9EQUFhLFNBQVMsNEJBQTRCO0FBQ25GLDhCQUE4QixvREFBYSxTQUFTLHlCQUF5QjtBQUM3RSw0QkFBNEIsb0RBQWEsU0FBUywyQkFBMkI7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy91dGlsaXR5LmpzIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2Rpc3BsYXlNYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIERPTSBmdW5jdGlvbnNcbi8vIGhlbHBlciBmdW5jdGlvbnMgdG8gY3JlYXRlIERPTSBlbGVtZW50IGFuZCBhZGQgYXR0cmlidXRlc1xuLy8gaXMgdGhlcmUgYSBtb3JlIGVmZmVjdGl2ZS9lZmZpY2llbnQgd2F5IHRvIGRvIHRoaXM/IVxuY29uc3Qgc2V0QXR0cmlidXRlcyA9IChlbGVtZW50LCBhdHRyaWJ1dGVzKSA9PiB7XG4gICAgT2JqZWN0LmVudHJpZXMoYXR0cmlidXRlcykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuICAgIH0pXG59XG5jb25zdCBjcmVhdGVFbGVtZW50ID0gKHR5cGUsIGF0dHJpYnV0ZXMpID0+IHtcbiAgICBjb25zdCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgJHt0eXBlfWApO1xuICAgIGlmIChhdHRyaWJ1dGVzID09IG51bGwpIHJldHVybiBuZXdFbGVtZW50O1xuICAgIHNldEF0dHJpYnV0ZXMobmV3RWxlbWVudCwgYXR0cmlidXRlcyk7XG4gICAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVFbGVtZW50OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSBcIi4vdXRpbGl0eVwiO1xuXG4vLyBcbmNvbnN0IGRpc3BsYXlNYWluID0gKCgpID0+IHtcbiAgICBjb25zdCBjcmVhdGUgPSAob2JqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7XCJjbGFzc1wiOiBcIm1haW5Db250YWluZXJcIn0pO1xuICAgICAgICBjb25zdCBsb2NhdGlvbkNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcImNsYXNzXCI6IFwibG9jYXRpb25Db250YWluZXJcIn0pO1xuICAgICAgICBjb25zdCBjaXR5ID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge1wiY2xhc3NcIjogXCJtYWluQ2l0eVwifSk7XG4gICAgICAgIGNvbnN0IGNvdW50cnkgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7XCJjbGFzc1wiOiBcIm1haW5Db3VudHJ5XCJ9KTtcbiAgICAgICAgY29uc3QgdGVtcENvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcImNsYXNzXCI6IFwibWFpblRlbXBDb250YWluZXJcIn0pO1xuICAgICAgICBjb25zdCBoaWdobG93Q29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge1wiY2xhc3NcIjogXCJoaWdobG93Q29udGFpbmVyXCJ9KTtcbiAgICAgICAgY29uc3QgaWNvbkNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcImNsYXNzXCI6IFwiaWNvbkNvbnRhaW5lclwifSk7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge1wiY2xhc3NcIjogXCJtYWluRGVzY3JpcHRpb25cIn0pO1xuICAgICAgICAvLyAhISEgZG9uJ3Qga25vdyBpZiBJIHNob3VsZCBkaXNwbGF5IGljb24gaW1hZ2UgQkVMT1cgb3RoZXIgZGF0YSwgb3IgYXMgYmFja2Ryb3Agb2YgdGhlIG1haW5Db250YWluZXJcbiAgICAgICAgLy8gY29udGVudFxuICAgICAgICBjaXR5LnRleHRDb250ZW50ID0gb2JqZWN0LmNpdHk7XG4gICAgICAgIGNvdW50cnkudGV4dENvbnRlbnQgPSBvYmplY3QuY291bnRyeTtcbiAgICAgICAgdGVtcENvbnRhaW5lci50ZXh0Q29udGVudCA9IG9iamVjdC50ZW1wO1xuICAgICAgICBoaWdobG93Q29udGFpbmVyLnRleHRDb250ZW50ID0gb2JqZWN0LmhpZ2hsb3c7XG4gICAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gb2JqZWN0LmRlc2NyaXB0aW9uO1xuICAgICAgICAvLyBhcHBlbmQgaXQgYWxsIHRvZ2V0aGVyXG4gICAgICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQobG9jYXRpb25Db250YWluZXIpO1xuICAgICAgICBsb2NhdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjaXR5KTtcbiAgICAgICAgbG9jYXRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoY291bnRyeSk7XG4gICAgICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQodGVtcENvbnRhaW5lcik7XG4gICAgICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoaGlnaGxvd0NvbnRhaW5lcik7XG4gICAgICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoaWNvbkNvbnRhaW5lcik7XG4gICAgICAgIGljb25Db250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gICAgICAgIHJldHVybiBtYWluQ29udGFpbmVyO1xuICAgIH1cbiAgICByZXR1cm4geyBjcmVhdGUgfVxufSkoKTtcbmNvbnN0IGZpbGxNYWluQ29udGFpbmVyID0gKG9iamVjdCkgPT4ge1xuICAgIGNvbnN0IG1haW4gPSBkaXNwbGF5TWFpbi5jcmVhdGUob2JqZWN0KTtcbiAgICByZXR1cm4gbWFpbjtcbn1cbmV4cG9ydCB7IGZpbGxNYWluQ29udGFpbmVyIH07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    padding: 0;\n    margin: 0;\n}\n.main {\n    background-color: slateblue;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 5fr;\n}.inputContainer {\n    grid-column: 1/3;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.mainContainer {\n    grid-row: 2/3;\n    grid-column: 1/2;\n}\n.detailContainer {\n    grid-row: 2/3;\n    grid-column: 2/3;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: repeat(5, 1fr);\n}\n.detailContainer > div {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,SAAS;AACb;AACA;IACI,2BAA2B;IAC3B,aAAa;IACb,8BAA8B;IAC9B,2BAA2B;AAC/B,CAAC;IACG,gBAAgB;IAChB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,gBAAgB;IAChB,aAAa;IACb,8BAA8B;IAC9B,kCAAkC;AACtC;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB","sourcesContent":["* {\n    padding: 0;\n    margin: 0;\n}\n.main {\n    background-color: slateblue;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 5fr;\n}.inputContainer {\n    grid-column: 1/3;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.mainContainer {\n    grid-row: 2/3;\n    grid-column: 1/2;\n}\n.detailContainer {\n    grid-row: 2/3;\n    grid-column: 2/3;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: repeat(5, 1fr);\n}\n.detailContainer > div {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/displayExtra.js":
/*!*****************************!*\
  !*** ./src/displayExtra.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fillDetailContainer": () => (/* binding */ fillDetailContainer),
/* harmony export */   "obj": () => (/* binding */ obj)
/* harmony export */ });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility */ "./src/utility.js");

// create display
const detailContainer = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", { class: "detailContainer" });
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
  const feelsFn = (specific, value) => {
    const feels = helper("FEELS LIKE", "");
    const feelsDiv = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {id: "temp", class: `${value.feelsLike.far} ${value.feelsLike.cel}`});
    feelsDiv.textContent = `${specific}`;
    feels.children[1].appendChild(feelsDiv);
    return feels;
  };
  const popFn = (value) => {
    const pop = helper("PRECIPITATION", `${Math.round(value * 100)}%`);
    const label = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", { class: "popLabel" });
    label.textContent = "CHANCE OF";
    // !!! not sure if this works
    pop.insertBefore(label, pop.firstChild);
    return pop;
  };
  const precipFn = (value) => {
    let newVal = {
      '3h': 0,
    };
    if (value !== undefined) {
      newVal = value;
    }
    const precip = helper("ACCUMULATION", `${newVal['3h']}mm in last 3h`);
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
const fillDetailContainer = (input, boolean) => {
  const tempUnit = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.whatTemp)(boolean);
  detailContainer.appendChild(detail.windFn(input.wind.speed));
  detailContainer.appendChild(detail.visFn(input.visibility));
  detailContainer.appendChild(detail.feelsFn(input.feelsLike[tempUnit], input));
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



/***/ }),

/***/ "./src/displayForecast.js":
/*!********************************!*\
  !*** ./src/displayForecast.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility */ "./src/utility.js");

//
const create = (() => {
    const container = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class: "forecastContainer"});
    
    const makeTime = (object, input) => {
        const forecastTime = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.time)(input.dt, object.timezone);
        const timeDiv = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class: "timeDiv"});
        timeDiv.textContent = `${(0,_utility__WEBPACK_IMPORTED_MODULE_0__.timeCheck)(forecastTime.getHours())}00`;
        return timeDiv;
    }
    const makeTemp = (forecastObj, boolean) => {
        const theTemp = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.tempFn)(forecastObj.main.temp);
        const tempUnit = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.whatTemp)(boolean);
        // forecastObj.temp = theTemp;
        const tempContainer = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class: "tempDiv"})
        const tempDiv = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {id: "temp", class: `${forecastObj.main.temp.far} ${forecastObj.main.temp.cel}`});
        tempDiv.textContent = `${theTemp[tempUnit]}`;
        tempContainer.appendChild(tempDiv);
        return tempContainer;
    }
    const makeIcon = (forecastObj) => {
        const iconDiv = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class: "forecastIconContainer"});
        const icon = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('img', {class: "forecastIcon", "aria-label": "Forecast Icon", title: `${forecastObj.weather[0].description}`});
        icon.src = `http://openweathermap.org/img/wn/${forecastObj.weather[0].icon}@2x.png`;
        icon.alt = forecastObj.weather[0].main;
        iconDiv.appendChild(icon);
        return iconDiv;
    }
    const makePop = (forecastObj) => {
        const thePop = forecastObj.pop;
        const popDiv = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class: "popDiv"});
        popDiv.textContent = `${Math.round(thePop * 100)}%`;
        return popDiv;
    }

    const makeCard = (object, collective, card, boolean) => {
        const keys = Object.keys(collective);
        keys.forEach(index => {
            const block = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class: "forecastBlock"});
            card.appendChild(block);
            block.appendChild(makeTime(object, collective[index]));
            block.appendChild(makeTemp(collective[index], boolean));
            // !!! need icon here
            block.appendChild(makeIcon(collective[index]));
            block.appendChild(makePop(collective[index]));
        })
    }
    const forecast = (input, object, boolean) => {
        const length = Object.keys(input).length;
        const array = [];
        for (let i = 0; i < length; i += 1) {
            array[i] = input[i];
        }
        let i = 0;
        array.forEach(index => {
            const card = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class: `card${i}`});
            makeCard(object, index, card, boolean);
            container.appendChild(card);
            i += 1;
        })
        return container;
    }
    return { forecast }
})();
const fillForecastContainer = (input, object, boolean) => {
    console.log(input);
    console.log(object);
    const forecastDiv = create.forecast(input, object, boolean);
    return forecastDiv;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fillForecastContainer);

/***/ }),

/***/ "./src/displayMain.js":
/*!****************************!*\
  !*** ./src/displayMain.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility */ "./src/utility.js");

//
const displayMain = (() => {
  const create = (object, boolean) => {
    const mainContainer = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", { class: "mainContainer" });
    const locationContainer = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "locationContainer",
    });
    const city = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", { class: "mainCity" });
    const country = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", { class: "mainCountry" });
    const tempContainer = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", { class: "mainTempContainer" });
    const tempDiv = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {id: "temp", class: `${object.temp.far} ${object.temp.cel}`});
    const highlowContainer = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "highlowContainer",
    });
    const highDiv = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {id: "temp", class: `${object.high.far} ${object.high.cel}`});
    const lowDiv = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {id: "temp", class: `${object.low.far} ${object.low.cel}`});
    const iconContainer = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", { class: "iconContainer" });
    const icon = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {class: "mainWeatherIcon", "aria-label": "Weather Icon"});
    icon.src = `http://openweathermap.org/img/wn/${object.icon}@4x.png`;
    icon.alt = `${object.description}`;
    const description = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", { class: "mainDescription" });
    // !!! don't know if I should display icon image BELOW other data, or as backdrop of the mainContainer
    // content
    const tempUnit = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.whatTemp)(boolean);
    city.textContent = object.city;
    country.textContent = object.country;
    tempSpan.textContent = object.temp[tempUnit];
    highSpan.textContent = `${object.high[tempUnit]}`;
    lowSpan.textContent = `${object.low[tempUnit]}`;
    description.textContent = object.conditions;
    // append it all together
    mainContainer.appendChild(locationContainer);
    locationContainer.appendChild(city);
    locationContainer.appendChild(country);
    mainContainer.appendChild(tempContainer);
    tempContainer.appendChild(tempDiv);
    mainContainer.appendChild(highlowContainer);
    highlowContainer.appendChild(highDiv);
    highlowContainer.appendChild(lowDiv);
    mainContainer.appendChild(iconContainer);
    iconContainer.appendChild(icon);
    iconContainer.appendChild(description);

    return mainContainer;
  };
  return { create };
})();
const fillMainContainer = (object, boolean) => {
  const main = displayMain.create(object, boolean);
  return main;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fillMainContainer);


/***/ }),

/***/ "./src/objFn.js":
/*!**********************!*\
  !*** ./src/objFn.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "findHighLow": () => (/* binding */ findHighLow),
/* harmony export */   "sortDays": () => (/* binding */ sortDays)
/* harmony export */ });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility */ "./src/utility.js");


// functions to run on the data, give obj proper values
// const actions = (() => {
//     const sortDays = (input)
// })();
const returnDate = (object, item) => {
    const day = item.dt_txt;
    const date = new Date(day);
    date.setMinutes(date.getMinutes() + (object.city.timezone / 60));
    return date;
}
const sortDays = (object) => {
    const date = returnDate(object, object.list[0]);
    const dday = date.getDate();
    const array = object.list;
    const collection = {
        0: {},
        1: {},
        2: {},
        3: {},
        4: {},
        5: {},
    };
    array.forEach(index => {
        const indexDate = returnDate(object, index);
        const i = indexDate.getDate() - dday;
        const value = indexDate.getHours();
        collection[i][value] = (index);
    });
    return collection;
}
const findHighLow = (object) => {
    const array = Object.keys(object);
    let high = object[array[0]].main.temp;
    let low = object[array[0]].main.temp;
    for (let i = 0; i < array.length; i += 1) {
        const temp = object[array[i]].main.temp;
        console.log(temp);
        if (temp > high) {
            high = temp;
        }
        if (temp < low) {
            low = temp;
        }
    }
    return [high, low];
}



/***/ }),

/***/ "./src/utility.js":
/*!************************!*\
  !*** ./src/utility.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkTemp": () => (/* binding */ checkTemp),
/* harmony export */   "createElement": () => (/* binding */ createElement),
/* harmony export */   "dateFn": () => (/* binding */ dateFn),
/* harmony export */   "hourMin": () => (/* binding */ hourMin),
/* harmony export */   "tempFn": () => (/* binding */ tempFn),
/* harmony export */   "time": () => (/* binding */ time),
/* harmony export */   "timeCheck": () => (/* binding */ timeCheck),
/* harmony export */   "whatTemp": () => (/* binding */ whatTemp)
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
const timeCheck = (input) => {
    let checked = input;
    if (input < 10) {
        checked = `0${input}`;
    }
    return checked;
}
const checkNumber = (input) => {
    let value = input;
    if (input < 10) {
      value = `0${input}`;
    } 
    return value;
}
const hourMin = (input, offset) => {
    const value = time(input, offset);
    const hours = checkNumber(value.getHours());
    const minutes = checkNumber(value.getMinutes())
    return `${hours}:${minutes}`;
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
// display C or F?
const whatTemp = (boolean) => {
    let value = "cel";
    if (boolean === false) {
        value = "far";
    }
    return value;
}
// debug: sometimes current temp is higher or lower than forecast high/low
// this check fn fixes it
const checkTemp = (current, high, low) => {
    let hi = high;
    let lo = low;
    if (current > high) {
        hi = current;
    }
    if (current < low) {
        lo = low;
    }
    return [hi, lo];
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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utility */ "./src/utility.js");
/* harmony import */ var _displayExtra__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayExtra */ "./src/displayExtra.js");
/* harmony import */ var _displayMain__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displayMain */ "./src/displayMain.js");
/* harmony import */ var _objFn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./objFn */ "./src/objFn.js");
/* harmony import */ var _displayForecast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./displayForecast */ "./src/displayForecast.js");







// get main body in DOM
const body = document.querySelector("body");
const main = (0,_utility__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { class: "main" });
body.appendChild(main);
// make input field and submit button
const inputContainer = (0,_utility__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { class: "inputContainer" });
const inputField = (0,_utility__WEBPACK_IMPORTED_MODULE_1__.createElement)("input", {
  class: "inputField",
  id: "inputField",
  "aria-label": "Input Location",
  title: "Format as: 'City', 'City, State', OR 'City, Country'",
  "placeholder": "Search location...",
});
const submitBtn = (0,_utility__WEBPACK_IMPORTED_MODULE_1__.createElement)("button", {
  class: "submitBtn",
  "aria-label": "Submit",
});
submitBtn.textContent = "Search";
// make temp toggle
const tempBtnContainer = (0,_utility__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', {class: "tempBtnContainer"});
const tempToggle = (0,_utility__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', {class: "tempToggle"});
let tempUnit = false;
tempToggle.textContent = `°F`;
tempBtnContainer.appendChild(tempToggle);
// toggle function
const toggleFn = () => {
  console.log(tempUnit);
  if (!tempUnit) {
    tempToggle.textContent = `°C`;
  } else {
    tempToggle.textContent = `°F`;
  }
  tempUnit = !tempUnit;
  console.log(tempUnit);
}
tempToggle.addEventListener('click', () => {
  toggleFn();
})
//
inputContainer.appendChild(inputField);
inputContainer.appendChild(submitBtn);
inputContainer.appendChild(tempBtnContainer);
main.appendChild(inputContainer);
// submit listener function
const submitFn = () => {
  const userInput = inputField.value;
  // needs edit
  apiAction.mainFn(userInput, tempUnit);
  inputField.value = "";
};
submitBtn.addEventListener("click", () => {
  submitFn();
});
//
const clearAll = (input) => {
  while (input.firstChild) {
    input.removeChild(input.firstChild);
  }
}
const clearMain = () => {
  console.log(main.children.length);
  for (let i = 1; i < main.children.length; i += 0) {
    console.log(main.children[0].nextElementSibling);
    clearAll(main.children[0].nextElementSibling);
    main.removeChild(main.children[0].nextElementSibling);
  }
}
// fetch x3: current, forecast, and airquality
// easier to keep them separate?
const apiAction = (() => {
  const currentValue = "917a17f77a60ae96ee081212e94e3f75";
  const getForecast = async (location) => {
    const searchLocation = location;
    const forecastFetch = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${searchLocation}&appid=${currentValue}&units=imperial`,
      {
        mode: "cors",
      }
    );
    const forecastData = await forecastFetch.json();
    return forecastData;
  };
  const getCurrent = async (location) => {
    // !!! need to check api call - accurate for current conditions?
    const currentFetch = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${currentValue}&units=imperial`,
      {
        mode: "cors",
      }
    );
    const currentData = await currentFetch.json();
    return currentData;
  };
  const getAirQ = async (lat, lon) => {
    const airFetch = await fetch(
      `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${currentValue}`,
      {
        mode: "cors",
      }
    );
    const airData = await airFetch.json();
    return airData;
  };
  const decipherError = (input) => {
    const container = document.querySelector('div.inputContainer');
    if (input.cod === "404") {
      const errorDisplay = (0,_utility__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', {class: "errorDisplay"});
      errorDisplay.textContent = "Location not found!";
      container.appendChild(errorDisplay);
    }
  }
  const errorCheck = (input) => {
    let send = "";
    if (input.cod !== "200") {
      send = false;
      decipherError(input);
    } else {
      send = true;
    }
    return send;
  }
  // get all the data into an object
  const declareData = ([forecast, current, air], tempArray) => {
    console.log([forecast, current, air]);
    const city = current.name;
    const gps = `${current.coord.lat}, ${current.coord.lon}`;
    const temp = (0,_utility__WEBPACK_IMPORTED_MODULE_1__.tempFn)(current.main.temp);
    const highLow = (0,_utility__WEBPACK_IMPORTED_MODULE_1__.checkTemp)(temp, tempArray[0], tempArray[1]);
    const high = (0,_utility__WEBPACK_IMPORTED_MODULE_1__.tempFn)(highLow[0]);
    const low = (0,_utility__WEBPACK_IMPORTED_MODULE_1__.tempFn)(highLow[1]);
    const conditions = current.weather[0].main;
    const description = current.weather[0].description;
    const icon = current.weather[0].icon;
    const wind = forecast.list[0].wind;
    const pop = forecast.list[0].pop;
    const timezone = forecast.city.timezone;
    const sunrise = (0,_utility__WEBPACK_IMPORTED_MODULE_1__.hourMin)(forecast.city.sunrise, timezone);
    const sunset = (0,_utility__WEBPACK_IMPORTED_MODULE_1__.hourMin)(forecast.city.sunset, timezone);
    const humidity = forecast.list[0].main.humidity;
    const feelsLike = (0,_utility__WEBPACK_IMPORTED_MODULE_1__.tempFn)(forecast.list[0].main.feels_like);
    const visibility = forecast.list[0].visibility;
    const precip = forecast.list[0].rain;
    const airQuality = air.list[0].main.aqi;
    const pressure = forecast.list[0].main.pressure;
    return {
      city,
      gps,
      temp,
      high,
      low,
      conditions,
      description,
      icon,
      wind,
      pop,
      sunrise,
      sunset,
      timezone,
      humidity,
      feelsLike,
      visibility,
      precip,
      airQuality,
      pressure,
    };
  };

  const mainFn = async (location, boolean) => {
    try {
    const forecastW = await getForecast(location);
    if (errorCheck(forecastW)) {
      const daysF = (0,_objFn__WEBPACK_IMPORTED_MODULE_4__.sortDays)(forecastW);
      const highLow = (0,_objFn__WEBPACK_IMPORTED_MODULE_4__.findHighLow)(daysF[0]);
      const currentW = await getCurrent(location);
      // console.log(currentW);
      const airQ = await getAirQ(forecastW.city.coord.lat, forecastW.city.coord.lon);
      // console.log(airQ);
      const collective = Promise.all([forecastW, currentW, airQ]).then((data) => {
        const object = declareData(data, highLow);
        console.log(object);
        clearMain();
        const detail = (0,_displayExtra__WEBPACK_IMPORTED_MODULE_2__.fillDetailContainer)(object, boolean);
        main.appendChild(detail);
        const current = (0,_displayMain__WEBPACK_IMPORTED_MODULE_3__["default"])(object, boolean);
        main.appendChild(current);
        const forecast = (0,_displayForecast__WEBPACK_IMPORTED_MODULE_5__["default"])(daysF, object, boolean);
        main.appendChild(forecast);
      })
    } else {
      console.log(`Apologies! The site experienced an error: "${forecastW.message}".`);
    }
    } catch (error) {
      alert('Apologies! The site experienced an error, check the log for details.');
      console.log(error);
    }
  };
  // still need to sort out how to parse data for forecast section
  // for desktop display: a card for each day, which has the values (3h increments) in list style
  // time, temp, conditions, pop? (if it's greater than 0)
  // show cards horizontally
  // for mobile display: same cards, but show vertically
  return { mainFn };
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi90b0ludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZnJvbVVuaXhUaW1lL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9kaXNwbGF5RXh0cmEuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9kaXNwbGF5Rm9yZWNhc3QuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9kaXNwbGF5TWFpbi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL29iakZuLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvdXRpbGl0eS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuLm1haW4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzbGF0ZWJsdWU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNWZyO1xcbn0uaW5wdXRDb250YWluZXIge1xcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLm1haW5Db250YWluZXIge1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbn1cXG4uZGV0YWlsQ29udGFpbmVyIHtcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LCAxZnIpO1xcbn1cXG4uZGV0YWlsQ29udGFpbmVyID4gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxVQUFVO0lBQ1YsU0FBUztBQUNiO0FBQ0E7SUFDSSwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QiwyQkFBMkI7QUFDL0IsQ0FBQztJQUNHLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGtDQUFrQztBQUN0QztBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxufVxcbi5tYWluIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2xhdGVibHVlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDVmcjtcXG59LmlucHV0Q29udGFpbmVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5tYWluQ29udGFpbmVyIHtcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG59XFxuLmRldGFpbENvbnRhaW5lciB7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwgMWZyKTtcXG59XFxuLmRldGFpbENvbnRhaW5lciA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG5cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBmcm9tVW5peFRpbWVcbiAqIEBjYXRlZ29yeSBUaW1lc3RhbXAgSGVscGVyc1xuICogQHN1bW1hcnkgQ3JlYXRlIGEgZGF0ZSBmcm9tIGEgVW5peCB0aW1lc3RhbXAuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDcmVhdGUgYSBkYXRlIGZyb20gYSBVbml4IHRpbWVzdGFtcCAoaW4gc2Vjb25kcykuIERlY2ltYWwgdmFsdWVzIHdpbGwgYmUgZGlzY2FyZGVkLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSB1bml4VGltZSAtIHRoZSBnaXZlbiBVbml4IHRpbWVzdGFtcCAoaW4gc2Vjb25kcylcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgZGF0ZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENyZWF0ZSB0aGUgZGF0ZSAyOSBGZWJydWFyeSAyMDEyIDExOjQ1OjA1OlxuICogY29uc3QgcmVzdWx0ID0gZnJvbVVuaXhUaW1lKDEzMzA1MTU5MDUpXG4gKiAvLz0+IFdlZCBGZWIgMjkgMjAxMiAxMTo0NTowNVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZyb21Vbml4VGltZShkaXJ0eVVuaXhUaW1lKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgdW5peFRpbWUgPSB0b0ludGVnZXIoZGlydHlVbml4VGltZSk7XG4gIHJldHVybiB0b0RhdGUodW5peFRpbWUgKiAxMDAwKTtcbn0iLCJpbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IHR5cGVvZiBhcmd1bWVudCA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgd2hhdFRlbXAgfSBmcm9tIFwiLi91dGlsaXR5XCI7XG4vLyBjcmVhdGUgZGlzcGxheVxuY29uc3QgZGV0YWlsQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcImRldGFpbENvbnRhaW5lclwiIH0pO1xuY29uc3QgZGV0YWlsID0gKCgpID0+IHtcbiAgY29uc3QgaGVscGVyID0gKGRlc2NyaXB0aW9uLCB2YWx1ZSkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJkZXRhaWxEaXZcIiB9KTtcbiAgICBjb25zdCBsYWJlbCA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJkZXRhaWxMYWJlbFwiIH0pO1xuICAgIGNvbnN0IGRhdGEgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwiZGV0YWlsRGF0YVwiIH0pO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gYCR7ZGVzY3JpcHRpb259YDtcbiAgICBkYXRhLnRleHRDb250ZW50ID0gYCR7dmFsdWV9YDtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRhKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xuICB9O1xuICBjb25zdCB3aW5kRm4gPSAodmFsdWUpID0+IHtcbiAgICAvLyAhISEgbWlnaHQgbmVlZCBhIGZldyB0aGluZ3MgLSBvbmUgZm9yIHdpbmQgc3BlZWQsIGFub3RoZXIgZm9yIGRpcmVjdGlvblxuICAgIGNvbnN0IHdpbmQgPSBoZWxwZXIoXCJXSU5EXCIsIGAke3ZhbHVlfWttL2hgKTtcbiAgICAvLyBjaGVjayB1bml0c1xuICAgIHJldHVybiB3aW5kO1xuICB9O1xuICBjb25zdCB2aXNGbiA9ICh2YWx1ZSkgPT4ge1xuICAgIGNvbnN0IHZpcyA9IGhlbHBlcihcIlZJU0lCSUxJVFlcIiwgYCR7dmFsdWUgLyAxMDAwfSBrbWApO1xuICAgIHJldHVybiB2aXM7XG4gIH07XG4gIGNvbnN0IGh1bWlkRm4gPSAodmFsdWUpID0+IHtcbiAgICBjb25zdCBodW1pZCA9IGhlbHBlcihcIkhVTUlESVRZXCIsIGAke3ZhbHVlfSVgKTtcbiAgICByZXR1cm4gaHVtaWQ7XG4gIH07XG4gIGNvbnN0IGZlZWxzRm4gPSAoc3BlY2lmaWMsIHZhbHVlKSA9PiB7XG4gICAgY29uc3QgZmVlbHMgPSBoZWxwZXIoXCJGRUVMUyBMSUtFXCIsIFwiXCIpO1xuICAgIGNvbnN0IGZlZWxzRGl2ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7aWQ6IFwidGVtcFwiLCBjbGFzczogYCR7dmFsdWUuZmVlbHNMaWtlLmZhcn0gJHt2YWx1ZS5mZWVsc0xpa2UuY2VsfWB9KTtcbiAgICBmZWVsc0Rpdi50ZXh0Q29udGVudCA9IGAke3NwZWNpZmljfWA7XG4gICAgZmVlbHMuY2hpbGRyZW5bMV0uYXBwZW5kQ2hpbGQoZmVlbHNEaXYpO1xuICAgIHJldHVybiBmZWVscztcbiAgfTtcbiAgY29uc3QgcG9wRm4gPSAodmFsdWUpID0+IHtcbiAgICBjb25zdCBwb3AgPSBoZWxwZXIoXCJQUkVDSVBJVEFUSU9OXCIsIGAke01hdGgucm91bmQodmFsdWUgKiAxMDApfSVgKTtcbiAgICBjb25zdCBsYWJlbCA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJwb3BMYWJlbFwiIH0pO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gXCJDSEFOQ0UgT0ZcIjtcbiAgICAvLyAhISEgbm90IHN1cmUgaWYgdGhpcyB3b3Jrc1xuICAgIHBvcC5pbnNlcnRCZWZvcmUobGFiZWwsIHBvcC5maXJzdENoaWxkKTtcbiAgICByZXR1cm4gcG9wO1xuICB9O1xuICBjb25zdCBwcmVjaXBGbiA9ICh2YWx1ZSkgPT4ge1xuICAgIGxldCBuZXdWYWwgPSB7XG4gICAgICAnM2gnOiAwLFxuICAgIH07XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIG5ld1ZhbCA9IHZhbHVlO1xuICAgIH1cbiAgICBjb25zdCBwcmVjaXAgPSBoZWxwZXIoXCJBQ0NVTVVMQVRJT05cIiwgYCR7bmV3VmFsWyczaCddfW1tIGluIGxhc3QgM2hgKTtcbiAgICBjb25zdCBsYWJlbCA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJwcmVjaXBMYWJlbFwiIH0pO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gXCJQUkVDSVBJVEFUSU9OXCI7XG4gICAgLy8gISEhIG5vdCBzdXJlIGlmIHRoaXMgd29ya3NcbiAgICBwcmVjaXAuaW5zZXJ0QmVmb3JlKGxhYmVsLCBwcmVjaXAuZmlyc3RDaGlsZCk7XG4gICAgcmV0dXJuIHByZWNpcDtcbiAgfTtcbiAgY29uc3QgYWlyRm4gPSAodmFsdWUpID0+IHtcbiAgICBjb25zdCBhaXIgPSBoZWxwZXIoXCJBSVIgUVVBTElUWVwiLCBgJHt2YWx1ZX1gKTtcbiAgICAvLyAhISEgbWlnaHQgbmVlZCB1bml0cyBjbGFyaWZpZXIgKHNjb3JlIG91dCBvZiAxMDA/KVxuICAgIHJldHVybiBhaXI7XG4gIH07XG4gIGNvbnN0IHByZXNzdXJlRm4gPSAodmFsdWUpID0+IHtcbiAgICBjb25zdCBwcmVzc3VyZSA9IGhlbHBlcihcIlBSRVNTVVJFXCIsIGAke3ZhbHVlfWApO1xuICAgIC8vICEhISBuZWVkIHVuaXRzXG4gICAgcmV0dXJuIHByZXNzdXJlO1xuICB9O1xuICBjb25zdCBzdW5yaXNlRm4gPSAodmFsdWUpID0+IHtcbiAgICAvLyAhISEgbmVlZCBmbiB0byBjb252ZXJ0IHZhbHVlIHRvIHRpbWUgKGFsc28gY2hlY2sgZm9yIGxvY2FsIHRpbWUuLilcbiAgICBjb25zdCB0aW1lID0gdmFsdWU7XG4gICAgY29uc3QgcmlzZSA9IGhlbHBlcihcIlNVTlJJU0VcIiwgYCR7dGltZX1gKTtcbiAgICByZXR1cm4gcmlzZTtcbiAgfTtcbiAgY29uc3Qgc3Vuc2V0Rm4gPSAodmFsdWUpID0+IHtcbiAgICAvLyAhISEgbmVlZCB0byBydW4gdmFsdWUgaW4gYSBmbiwgbGlrZSBhYm92ZVxuICAgIGNvbnN0IHRpbWUgPSB2YWx1ZTtcbiAgICBjb25zdCBzZXQgPSBoZWxwZXIoXCJTVU5TRVRcIiwgYCR7dGltZX1gKTtcbiAgICByZXR1cm4gc2V0O1xuICB9O1xuICByZXR1cm4ge1xuICAgIHdpbmRGbixcbiAgICB2aXNGbixcbiAgICBodW1pZEZuLFxuICAgIGZlZWxzRm4sXG4gICAgcG9wRm4sXG4gICAgcHJlY2lwRm4sXG4gICAgYWlyRm4sXG4gICAgcHJlc3N1cmVGbixcbiAgICBzdW5yaXNlRm4sXG4gICAgc3Vuc2V0Rm4sXG4gIH07XG59KSgpO1xuY29uc3QgZmlsbERldGFpbENvbnRhaW5lciA9IChpbnB1dCwgYm9vbGVhbikgPT4ge1xuICBjb25zdCB0ZW1wVW5pdCA9IHdoYXRUZW1wKGJvb2xlYW4pO1xuICBkZXRhaWxDb250YWluZXIuYXBwZW5kQ2hpbGQoZGV0YWlsLndpbmRGbihpbnB1dC53aW5kLnNwZWVkKSk7XG4gIGRldGFpbENvbnRhaW5lci5hcHBlbmRDaGlsZChkZXRhaWwudmlzRm4oaW5wdXQudmlzaWJpbGl0eSkpO1xuICBkZXRhaWxDb250YWluZXIuYXBwZW5kQ2hpbGQoZGV0YWlsLmZlZWxzRm4oaW5wdXQuZmVlbHNMaWtlW3RlbXBVbml0XSwgaW5wdXQpKTtcbiAgZGV0YWlsQ29udGFpbmVyLmFwcGVuZENoaWxkKGRldGFpbC5odW1pZEZuKGlucHV0Lmh1bWlkaXR5KSk7XG4gIGRldGFpbENvbnRhaW5lci5hcHBlbmRDaGlsZChkZXRhaWwucG9wRm4oaW5wdXQucG9wKSk7XG4gIGRldGFpbENvbnRhaW5lci5hcHBlbmRDaGlsZChkZXRhaWwucHJlY2lwRm4oaW5wdXQucHJlY2lwKSk7XG4gIGRldGFpbENvbnRhaW5lci5hcHBlbmRDaGlsZChkZXRhaWwuYWlyRm4oaW5wdXQuYWlyUXVhbGl0eSkpO1xuICBkZXRhaWxDb250YWluZXIuYXBwZW5kQ2hpbGQoZGV0YWlsLnByZXNzdXJlRm4oaW5wdXQucHJlc3N1cmUpKTtcbiAgZGV0YWlsQ29udGFpbmVyLmFwcGVuZENoaWxkKGRldGFpbC5zdW5yaXNlRm4oaW5wdXQuc3VucmlzZSkpO1xuICBkZXRhaWxDb250YWluZXIuYXBwZW5kQ2hpbGQoZGV0YWlsLnN1bnNldEZuKGlucHV0LnN1bnNldCkpO1xuICByZXR1cm4gZGV0YWlsQ29udGFpbmVyO1xufTtcbi8vIGdvYWw6IGRpc3BsYXkgb2YgZXh0cmEgZGF0YSAoYm94KVxuLy8gc3VucmlzZSwgc3Vuc2V0LCBmZWVscyBsaWtlLCBwb3AsIHByZWNpcCBhY2N1bSwgcHJlc3N1cmUsIGFpcnEsIHZpcywgd2luZCwgaHVtaWRpdHlcbmNvbnN0IG9iaiA9IHtcbiAgY2l0eTogXCJEZW52ZXJcIixcbiAgY291bnRyeTogXCJVU1wiLFxuICB0ZW1wOiBcIjgyXCIsXG4gIGhpZ2hsb3c6IFwiODUgLyA2MlwiLFxuICBjb25kaXRpb25zOiBcIlJhaW5cIixcbiAgZGVzY3JpcHRpb246IFwibGlnaHQgcmFpblwiLFxuICB3aW5kOiBcIjhcIixcbiAgdmlzaWJpbGl0eTogMTAwMDAsXG4gIGh1bWlkaXR5OiAyOCxcbiAgZmVlbHNMaWtlOiBcIjgxXCIsXG4gIHBvcDogXCIwLjQ3XCIsXG4gIHByZWNpcDogXCIwLjEzXCIsXG4gIGFpclF1YWxpdHk6IFwidW5rbm93blwiLFxuICBwcmVzc3VyZTogMTAxNSxcbiAgc3VucmlzZTogMTY2MjEyMTc1MCxcbiAgc3Vuc2V0OiAxNjYyMTY4NjI4LFxufTtcbmV4cG9ydCB7IGZpbGxEZXRhaWxDb250YWluZXIsIG9iaiB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgdGltZSwgdGltZUNoZWNrLCB0ZW1wRm4sIHdoYXRUZW1wIH0gZnJvbSBcIi4vdXRpbGl0eVwiO1xuLy9cbmNvbnN0IGNyZWF0ZSA9ICgoKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiBcImZvcmVjYXN0Q29udGFpbmVyXCJ9KTtcbiAgICBcbiAgICBjb25zdCBtYWtlVGltZSA9IChvYmplY3QsIGlucHV0KSA9PiB7XG4gICAgICAgIGNvbnN0IGZvcmVjYXN0VGltZSA9IHRpbWUoaW5wdXQuZHQsIG9iamVjdC50aW1lem9uZSk7XG4gICAgICAgIGNvbnN0IHRpbWVEaXYgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6IFwidGltZURpdlwifSk7XG4gICAgICAgIHRpbWVEaXYudGV4dENvbnRlbnQgPSBgJHt0aW1lQ2hlY2soZm9yZWNhc3RUaW1lLmdldEhvdXJzKCkpfTAwYDtcbiAgICAgICAgcmV0dXJuIHRpbWVEaXY7XG4gICAgfVxuICAgIGNvbnN0IG1ha2VUZW1wID0gKGZvcmVjYXN0T2JqLCBib29sZWFuKSA9PiB7XG4gICAgICAgIGNvbnN0IHRoZVRlbXAgPSB0ZW1wRm4oZm9yZWNhc3RPYmoubWFpbi50ZW1wKTtcbiAgICAgICAgY29uc3QgdGVtcFVuaXQgPSB3aGF0VGVtcChib29sZWFuKTtcbiAgICAgICAgLy8gZm9yZWNhc3RPYmoudGVtcCA9IHRoZVRlbXA7XG4gICAgICAgIGNvbnN0IHRlbXBDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6IFwidGVtcERpdlwifSlcbiAgICAgICAgY29uc3QgdGVtcERpdiA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtpZDogXCJ0ZW1wXCIsIGNsYXNzOiBgJHtmb3JlY2FzdE9iai5tYWluLnRlbXAuZmFyfSAke2ZvcmVjYXN0T2JqLm1haW4udGVtcC5jZWx9YH0pO1xuICAgICAgICB0ZW1wRGl2LnRleHRDb250ZW50ID0gYCR7dGhlVGVtcFt0ZW1wVW5pdF19YDtcbiAgICAgICAgdGVtcENvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZW1wRGl2KTtcbiAgICAgICAgcmV0dXJuIHRlbXBDb250YWluZXI7XG4gICAgfVxuICAgIGNvbnN0IG1ha2VJY29uID0gKGZvcmVjYXN0T2JqKSA9PiB7XG4gICAgICAgIGNvbnN0IGljb25EaXYgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6IFwiZm9yZWNhc3RJY29uQ29udGFpbmVyXCJ9KTtcbiAgICAgICAgY29uc3QgaWNvbiA9IGNyZWF0ZUVsZW1lbnQoJ2ltZycsIHtjbGFzczogXCJmb3JlY2FzdEljb25cIiwgXCJhcmlhLWxhYmVsXCI6IFwiRm9yZWNhc3QgSWNvblwiLCB0aXRsZTogYCR7Zm9yZWNhc3RPYmoud2VhdGhlclswXS5kZXNjcmlwdGlvbn1gfSk7XG4gICAgICAgIGljb24uc3JjID0gYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7Zm9yZWNhc3RPYmoud2VhdGhlclswXS5pY29ufUAyeC5wbmdgO1xuICAgICAgICBpY29uLmFsdCA9IGZvcmVjYXN0T2JqLndlYXRoZXJbMF0ubWFpbjtcbiAgICAgICAgaWNvbkRpdi5hcHBlbmRDaGlsZChpY29uKTtcbiAgICAgICAgcmV0dXJuIGljb25EaXY7XG4gICAgfVxuICAgIGNvbnN0IG1ha2VQb3AgPSAoZm9yZWNhc3RPYmopID0+IHtcbiAgICAgICAgY29uc3QgdGhlUG9wID0gZm9yZWNhc3RPYmoucG9wO1xuICAgICAgICBjb25zdCBwb3BEaXYgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6IFwicG9wRGl2XCJ9KTtcbiAgICAgICAgcG9wRGl2LnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZCh0aGVQb3AgKiAxMDApfSVgO1xuICAgICAgICByZXR1cm4gcG9wRGl2O1xuICAgIH1cblxuICAgIGNvbnN0IG1ha2VDYXJkID0gKG9iamVjdCwgY29sbGVjdGl2ZSwgY2FyZCwgYm9vbGVhbikgPT4ge1xuICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoY29sbGVjdGl2ZSk7XG4gICAgICAgIGtleXMuZm9yRWFjaChpbmRleCA9PiB7XG4gICAgICAgICAgICBjb25zdCBibG9jayA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogXCJmb3JlY2FzdEJsb2NrXCJ9KTtcbiAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoYmxvY2spO1xuICAgICAgICAgICAgYmxvY2suYXBwZW5kQ2hpbGQobWFrZVRpbWUob2JqZWN0LCBjb2xsZWN0aXZlW2luZGV4XSkpO1xuICAgICAgICAgICAgYmxvY2suYXBwZW5kQ2hpbGQobWFrZVRlbXAoY29sbGVjdGl2ZVtpbmRleF0sIGJvb2xlYW4pKTtcbiAgICAgICAgICAgIC8vICEhISBuZWVkIGljb24gaGVyZVxuICAgICAgICAgICAgYmxvY2suYXBwZW5kQ2hpbGQobWFrZUljb24oY29sbGVjdGl2ZVtpbmRleF0pKTtcbiAgICAgICAgICAgIGJsb2NrLmFwcGVuZENoaWxkKG1ha2VQb3AoY29sbGVjdGl2ZVtpbmRleF0pKTtcbiAgICAgICAgfSlcbiAgICB9XG4gICAgY29uc3QgZm9yZWNhc3QgPSAoaW5wdXQsIG9iamVjdCwgYm9vbGVhbikgPT4ge1xuICAgICAgICBjb25zdCBsZW5ndGggPSBPYmplY3Qua2V5cyhpbnB1dCkubGVuZ3RoO1xuICAgICAgICBjb25zdCBhcnJheSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBhcnJheVtpXSA9IGlucHV0W2ldO1xuICAgICAgICB9XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgYXJyYXkuZm9yRWFjaChpbmRleCA9PiB7XG4gICAgICAgICAgICBjb25zdCBjYXJkID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiBgY2FyZCR7aX1gfSk7XG4gICAgICAgICAgICBtYWtlQ2FyZChvYmplY3QsIGluZGV4LCBjYXJkLCBib29sZWFuKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkKTtcbiAgICAgICAgICAgIGkgKz0gMTtcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9XG4gICAgcmV0dXJuIHsgZm9yZWNhc3QgfVxufSkoKTtcbmNvbnN0IGZpbGxGb3JlY2FzdENvbnRhaW5lciA9IChpbnB1dCwgb2JqZWN0LCBib29sZWFuKSA9PiB7XG4gICAgY29uc29sZS5sb2coaW5wdXQpO1xuICAgIGNvbnNvbGUubG9nKG9iamVjdCk7XG4gICAgY29uc3QgZm9yZWNhc3REaXYgPSBjcmVhdGUuZm9yZWNhc3QoaW5wdXQsIG9iamVjdCwgYm9vbGVhbik7XG4gICAgcmV0dXJuIGZvcmVjYXN0RGl2O1xufVxuZXhwb3J0IGRlZmF1bHQgZmlsbEZvcmVjYXN0Q29udGFpbmVyOyIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIHdoYXRUZW1wIH0gZnJvbSBcIi4vdXRpbGl0eVwiO1xuLy9cbmNvbnN0IGRpc3BsYXlNYWluID0gKCgpID0+IHtcbiAgY29uc3QgY3JlYXRlID0gKG9iamVjdCwgYm9vbGVhbikgPT4ge1xuICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwibWFpbkNvbnRhaW5lclwiIH0pO1xuICAgIGNvbnN0IGxvY2F0aW9uQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzczogXCJsb2NhdGlvbkNvbnRhaW5lclwiLFxuICAgIH0pO1xuICAgIGNvbnN0IGNpdHkgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwibWFpbkNpdHlcIiB9KTtcbiAgICBjb25zdCBjb3VudHJ5ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcIm1haW5Db3VudHJ5XCIgfSk7XG4gICAgY29uc3QgdGVtcENvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJtYWluVGVtcENvbnRhaW5lclwiIH0pO1xuICAgIGNvbnN0IHRlbXBEaXYgPSBjcmVhdGVFbGVtZW50KFwic3BhblwiLCB7aWQ6IFwidGVtcFwiLCBjbGFzczogYCR7b2JqZWN0LnRlbXAuZmFyfSAke29iamVjdC50ZW1wLmNlbH1gfSk7XG4gICAgY29uc3QgaGlnaGxvd0NvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3M6IFwiaGlnaGxvd0NvbnRhaW5lclwiLFxuICAgIH0pO1xuICAgIGNvbnN0IGhpZ2hEaXYgPSBjcmVhdGVFbGVtZW50KFwic3BhblwiLCB7aWQ6IFwidGVtcFwiLCBjbGFzczogYCR7b2JqZWN0LmhpZ2guZmFyfSAke29iamVjdC5oaWdoLmNlbH1gfSk7XG4gICAgY29uc3QgbG93RGl2ID0gY3JlYXRlRWxlbWVudChcInNwYW5cIiwge2lkOiBcInRlbXBcIiwgY2xhc3M6IGAke29iamVjdC5sb3cuZmFyfSAke29iamVjdC5sb3cuY2VsfWB9KTtcbiAgICBjb25zdCBpY29uQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcImljb25Db250YWluZXJcIiB9KTtcbiAgICBjb25zdCBpY29uID0gY3JlYXRlRWxlbWVudChcImltZ1wiLCB7Y2xhc3M6IFwibWFpbldlYXRoZXJJY29uXCIsIFwiYXJpYS1sYWJlbFwiOiBcIldlYXRoZXIgSWNvblwifSk7XG4gICAgaWNvbi5zcmMgPSBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtvYmplY3QuaWNvbn1ANHgucG5nYDtcbiAgICBpY29uLmFsdCA9IGAke29iamVjdC5kZXNjcmlwdGlvbn1gO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcIm1haW5EZXNjcmlwdGlvblwiIH0pO1xuICAgIC8vICEhISBkb24ndCBrbm93IGlmIEkgc2hvdWxkIGRpc3BsYXkgaWNvbiBpbWFnZSBCRUxPVyBvdGhlciBkYXRhLCBvciBhcyBiYWNrZHJvcCBvZiB0aGUgbWFpbkNvbnRhaW5lclxuICAgIC8vIGNvbnRlbnRcbiAgICBjb25zdCB0ZW1wVW5pdCA9IHdoYXRUZW1wKGJvb2xlYW4pO1xuICAgIGNpdHkudGV4dENvbnRlbnQgPSBvYmplY3QuY2l0eTtcbiAgICBjb3VudHJ5LnRleHRDb250ZW50ID0gb2JqZWN0LmNvdW50cnk7XG4gICAgdGVtcFNwYW4udGV4dENvbnRlbnQgPSBvYmplY3QudGVtcFt0ZW1wVW5pdF07XG4gICAgaGlnaFNwYW4udGV4dENvbnRlbnQgPSBgJHtvYmplY3QuaGlnaFt0ZW1wVW5pdF19YDtcbiAgICBsb3dTcGFuLnRleHRDb250ZW50ID0gYCR7b2JqZWN0Lmxvd1t0ZW1wVW5pdF19YDtcbiAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IG9iamVjdC5jb25kaXRpb25zO1xuICAgIC8vIGFwcGVuZCBpdCBhbGwgdG9nZXRoZXJcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvY2F0aW9uQ29udGFpbmVyKTtcbiAgICBsb2NhdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjaXR5KTtcbiAgICBsb2NhdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjb3VudHJ5KTtcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHRlbXBDb250YWluZXIpO1xuICAgIHRlbXBDb250YWluZXIuYXBwZW5kQ2hpbGQodGVtcERpdik7XG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChoaWdobG93Q29udGFpbmVyKTtcbiAgICBoaWdobG93Q29udGFpbmVyLmFwcGVuZENoaWxkKGhpZ2hEaXYpO1xuICAgIGhpZ2hsb3dDb250YWluZXIuYXBwZW5kQ2hpbGQobG93RGl2KTtcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGljb25Db250YWluZXIpO1xuICAgIGljb25Db250YWluZXIuYXBwZW5kQ2hpbGQoaWNvbik7XG4gICAgaWNvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG5cbiAgICByZXR1cm4gbWFpbkNvbnRhaW5lcjtcbiAgfTtcbiAgcmV0dXJuIHsgY3JlYXRlIH07XG59KSgpO1xuY29uc3QgZmlsbE1haW5Db250YWluZXIgPSAob2JqZWN0LCBib29sZWFuKSA9PiB7XG4gIGNvbnN0IG1haW4gPSBkaXNwbGF5TWFpbi5jcmVhdGUob2JqZWN0LCBib29sZWFuKTtcbiAgcmV0dXJuIG1haW47XG59O1xuZXhwb3J0IGRlZmF1bHQgZmlsbE1haW5Db250YWluZXI7XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBkYXRlRm4gfSBmcm9tIFwiLi91dGlsaXR5XCI7XG5cbi8vIGZ1bmN0aW9ucyB0byBydW4gb24gdGhlIGRhdGEsIGdpdmUgb2JqIHByb3BlciB2YWx1ZXNcbi8vIGNvbnN0IGFjdGlvbnMgPSAoKCkgPT4ge1xuLy8gICAgIGNvbnN0IHNvcnREYXlzID0gKGlucHV0KVxuLy8gfSkoKTtcbmNvbnN0IHJldHVybkRhdGUgPSAob2JqZWN0LCBpdGVtKSA9PiB7XG4gICAgY29uc3QgZGF5ID0gaXRlbS5kdF90eHQ7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGRheSk7XG4gICAgZGF0ZS5zZXRNaW51dGVzKGRhdGUuZ2V0TWludXRlcygpICsgKG9iamVjdC5jaXR5LnRpbWV6b25lIC8gNjApKTtcbiAgICByZXR1cm4gZGF0ZTtcbn1cbmNvbnN0IHNvcnREYXlzID0gKG9iamVjdCkgPT4ge1xuICAgIGNvbnN0IGRhdGUgPSByZXR1cm5EYXRlKG9iamVjdCwgb2JqZWN0Lmxpc3RbMF0pO1xuICAgIGNvbnN0IGRkYXkgPSBkYXRlLmdldERhdGUoKTtcbiAgICBjb25zdCBhcnJheSA9IG9iamVjdC5saXN0O1xuICAgIGNvbnN0IGNvbGxlY3Rpb24gPSB7XG4gICAgICAgIDA6IHt9LFxuICAgICAgICAxOiB7fSxcbiAgICAgICAgMjoge30sXG4gICAgICAgIDM6IHt9LFxuICAgICAgICA0OiB7fSxcbiAgICAgICAgNToge30sXG4gICAgfTtcbiAgICBhcnJheS5mb3JFYWNoKGluZGV4ID0+IHtcbiAgICAgICAgY29uc3QgaW5kZXhEYXRlID0gcmV0dXJuRGF0ZShvYmplY3QsIGluZGV4KTtcbiAgICAgICAgY29uc3QgaSA9IGluZGV4RGF0ZS5nZXREYXRlKCkgLSBkZGF5O1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGluZGV4RGF0ZS5nZXRIb3VycygpO1xuICAgICAgICBjb2xsZWN0aW9uW2ldW3ZhbHVlXSA9IChpbmRleCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGNvbGxlY3Rpb247XG59XG5jb25zdCBmaW5kSGlnaExvdyA9IChvYmplY3QpID0+IHtcbiAgICBjb25zdCBhcnJheSA9IE9iamVjdC5rZXlzKG9iamVjdCk7XG4gICAgbGV0IGhpZ2ggPSBvYmplY3RbYXJyYXlbMF1dLm1haW4udGVtcDtcbiAgICBsZXQgbG93ID0gb2JqZWN0W2FycmF5WzBdXS5tYWluLnRlbXA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCB0ZW1wID0gb2JqZWN0W2FycmF5W2ldXS5tYWluLnRlbXA7XG4gICAgICAgIGNvbnNvbGUubG9nKHRlbXApO1xuICAgICAgICBpZiAodGVtcCA+IGhpZ2gpIHtcbiAgICAgICAgICAgIGhpZ2ggPSB0ZW1wO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0ZW1wIDwgbG93KSB7XG4gICAgICAgICAgICBsb3cgPSB0ZW1wO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBbaGlnaCwgbG93XTtcbn1cblxuZXhwb3J0IHsgc29ydERheXMsIGZpbmRIaWdoTG93IH07IiwiaW1wb3J0IHsgZnJvbVVuaXhUaW1lIH0gZnJvbSAnZGF0ZS1mbnMnO1xuLy8gRE9NIGZ1bmN0aW9uc1xuLy8gaGVscGVyIGZ1bmN0aW9ucyB0byBjcmVhdGUgRE9NIGVsZW1lbnQgYW5kIGFkZCBhdHRyaWJ1dGVzXG4vLyBpcyB0aGVyZSBhIG1vcmUgZWZmZWN0aXZlL2VmZmljaWVudCB3YXkgdG8gZG8gdGhpcz8hXG5jb25zdCBzZXRBdHRyaWJ1dGVzID0gKGVsZW1lbnQsIGF0dHJpYnV0ZXMpID0+IHtcbiAgICBPYmplY3QuZW50cmllcyhhdHRyaWJ1dGVzKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG4gICAgfSlcbn1cbmNvbnN0IGNyZWF0ZUVsZW1lbnQgPSAodHlwZSwgYXR0cmlidXRlcykgPT4ge1xuICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGAke3R5cGV9YCk7XG4gICAgaWYgKGF0dHJpYnV0ZXMgPT0gbnVsbCkgcmV0dXJuIG5ld0VsZW1lbnQ7XG4gICAgc2V0QXR0cmlidXRlcyhuZXdFbGVtZW50LCBhdHRyaWJ1dGVzKTtcbiAgICByZXR1cm4gbmV3RWxlbWVudDtcbn1cbi8vIHRpbWUgLT4gdHJhbnNmb3JtIHVuaXggdG8gc3RhbmRhcmRcbmNvbnN0IHRpbWUgPSAoaW5wdXQsIG9mZnNldCkgPT4ge1xuICAgIGNvbnN0IGxvY2FsRGF0ZSA9IGZyb21Vbml4VGltZShpbnB1dCk7XG4gICAgY29uc3QgbG9jYWxPZmZzZXQgPSBsb2NhbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcbiAgICBsb2NhbERhdGUuc2V0TWludXRlcyhsb2NhbERhdGUuZ2V0TWludXRlcygpICsgbG9jYWxPZmZzZXQpO1xuICAgIGxvY2FsRGF0ZS5zZXRNaW51dGVzKGxvY2FsRGF0ZS5nZXRNaW51dGVzKCkgKyAob2Zmc2V0IC8gNjApKTtcbiAgICByZXR1cm4gbG9jYWxEYXRlO1xufVxuY29uc3QgdGltZUNoZWNrID0gKGlucHV0KSA9PiB7XG4gICAgbGV0IGNoZWNrZWQgPSBpbnB1dDtcbiAgICBpZiAoaW5wdXQgPCAxMCkge1xuICAgICAgICBjaGVja2VkID0gYDAke2lucHV0fWA7XG4gICAgfVxuICAgIHJldHVybiBjaGVja2VkO1xufVxuY29uc3QgY2hlY2tOdW1iZXIgPSAoaW5wdXQpID0+IHtcbiAgICBsZXQgdmFsdWUgPSBpbnB1dDtcbiAgICBpZiAoaW5wdXQgPCAxMCkge1xuICAgICAgdmFsdWUgPSBgMCR7aW5wdXR9YDtcbiAgICB9IFxuICAgIHJldHVybiB2YWx1ZTtcbn1cbmNvbnN0IGhvdXJNaW4gPSAoaW5wdXQsIG9mZnNldCkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gdGltZShpbnB1dCwgb2Zmc2V0KTtcbiAgICBjb25zdCBob3VycyA9IGNoZWNrTnVtYmVyKHZhbHVlLmdldEhvdXJzKCkpO1xuICAgIGNvbnN0IG1pbnV0ZXMgPSBjaGVja051bWJlcih2YWx1ZS5nZXRNaW51dGVzKCkpXG4gICAgcmV0dXJuIGAke2hvdXJzfToke21pbnV0ZXN9YDtcbn1cbmNvbnN0IGRhdGVGbiA9IChpbnB1dCwgb2Zmc2V0KSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSB0aW1lKGlucHV0LCBvZmZzZXQpO1xuICAgIHJldHVybiB2YWx1ZS5nZXREYXRlKCk7XG59XG4vLyB0ZW1wIC0+IGNvbnZlcnQgRiB0byBDXG4vLyBwbGFubmluZyB0byBoYXZlIGJvdGggaW4gYW4gb2JqZWN0XG5jb25zdCB0ZW1wRm4gPSAoaW5wdXQpID0+IHtcbiAgICBjb25zdCB0ZW1wT2JqID0ge1xuICAgICAgICBmYXI6IE1hdGgucm91bmQoTnVtYmVyKGlucHV0KSksXG4gICAgICAgIGNlbDogTWF0aC5yb3VuZCgoTnVtYmVyKGlucHV0KSAtIDMyKSAqICg1LzkpKSxcbiAgICB9XG4gICAgcmV0dXJuIHRlbXBPYmo7XG59XG4vLyBkaXNwbGF5IEMgb3IgRj9cbmNvbnN0IHdoYXRUZW1wID0gKGJvb2xlYW4pID0+IHtcbiAgICBsZXQgdmFsdWUgPSBcImNlbFwiO1xuICAgIGlmIChib29sZWFuID09PSBmYWxzZSkge1xuICAgICAgICB2YWx1ZSA9IFwiZmFyXCI7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbn1cbi8vIGRlYnVnOiBzb21ldGltZXMgY3VycmVudCB0ZW1wIGlzIGhpZ2hlciBvciBsb3dlciB0aGFuIGZvcmVjYXN0IGhpZ2gvbG93XG4vLyB0aGlzIGNoZWNrIGZuIGZpeGVzIGl0XG5jb25zdCBjaGVja1RlbXAgPSAoY3VycmVudCwgaGlnaCwgbG93KSA9PiB7XG4gICAgbGV0IGhpID0gaGlnaDtcbiAgICBsZXQgbG8gPSBsb3c7XG4gICAgaWYgKGN1cnJlbnQgPiBoaWdoKSB7XG4gICAgICAgIGhpID0gY3VycmVudDtcbiAgICB9XG4gICAgaWYgKGN1cnJlbnQgPCBsb3cpIHtcbiAgICAgICAgbG8gPSBsb3c7XG4gICAgfVxuICAgIHJldHVybiBbaGksIGxvXTtcbn1cbmV4cG9ydCB7IGNyZWF0ZUVsZW1lbnQsIHRlbXBGbiwgd2hhdFRlbXAsIGNoZWNrVGVtcCwgaG91ck1pbiwgZGF0ZUZuLCB0aW1lLCB0aW1lQ2hlY2sgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgY2hlY2tUZW1wLCBjcmVhdGVFbGVtZW50LCBob3VyTWluLCB0ZW1wRm4gfSBmcm9tIFwiLi91dGlsaXR5XCI7XG5pbXBvcnQgeyBvYmosIGZpbGxEZXRhaWxDb250YWluZXIgfSBmcm9tIFwiLi9kaXNwbGF5RXh0cmFcIjtcbmltcG9ydCBmaWxsTWFpbkNvbnRhaW5lciBmcm9tIFwiLi9kaXNwbGF5TWFpblwiO1xuaW1wb3J0IHsgc29ydERheXMsIGZpbmRIaWdoTG93IH0gZnJvbSBcIi4vb2JqRm5cIjtcbmltcG9ydCBmaWxsRm9yZWNhc3RDb250YWluZXIgZnJvbSBcIi4vZGlzcGxheUZvcmVjYXN0XCI7XG5cbi8vIGdldCBtYWluIGJvZHkgaW4gRE9NXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5jb25zdCBtYWluID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcIm1haW5cIiB9KTtcbmJvZHkuYXBwZW5kQ2hpbGQobWFpbik7XG4vLyBtYWtlIGlucHV0IGZpZWxkIGFuZCBzdWJtaXQgYnV0dG9uXG5jb25zdCBpbnB1dENvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJpbnB1dENvbnRhaW5lclwiIH0pO1xuY29uc3QgaW5wdXRGaWVsZCA9IGNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7XG4gIGNsYXNzOiBcImlucHV0RmllbGRcIixcbiAgaWQ6IFwiaW5wdXRGaWVsZFwiLFxuICBcImFyaWEtbGFiZWxcIjogXCJJbnB1dCBMb2NhdGlvblwiLFxuICB0aXRsZTogXCJGb3JtYXQgYXM6ICdDaXR5JywgJ0NpdHksIFN0YXRlJywgT1IgJ0NpdHksIENvdW50cnknXCIsXG4gIFwicGxhY2Vob2xkZXJcIjogXCJTZWFyY2ggbG9jYXRpb24uLi5cIixcbn0pO1xuY29uc3Qgc3VibWl0QnRuID0gY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7XG4gIGNsYXNzOiBcInN1Ym1pdEJ0blwiLFxuICBcImFyaWEtbGFiZWxcIjogXCJTdWJtaXRcIixcbn0pO1xuc3VibWl0QnRuLnRleHRDb250ZW50ID0gXCJTZWFyY2hcIjtcbi8vIG1ha2UgdGVtcCB0b2dnbGVcbmNvbnN0IHRlbXBCdG5Db250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6IFwidGVtcEJ0bkNvbnRhaW5lclwifSk7XG5jb25zdCB0ZW1wVG9nZ2xlID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiBcInRlbXBUb2dnbGVcIn0pO1xubGV0IHRlbXBVbml0ID0gZmFsc2U7XG50ZW1wVG9nZ2xlLnRleHRDb250ZW50ID0gYMKwRmA7XG50ZW1wQnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKHRlbXBUb2dnbGUpO1xuLy8gdG9nZ2xlIGZ1bmN0aW9uXG5jb25zdCB0b2dnbGVGbiA9ICgpID0+IHtcbiAgY29uc29sZS5sb2codGVtcFVuaXQpO1xuICBpZiAoIXRlbXBVbml0KSB7XG4gICAgdGVtcFRvZ2dsZS50ZXh0Q29udGVudCA9IGDCsENgO1xuICB9IGVsc2Uge1xuICAgIHRlbXBUb2dnbGUudGV4dENvbnRlbnQgPSBgwrBGYDtcbiAgfVxuICB0ZW1wVW5pdCA9ICF0ZW1wVW5pdDtcbiAgY29uc29sZS5sb2codGVtcFVuaXQpO1xufVxudGVtcFRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgdG9nZ2xlRm4oKTtcbn0pXG4vL1xuaW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXRGaWVsZCk7XG5pbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xuaW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQodGVtcEJ0bkNvbnRhaW5lcik7XG5tYWluLmFwcGVuZENoaWxkKGlucHV0Q29udGFpbmVyKTtcbi8vIHN1Ym1pdCBsaXN0ZW5lciBmdW5jdGlvblxuY29uc3Qgc3VibWl0Rm4gPSAoKSA9PiB7XG4gIGNvbnN0IHVzZXJJbnB1dCA9IGlucHV0RmllbGQudmFsdWU7XG4gIC8vIG5lZWRzIGVkaXRcbiAgYXBpQWN0aW9uLm1haW5Gbih1c2VySW5wdXQsIHRlbXBVbml0KTtcbiAgaW5wdXRGaWVsZC52YWx1ZSA9IFwiXCI7XG59O1xuc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHN1Ym1pdEZuKCk7XG59KTtcbi8vXG5jb25zdCBjbGVhckFsbCA9IChpbnB1dCkgPT4ge1xuICB3aGlsZSAoaW5wdXQuZmlyc3RDaGlsZCkge1xuICAgIGlucHV0LnJlbW92ZUNoaWxkKGlucHV0LmZpcnN0Q2hpbGQpO1xuICB9XG59XG5jb25zdCBjbGVhck1haW4gPSAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKG1haW4uY2hpbGRyZW4ubGVuZ3RoKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBtYWluLmNoaWxkcmVuLmxlbmd0aDsgaSArPSAwKSB7XG4gICAgY29uc29sZS5sb2cobWFpbi5jaGlsZHJlblswXS5uZXh0RWxlbWVudFNpYmxpbmcpO1xuICAgIGNsZWFyQWxsKG1haW4uY2hpbGRyZW5bMF0ubmV4dEVsZW1lbnRTaWJsaW5nKTtcbiAgICBtYWluLnJlbW92ZUNoaWxkKG1haW4uY2hpbGRyZW5bMF0ubmV4dEVsZW1lbnRTaWJsaW5nKTtcbiAgfVxufVxuLy8gZmV0Y2ggeDM6IGN1cnJlbnQsIGZvcmVjYXN0LCBhbmQgYWlycXVhbGl0eVxuLy8gZWFzaWVyIHRvIGtlZXAgdGhlbSBzZXBhcmF0ZT9cbmNvbnN0IGFwaUFjdGlvbiA9ICgoKSA9PiB7XG4gIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IFwiOTE3YTE3Zjc3YTYwYWU5NmVlMDgxMjEyZTk0ZTNmNzVcIjtcbiAgY29uc3QgZ2V0Rm9yZWNhc3QgPSBhc3luYyAobG9jYXRpb24pID0+IHtcbiAgICBjb25zdCBzZWFyY2hMb2NhdGlvbiA9IGxvY2F0aW9uO1xuICAgIGNvbnN0IGZvcmVjYXN0RmV0Y2ggPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvZm9yZWNhc3Q/cT0ke3NlYXJjaExvY2F0aW9ufSZhcHBpZD0ke2N1cnJlbnRWYWx1ZX0mdW5pdHM9aW1wZXJpYWxgLFxuICAgICAge1xuICAgICAgICBtb2RlOiBcImNvcnNcIixcbiAgICAgIH1cbiAgICApO1xuICAgIGNvbnN0IGZvcmVjYXN0RGF0YSA9IGF3YWl0IGZvcmVjYXN0RmV0Y2guanNvbigpO1xuICAgIHJldHVybiBmb3JlY2FzdERhdGE7XG4gIH07XG4gIGNvbnN0IGdldEN1cnJlbnQgPSBhc3luYyAobG9jYXRpb24pID0+IHtcbiAgICAvLyAhISEgbmVlZCB0byBjaGVjayBhcGkgY2FsbCAtIGFjY3VyYXRlIGZvciBjdXJyZW50IGNvbmRpdGlvbnM/XG4gICAgY29uc3QgY3VycmVudEZldGNoID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2xvY2F0aW9ufSZhcHBpZD0ke2N1cnJlbnRWYWx1ZX0mdW5pdHM9aW1wZXJpYWxgLFxuICAgICAge1xuICAgICAgICBtb2RlOiBcImNvcnNcIixcbiAgICAgIH1cbiAgICApO1xuICAgIGNvbnN0IGN1cnJlbnREYXRhID0gYXdhaXQgY3VycmVudEZldGNoLmpzb24oKTtcbiAgICByZXR1cm4gY3VycmVudERhdGE7XG4gIH07XG4gIGNvbnN0IGdldEFpclEgPSBhc3luYyAobGF0LCBsb24pID0+IHtcbiAgICBjb25zdCBhaXJGZXRjaCA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2Fpcl9wb2xsdXRpb24/bGF0PSR7bGF0fSZsb249JHtsb259JmFwcGlkPSR7Y3VycmVudFZhbHVlfWAsXG4gICAgICB7XG4gICAgICAgIG1vZGU6IFwiY29yc1wiLFxuICAgICAgfVxuICAgICk7XG4gICAgY29uc3QgYWlyRGF0YSA9IGF3YWl0IGFpckZldGNoLmpzb24oKTtcbiAgICByZXR1cm4gYWlyRGF0YTtcbiAgfTtcbiAgY29uc3QgZGVjaXBoZXJFcnJvciA9IChpbnB1dCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5pbnB1dENvbnRhaW5lcicpO1xuICAgIGlmIChpbnB1dC5jb2QgPT09IFwiNDA0XCIpIHtcbiAgICAgIGNvbnN0IGVycm9yRGlzcGxheSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogXCJlcnJvckRpc3BsYXlcIn0pO1xuICAgICAgZXJyb3JEaXNwbGF5LnRleHRDb250ZW50ID0gXCJMb2NhdGlvbiBub3QgZm91bmQhXCI7XG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZXJyb3JEaXNwbGF5KTtcbiAgICB9XG4gIH1cbiAgY29uc3QgZXJyb3JDaGVjayA9IChpbnB1dCkgPT4ge1xuICAgIGxldCBzZW5kID0gXCJcIjtcbiAgICBpZiAoaW5wdXQuY29kICE9PSBcIjIwMFwiKSB7XG4gICAgICBzZW5kID0gZmFsc2U7XG4gICAgICBkZWNpcGhlckVycm9yKGlucHV0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VuZCA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiBzZW5kO1xuICB9XG4gIC8vIGdldCBhbGwgdGhlIGRhdGEgaW50byBhbiBvYmplY3RcbiAgY29uc3QgZGVjbGFyZURhdGEgPSAoW2ZvcmVjYXN0LCBjdXJyZW50LCBhaXJdLCB0ZW1wQXJyYXkpID0+IHtcbiAgICBjb25zb2xlLmxvZyhbZm9yZWNhc3QsIGN1cnJlbnQsIGFpcl0pO1xuICAgIGNvbnN0IGNpdHkgPSBjdXJyZW50Lm5hbWU7XG4gICAgY29uc3QgZ3BzID0gYCR7Y3VycmVudC5jb29yZC5sYXR9LCAke2N1cnJlbnQuY29vcmQubG9ufWA7XG4gICAgY29uc3QgdGVtcCA9IHRlbXBGbihjdXJyZW50Lm1haW4udGVtcCk7XG4gICAgY29uc3QgaGlnaExvdyA9IGNoZWNrVGVtcCh0ZW1wLCB0ZW1wQXJyYXlbMF0sIHRlbXBBcnJheVsxXSk7XG4gICAgY29uc3QgaGlnaCA9IHRlbXBGbihoaWdoTG93WzBdKTtcbiAgICBjb25zdCBsb3cgPSB0ZW1wRm4oaGlnaExvd1sxXSk7XG4gICAgY29uc3QgY29uZGl0aW9ucyA9IGN1cnJlbnQud2VhdGhlclswXS5tYWluO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gY3VycmVudC53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xuICAgIGNvbnN0IGljb24gPSBjdXJyZW50LndlYXRoZXJbMF0uaWNvbjtcbiAgICBjb25zdCB3aW5kID0gZm9yZWNhc3QubGlzdFswXS53aW5kO1xuICAgIGNvbnN0IHBvcCA9IGZvcmVjYXN0Lmxpc3RbMF0ucG9wO1xuICAgIGNvbnN0IHRpbWV6b25lID0gZm9yZWNhc3QuY2l0eS50aW1lem9uZTtcbiAgICBjb25zdCBzdW5yaXNlID0gaG91ck1pbihmb3JlY2FzdC5jaXR5LnN1bnJpc2UsIHRpbWV6b25lKTtcbiAgICBjb25zdCBzdW5zZXQgPSBob3VyTWluKGZvcmVjYXN0LmNpdHkuc3Vuc2V0LCB0aW1lem9uZSk7XG4gICAgY29uc3QgaHVtaWRpdHkgPSBmb3JlY2FzdC5saXN0WzBdLm1haW4uaHVtaWRpdHk7XG4gICAgY29uc3QgZmVlbHNMaWtlID0gdGVtcEZuKGZvcmVjYXN0Lmxpc3RbMF0ubWFpbi5mZWVsc19saWtlKTtcbiAgICBjb25zdCB2aXNpYmlsaXR5ID0gZm9yZWNhc3QubGlzdFswXS52aXNpYmlsaXR5O1xuICAgIGNvbnN0IHByZWNpcCA9IGZvcmVjYXN0Lmxpc3RbMF0ucmFpbjtcbiAgICBjb25zdCBhaXJRdWFsaXR5ID0gYWlyLmxpc3RbMF0ubWFpbi5hcWk7XG4gICAgY29uc3QgcHJlc3N1cmUgPSBmb3JlY2FzdC5saXN0WzBdLm1haW4ucHJlc3N1cmU7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNpdHksXG4gICAgICBncHMsXG4gICAgICB0ZW1wLFxuICAgICAgaGlnaCxcbiAgICAgIGxvdyxcbiAgICAgIGNvbmRpdGlvbnMsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIGljb24sXG4gICAgICB3aW5kLFxuICAgICAgcG9wLFxuICAgICAgc3VucmlzZSxcbiAgICAgIHN1bnNldCxcbiAgICAgIHRpbWV6b25lLFxuICAgICAgaHVtaWRpdHksXG4gICAgICBmZWVsc0xpa2UsXG4gICAgICB2aXNpYmlsaXR5LFxuICAgICAgcHJlY2lwLFxuICAgICAgYWlyUXVhbGl0eSxcbiAgICAgIHByZXNzdXJlLFxuICAgIH07XG4gIH07XG5cbiAgY29uc3QgbWFpbkZuID0gYXN5bmMgKGxvY2F0aW9uLCBib29sZWFuKSA9PiB7XG4gICAgdHJ5IHtcbiAgICBjb25zdCBmb3JlY2FzdFcgPSBhd2FpdCBnZXRGb3JlY2FzdChsb2NhdGlvbik7XG4gICAgaWYgKGVycm9yQ2hlY2soZm9yZWNhc3RXKSkge1xuICAgICAgY29uc3QgZGF5c0YgPSBzb3J0RGF5cyhmb3JlY2FzdFcpO1xuICAgICAgY29uc3QgaGlnaExvdyA9IGZpbmRIaWdoTG93KGRheXNGWzBdKTtcbiAgICAgIGNvbnN0IGN1cnJlbnRXID0gYXdhaXQgZ2V0Q3VycmVudChsb2NhdGlvbik7XG4gICAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50Vyk7XG4gICAgICBjb25zdCBhaXJRID0gYXdhaXQgZ2V0QWlyUShmb3JlY2FzdFcuY2l0eS5jb29yZC5sYXQsIGZvcmVjYXN0Vy5jaXR5LmNvb3JkLmxvbik7XG4gICAgICAvLyBjb25zb2xlLmxvZyhhaXJRKTtcbiAgICAgIGNvbnN0IGNvbGxlY3RpdmUgPSBQcm9taXNlLmFsbChbZm9yZWNhc3RXLCBjdXJyZW50VywgYWlyUV0pLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgY29uc3Qgb2JqZWN0ID0gZGVjbGFyZURhdGEoZGF0YSwgaGlnaExvdyk7XG4gICAgICAgIGNvbnNvbGUubG9nKG9iamVjdCk7XG4gICAgICAgIGNsZWFyTWFpbigpO1xuICAgICAgICBjb25zdCBkZXRhaWwgPSBmaWxsRGV0YWlsQ29udGFpbmVyKG9iamVjdCwgYm9vbGVhbik7XG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoZGV0YWlsKTtcbiAgICAgICAgY29uc3QgY3VycmVudCA9IGZpbGxNYWluQ29udGFpbmVyKG9iamVjdCwgYm9vbGVhbik7XG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoY3VycmVudCk7XG4gICAgICAgIGNvbnN0IGZvcmVjYXN0ID0gZmlsbEZvcmVjYXN0Q29udGFpbmVyKGRheXNGLCBvYmplY3QsIGJvb2xlYW4pO1xuICAgICAgICBtYWluLmFwcGVuZENoaWxkKGZvcmVjYXN0KTtcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKGBBcG9sb2dpZXMhIFRoZSBzaXRlIGV4cGVyaWVuY2VkIGFuIGVycm9yOiBcIiR7Zm9yZWNhc3RXLm1lc3NhZ2V9XCIuYCk7XG4gICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBhbGVydCgnQXBvbG9naWVzISBUaGUgc2l0ZSBleHBlcmllbmNlZCBhbiBlcnJvciwgY2hlY2sgdGhlIGxvZyBmb3IgZGV0YWlscy4nKTtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG4gIH07XG4gIC8vIHN0aWxsIG5lZWQgdG8gc29ydCBvdXQgaG93IHRvIHBhcnNlIGRhdGEgZm9yIGZvcmVjYXN0IHNlY3Rpb25cbiAgLy8gZm9yIGRlc2t0b3AgZGlzcGxheTogYSBjYXJkIGZvciBlYWNoIGRheSwgd2hpY2ggaGFzIHRoZSB2YWx1ZXMgKDNoIGluY3JlbWVudHMpIGluIGxpc3Qgc3R5bGVcbiAgLy8gdGltZSwgdGVtcCwgY29uZGl0aW9ucywgcG9wPyAoaWYgaXQncyBncmVhdGVyIHRoYW4gMClcbiAgLy8gc2hvdyBjYXJkcyBob3Jpem9udGFsbHlcbiAgLy8gZm9yIG1vYmlsZSBkaXNwbGF5OiBzYW1lIGNhcmRzLCBidXQgc2hvdyB2ZXJ0aWNhbGx5XG4gIHJldHVybiB7IG1haW5GbiB9O1xufSkoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
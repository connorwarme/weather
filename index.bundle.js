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
  const feelsFn = (value) => {
    const feels = helper("FEELS LIKE", `${value}`);
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
    const makeTemp = (forecastObj) => {
        const theTemp = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.tempFn)(forecastObj.main.temp);
        forecastObj.temp = theTemp;
        const tempDiv = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class: "tempDiv"});
        tempDiv.textContent = `${theTemp.far}`;
        return tempDiv;
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

    const makeCard = (object, collective, card) => {
        const keys = Object.keys(collective);
        keys.forEach(index => {
            const block = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class: "forecastBlock"});
            card.appendChild(block);
            block.appendChild(makeTime(object, collective[index]));
            block.appendChild(makeTemp(collective[index]));
            // !!! need icon here
            block.appendChild(makeIcon(collective[index]));
            block.appendChild(makePop(collective[index]));
        })
    }
    const forecast = (input, object) => {
        const length = Object.keys(input).length;
        const array = [];
        for (let i = 0; i < length; i += 1) {
            array[i] = input[i];
        }
        let i = 0;
        array.forEach(index => {
            const card = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class: `card${i}`});
            makeCard(object, index, card);
            container.appendChild(card);
            i += 1;
        })
        return container;
    }
    return { forecast }
})();
const fillForecastContainer = (input, object) => {
    console.log(input);
    console.log(object);
    const forecastDiv = create.forecast(input, object);
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
    const icon = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {class: "mainWeatherIcon", "aria-label": "Weather Icon"});
    icon.src = `http://openweathermap.org/img/wn/${object.icon}@4x.png`;
    icon.alt = `${object.description}`;
    const description = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", { class: "mainDescription" });
    // !!! don't know if I should display icon image BELOW other data, or as backdrop of the mainContainer
    // content
    city.textContent = object.city;
    country.textContent = object.country;
    tempContainer.textContent = object.temp.far;
    highlowContainer.textContent = `High: ${object.high.far} / Low: ${object.low.far}`;
    description.textContent = object.conditions;
    // append it all together
    mainContainer.appendChild(locationContainer);
    locationContainer.appendChild(city);
    locationContainer.appendChild(country);
    mainContainer.appendChild(tempContainer);
    mainContainer.appendChild(highlowContainer);
    mainContainer.appendChild(iconContainer);
    iconContainer.appendChild(icon);
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
/* harmony export */   "timeCheck": () => (/* binding */ timeCheck)
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
inputContainer.appendChild(inputField);
inputContainer.appendChild(submitBtn);
main.appendChild(inputContainer);
// submit listener function
const submitFn = () => {
  const userInput = inputField.value;
  // needs edit
  apiAction.mainFn(userInput);
  inputField.value = "";
};
submitBtn.addEventListener("click", () => {
  submitFn();
});
//
const clearMain = () => {
  console.log(main.children.length);
  for (let i = 1; i < main.children.length; i += 0) {
    console.log(main.children[0].nextElementSibling);
    clearAll(main.children[0].nextElementSibling);
    main.removeChild(main.children[0].nextElementSibling);
  }
}
const clearAll = (input) => {
  while (input.firstChild) {
    input.removeChild(input.firstChild);
  }
}
// figure out how to fetch x3: current, forecast, and airquality
// easier to keep them seperate?
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
  const decipherError = (input) => {
    const container = document.querySelector('div.inputContainer');
    if (input.cod === "404") {
      const errorDisplay = (0,_utility__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', {class: "errorDisplay"});
      errorDisplay.textContent = "Location not found!";
      container.appendChild(errorDisplay);
    }
  }
  // get all the datas - thinking an array with 3 obj: [{current}, {forecast}, {airq}]
  //
  const declareData = ([forecast, current, air], tempArray) => {
    // !!! need to confirm current data, find airq, and think thru what else should be included
    // city, country, current temp, high, low, current conditions & descrrption, current weather icon?,
    // then stuff for detailContainer
    // !!! use f to destructure? is that was eslint is going for?
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

  const mainFn = async (location) => {
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
        const detail = (0,_displayExtra__WEBPACK_IMPORTED_MODULE_2__.fillDetailContainer)(object);
        main.appendChild(detail);
        const current = (0,_displayMain__WEBPACK_IMPORTED_MODULE_3__["default"])(object);
        main.appendChild(current);
        const forecast = (0,_displayForecast__WEBPACK_IMPORTED_MODULE_5__["default"])(daysF, object);
        main.appendChild(forecast);
      })
    } else {
      console.log(`Apologies! The site experienced an error: "${forecastW.message}".`);
    }
    } catch (error) {
      alert('Apologies! The site experienced an error, check the log for details.');
      console.log(error);
    }
    // const extra = extraFactory(forDisplay);
    // main.appendChild(extra);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSw2Q0FBNkMsaUJBQWlCLGdCQUFnQixHQUFHLFNBQVMsa0NBQWtDLG9CQUFvQixxQ0FBcUMsa0NBQWtDLEdBQUcsaUJBQWlCLHVCQUF1QixvQkFBb0IsOEJBQThCLDBCQUEwQixHQUFHLGtCQUFrQixvQkFBb0IsdUJBQXVCLEdBQUcsb0JBQW9CLG9CQUFvQix1QkFBdUIsb0JBQW9CLHFDQUFxQyx5Q0FBeUMsR0FBRywwQkFBMEIsb0JBQW9CLDZCQUE2Qiw4QkFBOEIsMEJBQTBCLEdBQUcsT0FBTyxnRkFBZ0YsVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsNkJBQTZCLGlCQUFpQixnQkFBZ0IsR0FBRyxTQUFTLGtDQUFrQyxvQkFBb0IscUNBQXFDLGtDQUFrQyxHQUFHLGlCQUFpQix1QkFBdUIsb0JBQW9CLDhCQUE4QiwwQkFBMEIsR0FBRyxrQkFBa0Isb0JBQW9CLHVCQUF1QixHQUFHLG9CQUFvQixvQkFBb0IsdUJBQXVCLG9CQUFvQixxQ0FBcUMseUNBQXlDLEdBQUcsMEJBQTBCLG9CQUFvQiw2QkFBNkIsOEJBQThCLDBCQUEwQixHQUFHLG1CQUFtQjtBQUMxdkQ7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNyR2E7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNyQmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNKZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNad0M7QUFDVztBQUNNO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsYUFBYSxNQUFNO0FBQ25CLFlBQVksV0FBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZixFQUFFLHNFQUFZO0FBQ2QsaUJBQWlCLG1FQUFTO0FBQzFCLFNBQVMsNERBQU07QUFDZjs7Ozs7Ozs7Ozs7Ozs7O0FDekJ5RDtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixhQUFhLE1BQU07QUFDbkIsWUFBWSxXQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZixFQUFFLHNFQUFZO0FBQ2QseURBQXlEOztBQUV6RDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLDBPQUEwTzs7QUFFMU87QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsREEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmMEM7QUFDMUM7QUFDQSx3QkFBd0IsdURBQWEsVUFBVSwwQkFBMEI7QUFDekU7QUFDQTtBQUNBLHNCQUFzQix1REFBYSxVQUFVLG9CQUFvQjtBQUNqRSxrQkFBa0IsdURBQWEsVUFBVSxzQkFBc0I7QUFDL0QsaUJBQWlCLHVEQUFhLFVBQVUscUJBQXFCO0FBQzdELDJCQUEyQixZQUFZO0FBQ3ZDLDBCQUEwQixNQUFNO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxNQUFNO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLGNBQWM7QUFDdEQ7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLE1BQU07QUFDOUM7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLE1BQU07QUFDaEQ7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLHdCQUF3QjtBQUNuRSxrQkFBa0IsdURBQWEsVUFBVSxtQkFBbUI7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLGFBQWE7QUFDMUQsa0JBQWtCLHVEQUFhLFVBQVUsc0JBQXNCO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxNQUFNO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLE1BQU07QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLEtBQUs7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxLQUFLO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDb0M7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzSCtCO0FBQ25FO0FBQ0E7QUFDQSxzQkFBc0IsdURBQWEsU0FBUywyQkFBMkI7QUFDdkU7QUFDQTtBQUNBLDZCQUE2Qiw4Q0FBSTtBQUNqQyx3QkFBd0IsdURBQWEsU0FBUyxpQkFBaUI7QUFDL0QsaUNBQWlDLG1EQUFTLDBCQUEwQjtBQUNwRTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0RBQU07QUFDOUI7QUFDQSx3QkFBd0IsdURBQWEsU0FBUyxpQkFBaUI7QUFDL0QsaUNBQWlDLFlBQVk7QUFDN0M7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVEQUFhLFNBQVMsK0JBQStCO0FBQzdFLHFCQUFxQix1REFBYSxTQUFTLGdFQUFnRSxtQ0FBbUMsRUFBRTtBQUNoSix1REFBdUQsNEJBQTRCO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix1REFBYSxTQUFTLGdCQUFnQjtBQUM3RCxnQ0FBZ0MseUJBQXlCO0FBQ3pEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHVEQUFhLFNBQVMsdUJBQXVCO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixZQUFZO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHVEQUFhLFNBQVMsY0FBYyxFQUFFLEVBQUU7QUFDakU7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLHFCQUFxQjs7Ozs7Ozs7Ozs7Ozs7O0FDcEVNO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQix1REFBYSxVQUFVLHdCQUF3QjtBQUN6RSw4QkFBOEIsdURBQWE7QUFDM0M7QUFDQSxLQUFLO0FBQ0wsaUJBQWlCLHVEQUFhLFVBQVUsbUJBQW1CO0FBQzNELG9CQUFvQix1REFBYSxVQUFVLHNCQUFzQjtBQUNqRSwwQkFBMEIsdURBQWEsVUFBVSw0QkFBNEI7QUFDN0UsNkJBQTZCLHVEQUFhO0FBQzFDO0FBQ0EsS0FBSztBQUNMLDBCQUEwQix1REFBYSxVQUFVLHdCQUF3QjtBQUN6RSxpQkFBaUIsdURBQWEsU0FBUyx1REFBdUQ7QUFDOUYsbURBQW1ELFlBQVk7QUFDL0Qsa0JBQWtCLG1CQUFtQjtBQUNyQyx3QkFBd0IsdURBQWEsVUFBVSwwQkFBMEI7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxpQkFBaUIsU0FBUyxlQUFlO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsaUJBQWlCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUNpQjs7QUFFbEQ7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsYUFBYTtBQUNiLGFBQWE7QUFDYixhQUFhO0FBQ2IsYUFBYTtBQUNiLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGtCQUFrQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9Dd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxpREFBaUQsS0FBSztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isb0RBQVk7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixNQUFNO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLGlCQUFpQixHQUFHLG1CQUFtQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ3pEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDaUQ7QUFDWjtBQUNaO0FBQ0U7QUFDTTs7QUFFdEQ7QUFDQTtBQUNBLGFBQWEsdURBQWEsVUFBVSxlQUFlO0FBQ25EO0FBQ0E7QUFDQSx1QkFBdUIsdURBQWEsVUFBVSx5QkFBeUI7QUFDdkUsbUJBQW1CLHVEQUFhO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Qsa0JBQWtCLHVEQUFhO0FBQy9CO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDBCQUEwQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTRELGVBQWUsU0FBUyxhQUFhO0FBQ2pHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELFNBQVMsU0FBUyxhQUFhO0FBQzFGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtFQUFrRSxJQUFJLE9BQU8sSUFBSSxTQUFTLGFBQWE7QUFDdkc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHVEQUFhLFNBQVMsc0JBQXNCO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlELFFBQVEsR0FBRyxTQUFTLEdBQUcsS0FBSztBQUNyRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGtCQUFrQixJQUFJLGtCQUFrQjtBQUMzRCxpQkFBaUIsZ0RBQU07QUFDdkIsb0JBQW9CLG1EQUFTO0FBQzdCLGlCQUFpQixnREFBTTtBQUN2QixnQkFBZ0IsZ0RBQU07QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGlEQUFPO0FBQzNCLG1CQUFtQixpREFBTztBQUMxQjtBQUNBLHNCQUFzQixnREFBTTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGdEQUFRO0FBQzVCLHNCQUFzQixtREFBVztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGtFQUFtQjtBQUMxQztBQUNBLHdCQUF3Qix3REFBaUI7QUFDekM7QUFDQSx5QkFBeUIsNERBQXFCO0FBQzlDO0FBQ0EsT0FBTztBQUNQLE1BQU07QUFDTixnRUFBZ0Usa0JBQWtCO0FBQ2xGO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXIvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9mcm9tVW5peFRpbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2Rpc3BsYXlFeHRyYS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2Rpc3BsYXlGb3JlY2FzdC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2Rpc3BsYXlNYWluLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvb2JqRm4uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy91dGlsaXR5LmpzIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG4ubWFpbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHNsYXRlYmx1ZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA1ZnI7XFxufS5pbnB1dENvbnRhaW5lciB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ubWFpbkNvbnRhaW5lciB7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxufVxcbi5kZXRhaWxDb250YWluZXIge1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsIDFmcik7XFxufVxcbi5kZXRhaWxDb250YWluZXIgPiBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFVBQVU7SUFDVixTQUFTO0FBQ2I7QUFDQTtJQUNJLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLDJCQUEyQjtBQUMvQixDQUFDO0lBQ0csZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsa0NBQWtDO0FBQ3RDO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuLm1haW4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzbGF0ZWJsdWU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNWZyO1xcbn0uaW5wdXRDb250YWluZXIge1xcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLm1haW5Db250YWluZXIge1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbn1cXG4uZGV0YWlsQ29udGFpbmVyIHtcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LCAxZnIpO1xcbn1cXG4uZGV0YWlsQ29udGFpbmVyID4gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cblxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGZyb21Vbml4VGltZVxuICogQGNhdGVnb3J5IFRpbWVzdGFtcCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDcmVhdGUgYSBkYXRlIGZyb20gYSBVbml4IHRpbWVzdGFtcC5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENyZWF0ZSBhIGRhdGUgZnJvbSBhIFVuaXggdGltZXN0YW1wIChpbiBzZWNvbmRzKS4gRGVjaW1hbCB2YWx1ZXMgd2lsbCBiZSBkaXNjYXJkZWQuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHVuaXhUaW1lIC0gdGhlIGdpdmVuIFVuaXggdGltZXN0YW1wIChpbiBzZWNvbmRzKVxuICogQHJldHVybnMge0RhdGV9IHRoZSBkYXRlXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ3JlYXRlIHRoZSBkYXRlIDI5IEZlYnJ1YXJ5IDIwMTIgMTE6NDU6MDU6XG4gKiBjb25zdCByZXN1bHQgPSBmcm9tVW5peFRpbWUoMTMzMDUxNTkwNSlcbiAqIC8vPT4gV2VkIEZlYiAyOSAyMDEyIDExOjQ1OjA1XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZnJvbVVuaXhUaW1lKGRpcnR5VW5peFRpbWUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciB1bml4VGltZSA9IHRvSW50ZWdlcihkaXJ0eVVuaXhUaW1lKTtcbiAgcmV0dXJuIHRvRGF0ZSh1bml4VGltZSAqIDEwMDApO1xufSIsImltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgdHlwZW9mIGFyZ3VtZW50ID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjc3RyaW5nLWFyZ3VtZW50c1wiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4vdXRpbGl0eVwiO1xuLy8gY3JlYXRlIGRpc3BsYXlcbmNvbnN0IGRldGFpbENvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJkZXRhaWxDb250YWluZXJcIiB9KTtcbmNvbnN0IGRldGFpbCA9ICgoKSA9PiB7XG4gIGNvbnN0IGhlbHBlciA9IChkZXNjcmlwdGlvbiwgdmFsdWUpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwiZGV0YWlsRGl2XCIgfSk7XG4gICAgY29uc3QgbGFiZWwgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwiZGV0YWlsTGFiZWxcIiB9KTtcbiAgICBjb25zdCBkYXRhID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcImRldGFpbERhdGFcIiB9KTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGAke2Rlc2NyaXB0aW9ufWA7XG4gICAgZGF0YS50ZXh0Q29udGVudCA9IGAke3ZhbHVlfWA7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0YSk7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgfTtcbiAgY29uc3Qgd2luZEZuID0gKHZhbHVlKSA9PiB7XG4gICAgLy8gISEhIG1pZ2h0IG5lZWQgYSBmZXcgdGhpbmdzIC0gb25lIGZvciB3aW5kIHNwZWVkLCBhbm90aGVyIGZvciBkaXJlY3Rpb25cbiAgICBjb25zdCB3aW5kID0gaGVscGVyKFwiV0lORFwiLCBgJHt2YWx1ZX1rbS9oYCk7XG4gICAgLy8gY2hlY2sgdW5pdHNcbiAgICByZXR1cm4gd2luZDtcbiAgfTtcbiAgY29uc3QgdmlzRm4gPSAodmFsdWUpID0+IHtcbiAgICBjb25zdCB2aXMgPSBoZWxwZXIoXCJWSVNJQklMSVRZXCIsIGAke3ZhbHVlIC8gMTAwMH0ga21gKTtcbiAgICByZXR1cm4gdmlzO1xuICB9O1xuICBjb25zdCBodW1pZEZuID0gKHZhbHVlKSA9PiB7XG4gICAgY29uc3QgaHVtaWQgPSBoZWxwZXIoXCJIVU1JRElUWVwiLCBgJHt2YWx1ZX0lYCk7XG4gICAgcmV0dXJuIGh1bWlkO1xuICB9O1xuICBjb25zdCBmZWVsc0ZuID0gKHZhbHVlKSA9PiB7XG4gICAgY29uc3QgZmVlbHMgPSBoZWxwZXIoXCJGRUVMUyBMSUtFXCIsIGAke3ZhbHVlfWApO1xuICAgIHJldHVybiBmZWVscztcbiAgfTtcbiAgY29uc3QgcG9wRm4gPSAodmFsdWUpID0+IHtcbiAgICBjb25zdCBwb3AgPSBoZWxwZXIoXCJQUkVDSVBJVEFUSU9OXCIsIGAke01hdGgucm91bmQodmFsdWUgKiAxMDApfSVgKTtcbiAgICBjb25zdCBsYWJlbCA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJwb3BMYWJlbFwiIH0pO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gXCJDSEFOQ0UgT0ZcIjtcbiAgICAvLyAhISEgbm90IHN1cmUgaWYgdGhpcyB3b3Jrc1xuICAgIHBvcC5pbnNlcnRCZWZvcmUobGFiZWwsIHBvcC5maXJzdENoaWxkKTtcbiAgICByZXR1cm4gcG9wO1xuICB9O1xuICBjb25zdCBwcmVjaXBGbiA9ICh2YWx1ZSkgPT4ge1xuICAgIGxldCBuZXdWYWwgPSB7XG4gICAgICAnM2gnOiAwLFxuICAgIH07XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIG5ld1ZhbCA9IHZhbHVlO1xuICAgIH1cbiAgICBjb25zdCBwcmVjaXAgPSBoZWxwZXIoXCJBQ0NVTVVMQVRJT05cIiwgYCR7bmV3VmFsWyczaCddfW1tIGluIGxhc3QgM2hgKTtcbiAgICBjb25zdCBsYWJlbCA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJwcmVjaXBMYWJlbFwiIH0pO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gXCJQUkVDSVBJVEFUSU9OXCI7XG4gICAgLy8gISEhIG5vdCBzdXJlIGlmIHRoaXMgd29ya3NcbiAgICBwcmVjaXAuaW5zZXJ0QmVmb3JlKGxhYmVsLCBwcmVjaXAuZmlyc3RDaGlsZCk7XG4gICAgcmV0dXJuIHByZWNpcDtcbiAgfTtcbiAgY29uc3QgYWlyRm4gPSAodmFsdWUpID0+IHtcbiAgICBjb25zdCBhaXIgPSBoZWxwZXIoXCJBSVIgUVVBTElUWVwiLCBgJHt2YWx1ZX1gKTtcbiAgICAvLyAhISEgbWlnaHQgbmVlZCB1bml0cyBjbGFyaWZpZXIgKHNjb3JlIG91dCBvZiAxMDA/KVxuICAgIHJldHVybiBhaXI7XG4gIH07XG4gIGNvbnN0IHByZXNzdXJlRm4gPSAodmFsdWUpID0+IHtcbiAgICBjb25zdCBwcmVzc3VyZSA9IGhlbHBlcihcIlBSRVNTVVJFXCIsIGAke3ZhbHVlfWApO1xuICAgIC8vICEhISBuZWVkIHVuaXRzXG4gICAgcmV0dXJuIHByZXNzdXJlO1xuICB9O1xuICBjb25zdCBzdW5yaXNlRm4gPSAodmFsdWUpID0+IHtcbiAgICAvLyAhISEgbmVlZCBmbiB0byBjb252ZXJ0IHZhbHVlIHRvIHRpbWUgKGFsc28gY2hlY2sgZm9yIGxvY2FsIHRpbWUuLilcbiAgICBjb25zdCB0aW1lID0gdmFsdWU7XG4gICAgY29uc3QgcmlzZSA9IGhlbHBlcihcIlNVTlJJU0VcIiwgYCR7dGltZX1gKTtcbiAgICByZXR1cm4gcmlzZTtcbiAgfTtcbiAgY29uc3Qgc3Vuc2V0Rm4gPSAodmFsdWUpID0+IHtcbiAgICAvLyAhISEgbmVlZCB0byBydW4gdmFsdWUgaW4gYSBmbiwgbGlrZSBhYm92ZVxuICAgIGNvbnN0IHRpbWUgPSB2YWx1ZTtcbiAgICBjb25zdCBzZXQgPSBoZWxwZXIoXCJTVU5TRVRcIiwgYCR7dGltZX1gKTtcbiAgICByZXR1cm4gc2V0O1xuICB9O1xuICByZXR1cm4ge1xuICAgIHdpbmRGbixcbiAgICB2aXNGbixcbiAgICBodW1pZEZuLFxuICAgIGZlZWxzRm4sXG4gICAgcG9wRm4sXG4gICAgcHJlY2lwRm4sXG4gICAgYWlyRm4sXG4gICAgcHJlc3N1cmVGbixcbiAgICBzdW5yaXNlRm4sXG4gICAgc3Vuc2V0Rm4sXG4gIH07XG59KSgpO1xuY29uc3QgZmlsbERldGFpbENvbnRhaW5lciA9IChpbnB1dCkgPT4ge1xuICBjb25zb2xlLmxvZyhpbnB1dCk7XG4gIGRldGFpbENvbnRhaW5lci5hcHBlbmRDaGlsZChkZXRhaWwud2luZEZuKGlucHV0LndpbmQuc3BlZWQpKTtcbiAgZGV0YWlsQ29udGFpbmVyLmFwcGVuZENoaWxkKGRldGFpbC52aXNGbihpbnB1dC52aXNpYmlsaXR5KSk7XG4gIGRldGFpbENvbnRhaW5lci5hcHBlbmRDaGlsZChkZXRhaWwuZmVlbHNGbihpbnB1dC5mZWVsc0xpa2UuZmFyKSk7XG4gIGRldGFpbENvbnRhaW5lci5hcHBlbmRDaGlsZChkZXRhaWwuaHVtaWRGbihpbnB1dC5odW1pZGl0eSkpO1xuICBkZXRhaWxDb250YWluZXIuYXBwZW5kQ2hpbGQoZGV0YWlsLnBvcEZuKGlucHV0LnBvcCkpO1xuICBkZXRhaWxDb250YWluZXIuYXBwZW5kQ2hpbGQoZGV0YWlsLnByZWNpcEZuKGlucHV0LnByZWNpcCkpO1xuICBkZXRhaWxDb250YWluZXIuYXBwZW5kQ2hpbGQoZGV0YWlsLmFpckZuKGlucHV0LmFpclF1YWxpdHkpKTtcbiAgZGV0YWlsQ29udGFpbmVyLmFwcGVuZENoaWxkKGRldGFpbC5wcmVzc3VyZUZuKGlucHV0LnByZXNzdXJlKSk7XG4gIGRldGFpbENvbnRhaW5lci5hcHBlbmRDaGlsZChkZXRhaWwuc3VucmlzZUZuKGlucHV0LnN1bnJpc2UpKTtcbiAgZGV0YWlsQ29udGFpbmVyLmFwcGVuZENoaWxkKGRldGFpbC5zdW5zZXRGbihpbnB1dC5zdW5zZXQpKTtcbiAgcmV0dXJuIGRldGFpbENvbnRhaW5lcjtcbn07XG4vLyBnb2FsOiBkaXNwbGF5IG9mIGV4dHJhIGRhdGEgKGJveClcbi8vIHN1bnJpc2UsIHN1bnNldCwgZmVlbHMgbGlrZSwgcG9wLCBwcmVjaXAgYWNjdW0sIHByZXNzdXJlLCBhaXJxLCB2aXMsIHdpbmQsIGh1bWlkaXR5XG5jb25zdCBvYmogPSB7XG4gIGNpdHk6IFwiRGVudmVyXCIsXG4gIGNvdW50cnk6IFwiVVNcIixcbiAgdGVtcDogXCI4MlwiLFxuICBoaWdobG93OiBcIjg1IC8gNjJcIixcbiAgY29uZGl0aW9uczogXCJSYWluXCIsXG4gIGRlc2NyaXB0aW9uOiBcImxpZ2h0IHJhaW5cIixcbiAgd2luZDogXCI4XCIsXG4gIHZpc2liaWxpdHk6IDEwMDAwLFxuICBodW1pZGl0eTogMjgsXG4gIGZlZWxzTGlrZTogXCI4MVwiLFxuICBwb3A6IFwiMC40N1wiLFxuICBwcmVjaXA6IFwiMC4xM1wiLFxuICBhaXJRdWFsaXR5OiBcInVua25vd25cIixcbiAgcHJlc3N1cmU6IDEwMTUsXG4gIHN1bnJpc2U6IDE2NjIxMjE3NTAsXG4gIHN1bnNldDogMTY2MjE2ODYyOCxcbn07XG5leHBvcnQgeyBmaWxsRGV0YWlsQ29udGFpbmVyLCBvYmogfTtcbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIHRpbWUsIHRpbWVDaGVjaywgdGVtcEZuIH0gZnJvbSBcIi4vdXRpbGl0eVwiO1xuLy9cbmNvbnN0IGNyZWF0ZSA9ICgoKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiBcImZvcmVjYXN0Q29udGFpbmVyXCJ9KTtcbiAgICBcbiAgICBjb25zdCBtYWtlVGltZSA9IChvYmplY3QsIGlucHV0KSA9PiB7XG4gICAgICAgIGNvbnN0IGZvcmVjYXN0VGltZSA9IHRpbWUoaW5wdXQuZHQsIG9iamVjdC50aW1lem9uZSk7XG4gICAgICAgIGNvbnN0IHRpbWVEaXYgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6IFwidGltZURpdlwifSk7XG4gICAgICAgIHRpbWVEaXYudGV4dENvbnRlbnQgPSBgJHt0aW1lQ2hlY2soZm9yZWNhc3RUaW1lLmdldEhvdXJzKCkpfTAwYDtcbiAgICAgICAgcmV0dXJuIHRpbWVEaXY7XG4gICAgfVxuICAgIGNvbnN0IG1ha2VUZW1wID0gKGZvcmVjYXN0T2JqKSA9PiB7XG4gICAgICAgIGNvbnN0IHRoZVRlbXAgPSB0ZW1wRm4oZm9yZWNhc3RPYmoubWFpbi50ZW1wKTtcbiAgICAgICAgZm9yZWNhc3RPYmoudGVtcCA9IHRoZVRlbXA7XG4gICAgICAgIGNvbnN0IHRlbXBEaXYgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6IFwidGVtcERpdlwifSk7XG4gICAgICAgIHRlbXBEaXYudGV4dENvbnRlbnQgPSBgJHt0aGVUZW1wLmZhcn1gO1xuICAgICAgICByZXR1cm4gdGVtcERpdjtcbiAgICB9XG4gICAgY29uc3QgbWFrZUljb24gPSAoZm9yZWNhc3RPYmopID0+IHtcbiAgICAgICAgY29uc3QgaWNvbkRpdiA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogXCJmb3JlY2FzdEljb25Db250YWluZXJcIn0pO1xuICAgICAgICBjb25zdCBpY29uID0gY3JlYXRlRWxlbWVudCgnaW1nJywge2NsYXNzOiBcImZvcmVjYXN0SWNvblwiLCBcImFyaWEtbGFiZWxcIjogXCJGb3JlY2FzdCBJY29uXCIsIHRpdGxlOiBgJHtmb3JlY2FzdE9iai53ZWF0aGVyWzBdLmRlc2NyaXB0aW9ufWB9KTtcbiAgICAgICAgaWNvbi5zcmMgPSBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtmb3JlY2FzdE9iai53ZWF0aGVyWzBdLmljb259QDJ4LnBuZ2A7XG4gICAgICAgIGljb24uYWx0ID0gZm9yZWNhc3RPYmoud2VhdGhlclswXS5tYWluO1xuICAgICAgICBpY29uRGl2LmFwcGVuZENoaWxkKGljb24pO1xuICAgICAgICByZXR1cm4gaWNvbkRpdjtcbiAgICB9XG4gICAgY29uc3QgbWFrZVBvcCA9IChmb3JlY2FzdE9iaikgPT4ge1xuICAgICAgICBjb25zdCB0aGVQb3AgPSBmb3JlY2FzdE9iai5wb3A7XG4gICAgICAgIGNvbnN0IHBvcERpdiA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogXCJwb3BEaXZcIn0pO1xuICAgICAgICBwb3BEaXYudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKHRoZVBvcCAqIDEwMCl9JWA7XG4gICAgICAgIHJldHVybiBwb3BEaXY7XG4gICAgfVxuXG4gICAgY29uc3QgbWFrZUNhcmQgPSAob2JqZWN0LCBjb2xsZWN0aXZlLCBjYXJkKSA9PiB7XG4gICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhjb2xsZWN0aXZlKTtcbiAgICAgICAga2V5cy5mb3JFYWNoKGluZGV4ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGJsb2NrID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiBcImZvcmVjYXN0QmxvY2tcIn0pO1xuICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChibG9jayk7XG4gICAgICAgICAgICBibG9jay5hcHBlbmRDaGlsZChtYWtlVGltZShvYmplY3QsIGNvbGxlY3RpdmVbaW5kZXhdKSk7XG4gICAgICAgICAgICBibG9jay5hcHBlbmRDaGlsZChtYWtlVGVtcChjb2xsZWN0aXZlW2luZGV4XSkpO1xuICAgICAgICAgICAgLy8gISEhIG5lZWQgaWNvbiBoZXJlXG4gICAgICAgICAgICBibG9jay5hcHBlbmRDaGlsZChtYWtlSWNvbihjb2xsZWN0aXZlW2luZGV4XSkpO1xuICAgICAgICAgICAgYmxvY2suYXBwZW5kQ2hpbGQobWFrZVBvcChjb2xsZWN0aXZlW2luZGV4XSkpO1xuICAgICAgICB9KVxuICAgIH1cbiAgICBjb25zdCBmb3JlY2FzdCA9IChpbnB1dCwgb2JqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IE9iamVjdC5rZXlzKGlucHV0KS5sZW5ndGg7XG4gICAgICAgIGNvbnN0IGFycmF5ID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGFycmF5W2ldID0gaW5wdXRbaV07XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBhcnJheS5mb3JFYWNoKGluZGV4ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNhcmQgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6IGBjYXJkJHtpfWB9KTtcbiAgICAgICAgICAgIG1ha2VDYXJkKG9iamVjdCwgaW5kZXgsIGNhcmQpO1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmQpO1xuICAgICAgICAgICAgaSArPSAxO1xuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIH1cbiAgICByZXR1cm4geyBmb3JlY2FzdCB9XG59KSgpO1xuY29uc3QgZmlsbEZvcmVjYXN0Q29udGFpbmVyID0gKGlucHV0LCBvYmplY3QpID0+IHtcbiAgICBjb25zb2xlLmxvZyhpbnB1dCk7XG4gICAgY29uc29sZS5sb2cob2JqZWN0KTtcbiAgICBjb25zdCBmb3JlY2FzdERpdiA9IGNyZWF0ZS5mb3JlY2FzdChpbnB1dCwgb2JqZWN0KTtcbiAgICByZXR1cm4gZm9yZWNhc3REaXY7XG59XG5leHBvcnQgZGVmYXVsdCBmaWxsRm9yZWNhc3RDb250YWluZXI7IiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuL3V0aWxpdHlcIjtcbi8vXG5jb25zdCBkaXNwbGF5TWFpbiA9ICgoKSA9PiB7XG4gIGNvbnN0IGNyZWF0ZSA9IChvYmplY3QpID0+IHtcbiAgICBjb25zdCBtYWluQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcIm1haW5Db250YWluZXJcIiB9KTtcbiAgICBjb25zdCBsb2NhdGlvbkNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3M6IFwibG9jYXRpb25Db250YWluZXJcIixcbiAgICB9KTtcbiAgICBjb25zdCBjaXR5ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcIm1haW5DaXR5XCIgfSk7XG4gICAgY29uc3QgY291bnRyeSA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJtYWluQ291bnRyeVwiIH0pO1xuICAgIGNvbnN0IHRlbXBDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwibWFpblRlbXBDb250YWluZXJcIiB9KTtcbiAgICBjb25zdCBoaWdobG93Q29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzczogXCJoaWdobG93Q29udGFpbmVyXCIsXG4gICAgfSk7XG4gICAgY29uc3QgaWNvbkNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJpY29uQ29udGFpbmVyXCIgfSk7XG4gICAgY29uc3QgaWNvbiA9IGNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwge2NsYXNzOiBcIm1haW5XZWF0aGVySWNvblwiLCBcImFyaWEtbGFiZWxcIjogXCJXZWF0aGVyIEljb25cIn0pO1xuICAgIGljb24uc3JjID0gYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7b2JqZWN0Lmljb259QDR4LnBuZ2A7XG4gICAgaWNvbi5hbHQgPSBgJHtvYmplY3QuZGVzY3JpcHRpb259YDtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJtYWluRGVzY3JpcHRpb25cIiB9KTtcbiAgICAvLyAhISEgZG9uJ3Qga25vdyBpZiBJIHNob3VsZCBkaXNwbGF5IGljb24gaW1hZ2UgQkVMT1cgb3RoZXIgZGF0YSwgb3IgYXMgYmFja2Ryb3Agb2YgdGhlIG1haW5Db250YWluZXJcbiAgICAvLyBjb250ZW50XG4gICAgY2l0eS50ZXh0Q29udGVudCA9IG9iamVjdC5jaXR5O1xuICAgIGNvdW50cnkudGV4dENvbnRlbnQgPSBvYmplY3QuY291bnRyeTtcbiAgICB0ZW1wQ29udGFpbmVyLnRleHRDb250ZW50ID0gb2JqZWN0LnRlbXAuZmFyO1xuICAgIGhpZ2hsb3dDb250YWluZXIudGV4dENvbnRlbnQgPSBgSGlnaDogJHtvYmplY3QuaGlnaC5mYXJ9IC8gTG93OiAke29iamVjdC5sb3cuZmFyfWA7XG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBvYmplY3QuY29uZGl0aW9ucztcbiAgICAvLyBhcHBlbmQgaXQgYWxsIHRvZ2V0aGVyXG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChsb2NhdGlvbkNvbnRhaW5lcik7XG4gICAgbG9jYXRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoY2l0eSk7XG4gICAgbG9jYXRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoY291bnRyeSk7XG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZW1wQ29udGFpbmVyKTtcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGhpZ2hsb3dDb250YWluZXIpO1xuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoaWNvbkNvbnRhaW5lcik7XG4gICAgaWNvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChpY29uKTtcbiAgICBpY29uQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICAgIHJldHVybiBtYWluQ29udGFpbmVyO1xuICB9O1xuICByZXR1cm4geyBjcmVhdGUgfTtcbn0pKCk7XG5jb25zdCBmaWxsTWFpbkNvbnRhaW5lciA9IChvYmplY3QpID0+IHtcbiAgY29uc3QgbWFpbiA9IGRpc3BsYXlNYWluLmNyZWF0ZShvYmplY3QpO1xuICByZXR1cm4gbWFpbjtcbn07XG5leHBvcnQgZGVmYXVsdCBmaWxsTWFpbkNvbnRhaW5lcjtcbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGRhdGVGbiB9IGZyb20gXCIuL3V0aWxpdHlcIjtcblxuLy8gZnVuY3Rpb25zIHRvIHJ1biBvbiB0aGUgZGF0YSwgZ2l2ZSBvYmogcHJvcGVyIHZhbHVlc1xuLy8gY29uc3QgYWN0aW9ucyA9ICgoKSA9PiB7XG4vLyAgICAgY29uc3Qgc29ydERheXMgPSAoaW5wdXQpXG4vLyB9KSgpO1xuY29uc3QgcmV0dXJuRGF0ZSA9IChvYmplY3QsIGl0ZW0pID0+IHtcbiAgICBjb25zdCBkYXkgPSBpdGVtLmR0X3R4dDtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoZGF5KTtcbiAgICBkYXRlLnNldE1pbnV0ZXMoZGF0ZS5nZXRNaW51dGVzKCkgKyAob2JqZWN0LmNpdHkudGltZXpvbmUgLyA2MCkpO1xuICAgIHJldHVybiBkYXRlO1xufVxuY29uc3Qgc29ydERheXMgPSAob2JqZWN0KSA9PiB7XG4gICAgY29uc3QgZGF0ZSA9IHJldHVybkRhdGUob2JqZWN0LCBvYmplY3QubGlzdFswXSk7XG4gICAgY29uc3QgZGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xuICAgIGNvbnN0IGFycmF5ID0gb2JqZWN0Lmxpc3Q7XG4gICAgY29uc3QgY29sbGVjdGlvbiA9IHtcbiAgICAgICAgMDoge30sXG4gICAgICAgIDE6IHt9LFxuICAgICAgICAyOiB7fSxcbiAgICAgICAgMzoge30sXG4gICAgICAgIDQ6IHt9LFxuICAgICAgICA1OiB7fSxcbiAgICB9O1xuICAgIGFycmF5LmZvckVhY2goaW5kZXggPT4ge1xuICAgICAgICBjb25zdCBpbmRleERhdGUgPSByZXR1cm5EYXRlKG9iamVjdCwgaW5kZXgpO1xuICAgICAgICBjb25zdCBpID0gaW5kZXhEYXRlLmdldERhdGUoKSAtIGRkYXk7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gaW5kZXhEYXRlLmdldEhvdXJzKCk7XG4gICAgICAgIGNvbGxlY3Rpb25baV1bdmFsdWVdID0gKGluZGV4KTtcbiAgICB9KTtcbiAgICByZXR1cm4gY29sbGVjdGlvbjtcbn1cbmNvbnN0IGZpbmRIaWdoTG93ID0gKG9iamVjdCkgPT4ge1xuICAgIGNvbnN0IGFycmF5ID0gT2JqZWN0LmtleXMob2JqZWN0KTtcbiAgICBsZXQgaGlnaCA9IG9iamVjdFthcnJheVswXV0ubWFpbi50ZW1wO1xuICAgIGxldCBsb3cgPSBvYmplY3RbYXJyYXlbMF1dLm1haW4udGVtcDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IHRlbXAgPSBvYmplY3RbYXJyYXlbaV1dLm1haW4udGVtcDtcbiAgICAgICAgY29uc29sZS5sb2codGVtcCk7XG4gICAgICAgIGlmICh0ZW1wID4gaGlnaCkge1xuICAgICAgICAgICAgaGlnaCA9IHRlbXA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRlbXAgPCBsb3cpIHtcbiAgICAgICAgICAgIGxvdyA9IHRlbXA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFtoaWdoLCBsb3ddO1xufVxuXG5leHBvcnQgeyBzb3J0RGF5cywgZmluZEhpZ2hMb3cgfTsiLCJpbXBvcnQgeyBmcm9tVW5peFRpbWUgfSBmcm9tICdkYXRlLWZucyc7XG4vLyBET00gZnVuY3Rpb25zXG4vLyBoZWxwZXIgZnVuY3Rpb25zIHRvIGNyZWF0ZSBET00gZWxlbWVudCBhbmQgYWRkIGF0dHJpYnV0ZXNcbi8vIGlzIHRoZXJlIGEgbW9yZSBlZmZlY3RpdmUvZWZmaWNpZW50IHdheSB0byBkbyB0aGlzPyFcbmNvbnN0IHNldEF0dHJpYnV0ZXMgPSAoZWxlbWVudCwgYXR0cmlidXRlcykgPT4ge1xuICAgIE9iamVjdC5lbnRyaWVzKGF0dHJpYnV0ZXMpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcbiAgICB9KVxufVxuY29uc3QgY3JlYXRlRWxlbWVudCA9ICh0eXBlLCBhdHRyaWJ1dGVzKSA9PiB7XG4gICAgY29uc3QgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYCR7dHlwZX1gKTtcbiAgICBpZiAoYXR0cmlidXRlcyA9PSBudWxsKSByZXR1cm4gbmV3RWxlbWVudDtcbiAgICBzZXRBdHRyaWJ1dGVzKG5ld0VsZW1lbnQsIGF0dHJpYnV0ZXMpO1xuICAgIHJldHVybiBuZXdFbGVtZW50O1xufVxuLy8gdGltZSAtPiB0cmFuc2Zvcm0gdW5peCB0byBzdGFuZGFyZFxuY29uc3QgdGltZSA9IChpbnB1dCwgb2Zmc2V0KSA9PiB7XG4gICAgY29uc3QgbG9jYWxEYXRlID0gZnJvbVVuaXhUaW1lKGlucHV0KTtcbiAgICBjb25zdCBsb2NhbE9mZnNldCA9IGxvY2FsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuICAgIGxvY2FsRGF0ZS5zZXRNaW51dGVzKGxvY2FsRGF0ZS5nZXRNaW51dGVzKCkgKyBsb2NhbE9mZnNldCk7XG4gICAgbG9jYWxEYXRlLnNldE1pbnV0ZXMobG9jYWxEYXRlLmdldE1pbnV0ZXMoKSArIChvZmZzZXQgLyA2MCkpO1xuICAgIHJldHVybiBsb2NhbERhdGU7XG59XG5jb25zdCB0aW1lQ2hlY2sgPSAoaW5wdXQpID0+IHtcbiAgICBsZXQgY2hlY2tlZCA9IGlucHV0O1xuICAgIGlmIChpbnB1dCA8IDEwKSB7XG4gICAgICAgIGNoZWNrZWQgPSBgMCR7aW5wdXR9YDtcbiAgICB9XG4gICAgcmV0dXJuIGNoZWNrZWQ7XG59XG5jb25zdCBob3VyTWluID0gKGlucHV0LCBvZmZzZXQpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IHRpbWUoaW5wdXQsIG9mZnNldCk7XG4gICAgcmV0dXJuIGAke3ZhbHVlLmdldEhvdXJzKCl9OiR7dmFsdWUuZ2V0TWludXRlcygpfWA7XG59XG5jb25zdCBkYXRlRm4gPSAoaW5wdXQsIG9mZnNldCkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gdGltZShpbnB1dCwgb2Zmc2V0KTtcbiAgICByZXR1cm4gdmFsdWUuZ2V0RGF0ZSgpO1xufVxuLy8gdGVtcCAtPiBjb252ZXJ0IEYgdG8gQ1xuLy8gcGxhbm5pbmcgdG8gaGF2ZSBib3RoIGluIGFuIG9iamVjdFxuY29uc3QgdGVtcEZuID0gKGlucHV0KSA9PiB7XG4gICAgY29uc3QgdGVtcE9iaiA9IHtcbiAgICAgICAgZmFyOiBNYXRoLnJvdW5kKE51bWJlcihpbnB1dCkpLFxuICAgICAgICBjZWw6IE1hdGgucm91bmQoKE51bWJlcihpbnB1dCkgLSAzMikgKiAoNS85KSksXG4gICAgfVxuICAgIHJldHVybiB0ZW1wT2JqO1xufVxuY29uc3QgY2hlY2tUZW1wID0gKGN1cnJlbnQsIGhpZ2gsIGxvdykgPT4ge1xuICAgIGxldCBoaSA9IGhpZ2g7XG4gICAgbGV0IGxvID0gbG93O1xuICAgIGlmIChjdXJyZW50ID4gaGlnaCkge1xuICAgICAgICBoaSA9IGN1cnJlbnQ7XG4gICAgfVxuICAgIGlmIChjdXJyZW50IDwgbG93KSB7XG4gICAgICAgIGxvID0gbG93O1xuICAgIH1cbiAgICByZXR1cm4gW2hpLCBsb107XG59XG5leHBvcnQgeyBjcmVhdGVFbGVtZW50LCB0ZW1wRm4sIGNoZWNrVGVtcCwgaG91ck1pbiwgZGF0ZUZuLCB0aW1lLCB0aW1lQ2hlY2sgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgY2hlY2tUZW1wLCBjcmVhdGVFbGVtZW50LCBob3VyTWluLCB0ZW1wRm4gfSBmcm9tIFwiLi91dGlsaXR5XCI7XG5pbXBvcnQgeyBvYmosIGZpbGxEZXRhaWxDb250YWluZXIgfSBmcm9tIFwiLi9kaXNwbGF5RXh0cmFcIjtcbmltcG9ydCBmaWxsTWFpbkNvbnRhaW5lciBmcm9tIFwiLi9kaXNwbGF5TWFpblwiO1xuaW1wb3J0IHsgc29ydERheXMsIGZpbmRIaWdoTG93IH0gZnJvbSBcIi4vb2JqRm5cIjtcbmltcG9ydCBmaWxsRm9yZWNhc3RDb250YWluZXIgZnJvbSBcIi4vZGlzcGxheUZvcmVjYXN0XCI7XG5cbi8vIGdldCBtYWluIGJvZHkgaW4gRE9NXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5jb25zdCBtYWluID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcIm1haW5cIiB9KTtcbmJvZHkuYXBwZW5kQ2hpbGQobWFpbik7XG4vLyBtYWtlIGlucHV0IGZpZWxkIGFuZCBzdWJtaXQgYnV0dG9uXG5jb25zdCBpbnB1dENvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJpbnB1dENvbnRhaW5lclwiIH0pO1xuY29uc3QgaW5wdXRGaWVsZCA9IGNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7XG4gIGNsYXNzOiBcImlucHV0RmllbGRcIixcbiAgaWQ6IFwiaW5wdXRGaWVsZFwiLFxuICBcImFyaWEtbGFiZWxcIjogXCJJbnB1dCBMb2NhdGlvblwiLFxuICB0aXRsZTogXCJGb3JtYXQgYXM6ICdDaXR5JywgJ0NpdHksIFN0YXRlJywgT1IgJ0NpdHksIENvdW50cnknXCIsXG4gIFwicGxhY2Vob2xkZXJcIjogXCJTZWFyY2ggbG9jYXRpb24uLi5cIixcbn0pO1xuY29uc3Qgc3VibWl0QnRuID0gY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7XG4gIGNsYXNzOiBcInN1Ym1pdEJ0blwiLFxuICBcImFyaWEtbGFiZWxcIjogXCJTdWJtaXRcIixcbn0pO1xuc3VibWl0QnRuLnRleHRDb250ZW50ID0gXCJTZWFyY2hcIjtcbmlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0RmllbGQpO1xuaW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoc3VibWl0QnRuKTtcbm1haW4uYXBwZW5kQ2hpbGQoaW5wdXRDb250YWluZXIpO1xuLy8gc3VibWl0IGxpc3RlbmVyIGZ1bmN0aW9uXG5jb25zdCBzdWJtaXRGbiA9ICgpID0+IHtcbiAgY29uc3QgdXNlcklucHV0ID0gaW5wdXRGaWVsZC52YWx1ZTtcbiAgLy8gbmVlZHMgZWRpdFxuICBhcGlBY3Rpb24ubWFpbkZuKHVzZXJJbnB1dCk7XG4gIGlucHV0RmllbGQudmFsdWUgPSBcIlwiO1xufTtcbnN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBzdWJtaXRGbigpO1xufSk7XG4vL1xuY29uc3QgY2xlYXJNYWluID0gKCkgPT4ge1xuICBjb25zb2xlLmxvZyhtYWluLmNoaWxkcmVuLmxlbmd0aCk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgbWFpbi5jaGlsZHJlbi5sZW5ndGg7IGkgKz0gMCkge1xuICAgIGNvbnNvbGUubG9nKG1haW4uY2hpbGRyZW5bMF0ubmV4dEVsZW1lbnRTaWJsaW5nKTtcbiAgICBjbGVhckFsbChtYWluLmNoaWxkcmVuWzBdLm5leHRFbGVtZW50U2libGluZyk7XG4gICAgbWFpbi5yZW1vdmVDaGlsZChtYWluLmNoaWxkcmVuWzBdLm5leHRFbGVtZW50U2libGluZyk7XG4gIH1cbn1cbmNvbnN0IGNsZWFyQWxsID0gKGlucHV0KSA9PiB7XG4gIHdoaWxlIChpbnB1dC5maXJzdENoaWxkKSB7XG4gICAgaW5wdXQucmVtb3ZlQ2hpbGQoaW5wdXQuZmlyc3RDaGlsZCk7XG4gIH1cbn1cbi8vIGZpZ3VyZSBvdXQgaG93IHRvIGZldGNoIHgzOiBjdXJyZW50LCBmb3JlY2FzdCwgYW5kIGFpcnF1YWxpdHlcbi8vIGVhc2llciB0byBrZWVwIHRoZW0gc2VwZXJhdGU/XG5jb25zdCBhcGlBY3Rpb24gPSAoKCkgPT4ge1xuICBjb25zdCBjdXJyZW50VmFsdWUgPSBcIjkxN2ExN2Y3N2E2MGFlOTZlZTA4MTIxMmU5NGUzZjc1XCI7XG4gIGNvbnN0IGdldEZvcmVjYXN0ID0gYXN5bmMgKGxvY2F0aW9uKSA9PiB7XG4gICAgY29uc3Qgc2VhcmNoTG9jYXRpb24gPSBsb2NhdGlvbjtcbiAgICBjb25zdCBmb3JlY2FzdEZldGNoID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P3E9JHtzZWFyY2hMb2NhdGlvbn0mYXBwaWQ9JHtjdXJyZW50VmFsdWV9JnVuaXRzPWltcGVyaWFsYCxcbiAgICAgIHtcbiAgICAgICAgbW9kZTogXCJjb3JzXCIsXG4gICAgICB9XG4gICAgKTtcbiAgICBjb25zdCBmb3JlY2FzdERhdGEgPSBhd2FpdCBmb3JlY2FzdEZldGNoLmpzb24oKTtcbiAgICByZXR1cm4gZm9yZWNhc3REYXRhO1xuICB9O1xuICBjb25zdCBnZXRDdXJyZW50ID0gYXN5bmMgKGxvY2F0aW9uKSA9PiB7XG4gICAgLy8gISEhIG5lZWQgdG8gY2hlY2sgYXBpIGNhbGwgLSBhY2N1cmF0ZSBmb3IgY3VycmVudCBjb25kaXRpb25zP1xuICAgIGNvbnN0IGN1cnJlbnRGZXRjaCA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtsb2NhdGlvbn0mYXBwaWQ9JHtjdXJyZW50VmFsdWV9JnVuaXRzPWltcGVyaWFsYCxcbiAgICAgIHtcbiAgICAgICAgbW9kZTogXCJjb3JzXCIsXG4gICAgICB9XG4gICAgKTtcbiAgICBjb25zdCBjdXJyZW50RGF0YSA9IGF3YWl0IGN1cnJlbnRGZXRjaC5qc29uKCk7XG4gICAgcmV0dXJuIGN1cnJlbnREYXRhO1xuICB9O1xuICBjb25zdCBnZXRBaXJRID0gYXN5bmMgKGxhdCwgbG9uKSA9PiB7XG4gICAgY29uc3QgYWlyRmV0Y2ggPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9haXJfcG9sbHV0aW9uP2xhdD0ke2xhdH0mbG9uPSR7bG9ufSZhcHBpZD0ke2N1cnJlbnRWYWx1ZX1gLFxuICAgICAge1xuICAgICAgICBtb2RlOiBcImNvcnNcIixcbiAgICAgIH1cbiAgICApO1xuICAgIGNvbnN0IGFpckRhdGEgPSBhd2FpdCBhaXJGZXRjaC5qc29uKCk7XG4gICAgcmV0dXJuIGFpckRhdGE7XG4gIH07XG4gIGNvbnN0IGVycm9yQ2hlY2sgPSAoaW5wdXQpID0+IHtcbiAgICBsZXQgc2VuZCA9IFwiXCI7XG4gICAgaWYgKGlucHV0LmNvZCAhPT0gXCIyMDBcIikge1xuICAgICAgc2VuZCA9IGZhbHNlO1xuICAgICAgZGVjaXBoZXJFcnJvcihpbnB1dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlbmQgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gc2VuZDtcbiAgfVxuICBjb25zdCBkZWNpcGhlckVycm9yID0gKGlucHV0KSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2LmlucHV0Q29udGFpbmVyJyk7XG4gICAgaWYgKGlucHV0LmNvZCA9PT0gXCI0MDRcIikge1xuICAgICAgY29uc3QgZXJyb3JEaXNwbGF5ID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiBcImVycm9yRGlzcGxheVwifSk7XG4gICAgICBlcnJvckRpc3BsYXkudGV4dENvbnRlbnQgPSBcIkxvY2F0aW9uIG5vdCBmb3VuZCFcIjtcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlcnJvckRpc3BsYXkpO1xuICAgIH1cbiAgfVxuICAvLyBnZXQgYWxsIHRoZSBkYXRhcyAtIHRoaW5raW5nIGFuIGFycmF5IHdpdGggMyBvYmo6IFt7Y3VycmVudH0sIHtmb3JlY2FzdH0sIHthaXJxfV1cbiAgLy9cbiAgY29uc3QgZGVjbGFyZURhdGEgPSAoW2ZvcmVjYXN0LCBjdXJyZW50LCBhaXJdLCB0ZW1wQXJyYXkpID0+IHtcbiAgICAvLyAhISEgbmVlZCB0byBjb25maXJtIGN1cnJlbnQgZGF0YSwgZmluZCBhaXJxLCBhbmQgdGhpbmsgdGhydSB3aGF0IGVsc2Ugc2hvdWxkIGJlIGluY2x1ZGVkXG4gICAgLy8gY2l0eSwgY291bnRyeSwgY3VycmVudCB0ZW1wLCBoaWdoLCBsb3csIGN1cnJlbnQgY29uZGl0aW9ucyAmIGRlc2NycnB0aW9uLCBjdXJyZW50IHdlYXRoZXIgaWNvbj8sXG4gICAgLy8gdGhlbiBzdHVmZiBmb3IgZGV0YWlsQ29udGFpbmVyXG4gICAgLy8gISEhIHVzZSBmIHRvIGRlc3RydWN0dXJlPyBpcyB0aGF0IHdhcyBlc2xpbnQgaXMgZ29pbmcgZm9yP1xuICAgIGNvbnNvbGUubG9nKFtmb3JlY2FzdCwgY3VycmVudCwgYWlyXSk7XG4gICAgY29uc3QgY2l0eSA9IGN1cnJlbnQubmFtZTtcbiAgICBjb25zdCBncHMgPSBgJHtjdXJyZW50LmNvb3JkLmxhdH0sICR7Y3VycmVudC5jb29yZC5sb259YDtcbiAgICBjb25zdCB0ZW1wID0gdGVtcEZuKGN1cnJlbnQubWFpbi50ZW1wKTtcbiAgICBjb25zdCBoaWdoTG93ID0gY2hlY2tUZW1wKHRlbXAsIHRlbXBBcnJheVswXSwgdGVtcEFycmF5WzFdKTtcbiAgICBjb25zdCBoaWdoID0gdGVtcEZuKGhpZ2hMb3dbMF0pO1xuICAgIGNvbnN0IGxvdyA9IHRlbXBGbihoaWdoTG93WzFdKTtcbiAgICBjb25zdCBjb25kaXRpb25zID0gY3VycmVudC53ZWF0aGVyWzBdLm1haW47XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBjdXJyZW50LndlYXRoZXJbMF0uZGVzY3JpcHRpb247XG4gICAgY29uc3QgaWNvbiA9IGN1cnJlbnQud2VhdGhlclswXS5pY29uO1xuICAgIGNvbnN0IHdpbmQgPSBmb3JlY2FzdC5saXN0WzBdLndpbmQ7XG4gICAgY29uc3QgcG9wID0gZm9yZWNhc3QubGlzdFswXS5wb3A7XG4gICAgY29uc3QgdGltZXpvbmUgPSBmb3JlY2FzdC5jaXR5LnRpbWV6b25lO1xuICAgIGNvbnN0IHN1bnJpc2UgPSBob3VyTWluKGZvcmVjYXN0LmNpdHkuc3VucmlzZSwgdGltZXpvbmUpO1xuICAgIGNvbnN0IHN1bnNldCA9IGhvdXJNaW4oZm9yZWNhc3QuY2l0eS5zdW5zZXQsIHRpbWV6b25lKTtcbiAgICBjb25zdCBodW1pZGl0eSA9IGZvcmVjYXN0Lmxpc3RbMF0ubWFpbi5odW1pZGl0eTtcbiAgICBjb25zdCBmZWVsc0xpa2UgPSB0ZW1wRm4oZm9yZWNhc3QubGlzdFswXS5tYWluLmZlZWxzX2xpa2UpO1xuICAgIGNvbnN0IHZpc2liaWxpdHkgPSBmb3JlY2FzdC5saXN0WzBdLnZpc2liaWxpdHk7XG4gICAgY29uc3QgcHJlY2lwID0gZm9yZWNhc3QubGlzdFswXS5yYWluO1xuICAgIGNvbnN0IGFpclF1YWxpdHkgPSBhaXIubGlzdFswXS5tYWluLmFxaTtcbiAgICBjb25zdCBwcmVzc3VyZSA9IGZvcmVjYXN0Lmxpc3RbMF0ubWFpbi5wcmVzc3VyZTtcbiAgICByZXR1cm4ge1xuICAgICAgY2l0eSxcbiAgICAgIGdwcyxcbiAgICAgIHRlbXAsXG4gICAgICBoaWdoLFxuICAgICAgbG93LFxuICAgICAgY29uZGl0aW9ucyxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgaWNvbixcbiAgICAgIHdpbmQsXG4gICAgICBwb3AsXG4gICAgICBzdW5yaXNlLFxuICAgICAgc3Vuc2V0LFxuICAgICAgdGltZXpvbmUsXG4gICAgICBodW1pZGl0eSxcbiAgICAgIGZlZWxzTGlrZSxcbiAgICAgIHZpc2liaWxpdHksXG4gICAgICBwcmVjaXAsXG4gICAgICBhaXJRdWFsaXR5LFxuICAgICAgcHJlc3N1cmUsXG4gICAgfTtcbiAgfTtcblxuICBjb25zdCBtYWluRm4gPSBhc3luYyAobG9jYXRpb24pID0+IHtcbiAgICB0cnkge1xuICAgIGNvbnN0IGZvcmVjYXN0VyA9IGF3YWl0IGdldEZvcmVjYXN0KGxvY2F0aW9uKTtcbiAgICBpZiAoZXJyb3JDaGVjayhmb3JlY2FzdFcpKSB7XG4gICAgICBjb25zdCBkYXlzRiA9IHNvcnREYXlzKGZvcmVjYXN0Vyk7XG4gICAgICBjb25zdCBoaWdoTG93ID0gZmluZEhpZ2hMb3coZGF5c0ZbMF0pO1xuICAgICAgY29uc3QgY3VycmVudFcgPSBhd2FpdCBnZXRDdXJyZW50KGxvY2F0aW9uKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGN1cnJlbnRXKTtcbiAgICAgIGNvbnN0IGFpclEgPSBhd2FpdCBnZXRBaXJRKGZvcmVjYXN0Vy5jaXR5LmNvb3JkLmxhdCwgZm9yZWNhc3RXLmNpdHkuY29vcmQubG9uKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGFpclEpO1xuICAgICAgY29uc3QgY29sbGVjdGl2ZSA9IFByb21pc2UuYWxsKFtmb3JlY2FzdFcsIGN1cnJlbnRXLCBhaXJRXSkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBjb25zdCBvYmplY3QgPSBkZWNsYXJlRGF0YShkYXRhLCBoaWdoTG93KTtcbiAgICAgICAgY29uc29sZS5sb2cob2JqZWN0KTtcbiAgICAgICAgY2xlYXJNYWluKCk7XG4gICAgICAgIGNvbnN0IGRldGFpbCA9IGZpbGxEZXRhaWxDb250YWluZXIob2JqZWN0KTtcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChkZXRhaWwpO1xuICAgICAgICBjb25zdCBjdXJyZW50ID0gZmlsbE1haW5Db250YWluZXIob2JqZWN0KTtcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChjdXJyZW50KTtcbiAgICAgICAgY29uc3QgZm9yZWNhc3QgPSBmaWxsRm9yZWNhc3RDb250YWluZXIoZGF5c0YsIG9iamVjdCk7XG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoZm9yZWNhc3QpO1xuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coYEFwb2xvZ2llcyEgVGhlIHNpdGUgZXhwZXJpZW5jZWQgYW4gZXJyb3I6IFwiJHtmb3JlY2FzdFcubWVzc2FnZX1cIi5gKTtcbiAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGFsZXJ0KCdBcG9sb2dpZXMhIFRoZSBzaXRlIGV4cGVyaWVuY2VkIGFuIGVycm9yLCBjaGVjayB0aGUgbG9nIGZvciBkZXRhaWxzLicpO1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbiAgICAvLyBjb25zdCBleHRyYSA9IGV4dHJhRmFjdG9yeShmb3JEaXNwbGF5KTtcbiAgICAvLyBtYWluLmFwcGVuZENoaWxkKGV4dHJhKTtcbiAgfTtcbiAgLy8gc3RpbGwgbmVlZCB0byBzb3J0IG91dCBob3cgdG8gcGFyc2UgZGF0YSBmb3IgZm9yZWNhc3Qgc2VjdGlvblxuICAvLyBmb3IgZGVza3RvcCBkaXNwbGF5OiBhIGNhcmQgZm9yIGVhY2ggZGF5LCB3aGljaCBoYXMgdGhlIHZhbHVlcyAoM2ggaW5jcmVtZW50cykgaW4gbGlzdCBzdHlsZVxuICAvLyB0aW1lLCB0ZW1wLCBjb25kaXRpb25zLCBwb3A/IChpZiBpdCdzIGdyZWF0ZXIgdGhhbiAwKVxuICAvLyBzaG93IGNhcmRzIGhvcml6b250YWxseVxuICAvLyBmb3IgbW9iaWxlIGRpc3BsYXk6IHNhbWUgY2FyZHMsIGJ1dCBzaG93IHZlcnRpY2FsbHlcbiAgcmV0dXJuIHsgbWFpbkZuIH07XG59KSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
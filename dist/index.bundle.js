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
const detailContainer = (0,_utility__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {"class": "detailContainer"});
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
}


/***/ }),

/***/ "./src/displayMain.js":
/*!****************************!*\
  !*** ./src/displayMain.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ }),

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





// get main body in DOM
const body = document.querySelector("body");
const main = (0,_utility__WEBPACK_IMPORTED_MODULE_1__["default"])("div", { class: "main" });
body.appendChild(main);
// make input field and submit button
const inputContainer = (0,_utility__WEBPACK_IMPORTED_MODULE_1__["default"])('div', {"class": "inputContainer"});
const inputField = (0,_utility__WEBPACK_IMPORTED_MODULE_1__["default"])("input", {
  class: "inputField",
  id: "inputField",
});
const submitBtn = (0,_utility__WEBPACK_IMPORTED_MODULE_1__["default"])("button", {
  class: "submitBtn",
  "aria-label": "Submit",
});
submitBtn.textContent = "Submit";
inputContainer.appendChild(inputField);
inputContainer.appendChild(submitBtn);
main.appendChild(inputContainer);
// submit listener function
const submitFn = () => {
  // const userInput = inputField.value;
  // needs edit
  apiAction.mainFn(_displayExtra__WEBPACK_IMPORTED_MODULE_2__.obj);
  inputField.value = "";
};
submitBtn.addEventListener("click", () => {
  submitFn();
});
//
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
      `https://api.openweathermap.org/data/2.5/current?q=${location}&appid=${currentValue}&units=imperial`,
      {
        mode: "cors",
      }
    );
    const currentData = await currentFetch.json();
    return currentData;
  };
  const getAirQ = async (location) => {
    const airFetch = await fetch( `https://api.openweathermap.org/data/2.5/current?q=${location}&appid=${currentValue}&units=imperial`,
    {
      mode: "cors",
    }
    );
    const airData = await airFetch.json();
    return airData;
  }
  // get all the datas - thinking an array with 3 obj: [{current}, {forecast}, {airq}]
  // 
  const declareData = (current, forecast, air) => {
    // !!! need to confirm current data, find airq, and think thru what else should be included
    // city, country, current temp, high, low, current conditions & descrrption, current weather icon?,
    // then stuff for detailContainer
    // !!! use f to destructure? is that was eslint is going for?
    const f = forecast.list[0];
    const city = current.city.name;
    const country = current.city.country;
    const temp = current.list[0].main.temp;
    const high = "";
    const low = "";
    const conditions = forecast.list[0].weather[0].main;
    const description = forecast.list[0].weather[0].description;
    const wind = forecast.list[0].wind;
    const pop = forecast.list[0].pop;
    const sunrise = forecast.city.sunrise;
    const sunset = forecast.city.sunset;
    const humidity = forecast.list[0].main.humidity;
    const feelsLike = forecast.list[0].main.feels_like;
    const visibility = forecast.list[0].visibility;
    const precip = forecast.list[0].rain;
    const airQuality = "need other api";
    const pressure = forecast.list[0].main.pressure;
    return {city, country, temp, high, low, conditions, description, wind, pop, sunrise, sunset, humidity, feelsLike, visibility, precip, airQuality, pressure};
  };

  const mainFn = async (location) => {
    // const data = await getWeatherData(location);
    // console.log(data);
    // const forDisplay = (declareData(data));
    // const extra = extraFactory(forDisplay);
    // console.log(forDisplay);
    // main.appendChild(extra);
    // !!! need to remove, just for work while offline
    const detail = (0,_displayExtra__WEBPACK_IMPORTED_MODULE_2__.fillDetailContainer)(_displayExtra__WEBPACK_IMPORTED_MODULE_2__.obj);
    main.appendChild(detail);
    const current = (0,_displayMain__WEBPACK_IMPORTED_MODULE_3__.fillMainContainer)(_displayExtra__WEBPACK_IMPORTED_MODULE_2__.obj);
    main.appendChild(current);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RkFBdUYsU0FBUyxTQUFTLGFBQWE7QUFDdEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQsUUFBUSxHQUFHLFNBQVMsR0FBRyxLQUFLO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGtFQUFtQixDQUFDLDhDQUFHO0FBQzFDO0FBQ0Esb0JBQW9CLCtEQUFpQixDQUFDLDhDQUFHO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvZGlzcGxheUV4dHJhLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvZGlzcGxheU1haW4uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy91dGlsaXR5LmpzIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG4ubWFpbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHNsYXRlYmx1ZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA1ZnI7XFxufS5pbnB1dENvbnRhaW5lciB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ubWFpbkNvbnRhaW5lciB7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxufVxcbi5kZXRhaWxDb250YWluZXIge1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsIDFmcik7XFxufVxcbi5kZXRhaWxDb250YWluZXIgPiBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFVBQVU7SUFDVixTQUFTO0FBQ2I7QUFDQTtJQUNJLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLDJCQUEyQjtBQUMvQixDQUFDO0lBQ0csZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsa0NBQWtDO0FBQ3RDO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuLm1haW4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzbGF0ZWJsdWU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNWZyO1xcbn0uaW5wdXRDb250YWluZXIge1xcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLm1haW5Db250YWluZXIge1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbn1cXG4uZGV0YWlsQ29udGFpbmVyIHtcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LCAxZnIpO1xcbn1cXG4uZGV0YWlsQ29udGFpbmVyID4gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSBcIi4vdXRpbGl0eVwiO1xuLy8gY3JlYXRlIGRpc3BsYXlcbmNvbnN0IGRldGFpbENvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcImNsYXNzXCI6IFwiZGV0YWlsQ29udGFpbmVyXCJ9KTtcbi8vIGNvbnN0IGRpc3BsYXlTaW5nbGUgPSAoaW5wdXQpID0+IHtcbi8vICAgICBjb25zdCBzaW5nbGUgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7XCJjbGFzc1wiOiBgJHtpbnB1dH1gfSk7XG4vLyAgICAgc2luZ2xlLnRleHRDb250ZW50ID0gYCR7aW5wdXR9YDtcbi8vICAgICAhISEgbWlnaHQgbmVlZCB0d28gbGluZXMgb2YgY29udGVudCAtIG9uZSBmb3Iga2V5LCBvbmUgZm9yIHByb3BlcnR5XG4vLyAgICAgcmV0dXJuIHNpbmdsZTtcbi8vIH1cbi8vIGNvbnN0IGV4dHJhRmFjdG9yeSA9IChpbnB1dCkgPT4ge1xuLy8gICAgIGNvbnNvbGUubG9nKGlucHV0LmNpdHkpO1xuLy8gICAgIGNvbnN0IGFycmF5ID0gT2JqZWN0LmtleXMoaW5wdXQpO1xuLy8gICAgIGFycmF5LmZvckVhY2goaW5kZXggPT4ge1xuLy8gICAgICAgICBjb25zb2xlLmxvZyhgJHtpbmRleH0gaW4gJHtpbnB1dFtpbmRleF19YCk7XG4vLyAgICAgICAgIGRldGFpbENvbnRhaW5lci5hcHBlbmRDaGlsZChkaXNwbGF5U2luZ2xlKGlucHV0W2luZGV4XSkpO1xuLy8gICAgIH0pXG4vLyAgICAgcmV0dXJuIGV4dHJhRGl2O1xuICAgIC8vIG5lZWQgaW5wdXQgdG8gYmUgYW4gYXJyYXkgb2YgdGhlIG9iamVjdCdzIHByb3BlcnRpZXNcbi8vIH1cbmNvbnN0IGRldGFpbCA9ICgoKSA9PiB7XG4gICAgY29uc3QgaGVscGVyID0gKGRlc2NyaXB0aW9uLCB2YWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7XCJjbGFzc1wiOiBcImRldGFpbERpdlwifSk7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge1wiY2xhc3NcIjogXCJkZXRhaWxMYWJlbFwifSk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7XCJjbGFzc1wiOiBcImRldGFpbERhdGFcIn0pO1xuICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9IGAke2Rlc2NyaXB0aW9ufWA7XG4gICAgICAgIGRhdGEudGV4dENvbnRlbnQgPSBgJHt2YWx1ZX1gO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0YSk7XG4gICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfVxuICAgIGNvbnN0IHdpbmRGbiA9ICh2YWx1ZSkgPT4ge1xuICAgICAgICAvLyAhISEgbWlnaHQgbmVlZCBhIGZldyB0aGluZ3MgLSBvbmUgZm9yIHdpbmQgc3BlZWQsIGFub3RoZXIgZm9yIGRpcmVjdGlvblxuICAgICAgICBjb25zdCB3aW5kID0gaGVscGVyKFwiV0lORFwiLCBgJHt2YWx1ZX1rbS9oYCk7XG4gICAgICAgIC8vIGNoZWNrIHVuaXRzXG4gICAgICAgIHJldHVybiB3aW5kO1xuICAgIH1cbiAgICBjb25zdCB2aXNGbiA9ICh2YWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCB2aXMgPSBoZWxwZXIoJ1ZJU0lCSUxJVFknLCBgJHt2YWx1ZSAvIDEwMDB9IGttYCk7XG4gICAgICAgIHJldHVybiB2aXM7XG4gICAgfVxuICAgIGNvbnN0IGh1bWlkRm4gPSAodmFsdWUpID0+IHtcbiAgICAgICAgY29uc3QgaHVtaWQgPSBoZWxwZXIoJ0hVTUlESVRZJywgYCR7dmFsdWV9JWApO1xuICAgICAgICByZXR1cm4gaHVtaWQ7XG4gICAgfVxuICAgIGNvbnN0IGZlZWxzRm4gPSAodmFsdWUpID0+IHtcbiAgICAgICAgY29uc3QgZmVlbHMgPSBoZWxwZXIoJ0ZFRUxTIExJS0UnLCBgJHt2YWx1ZX1gKTtcbiAgICAgICAgcmV0dXJuIGZlZWxzO1xuICAgIH1cbiAgICBjb25zdCBwb3BGbiA9ICh2YWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCBwb3AgPSBoZWxwZXIoJ1BSRUNJUElUQVRJT04nLCBgJHt2YWx1ZSAqIDEwMH0lYCk7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge1wiY2xhc3NcIjogXCJwb3BMYWJlbFwifSk7XG4gICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gXCJDSEFOQ0UgT0ZcIjtcbiAgICAgICAgLy8gISEhIG5vdCBzdXJlIGlmIHRoaXMgd29ya3NcbiAgICAgICAgcG9wLmluc2VydEJlZm9yZShsYWJlbCwgcG9wLmZpcnN0Q2hpbGQpO1xuICAgICAgICByZXR1cm4gcG9wO1xuICAgIH1cbiAgICBjb25zdCBwcmVjaXBGbiA9ICh2YWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCBwcmVjaXAgPSBoZWxwZXIoJ0FDQ1VNVUxBVElPTicsIGAke3ZhbHVlfW1tIGluIGxhc3QgM2hgKTtcbiAgICAgICAgY29uc3QgbGFiZWwgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7XCJjbGFzc1wiOiBcInByZWNpcExhYmVsXCJ9KTtcbiAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSBcIlBSRUNJUElUQVRJT05cIjtcbiAgICAgICAgLy8gISEhIG5vdCBzdXJlIGlmIHRoaXMgd29ya3NcbiAgICAgICAgcHJlY2lwLmluc2VydEJlZm9yZShsYWJlbCwgcHJlY2lwLmZpcnN0Q2hpbGQpO1xuICAgICAgICByZXR1cm4gcHJlY2lwO1xuICAgIH1cbiAgICBjb25zdCBhaXJGbiA9ICh2YWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCBhaXIgPSBoZWxwZXIoJ0FJUiBRVUFMSVRZJywgYCR7dmFsdWV9YCk7XG4gICAgICAgIC8vICEhISBtaWdodCBuZWVkIHVuaXRzIGNsYXJpZmllciAoc2NvcmUgb3V0IG9mIDEwMD8pXG4gICAgICAgIHJldHVybiBhaXI7XG4gICAgfVxuICAgIGNvbnN0IHByZXNzdXJlRm4gPSAodmFsdWUpID0+IHtcbiAgICAgICAgY29uc3QgcHJlc3N1cmUgPSBoZWxwZXIoJ1BSRVNTVVJFJywgYCR7dmFsdWV9YCk7XG4gICAgICAgIC8vICEhISBuZWVkIHVuaXRzXG4gICAgICAgIHJldHVybiBwcmVzc3VyZTtcbiAgICB9XG4gICAgY29uc3Qgc3VucmlzZUZuID0gKHZhbHVlKSA9PiB7XG4gICAgICAgIC8vICEhISBuZWVkIGZuIHRvIGNvbnZlcnQgdmFsdWUgdG8gdGltZSAoYWxzbyBjaGVjayBmb3IgbG9jYWwgdGltZS4uKVxuICAgICAgICBjb25zdCB0aW1lID0gdmFsdWU7XG4gICAgICAgIGNvbnN0IHJpc2UgPSBoZWxwZXIoJ1NVTlJJU0UnLCBgJHt0aW1lfWApO1xuICAgICAgICByZXR1cm4gcmlzZTtcbiAgICB9XG4gICAgY29uc3Qgc3Vuc2V0Rm4gPSAodmFsdWUpID0+IHtcbiAgICAgICAgLy8gISEhIG5lZWQgdG8gcnVuIHZhbHVlIGluIGEgZm4sIGxpa2UgYWJvdmVcbiAgICAgICAgY29uc3QgdGltZSA9IHZhbHVlO1xuICAgICAgICBjb25zdCBzZXQgPSBoZWxwZXIoJ1NVTlNFVCcsIGAke3RpbWV9YCk7XG4gICAgICAgIHJldHVybiBzZXQ7XG4gICAgfVxuICAgIHJldHVybiB7IHdpbmRGbiwgdmlzRm4sIGh1bWlkRm4sIGZlZWxzRm4sIHBvcEZuLCBwcmVjaXBGbiwgYWlyRm4sIHByZXNzdXJlRm4sIHN1bnJpc2VGbiwgc3Vuc2V0Rm4gfVxufSkoKTtcbmNvbnN0IGZpbGxEZXRhaWxDb250YWluZXIgPSAoaW5wdXQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhpbnB1dCk7XG4gICAgZGV0YWlsQ29udGFpbmVyLmFwcGVuZENoaWxkKGRldGFpbC53aW5kRm4oaW5wdXQud2luZCkpO1xuICAgIGRldGFpbENvbnRhaW5lci5hcHBlbmRDaGlsZChkZXRhaWwudmlzRm4oaW5wdXQudmlzaWJpbGl0eSkpO1xuICAgIGRldGFpbENvbnRhaW5lci5hcHBlbmRDaGlsZChkZXRhaWwuZmVlbHNGbihpbnB1dC5mZWVsc0xpa2UpKTtcbiAgICBkZXRhaWxDb250YWluZXIuYXBwZW5kQ2hpbGQoZGV0YWlsLmh1bWlkRm4oaW5wdXQuaHVtaWRpdHkpKTtcbiAgICBkZXRhaWxDb250YWluZXIuYXBwZW5kQ2hpbGQoZGV0YWlsLnBvcEZuKGlucHV0LnBvcCkpO1xuICAgIGRldGFpbENvbnRhaW5lci5hcHBlbmRDaGlsZChkZXRhaWwucHJlY2lwRm4oaW5wdXQucHJlY2lwKSk7XG4gICAgZGV0YWlsQ29udGFpbmVyLmFwcGVuZENoaWxkKGRldGFpbC5haXJGbihpbnB1dC5haXJRdWFsaXR5KSk7XG4gICAgZGV0YWlsQ29udGFpbmVyLmFwcGVuZENoaWxkKGRldGFpbC5wcmVzc3VyZUZuKGlucHV0LnByZXNzdXJlKSk7XG4gICAgZGV0YWlsQ29udGFpbmVyLmFwcGVuZENoaWxkKGRldGFpbC5zdW5yaXNlRm4oaW5wdXQuc3VucmlzZSkpO1xuICAgIGRldGFpbENvbnRhaW5lci5hcHBlbmRDaGlsZChkZXRhaWwuc3Vuc2V0Rm4oaW5wdXQuc3Vuc2V0KSk7XG4gICAgcmV0dXJuIGRldGFpbENvbnRhaW5lcjtcbn1cbi8vIGdvYWw6IGRpc3BsYXkgb2YgZXh0cmEgZGF0YSAoYm94KVxuLy8gc3VucmlzZSwgc3Vuc2V0LCBmZWVscyBsaWtlLCBwb3AsIHByZWNpcCBhY2N1bSwgcHJlc3N1cmUsIGFpcnEsIHZpcywgd2luZCwgaHVtaWRpdHkgXG5jb25zdCBvYmogPSB7XG4gICAgY2l0eTogXCJEZW52ZXJcIixcbiAgICBjb3VudHJ5OiBcIlVTXCIsXG4gICAgdGVtcDogXCI4MlwiLFxuICAgIGhpZ2hsb3c6IFwiODUgLyA2MlwiLFxuICAgIGNvbmRpdGlvbnM6IFwiUmFpblwiLFxuICAgIGRlc2NyaXB0aW9uOiBcImxpZ2h0IHJhaW5cIixcbiAgICB3aW5kOiBcIjhcIixcbiAgICB2aXNpYmlsaXR5OiAxMDAwMCxcbiAgICBodW1pZGl0eTogMjgsXG4gICAgZmVlbHNMaWtlOiBcIjgxXCIsXG4gICAgcG9wOiBcIjAuNDdcIixcbiAgICBwcmVjaXA6IFwiMC4xM1wiLFxuICAgIGFpclF1YWxpdHk6IFwidW5rbm93blwiLFxuICAgIHByZXNzdXJlOiAxMDE1LFxuICAgIHN1bnJpc2U6IDE2NjIxMjE3NTAsXG4gICAgc3Vuc2V0OiAxNjYyMTY4NjI4LFxufVxuZXhwb3J0IHsgZmlsbERldGFpbENvbnRhaW5lciwgb2JqIH0iLCJpbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tIFwiLi91dGlsaXR5XCI7XG5cbi8vIFxuY29uc3QgZGlzcGxheU1haW4gPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNyZWF0ZSA9IChvYmplY3QpID0+IHtcbiAgICAgICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcImNsYXNzXCI6IFwibWFpbkNvbnRhaW5lclwifSk7XG4gICAgICAgIGNvbnN0IGxvY2F0aW9uQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge1wiY2xhc3NcIjogXCJsb2NhdGlvbkNvbnRhaW5lclwifSk7XG4gICAgICAgIGNvbnN0IGNpdHkgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7XCJjbGFzc1wiOiBcIm1haW5DaXR5XCJ9KTtcbiAgICAgICAgY29uc3QgY291bnRyeSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcImNsYXNzXCI6IFwibWFpbkNvdW50cnlcIn0pO1xuICAgICAgICBjb25zdCB0ZW1wQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge1wiY2xhc3NcIjogXCJtYWluVGVtcENvbnRhaW5lclwifSk7XG4gICAgICAgIGNvbnN0IGhpZ2hsb3dDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7XCJjbGFzc1wiOiBcImhpZ2hsb3dDb250YWluZXJcIn0pO1xuICAgICAgICBjb25zdCBpY29uQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge1wiY2xhc3NcIjogXCJpY29uQ29udGFpbmVyXCJ9KTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7XCJjbGFzc1wiOiBcIm1haW5EZXNjcmlwdGlvblwifSk7XG4gICAgICAgIC8vICEhISBkb24ndCBrbm93IGlmIEkgc2hvdWxkIGRpc3BsYXkgaWNvbiBpbWFnZSBCRUxPVyBvdGhlciBkYXRhLCBvciBhcyBiYWNrZHJvcCBvZiB0aGUgbWFpbkNvbnRhaW5lclxuICAgICAgICAvLyBjb250ZW50XG4gICAgICAgIGNpdHkudGV4dENvbnRlbnQgPSBvYmplY3QuY2l0eTtcbiAgICAgICAgY291bnRyeS50ZXh0Q29udGVudCA9IG9iamVjdC5jb3VudHJ5O1xuICAgICAgICB0ZW1wQ29udGFpbmVyLnRleHRDb250ZW50ID0gb2JqZWN0LnRlbXA7XG4gICAgICAgIGhpZ2hsb3dDb250YWluZXIudGV4dENvbnRlbnQgPSBvYmplY3QuaGlnaGxvdztcbiAgICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBvYmplY3QuZGVzY3JpcHRpb247XG4gICAgICAgIC8vIGFwcGVuZCBpdCBhbGwgdG9nZXRoZXJcbiAgICAgICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChsb2NhdGlvbkNvbnRhaW5lcik7XG4gICAgICAgIGxvY2F0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGNpdHkpO1xuICAgICAgICBsb2NhdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjb3VudHJ5KTtcbiAgICAgICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZW1wQ29udGFpbmVyKTtcbiAgICAgICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChoaWdobG93Q29udGFpbmVyKTtcbiAgICAgICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChpY29uQ29udGFpbmVyKTtcbiAgICAgICAgaWNvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG5cbiAgICAgICAgcmV0dXJuIG1haW5Db250YWluZXI7XG4gICAgfVxuICAgIHJldHVybiB7IGNyZWF0ZSB9XG59KSgpO1xuY29uc3QgZmlsbE1haW5Db250YWluZXIgPSAob2JqZWN0KSA9PiB7XG4gICAgY29uc3QgbWFpbiA9IGRpc3BsYXlNYWluLmNyZWF0ZShvYmplY3QpO1xuICAgIHJldHVybiBtYWluO1xufVxuZXhwb3J0IHsgZmlsbE1haW5Db250YWluZXIgfTsiLCIvLyBET00gZnVuY3Rpb25zXG4vLyBoZWxwZXIgZnVuY3Rpb25zIHRvIGNyZWF0ZSBET00gZWxlbWVudCBhbmQgYWRkIGF0dHJpYnV0ZXNcbi8vIGlzIHRoZXJlIGEgbW9yZSBlZmZlY3RpdmUvZWZmaWNpZW50IHdheSB0byBkbyB0aGlzPyFcbmNvbnN0IHNldEF0dHJpYnV0ZXMgPSAoZWxlbWVudCwgYXR0cmlidXRlcykgPT4ge1xuICAgIE9iamVjdC5lbnRyaWVzKGF0dHJpYnV0ZXMpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcbiAgICB9KVxufVxuY29uc3QgY3JlYXRlRWxlbWVudCA9ICh0eXBlLCBhdHRyaWJ1dGVzKSA9PiB7XG4gICAgY29uc3QgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYCR7dHlwZX1gKTtcbiAgICBpZiAoYXR0cmlidXRlcyA9PSBudWxsKSByZXR1cm4gbmV3RWxlbWVudDtcbiAgICBzZXRBdHRyaWJ1dGVzKG5ld0VsZW1lbnQsIGF0dHJpYnV0ZXMpO1xuICAgIHJldHVybiBuZXdFbGVtZW50O1xufVxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRWxlbWVudDsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSBcIi4vdXRpbGl0eVwiO1xuaW1wb3J0IHsgb2JqLCBmaWxsRGV0YWlsQ29udGFpbmVyIH0gZnJvbSBcIi4vZGlzcGxheUV4dHJhXCI7XG5pbXBvcnQgeyBmaWxsTWFpbkNvbnRhaW5lciB9IGZyb20gXCIuL2Rpc3BsYXlNYWluXCI7XG5cbi8vIGdldCBtYWluIGJvZHkgaW4gRE9NXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5jb25zdCBtYWluID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcIm1haW5cIiB9KTtcbmJvZHkuYXBwZW5kQ2hpbGQobWFpbik7XG4vLyBtYWtlIGlucHV0IGZpZWxkIGFuZCBzdWJtaXQgYnV0dG9uXG5jb25zdCBpbnB1dENvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcImNsYXNzXCI6IFwiaW5wdXRDb250YWluZXJcIn0pO1xuY29uc3QgaW5wdXRGaWVsZCA9IGNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7XG4gIGNsYXNzOiBcImlucHV0RmllbGRcIixcbiAgaWQ6IFwiaW5wdXRGaWVsZFwiLFxufSk7XG5jb25zdCBzdWJtaXRCdG4gPSBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHtcbiAgY2xhc3M6IFwic3VibWl0QnRuXCIsXG4gIFwiYXJpYS1sYWJlbFwiOiBcIlN1Ym1pdFwiLFxufSk7XG5zdWJtaXRCdG4udGV4dENvbnRlbnQgPSBcIlN1Ym1pdFwiO1xuaW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXRGaWVsZCk7XG5pbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xubWFpbi5hcHBlbmRDaGlsZChpbnB1dENvbnRhaW5lcik7XG4vLyBzdWJtaXQgbGlzdGVuZXIgZnVuY3Rpb25cbmNvbnN0IHN1Ym1pdEZuID0gKCkgPT4ge1xuICAvLyBjb25zdCB1c2VySW5wdXQgPSBpbnB1dEZpZWxkLnZhbHVlO1xuICAvLyBuZWVkcyBlZGl0XG4gIGFwaUFjdGlvbi5tYWluRm4ob2JqKTtcbiAgaW5wdXRGaWVsZC52YWx1ZSA9IFwiXCI7XG59O1xuc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHN1Ym1pdEZuKCk7XG59KTtcbi8vXG4vLyBmaWd1cmUgb3V0IGhvdyB0byBmZXRjaCB4MzogY3VycmVudCwgZm9yZWNhc3QsIGFuZCBhaXJxdWFsaXR5XG4vLyBlYXNpZXIgdG8ga2VlcCB0aGVtIHNlcGVyYXRlP1xuY29uc3QgYXBpQWN0aW9uID0gKCgpID0+IHtcbiAgY29uc3QgY3VycmVudFZhbHVlID0gXCI5MTdhMTdmNzdhNjBhZTk2ZWUwODEyMTJlOTRlM2Y3NVwiO1xuICBjb25zdCBnZXRGb3JlY2FzdCA9IGFzeW5jIChsb2NhdGlvbikgPT4ge1xuICAgIGNvbnN0IHNlYXJjaExvY2F0aW9uID0gbG9jYXRpb247XG4gICAgY29uc3QgZm9yZWNhc3RGZXRjaCA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9mb3JlY2FzdD9xPSR7c2VhcmNoTG9jYXRpb259JmFwcGlkPSR7Y3VycmVudFZhbHVlfSZ1bml0cz1pbXBlcmlhbGAsXG4gICAgICB7XG4gICAgICAgIG1vZGU6IFwiY29yc1wiLFxuICAgICAgfVxuICAgICk7XG4gICAgY29uc3QgZm9yZWNhc3REYXRhID0gYXdhaXQgZm9yZWNhc3RGZXRjaC5qc29uKCk7XG4gICAgcmV0dXJuIGZvcmVjYXN0RGF0YTtcbiAgfTtcbiAgY29uc3QgZ2V0Q3VycmVudCA9IGFzeW5jIChsb2NhdGlvbikgPT4ge1xuICAgIC8vICEhISBuZWVkIHRvIGNoZWNrIGFwaSBjYWxsIC0gYWNjdXJhdGUgZm9yIGN1cnJlbnQgY29uZGl0aW9ucz9cbiAgICBjb25zdCBjdXJyZW50RmV0Y2ggPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvY3VycmVudD9xPSR7bG9jYXRpb259JmFwcGlkPSR7Y3VycmVudFZhbHVlfSZ1bml0cz1pbXBlcmlhbGAsXG4gICAgICB7XG4gICAgICAgIG1vZGU6IFwiY29yc1wiLFxuICAgICAgfVxuICAgICk7XG4gICAgY29uc3QgY3VycmVudERhdGEgPSBhd2FpdCBjdXJyZW50RmV0Y2guanNvbigpO1xuICAgIHJldHVybiBjdXJyZW50RGF0YTtcbiAgfTtcbiAgY29uc3QgZ2V0QWlyUSA9IGFzeW5jIChsb2NhdGlvbikgPT4ge1xuICAgIGNvbnN0IGFpckZldGNoID0gYXdhaXQgZmV0Y2goIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvY3VycmVudD9xPSR7bG9jYXRpb259JmFwcGlkPSR7Y3VycmVudFZhbHVlfSZ1bml0cz1pbXBlcmlhbGAsXG4gICAge1xuICAgICAgbW9kZTogXCJjb3JzXCIsXG4gICAgfVxuICAgICk7XG4gICAgY29uc3QgYWlyRGF0YSA9IGF3YWl0IGFpckZldGNoLmpzb24oKTtcbiAgICByZXR1cm4gYWlyRGF0YTtcbiAgfVxuICAvLyBnZXQgYWxsIHRoZSBkYXRhcyAtIHRoaW5raW5nIGFuIGFycmF5IHdpdGggMyBvYmo6IFt7Y3VycmVudH0sIHtmb3JlY2FzdH0sIHthaXJxfV1cbiAgLy8gXG4gIGNvbnN0IGRlY2xhcmVEYXRhID0gKGN1cnJlbnQsIGZvcmVjYXN0LCBhaXIpID0+IHtcbiAgICAvLyAhISEgbmVlZCB0byBjb25maXJtIGN1cnJlbnQgZGF0YSwgZmluZCBhaXJxLCBhbmQgdGhpbmsgdGhydSB3aGF0IGVsc2Ugc2hvdWxkIGJlIGluY2x1ZGVkXG4gICAgLy8gY2l0eSwgY291bnRyeSwgY3VycmVudCB0ZW1wLCBoaWdoLCBsb3csIGN1cnJlbnQgY29uZGl0aW9ucyAmIGRlc2NycnB0aW9uLCBjdXJyZW50IHdlYXRoZXIgaWNvbj8sXG4gICAgLy8gdGhlbiBzdHVmZiBmb3IgZGV0YWlsQ29udGFpbmVyXG4gICAgLy8gISEhIHVzZSBmIHRvIGRlc3RydWN0dXJlPyBpcyB0aGF0IHdhcyBlc2xpbnQgaXMgZ29pbmcgZm9yP1xuICAgIGNvbnN0IGYgPSBmb3JlY2FzdC5saXN0WzBdO1xuICAgIGNvbnN0IGNpdHkgPSBjdXJyZW50LmNpdHkubmFtZTtcbiAgICBjb25zdCBjb3VudHJ5ID0gY3VycmVudC5jaXR5LmNvdW50cnk7XG4gICAgY29uc3QgdGVtcCA9IGN1cnJlbnQubGlzdFswXS5tYWluLnRlbXA7XG4gICAgY29uc3QgaGlnaCA9IFwiXCI7XG4gICAgY29uc3QgbG93ID0gXCJcIjtcbiAgICBjb25zdCBjb25kaXRpb25zID0gZm9yZWNhc3QubGlzdFswXS53ZWF0aGVyWzBdLm1haW47XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBmb3JlY2FzdC5saXN0WzBdLndlYXRoZXJbMF0uZGVzY3JpcHRpb247XG4gICAgY29uc3Qgd2luZCA9IGZvcmVjYXN0Lmxpc3RbMF0ud2luZDtcbiAgICBjb25zdCBwb3AgPSBmb3JlY2FzdC5saXN0WzBdLnBvcDtcbiAgICBjb25zdCBzdW5yaXNlID0gZm9yZWNhc3QuY2l0eS5zdW5yaXNlO1xuICAgIGNvbnN0IHN1bnNldCA9IGZvcmVjYXN0LmNpdHkuc3Vuc2V0O1xuICAgIGNvbnN0IGh1bWlkaXR5ID0gZm9yZWNhc3QubGlzdFswXS5tYWluLmh1bWlkaXR5O1xuICAgIGNvbnN0IGZlZWxzTGlrZSA9IGZvcmVjYXN0Lmxpc3RbMF0ubWFpbi5mZWVsc19saWtlO1xuICAgIGNvbnN0IHZpc2liaWxpdHkgPSBmb3JlY2FzdC5saXN0WzBdLnZpc2liaWxpdHk7XG4gICAgY29uc3QgcHJlY2lwID0gZm9yZWNhc3QubGlzdFswXS5yYWluO1xuICAgIGNvbnN0IGFpclF1YWxpdHkgPSBcIm5lZWQgb3RoZXIgYXBpXCI7XG4gICAgY29uc3QgcHJlc3N1cmUgPSBmb3JlY2FzdC5saXN0WzBdLm1haW4ucHJlc3N1cmU7XG4gICAgcmV0dXJuIHtjaXR5LCBjb3VudHJ5LCB0ZW1wLCBoaWdoLCBsb3csIGNvbmRpdGlvbnMsIGRlc2NyaXB0aW9uLCB3aW5kLCBwb3AsIHN1bnJpc2UsIHN1bnNldCwgaHVtaWRpdHksIGZlZWxzTGlrZSwgdmlzaWJpbGl0eSwgcHJlY2lwLCBhaXJRdWFsaXR5LCBwcmVzc3VyZX07XG4gIH07XG5cbiAgY29uc3QgbWFpbkZuID0gYXN5bmMgKGxvY2F0aW9uKSA9PiB7XG4gICAgLy8gY29uc3QgZGF0YSA9IGF3YWl0IGdldFdlYXRoZXJEYXRhKGxvY2F0aW9uKTtcbiAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAvLyBjb25zdCBmb3JEaXNwbGF5ID0gKGRlY2xhcmVEYXRhKGRhdGEpKTtcbiAgICAvLyBjb25zdCBleHRyYSA9IGV4dHJhRmFjdG9yeShmb3JEaXNwbGF5KTtcbiAgICAvLyBjb25zb2xlLmxvZyhmb3JEaXNwbGF5KTtcbiAgICAvLyBtYWluLmFwcGVuZENoaWxkKGV4dHJhKTtcbiAgICAvLyAhISEgbmVlZCB0byByZW1vdmUsIGp1c3QgZm9yIHdvcmsgd2hpbGUgb2ZmbGluZVxuICAgIGNvbnN0IGRldGFpbCA9IGZpbGxEZXRhaWxDb250YWluZXIob2JqKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGRldGFpbCk7XG4gICAgY29uc3QgY3VycmVudCA9IGZpbGxNYWluQ29udGFpbmVyKG9iaik7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjdXJyZW50KTtcbiAgfTtcbiAgLy8gc3RpbGwgbmVlZCB0byBzb3J0IG91dCBob3cgdG8gcGFyc2UgZGF0YSBmb3IgZm9yZWNhc3Qgc2VjdGlvblxuICAvLyBmb3IgZGVza3RvcCBkaXNwbGF5OiBhIGNhcmQgZm9yIGVhY2ggZGF5LCB3aGljaCBoYXMgdGhlIHZhbHVlcyAoM2ggaW5jcmVtZW50cykgaW4gbGlzdCBzdHlsZVxuICAvLyB0aW1lLCB0ZW1wLCBjb25kaXRpb25zLCBwb3A/IChpZiBpdCdzIGdyZWF0ZXIgdGhhbiAwKVxuICAvLyBzaG93IGNhcmRzIGhvcml6b250YWxseVxuICAvLyBmb3IgbW9iaWxlIGRpc3BsYXk6IHNhbWUgY2FyZHMsIGJ1dCBzaG93IHZlcnRpY2FsbHlcbiAgcmV0dXJuIHsgbWFpbkZuIH07XG59KSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
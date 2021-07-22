/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/main.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/main.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*,\\n::before,\\n::after {\\n  box-sizing: border-box;\\n  margin: 0;\\n  padding: 0;\\n}\\n\\nbody {\\n  width: 100%;\\n  min-height: 100vh;\\n  position: relative;\\n}\\n\\nul {\\n  list-style: none;\\n}\\n\\n.link {\\n  text-decoration: none;\\n}\\n\\n.scroll {\\n  cursor: all-scroll;\\n}\\n\\n.completed {\\n  text-decoration: line-through;\\n  color: #bbb;\\n}\\n\\n.footer {\\n  position: absolute;\\n  left: 0;\\n  bottom: 0;\\n  width: 100%;\\n  padding: calc(1rem + 0.8vw) calc(1.5rem + 4.5vw);\\n  display: flex;\\n  flex-direction: row;\\n  align-items: center;\\n  justify-content: space-between;\\n  background: #f6f6f6;\\n}\\n\\n.footer__p {\\n  font-family: muli, sans-serif;\\n  font-style: normal;\\n  font-size: calc(12px + 0.3vw);\\n  font-weight: 500;\\n  line-height: 24px;\\n  color: #222;\\n}\\n\\nheader {\\n  background: #2e8ae6;\\n}\\n\\nheader nav {\\n  padding: calc(1rem + 0.8vw) calc(1.5rem + 4.5vw);\\n}\\n\\nheader nav a {\\n  font-family: muli, sans-serif;\\n  font-style: normal;\\n  font-size: calc(24px + 0.5vw);\\n  font-weight: 500;\\n  line-height: 32px;\\n  color: #fff;\\n}\\n\\n.content {\\n  padding: calc(1rem + 0.8vw) calc(1.5rem + 4.5vw);\\n}\\n\\n.content h1 {\\n  margin: calc(1rem + 2vh) 0;\\n  font-family: muli, sans-serif;\\n  font-style: normal;\\n  font-size: calc(24px + 0.7vw);\\n  font-weight: 800;\\n  line-height: 32px;\\n  text-align: center;\\n  color: #222;\\n}\\n\\n.content .list-container {\\n  position: relative;\\n  margin: calc(1rem + 2vh) 0;\\n  max-width: 500px;\\n  margin-inline: auto;\\n  background: #fff;\\n  min-height: 320px;\\n  border: none;\\n  box-shadow: 0 5px 8px 0 #bebabe;\\n}\\n\\n.content .list-container-title {\\n  padding: calc(0.5rem + 0.3vw) calc(0.8rem + 0.5vw);\\n  border-bottom: 1px solid #ebebeb;\\n  display: flex;\\n  flex-direction: row;\\n  align-items: center;\\n  justify-content: space-between;\\n}\\n\\n.content .list-container-title h2 {\\n  font-family: muli, sans-serif;\\n  font-style: normal;\\n  font-size: calc(15px + 0.3vw);\\n  font-weight: 600;\\n  line-height: 32px;\\n  color: #222;\\n}\\n\\n.content .list-container-title i {\\n  font-size: calc(11px + 0.3vw);\\n  cursor: pointer;\\n  color: #aaa;\\n}\\n\\n.content .list-container .input-task {\\n  width: 100%;\\n  height: calc(2.5rem + 0.4vw);\\n  border: none;\\n  outline: none;\\n  font-family: muli, sans-serif;\\n  font-style: normal;\\n  font-size: calc(15px + 0.3vw);\\n  font-weight: 500;\\n  line-height: 24px;\\n  color: #222;\\n  padding: 0 calc(0.8rem + 0.5vw);\\n  border-bottom: 1px solid #ebebeb;\\n}\\n\\n.content .list-container ul {\\n  min-height: 200px;\\n  max-height: 45vh;\\n  overflow: auto;\\n}\\n\\n.content .list-container ul li {\\n  font-family: muli, sans-serif;\\n  font-style: normal;\\n  font-size: calc(15px + 0.3vw);\\n  font-weight: 500;\\n  line-height: 24px;\\n  display: flex;\\n  flex-direction: row;\\n  align-items: center;\\n  justify-content: space-between;\\n  color: #222;\\n  padding: calc(0.5rem + 0.3vw) calc(0.8rem + 0.5vw);\\n  border-bottom: 1px solid #ebebeb;\\n}\\n\\n.content .list-container ul li input {\\n  flex-basis: 10%;\\n  cursor: pointer;\\n}\\n\\n.content .list-container ul li label {\\n  flex-basis: 77%;\\n  outline: none;\\n  border-radius: 5px;\\n  padding: 0 8px;\\n}\\n\\n.content .list-container ul li label:focus {\\n  background-color: yellow;\\n}\\n\\n.content .list-container ul li .remove {\\n  flex-basis: 5%;\\n  cursor: pointer;\\n  color: #aaa;\\n}\\n\\n.content .list-container ul li .remove:hover {\\n  color: red;\\n}\\n\\n.content .list-container .btn-clear {\\n  position: sticky;\\n  left: 0;\\n  bottom: 0;\\n  width: 100%;\\n  text-align: center;\\n  padding: calc(0.5rem + 0.3vw) calc(0.8rem + 0.5vw);\\n  font-family: muli, sans-serif;\\n  font-style: normal;\\n  font-size: calc(15px + 0.3vw);\\n  font-weight: 500;\\n  line-height: 24px;\\n  color: #222;\\n  background: #f6f6f6;\\n  cursor: pointer;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-project/./src/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/main.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);\n\n\n//# sourceURL=webpack://webpack-project/./src/main.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/app/modules/add.js":
/*!********************************!*\
  !*** ./src/app/modules/add.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ add)\n/* harmony export */ });\n/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.js */ \"./src/app/modules/list.js\");\n/* harmony import */ var _drag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drag.js */ \"./src/app/modules/drag.js\");\n/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utilities.js */ \"./src/app/modules/utilities.js\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage.js */ \"./src/app/modules/storage.js\");\n/* harmony import */ var _completed_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./completed.js */ \"./src/app/modules/completed.js\");\n\n\n\n\n\n\nconst input = document.querySelector('.input-task');\n\nfunction add() {\n  input.addEventListener('keyup', (event) => {\n    event.preventDefault();\n    if (event.keyCode === 13) {\n      _storage_js__WEBPACK_IMPORTED_MODULE_3__.default.addElement(input.value);\n      input.value = '';\n      (0,_list_js__WEBPACK_IMPORTED_MODULE_0__.default)();\n      (0,_utilities_js__WEBPACK_IMPORTED_MODULE_2__.default)();\n      _drag_js__WEBPACK_IMPORTED_MODULE_1__.default.handdler();\n      (0,_completed_js__WEBPACK_IMPORTED_MODULE_4__.default)();\n    }\n  });\n}\n\n//# sourceURL=webpack://webpack-project/./src/app/modules/add.js?");

/***/ }),

/***/ "./src/app/modules/completed.js":
/*!**************************************!*\
  !*** ./src/app/modules/completed.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ \"./src/app/modules/storage.js\");\n\n\nlet list = [];\nconst listWrapper = document.querySelector('.list');\n\n/* eslint-disable */\n\nfunction checkCompleted() {\n  list = [..._storage_js__WEBPACK_IMPORTED_MODULE_0__.default.get()];\n  for (let i = 0; i < listWrapper.children.length; i += 1) {\n    const checkbox = listWrapper.children[i].children[0];\n    const label = listWrapper.children[i].children[1];\n\n    checkbox.addEventListener('change', (e) => {\n      list[i].completed = !list[i].completed;\n\n      if (e.target.checked) {\n        label.classList.add('completed');\n      } else {\n        label.classList.remove('completed');\n      }\n\n      _storage_js__WEBPACK_IMPORTED_MODULE_0__.default.set('elements', JSON.stringify(list));\n    });\n\n    if (list[i].completed) {\n      label.classList.add('completed');\n      checkbox.checked = true;\n    }\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkCompleted);\n\n//# sourceURL=webpack://webpack-project/./src/app/modules/completed.js?");

/***/ }),

/***/ "./src/app/modules/drag.js":
/*!*********************************!*\
  !*** ./src/app/modules/drag.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ \"./src/app/modules/storage.js\");\n/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities.js */ \"./src/app/modules/utilities.js\");\n/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list.js */ \"./src/app/modules/list.js\");\n/* harmony import */ var _completed_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./completed.js */ \"./src/app/modules/completed.js\");\n/* eslint-disable */\n\n\n\n\n\n\nlet list = [];\nconst listWrapper = document.querySelector('.list');\n\nconst Drag = {\n  handdler() {\n    list = _storage_js__WEBPACK_IMPORTED_MODULE_0__.default.get();\n    Array.from(listWrapper.children).forEach((element, i) => {\n      const dragabbleBtn = element.children[2];\n      dragabbleBtn.addEventListener('mousedown', () => {\n        element.setAttribute('draggable', true);\n      });\n\n      element.addEventListener('dragstart', (event) => {\n        event.dataTransfer.setData('index', i);\n      });\n\n      element.addEventListener('drop', (event) => {\n        const draggedIndex = event.dataTransfer.getData('index');\n        const dropIndex = i;\n\n        this.swap(draggedIndex, dropIndex);\n      });\n\n      element.addEventListener('dragover', (event) => {\n        event.preventDefault();\n      });\n    });\n  },\n  swap(draggedIndex, dropIndex) {\n    // We get the current items\n    list = _storage_js__WEBPACK_IMPORTED_MODULE_0__.default.get();\n    const dragged = list[draggedIndex];\n    const drop = list[dropIndex];\n\n    // We swap their positions\n    list[draggedIndex] = drop;\n    list[dropIndex] = dragged;\n\n    // Update their indexes to reflect their new positions\n    list[dropIndex].index = Number(dropIndex);\n    list[draggedIndex].index = Number(draggedIndex);\n\n    _storage_js__WEBPACK_IMPORTED_MODULE_0__.default.set('elements', JSON.stringify(list));\n\n    // Then finally update the display\n    (0,_list_js__WEBPACK_IMPORTED_MODULE_2__.default)();\n    (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.default)();\n    this.handdler();\n    (0,_completed_js__WEBPACK_IMPORTED_MODULE_3__.default)();\n  },\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Drag);\n\n//# sourceURL=webpack://webpack-project/./src/app/modules/drag.js?");

/***/ }),

/***/ "./src/app/modules/list.js":
/*!*********************************!*\
  !*** ./src/app/modules/list.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ \"./src/app/modules/storage.js\");\n\n\nconst listWrapper = document.querySelector('.list');\n\nfunction render() {\n  if (!_storage_js__WEBPACK_IMPORTED_MODULE_0__.default.get()) {\n    _storage_js__WEBPACK_IMPORTED_MODULE_0__.default.set('elements', '[]');\n    _storage_js__WEBPACK_IMPORTED_MODULE_0__.default.addElement('Make Dinner');\n    _storage_js__WEBPACK_IMPORTED_MODULE_0__.default.addElement('Wash bath');\n    _storage_js__WEBPACK_IMPORTED_MODULE_0__.default.addElement('Call dad');\n  }\n  listWrapper.innerHTML = '';\n  _storage_js__WEBPACK_IMPORTED_MODULE_0__.default.get().forEach((element, i) => {\n    const newLi = `\n      <li data-id=\"${i}\" draggable=\"true\" class=\"item\">\n        <input type=\"checkbox\" class=\"checkbox\">\n        <label class=\"text-task\"  contenteditable=\"true\">${element.description}</label>\n        <i class=\"fas fa-ellipsis-v icon scroll\" aria-hidden=\"true\"></i>\n      </li>\n    `;\n    listWrapper.innerHTML += newLi;\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);\n\n//# sourceURL=webpack://webpack-project/./src/app/modules/list.js?");

/***/ }),

/***/ "./src/app/modules/remove.js":
/*!***********************************!*\
  !*** ./src/app/modules/remove.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ \"./src/app/modules/storage.js\");\n/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities.js */ \"./src/app/modules/utilities.js\");\n/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list.js */ \"./src/app/modules/list.js\");\n/* harmony import */ var _drag_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drag.js */ \"./src/app/modules/drag.js\");\n/* harmony import */ var _completed_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./completed.js */ \"./src/app/modules/completed.js\");\n/* eslint-disable */\n\n\n\n\n\n\n\nconst clearBtn = document.querySelector('.btn-clear');\nconst refreshIcon = document.querySelector('.refresh-icon');\n\nconst updatePage = () => {\n  (0,_list_js__WEBPACK_IMPORTED_MODULE_2__.default)();\n  (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.default)();\n  _drag_js__WEBPACK_IMPORTED_MODULE_3__.default.handdler();\n  (0,_completed_js__WEBPACK_IMPORTED_MODULE_4__.default)();\n};\n\nconst clear = {\n  completed() {\n    clearBtn.addEventListener('click', () => {\n      _storage_js__WEBPACK_IMPORTED_MODULE_0__.default.removeCompleted();\n      updatePage();\n    });\n  },\n  all() {\n    refreshIcon.addEventListener('click', () => {\n      _storage_js__WEBPACK_IMPORTED_MODULE_0__.default.removeAll();\n      updatePage();\n    });\n  },\n  element(index) {\n    _storage_js__WEBPACK_IMPORTED_MODULE_0__.default.remove(index);\n    updatePage();\n  },\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clear);\n\n//# sourceURL=webpack://webpack-project/./src/app/modules/remove.js?");

/***/ }),

/***/ "./src/app/modules/storage.js":
/*!************************************!*\
  !*** ./src/app/modules/storage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst { localStorage } = window;\n\nconst storage = {\n  get() {\n    return JSON.parse(localStorage.getItem('elements'));\n  },\n\n  set(key, val) {\n    localStorage.setItem(key, val);\n  },\n\n  updateElement(index, newText) {\n    const elements = this.get();\n    const elementToBeUpdate = elements[index];\n    elementToBeUpdate.description = newText;\n    elements[index] = elementToBeUpdate;\n    this.set('elements', JSON.stringify(elements));\n  },\n\n  addElement(description = '') {\n    const oldElements = this.get();\n\n    const newElement = {\n      description,\n      completed: false,\n      index: oldElements.length,\n    };\n    oldElements.push(newElement);\n\n    localStorage.setItem('elements', JSON.stringify(oldElements));\n  },\n  /* eslint-disable */\n  remove(index) {\n    const elements = this.get();\n    const filterElements = elements.filter((_, i) => i !== index);\n    filterElements.map((elements, i) => elements.index = i);\n    this.set('elements', JSON.stringify(filterElements));\n  },\n\n  removeCompleted() {\n    const oldElements = this.get();\n    const filterElements = oldElements.filter((element) => !element.completed);\n    this.set('elements', JSON.stringify(filterElements));\n  },\n\n  removeAll() {\n    this.set('elements', '[]');\n  },\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storage);\n\n//# sourceURL=webpack://webpack-project/./src/app/modules/storage.js?");

/***/ }),

/***/ "./src/app/modules/utilities.js":
/*!**************************************!*\
  !*** ./src/app/modules/utilities.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ checkLabels)\n/* harmony export */ });\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ \"./src/app/modules/storage.js\");\n/* harmony import */ var _remove_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./remove.js */ \"./src/app/modules/remove.js\");\n/* eslint-disable */\n\n\n\n\nconst listWrapper = document.querySelector('.list');\n\nlet dobleClick = false;\n\nfunction labelHanddle(label, i, icon, blur = false) {\n  if (!blur) {\n    dobleClick = true;\n    icon.classList.remove('fa-ellipsis-v');\n    icon.classList.remove('scroll');\n    icon.classList.add('fa-trash-alt');\n    icon.classList.add('remove');\n  } else {\n    icon.classList.remove('fa-trash-alt');\n    icon.classList.remove('remove');\n    icon.classList.add('fa-ellipsis-v');\n    icon.classList.add('scroll');\n    dobleClick = false;\n    _storage_js__WEBPACK_IMPORTED_MODULE_0__.default.updateElement(i, label.textContent);\n  }\n}\n\nfunction removeElement(i, isRemove) {\n  if (dobleClick && isRemove) {\n    _remove_js__WEBPACK_IMPORTED_MODULE_1__.default.element(i);\n    dobleClick = false;\n  }\n}\n\nfunction checkLabels() {\n  Array.from(listWrapper.children).forEach((item, i) => {\n    const label = item.children[1];\n    const icon = item.children[2];\n    icon.addEventListener('dblclick', () => labelHanddle(label, i, icon, icon.classList.contains('remove')));\n    label.onblur = () => labelHanddle(label, i, icon, true);\n    icon.addEventListener('click', () => removeElement(i, icon.classList.contains('remove')));\n  });\n}\n\n\n//# sourceURL=webpack://webpack-project/./src/app/modules/utilities.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ \"./src/main.css\");\n/* harmony import */ var _app_modules_list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/modules/list.js */ \"./src/app/modules/list.js\");\n/* harmony import */ var _app_modules_utilities_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/modules/utilities.js */ \"./src/app/modules/utilities.js\");\n/* harmony import */ var _app_modules_drag_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/modules/drag.js */ \"./src/app/modules/drag.js\");\n/* harmony import */ var _app_modules_add_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/modules/add.js */ \"./src/app/modules/add.js\");\n/* harmony import */ var _app_modules_completed_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app/modules/completed.js */ \"./src/app/modules/completed.js\");\n/* harmony import */ var _app_modules_remove_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app/modules/remove.js */ \"./src/app/modules/remove.js\");\n\n\n\n\n\n\n\n\nconst init = () => {\n  (0,_app_modules_list_js__WEBPACK_IMPORTED_MODULE_1__.default)();\n  (0,_app_modules_utilities_js__WEBPACK_IMPORTED_MODULE_2__.default)();\n  _app_modules_drag_js__WEBPACK_IMPORTED_MODULE_3__.default.handdler();\n  (0,_app_modules_add_js__WEBPACK_IMPORTED_MODULE_4__.default)();\n  (0,_app_modules_completed_js__WEBPACK_IMPORTED_MODULE_5__.default)();\n  _app_modules_remove_js__WEBPACK_IMPORTED_MODULE_6__.default.completed();\n  _app_modules_remove_js__WEBPACK_IMPORTED_MODULE_6__.default.all();\n};\n\ninit();\n\n\n//# sourceURL=webpack://webpack-project/./src/index.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
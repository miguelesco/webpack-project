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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/main.css":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/main.css ***!
  \*******************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*,\\n::before,\\n::after {\\n  box-sizing: border-box;\\n  margin: 0;\\n  padding: 0;\\n}\\n\\nbody {\\n  width: 100%;\\n  min-height: 100vh;\\n  position: relative;\\n}\\n\\nul {\\n  list-style: none;\\n}\\n\\n.link {\\n  text-decoration: none;\\n}\\n\\n.completed {\\n  text-decoration: line-through;\\n  color: #bbb;\\n}\\n\\n.footer {\\n  position: absolute;\\n  left: 0;\\n  bottom: 0;\\n  width: 100%;\\n  padding: calc(1rem + 0.8vw) calc(1.5rem + 4.5vw);\\n  display: flex;\\n  flex-direction: row;\\n  align-items: center;\\n  justify-content: space-between;\\n  background: #f6f6f6;\\n}\\n\\n.footer__p {\\n  font-family: muli, sans-serif;\\n  font-style: normal;\\n  font-size: calc(12px + 0.3vw);\\n  font-weight: 500;\\n  line-height: 24px;\\n  color: #222;\\n}\\n\\nheader {\\n  background: #2e8ae6;\\n}\\n\\nheader nav {\\n  padding: calc(1rem + 0.8vw) calc(1.5rem + 4.5vw);\\n}\\n\\nheader nav a {\\n  font-family: muli, sans-serif;\\n  font-style: normal;\\n  font-size: calc(24px + 0.5vw);\\n  font-weight: 500;\\n  line-height: 32px;\\n  color: #fff;\\n}\\n\\n.content {\\n  padding: calc(1rem + 0.8vw) calc(1.5rem + 4.5vw);\\n}\\n\\n.content h1 {\\n  margin: calc(1rem + 2vh) 0;\\n  font-family: muli, sans-serif;\\n  font-style: normal;\\n  font-size: calc(24px + 0.7vw);\\n  font-weight: 800;\\n  line-height: 32px;\\n  text-align: center;\\n  color: #222;\\n}\\n\\n.content .list-container {\\n  position: relative;\\n  margin: calc(1rem + 2vh) 0;\\n  max-width: 500px;\\n  margin-inline: auto;\\n  background: #fff;\\n  min-height: 320px;\\n  border: none;\\n  box-shadow: 0 5px 8px 0 #bebabe;\\n}\\n\\n.content .list-container-title {\\n  padding: calc(0.5rem + 0.3vw) calc(0.8rem + 0.5vw);\\n  border-bottom: 1px solid #ebebeb;\\n  display: flex;\\n  flex-direction: row;\\n  align-items: center;\\n  justify-content: space-between;\\n}\\n\\n.content .list-container-title h2 {\\n  font-family: muli, sans-serif;\\n  font-style: normal;\\n  font-size: calc(15px + 0.3vw);\\n  font-weight: 600;\\n  line-height: 32px;\\n  color: #222;\\n}\\n\\n.content .list-container-title i {\\n  font-size: calc(11px + 0.3vw);\\n  cursor: pointer;\\n  color: #aaa;\\n}\\n\\n.content .list-container .input-task {\\n  width: 100%;\\n  height: calc(2.5rem + 0.4vw);\\n  border: none;\\n  outline: none;\\n  font-family: muli, sans-serif;\\n  font-style: normal;\\n  font-size: calc(15px + 0.3vw);\\n  font-weight: 500;\\n  line-height: 24px;\\n  color: #222;\\n  font-style: italic;\\n  padding: 0 calc(0.8rem + 0.5vw);\\n  border-bottom: 1px solid #ebebeb;\\n}\\n\\n.content .list-container ul {\\n  min-height: 200px;\\n  max-height: 45vh;\\n  overflow: auto;\\n}\\n\\n.content .list-container ul li {\\n  font-family: muli, sans-serif;\\n  font-style: normal;\\n  font-size: calc(15px + 0.3vw);\\n  font-weight: 500;\\n  line-height: 24px;\\n  display: flex;\\n  flex-direction: row;\\n  align-items: center;\\n  justify-content: space-between;\\n  color: #222;\\n  padding: calc(0.5rem + 0.3vw) calc(0.8rem + 0.5vw);\\n  border-bottom: 1px solid #ebebeb;\\n}\\n\\n.content .list-container ul li input {\\n  flex-basis: 10%;\\n  cursor: pointer;\\n}\\n\\n.content .list-container ul li label {\\n  flex-basis: 77%;\\n  outline: none;\\n  border-radius: 5px;\\n  padding: 0 8px;\\n}\\n\\n.content .list-container ul li label:focus {\\n  background-color: yellow;\\n}\\n\\n.content .list-container ul li .remove {\\n  flex-basis: 5%;\\n  cursor: pointer;\\n  color: #aaa;\\n}\\n\\n.content .list-container ul li .remove:hover {\\n  color: red;\\n}\\n\\n.content .list-container .btn-clear {\\n  position: sticky;\\n  left: 0;\\n  bottom: 0;\\n  width: 100%;\\n  text-align: center;\\n  padding: calc(0.5rem + 0.3vw) calc(0.8rem + 0.5vw);\\n  font-family: muli, sans-serif;\\n  font-style: normal;\\n  font-size: calc(15px + 0.3vw);\\n  font-weight: 500;\\n  line-height: 24px;\\n  color: #222;\\n  background: #f6f6f6;\\n  cursor: pointer;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-project/./src/main.css?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B0%5D.use%5B2%5D");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/main.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_main_css__WEBPACK_IMPORTED_MODULE_6__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_main_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_main_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_main_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);\n\n\n//# sourceURL=webpack://webpack-project/./src/main.css?");

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

/***/ "./src/app/modules/dragItems.js":
/*!**************************************!*\
  !*** ./src/app/modules/dragItems.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst listWrapper = document.querySelector('.list');\r\n\r\n\r\nfunction dragHanddler () {\r\n  Array.from(listWrapper.children).forEach((element, i) => {\r\n  \r\n    const dragabbleBtn = element.children[2];\r\n    dragabbleBtn.addEventListener('mousedown', () => {\r\n      element.setAttribute(\"draggable\", true);\r\n    });\r\n\r\n    element.addEventListener(\"dragstart\", (event) => {\r\n      console.log(event.dataTransfer)\r\n      event.dataTransfer.setData('index', i);\r\n    });\r\n\r\n    element.addEventListener('drop', (event) => {\r\n      const draggedIndex = event.dataTransfer.getData(\"index\"); \r\n      const dropIndex = i; \r\n      \r\n      swap(draggedIndex, dropIndex);\r\n    });\r\n\r\n    element.addEventListener(\"dragover\", (event) => {\r\n      event.preventDefault();\r\n    });\r\n  });\r\n}\r\n\r\nfunction swap(draggedIndex, dropIndex) {\r\n  // We get the current items\r\n  const dragged = list[draggedIndex];\r\n  const drop = list[dropIndex];\r\n\r\n  // We swap their positions\r\n  list[draggedIndex] = drop;\r\n  list[dropIndex] = dragged;\r\n  \r\n  // Update their indexes to reflect their new positions\r\n  list.index = dropIndex;\r\n  list.index = draggedIndex;\r\n\r\n  // Then finally update the display\r\n  render();\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dragHanddler);\n\n//# sourceURL=webpack://webpack-project/./src/app/modules/dragItems.js?");

/***/ }),

/***/ "./src/app/modules/list.js":
/*!*********************************!*\
  !*** ./src/app/modules/list.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities.js */ \"./src/app/modules/utilities.js\");\n/* harmony import */ var _dragItems_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dragItems.js */ \"./src/app/modules/dragItems.js\");\n\r\n\r\n\r\nconst listWrapper = document.querySelector('.list');\r\n\r\nconst list = [\r\n  {\r\n    description: 'hola',\r\n    completed: true,\r\n    index: 0\r\n  },\r\n  {\r\n    description: 'sasas',\r\n    completed: true,\r\n    index: 1\r\n  },\r\n  {\r\n    description: 'nnnnn',\r\n    completed: true,\r\n    index: 2\r\n  }\r\n];\r\nfunction render () {\r\n  listWrapper.innerHTML = \"\";\r\n  list.forEach((element, i) => {\r\n    const list = `\r\n      <li data-id=\"${i}\" class=\"item\">\r\n        <input type=\"checkbox\" class=\"checkbox\">\r\n        <label class=\"text-task\"  contenteditable=\"true\">${element.description}</label>\r\n        <i class=\"fas fa-ellipsis-v icon\" aria-hidden=\"true\"></i>\r\n      </li>\r\n    `;\r\n    listWrapper.innerHTML += list;\r\n  });\r\n}\r\n\r\n\r\n\r\nconst listRender = () => {\r\n  render();\r\n  (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.default)();\r\n  (0,_dragItems_js__WEBPACK_IMPORTED_MODULE_1__.default)();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listRender);\n\n//# sourceURL=webpack://webpack-project/./src/app/modules/list.js?");

/***/ }),

/***/ "./src/app/modules/utilities.js":
/*!**************************************!*\
  !*** ./src/app/modules/utilities.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst listWrapper = document.querySelector('.list');\r\n\r\nfunction labelHanddle(icon , blur = false) {\r\n  if (!blur) {\r\n    icon.classList.remove('fa-ellipsis-v');\r\n    icon.classList.add('fa-trash-alt');\r\n    icon.classList.add('remove');\r\n    icon.removeEventListener('mousedown');\r\n  } else {\r\n    icon.classList.remove('fa-trash-alt');\r\n    icon.classList.remove('remove');\r\n    icon.classList.add('fa-ellipsis-v');\r\n  } \r\n}\r\n\r\nfunction checkLabels () {\r\n  Array.from(listWrapper.children).forEach(item => {\r\n    const label = item.children[1];\r\n    const icon = item.children[2];\r\n    label.addEventListener('click', () => labelHanddle(icon), false);\r\n    label.onblur = () => labelHanddle(icon, true);\r\n  });\r\n} \r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkLabels);\n\n//# sourceURL=webpack://webpack-project/./src/app/modules/utilities.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ \"./src/main.css\");\n/* harmony import */ var _app_modules_list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/modules/list.js */ \"./src/app/modules/list.js\");\n\r\n\r\n\r\nconst init = () => {\r\n  (0,_app_modules_list_js__WEBPACK_IMPORTED_MODULE_1__.default)();\r\n};\r\n\r\ninit();\n\n//# sourceURL=webpack://webpack-project/./src/index.js?");

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
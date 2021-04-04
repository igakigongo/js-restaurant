/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/jubei_restaurant.jpg":
/*!*************************************!*\
  !*** ./assets/jubei_restaurant.jpg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"02d38257b696b9d25a00dcb8f2d40cec.jpg\");\n\n//# sourceURL=webpack:///./assets/jubei_restaurant.jpg?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/app.css":
/*!***********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/app.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_jubei_restaurant_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/jubei_restaurant.jpg */ \"./assets/jubei_restaurant.jpg\");\n// Imports\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_jubei_restaurant_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"body {\\n  background-color: #e9e9e9;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-size: cover;\\n  font-family: 'Roboto Condensed', sans-serif;\\n}\\n\\n.custom-nav {\\n  background-color: rgb(0, 0, 0, .8) !important;\\n  flex-direction: row;\\n  font-family: 'Roboto Condensed', sans-serif;\\n  justify-content: space-evenly;\\n}\\n\\n.navbar-brand {\\n  color: white !important;\\n  font-family: 'Sacramento', cursive;\\n  font-size: 2.25rem !important;\\n}\\n\\n.nav-link {\\n  font-size: 1.2rem;\\n  font-weight: 100;\\n}\\n\\n.jumbotron {\\n  background-color: rgb(0, 0, 0, .8) !important;\\n  color: #fff;\\n}\\n\\n.display-4 {\\n  font-family: 'Sacramento', cursive;\\n  font-size: 2.8rem;\\n  text-align: center;\\n}\\n\\n.narrative {\\n  font-family: 'Roboto Condensed', sans-serif;\\n  font-size: 1.5rem;\\n}\\n\\n.contact-form {\\n  background-image: -webkit-linear-gradient(145deg, rgb(255,193,7, 1) 45%, transparent 45%);\\n}\\n\\n.my-10 {\\n  margin-bottom: 6rem;\\n  margin-top: 6rem;\\n}\\n\\n.card { \\n  border: 1px solid rgb(0, 0, 0, .8);\\n}\\n\\n.card img {\\n  content: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/app.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== \"string\") {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/app.css":
/*!*********************!*\
  !*** ./src/app.css ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./app.css */ \"./node_modules/css-loader/dist/cjs.js!./src/app.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"], options);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].locals || {});\n\n//# sourceURL=webpack:///./src/app.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_contact_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/contact-page */ \"./src/modules/contact-page.js\");\n/* harmony import */ var _modules_home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/home-page */ \"./src/modules/home-page.js\");\n/* harmony import */ var _modules_menu_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/menu-page */ \"./src/modules/menu-page.js\");\n/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.css */ \"./src/app.css\");\n\n\n\n\n\n/**\n * Handle all transitions from the index element\n */\nconst navigation = (function loadNavigation() {\n  let navigationBar;\n\n  const moduleDataAttributeName = 'data-mod';\n\n  const renderToMain = (evt) => {\n    evt.preventDefault();\n    const { mod: nameOfModule } = evt.target.dataset;\n    let handlerModule;\n\n    switch (nameOfModule) {\n      case 'contact':\n        handlerModule = _modules_contact_page__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n        break;\n\n      case 'menu':\n        handlerModule = _modules_menu_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n        break;\n\n      default:\n        handlerModule = _modules_home_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n        break;\n    }\n\n    if (handlerModule) handlerModule.render();\n  };\n\n  const buildBrand = () => {\n    // create the brand element\n    const brandSpanElements = ['Jubei\\'s', 'Restaurant'].map((brandSubTitle, index) => {\n      const spanElement = document.createElement('span');\n      spanElement.classList.add(index === 0 ? 'text-white' : 'text-warning');\n      spanElement.innerText = brandSubTitle;\n      return spanElement;\n    });\n\n    const anchorElement = document.createElement('a');\n    anchorElement.append(...brandSpanElements);\n    anchorElement.classList.add('navbar-brand');\n    anchorElement.setAttribute(moduleDataAttributeName, 'home');\n    anchorElement.setAttribute('href', '#');\n    anchorElement.addEventListener('click', renderToMain);\n    return anchorElement;\n  };\n\n  const buildNavLinks = () => ['Contact', 'Menu'].map((title) => {\n    const anchorElement = document.createElement('a');\n    anchorElement.addEventListener('click', renderToMain);\n    anchorElement.classList.add('nav-link', 'text-white');\n    anchorElement.innerText = title;\n    anchorElement.setAttribute(moduleDataAttributeName, title.toLowerCase());\n    anchorElement.setAttribute('href', '#');\n\n    const linkElement = document.createElement('li');\n    linkElement.classList.add('nav-item', 'mx-3', 'px-3');\n    linkElement.appendChild(anchorElement);\n    return linkElement;\n  });\n\n  const buildNavigationBar = () => {\n    if (navigationBar) return navigationBar;\n\n    // build if it is not yet built\n    // create the unordered list element - right navigation menu\n    const unorderedListElement = document.createElement('ul');\n    unorderedListElement.classList.add('navbar-nav', 'ml-auto', 'd-flex', 'flex-row');\n    unorderedListElement.append(...buildNavLinks());\n\n    // nav container\n    const navContainerElement = document.createElement('div');\n    navContainerElement.append(buildBrand(), unorderedListElement);\n    navContainerElement.classList.add('container');\n\n    // nav element\n    const navElement = document.createElement('nav');\n    navElement.classList.add('navbar', 'rounded', 'custom-nav', 'py-0');\n    navElement.appendChild(navContainerElement);\n\n    // html5 header element\n    const header = document.createElement('header');\n    header.appendChild(navElement);\n    return header;\n  };\n\n  const buildMainWithAppShell = () => {\n    const shellElement = document.createElement('div');\n    shellElement.classList.add('container', 'app-shell', 'my-10');\n    shellElement.setAttribute('id', 'app-shell');\n\n    const main = document.createElement('main');\n    main.appendChild(shellElement);\n    return main;\n  };\n\n  // Renders the navigation menu followed by the app shell on page load\n  const render = () => {\n    const header = buildNavigationBar();\n    document.body.appendChild(header);\n\n    const brandAnchorElement = document.querySelector('.navbar-brand');\n    document.body.appendChild(buildMainWithAppShell());\n    brandAnchorElement.click();\n  };\n\n  return {\n    render,\n  };\n}());\n\ndocument.addEventListener('DOMContentLoaded', navigation.render);\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/menu/index.js":
/*!***************************!*\
  !*** ./src/menu/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass MenuItem {\n  constructor(name, price) {\n    this.name = name;\n    this.price = price;\n  }\n\n  get formattedPrice() {\n    return `€ ${this.price}`;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MenuItem);\n\n//# sourceURL=webpack:///./src/menu/index.js?");

/***/ }),

/***/ "./src/modules/contact-page.js":
/*!*************************************!*\
  !*** ./src/modules/contact-page.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\n\n\nconst contact = (() => {\n  const render = () => {\n    const shell = document.querySelector('#app-shell');\n\n    Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(shell);\n\n    shell.innerHTML = `<div class=\"jumbotron\">\n      <h1 class=\"display-4 mb-5 text-warning\">\n        Stay in touch, we would love to hear from you!\n      </h1>\n      <div class=\"row\">\n        <div class=\"offset-2 col-8 p-5 border border-warning rounded contact-form\">\n          <h1>Fill the form <br />to <span class=\"text-warning\">contact us.</span></h1>\n          <div class=\"row\">\n            <div class=\"col-6 mb-3\">\n              <input class=\"form-control\" placeholder=\"First Name\" type=\"text\" />\n            </div>\n            <div class=\"col-6 mb-3\">\n              <input class=\"form-control\" placeholder=\"Last Name\" type=\"text\" />\n            </div>\n            <div class=\"col-12 mb-3\">\n              <input class=\"form-control\" placeholder=\"Email\" type=\"email\" />\n            </div>\n            <div class=\"col-12 mb-3\">\n              <textarea class=\"form-control\" placeholder=\"How can we help you? Describe your problem here\"></textarea>\n            </div>\n            <div class=\"col-5 mb-3\">\n              <input class=\"btn btn-warning form-control\" type=\"submit\" value=\"Send Message\" />\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>`;\n  };\n\n  return {\n    render,\n  };\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (contact);\n\n\n//# sourceURL=webpack:///./src/modules/contact-page.js?");

/***/ }),

/***/ "./src/modules/home-page.js":
/*!**********************************!*\
  !*** ./src/modules/home-page.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\n\n\nconst home = (() => {\n  const render = () => {\n    const shell = document.querySelector('#app-shell');\n\n    Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(shell);\n\n    shell.innerHTML = `<div class=\"jumbotron\">\n      <h1 class=\"display-4 mb-5 text-warning\">\n        If you're on the hunt for the best new restaurants in Hong Kong in 2020, then this is\n        the right place to be\n      </h1>\n      <div class=\"row\">\n        <div class=\"offset-2 col-8\">\n          <p class=\"narrative\">\n            We’re all about food here at Honeycombers, and we know you are too! From the finest\n            Japanese restaurants in town to our rundown of tastiest Chinese restaurants in Hong\n            Kong and the best brunches to get boozy at, we promise to always stay on top of the\n            fast-moving world of food in HK. That being said, here’s where to tuck into new\n            restaurants in Hong Kong in 2020 – the January edition.\n          </p>\n          <p class=\"font-italic text-muted text-right text-small my-4 by-line\">-- Edward Iga Kigongo --</span>\n        </div>\n      </div>\n    </div>`;\n  };\n\n  return {\n    render,\n  };\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (home);\n\n\n//# sourceURL=webpack:///./src/modules/home-page.js?");

/***/ }),

/***/ "./src/modules/menu-page.js":
/*!**********************************!*\
  !*** ./src/modules/menu-page.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../menu */ \"./src/menu/index.js\");\n\n\n\nconst menu = (() => {\n  const menuItems = [\n    new _menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('Expensive Pizza', 20.00),\n    new _menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('Cheaper Pizza', 13.45),\n    new _menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('Some food', 8.95),\n    new _menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('Shoarma', 12.95),\n    new _menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('Hyena Gizzard', 15.00),\n    new _menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('Black Mamba Juice', 16.45),\n  ];\n\n\n  const menuOptions = () => menuItems.map((item) => `<div class=\"col\">\n          <div class=\"card mb-3\">\n            <img class=\"card-img-top\" alt=\"...\">\n            <div class=\"card-body bg-warning\">\n              <h5 class=\"card-title d-flex justify-content-between\">\n                <span>${item.name}</span>\n                <span>${item.formattedPrice}</span>\n              </h5>\n              <p class=\"card-text\">\n                <small class=\"text-muted\">Last updated 3 mins ago</small>\n              </p>\n            </div>\n          </div>\n        </div>`).join('');\n\n\n  const render = () => {\n    const shell = document.querySelector('#app-shell');\n\n    Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(shell);\n    const options = menuOptions();\n\n    shell.innerHTML = `<div class=\"jumbotron\">\n      <h1 class=\"display-4 mb-5 text-warning\">\n        Take a glance at our menu options!\n      </h1>\n      <div class=\"row row-cols-3\">\n        ${options}\n      </div>\n    </div>`;\n  };\n\n  return {\n    render,\n  };\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (menu);\n\n\n//# sourceURL=webpack:///./src/modules/menu-page.js?");

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst clearElement = (htmlElement) => {\n  if (!htmlElement) return;\n  while (htmlElement.firstChild) {\n    htmlElement.removeChild(htmlElement.firstChild);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (clearElement);\n\n//# sourceURL=webpack:///./src/utils/index.js?");

/***/ })

/******/ });
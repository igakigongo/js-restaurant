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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_contact_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/contact-page */ \"./src/modules/contact-page.js\");\n/* harmony import */ var _modules_home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/home-page */ \"./src/modules/home-page.js\");\n/* harmony import */ var _modules_menu_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/menu-page */ \"./src/modules/menu-page.js\");\n\n\n\n\n/**\n * Handle all transitions from the index element\n */\nconst navigation = (function() {\n\n  let navigationBar;\n\n  const buildBrand = () => {\n    // create the brand element\n    const brandSpanElements = ['Jubei\\'s', 'Restaurant'].map((brandSubTitle, index) => {\n      const spanElement = document.createElement('span');\n      spanElement.classList.add(index === 0 ? 'text-white' : 'text-warning');\n      spanElement.innerText = brandSubTitle;\n      return spanElement;\n    });\n\n    const anchorElement =  document.createElement('a');\n    anchorElement.append(...brandSpanElements);\n    anchorElement.classList.add('navbar-brand');\n    anchorElement.setAttribute('href', '#');\n    anchorElement.addEventListener('click', ()=>{});\n    return anchorElement;\n  };\n\n  const buildNavLinks = () =>\n    ['Contact', 'Menu'].map(title => {\n      const anchorElement = document.createElement('a');\n      anchorElement.addEventListener('click', ()=>{});\n      anchorElement.classList.add('nav-link', 'text-white');\n      anchorElement.innerText = title;\n      anchorElement.setAttribute('href', '#');\n\n      const linkElement = document.createElement('li');\n      linkElement.classList.add('nav-item', 'mx-3', 'px-3');\n      linkElement.appendChild(anchorElement);\n      return linkElement;\n    });\n\n  const buildNavigationBar = () => \n  {\n    if (navigationBar) return navigationBar;\n\n    // build if it is not yet built\n    // create the unordered list element - right navigation menu\n    const unorderedListElement = document.createElement('ul');\n    unorderedListElement.classList.add('navbar-nav', 'ml-auto', 'd-flex', 'flex-row');\n    unorderedListElement.append(...buildNavLinks());\n\n    // nav container\n    const navContainerElement = document.createElement('div');\n    navContainerElement.append(buildBrand(), unorderedListElement);\n    navContainerElement.classList.add('container');\n\n    // nav element\n    const navElement = document.createElement('nav');\n    navElement.classList.add('navbar', 'rounded', 'custom-nav');\n    navElement.appendChild(navContainerElement);\n\n    // html5 header element\n    const header = document.createElement('header');\n    header.appendChild(navElement);\n    return header;\n  };\n\n  /**\n\t * Renders the navigation menu on page load\n\t */\n  const render = () => document.body.appendChild(buildNavigationBar());\n\n  // eslint-disable-next-line no-unused-vars\n  function renderToMain(evt){\n    evt.preventDefault();\n    const name = evt.target.innerText.toLowerCase();\n    let handlerModule;\n    \n    switch(name){\n    case 'contact':\n      handlerModule = _modules_contact_page__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n      break;\n\n    case 'menu':\n      handlerModule = _modules_menu_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n      break;\n\n    default:\n      handlerModule = _modules_home_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n      break;\n    }\n    \n    if (handlerModule) handlerModule.render();\n  }\n\n  return {\n    render\n  };\n})();\n\ndocument.addEventListener('DOMContentLoaded', navigation.render);\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/contact-page.js":
/*!*************************************!*\
  !*** ./src/modules/contact-page.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst contact = (function() {\n  const render = () => {};\n\n  return {\n    render\n  };\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (contact);\n\n\n//# sourceURL=webpack:///./src/modules/contact-page.js?");

/***/ }),

/***/ "./src/modules/home-page.js":
/*!**********************************!*\
  !*** ./src/modules/home-page.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst home = (function(){\n  const render = () => {};\n\n  return {\n    render\n  };\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (home);\n\n//# sourceURL=webpack:///./src/modules/home-page.js?");

/***/ }),

/***/ "./src/modules/menu-page.js":
/*!**********************************!*\
  !*** ./src/modules/menu-page.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst menu = (function() {\n  const render = () => {};\n\n  return {\n    render\n  };\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (menu);\n\n\n//# sourceURL=webpack:///./src/modules/menu-page.js?");

/***/ })

/******/ });
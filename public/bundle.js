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

/***/ "./src/area.ts":
/*!*********************!*\
  !*** ./src/area.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getArea\": () => (/* binding */ getArea)\n/* harmony export */ });\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \"./src/util.ts\");\n\r\nfunction getCircleArea(circle) {\r\n    const area = Math.PI * circle.radius * circle.radius;\r\n    console.log(`Area of circle is  ${area}`);\r\n}\r\nfunction getTriangleArea(triangle) {\r\n    const p = (triangle.sideA + triangle.sideB + triangle.sideC) / 2;\r\n    const area = Math.sqrt(p * (p - triangle.sideA) * (p - triangle.sideB) * (p - triangle.sideC));\r\n    console.log(`Are of triangle is  ${area}`);\r\n}\r\nfunction getRectangleArea(rectangle) {\r\n    const area = rectangle.sideA * rectangle.sideB;\r\n    console.log(`Are of Rectangle is  ${area}`);\r\n}\r\nfunction getArea(shape) {\r\n    if (shape.type === _util__WEBPACK_IMPORTED_MODULE_0__.Shapes.Circle)\r\n        getCircleArea(shape);\r\n    if (shape.type === _util__WEBPACK_IMPORTED_MODULE_0__.Shapes.Triangle)\r\n        getTriangleArea(shape);\r\n    if (shape.type === _util__WEBPACK_IMPORTED_MODULE_0__.Shapes.Rectangle)\r\n        getRectangleArea(shape);\r\n}\r\n\n\n//# sourceURL=webpack://test/./src/area.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _area__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./area */ \"./src/area.ts\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ \"./src/util.ts\");\n\r\n\r\nconst circle = {\r\n    type: _util__WEBPACK_IMPORTED_MODULE_1__.Shapes.Circle,\r\n    radius: 20,\r\n};\r\nconst triangle = {\r\n    type: _util__WEBPACK_IMPORTED_MODULE_1__.Shapes.Triangle,\r\n    sideA: 7,\r\n    sideB: 10,\r\n    sideC: 5,\r\n};\r\nconst rectangle = {\r\n    type: _util__WEBPACK_IMPORTED_MODULE_1__.Shapes.Rectangle,\r\n    sideA: 20,\r\n    sideB: 30,\r\n};\r\n(0,_area__WEBPACK_IMPORTED_MODULE_0__.getArea)(circle);\r\n(0,_area__WEBPACK_IMPORTED_MODULE_0__.getArea)(triangle);\r\n(0,_area__WEBPACK_IMPORTED_MODULE_0__.getArea)(rectangle);\r\n\n\n//# sourceURL=webpack://test/./src/index.ts?");

/***/ }),

/***/ "./src/util.ts":
/*!*********************!*\
  !*** ./src/util.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Shapes\": () => (/* binding */ Shapes)\n/* harmony export */ });\nvar Shapes;\r\n(function (Shapes) {\r\n    Shapes[Shapes[\"Circle\"] = 0] = \"Circle\";\r\n    Shapes[Shapes[\"Triangle\"] = 1] = \"Triangle\";\r\n    Shapes[Shapes[\"Rectangle\"] = 2] = \"Rectangle\";\r\n})(Shapes || (Shapes = {}));\r\n\n\n//# sourceURL=webpack://test/./src/util.ts?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
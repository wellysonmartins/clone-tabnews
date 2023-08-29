/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/styles/RomanticPhrasesComponent.module.css":
/*!**********************************************************!*\
  !*** ./pages/styles/RomanticPhrasesComponent.module.css ***!
  \**********************************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"romanticPhrasesComponent\": \"RomanticPhrasesComponent_romanticPhrasesComponent__9HgCd\",\n\t\"phrase\": \"RomanticPhrasesComponent_phrase__J60VV\",\n\t\"button\": \"RomanticPhrasesComponent_button__gcI5N\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zdHlsZXMvUm9tYW50aWNQaHJhc2VzQ29tcG9uZW50Lm1vZHVsZS5jc3MuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xvbmUtdGFibmV3cy8uL3BhZ2VzL3N0eWxlcy9Sb21hbnRpY1BocmFzZXNDb21wb25lbnQubW9kdWxlLmNzcz9kMWUzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInJvbWFudGljUGhyYXNlc0NvbXBvbmVudFwiOiBcIlJvbWFudGljUGhyYXNlc0NvbXBvbmVudF9yb21hbnRpY1BocmFzZXNDb21wb25lbnRfXzlIZ0NkXCIsXG5cdFwicGhyYXNlXCI6IFwiUm9tYW50aWNQaHJhc2VzQ29tcG9uZW50X3BocmFzZV9fSjYwVlZcIixcblx0XCJidXR0b25cIjogXCJSb21hbnRpY1BocmFzZXNDb21wb25lbnRfYnV0dG9uX19nY0k1TlwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/styles/RomanticPhrasesComponent.module.css\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_RomanticPhrasesComponent_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/RomanticPhrasesComponent.module.css */ \"./pages/styles/RomanticPhrasesComponent.module.css\");\n/* harmony import */ var _styles_RomanticPhrasesComponent_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_RomanticPhrasesComponent_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst RomanticPhrasesComponent = ()=>{\n    const [phrases, setPhrases] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        \"O amor \\xe9 a ess\\xeancia da vida.\",\n        \"Encontrar voc\\xea foi a melhor coisa que j\\xe1 me aconteceu.\",\n        \"Cada momento ao seu lado \\xe9 um tesouro precioso.\",\n        \"Seu sorriso ilumina at\\xe9 o dia mais nublado.\",\n        \"Voc\\xea \\xe9 o meu porto seguro e minha inspira\\xe7\\xe3o di\\xe1ria.\",\n        \"No seu abra\\xe7o, encontro paz e conforto.\",\n        \"O tempo parece parar quando estamos juntos.\",\n        \"Cada olhar seu \\xe9 um convite para um mundo de amor.\",\n        \"Meu cora\\xe7\\xe3o bate no ritmo do seu.\",\n        \"Voc\\xea \\xe9 a raz\\xe3o do meu sorriso constante.\"\n    ]);\n    const [currentPhrase, setCurrentPhrase] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Voc\\xea \\xe9 a raz\\xe3o do meu sorriso constante.\");\n    const updatePhrase = ()=>{\n        const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];\n        setCurrentPhrase(randomPhrase);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_RomanticPhrasesComponent_module_css__WEBPACK_IMPORTED_MODULE_2___default().romanticPhrasesComponent),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: [\n                    \"Frases Rom\\xe2nticas para o seu Desafio do \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"https://Curso.dev\",\n                        target: \"_blank\",\n                        children: \"Curso.dev\"\n                    }, void 0, false, {\n                        fileName: \"/workspaces/clone-tabnews/pages/index.js\",\n                        lineNumber: 27,\n                        columnNumber: 51\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspaces/clone-tabnews/pages/index.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_styles_RomanticPhrasesComponent_module_css__WEBPACK_IMPORTED_MODULE_2___default().phrase),\n                children: [\n                    '\"',\n                    currentPhrase,\n                    '\"'\n                ]\n            }, void 0, true, {\n                fileName: \"/workspaces/clone-tabnews/pages/index.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_styles_RomanticPhrasesComponent_module_css__WEBPACK_IMPORTED_MODULE_2___default().button),\n                onClick: updatePhrase,\n                children: \"Gerar frase\"\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/index.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/clone-tabnews/pages/index.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RomanticPhrasesComponent);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF3QztBQUMwQjtBQUVsRSxNQUFNRywyQkFBMkIsSUFBTTtJQUNyQyxNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR0osK0NBQVFBLENBQUM7UUFDckM7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7S0FDRDtJQUVELE1BQU0sQ0FBQ0ssZUFBZUMsaUJBQWlCLEdBQUdOLCtDQUFRQSxDQUFDO0lBRW5ELE1BQU1PLGVBQWUsSUFBTTtRQUN6QixNQUFNQyxlQUFlTCxPQUFPLENBQUNNLEtBQUtDLEtBQUssQ0FBQ0QsS0FBS0UsTUFBTSxLQUFLUixRQUFRUyxNQUFNLEVBQUU7UUFDeEVOLGlCQUFpQkU7SUFDbkI7SUFFQSxxQkFDRSw4REFBQ0s7UUFBSUMsV0FBV2IsNkdBQStCOzswQkFDN0MsOERBQUNlOztvQkFBRztrQ0FBd0MsOERBQUNDO3dCQUFFQyxNQUFLO3dCQUFvQkMsUUFBTztrQ0FBUzs7Ozs7Ozs7Ozs7OzBCQUN4Riw4REFBQ0M7Z0JBQUVOLFdBQVdiLDJGQUFhOztvQkFBRTtvQkFBRUk7b0JBQWM7Ozs7Ozs7MEJBQzdDLDhEQUFDaUI7Z0JBQU9SLFdBQVdiLDJGQUFhO2dCQUFFc0IsU0FBU2hCOzBCQUFjOzs7Ozs7Ozs7Ozs7QUFHL0Q7QUFFQSxpRUFBZUwsd0JBQXdCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xvbmUtdGFibmV3cy8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy9Sb21hbnRpY1BocmFzZXNDb21wb25lbnQubW9kdWxlLmNzcyc7XG5cbmNvbnN0IFJvbWFudGljUGhyYXNlc0NvbXBvbmVudCA9ICgpID0+IHtcbiAgY29uc3QgW3BocmFzZXMsIHNldFBocmFzZXNdID0gdXNlU3RhdGUoW1xuICAgIFwiTyBhbW9yIMOpIGEgZXNzw6puY2lhIGRhIHZpZGEuXCIsXG4gICAgXCJFbmNvbnRyYXIgdm9jw6ogZm9pIGEgbWVsaG9yIGNvaXNhIHF1ZSBqw6EgbWUgYWNvbnRlY2V1LlwiLFxuICAgIFwiQ2FkYSBtb21lbnRvIGFvIHNldSBsYWRvIMOpIHVtIHRlc291cm8gcHJlY2lvc28uXCIsXG4gICAgXCJTZXUgc29ycmlzbyBpbHVtaW5hIGF0w6kgbyBkaWEgbWFpcyBudWJsYWRvLlwiLFxuICAgIFwiVm9jw6ogw6kgbyBtZXUgcG9ydG8gc2VndXJvIGUgbWluaGEgaW5zcGlyYcOnw6NvIGRpw6FyaWEuXCIsXG4gICAgXCJObyBzZXUgYWJyYcOnbywgZW5jb250cm8gcGF6IGUgY29uZm9ydG8uXCIsXG4gICAgXCJPIHRlbXBvIHBhcmVjZSBwYXJhciBxdWFuZG8gZXN0YW1vcyBqdW50b3MuXCIsXG4gICAgXCJDYWRhIG9saGFyIHNldSDDqSB1bSBjb252aXRlIHBhcmEgdW0gbXVuZG8gZGUgYW1vci5cIixcbiAgICBcIk1ldSBjb3Jhw6fDo28gYmF0ZSBubyByaXRtbyBkbyBzZXUuXCIsXG4gICAgXCJWb2PDqiDDqSBhIHJhesOjbyBkbyBtZXUgc29ycmlzbyBjb25zdGFudGUuXCIsXG4gIF0pO1xuXG4gIGNvbnN0IFtjdXJyZW50UGhyYXNlLCBzZXRDdXJyZW50UGhyYXNlXSA9IHVzZVN0YXRlKCdWb2PDqiDDqSBhIHJhesOjbyBkbyBtZXUgc29ycmlzbyBjb25zdGFudGUuJyk7XG5cbiAgY29uc3QgdXBkYXRlUGhyYXNlID0gKCkgPT4ge1xuICAgIGNvbnN0IHJhbmRvbVBocmFzZSA9IHBocmFzZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcGhyYXNlcy5sZW5ndGgpXTtcbiAgICBzZXRDdXJyZW50UGhyYXNlKHJhbmRvbVBocmFzZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJvbWFudGljUGhyYXNlc0NvbXBvbmVudH0+XG4gICAgICA8aDI+RnJhc2VzIFJvbcOibnRpY2FzIHBhcmEgbyBzZXUgRGVzYWZpbyBkbyA8YSBocmVmPVwiaHR0cHM6Ly9DdXJzby5kZXZcIiB0YXJnZXQ9XCJfYmxhbmtcIj5DdXJzby5kZXY8L2E+PC9oMj5cbiAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnBocmFzZX0+XCJ7Y3VycmVudFBocmFzZX1cIjwvcD5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufSBvbkNsaWNrPXt1cGRhdGVQaHJhc2V9PkdlcmFyIGZyYXNlPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJvbWFudGljUGhyYXNlc0NvbXBvbmVudDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiUm9tYW50aWNQaHJhc2VzQ29tcG9uZW50IiwicGhyYXNlcyIsInNldFBocmFzZXMiLCJjdXJyZW50UGhyYXNlIiwic2V0Q3VycmVudFBocmFzZSIsInVwZGF0ZVBocmFzZSIsInJhbmRvbVBocmFzZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsImRpdiIsImNsYXNzTmFtZSIsInJvbWFudGljUGhyYXNlc0NvbXBvbmVudCIsImgyIiwiYSIsImhyZWYiLCJ0YXJnZXQiLCJwIiwicGhyYXNlIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
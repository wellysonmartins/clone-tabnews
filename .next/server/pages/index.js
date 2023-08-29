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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_RomanticPhrasesComponent_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/RomanticPhrasesComponent.module.css */ \"./pages/styles/RomanticPhrasesComponent.module.css\");\n/* harmony import */ var _styles_RomanticPhrasesComponent_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_RomanticPhrasesComponent_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst RomanticPhrasesComponent = ()=>{\n    const [phrases, setPhrases] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        \"O amor \\xe9 a ess\\xeancia da vida.\",\n        \"Encontrar voc\\xea foi a melhor coisa que j\\xe1 me aconteceu.\",\n        \"Cada momento ao seu lado \\xe9 um tesouro precioso.\",\n        \"Seu sorriso ilumina at\\xe9 o dia mais nublado.\",\n        \"Voc\\xea \\xe9 o meu porto seguro e minha inspira\\xe7\\xe3o di\\xe1ria.\",\n        \"No seu abra\\xe7o, encontro paz e conforto.\",\n        \"O tempo parece parar quando estamos juntos.\",\n        \"Cada olhar seu \\xe9 um convite para um mundo de amor.\",\n        \"Meu cora\\xe7\\xe3o bate no ritmo do seu.\",\n        \"Voc\\xea \\xe9 a raz\\xe3o do meu sorriso constante.\"\n    ]);\n    const [currentPhrase, setCurrentPhrase] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const updatePhrase = ()=>{\n        const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];\n        setCurrentPhrase(randomPhrase);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_RomanticPhrasesComponent_module_css__WEBPACK_IMPORTED_MODULE_2___default().romanticPhrasesComponent),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: [\n                    \"Frases Rom\\xe2nticas para o seu Desafio do \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"https://Curso.dev\",\n                        target: \"_blank\",\n                        children: \"Curso.dev\"\n                    }, void 0, false, {\n                        fileName: \"/workspaces/clone-tabnews/pages/index.js\",\n                        lineNumber: 27,\n                        columnNumber: 51\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspaces/clone-tabnews/pages/index.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_styles_RomanticPhrasesComponent_module_css__WEBPACK_IMPORTED_MODULE_2___default().phrase),\n                children: [\n                    '\"',\n                    currentPhrase,\n                    '\"'\n                ]\n            }, void 0, true, {\n                fileName: \"/workspaces/clone-tabnews/pages/index.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_styles_RomanticPhrasesComponent_module_css__WEBPACK_IMPORTED_MODULE_2___default().button),\n                onClick: updatePhrase,\n                children: \"Gerar frase\"\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/index.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/clone-tabnews/pages/index.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RomanticPhrasesComponent);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF3QztBQUMwQjtBQUVsRSxNQUFNRywyQkFBMkIsSUFBTTtJQUNyQyxNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR0osK0NBQVFBLENBQUM7UUFDckM7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7S0FDRDtJQUVELE1BQU0sQ0FBQ0ssZUFBZUMsaUJBQWlCLEdBQUdOLCtDQUFRQSxDQUFDO0lBRW5ELE1BQU1PLGVBQWUsSUFBTTtRQUN6QixNQUFNQyxlQUFlTCxPQUFPLENBQUNNLEtBQUtDLEtBQUssQ0FBQ0QsS0FBS0UsTUFBTSxLQUFLUixRQUFRUyxNQUFNLEVBQUU7UUFDeEVOLGlCQUFpQkU7SUFDbkI7SUFFQSxxQkFDRSw4REFBQ0s7UUFBSUMsV0FBV2IsNkdBQStCOzswQkFDN0MsOERBQUNlOztvQkFBRztrQ0FBd0MsOERBQUNDO3dCQUFFQyxNQUFLO3dCQUFvQkMsUUFBTztrQ0FBUzs7Ozs7Ozs7Ozs7OzBCQUN4Riw4REFBQ0M7Z0JBQUVOLFdBQVdiLDJGQUFhOztvQkFBRTtvQkFBRUk7b0JBQWM7Ozs7Ozs7MEJBQzdDLDhEQUFDaUI7Z0JBQU9SLFdBQVdiLDJGQUFhO2dCQUFFc0IsU0FBU2hCOzBCQUFjOzs7Ozs7Ozs7Ozs7QUFHL0Q7QUFFQSxpRUFBZUwsd0JBQXdCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xvbmUtdGFibmV3cy8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy9Sb21hbnRpY1BocmFzZXNDb21wb25lbnQubW9kdWxlLmNzcyc7XG5cbmNvbnN0IFJvbWFudGljUGhyYXNlc0NvbXBvbmVudCA9ICgpID0+IHtcbiAgY29uc3QgW3BocmFzZXMsIHNldFBocmFzZXNdID0gdXNlU3RhdGUoW1xuICAgIFwiTyBhbW9yIMOpIGEgZXNzw6puY2lhIGRhIHZpZGEuXCIsXG4gICAgXCJFbmNvbnRyYXIgdm9jw6ogZm9pIGEgbWVsaG9yIGNvaXNhIHF1ZSBqw6EgbWUgYWNvbnRlY2V1LlwiLFxuICAgIFwiQ2FkYSBtb21lbnRvIGFvIHNldSBsYWRvIMOpIHVtIHRlc291cm8gcHJlY2lvc28uXCIsXG4gICAgXCJTZXUgc29ycmlzbyBpbHVtaW5hIGF0w6kgbyBkaWEgbWFpcyBudWJsYWRvLlwiLFxuICAgIFwiVm9jw6ogw6kgbyBtZXUgcG9ydG8gc2VndXJvIGUgbWluaGEgaW5zcGlyYcOnw6NvIGRpw6FyaWEuXCIsXG4gICAgXCJObyBzZXUgYWJyYcOnbywgZW5jb250cm8gcGF6IGUgY29uZm9ydG8uXCIsXG4gICAgXCJPIHRlbXBvIHBhcmVjZSBwYXJhciBxdWFuZG8gZXN0YW1vcyBqdW50b3MuXCIsXG4gICAgXCJDYWRhIG9saGFyIHNldSDDqSB1bSBjb252aXRlIHBhcmEgdW0gbXVuZG8gZGUgYW1vci5cIixcbiAgICBcIk1ldSBjb3Jhw6fDo28gYmF0ZSBubyByaXRtbyBkbyBzZXUuXCIsXG4gICAgXCJWb2PDqiDDqSBhIHJhesOjbyBkbyBtZXUgc29ycmlzbyBjb25zdGFudGUuXCIsXG4gIF0pO1xuXG4gIGNvbnN0IFtjdXJyZW50UGhyYXNlLCBzZXRDdXJyZW50UGhyYXNlXSA9IHVzZVN0YXRlKCcnKTtcblxuICBjb25zdCB1cGRhdGVQaHJhc2UgPSAoKSA9PiB7XG4gICAgY29uc3QgcmFuZG9tUGhyYXNlID0gcGhyYXNlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwaHJhc2VzLmxlbmd0aCldO1xuICAgIHNldEN1cnJlbnRQaHJhc2UocmFuZG9tUGhyYXNlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucm9tYW50aWNQaHJhc2VzQ29tcG9uZW50fT5cbiAgICAgIDxoMj5GcmFzZXMgUm9tw6JudGljYXMgcGFyYSBvIHNldSBEZXNhZmlvIGRvIDxhIGhyZWY9XCJodHRwczovL0N1cnNvLmRldlwiIHRhcmdldD1cIl9ibGFua1wiPkN1cnNvLmRldjwvYT48L2gyPlxuICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucGhyYXNlfT5cIntjdXJyZW50UGhyYXNlfVwiPC9wPlxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259IG9uQ2xpY2s9e3VwZGF0ZVBocmFzZX0+R2VyYXIgZnJhc2U8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUm9tYW50aWNQaHJhc2VzQ29tcG9uZW50O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJSb21hbnRpY1BocmFzZXNDb21wb25lbnQiLCJwaHJhc2VzIiwic2V0UGhyYXNlcyIsImN1cnJlbnRQaHJhc2UiLCJzZXRDdXJyZW50UGhyYXNlIiwidXBkYXRlUGhyYXNlIiwicmFuZG9tUGhyYXNlIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwiZGl2IiwiY2xhc3NOYW1lIiwicm9tYW50aWNQaHJhc2VzQ29tcG9uZW50IiwiaDIiLCJhIiwiaHJlZiIsInRhcmdldCIsInAiLCJwaHJhc2UiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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
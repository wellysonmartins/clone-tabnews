"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_RomanticPhrasesComponent_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/RomanticPhrasesComponent.module.css */ \"./pages/styles/RomanticPhrasesComponent.module.css\");\n/* harmony import */ var _styles_RomanticPhrasesComponent_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_RomanticPhrasesComponent_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst RomanticPhrasesComponent = ()=>{\n    _s();\n    const [phrases, setPhrases] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        \"O amor \\xe9 a ess\\xeancia da vida.\",\n        \"Encontrar voc\\xea foi a melhor coisa que j\\xe1 me aconteceu.\",\n        \"Cada momento ao seu lado \\xe9 um tesouro precioso.\",\n        \"Seu sorriso ilumina at\\xe9 o dia mais nublado.\",\n        \"Voc\\xea \\xe9 o meu porto seguro e minha inspira\\xe7\\xe3o di\\xe1ria.\",\n        \"No seu abra\\xe7o, encontro paz e conforto.\",\n        \"O tempo parece parar quando estamos juntos.\",\n        \"Cada olhar seu \\xe9 um convite para um mundo de amor.\",\n        \"Meu cora\\xe7\\xe3o bate no ritmo do seu.\",\n        \"Voc\\xea \\xe9 a raz\\xe3o do meu sorriso constante.\"\n    ]);\n    const [currentPhrase, setCurrentPhrase] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const updatePhrase = ()=>{\n        const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];\n        setCurrentPhrase(randomPhrase);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_RomanticPhrasesComponent_module_css__WEBPACK_IMPORTED_MODULE_2___default().romanticPhrasesComponent),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"Frases Rom\\xe2nticas para o seu Desafio do \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"https://Curso.dev\",\n                        targe: \"_blank\",\n                        children: \"Curso.dev\"\n                    }, void 0, false, {\n                        fileName: \"/workspaces/clone-tabnews/pages/index.js\",\n                        lineNumber: 27,\n                        columnNumber: 51\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspaces/clone-tabnews/pages/index.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_styles_RomanticPhrasesComponent_module_css__WEBPACK_IMPORTED_MODULE_2___default().phrase),\n                children: currentPhrase\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/index.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_styles_RomanticPhrasesComponent_module_css__WEBPACK_IMPORTED_MODULE_2___default().button),\n                onClick: updatePhrase,\n                children: \"Gerar frase\"\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/index.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/clone-tabnews/pages/index.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, undefined);\n};\n_s(RomanticPhrasesComponent, \"lWyp5jdlpFtNeZiS4qcY+B0JiTA=\");\n_c = RomanticPhrasesComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RomanticPhrasesComponent);\nvar _c;\n$RefreshReg$(_c, \"RomanticPhrasesComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBd0M7QUFDMEI7QUFFbEUsTUFBTUcsMkJBQTJCLElBQU07O0lBQ3JDLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHSiwrQ0FBUUEsQ0FBQztRQUNyQztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtLQUNEO0lBRUQsTUFBTSxDQUFDSyxlQUFlQyxpQkFBaUIsR0FBR04sK0NBQVFBLENBQUM7SUFFbkQsTUFBTU8sZUFBZSxJQUFNO1FBQ3pCLE1BQU1DLGVBQWVMLE9BQU8sQ0FBQ00sS0FBS0MsS0FBSyxDQUFDRCxLQUFLRSxNQUFNLEtBQUtSLFFBQVFTLE1BQU0sRUFBRTtRQUN4RU4saUJBQWlCRTtJQUNuQjtJQUVBLHFCQUNFLDhEQUFDSztRQUFJQyxXQUFXYiw2R0FBK0I7OzBCQUM3Qyw4REFBQ2U7O29CQUFHO2tDQUF3Qyw4REFBQ0M7d0JBQUVDLE1BQUs7d0JBQW9CQyxPQUFNO2tDQUFTOzs7Ozs7Ozs7Ozs7MEJBQ3ZGLDhEQUFDQztnQkFBRU4sV0FBV2IsMkZBQWE7MEJBQUdJOzs7Ozs7MEJBQzlCLDhEQUFDaUI7Z0JBQU9SLFdBQVdiLDJGQUFhO2dCQUFFc0IsU0FBU2hCOzBCQUFjOzs7Ozs7Ozs7Ozs7QUFHL0Q7R0E1Qk1MO0tBQUFBO0FBOEJOLCtEQUFlQSx3QkFBd0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzL1JvbWFudGljUGhyYXNlc0NvbXBvbmVudC5tb2R1bGUuY3NzJztcblxuY29uc3QgUm9tYW50aWNQaHJhc2VzQ29tcG9uZW50ID0gKCkgPT4ge1xuICBjb25zdCBbcGhyYXNlcywgc2V0UGhyYXNlc10gPSB1c2VTdGF0ZShbXG4gICAgXCJPIGFtb3Igw6kgYSBlc3PDqm5jaWEgZGEgdmlkYS5cIixcbiAgICBcIkVuY29udHJhciB2b2PDqiBmb2kgYSBtZWxob3IgY29pc2EgcXVlIGrDoSBtZSBhY29udGVjZXUuXCIsXG4gICAgXCJDYWRhIG1vbWVudG8gYW8gc2V1IGxhZG8gw6kgdW0gdGVzb3VybyBwcmVjaW9zby5cIixcbiAgICBcIlNldSBzb3JyaXNvIGlsdW1pbmEgYXTDqSBvIGRpYSBtYWlzIG51YmxhZG8uXCIsXG4gICAgXCJWb2PDqiDDqSBvIG1ldSBwb3J0byBzZWd1cm8gZSBtaW5oYSBpbnNwaXJhw6fDo28gZGnDoXJpYS5cIixcbiAgICBcIk5vIHNldSBhYnJhw6dvLCBlbmNvbnRybyBwYXogZSBjb25mb3J0by5cIixcbiAgICBcIk8gdGVtcG8gcGFyZWNlIHBhcmFyIHF1YW5kbyBlc3RhbW9zIGp1bnRvcy5cIixcbiAgICBcIkNhZGEgb2xoYXIgc2V1IMOpIHVtIGNvbnZpdGUgcGFyYSB1bSBtdW5kbyBkZSBhbW9yLlwiLFxuICAgIFwiTWV1IGNvcmHDp8OjbyBiYXRlIG5vIHJpdG1vIGRvIHNldS5cIixcbiAgICBcIlZvY8OqIMOpIGEgcmF6w6NvIGRvIG1ldSBzb3JyaXNvIGNvbnN0YW50ZS5cIixcbiAgXSk7XG5cbiAgY29uc3QgW2N1cnJlbnRQaHJhc2UsIHNldEN1cnJlbnRQaHJhc2VdID0gdXNlU3RhdGUoJycpO1xuXG4gIGNvbnN0IHVwZGF0ZVBocmFzZSA9ICgpID0+IHtcbiAgICBjb25zdCByYW5kb21QaHJhc2UgPSBwaHJhc2VzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBocmFzZXMubGVuZ3RoKV07XG4gICAgc2V0Q3VycmVudFBocmFzZShyYW5kb21QaHJhc2UpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yb21hbnRpY1BocmFzZXNDb21wb25lbnR9PlxuICAgICAgPGgxPkZyYXNlcyBSb23Dom50aWNhcyBwYXJhIG8gc2V1IERlc2FmaW8gZG8gPGEgaHJlZj1cImh0dHBzOi8vQ3Vyc28uZGV2XCIgdGFyZ2U9XCJfYmxhbmtcIj5DdXJzby5kZXY8L2E+PC9oMT5cbiAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnBocmFzZX0+e2N1cnJlbnRQaHJhc2V9PC9wPlxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259IG9uQ2xpY2s9e3VwZGF0ZVBocmFzZX0+R2VyYXIgZnJhc2U8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUm9tYW50aWNQaHJhc2VzQ29tcG9uZW50O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJSb21hbnRpY1BocmFzZXNDb21wb25lbnQiLCJwaHJhc2VzIiwic2V0UGhyYXNlcyIsImN1cnJlbnRQaHJhc2UiLCJzZXRDdXJyZW50UGhyYXNlIiwidXBkYXRlUGhyYXNlIiwicmFuZG9tUGhyYXNlIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwiZGl2IiwiY2xhc3NOYW1lIiwicm9tYW50aWNQaHJhc2VzQ29tcG9uZW50IiwiaDEiLCJhIiwiaHJlZiIsInRhcmdlIiwicCIsInBocmFzZSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});
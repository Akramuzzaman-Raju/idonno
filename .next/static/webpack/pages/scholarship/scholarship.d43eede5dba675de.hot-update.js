"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/scholarship/scholarship",{

/***/ "./pages/scholarship/scholarship.js":
/*!******************************************!*\
  !*** ./pages/scholarship/scholarship.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Scholarship; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n//import { useState } from 'react'\n\nfunction Scholarship() {\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [scholarshipId, setsSholarshipid] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [universityName, setUniversityname] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [eligibleCourse, setEligiblecourse] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [possibleScholarship, setPossiblescholarship] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    async function createScholarship() {\n        const newScholarship = {\n            scholarshipId: scholarshipId,\n            universityName: universityName,\n            eligibleCourse: eligibleCourse,\n            possibleScholarship: possibleScholarship\n        };\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"http://localhost:3001/scholarships/scholarship\", newScholarship);\n            console.log(\"Scholarship created\", response, data);\n            setsSholarshipid(\"\");\n            setUniversityname(\"\");\n            setEligiblecourse(\"\");\n            setPossiblescholarship(\"\");\n            if (response.status === 200) {\n                console.log(\"New scholarship created\", response);\n            //window.location.href = './user/profile';\n            } else {\n                console.log(\"Error Occured\");\n            }\n        } catch (error) {\n            console.error(\"Error Occured\", error);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"page\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative z-0 w-full mb-6 group\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"scholarshipId\",\n                            id: \"scholarshipId\",\n                            value: scholarshipId,\n                            onChange: (e)=>setsSholarshipid(e.target.value),\n                            className: \"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer\",\n                            placeholder: \" \",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"/Users/raju/Desktop/nextjsproject/pages/scholarship/scholarship.js\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"scholarshipId\",\n                            className: \"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6\",\n                            children: \"Scholarship Id\"\n                        }, void 0, false, {\n                            fileName: \"/Users/raju/Desktop/nextjsproject/pages/scholarship/scholarship.js\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/raju/Desktop/nextjsproject/pages/scholarship/scholarship.js\",\n                    lineNumber: 43,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative z-0 w-full mb-6 group\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"universityName\",\n                            id: \"universityName\",\n                            value: universityName,\n                            onChange: (e)=>setUniversityname(e.target.value),\n                            className: \"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer\",\n                            placeholder: \" \",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"/Users/raju/Desktop/nextjsproject/pages/scholarship/scholarship.js\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"universityName\",\n                            className: \"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6\",\n                            children: \"University Name\"\n                        }, void 0, false, {\n                            fileName: \"/Users/raju/Desktop/nextjsproject/pages/scholarship/scholarship.js\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/raju/Desktop/nextjsproject/pages/scholarship/scholarship.js\",\n                    lineNumber: 47,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative z-0 w-full mb-6 group\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"eligibleCourse\",\n                            id: \"eligibleCourse\",\n                            value: eligibleCourse,\n                            onChange: (e)=>setEligiblecourse(e.target.value),\n                            className: \"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer\",\n                            placeholder: \" \",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"/Users/raju/Desktop/nextjsproject/pages/scholarship/scholarship.js\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"eligibleCourse\",\n                            className: \"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6\",\n                            children: \"Course Name\"\n                        }, void 0, false, {\n                            fileName: \"/Users/raju/Desktop/nextjsproject/pages/scholarship/scholarship.js\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/raju/Desktop/nextjsproject/pages/scholarship/scholarship.js\",\n                    lineNumber: 51,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative z-0 w-full mb-6 group\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"possibleScholarship\",\n                            id: \"possibleScholarship\",\n                            value: possibleScholarship,\n                            onChange: (e)=>setPossiblescholarship(e.target.value),\n                            className: \"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer\",\n                            placeholder: \" \",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"/Users/raju/Desktop/nextjsproject/pages/scholarship/scholarship.js\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"possibleScholarship\",\n                            className: \"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6\",\n                            children: \"Possible Scholarship\"\n                        }, void 0, false, {\n                            fileName: \"/Users/raju/Desktop/nextjsproject/pages/scholarship/scholarship.js\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/raju/Desktop/nextjsproject/pages/scholarship/scholarship.js\",\n                    lineNumber: 55,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"submit\",\n                    className: \"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800\",\n                    onClick: createScholarship,\n                    children: \"Add\"\n                }, void 0, false, {\n                    fileName: \"/Users/raju/Desktop/nextjsproject/pages/scholarship/scholarship.js\",\n                    lineNumber: 59,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/raju/Desktop/nextjsproject/pages/scholarship/scholarship.js\",\n            lineNumber: 42,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/raju/Desktop/nextjsproject/pages/scholarship/scholarship.js\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, this);\n}\n_s(Scholarship, \"0/VKaoYLVa4F95MEj68iuIfPAEU=\");\n_c = Scholarship;\nvar _c;\n$RefreshReg$(_c, \"Scholarship\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBOFU7Ozs7Ozs7Ozs7Ozs4QkFFalksOERBQUNjO29CQUFPWCxNQUFLO29CQUFTSCxXQUFVO29CQUF3T2UsU0FBU3hCOzhCQUFtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJMVM7R0F6RHdCWDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zY2hvbGFyc2hpcC9zY2hvbGFyc2hpcC5qcz9iODllIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9ZnJvbSAncmVhY3QnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG4vL2ltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTY2hvbGFyc2hpcCgpIHtcblxuICBjb25zdFtkYXRhLCBzZXREYXRhXT0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0W3NjaG9sYXJzaGlwSWQsIHNldHNTaG9sYXJzaGlwaWRdPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3RbdW5pdmVyc2l0eU5hbWUsc2V0VW5pdmVyc2l0eW5hbWVdPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3RbZWxpZ2libGVDb3Vyc2Usc2V0RWxpZ2libGVjb3Vyc2VdPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3RbcG9zc2libGVTY2hvbGFyc2hpcCxzZXRQb3NzaWJsZXNjaG9sYXJzaGlwXT0gdXNlU3RhdGUoJycpO1xuICAgIGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVNjaG9sYXJzaGlwKCl7XG4gICAgICAgIGNvbnN0IG5ld1NjaG9sYXJzaGlwPXtcbiAgICAgICAgICBzY2hvbGFyc2hpcElkOiBzY2hvbGFyc2hpcElkLFxuICAgICAgICAgIHVuaXZlcnNpdHlOYW1lOiB1bml2ZXJzaXR5TmFtZSxcbiAgICAgICAgICBlbGlnaWJsZUNvdXJzZTogZWxpZ2libGVDb3Vyc2UsXG4gICAgICAgICAgcG9zc2libGVTY2hvbGFyc2hpcDogcG9zc2libGVTY2hvbGFyc2hpcCxcblxuICAgICAgICB9O1xuICAgICAgICB0cnl7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9zY2hvbGFyc2hpcHMvc2Nob2xhcnNoaXAnLG5ld1NjaG9sYXJzaGlwKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2Nob2xhcnNoaXAgY3JlYXRlZFwiLCByZXNwb25zZSxkYXRhKTtcbiAgICAgICAgICAgIHNldHNTaG9sYXJzaGlwaWQoJycpO1xuICAgICAgICAgICAgc2V0VW5pdmVyc2l0eW5hbWUoJycpO1xuICAgICAgICAgICAgc2V0RWxpZ2libGVjb3Vyc2UoJycpO1xuICAgICAgICAgICAgc2V0UG9zc2libGVzY2hvbGFyc2hpcCgnJyk7XG5cbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTmV3IHNjaG9sYXJzaGlwIGNyZWF0ZWQnLCByZXNwb25zZSk7XG4gICAgICAgICAgICAgIC8vd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnLi91c2VyL3Byb2ZpbGUnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIE9jY3VyZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaChlcnJvcil7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgT2NjdXJlZFwiLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2VcIj5cbiAgICA8Zm9ybT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgei0wIHctZnVsbCBtYi02IGdyb3VwXCI+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInNjaG9sYXJzaGlwSWRcIiBpZD1cInNjaG9sYXJzaGlwSWRcIiB2YWx1ZT17c2Nob2xhcnNoaXBJZH0gb25DaGFuZ2U9eyhlKSA9PiBzZXRzU2hvbGFyc2hpcGlkKGUudGFyZ2V0LnZhbHVlKX0gY2xhc3NOYW1lPVwiYmxvY2sgcHktMi41IHB4LTAgdy1mdWxsIHRleHQtc20gdGV4dC1ncmF5LTkwMCBiZy10cmFuc3BhcmVudCBib3JkZXItMCBib3JkZXItYi0yIGJvcmRlci1ncmF5LTMwMCBhcHBlYXJhbmNlLW5vbmUgZGFyazp0ZXh0LXdoaXRlIGRhcms6Ym9yZGVyLWdyYXktNjAwIGRhcms6Zm9jdXM6Ym9yZGVyLWJsdWUtNTAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTAgZm9jdXM6Ym9yZGVyLWJsdWUtNjAwIHBlZXJcIiBwbGFjZWhvbGRlcj1cIiBcIiByZXF1aXJlZCAvPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic2Nob2xhcnNoaXBJZFwiIGNsYXNzTmFtZT1cInBlZXItZm9jdXM6Zm9udC1tZWRpdW0gYWJzb2x1dGUgdGV4dC1zbSB0ZXh0LWdyYXktNTAwIGRhcms6dGV4dC1ncmF5LTQwMCBkdXJhdGlvbi0zMDAgdHJhbnNmb3JtIC10cmFuc2xhdGUteS02IHNjYWxlLTc1IHRvcC0zIC16LTEwIG9yaWdpbi1bMF0gcGVlci1mb2N1czpsZWZ0LTAgcGVlci1mb2N1czp0ZXh0LWJsdWUtNjAwIHBlZXItZm9jdXM6ZGFyazp0ZXh0LWJsdWUtNTAwIHBlZXItcGxhY2Vob2xkZXItc2hvd246c2NhbGUtMTAwIHBlZXItcGxhY2Vob2xkZXItc2hvd246dHJhbnNsYXRlLXktMCBwZWVyLWZvY3VzOnNjYWxlLTc1IHBlZXItZm9jdXM6LXRyYW5zbGF0ZS15LTZcIj5TY2hvbGFyc2hpcCBJZDwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgei0wIHctZnVsbCBtYi02IGdyb3VwXCI+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInVuaXZlcnNpdHlOYW1lXCIgaWQ9XCJ1bml2ZXJzaXR5TmFtZVwiIHZhbHVlPXt1bml2ZXJzaXR5TmFtZX0gb25DaGFuZ2U9eyhlKSA9PiBzZXRVbml2ZXJzaXR5bmFtZShlLnRhcmdldC52YWx1ZSl9IGNsYXNzTmFtZT1cImJsb2NrIHB5LTIuNSBweC0wIHctZnVsbCB0ZXh0LXNtIHRleHQtZ3JheS05MDAgYmctdHJhbnNwYXJlbnQgYm9yZGVyLTAgYm9yZGVyLWItMiBib3JkZXItZ3JheS0zMDAgYXBwZWFyYW5jZS1ub25lIGRhcms6dGV4dC13aGl0ZSBkYXJrOmJvcmRlci1ncmF5LTYwMCBkYXJrOmZvY3VzOmJvcmRlci1ibHVlLTUwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0wIGZvY3VzOmJvcmRlci1ibHVlLTYwMCBwZWVyXCIgcGxhY2Vob2xkZXI9XCIgXCIgcmVxdWlyZWQgLz5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVuaXZlcnNpdHlOYW1lXCIgY2xhc3NOYW1lPVwicGVlci1mb2N1czpmb250LW1lZGl1bSBhYnNvbHV0ZSB0ZXh0LXNtIHRleHQtZ3JheS01MDAgZGFyazp0ZXh0LWdyYXktNDAwIGR1cmF0aW9uLTMwMCB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS15LTYgc2NhbGUtNzUgdG9wLTMgLXotMTAgb3JpZ2luLVswXSBwZWVyLWZvY3VzOmxlZnQtMCBwZWVyLWZvY3VzOnRleHQtYmx1ZS02MDAgcGVlci1mb2N1czpkYXJrOnRleHQtYmx1ZS01MDAgcGVlci1wbGFjZWhvbGRlci1zaG93bjpzY2FsZS0xMDAgcGVlci1wbGFjZWhvbGRlci1zaG93bjp0cmFuc2xhdGUteS0wIHBlZXItZm9jdXM6c2NhbGUtNzUgcGVlci1mb2N1czotdHJhbnNsYXRlLXktNlwiPlVuaXZlcnNpdHkgTmFtZTwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgei0wIHctZnVsbCBtYi02IGdyb3VwXCI+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImVsaWdpYmxlQ291cnNlXCIgaWQ9XCJlbGlnaWJsZUNvdXJzZVwiIHZhbHVlPXtlbGlnaWJsZUNvdXJzZX0gb25DaGFuZ2U9eyhlKSA9PiBzZXRFbGlnaWJsZWNvdXJzZShlLnRhcmdldC52YWx1ZSl9IGNsYXNzTmFtZT1cImJsb2NrIHB5LTIuNSBweC0wIHctZnVsbCB0ZXh0LXNtIHRleHQtZ3JheS05MDAgYmctdHJhbnNwYXJlbnQgYm9yZGVyLTAgYm9yZGVyLWItMiBib3JkZXItZ3JheS0zMDAgYXBwZWFyYW5jZS1ub25lIGRhcms6dGV4dC13aGl0ZSBkYXJrOmJvcmRlci1ncmF5LTYwMCBkYXJrOmZvY3VzOmJvcmRlci1ibHVlLTUwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0wIGZvY3VzOmJvcmRlci1ibHVlLTYwMCBwZWVyXCIgcGxhY2Vob2xkZXI9XCIgXCIgcmVxdWlyZWQgLz5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVsaWdpYmxlQ291cnNlXCIgY2xhc3NOYW1lPVwicGVlci1mb2N1czpmb250LW1lZGl1bSBhYnNvbHV0ZSB0ZXh0LXNtIHRleHQtZ3JheS01MDAgZGFyazp0ZXh0LWdyYXktNDAwIGR1cmF0aW9uLTMwMCB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS15LTYgc2NhbGUtNzUgdG9wLTMgLXotMTAgb3JpZ2luLVswXSBwZWVyLWZvY3VzOmxlZnQtMCBwZWVyLWZvY3VzOnRleHQtYmx1ZS02MDAgcGVlci1mb2N1czpkYXJrOnRleHQtYmx1ZS01MDAgcGVlci1wbGFjZWhvbGRlci1zaG93bjpzY2FsZS0xMDAgcGVlci1wbGFjZWhvbGRlci1zaG93bjp0cmFuc2xhdGUteS0wIHBlZXItZm9jdXM6c2NhbGUtNzUgcGVlci1mb2N1czotdHJhbnNsYXRlLXktNlwiPkNvdXJzZSBOYW1lPC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB6LTAgdy1mdWxsIG1iLTYgZ3JvdXBcIj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwicG9zc2libGVTY2hvbGFyc2hpcFwiIGlkPVwicG9zc2libGVTY2hvbGFyc2hpcFwiIHZhbHVlPXtwb3NzaWJsZVNjaG9sYXJzaGlwfSBvbkNoYW5nZT17KGUpID0+IHNldFBvc3NpYmxlc2Nob2xhcnNoaXAoZS50YXJnZXQudmFsdWUpfSBjbGFzc05hbWU9XCJibG9jayBweS0yLjUgcHgtMCB3LWZ1bGwgdGV4dC1zbSB0ZXh0LWdyYXktOTAwIGJnLXRyYW5zcGFyZW50IGJvcmRlci0wIGJvcmRlci1iLTIgYm9yZGVyLWdyYXktMzAwIGFwcGVhcmFuY2Utbm9uZSBkYXJrOnRleHQtd2hpdGUgZGFyazpib3JkZXItZ3JheS02MDAgZGFyazpmb2N1czpib3JkZXItYmx1ZS01MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMCBmb2N1czpib3JkZXItYmx1ZS02MDAgcGVlclwiIHBsYWNlaG9sZGVyPVwiIFwiIHJlcXVpcmVkIC8+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwb3NzaWJsZVNjaG9sYXJzaGlwXCIgY2xhc3NOYW1lPVwicGVlci1mb2N1czpmb250LW1lZGl1bSBhYnNvbHV0ZSB0ZXh0LXNtIHRleHQtZ3JheS01MDAgZGFyazp0ZXh0LWdyYXktNDAwIGR1cmF0aW9uLTMwMCB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS15LTYgc2NhbGUtNzUgdG9wLTMgLXotMTAgb3JpZ2luLVswXSBwZWVyLWZvY3VzOmxlZnQtMCBwZWVyLWZvY3VzOnRleHQtYmx1ZS02MDAgcGVlci1mb2N1czpkYXJrOnRleHQtYmx1ZS01MDAgcGVlci1wbGFjZWhvbGRlci1zaG93bjpzY2FsZS0xMDAgcGVlci1wbGFjZWhvbGRlci1zaG93bjp0cmFuc2xhdGUteS0wIHBlZXItZm9jdXM6c2NhbGUtNzUgcGVlci1mb2N1czotdHJhbnNsYXRlLXktNlwiPlBvc3NpYmxlIFNjaG9sYXJzaGlwPC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBiZy1ibHVlLTcwMCBob3ZlcjpiZy1ibHVlLTgwMCBmb2N1czpyaW5nLTQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctYmx1ZS0zMDAgZm9udC1tZWRpdW0gcm91bmRlZC1sZyB0ZXh0LXNtIHctZnVsbCBzbTp3LWF1dG8gcHgtNSBweS0yLjUgdGV4dC1jZW50ZXIgZGFyazpiZy1ibHVlLTYwMCBkYXJrOmhvdmVyOmJnLWJsdWUtNzAwIGRhcms6Zm9jdXM6cmluZy1ibHVlLTgwMFwiIG9uQ2xpY2s9e2NyZWF0ZVNjaG9sYXJzaGlwfT5BZGQ8L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJMaW5rIiwiU2Nob2xhcnNoaXAiLCJkYXRhIiwic2V0RGF0YSIsInNjaG9sYXJzaGlwSWQiLCJzZXRzU2hvbGFyc2hpcGlkIiwidW5pdmVyc2l0eU5hbWUiLCJzZXRVbml2ZXJzaXR5bmFtZSIsImVsaWdpYmxlQ291cnNlIiwic2V0RWxpZ2libGVjb3Vyc2UiLCJwb3NzaWJsZVNjaG9sYXJzaGlwIiwic2V0UG9zc2libGVzY2hvbGFyc2hpcCIsImNyZWF0ZVNjaG9sYXJzaGlwIiwibmV3U2Nob2xhcnNoaXAiLCJyZXNwb25zZSIsInBvc3QiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwiaW5wdXQiLCJ0eXBlIiwibmFtZSIsImlkIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwibGFiZWwiLCJodG1sRm9yIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/scholarship/scholarship.js\n"));

/***/ })

});
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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Scholarship; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n//import { useState } from 'react'\n\nfunction Scholarship() {\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [scholarshipId, setsSholarshipid] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [universityName, setUniversityname] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [eligibleCourse, setEligiblecourse] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [possibleScholarship, setPossiblescholarship] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    async function createScholarship() {\n        const newScholarship = {\n            scholarshipId: scholarshipId,\n            universityName: universityName,\n            eligibleCourse: eligibleCourse,\n            possibleScholarship: possibleScholarship\n        };\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"http://localhost:3001/scholarships/scholarship\", newScholarship);\n            console.log(\"Scholarship created\", response, data);\n            setsSholarshipid(\"\");\n            setUniversityname(\"\");\n            setEligiblecourse(\"\");\n            setPossiblescholarship(\"\");\n            if (response.status === 201) {\n                //console.log('New scholarship created', response);\n                window.location.href = \"../user/profile\";\n            } else {\n                console.log(\"Error Occured\");\n            }\n        } catch (error) {\n            console.error(\"Error Occured\", error);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"page\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative z-0 w-full mb-6 group\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"scholarshipId\",\n                            id: \"scholarshipId\",\n                            value: scholarshipId,\n                            onChange: (e)=>setsSholarshipid(e.target.value),\n                            className: \"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer\",\n                            placeholder: \" \",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"/Users/raju/Desktop/nextjsproject/pages/scholarship/scholarship.js\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"scholarshipId\",\n                            className: \"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6\",\n                            children: \"Scholarship Id\"\n                        }, void 0, false, {\n                            fileName: \"/Users/raju/Desktop/nextjsproject/pages/scholarship/scholarship.js\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/raju/Desktop/nextjsproject/pages/scholarship/scholarship.js\",\n                    lineNumber: 43,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative z-0 w-full mb-6 group\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"universityName\",\n                            id: \"universityName\",\n                            value: universityName,\n                            onChange: (e)=>setUniversityname(e.target.value),\n                            className: \"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer\",\n                            placeholder: \" \",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"/Users/raju/Desktop/nextjsproject/pages/scholarship/scholarship.js\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"universityName\",\n                            className: \"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6\",\n                            children: \"University Name\"\n                        }, void 0, false, {\n                            fileName: \"/Users/raju/Desktop/nextjsproject/pages/scholarship/scholarship.js\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/raju/Desktop/nextjsproject/pages/scholarship/scholarship.js\",\n                    lineNumber: 47,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative z-0 w-full mb-6 group\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"eligibleCourse\",\n                            id: \"eligibleCourse\",\n                            value: eligibleCourse,\n                            onChange: (e)=>setEligiblecourse(e.target.value),\n                            className: \"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer\",\n                            placeholder: \" \",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"/Users/raju/Desktop/nextjsproject/pages/scholarship/scholarship.js\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"eligibleCourse\",\n                            className: \"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6\",\n                            children: \"Course Name\"\n                        }, void 0, false, {\n                            fileName: \"/Users/raju/Desktop/nextjsproject/pages/scholarship/scholarship.js\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/raju/Desktop/nextjsproject/pages/scholarship/scholarship.js\",\n                    lineNumber: 51,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative z-0 w-full mb-6 group\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"possibleScholarship\",\n                            id: \"possibleScholarship\",\n                            value: possibleScholarship,\n                            onChange: (e)=>setPossiblescholarship(e.target.value),\n                            className: \"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer\",\n                            placeholder: \" \",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"/Users/raju/Desktop/nextjsproject/pages/scholarship/scholarship.js\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"possibleScholarship\",\n                            className: \"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6\",\n                            children: \"Possible Scholarship\"\n                        }, void 0, false, {\n                            fileName: \"/Users/raju/Desktop/nextjsproject/pages/scholarship/scholarship.js\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/raju/Desktop/nextjsproject/pages/scholarship/scholarship.js\",\n                    lineNumber: 55,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"submit\",\n                    className: \"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800\",\n                    onClick: createScholarship,\n                    children: \"Add\"\n                }, void 0, false, {\n                    fileName: \"/Users/raju/Desktop/nextjsproject/pages/scholarship/scholarship.js\",\n                    lineNumber: 59,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/raju/Desktop/nextjsproject/pages/scholarship/scholarship.js\",\n            lineNumber: 42,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/raju/Desktop/nextjsproject/pages/scholarship/scholarship.js\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, this);\n}\n_s(Scholarship, \"0/VKaoYLVa4F95MEj68iuIfPAEU=\");\n_c = Scholarship;\nvar _c;\n$RefreshReg$(_c, \"Scholarship\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zY2hvbGFyc2hpcC9zY2hvbGFyc2hpcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ2I7QUFDekIsa0NBQWtDO0FBQ0w7QUFFZCxTQUFTSTs7SUFFdEIsTUFBSyxDQUFDQyxNQUFNQyxRQUFRLEdBQUVMLCtDQUFRQSxDQUFDO0lBQzdCLE1BQUssQ0FBQ00sZUFBZUMsaUJBQWlCLEdBQUVQLCtDQUFRQSxDQUFDO0lBQ2pELE1BQUssQ0FBQ1EsZ0JBQWVDLGtCQUFrQixHQUFFVCwrQ0FBUUEsQ0FBQztJQUNsRCxNQUFLLENBQUNVLGdCQUFlQyxrQkFBa0IsR0FBRVgsK0NBQVFBLENBQUM7SUFDbEQsTUFBSyxDQUFDWSxxQkFBb0JDLHVCQUF1QixHQUFFYiwrQ0FBUUEsQ0FBQztJQUM1RCxlQUFlYztRQUNYLE1BQU1DLGlCQUFlO1lBQ25CVCxlQUFlQTtZQUNmRSxnQkFBZ0JBO1lBQ2hCRSxnQkFBZ0JBO1lBQ2hCRSxxQkFBcUJBO1FBRXZCO1FBQ0EsSUFBRztZQUNDLE1BQU1JLFdBQVcsTUFBTWYsa0RBQVUsQ0FBQyxrREFBaURjO1lBQ25GRyxRQUFRQyxHQUFHLENBQUMsdUJBQXVCSCxVQUFTWjtZQUM1Q0csaUJBQWlCO1lBQ2pCRSxrQkFBa0I7WUFDbEJFLGtCQUFrQjtZQUNsQkUsdUJBQXVCO1lBRXZCLElBQUlHLFNBQVNJLE1BQU0sS0FBSyxLQUFLO2dCQUMzQixtREFBbUQ7Z0JBQ25EQyxPQUFPQyxRQUFRLENBQUNDLElBQUksR0FBRztZQUN6QixPQUFPO2dCQUNMTCxRQUFRQyxHQUFHLENBQUM7WUFDZDtRQUNKLEVBQ0EsT0FBTUssT0FBTTtZQUNSTixRQUFRTSxLQUFLLENBQUMsaUJBQWlCQTtRQUNuQztJQUNGO0lBQ0oscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ2YsNEVBQUNDOzs4QkFDQyw4REFBQ0Y7b0JBQUlDLFdBQVU7O3NDQUNYLDhEQUFDRTs0QkFBTUMsTUFBSzs0QkFBT0MsTUFBSzs0QkFBZ0JDLElBQUc7NEJBQWdCQyxPQUFPMUI7NEJBQWUyQixVQUFVLENBQUNDLElBQU0zQixpQkFBaUIyQixFQUFFQyxNQUFNLENBQUNILEtBQUs7NEJBQUdOLFdBQVU7NEJBQStPVSxhQUFZOzRCQUFJQyxRQUFROzs7Ozs7c0NBQ3JaLDhEQUFDQzs0QkFBTUMsU0FBUTs0QkFBZ0JiLFdBQVU7c0NBQThVOzs7Ozs7Ozs7Ozs7OEJBRTNYLDhEQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ1gsOERBQUNFOzRCQUFNQyxNQUFLOzRCQUFPQyxNQUFLOzRCQUFpQkMsSUFBRzs0QkFBaUJDLE9BQU94Qjs0QkFBZ0J5QixVQUFVLENBQUNDLElBQU16QixrQkFBa0J5QixFQUFFQyxNQUFNLENBQUNILEtBQUs7NEJBQUdOLFdBQVU7NEJBQStPVSxhQUFZOzRCQUFJQyxRQUFROzs7Ozs7c0NBQ3paLDhEQUFDQzs0QkFBTUMsU0FBUTs0QkFBaUJiLFdBQVU7c0NBQThVOzs7Ozs7Ozs7Ozs7OEJBRTVYLDhEQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ1gsOERBQUNFOzRCQUFNQyxNQUFLOzRCQUFPQyxNQUFLOzRCQUFpQkMsSUFBRzs0QkFBaUJDLE9BQU90Qjs0QkFBZ0J1QixVQUFVLENBQUNDLElBQU12QixrQkFBa0J1QixFQUFFQyxNQUFNLENBQUNILEtBQUs7NEJBQUdOLFdBQVU7NEJBQStPVSxhQUFZOzRCQUFJQyxRQUFROzs7Ozs7c0NBQ3paLDhEQUFDQzs0QkFBTUMsU0FBUTs0QkFBaUJiLFdBQVU7c0NBQThVOzs7Ozs7Ozs7Ozs7OEJBRTVYLDhEQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ1gsOERBQUNFOzRCQUFNQyxNQUFLOzRCQUFPQyxNQUFLOzRCQUFzQkMsSUFBRzs0QkFBc0JDLE9BQU9wQjs0QkFBcUJxQixVQUFVLENBQUNDLElBQU1yQix1QkFBdUJxQixFQUFFQyxNQUFNLENBQUNILEtBQUs7NEJBQUdOLFdBQVU7NEJBQStPVSxhQUFZOzRCQUFJQyxRQUFROzs7Ozs7c0NBQzdhLDhEQUFDQzs0QkFBTUMsU0FBUTs0QkFBc0JiLFdBQVU7c0NBQThVOzs7Ozs7Ozs7Ozs7OEJBRWpZLDhEQUFDYztvQkFBT1gsTUFBSztvQkFBU0gsV0FBVTtvQkFBd09lLFNBQVMzQjs4QkFBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTFTO0dBekR3Qlg7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2Nob2xhcnNoaXAvc2Nob2xhcnNoaXAuanM/Yjg5ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfWZyb20gJ3JlYWN0J1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuLy9pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2Nob2xhcnNoaXAoKSB7XG5cbiAgY29uc3RbZGF0YSwgc2V0RGF0YV09IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdFtzY2hvbGFyc2hpcElkLCBzZXRzU2hvbGFyc2hpcGlkXT0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0W3VuaXZlcnNpdHlOYW1lLHNldFVuaXZlcnNpdHluYW1lXT0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0W2VsaWdpYmxlQ291cnNlLHNldEVsaWdpYmxlY291cnNlXT0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0W3Bvc3NpYmxlU2Nob2xhcnNoaXAsc2V0UG9zc2libGVzY2hvbGFyc2hpcF09IHVzZVN0YXRlKCcnKTtcbiAgICBhc3luYyBmdW5jdGlvbiBjcmVhdGVTY2hvbGFyc2hpcCgpe1xuICAgICAgICBjb25zdCBuZXdTY2hvbGFyc2hpcD17XG4gICAgICAgICAgc2Nob2xhcnNoaXBJZDogc2Nob2xhcnNoaXBJZCxcbiAgICAgICAgICB1bml2ZXJzaXR5TmFtZTogdW5pdmVyc2l0eU5hbWUsXG4gICAgICAgICAgZWxpZ2libGVDb3Vyc2U6IGVsaWdpYmxlQ291cnNlLFxuICAgICAgICAgIHBvc3NpYmxlU2Nob2xhcnNoaXA6IHBvc3NpYmxlU2Nob2xhcnNoaXAsXG5cbiAgICAgICAgfTtcbiAgICAgICAgdHJ5e1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDEvc2Nob2xhcnNoaXBzL3NjaG9sYXJzaGlwJyxuZXdTY2hvbGFyc2hpcCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNjaG9sYXJzaGlwIGNyZWF0ZWRcIiwgcmVzcG9uc2UsZGF0YSk7XG4gICAgICAgICAgICBzZXRzU2hvbGFyc2hpcGlkKCcnKTtcbiAgICAgICAgICAgIHNldFVuaXZlcnNpdHluYW1lKCcnKTtcbiAgICAgICAgICAgIHNldEVsaWdpYmxlY291cnNlKCcnKTtcbiAgICAgICAgICAgIHNldFBvc3NpYmxlc2Nob2xhcnNoaXAoJycpO1xuXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDEpIHtcbiAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnTmV3IHNjaG9sYXJzaGlwIGNyZWF0ZWQnLCByZXNwb25zZSk7XG4gICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy4uL3VzZXIvcHJvZmlsZSc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgT2NjdXJlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoKGVycm9yKXtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBPY2N1cmVkXCIsIGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZVwiPlxuICAgIDxmb3JtPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB6LTAgdy1mdWxsIG1iLTYgZ3JvdXBcIj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwic2Nob2xhcnNoaXBJZFwiIGlkPVwic2Nob2xhcnNoaXBJZFwiIHZhbHVlPXtzY2hvbGFyc2hpcElkfSBvbkNoYW5nZT17KGUpID0+IHNldHNTaG9sYXJzaGlwaWQoZS50YXJnZXQudmFsdWUpfSBjbGFzc05hbWU9XCJibG9jayBweS0yLjUgcHgtMCB3LWZ1bGwgdGV4dC1zbSB0ZXh0LWdyYXktOTAwIGJnLXRyYW5zcGFyZW50IGJvcmRlci0wIGJvcmRlci1iLTIgYm9yZGVyLWdyYXktMzAwIGFwcGVhcmFuY2Utbm9uZSBkYXJrOnRleHQtd2hpdGUgZGFyazpib3JkZXItZ3JheS02MDAgZGFyazpmb2N1czpib3JkZXItYmx1ZS01MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMCBmb2N1czpib3JkZXItYmx1ZS02MDAgcGVlclwiIHBsYWNlaG9sZGVyPVwiIFwiIHJlcXVpcmVkIC8+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzY2hvbGFyc2hpcElkXCIgY2xhc3NOYW1lPVwicGVlci1mb2N1czpmb250LW1lZGl1bSBhYnNvbHV0ZSB0ZXh0LXNtIHRleHQtZ3JheS01MDAgZGFyazp0ZXh0LWdyYXktNDAwIGR1cmF0aW9uLTMwMCB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS15LTYgc2NhbGUtNzUgdG9wLTMgLXotMTAgb3JpZ2luLVswXSBwZWVyLWZvY3VzOmxlZnQtMCBwZWVyLWZvY3VzOnRleHQtYmx1ZS02MDAgcGVlci1mb2N1czpkYXJrOnRleHQtYmx1ZS01MDAgcGVlci1wbGFjZWhvbGRlci1zaG93bjpzY2FsZS0xMDAgcGVlci1wbGFjZWhvbGRlci1zaG93bjp0cmFuc2xhdGUteS0wIHBlZXItZm9jdXM6c2NhbGUtNzUgcGVlci1mb2N1czotdHJhbnNsYXRlLXktNlwiPlNjaG9sYXJzaGlwIElkPC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB6LTAgdy1mdWxsIG1iLTYgZ3JvdXBcIj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidW5pdmVyc2l0eU5hbWVcIiBpZD1cInVuaXZlcnNpdHlOYW1lXCIgdmFsdWU9e3VuaXZlcnNpdHlOYW1lfSBvbkNoYW5nZT17KGUpID0+IHNldFVuaXZlcnNpdHluYW1lKGUudGFyZ2V0LnZhbHVlKX0gY2xhc3NOYW1lPVwiYmxvY2sgcHktMi41IHB4LTAgdy1mdWxsIHRleHQtc20gdGV4dC1ncmF5LTkwMCBiZy10cmFuc3BhcmVudCBib3JkZXItMCBib3JkZXItYi0yIGJvcmRlci1ncmF5LTMwMCBhcHBlYXJhbmNlLW5vbmUgZGFyazp0ZXh0LXdoaXRlIGRhcms6Ym9yZGVyLWdyYXktNjAwIGRhcms6Zm9jdXM6Ym9yZGVyLWJsdWUtNTAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTAgZm9jdXM6Ym9yZGVyLWJsdWUtNjAwIHBlZXJcIiBwbGFjZWhvbGRlcj1cIiBcIiByZXF1aXJlZCAvPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidW5pdmVyc2l0eU5hbWVcIiBjbGFzc05hbWU9XCJwZWVyLWZvY3VzOmZvbnQtbWVkaXVtIGFic29sdXRlIHRleHQtc20gdGV4dC1ncmF5LTUwMCBkYXJrOnRleHQtZ3JheS00MDAgZHVyYXRpb24tMzAwIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXktNiBzY2FsZS03NSB0b3AtMyAtei0xMCBvcmlnaW4tWzBdIHBlZXItZm9jdXM6bGVmdC0wIHBlZXItZm9jdXM6dGV4dC1ibHVlLTYwMCBwZWVyLWZvY3VzOmRhcms6dGV4dC1ibHVlLTUwMCBwZWVyLXBsYWNlaG9sZGVyLXNob3duOnNjYWxlLTEwMCBwZWVyLXBsYWNlaG9sZGVyLXNob3duOnRyYW5zbGF0ZS15LTAgcGVlci1mb2N1czpzY2FsZS03NSBwZWVyLWZvY3VzOi10cmFuc2xhdGUteS02XCI+VW5pdmVyc2l0eSBOYW1lPC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB6LTAgdy1mdWxsIG1iLTYgZ3JvdXBcIj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZWxpZ2libGVDb3Vyc2VcIiBpZD1cImVsaWdpYmxlQ291cnNlXCIgdmFsdWU9e2VsaWdpYmxlQ291cnNlfSBvbkNoYW5nZT17KGUpID0+IHNldEVsaWdpYmxlY291cnNlKGUudGFyZ2V0LnZhbHVlKX0gY2xhc3NOYW1lPVwiYmxvY2sgcHktMi41IHB4LTAgdy1mdWxsIHRleHQtc20gdGV4dC1ncmF5LTkwMCBiZy10cmFuc3BhcmVudCBib3JkZXItMCBib3JkZXItYi0yIGJvcmRlci1ncmF5LTMwMCBhcHBlYXJhbmNlLW5vbmUgZGFyazp0ZXh0LXdoaXRlIGRhcms6Ym9yZGVyLWdyYXktNjAwIGRhcms6Zm9jdXM6Ym9yZGVyLWJsdWUtNTAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTAgZm9jdXM6Ym9yZGVyLWJsdWUtNjAwIHBlZXJcIiBwbGFjZWhvbGRlcj1cIiBcIiByZXF1aXJlZCAvPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZWxpZ2libGVDb3Vyc2VcIiBjbGFzc05hbWU9XCJwZWVyLWZvY3VzOmZvbnQtbWVkaXVtIGFic29sdXRlIHRleHQtc20gdGV4dC1ncmF5LTUwMCBkYXJrOnRleHQtZ3JheS00MDAgZHVyYXRpb24tMzAwIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXktNiBzY2FsZS03NSB0b3AtMyAtei0xMCBvcmlnaW4tWzBdIHBlZXItZm9jdXM6bGVmdC0wIHBlZXItZm9jdXM6dGV4dC1ibHVlLTYwMCBwZWVyLWZvY3VzOmRhcms6dGV4dC1ibHVlLTUwMCBwZWVyLXBsYWNlaG9sZGVyLXNob3duOnNjYWxlLTEwMCBwZWVyLXBsYWNlaG9sZGVyLXNob3duOnRyYW5zbGF0ZS15LTAgcGVlci1mb2N1czpzY2FsZS03NSBwZWVyLWZvY3VzOi10cmFuc2xhdGUteS02XCI+Q291cnNlIE5hbWU8L2xhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHotMCB3LWZ1bGwgbWItNiBncm91cFwiPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJwb3NzaWJsZVNjaG9sYXJzaGlwXCIgaWQ9XCJwb3NzaWJsZVNjaG9sYXJzaGlwXCIgdmFsdWU9e3Bvc3NpYmxlU2Nob2xhcnNoaXB9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0UG9zc2libGVzY2hvbGFyc2hpcChlLnRhcmdldC52YWx1ZSl9IGNsYXNzTmFtZT1cImJsb2NrIHB5LTIuNSBweC0wIHctZnVsbCB0ZXh0LXNtIHRleHQtZ3JheS05MDAgYmctdHJhbnNwYXJlbnQgYm9yZGVyLTAgYm9yZGVyLWItMiBib3JkZXItZ3JheS0zMDAgYXBwZWFyYW5jZS1ub25lIGRhcms6dGV4dC13aGl0ZSBkYXJrOmJvcmRlci1ncmF5LTYwMCBkYXJrOmZvY3VzOmJvcmRlci1ibHVlLTUwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0wIGZvY3VzOmJvcmRlci1ibHVlLTYwMCBwZWVyXCIgcGxhY2Vob2xkZXI9XCIgXCIgcmVxdWlyZWQgLz5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBvc3NpYmxlU2Nob2xhcnNoaXBcIiBjbGFzc05hbWU9XCJwZWVyLWZvY3VzOmZvbnQtbWVkaXVtIGFic29sdXRlIHRleHQtc20gdGV4dC1ncmF5LTUwMCBkYXJrOnRleHQtZ3JheS00MDAgZHVyYXRpb24tMzAwIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXktNiBzY2FsZS03NSB0b3AtMyAtei0xMCBvcmlnaW4tWzBdIHBlZXItZm9jdXM6bGVmdC0wIHBlZXItZm9jdXM6dGV4dC1ibHVlLTYwMCBwZWVyLWZvY3VzOmRhcms6dGV4dC1ibHVlLTUwMCBwZWVyLXBsYWNlaG9sZGVyLXNob3duOnNjYWxlLTEwMCBwZWVyLXBsYWNlaG9sZGVyLXNob3duOnRyYW5zbGF0ZS15LTAgcGVlci1mb2N1czpzY2FsZS03NSBwZWVyLWZvY3VzOi10cmFuc2xhdGUteS02XCI+UG9zc2libGUgU2Nob2xhcnNoaXA8L2xhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGJnLWJsdWUtNzAwIGhvdmVyOmJnLWJsdWUtODAwIGZvY3VzOnJpbmctNCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy1ibHVlLTMwMCBmb250LW1lZGl1bSByb3VuZGVkLWxnIHRleHQtc20gdy1mdWxsIHNtOnctYXV0byBweC01IHB5LTIuNSB0ZXh0LWNlbnRlciBkYXJrOmJnLWJsdWUtNjAwIGRhcms6aG92ZXI6YmctYmx1ZS03MDAgZGFyazpmb2N1czpyaW5nLWJsdWUtODAwXCIgb25DbGljaz17Y3JlYXRlU2Nob2xhcnNoaXB9PkFkZDwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJheGlvcyIsIkxpbmsiLCJTY2hvbGFyc2hpcCIsImRhdGEiLCJzZXREYXRhIiwic2Nob2xhcnNoaXBJZCIsInNldHNTaG9sYXJzaGlwaWQiLCJ1bml2ZXJzaXR5TmFtZSIsInNldFVuaXZlcnNpdHluYW1lIiwiZWxpZ2libGVDb3Vyc2UiLCJzZXRFbGlnaWJsZWNvdXJzZSIsInBvc3NpYmxlU2Nob2xhcnNoaXAiLCJzZXRQb3NzaWJsZXNjaG9sYXJzaGlwIiwiY3JlYXRlU2Nob2xhcnNoaXAiLCJuZXdTY2hvbGFyc2hpcCIsInJlc3BvbnNlIiwicG9zdCIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsImZvcm0iLCJpbnB1dCIsInR5cGUiLCJuYW1lIiwiaWQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJsYWJlbCIsImh0bWxGb3IiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/scholarship/scholarship.js\n"));

/***/ })

});
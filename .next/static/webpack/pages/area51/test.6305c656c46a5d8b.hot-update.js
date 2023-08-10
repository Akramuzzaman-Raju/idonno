"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/area51/test",{

/***/ "./pages/area51/test.js":
/*!******************************!*\
  !*** ./pages/area51/test.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction UserList() {\n    _s();\n    const [users, setUsers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function fetchUsers() {\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"http://localhost:3001/consultants/find\");\n                setUsers(response.data);\n            } catch (error) {\n                console.error(\"This is the error:\", error);\n            }\n        }\n        fetchUsers();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-gray-100 min-h-screen flex justify-center items-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-white w-full md:w-2/3 lg:w-1/2 xl:w-1/3 rounded-lg shadow-lg p-6\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-3xl font-semibold mb-4 text-center\",\n                    children: \"Consultant List\"\n                }, void 0, false, {\n                    fileName: \"/Users/raju/Desktop/nextjsproject/pages/area51/test.js\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: users.map((user)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"mb-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bg-blue-100 p-6 rounded-lg shadow-md\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"text-lg font-semibold mb-2\",\n                                        children: user.name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/raju/Desktop/nextjsproject/pages/area51/test.js\",\n                                        lineNumber: 28,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-gray-700\",\n                                        children: user.phone\n                                    }, void 0, false, {\n                                        fileName: \"/Users/raju/Desktop/nextjsproject/pages/area51/test.js\",\n                                        lineNumber: 29,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-gray-700\",\n                                        children: user.email\n                                    }, void 0, false, {\n                                        fileName: \"/Users/raju/Desktop/nextjsproject/pages/area51/test.js\",\n                                        lineNumber: 30,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-gray-500 mt-2\",\n                                        children: user.country\n                                    }, void 0, false, {\n                                        fileName: \"/Users/raju/Desktop/nextjsproject/pages/area51/test.js\",\n                                        lineNumber: 31,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"mt-4 flex justify-end\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"mailto:\".concat(user.email),\n                                            className: \"text-blue-500 hover:underline\",\n                                            children: \"Contact\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/raju/Desktop/nextjsproject/pages/area51/test.js\",\n                                            lineNumber: 33,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/raju/Desktop/nextjsproject/pages/area51/test.js\",\n                                        lineNumber: 32,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/raju/Desktop/nextjsproject/pages/area51/test.js\",\n                                lineNumber: 27,\n                                columnNumber: 15\n                            }, this)\n                        }, user.id, false, {\n                            fileName: \"/Users/raju/Desktop/nextjsproject/pages/area51/test.js\",\n                            lineNumber: 26,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/Users/raju/Desktop/nextjsproject/pages/area51/test.js\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/raju/Desktop/nextjsproject/pages/area51/test.js\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/raju/Desktop/nextjsproject/pages/area51/test.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_s(UserList, \"JadZszbqna06PpJs9hMo7Hl/LOY=\");\n_c = UserList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserList);\nvar _c;\n$RefreshReg$(_c, \"UserList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcmVhNTEvdGVzdC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFtRDtBQUN6QjtBQUUxQixTQUFTSTs7SUFDUCxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0wsK0NBQVFBLENBQUMsRUFBRTtJQUVyQ0MsZ0RBQVNBLENBQUM7UUFDUixlQUFlSztZQUNiLElBQUk7Z0JBQ0YsTUFBTUMsV0FBVyxNQUFNTCxpREFBUyxDQUFDO2dCQUNqQ0csU0FBU0UsU0FBU0UsSUFBSTtZQUN4QixFQUFFLE9BQU9DLE9BQU87Z0JBQ2RDLFFBQVFELEtBQUssQ0FBQyxzQkFBc0JBO1lBQ3RDO1FBQ0Y7UUFFQUo7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ007UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNDO29CQUFHRCxXQUFVOzhCQUEwQzs7Ozs7OzhCQUN4RCw4REFBQ0U7OEJBQ0VYLE1BQU1ZLEdBQUcsQ0FBQ0MsQ0FBQUEscUJBQ1QsOERBQUNDOzRCQUFpQkwsV0FBVTtzQ0FDMUIsNEVBQUNEO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQ007d0NBQUdOLFdBQVU7a0RBQThCSSxLQUFLRyxJQUFJOzs7Ozs7a0RBQ3JELDhEQUFDQzt3Q0FBRVIsV0FBVTtrREFBaUJJLEtBQUtLLEtBQUs7Ozs7OztrREFDeEMsOERBQUNEO3dDQUFFUixXQUFVO2tEQUFpQkksS0FBS00sS0FBSzs7Ozs7O2tEQUN4Qyw4REFBQ0Y7d0NBQUVSLFdBQVU7a0RBQXNCSSxLQUFLTyxPQUFPOzs7Ozs7a0RBQy9DLDhEQUFDWjt3Q0FBSUMsV0FBVTtrREFDYiw0RUFBQ1k7NENBQ0NDLE1BQU0sVUFBcUIsT0FBWFQsS0FBS00sS0FBSzs0Q0FDMUJWLFdBQVU7c0RBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7OzJCQVZFSSxLQUFLVSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQjVCO0dBM0NTeEI7S0FBQUE7QUE2Q1QsK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXJlYTUxL3Rlc3QuanM/YTFmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmZ1bmN0aW9uIFVzZXJMaXN0KCkge1xuICBjb25zdCBbdXNlcnMsIHNldFVzZXJzXSA9IHVzZVN0YXRlKFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoVXNlcnMoKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL2NvbnN1bHRhbnRzL2ZpbmQnKTtcbiAgICAgICAgc2V0VXNlcnMocmVzcG9uc2UuZGF0YSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdUaGlzIGlzIHRoZSBlcnJvcjonLCBlcnJvcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZmV0Y2hVc2VycygpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYXktMTAwIG1pbi1oLXNjcmVlbiBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSB3LWZ1bGwgbWQ6dy0yLzMgbGc6dy0xLzIgeGw6dy0xLzMgcm91bmRlZC1sZyBzaGFkb3ctbGcgcC02XCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LXNlbWlib2xkIG1iLTQgdGV4dC1jZW50ZXJcIj5Db25zdWx0YW50IExpc3Q8L2gxPlxuICAgICAgICA8dWw+XG4gICAgICAgICAge3VzZXJzLm1hcCh1c2VyID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e3VzZXIuaWR9IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ibHVlLTEwMCBwLTYgcm91bmRlZC1sZyBzaGFkb3ctbWRcIj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkIG1iLTJcIj57dXNlci5uYW1lfTwvaDI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTcwMFwiPnt1c2VyLnBob25lfTwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNzAwXCI+e3VzZXIuZW1haWx9PC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDAgbXQtMlwiPnt1c2VyLmNvdW50cnl9PC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCBmbGV4IGp1c3RpZnktZW5kXCI+XG4gICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICBocmVmPXtgbWFpbHRvOiR7dXNlci5lbWFpbH1gfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNTAwIGhvdmVyOnVuZGVybGluZVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIENvbnRhY3RcbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJMaXN0OyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJVc2VyTGlzdCIsInVzZXJzIiwic2V0VXNlcnMiLCJmZXRjaFVzZXJzIiwicmVzcG9uc2UiLCJnZXQiLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJ1bCIsIm1hcCIsInVzZXIiLCJsaSIsImgyIiwibmFtZSIsInAiLCJwaG9uZSIsImVtYWlsIiwiY291bnRyeSIsImEiLCJocmVmIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/area51/test.js\n"));

/***/ })

});
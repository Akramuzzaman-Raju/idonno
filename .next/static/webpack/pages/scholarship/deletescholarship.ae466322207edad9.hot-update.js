"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/scholarship/deletescholarship",{

/***/ "./pages/scholarship/deletescholarship.js":
/*!************************************************!*\
  !*** ./pages/scholarship/deletescholarship.js ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _navbar_navbar1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../navbar/navbar1 */ \"./pages/navbar/navbar1.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Deletescholarship() {\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function fetchData() {\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://localhost:3001/scholarships/find\");\n                setData(response.data);\n            } catch (error) {\n                console.error(\"Error fetching data:\", error);\n            }\n        }\n        fetchData();\n    }, []);\n    function handleButtonClick() {\n        window.location.href = \"./scholarship\";\n    }\n    async function handleDelete(id) {\n        try {\n            await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"][\"delete\"](\"http://localhost:3001/scholarships/\".concat(id));\n            setData((prevData)=>prevData.filter((scholarship)=>scholarship.id !== id));\n        // console.log(\"working\");\n        } catch (error) {\n            console.error(\"Error deleting:\", error);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_navbar_navbar1__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/raju/Desktop/nextjsproject/pages/scholarship/deletescholarship.js\",\n                lineNumber: 35,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"flex flex-row bg-green-400 shadow-lg mb-5 shadow-slate-500 ml-4 p-4 rounded-3xl font-bold text-white hover:bg-green-500\",\n                        onClick: handleButtonClick,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                fill: \"none\",\n                                viewBox: \"0 0 24 24\",\n                                strokeWidth: 2,\n                                stroke: \"currentColor\",\n                                className: \"w-6 h-6\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    strokeLinecap: \"round\",\n                                    strokeLinejoin: \"round\",\n                                    d: \"M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/raju/Desktop/nextjsproject/pages/scholarship/deletescholarship.js\",\n                                    lineNumber: 39,\n                                    columnNumber: 3\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/raju/Desktop/nextjsproject/pages/scholarship/deletescholarship.js\",\n                                lineNumber: 38,\n                                columnNumber: 7\n                            }, this),\n                            \"Create Scholarship\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/raju/Desktop/nextjsproject/pages/scholarship/deletescholarship.js\",\n                        lineNumber: 37,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-white rounded-lg shadow-md p-6\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            children: data.map((user)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"bg-slate-100 mb-8 rounded-md pl-10 shadow-xl shadow-slate-400\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            className: \"text-2xl font-semibold mb-4\",\n                                            children: \"Scholarships\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/raju/Desktop/nextjsproject/pages/scholarship/deletescholarship.js\",\n                                            lineNumber: 47,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            className: \"text-gray-600\",\n                                            children: [\n                                                \"Scholarship Id: \",\n                                                user.scholarshipId\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/raju/Desktop/nextjsproject/pages/scholarship/deletescholarship.js\",\n                                            lineNumber: 48,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-gray-600 \",\n                                            children: [\n                                                \"University Name: \",\n                                                user.universityName\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/raju/Desktop/nextjsproject/pages/scholarship/deletescholarship.js\",\n                                            lineNumber: 49,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-gray-600\",\n                                            children: [\n                                                \"Eligible Course: \",\n                                                user.eligibleCourse\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/raju/Desktop/nextjsproject/pages/scholarship/deletescholarship.js\",\n                                            lineNumber: 50,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-gray-600 mb-4\",\n                                            children: [\n                                                \"Possible Scholarship: \",\n                                                user.possibleScholarship\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/raju/Desktop/nextjsproject/pages/scholarship/deletescholarship.js\",\n                                            lineNumber: 51,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"myButton mb-4\",\n                                            onClick: ()=>handleDelete(user.id),\n                                            children: \"Delete\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/raju/Desktop/nextjsproject/pages/scholarship/deletescholarship.js\",\n                                            lineNumber: 52,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, user.id, true, {\n                                    fileName: \"/Users/raju/Desktop/nextjsproject/pages/scholarship/deletescholarship.js\",\n                                    lineNumber: 46,\n                                    columnNumber: 13\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"/Users/raju/Desktop/nextjsproject/pages/scholarship/deletescholarship.js\",\n                            lineNumber: 44,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/raju/Desktop/nextjsproject/pages/scholarship/deletescholarship.js\",\n                        lineNumber: 43,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/raju/Desktop/nextjsproject/pages/scholarship/deletescholarship.js\",\n                lineNumber: 36,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/raju/Desktop/nextjsproject/pages/scholarship/deletescholarship.js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_s(Deletescholarship, \"IEMTtLVFIuToo7X/raQbJAxzNQU=\");\n_c = Deletescholarship;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Deletescholarship);\nvar _c;\n$RefreshReg$(_c, \"Deletescholarship\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zY2hvbGFyc2hpcC9kZWxldGVzY2hvbGFyc2hpcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDbUQ7QUFDekI7QUFDYztBQUN4QyxTQUFTSzs7SUFDUCxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR04sK0NBQVFBLENBQUMsRUFBRTtJQUVuQ0MsZ0RBQVNBLENBQUM7UUFDUixlQUFlTTtZQUNiLElBQUk7Z0JBQ0YsTUFBTUMsV0FBVyxNQUFNTixpREFBUyxDQUFDO2dCQUNqQ0ksUUFBUUUsU0FBU0gsSUFBSTtZQUN2QixFQUFFLE9BQU9LLE9BQU87Z0JBQ2RDLFFBQVFELEtBQUssQ0FBQyx3QkFBd0JBO1lBQ3hDO1FBQ0Y7UUFFQUg7SUFDRixHQUFHLEVBQUU7SUFDTCxTQUFTSztRQUNQQyxPQUFPQyxRQUFRLENBQUNDLElBQUksR0FBRztJQUMzQjtJQUNFLGVBQWVDLGFBQWFDLEVBQUU7UUFDNUIsSUFBSTtZQUNGLE1BQU1mLHVEQUFZLENBQUMsc0NBQXlDLE9BQUhlO1lBQ3pEWCxRQUFRLENBQUNhLFdBQWFBLFNBQVNDLE1BQU0sQ0FBQyxDQUFDQyxjQUFnQkEsWUFBWUosRUFBRSxLQUFLQTtRQUMxRSwwQkFBMEI7UUFDNUIsRUFBRSxPQUFPUCxPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQyxtQkFBbUJBO1FBQ25DO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ1k7OzBCQUNELDhEQUFDbkIsdURBQU9BOzs7OzswQkFDUiw4REFBQ21CO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQU9ELFdBQVU7d0JBQTBIRSxTQUFTYjs7MENBQ3JKLDhEQUFDYztnQ0FBSUMsT0FBTTtnQ0FBOEJDLE1BQUs7Z0NBQU9DLFNBQVE7Z0NBQVlDLGFBQWE7Z0NBQUdDLFFBQU87Z0NBQWVSLFdBQVU7MENBQzdILDRFQUFDUztvQ0FBS0MsZUFBYztvQ0FBUUMsZ0JBQWU7b0NBQVFDLEdBQUU7Ozs7Ozs7Ozs7OzRCQUNqRDs7Ozs7OztrQ0FHQSw4REFBQ2I7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNhO3NDQUNFL0IsS0FBS2dDLEdBQUcsQ0FBQyxDQUFDQyxxQkFDVCw4REFBQ0M7b0NBQWlCaEIsV0FBVTs7c0RBQzFCLDhEQUFDaUI7NENBQUdqQixXQUFVO3NEQUE4Qjs7Ozs7O3NEQUM1Qyw4REFBQ2lCOzRDQUFHakIsV0FBVTs7Z0RBQWdCO2dEQUFpQmUsS0FBS0csYUFBYTs7Ozs7OztzREFDakUsOERBQUNDOzRDQUFFbkIsV0FBVTs7Z0RBQWlCO2dEQUFrQmUsS0FBS0ssY0FBYzs7Ozs7OztzREFDbkUsOERBQUNEOzRDQUFFbkIsV0FBVTs7Z0RBQWdCO2dEQUFrQmUsS0FBS00sY0FBYzs7Ozs7OztzREFDbEUsOERBQUNGOzRDQUFFbkIsV0FBVTs7Z0RBQXNCO2dEQUF1QmUsS0FBS08sbUJBQW1COzs7Ozs7O3NEQUNsRiw4REFBQ3JCOzRDQUFPRCxXQUFVOzRDQUFnQkUsU0FBUyxJQUFNVCxhQUFhc0IsS0FBS3JCLEVBQUU7c0RBQUc7Ozs7Ozs7bUNBTmpFcUIsS0FBS3JCLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWM1QjtHQXZEU2I7S0FBQUE7QUF5RFQsK0RBQWVBLGlCQUFpQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zY2hvbGFyc2hpcC9kZWxldGVzY2hvbGFyc2hpcC5qcz9iNmM2Il0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IE5hdmJhcjEgZnJvbSAnLi4vbmF2YmFyL25hdmJhcjEnO1xuZnVuY3Rpb24gRGVsZXRlc2Nob2xhcnNoaXAoKSB7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoRGF0YSgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDEvc2Nob2xhcnNoaXBzL2ZpbmQnKTtcbiAgICAgICAgc2V0RGF0YShyZXNwb25zZS5kYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZldGNoRGF0YSgpO1xuICB9LCBbXSk7XG4gIGZ1bmN0aW9uIGhhbmRsZUJ1dHRvbkNsaWNrKCkge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy4vc2Nob2xhcnNoaXAnO1xufVxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVEZWxldGUoaWQpIHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgYXhpb3MuZGVsZXRlKGBodHRwOi8vbG9jYWxob3N0OjMwMDEvc2Nob2xhcnNoaXBzLyR7aWR9YCk7XG4gICAgICBzZXREYXRhKChwcmV2RGF0YSkgPT4gcHJldkRhdGEuZmlsdGVyKChzY2hvbGFyc2hpcCkgPT4gc2Nob2xhcnNoaXAuaWQgIT09IGlkKSk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcIndvcmtpbmdcIik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nOicsIGVycm9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgPE5hdmJhcjEvPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwicC00XCIgPlxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cgYmctZ3JlZW4tNDAwIHNoYWRvdy1sZyBtYi01IHNoYWRvdy1zbGF0ZS01MDAgbWwtNCBwLTQgcm91bmRlZC0zeGwgZm9udC1ib2xkIHRleHQtd2hpdGUgaG92ZXI6YmctZ3JlZW4tNTAwJyBvbkNsaWNrPXtoYW5kbGVCdXR0b25DbGlja30+XG4gICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiAgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlV2lkdGg9ezJ9IHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIGNsYXNzTmFtZT1cInctNiBoLTZcIj5cbiAgPHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIGQ9XCJNMTIgOXY2bTMtM0g5bTEyIDBhOSA5IDAgMTEtMTggMCA5IDkgMCAwMTE4IDB6XCIgLz5cbjwvc3ZnPlxuICAgICAgQ3JlYXRlIFNjaG9sYXJzaGlwXG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC1sZyBzaGFkb3ctbWQgcC02XCI+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7ZGF0YS5tYXAoKHVzZXIpID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e3VzZXIuaWR9IGNsYXNzTmFtZT0nYmctc2xhdGUtMTAwIG1iLTggcm91bmRlZC1tZCBwbC0xMCBzaGFkb3cteGwgc2hhZG93LXNsYXRlLTQwMCc+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LXNlbWlib2xkIG1iLTRcIj5TY2hvbGFyc2hpcHM8L2gyPlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMFwiPlNjaG9sYXJzaGlwIElkOiB7dXNlci5zY2hvbGFyc2hpcElkfTwvaDI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgXCI+VW5pdmVyc2l0eSBOYW1lOiB7dXNlci51bml2ZXJzaXR5TmFtZX08L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDBcIj5FbGlnaWJsZSBDb3Vyc2U6IHt1c2VyLmVsaWdpYmxlQ291cnNlfTwvcD5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCBtYi00XCIgPlBvc3NpYmxlIFNjaG9sYXJzaGlwOiB7dXNlci5wb3NzaWJsZVNjaG9sYXJzaGlwfTwvcD5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJteUJ1dHRvbiBtYi00XCIgb25DbGljaz17KCkgPT4gaGFuZGxlRGVsZXRlKHVzZXIuaWQpfT5EZWxldGU8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGVsZXRlc2Nob2xhcnNoaXA7XG5cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJOYXZiYXIxIiwiRGVsZXRlc2Nob2xhcnNoaXAiLCJkYXRhIiwic2V0RGF0YSIsImZldGNoRGF0YSIsInJlc3BvbnNlIiwiZ2V0IiwiZXJyb3IiLCJjb25zb2xlIiwiaGFuZGxlQnV0dG9uQ2xpY2siLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJoYW5kbGVEZWxldGUiLCJpZCIsImRlbGV0ZSIsInByZXZEYXRhIiwiZmlsdGVyIiwic2Nob2xhcnNoaXAiLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIiwic3ZnIiwieG1sbnMiLCJmaWxsIiwidmlld0JveCIsInN0cm9rZVdpZHRoIiwic3Ryb2tlIiwicGF0aCIsInN0cm9rZUxpbmVjYXAiLCJzdHJva2VMaW5lam9pbiIsImQiLCJ1bCIsIm1hcCIsInVzZXIiLCJsaSIsImgyIiwic2Nob2xhcnNoaXBJZCIsInAiLCJ1bml2ZXJzaXR5TmFtZSIsImVsaWdpYmxlQ291cnNlIiwicG9zc2libGVTY2hvbGFyc2hpcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/scholarship/deletescholarship.js\n"));

/***/ })

});
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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Deletescholarship() {\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function fetchData() {\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"http://localhost:3001/scholarships/find\");\n                setData(response.data);\n            } catch (error) {\n                console.error(\"Error fetching data:\", error);\n            }\n        }\n        fetchData();\n    }, []);\n    function handleButtonClick() {\n        window.location.href = \"./scholarship\";\n    }\n    async function handleDelete(id) {\n        try {\n            await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"][\"delete\"](\"http://localhost:3001/scholarships/\".concat(id));\n            setData((prevData)=>prevData.filter((scholarship)=>scholarship.id !== id));\n        // console.log(\"working\");\n        } catch (error) {\n            console.error(\"Error deleting:\", error);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"pt-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"flex flex-row bg-green-400 shadow-lg mb-5 shadow-slate-500 ml-4 p-4 rounded-3xl font-bold text-white hover:bg-green-500\",\n                onClick: handleButtonClick,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        xmlns: \"http://www.w3.org/2000/svg\",\n                        fill: \"none\",\n                        viewBox: \"0 0 24 24\",\n                        strokeWidth: 2,\n                        stroke: \"currentColor\",\n                        className: \"w-6 h-6\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            strokeLinecap: \"round\",\n                            strokeLinejoin: \"round\",\n                            d: \"M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z\"\n                        }, void 0, false, {\n                            fileName: \"/Users/raju/Desktop/nextjsproject/pages/scholarship/deletescholarship.js\",\n                            lineNumber: 37,\n                            columnNumber: 3\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/raju/Desktop/nextjsproject/pages/scholarship/deletescholarship.js\",\n                        lineNumber: 36,\n                        columnNumber: 7\n                    }, this),\n                    \"Create Scholarship\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/raju/Desktop/nextjsproject/pages/scholarship/deletescholarship.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-white rounded-lg shadow-md p-6\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: data.map((user)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"bg-slate-100 mb-8 rounded-md pl-10 shadow-xl shadow-slate-400\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"text-2xl font-semibold mb-4\",\n                                    children: \"Scholarships\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/raju/Desktop/nextjsproject/pages/scholarship/deletescholarship.js\",\n                                    lineNumber: 45,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"text-gray-600\",\n                                    children: [\n                                        \"Scholarship Id: \",\n                                        user.scholarshipId\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/raju/Desktop/nextjsproject/pages/scholarship/deletescholarship.js\",\n                                    lineNumber: 46,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-gray-600 \",\n                                    children: [\n                                        \"University Name: \",\n                                        user.universityName\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/raju/Desktop/nextjsproject/pages/scholarship/deletescholarship.js\",\n                                    lineNumber: 47,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-gray-600\",\n                                    children: [\n                                        \"Eligible Course: \",\n                                        user.eligibleCourse\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/raju/Desktop/nextjsproject/pages/scholarship/deletescholarship.js\",\n                                    lineNumber: 48,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-gray-600 mb-4\",\n                                    children: [\n                                        \"Possible Scholarship: \",\n                                        user.possibleScholarship\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/raju/Desktop/nextjsproject/pages/scholarship/deletescholarship.js\",\n                                    lineNumber: 49,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"myButton mb-4\",\n                                    onClick: ()=>handleDelete(user.id),\n                                    children: \"Delete\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/raju/Desktop/nextjsproject/pages/scholarship/deletescholarship.js\",\n                                    lineNumber: 50,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, user.id, true, {\n                            fileName: \"/Users/raju/Desktop/nextjsproject/pages/scholarship/deletescholarship.js\",\n                            lineNumber: 44,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/Users/raju/Desktop/nextjsproject/pages/scholarship/deletescholarship.js\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/raju/Desktop/nextjsproject/pages/scholarship/deletescholarship.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/raju/Desktop/nextjsproject/pages/scholarship/deletescholarship.js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_s(Deletescholarship, \"IEMTtLVFIuToo7X/raQbJAxzNQU=\");\n_c = Deletescholarship;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Deletescholarship);\nvar _c;\n$RefreshReg$(_c, \"Deletescholarship\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zY2hvbGFyc2hpcC9kZWxldGVzY2hvbGFyc2hpcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNtRDtBQUN6QjtBQUUxQixTQUFTSTs7SUFDUCxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0wsK0NBQVFBLENBQUMsRUFBRTtJQUVuQ0MsZ0RBQVNBLENBQUM7UUFDUixlQUFlSztZQUNiLElBQUk7Z0JBQ0YsTUFBTUMsV0FBVyxNQUFNTCxpREFBUyxDQUFDO2dCQUNqQ0csUUFBUUUsU0FBU0gsSUFBSTtZQUN2QixFQUFFLE9BQU9LLE9BQU87Z0JBQ2RDLFFBQVFELEtBQUssQ0FBQyx3QkFBd0JBO1lBQ3hDO1FBQ0Y7UUFFQUg7SUFDRixHQUFHLEVBQUU7SUFDTCxTQUFTSztRQUNQQyxPQUFPQyxRQUFRLENBQUNDLElBQUksR0FBRztJQUMzQjtJQUNFLGVBQWVDLGFBQWFDLEVBQUU7UUFDNUIsSUFBSTtZQUNGLE1BQU1kLHVEQUFZLENBQUMsc0NBQXlDLE9BQUhjO1lBQ3pEWCxRQUFRLENBQUNhLFdBQWFBLFNBQVNDLE1BQU0sQ0FBQyxDQUFDQyxjQUFnQkEsWUFBWUosRUFBRSxLQUFLQTtRQUMxRSwwQkFBMEI7UUFDNUIsRUFBRSxPQUFPUCxPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQyxtQkFBbUJBO1FBQ25DO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ1k7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFPRCxXQUFVO2dCQUEwSEUsU0FBU2I7O2tDQUNySiw4REFBQ2M7d0JBQUlDLE9BQU07d0JBQThCQyxNQUFLO3dCQUFPQyxTQUFRO3dCQUFZQyxhQUFhO3dCQUFHQyxRQUFPO3dCQUFlUixXQUFVO2tDQUM3SCw0RUFBQ1M7NEJBQUtDLGVBQWM7NEJBQVFDLGdCQUFlOzRCQUFRQyxHQUFFOzs7Ozs7Ozs7OztvQkFDakQ7Ozs7Ozs7MEJBR0EsOERBQUNiO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDYTs4QkFDRS9CLEtBQUtnQyxHQUFHLENBQUMsQ0FBQ0MscUJBQ1QsOERBQUNDOzRCQUFpQmhCLFdBQVU7OzhDQUMxQiw4REFBQ2lCO29DQUFHakIsV0FBVTs4Q0FBOEI7Ozs7Ozs4Q0FDNUMsOERBQUNpQjtvQ0FBR2pCLFdBQVU7O3dDQUFnQjt3Q0FBaUJlLEtBQUtHLGFBQWE7Ozs7Ozs7OENBQ2pFLDhEQUFDQztvQ0FBRW5CLFdBQVU7O3dDQUFpQjt3Q0FBa0JlLEtBQUtLLGNBQWM7Ozs7Ozs7OENBQ25FLDhEQUFDRDtvQ0FBRW5CLFdBQVU7O3dDQUFnQjt3Q0FBa0JlLEtBQUtNLGNBQWM7Ozs7Ozs7OENBQ2xFLDhEQUFDRjtvQ0FBRW5CLFdBQVU7O3dDQUFzQjt3Q0FBdUJlLEtBQUtPLG1CQUFtQjs7Ozs7Ozs4Q0FDbEYsOERBQUNyQjtvQ0FBT0QsV0FBVTtvQ0FBZ0JFLFNBQVMsSUFBTVQsYUFBYXNCLEtBQUtyQixFQUFFOzhDQUFHOzs7Ozs7OzJCQU5qRXFCLEtBQUtyQixFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhNUI7R0FwRFNiO0tBQUFBO0FBc0RULCtEQUFlQSxpQkFBaUJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2Nob2xhcnNoaXAvZGVsZXRlc2Nob2xhcnNoaXAuanM/YjZjNiJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuZnVuY3Rpb24gRGVsZXRlc2Nob2xhcnNoaXAoKSB7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoRGF0YSgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDEvc2Nob2xhcnNoaXBzL2ZpbmQnKTtcbiAgICAgICAgc2V0RGF0YShyZXNwb25zZS5kYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZldGNoRGF0YSgpO1xuICB9LCBbXSk7XG4gIGZ1bmN0aW9uIGhhbmRsZUJ1dHRvbkNsaWNrKCkge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy4vc2Nob2xhcnNoaXAnO1xufVxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVEZWxldGUoaWQpIHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgYXhpb3MuZGVsZXRlKGBodHRwOi8vbG9jYWxob3N0OjMwMDEvc2Nob2xhcnNoaXBzLyR7aWR9YCk7XG4gICAgICBzZXREYXRhKChwcmV2RGF0YSkgPT4gcHJldkRhdGEuZmlsdGVyKChzY2hvbGFyc2hpcCkgPT4gc2Nob2xhcnNoaXAuaWQgIT09IGlkKSk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcIndvcmtpbmdcIik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nOicsIGVycm9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNFwiID5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93IGJnLWdyZWVuLTQwMCBzaGFkb3ctbGcgbWItNSBzaGFkb3ctc2xhdGUtNTAwIG1sLTQgcC00IHJvdW5kZWQtM3hsIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIGhvdmVyOmJnLWdyZWVuLTUwMCcgb25DbGljaz17aGFuZGxlQnV0dG9uQ2xpY2t9PlxuICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZVdpZHRoPXsyfSBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBjbGFzc05hbWU9XCJ3LTYgaC02XCI+XG4gIDxwYXRoIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBkPVwiTTEyIDl2Nm0zLTNIOW0xMiAwYTkgOSAwIDExLTE4IDAgOSA5IDAgMDExOCAwelwiIC8+XG48L3N2Zz5cbiAgICAgIENyZWF0ZSBTY2hvbGFyc2hpcFxuICAgICAgPC9idXR0b24+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtbGcgc2hhZG93LW1kIHAtNlwiPlxuICAgICAgICA8dWw+XG4gICAgICAgICAge2RhdGEubWFwKCh1c2VyKSA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXt1c2VyLmlkfSBjbGFzc05hbWU9J2JnLXNsYXRlLTEwMCBtYi04IHJvdW5kZWQtbWQgcGwtMTAgc2hhZG93LXhsIHNoYWRvdy1zbGF0ZS00MDAnPlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1zZW1pYm9sZCBtYi00XCI+U2Nob2xhcnNoaXBzPC9oMj5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDBcIj5TY2hvbGFyc2hpcCBJZDoge3VzZXIuc2Nob2xhcnNoaXBJZH08L2gyPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwIFwiPlVuaXZlcnNpdHkgTmFtZToge3VzZXIudW5pdmVyc2l0eU5hbWV9PC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwXCI+RWxpZ2libGUgQ291cnNlOiB7dXNlci5lbGlnaWJsZUNvdXJzZX08L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgbWItNFwiID5Qb3NzaWJsZSBTY2hvbGFyc2hpcDoge3VzZXIucG9zc2libGVTY2hvbGFyc2hpcH08L3A+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibXlCdXR0b24gbWItNFwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZURlbGV0ZSh1c2VyLmlkKX0+RGVsZXRlPC9idXR0b24+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IERlbGV0ZXNjaG9sYXJzaGlwO1xuXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImF4aW9zIiwiRGVsZXRlc2Nob2xhcnNoaXAiLCJkYXRhIiwic2V0RGF0YSIsImZldGNoRGF0YSIsInJlc3BvbnNlIiwiZ2V0IiwiZXJyb3IiLCJjb25zb2xlIiwiaGFuZGxlQnV0dG9uQ2xpY2siLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJoYW5kbGVEZWxldGUiLCJpZCIsImRlbGV0ZSIsInByZXZEYXRhIiwiZmlsdGVyIiwic2Nob2xhcnNoaXAiLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIiwic3ZnIiwieG1sbnMiLCJmaWxsIiwidmlld0JveCIsInN0cm9rZVdpZHRoIiwic3Ryb2tlIiwicGF0aCIsInN0cm9rZUxpbmVjYXAiLCJzdHJva2VMaW5lam9pbiIsImQiLCJ1bCIsIm1hcCIsInVzZXIiLCJsaSIsImgyIiwic2Nob2xhcnNoaXBJZCIsInAiLCJ1bml2ZXJzaXR5TmFtZSIsImVsaWdpYmxlQ291cnNlIiwicG9zc2libGVTY2hvbGFyc2hpcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/scholarship/deletescholarship.js\n"));

/***/ })

});
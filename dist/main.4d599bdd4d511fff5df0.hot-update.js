"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatepustanotes_2"]("main",{

/***/ "./src/scripts/view/notes_views.js":
/*!*****************************************!*\
  !*** ./src/scripts/view/notes_views.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_pn_header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/pn_header.js */ \"./src/scripts/components/pn_header.js\");\n/* harmony import */ var _components_pn_notes_wrapper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/pn_notes_wrapper.js */ \"./src/scripts/components/pn_notes_wrapper.js\");\n/* harmony import */ var _components_pn_notelist_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/pn_notelist.js */ \"./src/scripts/components/pn_notelist.js\");\n/* harmony import */ var _components_pn_notelist_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_pn_notelist_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_pn_noteitems_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/pn_noteitems.js */ \"./src/scripts/components/pn_noteitems.js\");\n/* harmony import */ var _components_pn_noteItem_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/pn_noteItem.js */ \"./src/scripts/components/pn_noteItem.js\");\n/* harmony import */ var _components_pn_noteItem_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_pn_noteItem_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_pn_footer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/pn_footer.js */ \"./src/scripts/components/pn_footer.js\");\nfunction showLoadingContent(element) {\r\n    element.innerHTML = \"\";\r\n    const html = document.createElement(\"div\");\r\n    html.className = \"container-loader\";\r\n    html.innerHTML = `<div class=\"loader\"></div><div class=\"loader_\"></div><div id=\"loader-text\" class=\"loader-text\"></div>`\r\n    const style = document.createElement(\"style\");\r\n    style.textContent = `.list_notes .container div.content {display:block;} .container-loader { margin: 5cqh auto; width: 100%; display: flex; align-items: center; justify-content: center; flex-direction: column; gap: 3vh; } .loader-text { font-family: 'Poppins', sans-serif; color: #1B2E4D; display: flex; justify-content: center; align-items: center; text-transform: initial; } .words { color: #1B2E4D; font-size: 0; line-height: 1; } .words span { font-size: 1.1rem; display: inline-block; animation: move 1.5s ease-in-out infinite; font-weight: bold; } .wait:after { content: '.'; animation: dots 1.5s steps(8, end) infinite; } @keyframes dots { 0%, 20% { color: transparent; text-shadow: .25em 0 0 transparent, .5em 0 0 transparent } 40% { color: #1B2E4D; text-shadow: .25em 0 0 transparent, .5em 0 0 transparent } 60% { text-shadow: .25em 0 0 #1B2E4D, .5em 0 0 transparent } 100%, 80% { text-shadow: .25em 0 0 #1B2E4D, .5em 0 0 #1B2E4D } } @keyframes move { 0% { transform: translate(0%, 10%); } 25% { text-shadow: 0 15px 35px rgba(0, 0, 0, 0.75); } 50% { transform: translate(10%, -10%); } 75% { text-shadow: 0 15px 35px rgba(0, 0, 0, 0.75); } 100% { transform: translate(0%, 10%); } } .loader { width: 10%; aspect-ratio: 1; background: linear-gradient(45deg, #7CD4D1 50%, #0000 0), linear-gradient(45deg, #0000 50%, #7CD4D1 0), linear-gradient(-45deg, #7FA7FB 50%, #0000 0), linear-gradient(-45deg, #0000 50%, #7FA7FB 0), linear-gradient(#1B2E4D 0 0); background-size: 50% 50%; background-repeat: no-repeat; animation: l18 1.5s infinite; } @keyframes l18 { 0% { background-position: 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50% } 25% { background-position: 0 100%, 100% 0, 50% 50%, 50% 50%, 50% 50% } 50% { background-position: 0 100%, 100% 0, 100% 100%, 0 0, 50% 50% } 75% { background-position: 50% 50%, 50% 50%, 100% 100%, 0 0, 50% 50% } 100% { background-position: 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50% } } .loader_ { width: 35%; height: 1vh; border-radius: 40px; color: #60B99A; border: 2px solid; position: relative; overflow: hidden; } .loader_::before { content: \"\"; position: absolute; margin: 2px; width: 14px; top: 0; bottom: 0; left: -20px; border-radius: inherit; background: currentColor; box-shadow: -10px 0 12px 3px currentColor; clip-path: polygon(0 5%, 100% 0, 100% 100%, 0 95%, -30px 50%); animation: l14 1.5s infinite linear; } @keyframes l14 { 100% { left: calc(100% + 20px) } }`\r\n\r\n    element.appendChild(html);\r\n    element.appendChild(style);\r\n    js();\r\n\r\n    function js() {\r\n      const text = \"Pustanotes sedang memuat\";\r\n      const loaderText = element.querySelector(\"#loader-text\");\r\n      const wordsContainer = document.createElement(\"div\");\r\n      wordsContainer.className = \"words\";\r\n      text.split(\"\").forEach((char, index) => {\r\n        const span = document.createElement(\"span\");\r\n        span.innerHTML = char === \" \" ? \"&nbsp;\" : char;\r\n        span.style.animationDelay = `${index * 0.01}s`;\r\n        wordsContainer.appendChild(span);\r\n      });\r\n      const span = document.createElement(\"span\");\r\n      span.className = \"wait\";\r\n      wordsContainer.appendChild(span);\r\n      loaderText.appendChild(wordsContainer);\r\n    }\r\n}\r\n\r\nfunction loadContent () {\r\n    const loadingElem = document.createElement(\"pn-loading\");\r\n    loadingElem.style.cssText = `width:100vw;height:100vh;background-color:blue;z-index:99;`\r\n    showLoadingContent(document.querySelector(\"pn-loading\"));\r\n    const content = document.querySelector('pn-content');\r\n    const contentElement = document.createElement('pn-notes-wrapper');\r\n    content.appendChild(contentElement);\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nloadContent();\r\n\n\n//# sourceURL=webpack://pustanotes_2/./src/scripts/view/notes_views.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1592a5a74eb319171c2f")
/******/ })();
/******/ 
/******/ }
);
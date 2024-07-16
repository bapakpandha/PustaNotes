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

/***/ "./src/database/notes-api.js":
/*!***********************************!*\
  !*** ./src/database/notes-api.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// const baseUrl = \"http://127.0.0.1/restful-api\";\r\nconst baseUrl = \"https://notes-api.dicoding.dev/v2/\";\r\n\r\nclass NotesApi {\r\n    static async getAll() {\r\n\r\n        try {\r\n            const response = await fetch(`${baseUrl}/notes`);\r\n            const responseJson = await response.json();\r\n            return { response, responseJson };\r\n        } catch (error) {\r\n            console.log(error)\r\n            return { error };\r\n        }\r\n\r\n    }\r\n\r\n    static async getArchived() {\r\n        try {\r\n            const response_AR = await fetch(`${baseUrl}/notes/archived`);\r\n            const responseJson_AR = await response_AR.json();\r\n            return { response_AR, responseJson_AR };\r\n        } catch (error_AR) {\r\n            return { error_AR };\r\n        }\r\n    }\r\n\r\n    static async getNoteById(id) {\r\n        const response = await fetch(`${baseUrl}/notes/${id}`);\r\n\r\n        if (!(response.status >= 200 && response.status < 300)) {\r\n            throw new Error(\"Gagal Menampilkan Data\");\r\n        }\r\n\r\n        const responseJson = await response.json();\r\n\r\n        const { data: note } = responseJson;\r\n\r\n        if (!note) {\r\n            throw new Error('Catatan Tidak Ditemukan');\r\n        }\r\n\r\n        return note;\r\n    }\r\n\r\n    static async addNote(note) {\r\n        try {\r\n            const response = await fetch(`${baseUrl}/notes`, {\r\n                method: \"POST\",\r\n                headers: {\r\n                    \"Content-Type\": \"application/json\",\r\n                },\r\n                body: JSON.stringify(note),\r\n            });\r\n\r\n            const responseJson = await response.json();\r\n            return { response, responseJson };\r\n        } catch (error) {\r\n            return { error };\r\n        }\r\n    }\r\n\r\n    static async deleteNoteById(id) {\r\n        try {\r\n            const response = await fetch(`${baseUrl}/notes/${id}`, {\r\n                method: \"DELETE\",\r\n            });\r\n\r\n            const responseJson = await response.json();\r\n            console.log(`Response: ${response}, ResponseJSON : ${responseJson}`)\r\n\r\n            return { response, responseJson };\r\n        } catch (error) {\r\n            return { error };\r\n        }\r\n    }\r\n\r\n    static async archiveNoteById(id) {\r\n        try {\r\n            const response = await fetch(`${baseUrl}/notes/${id}/archive`, {\r\n                method: \"POST\",\r\n            });\r\n            const responseJson = await response.json();\r\n            console.log(`Response: ${response}, ResponseJSON : ${responseJson}`)\r\n            return { response, responseJson };\r\n        } catch (error) {\r\n            return { error };\r\n        }\r\n    }\r\n\r\n    static async unarchiveNoteById(id) {\r\n        try {\r\n            const response = await fetch(`${baseUrl}/notes/${id}/unarchive`, {\r\n                method: \"POST\",\r\n            });\r\n            const responseJson = await response.json();\r\n            console.log(`Response: ${response}, ResponseJSON : ${responseJson}`)\r\n            return { response, responseJson };\r\n        } catch (error) {\r\n            return { error };\r\n        }\r\n    }\r\n\r\n\r\n    static async editNoteById(id, newNoteData) {\r\n        try {\r\n            const {response: responseAdd, responseJson: responseJsonAdd} = await NotesApi.addNote(newNoteData);\r\n            const { response, responseJson } = await NotesApi.deleteNoteById(id);\r\n\r\n            console.log(responseAdd, responseJsonAdd)\r\n            console.log( response, responseJson )\r\n            return { responseAdd, responseJsonAdd, response, responseJson };\r\n        } catch (error) {\r\n            console.error(error);\r\n            alert(\"Gagal Mengedit Catatan\");\r\n            return { error };\r\n        }\r\n    }\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotesApi);\n\n//# sourceURL=webpack://pustanotes_2/./src/database/notes-api.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("aa69194422746a0eb22a")
/******/ })();
/******/ 
/******/ }
);
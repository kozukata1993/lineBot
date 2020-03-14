function doPost(e) {
}
function pushNotice() {
}/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _reply__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reply */ "./src/reply.ts");
/* harmony import */ var _push__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./push */ "./src/push.ts");


global.doPost = (e) => {
    Object(_reply__WEBPACK_IMPORTED_MODULE_0__["reply"])(e);
};
global.pushNotice = () => {
    Object(_push__WEBPACK_IMPORTED_MODULE_1__["pushMessage"])();
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/message.ts":
/*!************************!*\
  !*** ./src/message.ts ***!
  \************************/
/*! exports provided: createReply, createPushMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createReply", function() { return createReply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPushMessage", function() { return createPushMessage; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/utils */ "./src/utils/utils.ts");

const createReply = (userMessage) => {
    // const queryResult = new Dialogflow(userMessage).postQuery();
    // const intent: string = queryResult.intent.displayName;
    // const date: Date = createDate(queryResult.parameters.date);
    const lngs = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["checkLanguage"])(userMessage);
    Logger.log("1");
    return LanguageApp.translate(userMessage, lngs[0], lngs[1]);
    // switch (intent) {
    //   case "trash":
    //     return createPushMessage();
    //   case "weather":
    //     return forecasts(date);
    //   default:
    //     Logger.log("2");
    //     return LanguageApp.translate(userMessage, lngs[0], lngs[1]);
    // }
};
const createPushMessage = () => {
    const today = new Date();
    const day = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"][today.getDay()];
    const date = today.getDate();
    if (day === "tue" || day === "fri") {
        return "今日は燃えるゴミの日だよ";
    }
    else if (day === "sat") {
        return "今日は資源ゴミの日だよ";
    }
    else if ((day === "thu" && date >= 8 && date <= 14) ||
        (day === "thu" && date >= 22 && date <= 28)) {
        return "今日はペットボトルを捨てる日だよ";
    }
    else {
        return "今日はゴミを捨てる日じゃないよ";
    }
};


/***/ }),

/***/ "./src/push.ts":
/*!*********************!*\
  !*** ./src/push.ts ***!
  \*********************/
/*! exports provided: pushMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pushMessage", function() { return pushMessage; });
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message */ "./src/message.ts");

const accessToken = PropertiesService.getScriptProperties().getProperty("LINE_ACCESS_TOKEN");
const userId = PropertiesService.getScriptProperties().getProperty("MY_ID");
const pushMessage = () => {
    const url = "https://api.line.me/v2/bot/message/push";
    const headers = {
        Authorization: "Bearer " + accessToken,
        "Content-Type": "application/json; charset=UTF-8",
    };
    const postDatas = {
        messages: [
            {
                text: Object(_message__WEBPACK_IMPORTED_MODULE_0__["createPushMessage"])(),
                type: "text",
            },
        ],
        to: userId,
    };
    const options = {
        headers,
        method: "POST",
        payload: JSON.stringify(postDatas),
    };
    UrlFetchApp.fetch(url, options);
};


/***/ }),

/***/ "./src/reply.ts":
/*!**********************!*\
  !*** ./src/reply.ts ***!
  \**********************/
/*! exports provided: reply */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reply", function() { return reply; });
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message */ "./src/message.ts");

const reply = (e) => {
    const accessToken = PropertiesService.getScriptProperties().getProperty("LINE_ACCESS_TOKEN");
    const json = JSON.parse(e.postData.contents).events[0];
    const replyToken = json.replyToken;
    const userMessage = json.message.text;
    const url = "https://api.line.me/v2/bot/message/reply";
    const headers = {
        Authorization: "Bearer " + accessToken,
        "Content-Type": "application/json; charset=UTF-8",
    };
    const postDatas = {
        messages: [
            {
                text: Object(_message__WEBPACK_IMPORTED_MODULE_0__["createReply"])(userMessage),
                // text: `${userMessage}!!`,
                type: "text",
            },
        ],
        replyToken,
    };
    const options = {
        headers,
        method: "POST",
        payload: JSON.stringify(postDatas),
    };
    UrlFetchApp.fetch(url, options);
    return ContentService.createTextOutput(JSON.stringify({ content: "post ok" })).setMimeType(ContentService.MimeType.JSON);
};


/***/ }),

/***/ "./src/utils/utils.ts":
/*!****************************!*\
  !*** ./src/utils/utils.ts ***!
  \****************************/
/*! exports provided: forecasts, getDateIndex, createDate, checkLanguage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forecasts", function() { return forecasts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDateIndex", function() { return getDateIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDate", function() { return createDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkLanguage", function() { return checkLanguage; });
const forecasts = (date = new Date()) => {
    let url = PropertiesService.getScriptProperties().getProperty("DARK_SKY_URL");
    const latitude = "35.41";
    const longitude = "139.45";
    const queryParams = "?lang=ja&units=si&exclude=currently,minutely,hourly,alerts,flags";
    url = `${url}${latitude},${longitude}${queryParams}`;
    const json = JSON.parse(UrlFetchApp.fetch(url).getContentText());
    const dateIndex = getDateIndex(date);
    const forecast = json.daily.data[dateIndex];
    let result = "";
    if (dateIndex === 8) {
        result = `${Utilities.formatDate(date, "JST", "MM/dd(E)")}の天気はわからないよ。`;
    }
    else {
        result = `${Utilities.formatDate(date, "JST", "MM/dd(E)")}は${forecast.summary}\n最高気温は${forecast.temperatureMax}℃\n最低気温は${forecast.temperatureLow}℃\nの見込みです。`;
    }
    return result;
};
const getDateIndex = (date) => {
    const today = new Date();
    const a = today.getFullYear() * 366 + (today.getMonth() + 1) * 31 + today.getDate();
    const b = date.getFullYear() * 366 + (date.getMonth() + 1) * 31 + date.getDate();
    return b - a >= 0 && b - a <= 7 ? b - a : 8;
};
const createDate = (dateString = `${new Date().getFullYear()}-${new Date().getMonth() +
    1}-${new Date().getDate()}`) => {
    const regexp = /\d{4}-\d{1,2}-\d{1,2}/g;
    const tmpArray = dateString.match(regexp)[0].split("-");
    const dateArray = tmpArray.map(str => +str);
    return new Date(dateArray[0], dateArray[1] - 1, dateArray[2]);
};
const checkLanguage = (text) => {
    return /[A-Za-z]+/.test(text) ? ["en", "ja"] : ["ja", "en"];
};


/***/ })

/******/ });
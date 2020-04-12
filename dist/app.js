function doPost(e) {
}
function pushNotice() {
}
function testFunction() {
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
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/utils */ "./src/utils/utils.ts");



global.doPost = function (e) {
    Object(_reply__WEBPACK_IMPORTED_MODULE_0__["reply"])(e);
};
global.pushNotice = function () {
    Object(_push__WEBPACK_IMPORTED_MODULE_1__["pushMessage"])();
};
global.testFunction = function () {
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["forecasts"])();
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/messages/createPush.ts":
/*!************************************!*\
  !*** ./src/messages/createPush.ts ***!
  \************************************/
/*! exports provided: createPush */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPush", function() { return createPush; });
var createPush = function (today) {
    if (today === void 0) { today = new Date(); }
    // today: Date = new Date();
    var day = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"][today.getDay()];
    var date = today.getDate();
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

/***/ "./src/messages/createReply.ts":
/*!*************************************!*\
  !*** ./src/messages/createReply.ts ***!
  \*************************************/
/*! exports provided: createReply */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createReply", function() { return createReply; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _dialogflow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dialogflow */ "./src/messages/dialogflow.ts");
/* harmony import */ var _createPush__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createPush */ "./src/messages/createPush.ts");



var createReply = function (userMessage) {
    var queryResult = new _dialogflow__WEBPACK_IMPORTED_MODULE_1__["Dialogflow"](userMessage).postQuery();
    var intent = queryResult.intent.displayName;
    var date = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["createDate"])(queryResult.parameters.date);
    var lngs = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["checkLanguage"])(userMessage);
    // return LanguageApp.translate(userMessage, lngs[0], lngs[1]);
    switch (intent) {
        case "trash":
            return Object(_createPush__WEBPACK_IMPORTED_MODULE_2__["createPush"])();
        case "weather":
            return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["forecasts"])(date);
        default:
            return LanguageApp.translate(userMessage, lngs[0], lngs[1]);
    }
};


/***/ }),

/***/ "./src/messages/dialogflow.ts":
/*!************************************!*\
  !*** ./src/messages/dialogflow.ts ***!
  \************************************/
/*! exports provided: Dialogflow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dialogflow", function() { return Dialogflow; });
var scriptProperties = PropertiesService.getScriptProperties();
var dfUrlFormat = scriptProperties.getProperty("DF_URL_FORMAT");
var Dialogflow = /** @class */ (function () {
    function Dialogflow(message) {
        this.sessionID = Math.random().toString(32).substring(2);
        this.message = message;
    }
    Dialogflow.prototype.postQuery = function () {
        var body = {
            queryInput: {
                text: {
                    languageCode: "ja",
                    text: this.message,
                },
            },
            queryParams: {
                timeZone: "Asia/Tokyo",
            },
        };
        var options = {
            contentType: "application/json; charset=utf-8",
            headers: {
                Authorization: "Bearer " + getAccessToken(),
            },
            method: "POST",
            payload: JSON.stringify(body),
        };
        var response = UrlFetchApp.fetch(dfUrlFormat.replace(/{{sessionID}}/g, this.sessionID), options);
        return JSON.parse(response.getContentText()).queryResult;
    };
    return Dialogflow;
}());

var getAccessToken = function () {
    var jsonKey = JSON.parse(scriptProperties.getProperty("GOOGLE_APPLICATION_CREDENTIALS"));
    var serverToken = new GSApp.init(jsonKey.private_key, ["https://www.googleapis.com/auth/cloud-platform"], jsonKey.client_email);
    var tokens = serverToken
        .addUser(jsonKey.client_email)
        .requestToken()
        .getTokens();
    return tokens[jsonKey.client_email].token;
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
/* harmony import */ var _messages_createPush__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages/createPush */ "./src/messages/createPush.ts");

var accessToken = PropertiesService.getScriptProperties().getProperty("LINE_ACCESS_TOKEN");
var userId = PropertiesService.getScriptProperties().getProperty("MY_ID");
var pushMessage = function () {
    var url = "https://api.line.me/v2/bot/message/push";
    var headers = {
        Authorization: "Bearer " + accessToken,
        "Content-Type": "application/json; charset=UTF-8",
    };
    var postDatas = {
        messages: [
            {
                text: Object(_messages_createPush__WEBPACK_IMPORTED_MODULE_0__["createPush"])(),
                type: "text",
            },
        ],
        to: userId,
    };
    var options = {
        headers: headers,
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
/* harmony import */ var _messages_createReply__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages/createReply */ "./src/messages/createReply.ts");

var reply = function (e) {
    var accessToken = PropertiesService.getScriptProperties().getProperty("LINE_ACCESS_TOKEN");
    var json = JSON.parse(e.postData.contents).events[0];
    var replyToken = json.replyToken;
    var userMessage = json.message.text;
    var url = "https://api.line.me/v2/bot/message/reply";
    var headers = {
        Authorization: "Bearer " + accessToken,
        "Content-Type": "application/json; charset=UTF-8",
    };
    var postDatas = {
        messages: [
            {
                text: Object(_messages_createReply__WEBPACK_IMPORTED_MODULE_0__["createReply"])(userMessage),
                // text: `${userMessage}!!`,
                type: "text",
            },
        ],
        replyToken: replyToken,
    };
    var options = {
        headers: headers,
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
var forecasts = function (date) {
    if (date === void 0) { date = new Date(); }
    var url = PropertiesService.getScriptProperties().getProperty("DARK_SKY_URL");
    var latitude = "35.41";
    var longitude = "139.45";
    var queryParams = "?lang=ja&units=si&exclude=currently,minutely,hourly,alerts,flags";
    url = "" + url + latitude + "," + longitude + queryParams;
    var json = JSON.parse(UrlFetchApp.fetch(url).getContentText());
    var dateIndex = getDateIndex(new Date(), date);
    var forecast = json.daily.data[dateIndex];
    var result = "";
    if (dateIndex === 8) {
        result = Utilities.formatDate(date, "JST", "MM/dd(E)") + "\u306E\u5929\u6C17\u306F\u308F\u304B\u3089\u306A\u3044\u3088\u3002";
    }
    else {
        result = Utilities.formatDate(date, "JST", "MM/dd(E)") + "\u306F" + forecast.summary + "\n\u6700\u9AD8\u6C17\u6E29\u306F" + forecast.temperatureMax + "\u2103\n\u6700\u4F4E\u6C17\u6E29\u306F" + forecast.temperatureLow + "\u2103\n\u306E\u898B\u8FBC\u307F\u3067\u3059\u3002";
    }
    return result;
};
var getDateIndex = function (today, date) {
    if (today === void 0) { today = new Date(); }
    var a = today.getFullYear() * 366 + (today.getMonth() + 1) * 31 + today.getDate();
    var b = date.getFullYear() * 366 + (date.getMonth() + 1) * 31 + date.getDate();
    return b - a >= 0 && b - a <= 7 ? b - a : 8;
};
var createDate = function (dateString) {
    if (dateString === void 0) { dateString = new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getDate(); }
    var regexp = /\d{4}-\d{1,2}-\d{1,2}/g;
    var tmpArray = dateString.match(regexp)[0].split("-");
    var dateArray = tmpArray.map(function (str) { return +str; });
    return new Date(dateArray[0], dateArray[1] - 1, dateArray[2]);
};
var checkLanguage = function (text) {
    return /[A-Za-z]+/.test(text) ? ["en", "ja"] : ["ja", "en"];
};


/***/ })

/******/ });
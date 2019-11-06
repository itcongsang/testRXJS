webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./firebase/firebaseRx.ts":
/*!********************************!*\
  !*** ./firebase/firebaseRx.ts ***!
  \********************************/
/*! exports provided: loadDB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadDB", function() { return loadDB; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");




var loadDB = function loadDB() {
  try {
    var config = {
      apiKey: "AIzaSyDt10t0F8lMO53Zb9DJV67zSK6aygZSRSg",
      authDomain: "rodbook-d5dc3.firebaseapp.com",
      databaseURL: "https://rodbook-d5dc3.firebaseio.com",
      projectId: "rodbook-d5dc3",
      storageBucket: "rodbook-d5dc3.appspot.com",
      messagingSenderId: "141499012621",
      appId: "1:141499012621:web:0500232ef0ee063a"
    };
    firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(config);
  } catch (err) {
    // we skip the "already exists" message which is
    // not an actual error when we're hot-reloading
    if (!/already exists/.test(err.message)) {
      console.error('Firebase initialization error', err.stack);
    }
  }

  return firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a;
};



/***/ })

})
//# sourceMappingURL=index.js.5afb2e2231817b8221a2.hot-update.js.map
webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./rxServices/rxPost.ts":
/*!******************************!*\
  !*** ./rxServices/rxPost.ts ***!
  \******************************/
/*! exports provided: getData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getData", function() { return getData; });
/* harmony import */ var rxfire_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxfire/firestore */ "./node_modules/rxfire/firestore/dist/index.esm.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _demo_rx_firebase_firebaseRx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../demo-rx/firebase/firebaseRx */ "./firebase/firebaseRx.ts");




var getData = function getData() {
  var db = Object(_demo_rx_firebase_firebaseRx__WEBPACK_IMPORTED_MODULE_2__["loadDB"])();

  var _strGet = db.firestore().collection('books');

  var vaule = Object(rxfire_firestore__WEBPACK_IMPORTED_MODULE_0__["collectionData"])(_strGet, 'id').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (cities) {
    return console.log('This is just an observable!');
  }));
  return vaule;
};



/***/ })

})
//# sourceMappingURL=index.js.8dea9334f0513cc16eec.hot-update.js.map
webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./rxServices/rxPost.ts":
/*!******************************!*\
  !*** ./rxServices/rxPost.ts ***!
  \******************************/
/*! exports provided: manuager, demoCombineall, demoCombineallNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "manuager", function() { return manuager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "demoCombineall", function() { return demoCombineall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "demoCombineallNumber", function() { return demoCombineallNumber; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxfire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxfire/firestore */ "./node_modules/rxfire/firestore/dist/index.esm.js");
/* harmony import */ var _demo_rx_firebase_firebaseRx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../demo-rx/firebase/firebaseRx */ "./firebase/firebaseRx.ts");






var arrayA = ["a", "b", "c"];
var arrayB = ["1", "2", "3"];

var changestate = function changestate() {
  Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(3000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (val) {
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(val + 1);
  }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatAll"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe(function (val) {
    var ars = ["".concat(val)];
    arrayA = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(arrayA), ars);
    demoCombineallNumber(arrayA);
  });
};

var manuager = function manuager() {
  var db = Object(_demo_rx_firebase_firebaseRx__WEBPACK_IMPORTED_MODULE_4__["loadDB"])();

  var _strGet = db.firestore().collection('books');

  var vaule = Object(rxfire_firestore__WEBPACK_IMPORTED_MODULE_3__["collectionData"])(_strGet, 'id').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (cities) {
    return console.log('This is just an observable!');
  }));
  return vaule;
};

var demoCombineall = function demoCombineall() {
  Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(5000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(2)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (val) {
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (i) {
      return "Result (".concat(val, "): ").concat(i);
    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(5));
  })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["combineAll"])()).subscribe(function (x) {
    return console.log(x);
  });
};

var demoCombineallNumber = function demoCombineallNumber() {
  var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : arrayA;
  var result = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["concat"])(arr, arrayB).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["combineAll"])());
  changestate();
  return result;
};



/***/ })

})
//# sourceMappingURL=index.js.f475ca6860850b74c67d.hot-update.js.map
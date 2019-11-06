webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index/index.tsx":
/*!*******************************!*\
  !*** ./pages/index/index.tsx ***!
  \*******************************/
/*! exports provided: Home, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home", function() { return Home; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_global_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/global/layout */ "./components/global/layout/index.tsx");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.scss */ "./pages/index/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _rxServices_rxPost__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../rxServices/rxPost */ "./rxServices/rxPost.ts");





var Home = function Home() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      listString = _useState2[0],
      setList = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    Object(_rxServices_rxPost__WEBPACK_IMPORTED_MODULE_4__["manuager"])().subscribe({
      next: function next(val) {
        setList(val);
      },
      error: function error(err) {
        return console.log("Lỗi: " + err);
      },
      complete: function complete() {
        return console.log("complete");
      }
    });
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_global_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Dashbord",
    description: "This is the home page"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "home-page"
  }, "This is is the home page"), listString.map(function (t, i) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: i
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, t.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, t.reader));
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

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
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxfire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxfire/firestore */ "./node_modules/rxfire/firestore/dist/index.esm.js");
/* harmony import */ var _demo_rx_firebase_firebaseRx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../demo-rx/firebase/firebaseRx */ "./firebase/firebaseRx.ts");








var arrayA = ["a", "b", "c"];
var arrayB = ["1", "2", "3"];

var changestate = function changestate() {
  Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(3000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (val) {
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(val + 1);
  }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatAll"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe(function (val) {
    var ars = ["".concat(val)];
    arrayA = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(arrayA), ars);
    demoCombineallNumber(arrayA);
  });
};

var manuager =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var db, _strGet, vaule;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Object(_demo_rx_firebase_firebaseRx__WEBPACK_IMPORTED_MODULE_6__["loadDB"])();

          case 2:
            db = _context.sent;
            _strGet = db.firestore().collection('books');
            vaule = Object(rxfire_firestore__WEBPACK_IMPORTED_MODULE_5__["collectionData"])(_strGet, 'id').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (cities) {
              return console.log('This is just an observable!');
            }));
            return _context.abrupt("return", vaule);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function manuager() {
    return _ref.apply(this, arguments);
  };
}();

var demoCombineall = function demoCombineall() {
  Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(5000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(2)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (val) {
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (i) {
      return "Result (".concat(val, "): ").concat(i);
    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(5));
  })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["combineAll"])()).subscribe(function (x) {
    return console.log(x);
  });
};

var demoCombineallNumber = function demoCombineallNumber() {
  var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : arrayA;
  var result = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["concat"])(arr, arrayB).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["combineAll"])());
  changestate();
  return result;
};



/***/ })

})
//# sourceMappingURL=index.js.cea8427d1b761f2d79ac.hot-update.js.map
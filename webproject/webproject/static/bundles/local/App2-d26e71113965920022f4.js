webpackJsonp([1],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	eval("/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require(\"/home/capo/Documents/Frogslayer/BlogCodingAudition/webproject/node_modules/react-hot-api/modules/index.js\"), RootInstanceProvider = require(\"/home/capo/Documents/Frogslayer/BlogCodingAudition/webproject/node_modules/react-hot-loader/RootInstanceProvider.js\"), ReactMount = require(\"react/lib/ReactMount\"), React = require(\"react\"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n\"use strict\";\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(158);\n\nvar _BlogList = __webpack_require__(159);\n\nvar _BlogList2 = _interopRequireDefault(_BlogList);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar api_loc = 'http://127.0.0.1:8000/api/';\n\nvar App1 = function (_React$Component) {\n  _inherits(App1, _React$Component);\n\n  function App1() {\n    _classCallCheck(this, App1);\n\n    var _this = _possibleConstructorReturn(this, (App1.__proto__ || Object.getPrototypeOf(App1)).call(this));\n\n    _this.state = {\n      blog: {}, //for storing the content of the blogs\n      restloc: api_loc, //for storing the location we query for data\n      filter: '' //what author are we filtering for?\n    };\n\n    //bind this for our functions\n    _this.changeFilter = _this.changeFilter.bind(_this);\n    _this.getRest = _this.getRest.bind(_this);\n    return _this;\n  }\n\n  _createClass(App1, [{\n    key: \"getRest\",\n    value: function getRest() {\n      var _this2 = this;\n\n      //get the data for our app, recursively called every 5 seconds\n      fetch(this.state.restloc + BLOG_ID + '.json').then(function (result) {\n        return result.json();\n      }).then(function (blogs) {\n        return _this2.setState({ blog: blog });\n      }).then(function () {\n        return setTimeout(_this2.getRest, 5000);\n      });\n    }\n  }, {\n    key: \"changeFilter\",\n    value: function changeFilter(event) {\n      // update the username that we filter by\n      this.setState({ filter: event.target.value });\n    }\n  }, {\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      //start our pseudo-hot refresh loop\n      this.getRest();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return _react2.default.createElement(\n        \"div\",\n        null,\n        \"Testify\"\n      );\n    }\n  }]);\n\n  return App1;\n}(_react2.default.Component);\n\n(0, _reactDom.render)(_react2.default.createElement(App2, null), document.getElementById('App2'));\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require(\"/home/capo/Documents/Frogslayer/BlogCodingAudition/webproject/node_modules/react-hot-loader/makeExportsHot.js\"); if (makeExportsHot(module, require(\"react\"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot apply hot update to \" + \"App2.jsx\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWFjdGpzL0FwcDIuanN4P2QyZGYiXSwibmFtZXMiOlsiYXBpX2xvYyIsIkFwcDEiLCJzdGF0ZSIsImJsb2ciLCJyZXN0bG9jIiwiZmlsdGVyIiwiY2hhbmdlRmlsdGVyIiwiYmluZCIsImdldFJlc3QiLCJmZXRjaCIsIkJMT0dfSUQiLCJ0aGVuIiwicmVzdWx0IiwianNvbiIsInNldFN0YXRlIiwic2V0VGltZW91dCIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJDb21wb25lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxVQUFVLDRCQUFkOztJQUVNQyxJOzs7QUFDSixrQkFBYztBQUFBOztBQUFBOztBQUVaLFVBQUtDLEtBQUwsR0FBVztBQUNUQyxZQUFLLEVBREksRUFDUTtBQUNqQkMsZUFBU0osT0FGQSxFQUVTO0FBQ2xCSyxjQUFRLEVBSEMsQ0FHUztBQUhULEtBQVg7O0FBTUE7QUFDQSxVQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JDLElBQWxCLE9BQXBCO0FBQ0EsVUFBS0MsT0FBTCxHQUFlLE1BQUtBLE9BQUwsQ0FBYUQsSUFBYixPQUFmO0FBVlk7QUFXYjs7Ozs4QkFFUTtBQUFBOztBQUF5QztBQUNoREUsWUFBTSxLQUFLUCxLQUFMLENBQVdFLE9BQVgsR0FBcUJNLE9BQXJCLEdBQStCLE9BQXJDLEVBQ0dDLElBREgsQ0FDUTtBQUFBLGVBQVFDLE9BQU9DLElBQVAsRUFBUjtBQUFBLE9BRFIsRUFFR0YsSUFGSCxDQUVRO0FBQUEsZUFBTyxPQUFLRyxRQUFMLENBQWMsRUFBQ1gsVUFBRCxFQUFkLENBQVA7QUFBQSxPQUZSLEVBR0dRLElBSEgsQ0FHUTtBQUFBLGVBQUlJLFdBQVcsT0FBS1AsT0FBaEIsRUFBeUIsSUFBekIsQ0FBSjtBQUFBLE9BSFI7QUFJRDs7O2lDQUVZUSxLLEVBQU87QUFBRTtBQUNwQixXQUFLRixRQUFMLENBQWMsRUFBQ1QsUUFBUVcsTUFBTUMsTUFBTixDQUFhQyxLQUF0QixFQUFkO0FBQ0Q7Ozt3Q0FFa0I7QUFBRTtBQUNuQixXQUFLVixPQUFMO0FBQ0Q7Ozs2QkFFUTtBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURGO0FBS0Q7Ozs7RUFuQ2dCLGdCQUFNVyxTOztBQXNDekIsc0JBQU8sOEJBQUMsSUFBRCxPQUFQLEVBQWdCQyxTQUFTQyxjQUFULENBQXdCLE1BQXhCLENBQWhCLEUiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcInJlYWN0LWRvbVwiXG5cbmltcG9ydCBCbG9nTGlzdCBmcm9tIFwiLi9jb250YWluZXJzL0Jsb2dMaXN0XCJcblxudmFyIGFwaV9sb2MgPSAnaHR0cDovLzEyNy4wLjAuMTo4MDAwL2FwaS8nXG5cbmNsYXNzIEFwcDEgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGU9e1xuICAgICAgYmxvZzp7fSwgICAgICAgICAvL2ZvciBzdG9yaW5nIHRoZSBjb250ZW50IG9mIHRoZSBibG9nc1xuICAgICAgcmVzdGxvYzogYXBpX2xvYywgLy9mb3Igc3RvcmluZyB0aGUgbG9jYXRpb24gd2UgcXVlcnkgZm9yIGRhdGFcbiAgICAgIGZpbHRlcjogJycgICAgICAgIC8vd2hhdCBhdXRob3IgYXJlIHdlIGZpbHRlcmluZyBmb3I/XG4gICAgfTtcblxuICAgIC8vYmluZCB0aGlzIGZvciBvdXIgZnVuY3Rpb25zXG4gICAgdGhpcy5jaGFuZ2VGaWx0ZXIgPSB0aGlzLmNoYW5nZUZpbHRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ2V0UmVzdCA9IHRoaXMuZ2V0UmVzdC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgZ2V0UmVzdCgpeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2dldCB0aGUgZGF0YSBmb3Igb3VyIGFwcCwgcmVjdXJzaXZlbHkgY2FsbGVkIGV2ZXJ5IDUgc2Vjb25kc1xuICAgIGZldGNoKHRoaXMuc3RhdGUucmVzdGxvYyArIEJMT0dfSUQgKyAnLmpzb24nKVxuICAgICAgLnRoZW4ocmVzdWx0PT5yZXN1bHQuanNvbigpKVxuICAgICAgLnRoZW4oYmxvZ3M9PnRoaXMuc2V0U3RhdGUoe2Jsb2d9KSlcbiAgICAgIC50aGVuKCgpPT5zZXRUaW1lb3V0KHRoaXMuZ2V0UmVzdCwgNTAwMCkpOyBcbiAgfVxuXG4gIGNoYW5nZUZpbHRlcihldmVudCkgeyAvLyB1cGRhdGUgdGhlIHVzZXJuYW1lIHRoYXQgd2UgZmlsdGVyIGJ5XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZmlsdGVyOiBldmVudC50YXJnZXQudmFsdWV9KTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCl7IC8vc3RhcnQgb3VyIHBzZXVkby1ob3QgcmVmcmVzaCBsb29wXG4gICAgdGhpcy5nZXRSZXN0KClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgVGVzdGlmeVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbnJlbmRlcig8QXBwMi8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQXBwMicpKVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3JlYWN0anMvQXBwMi5qc3giXSwic291cmNlUm9vdCI6IiJ9");

/***/ })
]);
webpackJsonp([1],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	eval("/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require(\"/home/capo/Documents/Frogslayer/BlogCodingAudition/webproject/node_modules/react-hot-api/modules/index.js\"), RootInstanceProvider = require(\"/home/capo/Documents/Frogslayer/BlogCodingAudition/webproject/node_modules/react-hot-loader/RootInstanceProvider.js\"), ReactMount = require(\"react/lib/ReactMount\"), React = require(\"react\"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n\"use strict\";\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(158);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar api_loc = 'http://127.0.0.1:8000/api/';\n\nvar App2 = function (_React$Component) {\n  _inherits(App2, _React$Component);\n\n  function App2() {\n    _classCallCheck(this, App2);\n\n    var _this = _possibleConstructorReturn(this, (App2.__proto__ || Object.getPrototypeOf(App2)).call(this));\n\n    _this.state = {\n      blog: {}, //for storing the content of the blogs\n      restloc: api_loc, //for storing the location we query for data\n      filter: '' //what author are we filtering for?\n    };\n\n    //bind this for our functions\n    _this.changeFilter = _this.changeFilter.bind(_this);\n    _this.getRest = _this.getRest.bind(_this);\n    return _this;\n  }\n\n  _createClass(App2, [{\n    key: \"getRest\",\n    value: function getRest() {\n      var _this2 = this;\n\n      //get the data for our app, recursively called every 5 seconds\n      fetch(this.state.restloc + BLOG_ID + '.json').then(function (result) {\n        return result.json();\n      }).then(function (blogs) {\n        return _this2.setState({ blog: blog });\n      }).then(function () {\n        return setTimeout(_this2.getRest, 5000);\n      });\n    }\n  }, {\n    key: \"changeFilter\",\n    value: function changeFilter(event) {\n      // update the username that we filter by\n      this.setState({ filter: event.target.value });\n    }\n  }, {\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      //start our pseudo-hot refresh loop\n      this.getRest();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return _react2.default.createElement(\n        \"div\",\n        null,\n        _react2.default.createElement(\n          \"header\",\n          { \"class\": \"masthead\", style: \"background-image: url('static/img/frog2.jpg')\" },\n          _react2.default.createElement(\"div\", { \"class\": \"overlay\" }),\n          _react2.default.createElement(\n            \"div\",\n            { \"class\": \"container\" },\n            _react2.default.createElement(\n              \"div\",\n              { \"class\": \"row\" },\n              _react2.default.createElement(\n                \"div\",\n                { \"class\": \"col-lg-8 col-md-10 mx-auto\" },\n                _react2.default.createElement(\n                  \"div\",\n                  { \"class\": \"site-heading\" },\n                  _react2.default.createElement(\n                    \"h1\",\n                    null,\n                    this.state.blog.title\n                  ),\n                  _react2.default.createElement(\n                    \"h2\",\n                    null,\n                    this.state.blog.blog.description\n                  ),\n                  _react2.default.createElement(\n                    \"p\",\n                    { \"class\": \"post-meta\" },\n                    \"Posted by\",\n                    this.state.blog.username,\n                    \"on \",\n                    this.state.blog.plaindate\n                  )\n                )\n              )\n            )\n          )\n        ),\n        _react2.default.createElement(\n          \"div\",\n          { \"class\": \"container\" },\n          this.state.blog.content\n        )\n      );\n    }\n  }]);\n\n  return App2;\n}(_react2.default.Component);\n\n(0, _reactDom.render)(_react2.default.createElement(App2, null), document.getElementById('App2'));\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require(\"/home/capo/Documents/Frogslayer/BlogCodingAudition/webproject/node_modules/react-hot-loader/makeExportsHot.js\"); if (makeExportsHot(module, require(\"react\"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot apply hot update to \" + \"App2.jsx\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWFjdGpzL0FwcDIuanN4P2QyZGYiXSwibmFtZXMiOlsiYXBpX2xvYyIsIkFwcDIiLCJzdGF0ZSIsImJsb2ciLCJyZXN0bG9jIiwiZmlsdGVyIiwiY2hhbmdlRmlsdGVyIiwiYmluZCIsImdldFJlc3QiLCJmZXRjaCIsIkJMT0dfSUQiLCJ0aGVuIiwicmVzdWx0IiwianNvbiIsInNldFN0YXRlIiwic2V0VGltZW91dCIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwidXNlcm5hbWUiLCJwbGFpbmRhdGUiLCJjb250ZW50IiwiQ29tcG9uZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7OztBQUVBLElBQUlBLFVBQVUsNEJBQWQ7O0lBRU1DLEk7OztBQUNKLGtCQUFjO0FBQUE7O0FBQUE7O0FBRVosVUFBS0MsS0FBTCxHQUFXO0FBQ1RDLFlBQUssRUFESSxFQUNRO0FBQ2pCQyxlQUFTSixPQUZBLEVBRVM7QUFDbEJLLGNBQVEsRUFIQyxDQUdTO0FBSFQsS0FBWDs7QUFNQTtBQUNBLFVBQUtDLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkMsSUFBbEIsT0FBcEI7QUFDQSxVQUFLQyxPQUFMLEdBQWUsTUFBS0EsT0FBTCxDQUFhRCxJQUFiLE9BQWY7QUFWWTtBQVdiOzs7OzhCQUVRO0FBQUE7O0FBQXlDO0FBQ2hERSxZQUFNLEtBQUtQLEtBQUwsQ0FBV0UsT0FBWCxHQUFxQk0sT0FBckIsR0FBK0IsT0FBckMsRUFDR0MsSUFESCxDQUNRO0FBQUEsZUFBUUMsT0FBT0MsSUFBUCxFQUFSO0FBQUEsT0FEUixFQUVHRixJQUZILENBRVE7QUFBQSxlQUFPLE9BQUtHLFFBQUwsQ0FBYyxFQUFDWCxVQUFELEVBQWQsQ0FBUDtBQUFBLE9BRlIsRUFHR1EsSUFISCxDQUdRO0FBQUEsZUFBSUksV0FBVyxPQUFLUCxPQUFoQixFQUF5QixJQUF6QixDQUFKO0FBQUEsT0FIUjtBQUlEOzs7aUNBRVlRLEssRUFBTztBQUFFO0FBQ3BCLFdBQUtGLFFBQUwsQ0FBYyxFQUFDVCxRQUFRVyxNQUFNQyxNQUFOLENBQWFDLEtBQXRCLEVBQWQ7QUFDRDs7O3dDQUVrQjtBQUFFO0FBQ25CLFdBQUtWLE9BQUw7QUFDRDs7OzZCQUVRO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBUSxTQUFNLFVBQWQsRUFBeUIsT0FBTSwrQ0FBL0I7QUFDRSxpREFBSyxTQUFNLFNBQVgsR0FERjtBQUVFO0FBQUE7QUFBQSxjQUFLLFNBQU0sV0FBWDtBQUNFO0FBQUE7QUFBQSxnQkFBSyxTQUFNLEtBQVg7QUFDRTtBQUFBO0FBQUEsa0JBQUssU0FBTSw0QkFBWDtBQUNFO0FBQUE7QUFBQSxvQkFBSyxTQUFNLGNBQVg7QUFDRTtBQUFBO0FBQUE7QUFBTSx5QkFBS04sS0FBTCxDQUFXQyxJQUFYLENBQWdCZ0I7QUFBdEIsbUJBREY7QUFFRTtBQUFBO0FBQUE7QUFBTSx5QkFBS2pCLEtBQUwsQ0FBV0MsSUFBWCxDQUFnQkEsSUFBaEIsQ0FBcUJpQjtBQUEzQixtQkFGRjtBQUdFO0FBQUE7QUFBQSxzQkFBRyxTQUFNLFdBQVQ7QUFBQTtBQUNJLHlCQUFLbEIsS0FBTCxDQUFXQyxJQUFYLENBQWdCa0IsUUFEcEI7QUFBQTtBQUVPLHlCQUFLbkIsS0FBTCxDQUFXQyxJQUFYLENBQWdCbUI7QUFGdkI7QUFIRjtBQURGO0FBREY7QUFERjtBQUZGLFNBREY7QUFtQkU7QUFBQTtBQUFBLFlBQUssU0FBTSxXQUFYO0FBQ0ksZUFBS3BCLEtBQUwsQ0FBV0MsSUFBWCxDQUFnQm9CO0FBRHBCO0FBbkJGLE9BREY7QUF5QkQ7Ozs7RUF2RGdCLGdCQUFNQyxTOztBQTBEekIsc0JBQU8sOEJBQUMsSUFBRCxPQUFQLEVBQWdCQyxTQUFTQyxjQUFULENBQXdCLE1BQXhCLENBQWhCLEUiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcInJlYWN0LWRvbVwiXG5cbnZhciBhcGlfbG9jID0gJ2h0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvJ1xuXG5jbGFzcyBBcHAyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlPXtcbiAgICAgIGJsb2c6e30sICAgICAgICAgLy9mb3Igc3RvcmluZyB0aGUgY29udGVudCBvZiB0aGUgYmxvZ3NcbiAgICAgIHJlc3Rsb2M6IGFwaV9sb2MsIC8vZm9yIHN0b3JpbmcgdGhlIGxvY2F0aW9uIHdlIHF1ZXJ5IGZvciBkYXRhXG4gICAgICBmaWx0ZXI6ICcnICAgICAgICAvL3doYXQgYXV0aG9yIGFyZSB3ZSBmaWx0ZXJpbmcgZm9yP1xuICAgIH07XG5cbiAgICAvL2JpbmQgdGhpcyBmb3Igb3VyIGZ1bmN0aW9uc1xuICAgIHRoaXMuY2hhbmdlRmlsdGVyID0gdGhpcy5jaGFuZ2VGaWx0ZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmdldFJlc3QgPSB0aGlzLmdldFJlc3QuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGdldFJlc3QoKXsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9nZXQgdGhlIGRhdGEgZm9yIG91ciBhcHAsIHJlY3Vyc2l2ZWx5IGNhbGxlZCBldmVyeSA1IHNlY29uZHNcbiAgICBmZXRjaCh0aGlzLnN0YXRlLnJlc3Rsb2MgKyBCTE9HX0lEICsgJy5qc29uJylcbiAgICAgIC50aGVuKHJlc3VsdD0+cmVzdWx0Lmpzb24oKSlcbiAgICAgIC50aGVuKGJsb2dzPT50aGlzLnNldFN0YXRlKHtibG9nfSkpXG4gICAgICAudGhlbigoKT0+c2V0VGltZW91dCh0aGlzLmdldFJlc3QsIDUwMDApKTsgXG4gIH1cblxuICBjaGFuZ2VGaWx0ZXIoZXZlbnQpIHsgLy8gdXBkYXRlIHRoZSB1c2VybmFtZSB0aGF0IHdlIGZpbHRlciBieVxuICAgIHRoaXMuc2V0U3RhdGUoe2ZpbHRlcjogZXZlbnQudGFyZ2V0LnZhbHVlfSk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpeyAvL3N0YXJ0IG91ciBwc2V1ZG8taG90IHJlZnJlc2ggbG9vcFxuICAgIHRoaXMuZ2V0UmVzdCgpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoZWFkZXIgY2xhc3M9XCJtYXN0aGVhZFwiIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCdzdGF0aWMvaW1nL2Zyb2cyLmpwZycpXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm92ZXJsYXlcIj48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctOCBjb2wtbWQtMTAgbXgtYXV0b1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaXRlLWhlYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgIDxoMT57IHRoaXMuc3RhdGUuYmxvZy50aXRsZSB9PC9oMT5cbiAgICAgICAgICAgICAgICAgIDxoMj57IHRoaXMuc3RhdGUuYmxvZy5ibG9nLmRlc2NyaXB0aW9uIH08L2gyPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJwb3N0LW1ldGFcIj5Qb3N0ZWQgYnlcbiAgICAgICAgICAgICAgICAgICAgeyB0aGlzLnN0YXRlLmJsb2cudXNlcm5hbWUgfVxuICAgICAgICAgICAgICAgICAgICBvbiB7IHRoaXMuc3RhdGUuYmxvZy5wbGFpbmRhdGUgfVxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2hlYWRlcj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgeyB0aGlzLnN0YXRlLmJsb2cuY29udGVudCB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbnJlbmRlcig8QXBwMi8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQXBwMicpKVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZWFjdGpzL0FwcDIuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })
]);
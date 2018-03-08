webpackJsonp([1],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	eval("/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require(\"/home/capo/Documents/Frogslayer/BlogCodingAudition/webproject/node_modules/react-hot-api/modules/index.js\"), RootInstanceProvider = require(\"/home/capo/Documents/Frogslayer/BlogCodingAudition/webproject/node_modules/react-hot-loader/RootInstanceProvider.js\"), ReactMount = require(\"react/lib/ReactMount\"), React = require(\"react\"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n\"use strict\";\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(158);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar api_loc = 'http://127.0.0.1:8000/api/';\n\nvar App2 = function (_React$Component) {\n  _inherits(App2, _React$Component);\n\n  function App2() {\n    _classCallCheck(this, App2);\n\n    var _this = _possibleConstructorReturn(this, (App2.__proto__ || Object.getPrototypeOf(App2)).call(this));\n\n    _this.state = {\n      blog: {}, //for storing the content of the blogs\n      restloc: api_loc, //for storing the location we query for data\n      filter: '' //what author are we filtering for?\n    };\n\n    //bind this for our functions\n    _this.changeFilter = _this.changeFilter.bind(_this);\n    _this.getRest = _this.getRest.bind(_this);\n    return _this;\n  }\n\n  _createClass(App2, [{\n    key: \"getRest\",\n    value: function getRest() {\n      var _this2 = this;\n\n      //get the data for our app, recursively called every 5 seconds\n      fetch(this.state.restloc + BLOG_ID + '.json').then(function (result) {\n        return result.json();\n      }).then(function (blogs) {\n        return _this2.setState({ blog: blog });\n      }).then(function () {\n        return setTimeout(_this2.getRest, 5000);\n      });\n    }\n  }, {\n    key: \"changeFilter\",\n    value: function changeFilter(event) {\n      // update the username that we filter by\n      this.setState({ filter: event.target.value });\n    }\n  }, {\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      //start our pseudo-hot refresh loop\n      this.getRest();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return _react2.default.createElement(\n        \"div\",\n        null,\n        _react2.default.createElement(\n          \"header\",\n          { className: \"masthead\", style: { backgroundImage: \"url('static/img/frog2.jpg')\" } },\n          _react2.default.createElement(\"div\", { className: \"overlay\" }),\n          _react2.default.createElement(\n            \"div\",\n            { className: \"container\" },\n            _react2.default.createElement(\n              \"div\",\n              { className: \"row\" },\n              _react2.default.createElement(\n                \"div\",\n                { className: \"col-lg-8 col-md-10 mx-auto\" },\n                _react2.default.createElement(\n                  \"div\",\n                  { className: \"site-heading\" },\n                  _react2.default.createElement(\n                    \"h1\",\n                    null,\n                    this.state.blog.title\n                  ),\n                  _react2.default.createElement(\n                    \"h2\",\n                    null,\n                    this.state.blog.description\n                  ),\n                  _react2.default.createElement(\n                    \"p\",\n                    { className: \"post-meta\" },\n                    \"Posted by\",\n                    this.state.blog.username,\n                    \"on \",\n                    this.state.blog.plaindate\n                  )\n                )\n              )\n            )\n          )\n        ),\n        _react2.default.createElement(\n          \"div\",\n          { className: \"container\" },\n          this.state.blog.content\n        )\n      );\n    }\n  }]);\n\n  return App2;\n}(_react2.default.Component);\n\n(0, _reactDom.render)(_react2.default.createElement(App2, null), document.getElementById('App2'));\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require(\"/home/capo/Documents/Frogslayer/BlogCodingAudition/webproject/node_modules/react-hot-loader/makeExportsHot.js\"); if (makeExportsHot(module, require(\"react\"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot apply hot update to \" + \"App2.jsx\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWFjdGpzL0FwcDIuanN4P2QyZGYiXSwibmFtZXMiOlsiYXBpX2xvYyIsIkFwcDIiLCJzdGF0ZSIsImJsb2ciLCJyZXN0bG9jIiwiZmlsdGVyIiwiY2hhbmdlRmlsdGVyIiwiYmluZCIsImdldFJlc3QiLCJmZXRjaCIsIkJMT0dfSUQiLCJ0aGVuIiwicmVzdWx0IiwianNvbiIsInNldFN0YXRlIiwic2V0VGltZW91dCIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwidXNlcm5hbWUiLCJwbGFpbmRhdGUiLCJjb250ZW50IiwiQ29tcG9uZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7OztBQUVBLElBQUlBLFVBQVUsNEJBQWQ7O0lBRU1DLEk7OztBQUNKLGtCQUFjO0FBQUE7O0FBQUE7O0FBRVosVUFBS0MsS0FBTCxHQUFXO0FBQ1RDLFlBQUssRUFESSxFQUNRO0FBQ2pCQyxlQUFTSixPQUZBLEVBRVM7QUFDbEJLLGNBQVEsRUFIQyxDQUdTO0FBSFQsS0FBWDs7QUFNQTtBQUNBLFVBQUtDLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkMsSUFBbEIsT0FBcEI7QUFDQSxVQUFLQyxPQUFMLEdBQWUsTUFBS0EsT0FBTCxDQUFhRCxJQUFiLE9BQWY7QUFWWTtBQVdiOzs7OzhCQUVRO0FBQUE7O0FBQXlDO0FBQ2hERSxZQUFNLEtBQUtQLEtBQUwsQ0FBV0UsT0FBWCxHQUFxQk0sT0FBckIsR0FBK0IsT0FBckMsRUFDR0MsSUFESCxDQUNRO0FBQUEsZUFBUUMsT0FBT0MsSUFBUCxFQUFSO0FBQUEsT0FEUixFQUVHRixJQUZILENBRVE7QUFBQSxlQUFPLE9BQUtHLFFBQUwsQ0FBYyxFQUFDWCxVQUFELEVBQWQsQ0FBUDtBQUFBLE9BRlIsRUFHR1EsSUFISCxDQUdRO0FBQUEsZUFBSUksV0FBVyxPQUFLUCxPQUFoQixFQUF5QixJQUF6QixDQUFKO0FBQUEsT0FIUjtBQUlEOzs7aUNBRVlRLEssRUFBTztBQUFFO0FBQ3BCLFdBQUtGLFFBQUwsQ0FBYyxFQUFDVCxRQUFRVyxNQUFNQyxNQUFOLENBQWFDLEtBQXRCLEVBQWQ7QUFDRDs7O3dDQUVrQjtBQUFFO0FBQ25CLFdBQUtWLE9BQUw7QUFDRDs7OzZCQUVRO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBUSxXQUFVLFVBQWxCLEVBQTZCLE9BQU8sRUFBRVcsaUJBQWlCLDZCQUFuQixFQUFwQztBQUNFLGlEQUFLLFdBQVUsU0FBZixHQURGO0FBRUU7QUFBQTtBQUFBLGNBQUssV0FBVSxXQUFmO0FBQ0U7QUFBQTtBQUFBLGdCQUFLLFdBQVUsS0FBZjtBQUNFO0FBQUE7QUFBQSxrQkFBSyxXQUFVLDRCQUFmO0FBQ0U7QUFBQTtBQUFBLG9CQUFLLFdBQVUsY0FBZjtBQUNFO0FBQUE7QUFBQTtBQUFNLHlCQUFLakIsS0FBTCxDQUFXQyxJQUFYLENBQWdCaUI7QUFBdEIsbUJBREY7QUFFRTtBQUFBO0FBQUE7QUFBTSx5QkFBS2xCLEtBQUwsQ0FBV0MsSUFBWCxDQUFnQmtCO0FBQXRCLG1CQUZGO0FBR0U7QUFBQTtBQUFBLHNCQUFHLFdBQVUsV0FBYjtBQUFBO0FBQ0kseUJBQUtuQixLQUFMLENBQVdDLElBQVgsQ0FBZ0JtQixRQURwQjtBQUFBO0FBRU8seUJBQUtwQixLQUFMLENBQVdDLElBQVgsQ0FBZ0JvQjtBQUZ2QjtBQUhGO0FBREY7QUFERjtBQURGO0FBRkYsU0FERjtBQW1CRTtBQUFBO0FBQUEsWUFBSyxXQUFVLFdBQWY7QUFDSSxlQUFLckIsS0FBTCxDQUFXQyxJQUFYLENBQWdCcUI7QUFEcEI7QUFuQkYsT0FERjtBQXlCRDs7OztFQXZEZ0IsZ0JBQU1DLFM7O0FBMER6QixzQkFBTyw4QkFBQyxJQUFELE9BQVAsRUFBZ0JDLFNBQVNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBaEIsRSIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwicmVhY3QtZG9tXCJcblxudmFyIGFwaV9sb2MgPSAnaHR0cDovLzEyNy4wLjAuMTo4MDAwL2FwaS8nXG5cbmNsYXNzIEFwcDIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGU9e1xuICAgICAgYmxvZzp7fSwgICAgICAgICAvL2ZvciBzdG9yaW5nIHRoZSBjb250ZW50IG9mIHRoZSBibG9nc1xuICAgICAgcmVzdGxvYzogYXBpX2xvYywgLy9mb3Igc3RvcmluZyB0aGUgbG9jYXRpb24gd2UgcXVlcnkgZm9yIGRhdGFcbiAgICAgIGZpbHRlcjogJycgICAgICAgIC8vd2hhdCBhdXRob3IgYXJlIHdlIGZpbHRlcmluZyBmb3I/XG4gICAgfTtcblxuICAgIC8vYmluZCB0aGlzIGZvciBvdXIgZnVuY3Rpb25zXG4gICAgdGhpcy5jaGFuZ2VGaWx0ZXIgPSB0aGlzLmNoYW5nZUZpbHRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ2V0UmVzdCA9IHRoaXMuZ2V0UmVzdC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgZ2V0UmVzdCgpeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2dldCB0aGUgZGF0YSBmb3Igb3VyIGFwcCwgcmVjdXJzaXZlbHkgY2FsbGVkIGV2ZXJ5IDUgc2Vjb25kc1xuICAgIGZldGNoKHRoaXMuc3RhdGUucmVzdGxvYyArIEJMT0dfSUQgKyAnLmpzb24nKVxuICAgICAgLnRoZW4ocmVzdWx0PT5yZXN1bHQuanNvbigpKVxuICAgICAgLnRoZW4oYmxvZ3M9PnRoaXMuc2V0U3RhdGUoe2Jsb2d9KSlcbiAgICAgIC50aGVuKCgpPT5zZXRUaW1lb3V0KHRoaXMuZ2V0UmVzdCwgNTAwMCkpOyBcbiAgfVxuXG4gIGNoYW5nZUZpbHRlcihldmVudCkgeyAvLyB1cGRhdGUgdGhlIHVzZXJuYW1lIHRoYXQgd2UgZmlsdGVyIGJ5XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZmlsdGVyOiBldmVudC50YXJnZXQudmFsdWV9KTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCl7IC8vc3RhcnQgb3VyIHBzZXVkby1ob3QgcmVmcmVzaCBsb29wXG4gICAgdGhpcy5nZXRSZXN0KClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJtYXN0aGVhZFwiIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoJ3N0YXRpYy9pbWcvZnJvZzIuanBnJylcIiB9fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXlcIj48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctOCBjb2wtbWQtMTAgbXgtYXV0b1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2l0ZS1oZWFkaW5nXCI+XG4gICAgICAgICAgICAgICAgICA8aDE+eyB0aGlzLnN0YXRlLmJsb2cudGl0bGUgfTwvaDE+XG4gICAgICAgICAgICAgICAgICA8aDI+eyB0aGlzLnN0YXRlLmJsb2cuZGVzY3JpcHRpb24gfTwvaDI+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwb3N0LW1ldGFcIj5Qb3N0ZWQgYnlcbiAgICAgICAgICAgICAgICAgICAgeyB0aGlzLnN0YXRlLmJsb2cudXNlcm5hbWUgfVxuICAgICAgICAgICAgICAgICAgICBvbiB7IHRoaXMuc3RhdGUuYmxvZy5wbGFpbmRhdGUgfVxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2hlYWRlcj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIHsgdGhpcy5zdGF0ZS5ibG9nLmNvbnRlbnQgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5yZW5kZXIoPEFwcDIvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0FwcDInKSlcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVhY3Rqcy9BcHAyLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })
]);
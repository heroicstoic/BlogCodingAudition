webpackJsonp([0],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	eval("/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require(\"/home/capo/Documents/Frogslayer/BlogCodingAudition/webproject/node_modules/react-hot-api/modules/index.js\"), RootInstanceProvider = require(\"/home/capo/Documents/Frogslayer/BlogCodingAudition/webproject/node_modules/react-hot-loader/RootInstanceProvider.js\"), ReactMount = require(\"react/lib/ReactMount\"), React = require(\"react\"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n\"use strict\";\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(158);\n\nvar _BlogList = __webpack_require__(159);\n\nvar _BlogList2 = _interopRequireDefault(_BlogList);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar api_loc = 'http://127.0.0.1:8000/api.json';\n\nvar App1 = function (_React$Component) {\n  _inherits(App1, _React$Component);\n\n  function App1() {\n    _classCallCheck(this, App1);\n\n    var _this = _possibleConstructorReturn(this, (App1.__proto__ || Object.getPrototypeOf(App1)).call(this));\n\n    _this.get_rest = function () {\n      var _this2 = this;\n\n      if (this.state.filter == '') {\n        fetch(this.state.restloc).then(function (result) {\n          return result.json();\n        }).then(function (blogs) {\n          return _this2.setState({ blogs: blogs });\n        });\n      } else {\n        fetch(this.state.restloc + '?op=' + filter).then(function (result) {\n          return result.json();\n        }).then(function (blogs) {\n          return _this2.setState({ blogs: blogs });\n        });\n      }\n    };\n\n    _this.state = {\n      blogs: [], //for storing the content of the blogs\n      restloc: api_loc, //for storing the location we query for data\n      filter: '' //what author are we filtering for?\n    };\n    return _this;\n  }\n\n  _createClass(App1, [{\n    key: \"changeFilter\",\n    value: function changeFilter(_ref) {\n      var event = _ref.event;\n\n      this.setState({ filter: event.target.value });\n      get_rest();\n    }\n  }, {\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.get_rest();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return _react2.default.createElement(\n        \"div\",\n        null,\n        _react2.default.createElement(\"input\", { className: \"form-control\", type: \"text\", value: this.state.filter, onChange: this.changeFilter, placeholder: \"Filter by Original Poster\" }),\n        _react2.default.createElement(_BlogList2.default, { blogs: this.state.blogs })\n      );\n    }\n  }]);\n\n  return App1;\n}(_react2.default.Component);\n\n(0, _reactDom.render)(_react2.default.createElement(App1, null), document.getElementById('App1'));\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require(\"/home/capo/Documents/Frogslayer/BlogCodingAudition/webproject/node_modules/react-hot-loader/makeExportsHot.js\"); if (makeExportsHot(module, require(\"react\"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot apply hot update to \" + \"App1.jsx\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWFjdGpzL0FwcDEuanN4P2M0YmMiXSwibmFtZXMiOlsiYXBpX2xvYyIsIkFwcDEiLCJnZXRfcmVzdCIsInN0YXRlIiwiZmlsdGVyIiwiZmV0Y2giLCJyZXN0bG9jIiwidGhlbiIsInJlc3VsdCIsImpzb24iLCJzZXRTdGF0ZSIsImJsb2dzIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNoYW5nZUZpbHRlciIsIkNvbXBvbmVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQUVBLElBQUlBLFVBQVUsZ0NBQWQ7O0lBRU1DLEk7OztBQUNKLGtCQUFjO0FBQUE7O0FBQUE7O0FBQUEsVUFTZEMsUUFUYyxHQVNILFlBQVU7QUFBQTs7QUFDbkIsVUFBRyxLQUFLQyxLQUFMLENBQVdDLE1BQVgsSUFBcUIsRUFBeEIsRUFBMkI7QUFDekJDLGNBQU0sS0FBS0YsS0FBTCxDQUFXRyxPQUFqQixFQUNHQyxJQURILENBQ1E7QUFBQSxpQkFBUUMsT0FBT0MsSUFBUCxFQUFSO0FBQUEsU0FEUixFQUVHRixJQUZILENBRVE7QUFBQSxpQkFBTyxPQUFLRyxRQUFMLENBQWMsRUFBQ0MsWUFBRCxFQUFkLENBQVA7QUFBQSxTQUZSO0FBR0QsT0FKRCxNQUtJO0FBQ0ZOLGNBQU0sS0FBS0YsS0FBTCxDQUFXRyxPQUFYLEdBQXFCLE1BQXJCLEdBQThCRixNQUFwQyxFQUNHRyxJQURILENBQ1E7QUFBQSxpQkFBUUMsT0FBT0MsSUFBUCxFQUFSO0FBQUEsU0FEUixFQUVHRixJQUZILENBRVE7QUFBQSxpQkFBTyxPQUFLRyxRQUFMLENBQWMsRUFBQ0MsWUFBRCxFQUFkLENBQVA7QUFBQSxTQUZSO0FBR0Q7QUFDRixLQXBCYTs7QUFFWixVQUFLUixLQUFMLEdBQVc7QUFDVFEsYUFBTSxFQURHLEVBQ1M7QUFDbEJMLGVBQVNOLE9BRkEsRUFFUztBQUNsQkksY0FBUSxFQUhDLENBR1M7QUFIVCxLQUFYO0FBRlk7QUFPYjs7Ozt1Q0FlcUI7QUFBQSxVQUFSUSxLQUFRLFFBQVJBLEtBQVE7O0FBQ3BCLFdBQUtGLFFBQUwsQ0FBYyxFQUFDTixRQUFRUSxNQUFNQyxNQUFOLENBQWFDLEtBQXRCLEVBQWQ7QUFDQVo7QUFDRDs7O3dDQUVrQjtBQUNqQixXQUFLQSxRQUFMO0FBQ0Q7Ozs2QkFFUTtBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQ0UsaURBQU8sV0FBVSxjQUFqQixFQUFnQyxNQUFLLE1BQXJDLEVBQTRDLE9BQU8sS0FBS0MsS0FBTCxDQUFXQyxNQUE5RCxFQUFzRSxVQUFVLEtBQUtXLFlBQXJGLEVBQW1HLGFBQVksMkJBQS9HLEdBREY7QUFFRSw0REFBVSxPQUFPLEtBQUtaLEtBQUwsQ0FBV1EsS0FBNUI7QUFGRixPQURGO0FBTUQ7Ozs7RUF2Q2dCLGdCQUFNSyxTOztBQTBDekIsc0JBQU8sOEJBQUMsSUFBRCxPQUFQLEVBQWdCQyxTQUFTQyxjQUFULENBQXdCLE1BQXhCLENBQWhCLEUiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcInJlYWN0LWRvbVwiXG5cbmltcG9ydCBCbG9nTGlzdCBmcm9tIFwiLi9jb250YWluZXJzL0Jsb2dMaXN0XCJcblxudmFyIGFwaV9sb2MgPSAnaHR0cDovLzEyNy4wLjAuMTo4MDAwL2FwaS5qc29uJ1xuXG5jbGFzcyBBcHAxIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlPXtcbiAgICAgIGJsb2dzOltdLCAgICAgICAgIC8vZm9yIHN0b3JpbmcgdGhlIGNvbnRlbnQgb2YgdGhlIGJsb2dzXG4gICAgICByZXN0bG9jOiBhcGlfbG9jLCAvL2ZvciBzdG9yaW5nIHRoZSBsb2NhdGlvbiB3ZSBxdWVyeSBmb3IgZGF0YVxuICAgICAgZmlsdGVyOiAnJyAgICAgICAgLy93aGF0IGF1dGhvciBhcmUgd2UgZmlsdGVyaW5nIGZvcj9cbiAgICB9O1xuICB9XG5cbiAgZ2V0X3Jlc3QgPSBmdW5jdGlvbigpe1xuICAgIGlmKHRoaXMuc3RhdGUuZmlsdGVyID09ICcnKXtcbiAgICAgIGZldGNoKHRoaXMuc3RhdGUucmVzdGxvYylcbiAgICAgICAgLnRoZW4ocmVzdWx0PT5yZXN1bHQuanNvbigpKVxuICAgICAgICAudGhlbihibG9ncz0+dGhpcy5zZXRTdGF0ZSh7YmxvZ3N9KSk7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICBmZXRjaCh0aGlzLnN0YXRlLnJlc3Rsb2MgKyAnP29wPScgKyBmaWx0ZXIpXG4gICAgICAgIC50aGVuKHJlc3VsdD0+cmVzdWx0Lmpzb24oKSlcbiAgICAgICAgLnRoZW4oYmxvZ3M9PnRoaXMuc2V0U3RhdGUoe2Jsb2dzfSkpO1xuICAgIH1cbiAgfVxuXG4gIGNoYW5nZUZpbHRlcih7ZXZlbnR9KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZmlsdGVyOiBldmVudC50YXJnZXQudmFsdWV9KTtcbiAgICBnZXRfcmVzdCgpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICB0aGlzLmdldF9yZXN0KClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUuZmlsdGVyfSBvbkNoYW5nZT17dGhpcy5jaGFuZ2VGaWx0ZXJ9IHBsYWNlaG9sZGVyPVwiRmlsdGVyIGJ5IE9yaWdpbmFsIFBvc3RlclwiIC8+XG4gICAgICAgIDxCbG9nTGlzdCBibG9ncz17dGhpcy5zdGF0ZS5ibG9nc30gLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5yZW5kZXIoPEFwcDEvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0FwcDEnKSlcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZWFjdGpzL0FwcDEuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nmodule.exports = __webpack_require__(3);\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWRvbS9pbmRleC5qcz9mOTFjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBIiwiZmlsZSI6IjE1OC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCdyZWFjdC9saWIvUmVhY3RET00nKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1kb20vaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDE1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

	eval("/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require(\"/home/capo/Documents/Frogslayer/BlogCodingAudition/webproject/node_modules/react-hot-api/modules/index.js\"), RootInstanceProvider = require(\"/home/capo/Documents/Frogslayer/BlogCodingAudition/webproject/node_modules/react-hot-loader/RootInstanceProvider.js\"), ReactMount = require(\"react/lib/ReactMount\"), React = require(\"react\"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.default = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Blog = __webpack_require__(160);\n\nvar _Blog2 = _interopRequireDefault(_Blog);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar BlogList = function (_React$Component) {\n\t_inherits(BlogList, _React$Component);\n\n\tfunction BlogList() {\n\t\t_classCallCheck(this, BlogList);\n\n\t\treturn _possibleConstructorReturn(this, (BlogList.__proto__ || Object.getPrototypeOf(BlogList)).apply(this, arguments));\n\t}\n\n\t_createClass(BlogList, [{\n\t\tkey: \"render\",\n\t\tvalue: function render() {\n\t\t\treturn _react2.default.createElement(\n\t\t\t\t\"div\",\n\t\t\t\t{ className: \"row\" },\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\"div\",\n\t\t\t\t\t{ className: \"col-lg-8 col-md-10 mx-auto\" },\n\t\t\t\t\tthis.props.blogs.map(function (blog) {\n\t\t\t\t\t\treturn _react2.default.createElement(_Blog2.default, { title: blog.title, content: blog.content, username: blog.username, plaindate: blog.plaindate, key: blog.id });\n\t\t\t\t\t})\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn BlogList;\n}(_react2.default.Component);\n\nexports.default = BlogList;\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require(\"/home/capo/Documents/Frogslayer/BlogCodingAudition/webproject/node_modules/react-hot-loader/makeExportsHot.js\"); if (makeExportsHot(module, require(\"react\"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot apply hot update to \" + \"BlogList.jsx\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWFjdGpzL2NvbnRhaW5lcnMvQmxvZ0xpc3QuanN4PzJjODMiXSwibmFtZXMiOlsiQmxvZ0xpc3QiLCJwcm9wcyIsImJsb2dzIiwibWFwIiwiYmxvZyIsInRpdGxlIiwiY29udGVudCIsInVzZXJuYW1lIiwicGxhaW5kYXRlIiwiaWQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFFQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxROzs7Ozs7Ozs7OzsyQkFDWDtBQUNSLFVBQ0M7QUFBQTtBQUFBLE1BQUssV0FBVSxLQUFmO0FBQ0M7QUFBQTtBQUFBLE9BQUssV0FBVSw0QkFBZjtBQUNFLFVBQUtDLEtBQUwsQ0FBV0MsS0FBWCxDQUFpQkMsR0FBakIsQ0FBcUIsVUFBU0MsSUFBVCxFQUFjO0FBQ25DLGFBQU8sZ0RBQU0sT0FBT0EsS0FBS0MsS0FBbEIsRUFBeUIsU0FBU0QsS0FBS0UsT0FBdkMsRUFBZ0QsVUFBVUYsS0FBS0csUUFBL0QsRUFBeUUsV0FBV0gsS0FBS0ksU0FBekYsRUFBb0csS0FBS0osS0FBS0ssRUFBOUcsR0FBUDtBQUNBLE1BRkE7QUFERjtBQURELElBREQ7QUFTQTs7OztFQVhvQyxnQkFBTUMsUzs7a0JBQXZCVixRIiwiZmlsZSI6IjE1OS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuXG5pbXBvcnQgQmxvZyBmcm9tIFwiLi4vY29tcG9uZW50cy9CbG9nXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmxvZ0xpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTggY29sLW1kLTEwIG14LWF1dG9cIj5cblx0XHRcdFx0XHR7dGhpcy5wcm9wcy5ibG9ncy5tYXAoZnVuY3Rpb24oYmxvZyl7XG5cdFx0XHRcdFx0XHRyZXR1cm4gPEJsb2cgdGl0bGU9e2Jsb2cudGl0bGV9IGNvbnRlbnQ9e2Jsb2cuY29udGVudH0gdXNlcm5hbWU9e2Jsb2cudXNlcm5hbWV9IHBsYWluZGF0ZT17YmxvZy5wbGFpbmRhdGV9IGtleT17YmxvZy5pZH0gLz5cblx0XHRcdFx0XHR9KX1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZWFjdGpzL2NvbnRhaW5lcnMvQmxvZ0xpc3QuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

	eval("/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require(\"/home/capo/Documents/Frogslayer/BlogCodingAudition/webproject/node_modules/react-hot-api/modules/index.js\"), RootInstanceProvider = require(\"/home/capo/Documents/Frogslayer/BlogCodingAudition/webproject/node_modules/react-hot-loader/RootInstanceProvider.js\"), ReactMount = require(\"react/lib/ReactMount\"), React = require(\"react\"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.default = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(158);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Blog = function (_React$Component) {\n\t_inherits(Blog, _React$Component);\n\n\tfunction Blog() {\n\t\t_classCallCheck(this, Blog);\n\n\t\treturn _possibleConstructorReturn(this, (Blog.__proto__ || Object.getPrototypeOf(Blog)).apply(this, arguments));\n\t}\n\n\t_createClass(Blog, [{\n\t\tkey: \"render\",\n\t\tvalue: function render() {\n\t\t\treturn _react2.default.createElement(\n\t\t\t\t\"div\",\n\t\t\t\t{ className: \"post-preview\" },\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\"h2\",\n\t\t\t\t\t{ className: \"post-title\" },\n\t\t\t\t\tthis.props.title\n\t\t\t\t),\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\"p\",\n\t\t\t\t\t{ className: \"post-subtitle\" },\n\t\t\t\t\tthis.props.content\n\t\t\t\t),\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\"p\",\n\t\t\t\t\t{ className: \"post-meta\" },\n\t\t\t\t\t\"Posted by \",\n\t\t\t\t\tthis.props.username,\n\t\t\t\t\t\" on \",\n\t\t\t\t\tthis.props.plaindate\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn Blog;\n}(_react2.default.Component);\n\nexports.default = Blog;\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require(\"/home/capo/Documents/Frogslayer/BlogCodingAudition/webproject/node_modules/react-hot-loader/makeExportsHot.js\"); if (makeExportsHot(module, require(\"react\"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot apply hot update to \" + \"Blog.jsx\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWFjdGpzL2NvbXBvbmVudHMvQmxvZy5qc3g/YmQ4YSJdLCJuYW1lcyI6WyJCbG9nIiwicHJvcHMiLCJ0aXRsZSIsImNvbnRlbnQiLCJ1c2VybmFtZSIsInBsYWluZGF0ZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7O0lBRXFCQSxJOzs7Ozs7Ozs7OzsyQkFDWDtBQUNSLFVBQ0M7QUFBQTtBQUFBLE1BQUssV0FBVSxjQUFmO0FBQ0M7QUFBQTtBQUFBLE9BQUksV0FBVSxZQUFkO0FBQ0csVUFBS0MsS0FBTCxDQUFXQztBQURkLEtBREQ7QUFJQztBQUFBO0FBQUEsT0FBRyxXQUFVLGVBQWI7QUFDRyxVQUFLRCxLQUFMLENBQVdFO0FBRGQsS0FKRDtBQU9DO0FBQUE7QUFBQSxPQUFHLFdBQVUsV0FBYjtBQUFBO0FBQXFDLFVBQUtGLEtBQUwsQ0FBV0csUUFBaEQ7QUFBQTtBQUFnRSxVQUFLSCxLQUFMLENBQVdJO0FBQTNFO0FBUEQsSUFERDtBQVlBOzs7O0VBZGdDLGdCQUFNQyxTOztrQkFBbkJOLEkiLCJmaWxlIjoiMTYwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwicmVhY3QtZG9tXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmxvZyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3N0LXByZXZpZXdcIj5cblx0XHRcdFx0PGgyIGNsYXNzTmFtZT1cInBvc3QtdGl0bGVcIj5cblx0XHRcdFx0XHR7IHRoaXMucHJvcHMudGl0bGUgfVxuXHRcdFx0XHQ8L2gyPlxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJwb3N0LXN1YnRpdGxlXCI+XG5cdFx0XHRcdFx0eyB0aGlzLnByb3BzLmNvbnRlbnQgfVxuXHRcdFx0XHQ8L3A+XG5cdFx0XHRcdDxwIGNsYXNzTmFtZT1cInBvc3QtbWV0YVwiPlBvc3RlZCBieSB7IHRoaXMucHJvcHMudXNlcm5hbWUgfSBvbiB7IHRoaXMucHJvcHMucGxhaW5kYXRlIH1cblx0XHRcdFx0PC9wPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVhY3Rqcy9jb21wb25lbnRzL0Jsb2cuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

});
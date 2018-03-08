webpackJsonp([0],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	eval("/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require(\"/home/capo/Documents/Frogslayer/BlogCodingAudition/webproject/node_modules/react-hot-api/modules/index.js\"), RootInstanceProvider = require(\"/home/capo/Documents/Frogslayer/BlogCodingAudition/webproject/node_modules/react-hot-loader/RootInstanceProvider.js\"), ReactMount = require(\"react/lib/ReactMount\"), React = require(\"react\"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n\"use strict\";\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(158);\n\nvar _BlogList = __webpack_require__(159);\n\nvar _BlogList2 = _interopRequireDefault(_BlogList);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar api_loc = 'http://127.0.0.1:8000/api.json';\n\nvar App1 = function (_React$Component) {\n  _inherits(App1, _React$Component);\n\n  function App1() {\n    _classCallCheck(this, App1);\n\n    var _this = _possibleConstructorReturn(this, (App1.__proto__ || Object.getPrototypeOf(App1)).call(this));\n\n    _this.state = {\n      blogs: [], //for storing the content of the blogs\n      restloc: api_loc, //for storing the location we query for data\n      filter: '' //what author are we filtering for?\n    };\n\n    //bind this for our functions\n    _this.changeFilter = _this.changeFilter.bind(_this);\n    _this.getRest = _this.getRest.bind(_this);\n    return _this;\n  }\n\n  _createClass(App1, [{\n    key: \"getRest\",\n    value: function getRest() {\n      var _this2 = this;\n\n      //get the data for our app, recursively called every 5 seconds\n      if (this.state.filter == '') {\n        // if no filter set, just lookup the whole list\n        fetch(this.state.restloc).then(function (result) {\n          return result.json();\n        }).then(function (blogs) {\n          return _this2.setState({ blogs: blogs });\n        }).then(function () {\n          return setTimeout(_this2.getRest, 5000);\n        });\n      } else {\n        // if we want to filter, simply examine filtered data\n        fetch(this.state.restloc + '?op=' + this.state.filter).then(function (result) {\n          return result.json();\n        }).then(function (blogs) {\n          return _this2.setState({ blogs: blogs });\n        }).then(function () {\n          return setTimeout(_this2.getRest, 5000);\n        });\n      }\n    }\n  }, {\n    key: \"changeFilter\",\n    value: function changeFilter(event) {\n      // update the username that we filter by\n      this.setState({ filter: event.target.value });\n    }\n  }, {\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      //start our pseudo-hot refresh loop\n      this.getRest();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return _react2.default.createElement(\n        \"div\",\n        null,\n        _react2.default.createElement(\"input\", { className: \"form-control\", type: \"text\", value: this.state.filter, onChange: this.changeFilter, placeholder: \"Filter by Original Poster\" }),\n        _react2.default.createElement(\"br\", null),\n        _react2.default.createElement(_BlogList2.default, { blogs: this.state.blogs })\n      );\n    }\n  }]);\n\n  return App1;\n}(_react2.default.Component);\n\n(0, _reactDom.render)(_react2.default.createElement(App1, null), document.getElementById('App1'));\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require(\"/home/capo/Documents/Frogslayer/BlogCodingAudition/webproject/node_modules/react-hot-loader/makeExportsHot.js\"); if (makeExportsHot(module, require(\"react\"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot apply hot update to \" + \"App1.jsx\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWFjdGpzL0FwcDEuanN4P2M0YmMiXSwibmFtZXMiOlsiYXBpX2xvYyIsIkFwcDEiLCJzdGF0ZSIsImJsb2dzIiwicmVzdGxvYyIsImZpbHRlciIsImNoYW5nZUZpbHRlciIsImJpbmQiLCJnZXRSZXN0IiwiZmV0Y2giLCJ0aGVuIiwicmVzdWx0IiwianNvbiIsInNldFN0YXRlIiwic2V0VGltZW91dCIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJDb21wb25lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxVQUFVLGdDQUFkOztJQUVNQyxJOzs7QUFDSixrQkFBYztBQUFBOztBQUFBOztBQUVaLFVBQUtDLEtBQUwsR0FBVztBQUNUQyxhQUFNLEVBREcsRUFDUztBQUNsQkMsZUFBU0osT0FGQSxFQUVTO0FBQ2xCSyxjQUFRLEVBSEMsQ0FHUztBQUhULEtBQVg7O0FBTUE7QUFDQSxVQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JDLElBQWxCLE9BQXBCO0FBQ0EsVUFBS0MsT0FBTCxHQUFlLE1BQUtBLE9BQUwsQ0FBYUQsSUFBYixPQUFmO0FBVlk7QUFXYjs7Ozs4QkFFUTtBQUFBOztBQUF5QztBQUNoRCxVQUFHLEtBQUtMLEtBQUwsQ0FBV0csTUFBWCxJQUFxQixFQUF4QixFQUEyQjtBQUFxQjtBQUM5Q0ksY0FBTSxLQUFLUCxLQUFMLENBQVdFLE9BQWpCLEVBQ0dNLElBREgsQ0FDUTtBQUFBLGlCQUFRQyxPQUFPQyxJQUFQLEVBQVI7QUFBQSxTQURSLEVBRUdGLElBRkgsQ0FFUTtBQUFBLGlCQUFPLE9BQUtHLFFBQUwsQ0FBYyxFQUFDVixZQUFELEVBQWQsQ0FBUDtBQUFBLFNBRlIsRUFHR08sSUFISCxDQUdRO0FBQUEsaUJBQUlJLFdBQVcsT0FBS04sT0FBaEIsRUFBeUIsSUFBekIsQ0FBSjtBQUFBLFNBSFI7QUFJRCxPQUxELE1BTUk7QUFBNEM7QUFDOUNDLGNBQU0sS0FBS1AsS0FBTCxDQUFXRSxPQUFYLEdBQXFCLE1BQXJCLEdBQThCLEtBQUtGLEtBQUwsQ0FBV0csTUFBL0MsRUFDR0ssSUFESCxDQUNRO0FBQUEsaUJBQVFDLE9BQU9DLElBQVAsRUFBUjtBQUFBLFNBRFIsRUFFR0YsSUFGSCxDQUVRO0FBQUEsaUJBQU8sT0FBS0csUUFBTCxDQUFjLEVBQUNWLFlBQUQsRUFBZCxDQUFQO0FBQUEsU0FGUixFQUdHTyxJQUhILENBR1E7QUFBQSxpQkFBSUksV0FBVyxPQUFLTixPQUFoQixFQUF5QixJQUF6QixDQUFKO0FBQUEsU0FIUjtBQUlEO0FBRUY7OztpQ0FFWU8sSyxFQUFPO0FBQUU7QUFDcEIsV0FBS0YsUUFBTCxDQUFjLEVBQUNSLFFBQVFVLE1BQU1DLE1BQU4sQ0FBYUMsS0FBdEIsRUFBZDtBQUNEOzs7d0NBRWtCO0FBQUU7QUFDbkIsV0FBS1QsT0FBTDtBQUNEOzs7NkJBRVE7QUFDUCxhQUNFO0FBQUE7QUFBQTtBQUNFLGlEQUFPLFdBQVUsY0FBakIsRUFBZ0MsTUFBSyxNQUFyQyxFQUE0QyxPQUFPLEtBQUtOLEtBQUwsQ0FBV0csTUFBOUQsRUFBc0UsVUFBVSxLQUFLQyxZQUFyRixFQUFtRyxhQUFZLDJCQUEvRyxHQURGO0FBRUUsaURBRkY7QUFHRSw0REFBVSxPQUFPLEtBQUtKLEtBQUwsQ0FBV0MsS0FBNUI7QUFIRixPQURGO0FBT0Q7Ozs7RUE5Q2dCLGdCQUFNZSxTOztBQWlEekIsc0JBQU8sOEJBQUMsSUFBRCxPQUFQLEVBQWdCQyxTQUFTQyxjQUFULENBQXdCLE1BQXhCLENBQWhCLEUiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcInJlYWN0LWRvbVwiXG5cbmltcG9ydCBCbG9nTGlzdCBmcm9tIFwiLi9jb250YWluZXJzL0Jsb2dMaXN0XCJcblxudmFyIGFwaV9sb2MgPSAnaHR0cDovLzEyNy4wLjAuMTo4MDAwL2FwaS5qc29uJ1xuXG5jbGFzcyBBcHAxIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlPXtcbiAgICAgIGJsb2dzOltdLCAgICAgICAgIC8vZm9yIHN0b3JpbmcgdGhlIGNvbnRlbnQgb2YgdGhlIGJsb2dzXG4gICAgICByZXN0bG9jOiBhcGlfbG9jLCAvL2ZvciBzdG9yaW5nIHRoZSBsb2NhdGlvbiB3ZSBxdWVyeSBmb3IgZGF0YVxuICAgICAgZmlsdGVyOiAnJyAgICAgICAgLy93aGF0IGF1dGhvciBhcmUgd2UgZmlsdGVyaW5nIGZvcj9cbiAgICB9O1xuXG4gICAgLy9iaW5kIHRoaXMgZm9yIG91ciBmdW5jdGlvbnNcbiAgICB0aGlzLmNoYW5nZUZpbHRlciA9IHRoaXMuY2hhbmdlRmlsdGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5nZXRSZXN0ID0gdGhpcy5nZXRSZXN0LmJpbmQodGhpcyk7XG4gIH1cblxuICBnZXRSZXN0KCl7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZ2V0IHRoZSBkYXRhIGZvciBvdXIgYXBwLCByZWN1cnNpdmVseSBjYWxsZWQgZXZlcnkgNSBzZWNvbmRzXG4gICAgaWYodGhpcy5zdGF0ZS5maWx0ZXIgPT0gJycpeyAgICAgICAgICAgICAgICAgICAgLy8gaWYgbm8gZmlsdGVyIHNldCwganVzdCBsb29rdXAgdGhlIHdob2xlIGxpc3RcbiAgICAgIGZldGNoKHRoaXMuc3RhdGUucmVzdGxvYylcbiAgICAgICAgLnRoZW4ocmVzdWx0PT5yZXN1bHQuanNvbigpKVxuICAgICAgICAudGhlbihibG9ncz0+dGhpcy5zZXRTdGF0ZSh7YmxvZ3N9KSlcbiAgICAgICAgLnRoZW4oKCk9PnNldFRpbWVvdXQodGhpcy5nZXRSZXN0LCA1MDAwKSk7IFxuICAgIH1cbiAgICBlbHNleyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiB3ZSB3YW50IHRvIGZpbHRlciwgc2ltcGx5IGV4YW1pbmUgZmlsdGVyZWQgZGF0YVxuICAgICAgZmV0Y2godGhpcy5zdGF0ZS5yZXN0bG9jICsgJz9vcD0nICsgdGhpcy5zdGF0ZS5maWx0ZXIpXG4gICAgICAgIC50aGVuKHJlc3VsdD0+cmVzdWx0Lmpzb24oKSlcbiAgICAgICAgLnRoZW4oYmxvZ3M9PnRoaXMuc2V0U3RhdGUoe2Jsb2dzfSkpXG4gICAgICAgIC50aGVuKCgpPT5zZXRUaW1lb3V0KHRoaXMuZ2V0UmVzdCwgNTAwMCkpO1xuICAgIH1cblxuICB9XG5cbiAgY2hhbmdlRmlsdGVyKGV2ZW50KSB7IC8vIHVwZGF0ZSB0aGUgdXNlcm5hbWUgdGhhdCB3ZSBmaWx0ZXIgYnlcbiAgICB0aGlzLnNldFN0YXRlKHtmaWx0ZXI6IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKXsgLy9zdGFydCBvdXIgcHNldWRvLWhvdCByZWZyZXNoIGxvb3BcbiAgICB0aGlzLmdldFJlc3QoKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cInRleHRcIiB2YWx1ZT17dGhpcy5zdGF0ZS5maWx0ZXJ9IG9uQ2hhbmdlPXt0aGlzLmNoYW5nZUZpbHRlcn0gcGxhY2Vob2xkZXI9XCJGaWx0ZXIgYnkgT3JpZ2luYWwgUG9zdGVyXCIgLz5cbiAgICAgICAgPGJyLz5cbiAgICAgICAgPEJsb2dMaXN0IGJsb2dzPXt0aGlzLnN0YXRlLmJsb2dzfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbnJlbmRlcig8QXBwMS8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQXBwMScpKVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3JlYWN0anMvQXBwMS5qc3giXSwic291cmNlUm9vdCI6IiJ9");

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nmodule.exports = __webpack_require__(3);\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWRvbS9pbmRleC5qcz9mOTFjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBIiwiZmlsZSI6IjE1OC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCdyZWFjdC9saWIvUmVhY3RET00nKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1kb20vaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDE1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

	eval("/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require(\"/home/capo/Documents/Frogslayer/BlogCodingAudition/webproject/node_modules/react-hot-api/modules/index.js\"), RootInstanceProvider = require(\"/home/capo/Documents/Frogslayer/BlogCodingAudition/webproject/node_modules/react-hot-loader/RootInstanceProvider.js\"), ReactMount = require(\"react/lib/ReactMount\"), React = require(\"react\"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.default = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _BlogDesc = __webpack_require__(160);\n\nvar _BlogDesc2 = _interopRequireDefault(_BlogDesc);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar BlogList = function (_React$Component) {\n\t_inherits(BlogList, _React$Component);\n\n\tfunction BlogList() {\n\t\t_classCallCheck(this, BlogList);\n\n\t\treturn _possibleConstructorReturn(this, (BlogList.__proto__ || Object.getPrototypeOf(BlogList)).apply(this, arguments));\n\t}\n\n\t_createClass(BlogList, [{\n\t\tkey: \"render\",\n\t\tvalue: function render() {\n\t\t\treturn _react2.default.createElement(\n\t\t\t\t\"div\",\n\t\t\t\t{ className: \"row\" },\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\"div\",\n\t\t\t\t\t{ className: \"col-lg-8 col-md-10 mx-auto\" },\n\t\t\t\t\tthis.props.blogs.map(function (blog) {\n\t\t\t\t\t\treturn _react2.default.createElement(_BlogDesc2.default, { title: blog.title, description: blog.description, username: blog.username, plaindate: blog.plaindate, key: blog.id });\n\t\t\t\t\t})\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn BlogList;\n}(_react2.default.Component);\n\nexports.default = BlogList;\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require(\"/home/capo/Documents/Frogslayer/BlogCodingAudition/webproject/node_modules/react-hot-loader/makeExportsHot.js\"); if (makeExportsHot(module, require(\"react\"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot apply hot update to \" + \"BlogList.jsx\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWFjdGpzL2NvbnRhaW5lcnMvQmxvZ0xpc3QuanN4PzJjODMiXSwibmFtZXMiOlsiQmxvZ0xpc3QiLCJwcm9wcyIsImJsb2dzIiwibWFwIiwiYmxvZyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJ1c2VybmFtZSIsInBsYWluZGF0ZSIsImlkIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7O0FBRUE7Ozs7Ozs7Ozs7OztJQUVxQkEsUTs7Ozs7Ozs7Ozs7MkJBQ1g7QUFDUixVQUNDO0FBQUE7QUFBQSxNQUFLLFdBQVUsS0FBZjtBQUNDO0FBQUE7QUFBQSxPQUFLLFdBQVUsNEJBQWY7QUFDRSxVQUFLQyxLQUFMLENBQVdDLEtBQVgsQ0FBaUJDLEdBQWpCLENBQXFCLFVBQVNDLElBQVQsRUFBYztBQUNuQyxhQUFPLG9EQUFVLE9BQU9BLEtBQUtDLEtBQXRCLEVBQTZCLGFBQWFELEtBQUtFLFdBQS9DLEVBQTRELFVBQVVGLEtBQUtHLFFBQTNFLEVBQXFGLFdBQVdILEtBQUtJLFNBQXJHLEVBQWdILEtBQUtKLEtBQUtLLEVBQTFILEdBQVA7QUFDQSxNQUZBO0FBREY7QUFERCxJQUREO0FBU0E7Ozs7RUFYb0MsZ0JBQU1DLFM7O2tCQUF2QlYsUSIsImZpbGUiOiIxNTkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcblxuaW1wb3J0IEJsb2dEZXNjIGZyb20gXCIuLi9jb21wb25lbnRzL0Jsb2dEZXNjXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmxvZ0xpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTggY29sLW1kLTEwIG14LWF1dG9cIj5cblx0XHRcdFx0XHR7dGhpcy5wcm9wcy5ibG9ncy5tYXAoZnVuY3Rpb24oYmxvZyl7XG5cdFx0XHRcdFx0XHRyZXR1cm4gPEJsb2dEZXNjIHRpdGxlPXtibG9nLnRpdGxlfSBkZXNjcmlwdGlvbj17YmxvZy5kZXNjcmlwdGlvbn0gdXNlcm5hbWU9e2Jsb2cudXNlcm5hbWV9IHBsYWluZGF0ZT17YmxvZy5wbGFpbmRhdGV9IGtleT17YmxvZy5pZH0gLz5cblx0XHRcdFx0XHR9KX1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZWFjdGpzL2NvbnRhaW5lcnMvQmxvZ0xpc3QuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

	eval("/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require(\"/home/capo/Documents/Frogslayer/BlogCodingAudition/webproject/node_modules/react-hot-api/modules/index.js\"), RootInstanceProvider = require(\"/home/capo/Documents/Frogslayer/BlogCodingAudition/webproject/node_modules/react-hot-loader/RootInstanceProvider.js\"), ReactMount = require(\"react/lib/ReactMount\"), React = require(\"react\"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.default = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(158);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n// simple render component for a blog, no buttons for edit delete\n\nvar BlogDesc = function (_React$Component) {\n\t_inherits(BlogDesc, _React$Component);\n\n\tfunction BlogDesc() {\n\t\t_classCallCheck(this, BlogDesc);\n\n\t\treturn _possibleConstructorReturn(this, (BlogDesc.__proto__ || Object.getPrototypeOf(BlogDesc)).apply(this, arguments));\n\t}\n\n\t_createClass(BlogDesc, [{\n\t\tkey: \"render\",\n\t\tvalue: function render() {\n\t\t\treturn _react2.default.createElement(\n\t\t\t\t\"a\",\n\t\t\t\t{ href: \"/post/\" + this.props.key },\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\"div\",\n\t\t\t\t\t{ className: \"post-preview\" },\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\"h2\",\n\t\t\t\t\t\t{ className: \"post-title\" },\n\t\t\t\t\t\tthis.props.title\n\t\t\t\t\t),\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\"p\",\n\t\t\t\t\t\t{ className: \"post-subtitle\" },\n\t\t\t\t\t\tthis.props.description\n\t\t\t\t\t),\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\"p\",\n\t\t\t\t\t\t{ className: \"post-meta\" },\n\t\t\t\t\t\t\"Posted by \",\n\t\t\t\t\t\tthis.props.username,\n\t\t\t\t\t\t\" on \",\n\t\t\t\t\t\tthis.props.plaindate\n\t\t\t\t\t)\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn BlogDesc;\n}(_react2.default.Component);\n\nexports.default = BlogDesc;\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require(\"/home/capo/Documents/Frogslayer/BlogCodingAudition/webproject/node_modules/react-hot-loader/makeExportsHot.js\"); if (makeExportsHot(module, require(\"react\"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot apply hot update to \" + \"BlogDesc.jsx\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWFjdGpzL2NvbXBvbmVudHMvQmxvZ0Rlc2MuanN4PzdjYjgiXSwibmFtZXMiOlsiQmxvZ0Rlc2MiLCJwcm9wcyIsImtleSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJ1c2VybmFtZSIsInBsYWluZGF0ZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7O0FBRUE7O0lBRXFCQSxROzs7Ozs7Ozs7OzsyQkFDWDtBQUNSLFVBQ0M7QUFBQTtBQUFBLE1BQUcsTUFBTSxXQUFTLEtBQUtDLEtBQUwsQ0FBV0MsR0FBN0I7QUFDQTtBQUFBO0FBQUEsT0FBSyxXQUFVLGNBQWY7QUFDQztBQUFBO0FBQUEsUUFBSSxXQUFVLFlBQWQ7QUFDRyxXQUFLRCxLQUFMLENBQVdFO0FBRGQsTUFERDtBQUlDO0FBQUE7QUFBQSxRQUFHLFdBQVUsZUFBYjtBQUNHLFdBQUtGLEtBQUwsQ0FBV0c7QUFEZCxNQUpEO0FBT0M7QUFBQTtBQUFBLFFBQUcsV0FBVSxXQUFiO0FBQUE7QUFBcUMsV0FBS0gsS0FBTCxDQUFXSSxRQUFoRDtBQUFBO0FBQWdFLFdBQUtKLEtBQUwsQ0FBV0s7QUFBM0U7QUFQRDtBQURBLElBREQ7QUFjQTs7OztFQWhCb0MsZ0JBQU1DLFM7O2tCQUF2QlAsUSIsImZpbGUiOiIxNjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gXCJyZWFjdC1kb21cIlxuXG4vLyBzaW1wbGUgcmVuZGVyIGNvbXBvbmVudCBmb3IgYSBibG9nLCBubyBidXR0b25zIGZvciBlZGl0IGRlbGV0ZVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCbG9nRGVzYyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGEgaHJlZj17XCIvcG9zdC9cIit0aGlzLnByb3BzLmtleX0gPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3N0LXByZXZpZXdcIj5cblx0XHRcdFx0PGgyIGNsYXNzTmFtZT1cInBvc3QtdGl0bGVcIj5cblx0XHRcdFx0XHR7IHRoaXMucHJvcHMudGl0bGUgfVxuXHRcdFx0XHQ8L2gyPlxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJwb3N0LXN1YnRpdGxlXCI+XG5cdFx0XHRcdFx0eyB0aGlzLnByb3BzLmRlc2NyaXB0aW9uIH1cblx0XHRcdFx0PC9wPlxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJwb3N0LW1ldGFcIj5Qb3N0ZWQgYnkgeyB0aGlzLnByb3BzLnVzZXJuYW1lIH0gb24geyB0aGlzLnByb3BzLnBsYWluZGF0ZSB9XG5cdFx0XHRcdDwvcD5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PC9hPlxuXHRcdClcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3JlYWN0anMvY29tcG9uZW50cy9CbG9nRGVzYy5qc3giXSwic291cmNlUm9vdCI6IiJ9");

/***/ })

});
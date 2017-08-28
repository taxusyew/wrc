'use strict';

Object.defineProperty(exports, "__esModule", {
				value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./style.css');

var _index = require('../mask/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ActionSheet = function (_React$Component) {
				_inherits(ActionSheet, _React$Component);

				function ActionSheet() {
								_classCallCheck(this, ActionSheet);

								return _possibleConstructorReturn(this, (ActionSheet.__proto__ || Object.getPrototypeOf(ActionSheet)).apply(this, arguments));
				}

				_createClass(ActionSheet, [{
								key: 'render',
								value: function render() {
												var _classNames;

												// 后期根据不同平台得到不同的 DOM 元素
												var _props = this.props,
												    show = _props.show,
												    children = _props.children,
												    overlayClick = _props.overlayClick,
												    className = _props.className,
												    others = _objectWithoutProperties(_props, ['show', 'children', 'overlayClick', 'className']);

												var cls = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, 'wrc-actionsheet', true), _defineProperty(_classNames, 'wrc-actionsheet-show', show == true), _defineProperty(_classNames, className, className), _classNames));

												return _react2.default.createElement(
																'div',
																null,
																_react2.default.createElement(
																				_index2.default,
																				{
																								isShow: show,
																								onClick: overlayClick
																				},
																				_react2.default.createElement(
																								'div',
																								_extends({ className: cls }, others, { onTouchMove: function onTouchMove(e) {
																																return event.cancelable && event.preventDefault();
																												} }),
																								children
																				)
																)
												);
								}
				}]);

				return ActionSheet;
}(_react2.default.Component);

exports.default = ActionSheet;


ActionSheet.defaultProps = {
				show: false,
				type: 'default'
};

ActionSheet.propTypes = {
				show: _react2.default.PropTypes.bool,
				type: _react2.default.PropTypes.string
};
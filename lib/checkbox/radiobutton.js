'use strict';

Object.defineProperty(exports, "__esModule", {
				value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./style.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RadioButton = function (_Component) {
				_inherits(RadioButton, _Component);

				function RadioButton() {
								_classCallCheck(this, RadioButton);

								return _possibleConstructorReturn(this, (RadioButton.__proto__ || Object.getPrototypeOf(RadioButton)).apply(this, arguments));
				}

				_createClass(RadioButton, [{
								key: 'render',
								value: function render() {
												var _classNames;

												var _props = this.props,
												    type = _props.type,
												    disabled = _props.disabled,
												    children = _props.children,
												    onClick = _props.onClick,
												    name = _props.name,
												    label = _props.label,
												    id = _props.id,
												    className = _props.className;


												var cls = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, 'wrc-radio-btn', true), _defineProperty(_classNames, className, className), _classNames));

												return _react2.default.createElement(
																'span',
																{ className: cls },
																_react2.default.createElement('input', { type: 'radio', id: id, name: name }),
																_react2.default.createElement(
																				'label',
																				{ htmlFor: id },
																				label
																),
																_react2.default.createElement(
																				'div',
																				{ className: 'wrc-radio-check' },
																				_react2.default.createElement('div', { className: 'wrc-radio-inside' })
																)
												);
								}
				}]);

				return RadioButton;
}(_react.Component);

exports.default = RadioButton;


RadioButton.defaultProps = {
				disabled: false,
				type: 'default'
};

RadioButton.propTypes = {
				disabled: _react.PropTypes.bool,
				type: _react.PropTypes.string
};
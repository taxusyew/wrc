'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _index = require('../tappable/index.js');

var _index2 = _interopRequireDefault(_index);

require('./style.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_React$Component) {
    _inherits(Button, _React$Component);

    function Button() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Button);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Button.__proto__ || Object.getPrototypeOf(Button)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function () {
            if (_this.props.disabled) {
                return;
            }
            _this.props.onClick && _this.props.onClick();
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Button, [{
        key: 'render',
        value: function render() {
            var _classNames;

            // 后期根据不同平台得到不同的 DOM 元素
            // let Component = 'Button';
            var Component = 'div';

            var _props = this.props,
                type = _props.type,
                large = _props.large,
                disabled = _props.disabled,
                children = _props.children,
                onClick = _props.onClick,
                className = _props.className,
                others = _objectWithoutProperties(_props, ['type', 'large', 'disabled', 'children', 'onClick', 'className']);

            var cls = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, 'wrc-btn', true), _defineProperty(_classNames, 'wrc-btn-default', type === 'default'), _defineProperty(_classNames, 'wrc-btn-info', type === 'info'), _defineProperty(_classNames, 'wrc-btn-danger', type === 'danger'), _defineProperty(_classNames, 'wrc-btn-warn', type === 'warn'), _defineProperty(_classNames, 'wrc-btn-large', large), _defineProperty(_classNames, 'wrc-btn-disabled', disabled), _defineProperty(_classNames, className, className), _classNames));

            return _react2.default.createElement(
                _index2.default,
                { onClick: this.handleClick },
                _react2.default.createElement(
                    Component,
                    { className: cls },
                    children
                )
            );
        }
    }]);

    return Button;
}(_react2.default.Component);

exports.default = Button;


Button.defaultProps = {
    disabled: false,
    type: 'default'
};

Button.propTypes = {
    disabled: _react2.default.PropTypes.bool,
    type: _react2.default.PropTypes.string
};
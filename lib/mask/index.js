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

var Mask = function (_Component) {
    _inherits(Mask, _Component);

    function Mask() {
        _classCallCheck(this, Mask);

        return _possibleConstructorReturn(this, (Mask.__proto__ || Object.getPrototypeOf(Mask)).apply(this, arguments));
    }

    _createClass(Mask, [{
        key: 'handleClick',
        value: function handleClick(e) {
            e.stopPropagation();
            e.preventDefault();
            // TODO 如何自动隐藏比较好
            if (this.props.onClick) {
                this.props.onClick();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _classNames;

            var _props = this.props,
                isShow = _props.isShow,
                type = _props.type,
                children = _props.children,
                hide = _props.hide,
                className = _props.className,
                onClick = _props.onClick;

            var cls = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, 'wrc-mask', true), _defineProperty(_classNames, 'wrc-mask-show', isShow), _defineProperty(_classNames, className, className), _classNames));

            return _react2.default.createElement(
                'div',
                { className: cls, onClick: this.handleClick.bind(this), onTouchMove: function onTouchMove(e) {
                        return e.preventDefault();
                    } },
                children
            );
        }
    }]);

    return Mask;
}(_react.Component);

exports.default = Mask;


Mask.propTypes = {
    show: _react2.default.PropTypes.bool,
    type: _react2.default.PropTypes.string,
    onClick: _react2.default.PropTypes.func
};

Mask.defaultProps = {
    show: false,
    hide: false
};
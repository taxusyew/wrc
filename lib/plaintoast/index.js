'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PlainToast = function (_Component) {
    _inherits(PlainToast, _Component);

    function PlainToast(props) {
        _classCallCheck(this, PlainToast);

        var _this = _possibleConstructorReturn(this, (PlainToast.__proto__ || Object.getPrototypeOf(PlainToast)).call(this, props));

        _this.componentWillReceiveProps = function (nextProps) {
            _this.setState(_this.parseProps(nextProps));
        };

        _this.parseProps = function (nextProps) {
            return {
                // ...nextProps,
                'hide': nextProps.hide,
                'children': nextProps.children || ''
            };
        };

        var _this$props = _this.props,
            position = _this$props.position,
            children = _this$props.children,
            hide = _this$props.hide,
            type = _this$props.type;


        _this.state = {
            'position': position || 'middle',
            'type': type || 'normal',
            'hide': true,
            'children': children || ''
        };
        return _this;
    }

    _createClass(PlainToast, [{
        key: 'render',
        value: function render() {
            var _classNames;

            var className = this.props.className;


            var cls = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, 'wrc-toast', true), _defineProperty(_classNames, 'wrc-toast-top', this.state.position === 'top'), _defineProperty(_classNames, 'wrc-toast-middle', this.state.position === 'middle'), _defineProperty(_classNames, 'wrc-toast-bottom', this.state.position === 'bottom'), _defineProperty(_classNames, 'wrc-toast-hide', this.state.hide === true), _defineProperty(_classNames, className, className || ''), _classNames));

            return _react2.default.createElement(
                'div',
                { className: cls },
                this.state.hide ? '' : this.state.children
            );
        }
    }]);

    return PlainToast;
}(_react.Component);

exports.default = PlainToast;


PlainToast.propTypes = {
    position: _react2.default.PropTypes.string
};

PlainToast.defaultProps = {
    position: 'bottom',
    hide: false
};
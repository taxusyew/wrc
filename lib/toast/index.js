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

var _icon_refresh = require('./image/icon_refresh.png');

var _icon_refresh2 = _interopRequireDefault(_icon_refresh);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Toast = function (_Component) {
    _inherits(Toast, _Component);

    function Toast(props) {
        _classCallCheck(this, Toast);

        // TODO ÿ��show����ˢ��һ�μ�ʱ��������������ʾ��ͻ�����µڶ���ʱ�䲻��
        var _this = _possibleConstructorReturn(this, (Toast.__proto__ || Object.getPrototypeOf(Toast)).call(this, props));

        _this.componentWillReceiveProps = function (nextProps) {
            _this.setState(_this.parseProps(nextProps));
        };

        _this.parseProps = function (nextProps) {
            return {
                'hide': nextProps.hide,
                'text': nextProps.children || '',
                'type': nextProps.type || 'normal'
            };
        };

        var _this$props = _this.props,
            show = _this$props.show,
            position = _this$props.position,
            children = _this$props.children,
            hide = _this$props.hide,
            type = _this$props.type;


        _this.state = {
            'position': position || 'middle',
            'type': type || 'normal',
            'hide': true,
            'text': children || ''
        };
        return _this;
    }

    _createClass(Toast, [{
        key: 'render',
        value: function render() {
            var _classNames;

            var defaultShowTime = 1500;

            var cls = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, 'wrc-toast', true), _defineProperty(_classNames, 'wrc-toast-top', this.state.position === 'top'), _defineProperty(_classNames, 'wrc-toast-middle', this.state.position === 'middle'), _defineProperty(_classNames, 'wrc-toast-bottom', this.state.position === 'bottom'), _defineProperty(_classNames, 'wrc-toast-hide', this.state.hide === true), _classNames));

            var loading = this.state.type == 'loading' ? _react2.default.createElement('img', { src: _icon_refresh2.default, className: 'wrc-toast-loading' }) : '';
            return _react2.default.createElement(
                'div',
                { className: cls },
                loading,
                _react2.default.createElement(
                    'span',
                    { className: 'wrc-toast-content' },
                    this.state.text
                )
            );
        }
    }]);

    return Toast;
}(_react.Component);

exports.default = Toast;


Toast.propTypes = {
    show: _react2.default.PropTypes.bool,
    position: _react2.default.PropTypes.string
};

Toast.defaultProps = {
    show: false,
    position: 'bottom',
    hide: false
};
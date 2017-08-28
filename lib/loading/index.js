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

var _index = require('../mask/index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('../button/index.js');

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Loading = function (_React$Component) {
    _inherits(Loading, _React$Component);

    function Loading() {
        _classCallCheck(this, Loading);

        return _possibleConstructorReturn(this, (Loading.__proto__ || Object.getPrototypeOf(Loading)).apply(this, arguments));
    }

    _createClass(Loading, [{
        key: 'render',
        value: function render() {
            var _classNames2;

            var _props = this.props,
                show = _props.show,
                className = _props.className,
                label = _props.label,
                ismodal = _props.ismodal;


            var clsLabel = (0, _classnames2.default)(_defineProperty({}, 'wrc-loading-label', true));

            var clsLoad = (0, _classnames2.default)((_classNames2 = {}, _defineProperty(_classNames2, 'wrc-loading', true), _defineProperty(_classNames2, 'wrc-loading-hide', show == false), _classNames2));

            var loaddom = _react2.default.createElement(
                'div',
                { className: clsLoad },
                _react2.default.createElement('div', { className: 'wrc-loading-spin' }),
                _react2.default.createElement(
                    'div',
                    { className: clsLabel },
                    label
                )
            );

            var renderdom = '';

            if (ismodal) {
                renderdom = _react2.default.createElement(
                    _index2.default,
                    { isShow: show },
                    loaddom
                );
            } else {
                renderdom = loaddom;
            }

            return renderdom;
        }
    }]);

    return Loading;
}(_react2.default.Component);

exports.default = Loading;


Loading.propTypes = {
    show: _react2.default.PropTypes.bool,
    ismodal: _react2.default.PropTypes.bool,
    hide: _react2.default.PropTypes.bool,
    label: _react2.default.PropTypes.string
};

Loading.defaultProps = {
    show: false,
    ismodal: true,
    hide: false,
    label: '正在加载...'
};
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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PlainDialog = function (_React$Component) {
    _inherits(PlainDialog, _React$Component);

    function PlainDialog() {
        _classCallCheck(this, PlainDialog);

        return _possibleConstructorReturn(this, (PlainDialog.__proto__ || Object.getPrototypeOf(PlainDialog)).apply(this, arguments));
    }

    _createClass(PlainDialog, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                show = _props.show,
                children = _props.children,
                className = _props.className,
                title = _props.title,
                footer = _props.footer;


            var footerDom = '';
            var cls = 'wrc-plaindialog ' + className;

            return _react2.default.createElement(
                _index2.default,
                { isShow: show },
                _react2.default.createElement(
                    'div',
                    { className: cls },
                    this.props.children
                )
            );
        }
    }]);

    return PlainDialog;
}(_react2.default.Component);

exports.default = PlainDialog;


PlainDialog.propTypes = {
    show: _react2.default.PropTypes.bool,
    type: _react2.default.PropTypes.string
};

PlainDialog.defaultProps = {
    show: false,
    hide: false
};
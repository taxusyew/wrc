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

var _index5 = require('../tappable/index.js');

var _index6 = _interopRequireDefault(_index5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dialog = function (_React$Component) {
    _inherits(Dialog, _React$Component);

    function Dialog() {
        _classCallCheck(this, Dialog);

        return _possibleConstructorReturn(this, (Dialog.__proto__ || Object.getPrototypeOf(Dialog)).apply(this, arguments));
    }

    _createClass(Dialog, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                show = _props.show,
                children = _props.children,
                className = _props.className,
                title = _props.title,
                footer = _props.footer;

            var clsTitle = (0, _classnames2.default)(_defineProperty({}, 'wrc-dialog-title', true));

            var clsContent = (0, _classnames2.default)(_defineProperty({}, 'wrc-dialog-content', true));

            var clsFooter = (0, _classnames2.default)(_defineProperty({}, 'wrc-dialog-footer', true));

            var footerDom = '';

            if (footer) {
                footerDom = footer.map(function (x, index) {
                    return _react2.default.createElement(
                        _index6.default,
                        {
                            key: index,
                            className: 'wrc-dialog-btn ' + (x.className || ''),
                            style: { color: x.color || '#6492E3' },
                            onClick: x.onClick
                        },
                        x.label
                    );
                });
            }

            return _react2.default.createElement(
                _index2.default,
                { isShow: show },
                _react2.default.createElement(
                    'div',
                    { className: 'wrc-dialog ' + className || '' },
                    _react2.default.createElement(
                        'div',
                        { className: clsTitle },
                        title
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: clsContent },
                        children
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: clsFooter },
                        footerDom
                    )
                )
            );
        }
    }]);

    return Dialog;
}(_react2.default.Component);

exports.default = Dialog;


Dialog.propTypes = {
    show: _react2.default.PropTypes.bool,
    type: _react2.default.PropTypes.string
};

Dialog.defaultProps = {
    show: false,
    hide: false
};
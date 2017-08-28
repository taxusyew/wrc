'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./style.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TripleListitem = function (_Component) {
    _inherits(TripleListitem, _Component);

    function TripleListitem(props) {
        _classCallCheck(this, TripleListitem);

        var _this = _possibleConstructorReturn(this, (TripleListitem.__proto__ || Object.getPrototypeOf(TripleListitem)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(TripleListitem, [{
        key: 'handleClick',
        value: function handleClick() {
            this.props.onClick && this.props.onClick();
        }
    }, {
        key: 'render',
        value: function render() {
            var cls = this.props.className || '';

            cls = 'stk-triplelistitem ' + cls;
            return _react2.default.createElement(
                'div',
                { className: cls, onClick: this.handleClick.bind(this) },
                this.props.children
            );
        }
    }]);

    return TripleListitem;
}(_react.Component);

exports.default = TripleListitem;


TripleListitem.left = function (_ref) {
    var children = _ref.children,
        className = _ref.className;

    return _react2.default.createElement(
        'div',
        { className: "stk-triplelistitem-left " + className },
        children
    );
};

TripleListitem.center = function (_ref2) {
    var children = _ref2.children,
        className = _ref2.className;

    return _react2.default.createElement(
        'div',
        { className: "stk-triplelistitem-center" + className },
        children
    );
};

TripleListitem.right = function (_ref3) {
    var children = _ref3.children,
        className = _ref3.className;

    return _react2.default.createElement(
        'div',
        { className: "stk-triplelistitem-right" + className },
        children
    );
};
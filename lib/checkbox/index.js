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

var _index = require('../plainbutton/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CheckBox = function (_Component) {
    _inherits(CheckBox, _Component);

    function CheckBox(props) {
        _classCallCheck(this, CheckBox);

        var _this = _possibleConstructorReturn(this, (CheckBox.__proto__ || Object.getPrototypeOf(CheckBox)).call(this, props));

        _this.handleCheck = function () {
            _this.props.onClick && _this.props.onClick(!_this.state.checked);

            _this.setState({
                checked: !_this.state.checked
            });
        };

        _this.state = {
            checked: true
        };
        return _this;
    }

    _createClass(CheckBox, [{
        key: 'render',
        value: function render() {
            var _classNames;

            var clsBox = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, 'wrc-checkbox-box', true), _defineProperty(_classNames, 'wrc-checkbox-box-on', this.state.checked == true), _classNames));

            return _react2.default.createElement(
                'div',
                { className: 'wrc-checkbox' },
                _react2.default.createElement(_index2.default, { className: clsBox, onClick: this.handleCheck }),
                this.props.children
            );
        }
    }]);

    return CheckBox;
}(_react.Component);

exports.default = CheckBox;
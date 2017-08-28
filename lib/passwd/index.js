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

var Passwd = function (_Component) {
    _inherits(Passwd, _Component);

    function Passwd(props) {
        _classCallCheck(this, Passwd);

        var _this = _possibleConstructorReturn(this, (Passwd.__proto__ || Object.getPrototypeOf(Passwd)).call(this, props));

        _this.handleChange = function (e) {

            _this.setState({
                pwdLength: e.target.value.length
            });

            _this.props.onChange && _this.props.onChange(e.target.value);
        };

        var length = _this.props.length;

        _this.dotArray = [];

        // 通过一个数组来控制真实显示的点，而非用户输入
        // 所以输入的时候要自己额外控制一下用户输入长度
        for (var i = 0; i < length; i++) {
            _this.dotArray.push({});
        }

        _this.state = {
            pwdLength: 0
        };
        return _this;
    }

    _createClass(Passwd, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { className: 'wrc-passwd' },
                _react2.default.createElement('input', { name: '', type: 'tel', maxLength: '6', className: 'wrc-passwd-input', onChange: this.handleChange }),
                this.dotArray.map(function (x, index) {

                    if (index <= _this2.state.pwdLength - 1) {
                        return _react2.default.createElement(
                            'span',
                            { className: 'wrc-passwd-dot', key: index },
                            _react2.default.createElement('span', { className: 'wrc-passwd-dot-active' })
                        );
                    } else {
                        return _react2.default.createElement('span', { className: 'wrc-passwd-dot', key: index });
                    }
                })
            );
        }
    }]);

    return Passwd;
}(_react.Component);

exports.default = Passwd;
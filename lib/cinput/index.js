'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./style.css');

var _index = require('../tappable/index.js');

var _index2 = _interopRequireDefault(_index);

var _info = require('./image/info.png');

var _info2 = _interopRequireDefault(_info);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CInput = function (_Component) {
    _inherits(CInput, _Component);

    function CInput(props) {
        _classCallCheck(this, CInput);

        var _this = _possibleConstructorReturn(this, (CInput.__proto__ || Object.getPrototypeOf(CInput)).call(this, props));

        _this.handleKeyUp = function (t) {

            var value = t.target.value;
            var start = t.target.selectionStart;
            var end = t.target.selectionEnd;
            var padding = 100;
            if (value != '') {
                // if (t.keyCode != 8) {
                setTimeout(function () {
                    if (start == end) {
                        _this.refs.input.setSelectionRange(start + padding, end + padding);
                    } else {
                        _this.refs.input.setSelectionRange(start + padding + 1, end + padding);
                    }
                }, 0);
            }
        };

        _this.handleChange = function (t) {

            _this.props.onChange && _this.props.onChange(t.target.value);

            var value = t.target.value;
            var isValidate = true;

            _this.normalize.map(function (x) {
                value = x(value);
            });

            _this.setState({ text: value, blur: false, focus: true });

            // this
            //     .verify
            //     .map(x => isValidate = isValidate && x(isValidate));
        };

        _this.handleBlur = function (t) {
            var value = t.target.value;
            var isValidate = true;

            _this.verify.map(function (x) {
                return isValidate = isValidate && x(value);
            });

            _this.props.onBlur && _this.props.onBlur(t.target.value, isValidate);

            _this.setState({ blur: true, focus: false });
        };

        _this.handleFocus = function (t) {
            _this.props.onFocus && _this.props.onFocus(t.target.value);

            _this.setState({ blur: false, focus: true });
        };

        _this.clearAll = function () {
            _this.setState({ text: '' });
            _this.props.onChange && _this.props.onChange('');
        };

        _this.showInfo = function () {
            _this.props.showInfo && _this.props.showInfo();
        };

        var _this$props = _this.props,
            verify = _this$props.verify,
            normalize = _this$props.normalize,
            text = _this$props.text;

        _this.verify = verify || [];
        _this.normalize = normalize || [];
        _this.normalize.map(function (x) {
            text = x(text);
        });

        _this.state = {
            text: text || '',
            blur: true,
            focus: false
        };
        return _this;
    }

    _createClass(CInput, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var verify = nextProps.verify,
                normalize = nextProps.normalize,
                text = nextProps.text;

            this.verify = verify || this.verify;
            this.normalize = normalize || this.normalize;
            // this
            //     .normalize
            //     .map(x => {
            //         text = x(text);
            //     });
            // this.setState({
            //     text: text
            // });
        }
    }, {
        key: 'render',
        value: function render() {
            var _classNames;

            var cls = this.props.className || '';

            cls = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, 'wrc-cinput-wrap', true), _defineProperty(_classNames, 'wrc-cinput-active', this.state.focus), _defineProperty(_classNames, cls, cls), _classNames));

            var type = this.props.type || 'text';

            var clear = (this.state.text.length && !this.state.blur) > 0 ? _react2.default.createElement(
                _index2.default,
                { onClick: this.clearAll },
                _react2.default.createElement('img', {
                    alt: '',
                    className: 'wrc-cinput-clear',
                    src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAm5JREFUSA29lr9v2kAYhm0DAwIWEAiVqVPnVorUDlGn7JHaKX9Lxv4tmVqpe6cqQyNVamemTkkRyDAhBn7lfSzOOl/Prk1oT0J3Pr/3Pv4+vrMvDEq06XT6crvdXoZheL7f70fqn7FM4weN79Xf1mq1z4PB4Off7MIigUDvBfogzYsinXVvLPC1wB+tuczQC5xMJs+lutGTv86oS14o6jtJr4bD4S93yR/A2Wz2drPZfJKw54orXsf1ev1dv9//aq/LAIEphV8UWcMWHTtWpGul+MKGpkDSKNB3mT81Mvf5YoHPTHoj6+7NP4BhTwB4Jy0BUo2+AtF/EHQ6nUBPaPS5PRq0rHEb3jCYT4CH0nd1QbPZDFqtVtDtdguhwNCgZY2vGUZ42NQ/fCJj1Gg0gvV6HcznczZ7RlpGYxaogF5FIl+aCbfHHAgwoG6kVWB4w4q06NwF2dd50KowPGHVZTiyAb6xgRIhkfZ6vSS1RanO8RkRYfIi9gnsOQPVWyipxKowvGDZ+9D2zx0DNo20Vmz7SAYPZRZhblJKEZlI3UIq8hLrNym9LxJxz4VRuXEc51Zvnh8sIrzNE+TBSCu/oi3j84QV8aX23SyCGT3QxWJROlJY0eFYMDYmdt9ut5NtkPeWQbvb7TJQ1uS0MaykSkW+9olWq1WwXC69rzRbD5T0omWNrxlGWtf6Hn5Tio46UvgA9pyK5U7fwzfM2fvwStexLTzRGE+8k5YC+SJzBtHTrM3Np/Z44Wm+9vilQC44eyjXFxqeItIYL/s8AyMDZAKBnuxMP456RzXW4uHCMEuLxuf83w7CLvxwKjjJUf8RO2p4Y/b+jLMAAAAASUVORK5CYII=' })
            ) : this.props.needInfo ? _react2.default.createElement(
                _index2.default,
                { onClick: this.showInfo },
                _react2.default.createElement('img', {
                    alt: '',
                    className: 'wrc-cinput-info',
                    src: _info2.default })
            ) : '';
            return _react2.default.createElement(
                'div',
                { className: cls },
                _react2.default.createElement('input', {
                    disabled: this.props.disabled,
                    className: 'wrc-cinput-text',
                    name: '',
                    placeholder: this.props.placeholder || '',
                    type: type,
                    ref: 'input',
                    value: this.state.text,
                    maxLength: this.props.maxLength,
                    onChange: this.handleChange,
                    onBlur: this.handleBlur,
                    onFocus: this.handleFocus,
                    onKeyUp: this.handleKeyUp }),
                clear
            );
        }
    }]);

    return CInput;
}(_react.Component);

exports.default = CInput;
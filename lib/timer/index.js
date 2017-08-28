'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./style.css');

var _index = require('../button/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// 两个参数，外部传入单位为秒

var Timer = function (_Component) {
    _inherits(Timer, _Component);

    function Timer(props) {
        _classCallCheck(this, Timer);

        var _this = _possibleConstructorReturn(this, (Timer.__proto__ || Object.getPrototypeOf(Timer)).call(this, props));

        _this.showCounting = function () {
            _this.countDown();
            _this.startCount();
        };

        _this.countDown = function () {
            _this.loopTime -= _this.interval;
            _this.props.countDown && _this.props.countDown(_this.loopTime);
            _this.setState({ loopTime: _this.loopTime });
        };

        _this.startCount = function () {
            _this.timer = setInterval(_this.countDown, _this.interval);
        };

        _this.handleClick = function () {
            _this.props.onClick && _this.props.onClick();
            _this.loopTime = _this.initLoopTime;
            _this.showCounting();
        };

        var _this$props = _this.props,
            interval = _this$props.interval,
            loopTime = _this$props.loopTime,
            onClick = _this$props.onClick,
            immediately = _this$props.immediately;


        _this.interval = interval * 1000 || 1000;
        _this.initLoopTime = loopTime * 1000 || 60 * 1000;
        _this.loopTime = _this.initLoopTime;
        _this.immediately = immediately || false;

        // console.log(this.interval);
        // console.log(this.initLoopTime);
        _this.state = {
            loopTime: _this.initLoopTime
        };

        return _this;
    }

    _createClass(Timer, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (!this.props.immediately && nextProps.immediately) {
                // 除了一下两种情况，都不作处理
                // 不再直接点击，而是直接开始倒计时
                if (this.loopTime == this.initLoopTime) {
                    // 说明还没有开始倒计时,或者已经循环完成
                    this.showCounting();
                }

                // 说明已经完成倒计时，重新开始
                if (this.loopTime == 0) {
                    this.loopTime = this.initLoopTime;
                    this.showCounting();
                }
            }
        }

        // 销毁阶段

    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            clearInterval(this.timer);
        }

        // 设置倒计时 时间


        // 开始定时器

    }, {
        key: 'render',
        value: function render() {
            var button = '';
            var cls = this.props.className || '';

            // 如果当前剩余时间小于初始化时间，就还是倒计时，不能点击
            if (this.state.loopTime < this.initLoopTime && this.state.loopTime > 0) {
                button = _react2.default.createElement(
                    _index2.default,
                    { disabled: true },
                    this.state.loopTime / 1000,
                    's \u540E\u91CD\u65B0\u53D1\u9001'
                );
            } else {
                // 如果剩余时间等于初始化时间，或者小于0，那么就可以点击
                button = _react2.default.createElement(
                    _index2.default,
                    { onClick: this.handleClick, className: 'wrc-timer-resend' },
                    '\u91CD\u65B0\u53D1\u9001'
                );
                clearInterval(this.timer);
            }

            return _react2.default.createElement(
                'div',
                { className: cls },
                button
            );
        }
    }]);

    return Timer;
}(_react.Component);

exports.default = Timer;


Timer.protoTypes = {
    interval: _react2.default.PropTypes.number.isRequired,
    loopTime: _react2.default.PropTypes.number.isRequired
};
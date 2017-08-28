'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./style.css');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/**
 * @file 介绍当前文件的说明 
 * @author 
 */


var Tappable = function (_Component) {
    _inherits(Tappable, _Component);

    function Tappable(props) {
        _classCallCheck(this, Tappable);

        var _this = _possibleConstructorReturn(this, (Tappable.__proto__ || Object.getPrototypeOf(Tappable)).call(this, props));

        _this.handleTouchStart = function (e) {

            _this.touchState = _extends({}, _this.touchState, {
                moveY: 0,
                moveX: 0,
                startX: e.changedTouches[0].screenX,
                startY: e.changedTouches[0].screenY,
                startTime: e.timeStamp
            });

            _this.setState({
                'addClass': true
            });
        };

        _this.handleTouchEnd = function (e) {

            _this.touchState = _extends({}, _this.touchState, {
                endX: e.changedTouches[0].screenX,
                endY: e.changedTouches[0].screenY,
                endTime: e.timeStamp
            });

            var elpsTime = _this.touchState.endTime - _this.touchState.startTime;

            if (Math.abs(_this.touchState.moveY) < 40 && elpsTime < 150) {
                _this.props.onClick && _this.props.onClick();
            }

            _this.setState({
                'addClass': false
            });
        };

        _this.handleTouchMove = function (e) {
            _this.touchState.moveY = e.changedTouches[0].screenY - _this.touchState.startY;
        };

        _this.touchState = {
            startX: 0,
            startY: 0,
            startTime: 0,
            endX: 0,
            endY: 0,
            endTime: 0,
            moveX: 0,
            moveY: 0
        };

        _this.state = {
            'addClass': false
        };
        return _this;
    }

    // 触摸开始


    // 触摸结束


    // 触摸移动


    _createClass(Tappable, [{
        key: 'render',
        value: function render() {
            var _classNames;

            var _props = this.props,
                tapClass = _props.tapClass,
                className = _props.className;


            var cls = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, 'wrc-tappable', true), _defineProperty(_classNames, tapClass, this.state.addClass || ''), _defineProperty(_classNames, className, className), _classNames));

            return _react2.default.createElement(
                'span',
                { className: cls, onTouchStart: this.handleTouchStart, onTouchEnd: this.handleTouchEnd, onTouchMove: this.handleTouchMove },
                this.props.children
            );
        }
    }]);

    return Tappable;
}(_react.Component);

exports.default = Tappable;
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Tab = exports.Tabs = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./style.css');

var _tab = require('./tab.js');

var _tab2 = _interopRequireDefault(_tab);

var _tabcontent = require('./tabcontent.js');

var _tabcontent2 = _interopRequireDefault(_tabcontent);

var _util = require('../../util/util.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tabs = function (_React$Component) {
    _inherits(Tabs, _React$Component);

    function Tabs(props) {
        _classCallCheck(this, Tabs);

        // console.log('parent tab, constructor');

        var _this = _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this, props));

        _this.handleHeaderClick = function (event) {
            var idx = parseInt(event.currentTarget.id);
            if (_this.props.onClick) _this.props.onClick(idx);
        };

        var _this$props = _this.props,
            show = _this$props.show,
            className = _this$props.className,
            children = _this$props.children,
            index = _this$props.index,
            onClick = _this$props.onClick;

        var _this$parseChildren = _this.parseChildren(children),
            headers = _this$parseChildren.headers,
            contents = _this$parseChildren.contents;

        _this.state = {
            headers: headers,
            contents: contents,
            indicator: {
                top: '0px',
                left: '0px',
                width: '0px'
            }
        };

        return _this;
    }

    _createClass(Tabs, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var indicator = this.updateIndicator(this.props.index, this.state.headers);
            this.setState({
                indicator: indicator
            });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var _parseChildren = this.parseChildren(nextProps.children),
                headers = _parseChildren.headers,
                contents = _parseChildren.contents;

            var indicator = this.updateIndicator(nextProps.index, headers);
            console.log(indicator);

            this.setState({
                headers: headers,
                contents: contents,
                indicator: indicator
            });
        }
    }, {
        key: 'parseChildren',
        value: function parseChildren(children) {

            var headers = [];
            var contents = [];

            if ((0, _util.isArray)(children)) {
                children.map(function (x) {
                    // 如果传入的元素类型为 Tab
                    if (x.type === _tab2.default) {
                        headers.push(x);

                        if (x.props.children) {
                            contents.push(_react2.default.createElement(
                                _tabcontent2.default,
                                null,
                                x.props.children
                            ));
                        }
                    } else if (x.type === _tabcontent2.default) {
                        // 或者类型类 TabContent
                        contents.push(x);
                    }
                });
            } else {
                // 如果传入的元素类型为 Tab
                if (children.type === _tab2.default) {
                    headers.push(children);

                    if (children.props.children) {
                        contents.push(_react2.default.createElement(
                            _tabcontent2.default,
                            null,
                            children.props.children
                        ));
                    }
                } else if (children.type === _tabcontent2.default) {
                    // 或者类型类 TabContent
                    contents.push(children);
                }
            }

            return { headers: headers, contents: contents };
        }
    }, {
        key: 'renderHeader',
        value: function renderHeader(headers) {
            var _this2 = this;

            var self = this;
            return this.state.headers.map(function (x, index) {
                return _react2.default.createElement(_tab2.default, {
                    id: index,
                    label: x.props.label,
                    className: x.props.className,
                    onClick: function onClick(x) {
                        return _this2.handleHeaderClick(x);
                    } });
            });
        }
    }, {
        key: 'renderContent',
        value: function renderContent(contents) {
            var _this3 = this;

            // return contents.map(x=> {
            //     return (<TabContent children={x.props.children} />)
            // });

            var _parseContent = this.state.contents.map(function (x, index) {
                return _react2.default.createElement(_tabcontent2.default, { id: index, children: x.props.children });
            });

            return _parseContent.filter(function (item, idx) {
                return idx === _this3.props.index;
            });
        }
    }, {
        key: 'updateIndicator',


        /**
         * 更新 indicator 的位置
         */
        value: function updateIndicator(index, headers) {
            if (!this.navigation || !this.navigation.children[index]) {
                return;
            }
            var tabDom = this.navigation.children[index].getBoundingClientRect();
            var tabWidth = tabDom.width;
            // const tabStart = tabDom.left;
            // const tabWidth = tabWidth / headers.length;

            if (headers.length > 0) {
                return {
                    // top: `${tabDom.height}px`,
                    left: index * tabWidth + 'px',
                    width: tabWidth + 'px'
                };
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            // console.log('parent tab, render');

            var clsTabs = (0, _classnames2.default)(_defineProperty({}, 'wrc-tabs', true));

            var headers = this.renderHeader();

            return _react2.default.createElement(
                'div',
                { className: clsTabs, ref: function ref(node) {
                        _this4.navigationContain = node;
                    } },
                _react2.default.createElement(
                    'div',
                    { className: 'wrc-tabs-header-wrap', ref: function ref(node) {
                            _this4.navigation = node;
                        } },
                    headers
                ),
                _react2.default.createElement('span', { className: 'wrc-tabs-indicator', style: this.state.indicator }),
                _react2.default.createElement(
                    'div',
                    { className: 'wrc-tabs-content-wrap' },
                    this.renderContent()
                )
            );
        }
    }]);

    return Tabs;
}(_react2.default.Component);

Tabs.propTypes = {
    show: _react2.default.PropTypes.bool,
    hide: _react2.default.PropTypes.bool,
    index: _react2.default.PropTypes.number
};

Tabs.defaultProps = {
    show: false,
    hide: false,
    index: 1
};

exports.Tabs = Tabs;
exports.Tab = _tab2.default;
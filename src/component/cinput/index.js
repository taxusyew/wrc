import React, {Component, PropTypes} from 'react';
import './style.less';
import Tappable from '../tappable/index.js';
import InfoLogo from './image/info.png';
import classNames from 'classnames';

class CInput extends Component {

    constructor(props) {
        super(props);

        let {verify, normalize, text} = this.props;
        this.verify = verify || [];
        this.normalize = normalize || [];
        this
            .normalize
            .map(x => {
                text = x(text);
            });

        this.state = {
            text: text || '',
            blur: true,
            focus: false
        };
    };

    componentWillReceiveProps(nextProps) {
        let {verify, normalize, text} = nextProps;
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

    handleKeyUp = (t) => {

        let value = t.target.value;
        let start = t.target.selectionStart;
        let end = t.target.selectionEnd;
        let padding = 100;
        if (value != '') {
        // if (t.keyCode != 8) {
            setTimeout(()=> {
                if (start == end) {
                    this.refs.input.setSelectionRange(start + padding,end + padding);
                } else {
                    this.refs.input.setSelectionRange(start + padding + 1,end + padding);
                }
            },0);
        }

    }

    handleChange = (t) => {

        this.props.onChange && this
            .props
            .onChange(t.target.value);

        let value = t.target.value;
        let isValidate = true;

        this
            .normalize
            .map(x => {
                value = x(value);
            });

        this.setState({text: value, blur: false, focus: true});

        // this
        //     .verify
        //     .map(x => isValidate = isValidate && x(isValidate));
    }

    handleBlur = (t) => {
        let value = t.target.value;
        let isValidate = true;

        this
            .verify
            .map(x => isValidate = isValidate && x(value));

        this.props.onBlur && this
            .props
            .onBlur(t.target.value, isValidate);
        
        this.setState({blur: true, focus: false});
    }

    handleFocus = (t) => {
        this.props.onFocus && this
            .props
            .onFocus(t.target.value);
        
        this.setState({blur: false, focus: true});
    }

    clearAll = () => {
        this.setState({text: ''});
        this.props.onChange && this
            .props
            .onChange('');
    }

    showInfo = () => {
        this.props.showInfo && this
            .props
            .showInfo();
    }
    render() {

        let cls = this.props.className || '';
        
        cls = classNames({
            ['wrc-cinput-wrap'] : true,
            ['wrc-cinput-active']: this.state.focus,
            [cls]: cls,
        });


        let type = this.props.type || 'text';

        let clear = (this.state.text.length && !this.state.blur) > 0
            ? (<Tappable onClick={this.clearAll}>
                <img
                alt=""
                className="wrc-cinput-clear"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAm5JREFUSA29lr9v2kAYhm0DAwIWEAiVqVPnVorUDlGn7JHaKX9Lxv4tmVqpe6cqQyNVamemTkkRyDAhBn7lfSzOOl/Prk1oT0J3Pr/3Pv4+vrMvDEq06XT6crvdXoZheL7f70fqn7FM4weN79Xf1mq1z4PB4Off7MIigUDvBfogzYsinXVvLPC1wB+tuczQC5xMJs+lutGTv86oS14o6jtJr4bD4S93yR/A2Wz2drPZfJKw54orXsf1ev1dv9//aq/LAIEphV8UWcMWHTtWpGul+MKGpkDSKNB3mT81Mvf5YoHPTHoj6+7NP4BhTwB4Jy0BUo2+AtF/EHQ6nUBPaPS5PRq0rHEb3jCYT4CH0nd1QbPZDFqtVtDtdguhwNCgZY2vGUZ42NQ/fCJj1Gg0gvV6HcznczZ7RlpGYxaogF5FIl+aCbfHHAgwoG6kVWB4w4q06NwF2dd50KowPGHVZTiyAb6xgRIhkfZ6vSS1RanO8RkRYfIi9gnsOQPVWyipxKowvGDZ+9D2zx0DNo20Vmz7SAYPZRZhblJKEZlI3UIq8hLrNym9LxJxz4VRuXEc51Zvnh8sIrzNE+TBSCu/oi3j84QV8aX23SyCGT3QxWJROlJY0eFYMDYmdt9ut5NtkPeWQbvb7TJQ1uS0MaykSkW+9olWq1WwXC69rzRbD5T0omWNrxlGWtf6Hn5Tio46UvgA9pyK5U7fwzfM2fvwStexLTzRGE+8k5YC+SJzBtHTrM3Np/Z44Wm+9vilQC44eyjXFxqeItIYL/s8AyMDZAKBnuxMP456RzXW4uHCMEuLxuf83w7CLvxwKjjJUf8RO2p4Y/b+jLMAAAAASUVORK5CYII="/>
                </Tappable>)
            : this.props.needInfo
                ? <Tappable onClick={this.showInfo}><img
                        alt=""
                        className="wrc-cinput-info"
                        src={InfoLogo}/>
                </Tappable>
                : '';
        return (
            <div className={cls}>
                <input
                    disabled={this.props.disabled}
                    className="wrc-cinput-text"
                    name=""
                    placeholder={this.props.placeholder || ''}
                    type={type}
                    ref="input"
                    value={this.state.text}
                    maxLength={this.props.maxLength}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    onFocus={this.handleFocus}
                    onKeyUp={this.handleKeyUp}/>
                {clear}
            </div>

        );
    }
}

export default CInput;

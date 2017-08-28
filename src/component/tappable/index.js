
/**
 * @file 介绍当前文件的说明 
 * @author 
 */
import React, {Component, PropTypes}  from 'react';
import './style.less';
import classNames from 'classnames';

export default class Tappable extends Component {
    
    constructor(props) {
        super(props);
        this.touchState = {
            startX: 0,
            startY: 0,
            startTime: 0,
            endX: 0,
            endY: 0,
            endTime: 0,
            moveX: 0,
            moveY: 0
        };

        this.state = {
            'addClass': false
        };
    }
    
    // 触摸开始
    handleTouchStart = (e) => {

        this.touchState = {
            ...this.touchState,
            moveY: 0,
            moveX: 0,
            startX: e.changedTouches[0].screenX,
            startY: e.changedTouches[0].screenY,
            startTime: e.timeStamp,
        };
        
        this.setState({
            'addClass': true
        })
    }

    // 触摸结束
    handleTouchEnd = (e) => {

        this.touchState = {
            ...this.touchState,
            endX: e.changedTouches[0].screenX,
            endY: e.changedTouches[0].screenY,
            endTime: e.timeStamp,
        };

        let elpsTime = this.touchState.endTime - this.touchState.startTime;
        
        if (Math.abs(this.touchState.moveY) < 40 && elpsTime < 150) {
            this.props.onClick && this.props.onClick();
        }

        this.setState({
            'addClass': false
        })
    }

    // 触摸移动
    handleTouchMove = (e) => {
        this.touchState.moveY = e.changedTouches[0].screenY - this.touchState.startY;
    }

    render() {

        let {tapClass, className} = this.props;
        
        let cls = classNames({
            ['wrc-tappable'] : true,
            [tapClass]: this.state.addClass || '',
            [className]: className
        });

        return (
            <span className={cls} onTouchStart={this.handleTouchStart} onTouchEnd={this.handleTouchEnd} onTouchMove={this.handleTouchMove}>
                {this.props.children}
            </span>
        );
    }
}

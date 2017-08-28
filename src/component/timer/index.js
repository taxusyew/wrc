import React, {Component, PropTypes}  from 'react';
import './style.less';

import Button from '../button/index.js';

// 两个参数，外部传入单位为秒

export default class Timer extends Component {
    
    constructor(props) {
        super(props);

        let {interval, loopTime, onClick, immediately} = this.props;

        this.interval = interval * 1000 || 1000;
        this.initLoopTime = loopTime * 1000 || 60*1000;
        this.loopTime = this.initLoopTime;
        this.immediately = immediately || false;

        // console.log(this.interval);
        // console.log(this.initLoopTime);
        this.state = {
            loopTime : this.initLoopTime
        };

        
    };
    
    componentWillReceiveProps (nextProps) {
        if ( !this.props.immediately && nextProps.immediately ) {
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
    componentWillUnmount () {
        clearInterval(this.timer);
    }

    showCounting = () => {
        this.countDown();
        this.startCount();
    }

    // 设置倒计时 时间
    countDown = () => {
        this.loopTime -= this.interval;
        this.props.countDown && this.props.countDown(this.loopTime);
        this.setState({loopTime: this.loopTime});
    }

    // 开始定时器
    startCount = () => {
        this.timer = setInterval(this.countDown, this.interval);
    }

    handleClick = () => {
        this.props.onClick && this.props.onClick();
        this.loopTime = this.initLoopTime;
        this.showCounting();
    }

    render() {
        let button = '';
        let cls = this.props.className || '';

        // 如果当前剩余时间小于初始化时间，就还是倒计时，不能点击
        if ((this.state.loopTime < this.initLoopTime) && this.state.loopTime > 0) {
            button = (<Button disabled>{this.state.loopTime / 1000}s 后重新发送</Button>);
        } else {
            // 如果剩余时间等于初始化时间，或者小于0，那么就可以点击
            button = (<Button onClick={this.handleClick} className="wrc-timer-resend">重新发送</Button>);
            clearInterval(this.timer);
        }

        return (
            <div className={cls}>
                {button}
            </div>
        );
    }
}

Timer.protoTypes = {
    interval: React.PropTypes.number.isRequired,
    loopTime: React.PropTypes.number.isRequired
}

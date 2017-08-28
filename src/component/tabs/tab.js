import React from 'react';
import classNames from 'classnames';
import './style.less'

export default class Tab extends React.Component {

    handleClick = (event) => {
        if (!this.props.disabled && this.props.onClick) {
          this.props.onClick(event);
        }
    };

    componentDidMount() {
        // console.log('single tab, componentDidMount');
        this.props.cb && this.props.cb(0);
    };

    render () {
        console.log('single tab, render');

        const {show , className, children, label, ...others} = this.props;
        
        const clsTab = classNames({
            ['wrc-tab']: true,
            [className]: className
        });

        return (
            <label {...others} className={clsTab} onClick={this.handleClick}>
                {label}
            </label>
        );

    }
}

Tab.propTypes = {
    show: React.PropTypes.bool,
    label: React.PropTypes.string,
};

Tab.defaultProps = {
    show: false,
    label: 'tab'
};
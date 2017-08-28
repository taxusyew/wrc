import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import './style.less';
import PlainButton from '../plainbutton/index.js';

export default class CheckBox extends Component {


	constructor(props) {
        super(props);
        this.state = {
            checked: true
        };
    }
    
    handleCheck = () => {
        this.props.onClick && this.props.onClick(! this.state.checked);

        this.setState({
            checked: ! this.state.checked
        })
    }

    render () {
        
        const clsBox = classNames({
            ['wrc-checkbox-box'] : true,
            ['wrc-checkbox-box-on'] : this.state.checked == true
        });

		return (

			<div className="wrc-checkbox">
                <PlainButton className={clsBox} onClick={this.handleCheck}></PlainButton>
                {this.props.children}
            </div>
            
	    );

    }
}

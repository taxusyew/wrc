import React, { Component, PropTypes }  from 'react';
import './style.less';


export default class TripleListitem extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            
        };
    };

    handleClick () {
        this.props.onClick && this.props.onClick();
    }

    render() {
        let cls = this.props.className || '';
        
        cls = 'stk-triplelistitem ' + cls;
        return (
            <div className={cls} onClick={this.handleClick.bind(this)}>
                { this.props.children }
            </div>
        );
    }
}

TripleListitem.left = ({children, className}) => {
    return (<div className={"stk-triplelistitem-left " + className}>{children}</div>)

}


TripleListitem.center = ({children, className}) => {
    return (<div className={"stk-triplelistitem-center" + className}>{children}</div>)

}

TripleListitem.right = ({children, className}) => {
    return (<div className={"stk-triplelistitem-right" + className}>{children}</div>)

}

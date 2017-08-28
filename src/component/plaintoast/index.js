import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';


export default class PlainToast extends Component {

    constructor(props) {
        super(props);
        const {position, children , hide, type} = this.props;

        this.state = {
            'position': position || 'middle',
            'type': type || 'normal',
            'hide': true,
            'children': children || ''
        };
    };
    
    componentWillReceiveProps = (nextProps) => {
        this.setState(this.parseProps(nextProps));
    }

    parseProps = (nextProps) => {
        return {
            // ...nextProps,
            'hide': nextProps.hide,
            'children': nextProps.children || ''
        }
    }

    render () {
        let {className} = this.props;

        const cls = classNames({
            ['wrc-toast'] : true,
            ['wrc-toast-top'] : this.state.position === 'top',
            ['wrc-toast-middle'] : this.state.position === 'middle',
            ['wrc-toast-bottom'] : this.state.position === 'bottom',
            ['wrc-toast-hide']: this.state.hide === true,
            [className]: className || '',
        });

        return (
            <div className={cls}>
                {this.state.hide ? '' : this.state.children}
            </div>
        );

    }
}

PlainToast.propTypes = {
    position: React.PropTypes.string,
};

PlainToast.defaultProps = {
    position:'bottom',
    hide: false
};
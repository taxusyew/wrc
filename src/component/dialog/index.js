import React from 'react';
import classNames from 'classnames';
import './style.less'
import Mask from '../mask/index.js';
import Button from '../button/index.js';
import Tappble from '../tappable/index.js';

export default class Dialog extends React.Component {

    render () {
        const {show , children , className, title, footer} = this.props;
        const clsTitle = classNames({
            ['wrc-dialog-title'] : true,
        });

        const clsContent = classNames({
            ['wrc-dialog-content'] : true,
        });

        const clsFooter = classNames({
            ['wrc-dialog-footer'] : true,
        });

        let footerDom = '';

        if ( footer) {
            footerDom = footer.map((x, index)=> (
                    <Tappble
                        key={index}
                        className={'wrc-dialog-btn ' + (x.className || '')}
                        style={{color: x.color || '#6492E3'}}
                        onClick={x.onClick}
                    >{x.label}</Tappble>)
            );
        }

        return (
            <Mask isShow={show} >
                <div className={'wrc-dialog '+ className || ''}>
                    <div className={clsTitle}>
                        {title}
                    </div>
                    <div className={clsContent}>
                        {children}
                    </div>
                    <div className={clsFooter}>
                        {footerDom}
                    </div>
                </div>
            </Mask>
        );

    }
}

Dialog.propTypes = {
    show: React.PropTypes.bool,
    type: React.PropTypes.string,
};

Dialog.defaultProps = {
    show: false,
    hide: false
};

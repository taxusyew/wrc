import React from 'react';
import classNames from 'classnames';
import './style.less';
import Tab from './tab.js';
import TabContent from './tabcontent.js';
import {isArray} from '../../util/util.js';

class Tabs extends React.Component {

    constructor ( props ) {
        super(props);
        // console.log('parent tab, constructor');

        const {show, className, children, index, onClick} = this.props;
        let {headers, contents} = this.parseChildren(children);

        this.state = {
            headers: headers,
            contents: contents,
            indicator: {
                top: '0px',
                left: '0px',
                width: '0px'
            }
        };

    };

    componentDidMount() {
        const indicator = this.updateIndicator(this.props.index, this.state.headers);
        this.setState({
            indicator: indicator
        });
    };

    componentWillReceiveProps(nextProps) {
        let {headers, contents} = this.parseChildren(nextProps.children);
        let indicator = this.updateIndicator(nextProps.index, headers);
        console.log(indicator);

        this.setState({
            headers: headers,
            contents: contents,
            indicator: indicator
        });
    }

    parseChildren (children) {

        let headers = [];
        let contents = [];

        if (isArray(children)) {
            children.map(x=> {
                // 如果传入的元素类型为 Tab
                if (x.type === Tab) {
                    headers.push(x);

                    if (x.props.children) {
                        contents.push(<TabContent >{x.props.children}</TabContent>);
                    }
                } else if (x.type === TabContent) {
                    // 或者类型类 TabContent
                    contents.push(x);
                }
            });
        } else {
            // 如果传入的元素类型为 Tab
            if (children.type === Tab) {
                headers.push(children);

                if (children.props.children) {
                    contents.push(<TabContent >{children.props.children}</TabContent>);
                }
            } else if (children.type === TabContent) {
                // 或者类型类 TabContent
                contents.push(children);
            }
        }

        return { headers, contents};
    };

    handleHeaderClick = (event) => {
        const idx = parseInt(event.currentTarget.id);
        if (this.props.onClick) this.props.onClick(idx);
    };

    renderHeader(headers) {
        let self = this;
        return this.state.headers.map((x, index) => {
            return (<Tab 
                id={index}
                label={x.props.label} 
                className={x.props.className}
                onClick={x=> this.handleHeaderClick(x) }/>)
        });
    };

    renderContent(contents){

        // return contents.map(x=> {
        //     return (<TabContent children={x.props.children} />)
        // });

        let _parseContent = this.state.contents.map((x, index)=> {
            return (<TabContent id={index} children={x.props.children} />)
        });

        return _parseContent.filter((item, idx) => (idx === this.props.index));
    };

    /**
     * 更新 indicator 的位置
     */
    updateIndicator(index, headers) {
        if (!this.navigation || !this.navigation.children[index]) {
            return;
        }
        const tabDom = this.navigation.children[index].getBoundingClientRect();
        const tabWidth = tabDom.width;
        // const tabStart = tabDom.left;
        // const tabWidth = tabWidth / headers.length;

        if (headers.length > 0) {
            return {
                // top: `${tabDom.height}px`,
                left: `${index * tabWidth}px`,
                width: `${tabWidth}px`
            }
        }

    }

    render () {
        // console.log('parent tab, render');
        
        const clsTabs = classNames({
            ['wrc-tabs'] : true,
        });
        
        let headers = this.renderHeader();

        return (
            <div className={clsTabs} ref={node => {this.navigationContain = node;}}>
                <div className="wrc-tabs-header-wrap" ref={node => {this.navigation = node;}}>
                    {headers}
                </div>
                <span className="wrc-tabs-indicator" style={this.state.indicator}/>
                <div className="wrc-tabs-content-wrap">
                    {this.renderContent()}
                </div>
            </div>
        );

    }
}

Tabs.propTypes = {
    show: React.PropTypes.bool,
    hide: React.PropTypes.bool,
    index: React.PropTypes.number,
};

Tabs.defaultProps = {
    show: false,
    hide: false,
    index: 1,
};

export { Tabs, Tab }

import React from "react";

import './firstPage.css';

export default class extends React.Component {

    render() {
        return (
            <div className="wrapper">
                <div className="header"><div className="inner-header"><p>header</p></div></div>
                <div className="clearfix">
                    <div className="content"><div className="inner-content"><p>content</p></div></div>
                    <div className="sidebar"><div className="inner-content"><p>sidebar</p></div></div>
                </div>
                <div className="footer"><div className="inner-footer"><p>footer</p></div></div>
            </div>
        );
    }
}
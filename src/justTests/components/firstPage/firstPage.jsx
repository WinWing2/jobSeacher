import React from "react";

import './firstPage.css';

export default class extends React.Component {

    render() {
        return (
            <div className="wrapper">
                <div className="header">
                    <div className="inner-header">
                        <div className='header_logo'><p>my company</p></div>
                        <nav>
                            <div className="topnav" id="topnavID">
                                <a href="#">home</a>
                                <a href="#">about</a>
                                <a href="#">portfolio</a>
                                <a href="#">contact</a>
                                <a href="#" className="icon" id="menu">&#9776;</a>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="clearfix">
                    <div className="content">
                        <div className="inner-content"><p>content</p>
                        </div>
                    </div>
                    <div className="sidebar">
                        <div className="inner-content"><p>sidebar</p>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <div className="inner-footer"><p>footer</p>
                    </div>
                </div>
            </div>
        );
    }
}
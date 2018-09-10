import React from "react";

export default class extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="count"><p>{this.props.count}</p></div>
                <img src={this.props.src} onClick={this.props.onCount}/>
            </div>
        );
    }
}
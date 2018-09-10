import React from "react";

export default class extends React.Component {
    // Старался всюду использовать классы, ибо в случае, когда компоненту
    // нужно будет добавить state (меню открыто/закрыто), не растеряться.
    render() {
        return (
            <div className="container">
                <div className="count"><p>Ты кликнул по изображению {this.props.count} раз</p></div>
                <img src={this.props.src} onClick={this.props.onCount}/>
            </div>
        );
    }
}
import React from "react";

import './threeBlocks.css';

export default class extends React.Component {

    render() {
        return (
            <div className="parent">
                <div className="sizes">Text1</div>
                <div className="sizes">Text2</div>
                <div className="sizes">Text3</div>
            </div>
        );
    }
}
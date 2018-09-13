import React from "react";

import Hero from "../../components/hero/hero.jsx"

// Не придумал куда этот файл деть, так что создал отдельную папку для контейнеров.
// Может лучше было поместить его в components/hero, или components/hero/containers, но и там будут свои неудобства.

export default class extends React.Component { // Постарался использовать классы,

    constructor(props) {
        super(props);
        this.state = {count: 0};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({count: this.state.count + 1});
    }

    render() {
        return <Hero count={this.state.count} onCount={this.handleClick} src={this.props.src}/>;
    }
};
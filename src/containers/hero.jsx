import React from "react";

import Hero from "../components/hero.jsx"

export default class extends React.Component { // Постарался использовать классы,

    constructor(props) {
        super(props);
        this.state = {count: 0};
        this.handleClick = this.handleClick.bind(this);// Я не могу использовать = () => из-за babel-loader 8,
        // на 7й версии работает, а вот 8я говорит что это экспериментальный синтаксис, который она не поддерживает.
        // Не знаю на какой работаете вы, поэтому, несмотря на частичную ограниченность последней версии, выбрана была она.
        // ES5/6 не рассматривались по той же причине.
        // Намучаюсь я с этим ещё...
    }

    handleClick() {
        this.setState({count: this.state.count + 1});
    }

    render() {
        return <Hero count={this.state.count} onCount={this.handleClick} src={this.props.src}/>;
    }
};
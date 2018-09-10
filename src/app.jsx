import React from 'react';

import Hero from "./containers/hero.jsx";
import Ajax from "./containers/ajax.jsx";

export default class App extends React.Component {
    render() {
        return <div>
            <Hero src={"../src/assets/hero.png"}/>
            <Ajax/>
        </div>;
    }
}
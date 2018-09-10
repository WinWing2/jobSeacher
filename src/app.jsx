import React from 'react';

import Hero from "./containers/hero.jsx";
import Ajax from "./containers/ajax.jsx";
import './css/styles.css';

export default class App extends React.Component {
    render() { // Оборачиваю в <div></div>, слышал про использование пустых тэгов, но разбираться времени нет, моя сборка их не поддерживает.
        return <div>
            <h1 className="blueTitle"><p>css test</p></h1>
            <Hero src={"../src/assets/hero.png"}/>
            <Ajax/>
        </div>;
    }
}
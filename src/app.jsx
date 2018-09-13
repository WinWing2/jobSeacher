import React from 'react';

import './styles.css';

// import Ajax from "./components/ajax.jsx";
// import Hero from "./justTests/containers/hero/hero.jsx";
// import Tree from './justTests/components/threeBlocks/threeBlocks.jsx';
import FirstPage from "./justTests/components/firstPage/firstPage.jsx";


export default class App extends React.Component {
    render() { // Оборачиваю в <div></div>, слышал про использование пустых тэгов, но разобраться не успел.
        return <div>
            {/*<Ajax/>  Бесконечно рерэндарится при смене state, займусь вёрсткой, уж больно долго я бъюсь головой о эту стену, похоже не пробъю к сроку*/}


            {/*Тестовые компоненты, оставлю здесь на случай, если вам интересно.
                Все импорты закоментированы, стоят по порядку. Включайте по мере необходимости*/}

            {/*<h1 className="blueTitle"><p>css test</p></h1> проверяю подключение styles.css*/}
            {/*<Hero src={"../src/justTests/assets/hero.png"}/> // Тестовый компонент, трогаю state*/}
            {/*<Tree/>   Мои первые блоки! Tt's alive, alive!*/}
            <FirstPage/>

        </div>;
    }
}
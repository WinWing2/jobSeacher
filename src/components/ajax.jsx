import React from "react";
import fetchJsonp from "fetch-jsonp";

export default class extends React.Component {

    // Я не буду использовать = () =>, попробую выйти из контекста без неё,
    // ибо не знаю на каком стэке пишите вы, среди списка технологий, жалаемых к использованию es не было.
    // Как и многих других полезных вещей, сильно упрощающих жизнь.

    constructor(props) {
        super(props);
        this.state = {data: '0'};
        this.callbackFunc = this.callbackFunc.bind(this);
    }

    callbackFunc(input) {
        this.setState({data: JSON.stringify(input)});
    }

    ajaxGet(src, callback) {
        var func = this.callbackFunc || function (data) {};
        fetchJsonp('https://jobs.github.com/positions.json?description=python&location=new+york', func)
            .then(function (response) {
                return response.json()
            })
            .then(function (json) {
                console.log('parsed json-->', json);
                func(json)
            }).catch(function (ex) {
            console.log('parsing failed', ex)
        });
    }

    render() {
        return (
            <div>
                <div><p>jsonResult = {this.state.data}</p></div>
                <input type={'button'}
                        // Крик души.

                        // Я не знаю как выходить из контекста, не используя  = () =>
                        // Не знаю как передать аргументы в функцию, не используя '()'
                        // Но если я их использую, функция автоматически вызывается и зацикливается.

                        // И вот это я делал 20+ часов ...
                        // А мог бы спросить и сделать за 20минут.

                        // Пробовал множество костылей, не получается по-человечески. Не могу я. Не успеваю.
                        // Напишу хоть пару строк фронта напоследок. Эх.
                       onClick={this.ajaxGet('https://jobs.github.com/positions.json?description=python&location=new+york', this.callbackFunc)}
                       value={"Send ajax request"}/>
            </div>
        );
    }
};

// var foo = function (data) {
//     console.log(data);
// }
//
//
// export default class extends React.Component {
//
//     constructor(props){
//         super(props);
//         this.state = {response: ""}
//
//         this.ajaxGet = this.ajaxGet.bind(this);
//     }
//
//     ajaxGet() {
//         let request = new XMLHttpRequest();
//
//         request.onreadystatechange = () => {
//             if (request.readyState == 4 && (request.status == 200 || request.status == 304)) {
//                 this.setState({response: request.responseText});
//             }
//         };
//
//         request.open('GET', 'https://jobs.github.com/positions.json?description=python&location=new+york&callback=foo');
//         request.send();
//    }
//
//
//     render() {
//         return (
//             <div>
//                 <div><p>{this.state.response}</p></div>
//                 <input type={'button'} onClick={this.ajaxGet} value={"Click me plz"}/>
//             </div>
//         );
//     }
// }
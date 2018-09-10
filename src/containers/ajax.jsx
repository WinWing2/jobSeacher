import React from "react";
import fetchJsonp from "fetch-jsonp";

export default class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {data: ""};
        this.ajaxGet = this.ajaxGet.bind(this); // Я не могу использовать = () => из-за babel-loader 8,
        // на 7й версии работает, а вот 8я говорит что это экспериментальный синтаксис, который она не поддерживает.
        // Не знаю на какой работаете вы, поэтому, несмотря на частичную ограниченность последней версии, выбрана была она.
    }

    ajaxGet() {
        fetchJsonp('https://jobs.github.com/positions.json?description=python&location=new+york')
            .then(function(response) {
                return response.json()
            }).then(function(json) {
            this.setState({data: json});
            // console.log(this.state.data);
            console.log('parsed json--', json)
        }).catch(function(ex) {
            console.log('parsing failed', ex)
        });
        // this.setState({data: this.state.coun t + 1});

    }
    render() {
        return (
            <div>
                <div><p>{this.state.data}</p></div>
                <input type={'button'} onClick={this.ajaxGet} value={"Click me plz"}/>
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




// request.readyState 0 - new, запрос создан
// request.readyState 1 - open, запрос открыт
// request.readyState 2 - send, запрос отправлен
// request.readyState 3 - ответ частично пришёл
// request.readyState 4 - ответ пришё полностью
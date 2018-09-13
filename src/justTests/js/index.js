import '../../styles.css';

/* Трогаю ajax

<input type="button" id="button_id" value="Покажи мне мой IP!">
<div id="content_id">qqweqwesd</div>

window.onload = function () {

    document.querySelector('#button_id').onclick = function () {
        ajaxGet();
    }
}

function ajaxGet() {
    var request = new XMLHttpRequest();

    // request.readyState 0 - new, запрос создан
    // request.readyState 1 - open, запрос открыт
    // request.readyState 2 - send, запрос отправлен
    // request.readyState 3 - ответ частично пришёл
    // request.readyState 4 - ответ пришё полностью

    request.onreadystatechange = function () {
        if (request.readyState == 4 && (request.status == 200 || request.status == 304)) {
            console.log('7');
            document.querySelector('#content_id').innerHTML = "Pidr" + " gde httpResponse" + request.responseText;
        }
    };

    request.open('GET', '/src/php/ip.php');
    request.send();
}
*/
/* Трогаю jquery

import $ from 'jquery';

$('.title1').html('Some text there');
$('.title2').html('Some text there');
// */
/* Игры с классами и инкапсуляцией

import SomeMath from './some.js';

console.log(SomeMath.avg(1, 6, 8, 7, 43));
console.log(SomeMath.merge({
    a: 7
}, {
    b: 13
}));
console.log(SomeMath.max(345, 65, 234, 1543, 6765, 23, 234, 134));
*/
/*Redux lesson

import {createStore} from 'redux';

function playlist(state = [], action) {
    if (action.type === 'ADD_TRACK') {
        return [
            ...state,
            action.payload
        ]
    }
    console.log(action);
    return state;
}

const store = createStore(playlist);
console.log(store.getState);

store.subscribe(() => {
    console.log('subscribe', store.getState());
});

store.dispatch({type: 'ADD_TRACK', payload: 'Smells like teen spirit'});
store.dispatch({type: 'ADD_TRACK', payload: 'Voodoo child'});
*/
/*JSON lesson
var m = {
    "name": "Sergei",
    "age": 44,
    "sex": "male",
    "phone": ["+8959283525", "+89223423523"],
    "email": {
        "gmail": "rajrs@gmail.com",
        "mail": "asdw@mail.ru"
    },
}

console.log(m.email.gmail);
console.log(m["email"]["gmail"]);

var str = JSON.stringify(m);
console.log(str);

var kek = JSON.parse(str);
console.log(kek);
*/

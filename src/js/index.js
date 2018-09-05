import $ from 'jquery';
import SomeMath from './some.js';
import {createStore} from 'redux';


$('.title').html('Some text there');
console.log("Hi there");
console.log(SomeMath.avg(1, 6, 8, 7, 43));
console.log(SomeMath.merge({
    a: 7
}, {
    b: 13
}));
console.log(SomeMath.max(345, 65, 234, 1543, 6765, 23, 234, 134));

function playlist(state=[], action) {
    if(action.type === 'ADD_TRACK'){
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

function loadJSON(path, success, error) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                success(JSON.parse(xhr.responseText));
            }
            else {
                error(xhr);
            }
        }
    };
    xhr.open('GET', path, true);
    xhr.send();
}

function setup() {
    loadJSON('https://jobs.github.com/positions.json?search=code&page=1', gotData);
}

function gotData(data) {
    console.log(data);
    console.log("qweqwe");
}

setup();

import '../css/styles.css';
import HelloWorld from './1_hello_world/hello-world';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <HelloWorld phrase="ES6"/>,
    document.querySelector('.root')
);
import HelloWorld from './1_hello_world/hello-world';
import ExampleStyle from './2_use_style/example-style';

import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <HelloWorld phrase="ES6"/>,
    document.querySelector('#helloWorld')
);

ReactDOM.render(
    <ExampleStyle/>,
    document.querySelector('#exampleStyle')
);
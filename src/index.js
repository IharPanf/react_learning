import React from 'react';
import ReactDOM from 'react-dom';

import HelloWorld from './1_hello_world/hello-world';
import ExampleStyle from './2_use_style/example-style';
import UseMap from './3_use_map_for_render/use_map_for_render';


ReactDOM.render(
    <HelloWorld phrase="ES6"/>,
    document.querySelector('#helloWorld')
);

ReactDOM.render(
    <ExampleStyle/>,
    document.querySelector('#exampleStyle')
);

ReactDOM.render(
    <UseMap/>,
    document.querySelector('#useMap')
);
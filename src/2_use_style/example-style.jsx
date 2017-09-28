import React from 'react';

const exampleStyle = {
    color: 'green',
    font: '14px'
};

class ExampleStyle extends React.Component {
    render() {
        return <span style= {exampleStyle}>Example apply styles</span>;
    }
}

export default ExampleStyle;
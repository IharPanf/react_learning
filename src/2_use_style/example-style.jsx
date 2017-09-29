import React from 'react';

const exampleStyle = {
    color: 'green',
    font: '14px'
};

class ExampleStyle extends React.Component {
    constructor(props) {
        super(props);
        this.name = 'Example styling...';
    }

    render() {
        return <span style= {exampleStyle} className="c-link" >{this.name}</span>;
    }
}

export default ExampleStyle;
import React from 'react';

class UseMap extends React.Component {
    constructor() {
        super();
        this.listOfElement = ['Angular', 'React', 'Vue.js'];
    }

    render() {
        return <ul>{this.listOfElement.map(item => <li>{item}</li>)}</ul>;
    }
}

export default UseMap;
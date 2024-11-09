import React from 'react';


class IncreaseButton extends React.Component {
    constructor(props) {
        super(props);
        console.log('Super Child Component Constructor')
    }

    componentDidMount() {
        console.log('Super Child Component Did Mount')
    }

    render() {
        console.log('Super Child Component Render')
        return(<button onClick={this.props.clickAction}>{this.props.label}-Custom Button</button>)
    }
}

export default IncreaseButton;
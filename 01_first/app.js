// const heading = React.createElement('h1', { id: 'heading', style: { color: 'red' } }, 'Hello World!!!');
// console.log(heading); //Object or React Element
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);
import React from "react";
import ReactDOM from "react-dom";
const heading1 = React.createElement('div', { id: 'parent' },
    [
        React.createElement('div', { id: 'child' },
            [
                React.createElement('h1', { style: { color: 'green', fontStyle: 'italic' } }, 'Hello World 1 '),
                React.createElement('h2', { style: { color: 'gray', fontStyle: 'italic' } }, 'Small Hello World 1')
            ]
        ),
        React.createElement('div', { id: 'child2' },
            [
                React.createElement('h1', { style: { color: 'green', fontStyle: 'italic' } }, 'Hello World 2'),
                React.createElement('h2', { style: { color: 'gray', fontStyle: 'italic' } }, 'Small Hello World 2')
            ]
        )
    ]
)

console.log(heading1);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading1);
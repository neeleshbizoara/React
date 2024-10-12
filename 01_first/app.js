// const heading = React.createElement('h1', { id: 'heading', style: { color: 'red' } }, 'Hello World!!!');
// console.log(heading); //Object or React Element
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);
import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

const heading = React.createElement(
  "h1",
  { style: { color: "red" } },
  "Hi Again."
);
console.log(heading);
// JSX is not HTML

const jsxHeading = (
  <h1 id="heading" className="head">
    Hi world using JSX
  </h1>
);
console.log(jsxHeading);

const expressionConst = 1000;
const rootElemet = ReactDOM.createRoot(document.getElementById("root"));
rootElemet.render(heading);

const HeadingComponent = () => <h1>Heading Functional component</h1>;
const FunctionalComponent = function () {
    return <p>Functional component written using normal Function way.</p>
} 
const HeadingComponent1 = () => {
  return (
    <div>
          <h1 className="head">Heading Functional component</h1>
          <FunctionalComponent />
          {expressionConst} {100 + 200 }
          <HeadingComponent/>
    </div>
  );
};

// rootElemet.render(jsxHeading);
rootElemet.render(<HeadingComponent1/>)

// const heading1 = React.createElement('div', { id: 'parent' },
//     [
//         React.createElement('div', { id: 'child' },
//             [
//                 React.createElement('h1', { style: { color: 'green', fontStyle: 'italic' } }, 'Hello World 1 '),
//                 React.createElement('h2', { style: { color: 'gray', fontStyle: 'italic' } }, 'Small Hello World 1')
//             ]
//         ),
//         React.createElement('div', { id: 'child2' },
//             [
//                 React.createElement('h1', { style: { color: 'green', fontStyle: 'italic' } }, 'Hello World 2'),
//                 React.createElement('h2', { style: { color: 'gray', fontStyle: 'italic' } }, 'Small Hello World 2')
//             ]
//         )
//     ]
// )

// console.log(heading1);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading1);

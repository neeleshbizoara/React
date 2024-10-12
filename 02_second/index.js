import React from 'react';
import ReactDom from 'react-dom';

const AppContainer = () => {
    return (<div>
        Master Conatiner
    </div>)
}

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<AppContainer></AppContainer>)
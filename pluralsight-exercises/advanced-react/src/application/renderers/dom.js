import ReactDom from 'react-dom';
import React from 'react';
import App from 'application/components/App';
import Api from '../../api/api';

const store = new Api(window.initialData);
console.log('client rendering...');

ReactDom.hydrate(
    <App store={store}/>,
    document.getElementById('root'),
);

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from 'application/components/App';
import Api from '../../api/api';
import config from 'server/config';

import axios from 'axios';

const serverRender = async () => {

    const response = await axios.get(`http://${config.host}:${config.port}/data`);
    const store = new Api(response.data);

    console.log('server rendering...');

    return {
        initialMarkup: ReactDOMServer.renderToString(
            <App store={store}/>
        ),
        initialData: response.data
    };
};

export default serverRender;
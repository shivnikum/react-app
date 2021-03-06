import React from 'react';
import ReactDom from 'react-dom';
import App from './src/App';
import { Router, browserHistory } from 'react-router';

import routes from './src/routes';

ReactDom.render(
	<Router history={browserHistory} routes={routes}/>, 
	document.getElementById('main')
);

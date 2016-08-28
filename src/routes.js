import React from 'react';
import ReactDom from 'react-dom';
import { Route, IndexRoute } from 'react-router'

import App from './App';
import Container from './layout/Container';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Container}/>
	</Route>
)
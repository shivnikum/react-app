import React from 'react';
import ReactDom from 'react-dom';

import Header from './layout/Header';
import Navigation from './layout/Navigation';
import Container from './layout/Container';
import Footer from './layout/Footer';



export default class App extends React.Component {
	constructor(){
		super();
		console.log("Hi");
	}
	render() {
        return (
        	<div>
        		<Header />
        		<Navigation />
        		{this.props.children}
	       		<Footer />
        	</div>      
        );
    }
}


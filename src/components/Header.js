import React, {Component} from 'react';

import Nav from './Nav.js'

class Header extends Component{
	render(){
		return(
			<div className="header">
				<Nav />
				<h1>a banner will go here</h1>
			</div>
		);
	}
}

export default Header;
import React, {Component} from 'react';

class Nav extends Component{
	render(){
		return(
			<nav>
				<a href="#">Top</a>
				<a href="#">About</a>
				<a href="#">Projects</a>
				<a href="#">Resume</a>
				<a href="#">Github</a>
				<a href="#">Linkedin</a>
			</nav>
		);
	}
}

export default Nav;
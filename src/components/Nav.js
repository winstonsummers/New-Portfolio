import React, {Component} from 'react';

class Nav extends Component{
	render(){
		return(
			<nav>
				<a href="#about">About</a>
				<a href="#projects">Projects</a>
				<a href="../../public/assets/winstonsummers.pdf" download>Resume</a>
				<a href="https://github.com/winstonsummers" rel="noopener noreferrer" target="_blank">Github</a>
				<a href="https://www.linkedin.com/in/winston-summers/" rel="noopener noreferrer" target="_blank">Linkedin</a>
			</nav>
		);
	}
}

export default Nav;
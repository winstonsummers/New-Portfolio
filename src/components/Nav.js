import React, {Component} from 'react';

class Nav extends Component{
	render(){
		return(
			<nav>
				<a href="#about"><strong>&lt;Winston Summers /&gt;</strong></a>
				<a href="#projects"><strong>Projects</strong></a>
				<a download href="wsresume.pdf"><strong>Resume</strong></a>
				<a href="https://github.com/winstonsummers" rel="noopener noreferrer" target="_blank"><strong>Github</strong></a>
				<a href="https://www.linkedin.com/in/winston-summers/" rel="noopener noreferrer" target="_blank"><strong>Linkedin</strong></a>
			</nav>
		);
	}
}

export default Nav;
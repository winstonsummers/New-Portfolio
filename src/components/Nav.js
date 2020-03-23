import React, {Component} from 'react';

class Nav extends Component{
	render(){
		return(
			<nav>
				<a href="#about"><strong>Patrick Hubbell</strong></a>
				<a href="#projects"><strong>Projects</strong></a>
				<a download href="Resume.txt"><strong>Resume</strong></a>
				<a href="https://github.com/Patrick-Hubbell" rel="noopener noreferrer" target="_blank"><strong>Github</strong></a>
				<a href="https://www.linkedin.com/in/patrickhubbell/" rel="noopener noreferrer" target="_blank"><strong>Linkedin</strong></a>
			</nav>
		);
	}
}

export default Nav;
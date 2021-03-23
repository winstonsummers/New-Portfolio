import React, {Component} from 'react';
import AComponent from './AComponent'

class Nav extends Component{
	navValues = [
		// {
		// 	href: , 
		// 	download: , 
		// 	blank: ,
		// 	text: ,
		// },
		{
			href: "#about", 
			text: "<Winston Summers />",
		},
		{
			href: "#projects",
			text: "Projects",
		},
		{
			href: "wsresume.pdf",
			download: true, 
			text: "Resume",
		},
		{
			href: "https://github.com/winstonsummers", 
			blank: true,
			text: "Github",
		},
		{
			href: "https://www.linkedin.com/in/winston-summers/", 
			blank: true,
			text: "Linkedin",
		},
	]

	render(){
		return(
			<nav>
				{
					this.navValues.map((item) => <AComponent {...{key: item.href, ...item}} />)
				}
			</nav>
		);
	}
}

export default Nav;
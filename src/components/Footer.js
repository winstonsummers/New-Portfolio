import React, {Component} from 'react';

class Footer extends Component{
	render(){
		return(
			<footer>
				<p>
					Winston Summers&copy; 2018
					<br/>
					Find me on 	
					<a className="pro-link" href="https://github.com/winstonsummers" rel="noopener noreferrer" target="_blank">Github</a>and
					<a className="pro-link" href="https://www.linkedin.com/in/winston-summers/" rel="noopener noreferrer" target="_blank">Linkedin.</a>
				</p>
			</footer>
		);
	}
}

export default Footer;
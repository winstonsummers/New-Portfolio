import React, {Component} from 'react';

class Footer extends Component{
	render(){
		return(
			<footer>
				<p>
					Patrick Hubbell&copy; 2019
					<br/>
					Find me on 	
					<a className="pro-link" href="https://github.com/Patrick-Hubbell" rel="noopener noreferrer" target="_blank">Github</a>and
					<a className="pro-link" href="https://www.linkedin.com/in/patrickhubbell/" rel="noopener noreferrer" target="_blank">Linkedin.</a>
				</p>
			</footer>
		);
	}
}

export default Footer;
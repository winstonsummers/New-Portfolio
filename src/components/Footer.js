import React, {Component} from 'react';
import AComponent from './Nav/AComponent'

class Footer extends Component{
	render(){
		return(
			<footer>
				<p>
					Patrick Hubbell&copy; 2019
					<br/>
					Find me on 	
					<AComponent className="pro-link" href="https://github.com/winstonsummers" blank={true} text="Github" />and
					<AComponent className="pro-link" href="https://www.linkedin.com/in/winston-summers/" blank={true} text="Linkedin." />
				</p>
			</footer>
		);
	}
}

export default Footer;
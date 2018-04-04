import React, {Component} from 'react';
import Notable from '../Notable.js';


class Projects extends Component{
	render(){
		const list = Notable.map(item => {
			return(
				<div>
					A Project :D
				</div>
			)
		})
		return(
			<div id="projects">
				Projects will go here
				{list}
			</div>
		);
	}
}

export default Projects;
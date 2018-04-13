import React, {Component} from 'react';
import Notable from '../Notable.js';


class Projects extends Component{
	render(){
		const list = Notable.map(item => {
			return(
				<div>
					<h3>{item.title}</h3>
					{item.team.length?item.team.map((member, index) =>{
						return(
							<a href={item.teamLink[index]}>{member}, </a>
						)
					}):<p>Independant Project</p>}

					<hr />
				</div>
			)
		})
		return(
			<div id="projects">
				<h1>These are some of my Favourite Projects</h1>
				{list}
			</div>
		);
	}
}

export default Projects;
import React, {Component} from 'react';
import Notable from '../Notable.js';


class Projects extends Component{
	render(){
		const list = Notable.map(item => {
			return(
				<div>
					<h3>{item.title}</h3>
					{item.team.length ? <p><strong>The Team:</strong> {item.team.map((member, index) =>{
						return(
							<a href={item.teamLink[index]}>{member}, </a>
						)
					})}</p> : <p>Independant Project</p>}
					<p>{item.summary}</p>
					<ul>
						{item.tech.map(tech =>{
							return(
								<li>{tech}</li>
							)
						})}
					</ul>
					<a href={item.deployment}>Deployment</a><a href={item.github}>Github</a>
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
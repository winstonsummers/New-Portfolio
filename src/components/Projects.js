import React, {Component} from 'react';
import Notable from '../Notable.js';


class Projects extends Component{
	render(){
		const list = Notable.map(item => {
			return(
				<div className="item">
					<h3>{item.title}</h3>
					{item.team.length ? <p><strong>The Team:</strong> {item.team.map((member, index) =>{
						return(
							<a className="pro-link" href={item.teamLink[index]}>{member}, </a>
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
					<a className="pro-link" href={item.deployment}>Deployment</a><a className="pro-link" href={item.github}>Github</a>
					<hr />
				</div>
			)
		})
		return(
			<div id="projects">
					{/*<p>&nbsp;</p>*/}
				<h1>These are some of my Favourite Projects</h1>
				{list}
			</div>
		);
	}
}

export default Projects;
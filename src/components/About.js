import React, {Component} from 'react';

class About extends Component{
	render(){
		return(
			<div id="about">
				<div className="about-head">
					{/*<p>&nbsp;</p>*/}
					<h1>Hello World, my name is Patrick Hubbell</h1>
					<h5>There are two types of Data Scientists.<br></br>1) Those who know how to extrapolate from missing data. </h5>
				</div>
				<p><i>I am</i> a Data Scientist based in the Greater Seattle Area. Many people ask me why I got into Data Science, to which I say; What better way to understand the patterns of the world. Data Science is so important in the knowings of how the world recieves information. From the "You may also like:..." list on Netflix, to translating other languages to english or another language, all the way to statistics for sports. Data Science is used for it all.</p>
				<p><i>I am</i> a customer oriented analyst who views scripting languages(Python, SQL, Scala) as my bread and butter. The thing that excited me the most about what I do is the constant opportunities to learn new skills and tricks, whether that's reading articles about new tech or find better solutions to the "problems" I'm working on.</p>
				<p><i>I am</i> experienced leading small teams and training new hires; when a deadline needs to be met, I am frequently the one management comes to to lead the charge. Communication is one of my most valuable assets; a skill that I have refined on the job, working with clients and colleagues alike.</p>
				<p><i>I am</i> a Data Specialist who's excited to grow on existing skill sets and bring value to the team and company. Excelling at researching problems to find solutions, and not giving up until the job is done. </p>
				<div className="about-img">
					<i>I am Patrick Hubbell</i>
					<img src="(24)pchubbell-2.jpg" alt="A stunning picture of Patrick, how charming!"></img>
				</div>
				<p>&nbsp;</p>
			</div>
		);
	}
}

export default About;
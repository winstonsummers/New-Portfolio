import React, {Component} from 'react';

class About extends Component{
	render(){
		return(
			<div id="about">
				<div className="about-head">
					{/*<p>&nbsp;</p>*/}
					<h1>My name is Winston Summers</h1>
					<h5>I know that was shocking to you by this time.</h5>
				</div>
				<p><i>I am</i> a Backend-leaning developer out of the Greater Seattle Area. Many people ask me why backend-leaning, to which I say; that's where the magic happens. UI is important, hence I prefer full stack, but its the backend where the amazing happens that makes modern websites come to life; single-page apps, web-security, routing and APIs, and many more useful features that make modern web apps great.</p>
				<p><i>I am</i> a customer oriented developer who views scripting languages(Javascript, Python, etc) as my bread and butter. The thing that excited me the most about what I do is the constant opportunities to learn new skills and tricks, whether that's reading articles about new tech or find better solutions to the "problems" I'm working on.</p>
				<p><i>I am</i> experienced leading small teams and training new hires; when a deadline needs to be met, I am frequently the one management comes to to lead the charge. Communication is one of my most valuable assets; a skill that I have refined on the job, working with clients and colleagues alike.</p>
				<p><i>I am</i> a Junior Web Developer excited to grow on existing skill sets and bring value to the team and company. Excelling at researching problems to find solutions, not giving up until the job is done. </p>
				<div className="about-img">
					<i>I am Winston Summers</i>
					<img src="WSheadshot.jpg" alt="A stunning picture of Winston, how charming!"></img>
				</div>
				<p>&nbsp;</p>
			</div>
		);
	}
}

export default About;
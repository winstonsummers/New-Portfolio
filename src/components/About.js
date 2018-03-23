import React, {Component} from 'react';

class About extends Component{
	render(){
		return(
			<div className="about">
				<h1>My name is Winston Summers</h1>
				<h5>I know that was shocking to you by this time.</h5>
				<hr/>
				<p>I'm a Backend-leaning developer out of the Greater Seattle Area. Many people ask me why backend-leaning, to which I say; it's the magic of what the user doesn't see happening. UI is important, hence I prefer full stack, but its the backend where the amazing stuff happens that makes modern websites come to life; single-page apps, web-security, routing and APIs, and many more useful features that make modern web apps great.</p>
			</div>
		);
	}
}

export default About;
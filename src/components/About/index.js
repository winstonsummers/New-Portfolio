import React, {Component} from 'react';
import IAm, {Spacer} from './IAm'
import data from './data'

class About extends Component{
	render(){
		return(
			<div id="about">
                <Spacer />
				<div className="about-head">
					<h1>My name is Winston Summers</h1>
					<h5>I know that was shocking to you by this time.</h5>
				</div>

                {
                    data.map((i) => <IAm text={i} />)
                }

				<div className="about-img">
					<i>I am Winston Summers</i>
					<img src="WSheadshot.jpg" alt="A stunning picture of Winston, how charming!"></img>
				</div>
			</div>
		);
	}
}

export default About;
import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';
import { Form, FormControl, Button } from 'react-bootstrap';



class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			deadline: 'September 22, 2017',
			newDeadLine: ''
		}
	}

	changeDeadline() {
		this.setState({deadline: this.state.newDeadline});
	}

	render() {
		return (
		<div className="App">
			<div className="App-title"> Countdown to See Mom <br /> {this.state.deadline}
			</div> 
			
				<Clock
				deadline={this.state.deadline} 
				/>
			
			<div>
			<Form inline>
				<FormControl
				className="Deadline-input"
				placeholder="new date"
				onChange={event => this.setState({newDeadline: event.target.value})} />
				<Button onClick={() => this.changeDeadline()}>
				Submit
				</Button> 
				</Form>
			</div> 	
		</div> 
		)
	}
}

export default App;
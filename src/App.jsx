import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			deadline: 'September 22, 2017',
			newDeadLine: ''
		}
	}

	changeDeadline() {
		console.log('state', this.state);
		this.setState({deadline: this.state.newDeadLIne});
	}

	render() {
		return (
		<div className="App">
			<div className="App-title">{this.state.deadline}</div> 
			<div>
				<Clock />
			</div> 
			<div>
				<input 
				placeholder="new date"
				onChange={event => this.setState({newDeadLine: event.target.value})} />
				<button onClick={() => this.changeDeadline()}>
				Submit
				</button> 
			</div> 	
		</div> 
		)
	}
}

export default App;
import React, { Component } from 'react';
import './App.css';
import fakeData from '../components/fakeData/FakeData';
import Header from './header/Header';
import Course from './Courses/Course';

class App extends Component {
	state = {
		courses : []
	};

	componentDidMount () {
		this.setState({
			courses : fakeData
		});
	}

	render () {
		return (
			<div>
				<Header />
				<div className="container mt-5">
					<Course courses={this.state.courses} />
				</div>
			</div>
		);
	}
}

export default App;

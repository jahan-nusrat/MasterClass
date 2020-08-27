import React, { Component } from 'react';
import './App.css';
import fakeData from '../components/fakeData/FakeData';
import Header from './header/Header';
import Course from './Courses/Course';

class App extends Component {
	state = {
		courses  : [],
		selected : 0,
		cart     : []
	};

	componentDidMount () {
		this.setState({
			courses : fakeData
		});
	}

	selectCourse = (item) => {
		this.setState({
			selected : item,
			cart     : [ ...this.state.cart, item ]
		});
	};

	render () {
		return (
			<div>
				<Header cart={this.state.cart} />
				<div className="container mt-5">
					<Course courses={this.state.courses} selectCourse={this.selectCourse} />
				</div>
			</div>
		);
	}
}

export default App;

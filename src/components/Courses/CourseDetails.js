import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function CourseDetails ({ course }) {
	let btn = '';
	if (course.bestSeller) {
		btn = 'Bestseller';
	}
	let rating = course.ratings.map((rate, idx) => {
		return <FontAwesomeIcon key={idx} style={{ color: 'gold' }} icon={faStar} rate={rate} />;
	});
	return (
		<div className="col-lg-4 mb-5">
			<img className="card-img-top" src={course.image} alt={course.name} />
			<div className="card-body border">
				<h5 className="card-title">{course.name}</h5>
				<p className="card-text text-secondary">by {course.instructor}</p>
				<p>{rating}</p>
				<span>{course.enrolled} students enrolled</span>
				<p>${course.price} </p>
				<button className="btn btn-warning">Buy Course</button>
				<span className="bestseller ml-5">{btn}</span>
			</div>
		</div>
	);
}

export default CourseDetails;

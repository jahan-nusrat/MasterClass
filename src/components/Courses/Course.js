import React from 'react';
import CourseDetails from './CourseDetails';

function Course ({ courses, selectCourse }) {
	let totalCourses = courses.map((course) => {
		return <CourseDetails key={course.id} course={course} selectCourse={selectCourse} />;
	});
	return (
		<div className="header-content">
			<h4>The World's Largest Selection of Courses</h4>
			<p className="text-secondary">
				Choose from {courses.length} online video courses with new additions published every month
			</p>
			<div className="all-course row mt-5">{totalCourses}</div>
		</div>
	);
}

export default Course;

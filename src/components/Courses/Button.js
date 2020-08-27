import React from 'react';

function Button ({ course, selectCourse }) {
	const clickHandler = () => {
		return selectCourse(course);
	};

	return (
		<button
			onClick={clickHandler}
			className="btn btn-warning"
			data-toggle="tooltip"
			data-placement="bottom"
			title="add to cart"
		>
			Buy Course
		</button>
	);
}

export default Button;

import React from 'react';

function NavCart ({ cart }) {
	return (
		<li className="ui large red label">
			<i className="shopping cart icon" /> {cart.length}
		</li>
	);
}

export default NavCart;

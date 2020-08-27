import React from 'react';
import NavCart from '.././cart/NavCart';
import logo from '../header/logo.png';
import './Header.css';

function Header ({ cart }) {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-white">
			<div className="container">
				<a className="navbar-brand" href="/home">
					<img className="img-fluid" src={logo} alt="" />
					<span>E-Class</span>
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>
				<form className="form-inline my-2 my-lg-0">
					<input className="form-control mr-sm-2" />
					<button className="btn btn-outline-success my-2 my-sm-0">Search</button>
				</form>
				<ul className="navbar-nav ml-auto cart">
					<NavCart cart={cart} />
				</ul>
			</div>
		</nav>
	);
}

export default Header;

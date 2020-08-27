import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import logo from '../header/logo.png';
import './Header.css';

function Header () {
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
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item">
							<a className="nav-link" href="/cart">
								<FontAwesomeIcon icon={faShoppingCart} style={{ color: 'red' }} />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Header;

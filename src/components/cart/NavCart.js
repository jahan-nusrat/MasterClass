import React from 'react';
import { ListGroup } from 'react-bootstrap';

function NavCart ({ cart }) {
	let totalPrice = cart.reduce((acc, curr) => {
		return acc + curr.price;
	}, 0);
	return (
		<div>
			<li className="ui big red label" data-toggle="modal" data-target="#staticBackdrop">
				<i className="shopping cart icon" /> {cart.length}
				<span className="detail">View Cart</span>
			</li>
			<div
				className="modal fade"
				id="staticBackdrop"
				data-backdrop="static"
				data-keyboard="false"
				tabIndex="-1"
				aria-labelledby="staticBackdropLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog ">
					<div className="modal-content">
						<div className="modal-header">
							<h3 className="modal-title" id="staticBackdropLabel">
								Order Summery <br />
								Items Ordered: {cart.length}
							</h3>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<ListGroup className="mt-5">
								{cart.map((item) => (
									<ListGroup.Item key={item.id}>
										<span>{item.name + '...'}</span>
										<span className="float-right font-weight-bold">$ {item.price}</span>
									</ListGroup.Item>
								))}
							</ListGroup>
							{totalPrice !== 0 && (
								<div className="mt-4 bg-light p-4 font-weight-bold">
									<span>Total Price: </span>
									<span className="float-right">$ {totalPrice.toFixed(2)}</span>
								</div>
							)}
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-dismiss="modal">
								Close
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default NavCart;

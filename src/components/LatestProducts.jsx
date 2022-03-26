import React from 'react'
import gloves from '../assets/images/gloves.png';
import helmet from '../assets/images/helmet.png';
import blackShirt from '../assets/images/black-shirt.png';
import foxshirt from '../assets/images/fox-shirt.png';
const LatestProduct = () => {
  return (
   <section className="pt-3 pb-5">
		<div className="container">
			<div className="row">
				<div className="col-md-6 mb-4">
					<h2 className="text-primary">Latest Products</h2>
				</div>
				<div className="col-md-6 text-end mb-4">
					<a className="btn btn-primary" href="#e">View All Products</a>
				</div>
				<div className="col-md-3">
					<a className="d-block mb-3" href="#single-product"><img alt="gloves with hand" className="rounded w-100" src={gloves}/></a>
					<div className="text-center">
						<h4><a className="link-dark text-decoration-none" href="#product">Cuirassier Gloves</a></h4>
						<div className="price mb-2">
							<ins className="me-2 text-decoration-none">Rs 1200</ins><del>Rs 1500</del>
						</div>
						<p className="text-muted mb-3">3 items left</p><a className="btn btn-primary" href="#add">Add to cart</a>
					</div>
				</div>
				<div className="col-md-3">
					<a className="d-block mb-3" href="#single-product"><img alt="gloves with hand" className="rounded w-100" src={helmet}/></a>
					<div className="text-center">
						<h4><a className="link-dark text-decoration-none" href="#product">Gucci Helmet</a></h4>
						<div className="price mb-2">
							<ins className="me-2 text-decoration-none">Rs 1200</ins><del>Rs 1500</del>
						</div>
						<p className="text-muted mb-3">3 items left</p><a className="btn btn-primary" href="#add">Add to cart</a>
					</div>
				</div>
				<div className="col-md-3">
					<a className="d-block mb-3" href="#single-product"><img alt="gloves with hand" className="rounded w-100" src={blackShirt}/></a>
					<div className="text-center">
						<h4><a className="link-dark text-decoration-none" href="#product">Black Jacket</a></h4>
						<div className="price mb-2">
							<ins className="me-2 text-decoration-none">Rs 1200</ins><del>Rs 1500</del>
						</div>
						<p className="text-muted mb-3">3 items left</p><a className="btn btn-primary" href="#add">Add to cart</a>
					</div>
				</div>
				<div className="col-md-3">
					<a className="d-block mb-3" href="#single-product"><img alt="gloves with hand" className="rounded w-100" src={foxshirt}/></a>
					<div className="text-center">
						<h4><a className="link-dark text-decoration-none" href="#product">Fox Jacket</a></h4>
						<div className="price mb-2">
							<ins className="me-2 text-decoration-none">Rs 1200</ins><del>Rs 1500</del>
						</div>
						<p className="text-muted mb-3">3 items left</p><a className="btn btn-primary" href="#add">Add to cart</a>
					</div>
				</div>
			</div>
		</div>
	</section>
  )
}

export default LatestProduct
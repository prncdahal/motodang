import React from 'react'

const Product = ({url}) => {
  return (
    <>
      	<a className="d-block mb-3" href="#single-product"><img alt="gloves with hand" className="rounded w-100" src={url}/></a>
					<div className="text-center">
						<h4><a className="link-dark text-decoration-none" href="#product">Cuirassier Gloves</a></h4>
						<div className="price mb-2">
							<ins className="me-2 text-decoration-none">Rs 1200</ins><del>Rs 1500</del>
						</div>
						<p className="text-muted mb-3">3 items left</p><a className="btn btn-primary" href="#add">Add to cart</a>
					</div>
    </>
  )
}

export default Product
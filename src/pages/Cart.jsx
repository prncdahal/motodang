import React from 'react'
import gloves from '../assets/images/gloves.png';
const Cart = () => {
  return (
   <div className='container my-5'>
   <h4 className='mb-4'>Cart</h4>
     <div className="row">
          <div className="col-12 col-md-7">

            <ul className="list-group list-group-lg list-group-flush-x mb-4">
              <li className="list-group-item">
                <div className="row align-items-center">
                  <div className="col-3">

                    <a href="product.html">
                      <img src={gloves} alt="..." className="img-fluid"/>
                    </a>

                  </div>
                  <div className="col">

                    <div className="d-flex justify-content-between mb-2 font-weight-bold">
                      <a className="text-body" href="product.html">Cotton floral print</a> <span className="ml-auto">Rs 4000.00</span>
                    </div>

                    <p className="mb-7 font-size-sm text-muted">
                      Size: M <br/>
                      Color: Red
                    </p>

                    <div className="d-flex align-items-center">

                      <select className="form-select custom-select-xxs w-auto me-3">
                        <option value="1">1</option>
                        <option value="1">2</option>
                        <option value="1">3</option>
                      </select>

                      <a className="small text-danger ml-auto" href="#!">
                        <i className="bi bi-x-circle"></i> Remove
                      </a>

                    </div>

                  </div>
                </div>
              </li>
             
            </ul>

            <div className="row align-items-end justify-content-between mb-10 mb-md-0">
              <div className="col-12 col-md-7">

                <form className="mb-7 mb-md-0">
                  <h6 className="mb-3 font-weight-bold" for="cartCouponCode">
                    Coupon code:
                  </h6>
                  <div className="row form-row">
                    <div className="col">

                      <input className="form-control form-control-sm" id="cartCouponCode" type="text" placeholder="Enter coupon code*"/>

                    </div>
                    <div className="col-auto">

                      <button className="btn btn-sm btn-dark" type="submit">
                        Apply
                      </button>

                    </div>
                  </div>
                </form>

              </div>
              <div className="col-12 col-md-auto">

                <button className="btn btn-sm btn-outline-dark">Update Cart</button>

              </div>
            </div>

          </div>
          <div className="col-12 col-md-5 col-lg-4 offset-lg-1">

            <div className=" mb-7 bg-light">
              <div >
                <ul className="list-group list-group-sm mb-4">
                  <li className="list-group-item d-flex">
                    <span>Subtotal</span> <span className="ml-auto font-size-sm">$89.00</span>
                  </li>
                  <li className="list-group-item d-flex">
                    <span>Tax</span> <span className="ml-auto font-size-sm">$00.00</span>
                  </li>
                  <li className="list-group-item d-flex ">
                    <span>Total</span> <span className="ml-auto font-size-sm">$89.00</span>
                  </li>
                  <li className="list-group-item small text-center text-gray-500">
                    Shipping cost calculated at Checkout *
                  </li>
                </ul>
              </div>
            </div>

            <a className="btn btn-block btn-dark me-3" href="#dfsdfds">Proceed to Checkout</a>

            <a className="btn btn-link btn-sm px-0 text-body" href="#dfssdf">
              <i className="fe fe-arrow-left mr-2"></i> Continue Shopping
            </a>

          </div>
        </div>
   </div>
  )
}

export default Cart
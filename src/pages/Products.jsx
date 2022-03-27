import React from 'react'
import { Product } from '../components'
import gloves from '../assets/images/gloves.png';
import helmet from '../assets/images/helmet.png';
import blackShirt from '../assets/images/black-shirt.png';
import foxshirt from '../assets/images/fox-shirt.png';
const Products = () => {
  return (
   <section className='py-5'>
      <div className='container'>
       <h3 className='text-primary'>Shop</h3>
        <div className='row'>
          <div className='col-md-3'>
            <h5 className='mb-4'>Filter</h5>

              <div className='mb-3'>
                <select className='form-select'>
                  <option selected>Categories</option>
                  <option>Helmet</option>
                  <option>Gloves</option>
                  <option>Shirt</option>
                  <option>Jacket</option>
                  <option>Sticker</option>
                </select>
              </div> 
              <div className='mb-3'>
                <select className='form-select'>
                  <option selected>Color</option>
                  <option>Red</option>
                  <option>Black</option>
                  <option>Blue</option>
                  <option>White</option>
                  <option>Yellow</option>
                </select>
              </div> 
              <div className='mb-3'>
                <select className='form-select'>
                  <option selected>Size</option>
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                  <option>XXL</option>
                </select>
              </div> 
              <div className='mb-3'>
                <select className='form-select'>
                  <option selected>Brand</option>
                  <option>Nelson</option>
                  <option>FC Moto</option>
                  <option>Motardin</option>
                  <option>Vega Axor</option>
                  <option>Steel Bird</option>
                </select>
              </div> 

              <h4>Price Range</h4>
              <input  type="range" value="10" class="form-range" id="customRange1"/>
              <label for="customRange1" class="form-label">Rs1000 - Rs 200000</label>
            </div>
          <div className='col-md-9'>
            <div className='row'>
              <div className='col-lg-4 mb-4'>
                <Product url={gloves}/>
              </div>
              <div className='col-lg-4 mb-4'>
                <Product url={helmet}/>
              </div>
              <div className='col-lg-4 mb-4'>
                <Product url={blackShirt}/>
              </div>
              <div className='col-lg-4 mb-4'>
               <Product url={foxshirt}/>
              </div>
              <div className='col-lg-4 mb-4'>
                <Product url={gloves}/>
              </div>
              <div className='col-lg-4 mb-4'>
                <Product url={helmet}/>
              </div>
              <div className='col-lg-4 mb-4'>
                <Product url={blackShirt}/>
              </div>
              <div className='col-lg-4 mb-4'>
               <Product url={foxshirt}/>
              </div>
              
            </div>
          </div>
        </div>
      </div>
   </section>
  )
}

export default Products
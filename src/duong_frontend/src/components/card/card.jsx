import React from 'react';
import "./card.css"
import "../button/buttons.css"
import { Link } from 'react-router-dom'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"



const ProductCardLight = () => {
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row g-4">
          {/* Product container 1 */}
          <div className="col">
            {/* Product content */}
          </div>
          {/* Product container 2 */}
          <div className="col">
            {/* Product content */}
          </div>
          {/* Product container 3 */}
          <div className="col">
            {/* Product content */}
          </div>
          {/* Product container 4 */}
          <div className="col">
            {/* Product content */}
          </div>
        </div>
      </div>
    </div>
  );
}

{/* <div className='item'>
  <Link to={`/product/${props.id.toString()}`}> <img onClick={window.scrollTo(0, 0)} src={props.image} alt="" /></Link>
  <p>{props.name}</p>
  <div className="item-prices">
    <div className="item-price-new">
      ${props.new_price}
    </div>
    <div className="item-price-old">
      ${props.old_price}
    </div>
  </div>
</div> */}

const ProductCardDark = (props) => {
  return (
          <div class="col">
            {/* Product container 1 */}
            <div class=" product-ctn-d">
              {/* Product img */}
              <div class="product-img">
                {/* <img src="../../../public/imgs/product/Livingroom/Sofa_Bench/anaise-cane-bench.jpg" alt="product-img"></img> */}
                <img src={props.image[0]} alt="product-img" />
                <span class="label2 tag-md tag-outline">Sale</span>
              </div>
              {/* Product info */}
              <div class="product-info">
                <h6>Native Iron Chair</h6>
                <p class="p3 product-cat">Dining Room • Sofa & Bench</p>
                <p class="title2 py-1 product-price">${props.price}</p>
                <img class="rating-star" src="../../../public/imgs/card/rating-4.png" />
              </div>
            </div>
            {/* Product buttons */}
            <div class="product-buttons-d justify-content-between">
              <button onClick={() => { console.log(props.id.toString() + " Added to cart") }} class="product-btn-d button2 no-right-border">ADD TO CART</button>
              <a href="#" class="product-btn-d button2">VIEW PRODUCT</a>
            </div>
          </div>
  );
}

export { ProductCardLight, ProductCardDark };

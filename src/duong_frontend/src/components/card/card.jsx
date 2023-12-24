import React from 'react';
import "./card.css"
import "../button/buttons.css"
import addToCartHandler from '../Utils/addToCart';

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"


function ProductCardLight(props) {
  return (
    <div className="col">
        {/* Product container  */}
        <div className="product-ctn-l">
          {/* Product img */}
          <div className="product-img">
          <img src={props.img} alt="product-img"></img>
          </div>
          {/* Product info */}
          <div className="product-info">
            <h6>{props.name}</h6>
            <p className="p3 product-cat">{props.categories}</p>
            <p className="title2 py-1 product-price">{props.price}</p>
            <img className="rating-star" src="/imgs/card/rating-4.png" />
          </div>
        </div>

        {/* Product buttons */}
        <div className="product-buttons-d justify-content-between">
          <div onClick = {addToCartHandler} className="product-btn-d button2 no-right-border">ADD TO CART</div>
          <a href="#" className="product-btn-d button2">VIEW PRODUCT</a>
        </div>
  </div>
  );
}

function ProductCardDark(props) {
  return (
          <div className="col-3">
            {/* Product container 1 */}
            <div className="product-ctn-d" style={{width:"100%"}}>
              {/* Product img */}
              <div style={{width:"100%", height:"15em"}} >
              <img src={props.img} alt="product-img" style={{width:"100%", height:"15em"}} ></img>
              </div>
              {/* Product info */}
              <div className="product-info">
                <h6 style={{height:"3em"}}>{props.name}</h6>
                <p className="p3 product-cat">{props.categories}</p>
                <p className="title2 py-1 product-price">{props.price}</p>
                <img className="rating-star" src="/imgs/card/rating-4.png" />
              </div>

            </div>

            {/* Product buttons */}
            <div className="product-buttons-d justify-content-between" style={{width:"100%"}}>
              <div onClick = {addToCartHandler} className="product-btn-d button2 no-right-border">ADD TO CART</div>
              <a href="#" className="product-btn-d button2">VIEW PRODUCT</a>
            </div>
          </div>
  );
}

export { ProductCardLight, ProductCardDark };

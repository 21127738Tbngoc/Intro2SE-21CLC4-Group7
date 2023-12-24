import React from 'react';
import "./card.css"
import "../button/buttons.css"
import addToCartHandler from '../Utils/addToCart';

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"

function ProductCard(props) {
  return (
          <div className="col">
            <div className="product-ctn">
              {/* Product img */}
              <div className="product-img" >
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
            <div className="product-buttons justify-content-between" style={{width:"100%"}}>
              <div onClick = {addToCartHandler} className="product-btn button2 no-right-border">ADD TO CART</div>
              <a href="#" className="product-btn button2">VIEW PRODUCT</a>
            </div>
          </div>
  );
}

export { ProductCard };

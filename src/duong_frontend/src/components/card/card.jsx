import React from 'react';
import "./card.css"
import "../button/buttons.css"

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
export const ProductCardLight = () =>

    function ProductCardLight() {
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
      
    function ProductCardDark() {
        return (
            <div className="container-fluid">
                <div className="container">
                    <div className="row g-4">
                        {/* Product container 1 */}
                        <div class="col">
                            <div class=" product-ctn-d">
                                {/* Product img */}
                                <div class="product-img">
                                    <img src="../../../public/imgs/product/Livingroom/Sofa_Bench/anaise-cane-bench.jpg" alt="product-img"></img>
                                    <span class="label2 tag-md tag-outline">Sale</span>
                                </div>
                                {/* Product info */}
                                <div class="product-info">
                                    <h6>Native Iron Chair</h6>
                                    <p class="p3 product-cat">Dining Room • Sofa & Bench</p>
                                    <p class="title2 py-1 product-price">$ 4,990</p>
                                    <img class="rating-star" src="../../../public/imgs/card/rating-4.png" /> 
                                </div>
                            </div>
                            {/* Product buttons */}
                            <div class="product-buttons-d justify-content-between">
                                <a href="#" class="product-btn-d button2 no-right-border">ADD TO CART</a>
                                <a href="#" class="product-btn-d button2">VIEW PRODUCT</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
      }

    export {ProductCardLight, ProductCardDark};

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

    export {ProductCardLight, ProductCardDark};

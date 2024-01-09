import React ,{ useContext }from 'react';
import "../styles/card.css"
import "../button/buttons.css"
import { ShopContext } from '../context/ShopContext'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"


function ProductCard(props) {
    const {addToCart}=useContext(ShopContext);
    console.log(props.tags)
    return (
        <div className="col">
            <div className="product-ctn">
                {/* Product img */}
                <div className="product-img" >
                    <img src={props.thumbnail} alt="product-img" />
                    <span className="label2 tag-md tag-outline">{props.tags}</span>
                </div>
                {/* Product info */}
                <div className="product-info">
                    <h6>{props.name}</h6>
                    <p className="p3 product-cat">{props.categories.join(" & ")}</p>
                    <p className="title2 py-1 product-price">$ {props.price}</p>
                    <img className="rating-star" src={`https://res.cloudinary.com/dxsvumas8/image/upload/v1703921412/rating-${Math.round(props.rating)}`}/>
                </div>
            </div>
            {/* Product buttons */}
            <div className="product-buttons justify-content-between">
                <div onClick = {()=>{addToCart(props.id)}} className="product-btn button2 no-right-border">ADD TO CART</div>
                <a href="#" className="product-btn button2">VIEW PRODUCT</a>
            </div>
        </div>
  );
}
export default ProductCard

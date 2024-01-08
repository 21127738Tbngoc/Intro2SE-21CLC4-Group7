import React, { useState, useEffect, } from 'react';
import { toast } from 'react-toastify';
import { Helmet } from '../components/helmet/Helmet';
import { Container, Row, Col, FormGroup } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import ProductCard from "../components/card/card";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../components/button/buttons.css';
import '../components/common.css';
import '../components/styles/ProductDetail.css';

const ProductDetail = ({ Product, addToCart }) => {
    const [quantity, setQuantity] = useState(1);
  
    const changeThumbnail = (event) => {
        const src = event.target.src;
        const thumbnail = document.querySelector('.product-thumbnail');
        thumbnail.src = src;
        const images = document.querySelectorAll('.product-img-list img');
        images.forEach(img => img.style.border = 'none');
        event.target.style.border = '2px solid black';
    };
  
    const minusQuantity = () => {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    };
  
    const plusQuantity = () => {
      setQuantity(quantity + 1);
    };

    return (
        <div>
            <div className="container-fluid">
                <div className="container product-display">
                    <div className="row g-4">
                        <div className="col">
                            {/* Images */}
                            <div className="left-display">
                                <div className="product-img-list">
                                    <img src="/" onclick="changeThumbnail(event)"/>
                                    <img src="/" onclick="changeThumbnail(event)"/>
                                    <img src="/" onclick="changeThumbnail(event)"/>
                                    <img src="/" onclick="changeThumbnail(event)"/>
                                    <img src="/" onclick="changeThumbnail(event)"/>
                                </div>
                                <img src="/" className="product-thumbnail"/>
                            </div>
                        </div>
                        <div className="col">
                            <div className="right-display">
                                {/* Room & Categories */}
                                <p className="button1 product-category">DINING ROOM • CHAIR & STOOL</p>
                                {/* Name */}
                                <d4>STOCKHOLM MINIMAL CHAIR, OAK WOOD</d4>
                                {/* Rating */}
                                <div class="product-rating align-items-center">
                                    <img src="/imgs/card/rating-4.png" alt="" />
                                    <p>13 customer reviews</p>
                                </div>
                                {/* Price */}
                                <p className="product-price"></p>
                                {/* Description */}
                                <p className="p2">Modern, sophisticated and undeniably inviting, our Wells two-piece sectional tucks plump cushions onto a slim frame supported by sustainably sourced solid wood legs with a natural finish. Low decks allow plenty of room for indulgent seat cushions that encourage you to linger. Tailored with top stitching and French seams on the cushions and a crisp micro-flange outlining the frames, the soft twill fabric suits active family life and cleans up beautifully.</p>
                                <div className="d-flex">
                                    <div className="product-quantity mb-2">
                                        <input type="button" value="-" onclick="minusQuantity()" class="qty-btn" />
                                        <input type="text" id="quantity" name="quantity" value="1" min="1" class="qty-input" />
                                        <input type="button" value="+" onclick="plusQuantity()" class="qty-btn" />
                                    </div>
                                    <button className="prim-btn btn-md" style={{ width: '200px' }}>ADD TO CART</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      );
    };

export default ProductDetail;
import React, { useState, useEffect, useContext } from 'react';
import { toast } from 'react-toastify';
import { Helmet } from '../components/helmet/Helmet';
import { Container, Row, Col, FormGroup } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import ProductCard from "../components/card/card";
import { useParams } from 'react-router-dom';
import { ShopContext } from '../components/context/ShopContext'



import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../components/button/buttons.css';
import '../components/common.css';
import '../components/styles/ProductDetail.css';

const ProductDetail = ({ Product }) => {
    const { addToCart } = useContext(ShopContext);

    const { productId } = useParams();

    const [quantity, setQuantity] = useState(1);

    const changeThumbnail = (event) => {
        const newSrc = event.target.src;
        const thumbnail = document.querySelector('.product-thumbnail');
        const images = document.querySelectorAll('.product-img-list img');
    
        thumbnail.src = newSrc;
    
        images.forEach(img => {
            if (img.src === newSrc) {
                img.style.border = '2px solid black';
            } else {
                img.style.border = 'none';
            }
        });
    };
    

    const minusQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const plusQuantity = () => {
        setQuantity(quantity + 1);
    };

    const [product, setProduct] = useState(0);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/products/find/${productId}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch product');
                }
                const productData = await response.json();

                setProduct(productData);
                console.log(product.img)
            } catch (error) {
                console.error(error);
            }
        };
        fetchProduct();
    }, [productId]);


    if (!product || !product.img) {
        return <div>Loading...</div>; // or any other loading state/component
    }
    
    return (
        <div>
            <div className="container-fluid">
                <div className="container product-display">
                    <div className="row g-4">
                        <div className="col">
                            {/* Images */}
                            <div className="left-display">
                                <div className="product-img-list"  >
                                    <img src={product.img[0]} onClick={changeThumbnail} alt='haha' />
                                    <img src={product.img[2]} onClick={changeThumbnail} alt='haha'/>
                                    <img src={product.img[3]} onClick={changeThumbnail} alt='haha' />
                                    <img src={product.img[4]} onClick={changeThumbnail} alt='haha'/>

                                </div>
                                <img src={product.thumbnail} className="product-detail-main" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="right-display">
                                {/* Room & Categories */}
                                <p className="button1 product-category">
                                    {product.room} • {product.categories && product.categories.join(" & ")}
                                </p>
                                {/* Name */}
                                <d4>{product.name}</d4>
                                {/* Rating */}
                                <div class="product-detail-rating align-items-center">
                                    <img src={`https://res.cloudinary.com/dxsvumas8/image/upload/v1703921413/rating-${Math.round(product.rating)}.png`} alt="" />
                                    <p>13 customer reviews</p>
                                </div>
                                {/* Price */}
                                <p className="product-detail-price">{product.price}</p>
                                {/* Description */}
                                <p className="p2">{product.desc}</p>
                                <div className="d-flex">

                                    <button className="prim-btn btn-md" style={{ width: '200px' }} onClick={() => { addToCart(product._id) }}>ADD TO CART</button>
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
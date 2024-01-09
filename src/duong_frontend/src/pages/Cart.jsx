import React, { useContext } from 'react';
import '../components/styles/Cart.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../components/button/buttons.css';
import '../components/common.css';
import { ShopContext } from '../components/context/ShopContext';
import { Link, useNavigate } from 'react-router-dom';

const Cart = () => {
    const navigate = useNavigate();
    const { getTotalCartItems,getTotalCartAmount, allProducts, cartItems, addToCart, removeallFromCart, remove1FromCart } = useContext(ShopContext);



    const totalCartItems = getTotalCartItems() || 0;

    function closeCartModal() {
        const cartModal = document.querySelector('.navbar-cart');
        cartModal.style.display = "None";
    }

    const handleAddToCart = (productId) => {
        addToCart(productId);
    };

    const handleRemoveFromCart = (productId) => {
        removeallFromCart(productId);
    };

    const handle1RemoveFromCart = (productId) => {
        remove1FromCart(productId);
    };
    const uniqueCartItems = Array.from(new Set(cartItems));
    return (
        <div className="container-fluid">
            <nav aria-label="breadcrumb" className="navbar-breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item breadcrumb-home"><a href="#">HOME</a></li>
                    <li className="breadcrumb-item breadcrumb-element"><a href="#">CART</a></li>
                </ol>
            </nav>
            <div className="page-title">
                <d3>Cart</d3>
            </div>
            <div className="page-breadcrumb">
                <p className="d-inline-block p1 page-sub-breadcrumb">CART</p>
                <p className="d-inline-block p1">•</p>
                <p className="d-inline-block p1">CHECKOUT</p>
                <p className="d-inline-block p1">•</p>
                <p className="d-inline-block p1">CONFIRMATION</p>
            </div>
            <div className="container-fluid-xxl d-flex justify-content-between cart-container">
                {/* <!-- Cart list items --> */}
                <div className="cart-list-section">
                    <h3 className="cart-list-title">Cart Items ({getTotalCartItems()})</h3>
                    <ul className="cart-item-list-section">
                        <ul className="your-cart-list">
                            {uniqueCartItems.map((productId) => {
                                const product = allProducts.find((p) => String(p._id) === productId);
                                if (product) {
                                    const itemCount = cartItems.filter((id) => id === productId).length;
                                    return (
                                        <li className="d-flex justify-content-between mb-2 cart-item" key={product._id}>
                                            <div className="d-flex align-items-center">
                                                <a href="#">
                                                </a>
                                            </div>
                                            <div className="d-flex align-bottom mx-5">
                                                <img src={product.thumbnail} className="d-inline-block cart-item-img" alt="Product Image" />
                                                <div className="d-inline-block cart-item-info ms-3">
                                                    <p className="w-100 subtitle2">{product.name}</p>
                                                    <div className="d-inline">
                                                        <p className="support d-inline">Size M</p>
                                                        <p className="subtitle2 d-inline">.</p>
                                                        <p className="support d-inline">Black</p>
                                                        <p className="subtitle2 d-inline">.</p>
                                                        <p className="support d-inline">SKU 001</p>
                                                    </div>
                                                    <div className="mt-4">
                                                        <p className="subtitle2 d-inline">${product.price}</p>
                                                        <div className="d-inline cart-item-quantity mx-3">
                                                            <img
                                                                src="/imgs/navbar/minus.svg"
                                                                alt="Dot"
                                                                onClick={() => handle1RemoveFromCart(product._id)}
                                                            />
                                                            <p className="p3 d-inline">{itemCount}</p>
                                                            <img src="/imgs/navbar/plus.svg" alt="Dot" onClick={() => handleAddToCart(product._id)} />
                                                        </div>
                                                        <p className="subtitle2 d-inline">${product.price * itemCount}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <a href="#">
                                                    <button className="outline-i-btn i-btn-nm" onClick={() => handleRemoveFromCart(product._id)}>
                                                        <img src="/imgs/navbar/trashcan.svg" alt="trashcan" />
                                                    </button>
                                                </a>
                                            </div>
                                        </li>
                                    );
                                }
                                return null;
                            })}
                        </ul>

                    </ul>
                </div>
                {/* <!-- Invoice --> */}
                <div className="invoice-container">
                    <div className="invoice">
                        <h4 className="invoice-title">ORDER SUMMARY</h4>
                        <ul className="cost-list-section">
                            <li className="d-flex justify-content-between cost">
                                <p className="title1">Shipping cost</p>
                                <p className="cost-money">$ 0</p>
                            </li>
                            <li className="d-flex justify-content-between cost">
                                <p className="title1">Discount</p>
                                <p className="cost-money">$ 0</p>
                            </li>
                            <li className="d-flex justify-content-between cost">
                                <p className="title1">Additional taxes</p>
                                <p className="cost-money">$ 0</p>
                            </li>
                            <li className="d-flex justify-content-between cost">
                                <p className="title1">Subtotal</p>
                                <p className="cost-money">$ {getTotalCartAmount()}</p>
                            </li>
                        </ul>


                        <img src=" /imgs/navbar/line.svg" alt="line" />
                        <div className="d-flex justify-content-between invoice-total-section">
                            <p className="title1">Total Cost</p>
                            <h4>$ {getTotalCartAmount()}</h4>
                        </div>
                    </div>
                    <a href="#">
                        <a className="prim-btn btn-nm w-100 invoice-checkout"  href='/checkout'>
                            PROCEED TO CHECKOUT
                        </a>
                    </a>
                    <a href="#">
  
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Cart;

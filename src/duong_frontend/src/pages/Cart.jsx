import React, { useState, useEffect } from 'react';
import '../components/common.css';
import '../components/styles/Cart.css';

import '../../public/bootstrap-5/css/bootstrap.min.css';
import '../../public/bootstrap-5/js/bootstrap.bundle.min.js';
import '../components/button/buttons.css';
import '../components/common.css';
import '../components/styles/breadcrumb.css';

const Cart = () => {
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
            <p className="d-inline-block p1">PAYMENT</p>
            <p className="d-inline-block p1">•</p>
            <p className="d-inline-block p1">CONFIRMATION</p>
        </div>
        <div className="container-fluid-xxl d-flex justify-content-between cart-container" style="height: 1000px;">
            {/* <!-- Cart list items --> */}
            <div className="cart-list-section">
                <h3 className="cart-list-title">Cart Items (3)</h3>
                    <ul className="cart-item-list-section">
                        <li className="d-flex justify-content-between mb-2 cart-item ">
                            <div className="d-flex align-items-center">
                                <a href="#">
                                    <button className="cart-item-check-btn">
                                        <img src="../../public/imgs/navbar/check.svg" alt="trashcan"/>
                                    </button>
                                </a>
                            </div>
                            <div className="d-flex align-bottom mx-5">
                                <img src="../../public/imgs/shop-28-img-1.jpg" className="d-inline-block cart-item-img" alt="Product Image"/>
                                <div className="d-inline-block cart-item-info ms-3">
                                    <p className="w-100 subtitle2">Singapore Dark Rattan Arm Chair</p>
                                    <div className="d-inline">
                                        <p className="support d-inline">Size M</p>
                                        <p className="subtitle2 d-inline">.</p>
                                        <p className="support d-inline">Black</p>
                                        <p className="subtitle2 d-inline">.</p>
                                        <p className="support d-inline">SKU 001</p>
                                    </div>
                                    <div className="mt-4">
                                        <p className="subtitle2 d-inline">$ 1,500</p>
                                        <div className="d-inline cart-item-quantity mx-3">
                                            <img src="../../public/imgs/navbar/minus.svg" alt="Dot"/>
                                            <p className="p3 d-inline">2</p>
                                            <img src="../../public/imgs/navbar/plus.svg" alt="Dot"/>
                                        </div>
                                        <p className="subtitle2 d-inline">$ 3,000</p>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <a href="#">
                                    <button className="outline-i-btn i-btn-nm">
                                        <img src="../../public/imgs/navbar/trashcan.svg" alt="trashcan"/>
                                    </button>
                                </a>
                            </div>
                        </li>
                        <li className="d-flex justify-content-between mb-2 cart-item ">
                            <div className="d-flex align-items-center">
                                <a href="#">
                                    <button className="cart-item-check-btn">
                                        <img src="../../public/imgs/navbar/check.svg" alt="trashcan"/>
                                    </button>
                                </a>
                            </div>
                            <div className="d-flex align-bottom mx-5">
                                <img src="../../public/imgs/shop-28-img-1.jpg" className="d-inline-block cart-item-img" alt="Product Image"/>
                                <div className="d-inline-block cart-item-info ms-3">
                                    <p className="w-100 subtitle2">Singapore Dark Rattan Arm Chair</p>
                                    <div className="d-inline">
                                        <p className="support d-inline">Size M</p>
                                        <p className="subtitle2 d-inline">.</p>
                                        <p className="support d-inline">Black</p>
                                        <p className="subtitle2 d-inline">.</p>
                                        <p className="support d-inline">SKU 001</p>
                                    </div>
                                    <div className="mt-4">
                                        <p className="subtitle2 d-inline">$ 1,500</p>
                                        <div className="d-inline cart-item-quantity mx-3">
                                            <img src="../../public/imgs/navbar/minus.svg" alt="Dot"/>
                                            <p className="p3 d-inline">2</p>
                                            <img src="../../public/imgs/navbar/plus.svg" alt="Dot"/>
                                        </div>
                                        <p className="subtitle2 d-inline">$ 3,000</p>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <a href="#">
                                    <button className="outline-i-btn i-btn-nm">
                                        <img src="../../public/imgs/navbar/trashcan.svg" alt="trashcan"/>
                                    </button>
                                </a>
                            </div>
                        </li>
                        <li className="d-flex justify-content-between mb-2 cart-item ">
                            <div className="d-flex align-items-center">
                                <a href="#">
                                    <button className="cart-item-check-btn">
                                        <img src="../../public/imgs/navbar/check.svg" alt="trashcan"/>
                                    </button>
                                </a>
                            </div>
                            <div className="d-flex align-bottom mx-5">
                                <img src="../../public/imgs/shop-28-img-1.jpg" className="d-inline-block cart-item-img" alt="Product Image"/>
                                <div className="d-inline-block cart-item-info ms-3">
                                    <p className="w-100 subtitle2">Singapore Dark Rattan Arm Chair</p>
                                    <div className="d-inline">
                                        <p className="support d-inline">Size M</p>
                                        <p className="subtitle2 d-inline">.</p>
                                        <p className="support d-inline">Black</p>
                                        <p className="subtitle2 d-inline">.</p>
                                        <p className="support d-inline">SKU 001</p>
                                    </div>
                                    <div className="mt-4">
                                        <p className="subtitle2 d-inline">$ 1,500</p>
                                        <div className="d-inline cart-item-quantity mx-3">
                                            <img src="../../public/imgs/navbar/minus.svg" alt="Dot"/>
                                            <p className="p3 d-inline">2</p>
                                            <img src="../../public/imgs/navbar/plus.svg" alt="Dot"/>
                                        </div>
                                        <p className="subtitle2 d-inline">$ 3,000</p>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <a href="#">
                                    <button className="outline-i-btn i-btn-nm">
                                        <img src="../../public/imgs/navbar/trashcan.svg" alt="trashcan"/>
                                    </button>
                                </a>
                            </div>
                        </li>
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
                            <p className="cost-money">$ 0</p>
                        </li>
                    </ul>
                    <div className="invoice-counpon-section">
                        <p className="title2">Discount Code or Coupon</p>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Enter your code here" aria-label="Search"/>
                            <button className="tert-i-btn tert-btn btn-sm" type="submit">APPLY</button>
                        </form>
                    </div>
                    <img src="../../public/imgs/navbar/line.svg" alt="line"/>
                    <div className="d-flex justify-content-between invoice-total-section">
                        <p className="title1">Total Cost</p>
                        <h4>$ 4,895</h4>
                    </div>
                </div>
                <a href="#">
                    <button className="prim-btn btn-nm w-100 invoice-checkout">
                        PROCEED TO CHECKOUT
                    </button>
                </a>
                <a href="#">
                    <div className="d-flex link-md">
                        <p className="d-inline mx-auto"><img src="../../public/imgs/navbar/arrow-left-icon.svg" alt="arrow" className="me-2"/>BACK TO SHOPPING</p>
                    </div>
                </a>
            </div>
        </div>
   </div>
  );
}

export default Cart;

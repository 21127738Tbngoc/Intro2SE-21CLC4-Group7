import React, { useState, useEffect } from 'react';
import '../components/common.css';
import '../components/styles/Confirmation.css';




import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../components/button/buttons.css';
import '../components/common.css';
import '../components/styles/breadcrumb.css';

const Confirmation = () => {
    localStorage.removeItem("cart")
    localStorage.removeItem("allProducts")
    return (
        <div className="container-fluid">
            <nav aria-label="breadcrumb" className="navbar-breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item breadcrumb-home"><a href="#">HOME</a></li>
                    <li className="breadcrumb-item breadcrumb-home"><a href="#">CART</a></li>
                    <li className="breadcrumb-item breadcrumb-home"><a href="#">CHECKOUT</a></li>
                    <li className="breadcrumb-item breadcrumb-element"><a href="#">CONFIRMATION</a></li>
                </ol>
            </nav>
            <div className="page-title">
                <d3>Confirmation</d3>
            </div>
            <div className="page-breadcrumb">
                <p className="d-inline-block p1">CART</p>
                <p className="d-inline-block p1">•</p>
                <p className="d-inline-block p1">CHECKOUT</p>
                <p className="d-inline-block p1">•</p>
                <p className="d-inline-block p1">PAYMENT</p>
                <p className="d-inline-block p1">•</p>
                <p className="d-inline-block p1 page-sub-breadcrumb">CONFIRMATION</p>
            </div>
            {/* <!-- Confirm notification items --> */}
            <div className="text-center w-100 confirm-noti-section">
                <img src="/imgs/navbar/check-round-icon.svg" alt="Check" className="" />
                <h3 className="my-4">Thank you! <br />Your order has been successfully placed!</h3>
                <div className="d-flex justify-content-around text-center">
                    <p className="subtitle1 confirm-noti-message">Thank you for shopping with Fitment. Your order has been successfully placed. Below are the details of your purchase</p>
                </div>
            </div>
            <div className="container-fluid-xxl d-flex justify-content-between confirm-detail-container">
            </div>
        </div>

    );
}

export default Confirmation;

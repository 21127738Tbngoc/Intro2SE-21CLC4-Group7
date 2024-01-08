import React, { useState, useEffect } from 'react';
import '../components/common.css';
import '../components/styles/Confirmation.css';

import '../../public/bootstrap-5/css/bootstrap.min.css';
import '../../public/bootstrap-5/js/bootstrap.bundle.min.js';
import '../components/button/buttons.css';
import '../components/common.css';
import '../components/styles/breadcrumb.css';

const Confirmation = () => {
  return (
    <div className="container-fluid">
        <nav aria-label="breadcrumb" className="navbar-breadcrumb">
            <ol className="breadcrumb">
            <li className="breadcrumb-item breadcrumb-home"><a href="#">HOME</a></li>
            <li className="breadcrumb-item breadcrumb-home"><a href="#">CART</a></li>
            <li className="breadcrumb-item breadcrumb-home"><a href="#">CHECKOUT</a></li>
            <li className="breadcrumb-item breadcrumb-home"><a href="#">PAYMENT</a></li>
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
            <img src="../../public/imgs/navbar/check-round-icon.svg" alt="Check" className=""/>
            <h3 className="my-4">Thank you! <br/>Your order has been successfully placed!</h3>
            <div className="d-flex justify-content-around text-center">
                <p className="subtitle1 confirm-noti-message">Thank you for shopping with Fitment. Your order has been successfully placed. Below are the details of your purchase</p>
            </div>
        </div>
        <div className="container-fluid-xxl d-flex justify-content-between confirm-detail-container">
            {/* <!-- Order infomation --> */}
            <div className="order-info-section">
                <div className="order-info-container">
                    <h4>Order Detail</h4>
                    <ul className="order-info mt-4">
                        <li className="d-flex order-info-detail">
                            <p className="title1 me-4">Order number:</p>
                            <p className="p1">#123456789</p>
                        </li>
                        <li className="d-flex order-info-detail">
                            <p className="title1 me-4">Order date:</p>
                            <p className="p1">16/12 19:36 PM</p>
                        </li>
                        <li className="d-flex order-info-detail">
                            <p className="title1 me-4">Estimated delivery date:</p>
                            <p className="p1">18/12 10:00 AM</p>
                        </li>
                    </ul>
                </div>
                <div className="order-info-container">
                    <h4>Shipping Information</h4>
                    <ul className="order-info mt-4">
                        <li className="d-flex order-info-shipping">
                            <p className="title1 me-4">Contact:</p>
                            <p className="p1">Mr. Michael Johnson <br/> michael.johnson@email.com <br/> +1555666777</p>
                        </li>
                        <li className="d-flex order-info-shipping">
                            <p className="title1 me-4">Ship to:</p>
                            <p className="p1">16/12 19:36 PM</p>
                        </li>
                        <li className="d-flex order-info-shipping">
                            <p className="title1 me-4">Method:</p>
                            <p className="p1">18/12 10:00 AM</p>
                        </li>
                    </ul>
                </div>
                <div className="order-info-container">
                    <h4>Payment Information</h4>
                    <ul className="order-info mt-4">
                        <li className="d-flex order-info-payment">
                            <p className="title1 me-4">Paid with:</p>
                            <p className="p1">Master Card <br/> Mr. Michael Johnson <br/> XXXX-XXXX-X123</p>
                        </li>
                    </ul>
                </div>
            </div>
             {/* <!-- Order Summary --> */}
             <div className="order-summary-container">
                <div className="order-summary">
                    <h4 className="order-summary-title">ORDER SUMMARY</h4>
                    <div className="order-summary-items">
                        <table className="table table-borderless">
                            <thead className="order-summary-items-header">
                              <tr>
                                <th scope="col">Item</th>
                                <th scope="col">QTY</th>
                                <th scope="col">PRICE</th>
                              </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td scope="row">
                                        <div className="d-flex align-bottom">
                                            <img src="../../public/imgs/shop-28-img-1.jpg" className="d-inline-block order-summary-item-img" alt="Product Image"/>
                                            <div className="d-inline-block order-summary-item-info ms-3">
                                                <p className="w-100 mb-0 subtitle2">Singapore Dark Rattan Arm Chair</p>
                                                <div className="d-inline">
                                                    <p className="support d-inline">Size M</p>
                                                    <p className="subtitle2 d-inline">.</p>
                                                    <p className="support d-inline">Black</p>
                                                    <p className="subtitle2 d-inline">.</p>
                                                    <p className="support d-inline">SKU 001</p>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="order-summary-item-quantity"><p>2</p></td>
                                    <td className="order-summary-item-price"><p>$3,000</p></td>
                                  </tr>
                              <tr>
                                <td scope="row">
                                    <div className="d-flex align-bottom">
                                        <img src="../../public/imgs/shop-28-img-1.jpg" className="d-inline-block order-summary-item-img" alt="Product Image"/>
                                        <div className="d-inline-block order-summary-item-info ms-3">
                                            <p className="w-100 mb-0 subtitle2">Singapore Dark Rattan Arm Chair</p>
                                            <div className="d-inline">
                                                <p className="support d-inline">Size M</p>
                                                <p className="subtitle2 d-inline">.</p>
                                                <p className="support d-inline">Black</p>
                                                <p className="subtitle2 d-inline">.</p>
                                                <p className="support d-inline">SKU 001</p>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="order-summary-item-quantity"><p>2</p></td>
                                <td className="order-summary-item-price"><p>$3,000</p></td>
                              </tr>
                              <tr>
                                <td scope="row">
                                    <div className="d-flex align-bottom">
                                        <img src="../../public/imgs/shop-28-img-1.jpg" className="d-inline-block order-summary-item-img" alt="Product Image"/>
                                        <div className="d-inline-block order-summary-item-info ms-3">
                                            <p className="w-100 mb-0 subtitle2">Singapore Dark Rattan Arm Chair</p>
                                            <div className="d-inline">
                                                <p className="support d-inline">Size M</p>
                                                <p className="subtitle2 d-inline">.</p>
                                                <p className="support d-inline">Black</p>
                                                <p className="subtitle2 d-inline">.</p>
                                                <p className="support d-inline">SKU 001</p>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="order-summary-item-quantity"><p>2</p></td>
                                <td className="order-summary-item-price"><p>$3,000</p></td>
                              </tr>
                            </tbody>
                          </table>
                    </div>
                    <ul className="order-summary-cost-section">
                        <li className="d-flex justify-content-between order-summary-cost">
                            <p className="title1">Shipping cost</p>
                            <p className="cost-money">$ 8.75</p>
                        </li>
                        <li className="d-flex justify-content-between order-summary-cost">
                            <p className="title1">Discount</p>
                            <p className="cost-money">$ 0</p>
                        </li>
                        <li className="d-flex justify-content-between order-summary-cost">
                            <p className="title1">Additional taxes</p>
                            <p className="cost-money">$ 5</p>
                        </li>
                        <li className="d-flex justify-content-between order-summary-cost">
                            <p className="title1">Subtotal</p>
                            <p className="cost-money">$ 4,890</p>
                        </li>
                    </ul>
                    <img src="../../public/imgs/navbar/line.svg" alt="line"/>
                    <div className="d-flex justify-content-between order-summary-total-section">
                        <p className="title1">Total Cost</p>
                        <h4>$ 4,895</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Confirmation;

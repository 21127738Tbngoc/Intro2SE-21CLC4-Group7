import React, { useState, useEffect } from 'react';
import '../components/common.css';
import '../components/styles/Confirmation.css';

import '../../public/bootstrap-5/css/bootstrap.min.css';
import '../../public/bootstrap-5/js/bootstrap.bundle.min.js';
import '../components/button/buttons.css';
import '../components/common.css';
import '../../src/components/breadcrumb/breadcrumb.css';

const Confirmation = () => {
  return (
    <div class="container-fluid">
        <nav aria-label="breadcrumb" class="navbar-breadcrumb">
            <ol class="breadcrumb">
            <li class="breadcrumb-item breadcrumb-home"><a href="#">HOME</a></li>
            <li class="breadcrumb-item breadcrumb-home"><a href="#">CART</a></li>
            <li class="breadcrumb-item breadcrumb-home"><a href="#">CHECKOUT</a></li>
            <li class="breadcrumb-item breadcrumb-home"><a href="#">PAYMENT</a></li>
            <li class="breadcrumb-item breadcrumb-element"><a href="#">CONFIRMATION</a></li>
            </ol>
        </nav>
        <div class="page-title">
            <d3>Confirmation</d3>
        </div>
        <div class="page-breadcrumb">
            <p class="d-inline-block p1">CART</p>
            <p class="d-inline-block p1">•</p>
            <p class="d-inline-block p1">CHECKOUT</p>
            <p class="d-inline-block p1">•</p>
            <p class="d-inline-block p1">PAYMENT</p>
            <p class="d-inline-block p1">•</p>
            <p class="d-inline-block p1 page-sub-breadcrumb">CONFIRMATION</p>
        </div>
        {/* <!-- Confirm notification items --> */}
        <div class="text-center w-100 confirm-noti-section">
            <img src="../../public/imgs/navbar/check-round-icon.svg" alt="Check" class=""/>
            <h3 class="my-4">Thank you! <br/>Your order has been successfully placed!</h3>
            <div class="d-flex justify-content-around text-center">
                <p class="subtitle1 confirm-noti-message">Thank you for shopping with Fitment. Your order has been successfully placed. Below are the details of your purchase</p>
            </div>
        </div>
        <div class="container-fluid-xxl d-flex justify-content-between confirm-detail-container">
            {/* <!-- Order infomation --> */}
            <div class="order-info-section">
                <div class="order-info-container">
                    <h4>Order Detail</h4>
                    <ul class="order-info mt-4">
                        <li class="d-flex order-info-detail">
                            <p class="title1 me-4">Order number:</p>
                            <p class="p1">#123456789</p>
                        </li>
                        <li class="d-flex order-info-detail">
                            <p class="title1 me-4">Order date:</p>
                            <p class="p1">16/12 19:36 PM</p>
                        </li>
                        <li class="d-flex order-info-detail">
                            <p class="title1 me-4">Estimated delivery date:</p>
                            <p class="p1">18/12 10:00 AM</p>
                        </li>
                    </ul>
                </div>
                <div class="order-info-container">
                    <h4>Shipping Information</h4>
                    <ul class="order-info mt-4">
                        <li class="d-flex order-info-shipping">
                            <p class="title1 me-4">Contact:</p>
                            <p class="p1">Mr. Michael Johnson <br/> michael.johnson@email.com <br/> +1555666777</p>
                        </li>
                        <li class="d-flex order-info-shipping">
                            <p class="title1 me-4">Ship to:</p>
                            <p class="p1">16/12 19:36 PM</p>
                        </li>
                        <li class="d-flex order-info-shipping">
                            <p class="title1 me-4">Method:</p>
                            <p class="p1">18/12 10:00 AM</p>
                        </li>
                    </ul>
                </div>
                <div class="order-info-container">
                    <h4>Payment Information</h4>
                    <ul class="order-info mt-4">
                        <li class="d-flex order-info-payment">
                            <p class="title1 me-4">Paid with:</p>
                            <p class="p1">Master Card <br/> Mr. Michael Johnson <br/> XXXX-XXXX-X123</p>
                        </li>
                    </ul>
                </div>
            </div>
             {/* <!-- Order Summary --> */}
             <div class="order-summary-container">
                <div class="order-summary">
                    <h4 class="order-summary-title">ORDER SUMMARY</h4>
                    <div class="order-summary-items">
                        <table class="table table-borderless">
                            <thead class="order-summary-items-header">
                              <tr>
                                <th scope="col">Item</th>
                                <th scope="col">QTY</th>
                                <th scope="col">PRICE</th>
                              </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td scope="row">
                                        <div class="d-flex align-bottom">
                                            <img src="../../public/imgs/shop-28-img-1.jpg" class="d-inline-block order-summary-item-img" alt="Product Image"/>
                                            <div class="d-inline-block order-summary-item-info ms-3">
                                                <p class="w-100 mb-0 subtitle2">Singapore Dark Rattan Arm Chair</p>
                                                <div class="d-inline">
                                                    <p class="support d-inline">Size M</p>
                                                    <p class="subtitle2 d-inline">.</p>
                                                    <p class="support d-inline">Black</p>
                                                    <p class="subtitle2 d-inline">.</p>
                                                    <p class="support d-inline">SKU 001</p>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="order-summary-item-quantity"><p>2</p></td>
                                    <td class="order-summary-item-price"><p>$3,000</p></td>
                                  </tr>
                              <tr>
                                <td scope="row">
                                    <div class="d-flex align-bottom">
                                        <img src="../../public/imgs/shop-28-img-1.jpg" class="d-inline-block order-summary-item-img" alt="Product Image"/>
                                        <div class="d-inline-block order-summary-item-info ms-3">
                                            <p class="w-100 mb-0 subtitle2">Singapore Dark Rattan Arm Chair</p>
                                            <div class="d-inline">
                                                <p class="support d-inline">Size M</p>
                                                <p class="subtitle2 d-inline">.</p>
                                                <p class="support d-inline">Black</p>
                                                <p class="subtitle2 d-inline">.</p>
                                                <p class="support d-inline">SKU 001</p>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td class="order-summary-item-quantity"><p>2</p></td>
                                <td class="order-summary-item-price"><p>$3,000</p></td>
                              </tr>
                              <tr>
                                <td scope="row">
                                    <div class="d-flex align-bottom">
                                        <img src="../../public/imgs/shop-28-img-1.jpg" class="d-inline-block order-summary-item-img" alt="Product Image"/>
                                        <div class="d-inline-block order-summary-item-info ms-3">
                                            <p class="w-100 mb-0 subtitle2">Singapore Dark Rattan Arm Chair</p>
                                            <div class="d-inline">
                                                <p class="support d-inline">Size M</p>
                                                <p class="subtitle2 d-inline">.</p>
                                                <p class="support d-inline">Black</p>
                                                <p class="subtitle2 d-inline">.</p>
                                                <p class="support d-inline">SKU 001</p>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td class="order-summary-item-quantity"><p>2</p></td>
                                <td class="order-summary-item-price"><p>$3,000</p></td>
                              </tr>
                            </tbody>
                          </table>
                    </div>
                    <ul class="order-summary-cost-section">
                        <li class="d-flex justify-content-between order-summary-cost">
                            <p class="title1">Shipping cost</p>
                            <p class="cost-money">$ 8.75</p>
                        </li>
                        <li class="d-flex justify-content-between order-summary-cost">
                            <p class="title1">Discount</p>
                            <p class="cost-money">$ 0</p>
                        </li>
                        <li class="d-flex justify-content-between order-summary-cost">
                            <p class="title1">Additional taxes</p>
                            <p class="cost-money">$ 5</p>
                        </li>
                        <li class="d-flex justify-content-between order-summary-cost">
                            <p class="title1">Subtotal</p>
                            <p class="cost-money">$ 4,890</p>
                        </li>
                    </ul>
                    <img src="../../public/imgs/navbar/line.svg" alt="line"/>
                    <div class="d-flex justify-content-between order-summary-total-section">
                        <p class="title1">Total Cost</p>
                        <h4>$ 4,895</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Confirmation;

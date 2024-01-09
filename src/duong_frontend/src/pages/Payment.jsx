import React, { useState, useEffect } from 'react';
import '../components/common.css';
import '../components/styles/Payment.css';

import '../../public/bootstrap-5/css/bootstrap.min.css';
import '../../public/bootstrap-5/js/bootstrap.bundle.min.js';
import '../components/button/buttons.css';
import '../components/common.css';
import './togglePassword.js';

const Payment = () => {
  return (
    <div class="container-fluid">
        <nav aria-label="breadcrumb" class="navbar-breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item breadcrumb-home"><a href="#">HOME</a></li>
                <li class="breadcrumb-item breadcrumb-home"><a href="#">CART</a></li>
                <li class="breadcrumb-item breadcrumb-home"><a href="#">CHECKOUT</a></li>
                <li class="breadcrumb-item breadcrumb-element"><a href="#">PAYMENT</a></li>
            </ol>
        </nav>
        <div class="page-title">
            <d3>PAYMENT</d3>
        </div>
        <div class="page-breadcrumb">
            <p class="d-inline-block p1">CART</p>
            <p class="d-inline-block p1">•</p>
            <p class="d-inline-block p1">CHECKOUT</p>
            <p class="d-inline-block p1">•</p>
            <p class="d-inline-block p1 page-sub-breadcrumb">PAYMENT</p>
            <p class="d-inline-block p1">•</p>
            <p class="d-inline-block p1">CONFIRMATION</p>
        </div>

        <div class="container-fluid-xxl d-flex justify-content-between payment-container">
            {/* <!-- Billing Information --> */}
            <div class="billing-form">
                <h3 class="mb-4 px-0 billing-title">Billing Information</h3>
                <p class="subtitle1">Choose a payment option below and fill out the appropriate information to finish the purchasing process and place order.</p>
                <form action="">
                    <div class="form-group row my-4">
                        <ul class=" ps-0"> 
                            <li class="payment-method d-inline me-4">
                                <label class="px-0">
                                    <div class="btn-nm sec-btn">
                                        <img src="../../public/imgs/navbar/visa.svg" alt=""/>
                                    </div>
                                </label>
                            </li>
                            <li class="payment-method d-inline me-4">
                                <label class="px-0">
                                    <div class="btn-nm sec-btn">
                                        <img src="../../public/imgs/navbar/paypal.svg" alt=""/>
                                    </div>
                                </label>
                            </li>
                            <li class="payment-method d-inline me-4">
                                <label class="px-0">
                                    <div class="btn-nm sec-btn">
                                        <img src="../../public/imgs/navbar/gpay.svg" alt=""/>
                                    </div>
                                </label>
                            </li>
                            <li class="payment-method d-inline me-4">
                                <label class="px-0">
                                    <div class="btn-nm sec-btn">
                                        <img src="../../public/imgs/navbar/applepay.svg" alt=""/>
                                    </div>
                                </label>
                            </li>
                            <li class="payment-method d-inline">
                                <label class="px-0">
                                    <div class="btn-nm sec-btn">
                                        <img src="../../public/imgs/navbar/mastercard.svg" alt=""/>
                                    </div>
                                </label>
                            </li>
                        </ul>
                    </div>
                    <div class="form-group row card-info-form">
                        <div class="row col-xxl-12 mb-4">
                            <label for="cardHolderName">CARD HOLDER NAME</label>
                            <input type="text" class="form-control mt-2 p-3" id="cardHolderName" placeholder="NGUYEN VAN A" required/>
                        </div>
                        <div class="row col-xxl-12 mb-4">
                            <label for="cardNumber">CARD NUMBER</label>
                            <input type="text" class="form-control mt-2 p-3" id="cardNumber" placeholder="XXXX-XXXX-XXXX" required/>
                        </div>
                        <div class="row col-xxl-12 mb-4">
                            <div class="col-xxl-6 me-5">
                                <label for="expireDate">EXPIRY DATE</label>
                                <input type="month" class="form-control mt-2 p-3" id="expireDate" placeholder="XXXX-XXXX-XXXX" required/>
                            </div>
                            <div class="col-xxl-5">
                                <label for="cvv">CVV</label>
                                <input type="password" class="password form-control mt-2 p-3 pe-5" id="cvv" placeholder="Enter CVV number here" required/>
                                <button type="button" onclick="passwordToggle()">
                                    <img src="../../public/imgs/navbar/lock.svg" alt=""/>
                                </button>
                            </div>
                        </div>

                        <div class="row col-xxl-12 mb-4">
                            <input type="checkbox" class="col-xxl-1" required/>
                            <label class="p1 col-xxl-11">I have read and agree to the terms and conditions.</label>
                        </div>
                    </div>
                    <div class="row">
                        <a href="#" class="col-xxl-12">
                            <button type="submit" class="prim-btn btn-nm w-100 mb-4 invoice-checkout">
                                PLACE ORDER
                            </button>
                        </a>
                        <a href="#" class="col-xxl-12">
                            <div class="d-flex link-md">
                                <p class="d-inline mx-auto"><img src="../../public/imgs/navbar/arrow-left-icon.svg" alt="arrow" class="me-2"/>BACK TO CHECKOUT</p>
                            </div>
                        </a>
                    </div>
                </form>
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
                    <div class="invoice-counpon-section">
                        <p class="title2">Discount Code or Coupon</p>
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Enter your code here" aria-label="Search"/>
                            <button class="tert-i-btn tert-btn btn-sm" type="submit">APPLY</button>
                        </form>
                    </div>
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

export default Payment;

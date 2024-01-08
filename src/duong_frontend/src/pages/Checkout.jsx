import React, { useState, useEffect } from 'react';
import '../components/common.css';
import '../components/styles/Checkout.css';

import '../../public/bootstrap-5/css/bootstrap.min.css';
import '../../public/bootstrap-5/js/bootstrap.bundle.min.js';
import '../components/button/buttons.css';
import '../components/common.css';
import '../../src/components/breadcrumb/breadcrumb.css';

const Checkout = () => {
  return (
    <div className="container-fluid">
      <nav aria-label="breadcrumb" className="navbar-breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item breadcrumb-home"><a href="#">HOME</a></li>
          <li className="breadcrumb-item breadcrumb-home"><a href="#">CART</a></li>
          <li className="breadcrumb-item breadcrumb-element">
            <a href="#">CHECKOUT</a>
          </li>
        </ol>
      </nav>
      <div className="page-title">
        <d3>Checkout</d3>
      </div>
      <div className="page-breadcrumb">
        <p className="d-inline-block p1">CART</p>
        <p className="d-inline-block p1">•</p>
        <p className="d-inline-block p1 page-sub-breadcrumb">CHECKOUT</p>
        <p className="d-inline-block p1">•</p>
        <p className="d-inline-block p1">PAYMENT</p>
        <p className="d-inline-block p1">•</p>
        <p className="d-inline-block p1">CONFIRMATION</p>
      </div>
      <div
        className="container-fluid-xxl d-flex justify-content-between checkout-container"
      >
        {/* <!-- Order infomation --> */}
        <div className="checkout-form">
          <form action="">
            <div className="form-group row">
              <h3 className="mb-4 px-0 checkout-title">Contact Information</h3>
              <div className="col-xxl-11">
                <label for="email">EMAIL</label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  placeholder="nguyenvana@gmail.com"
                  required
                />
                <img src="../../public/imgs/navbar/mail.svg" alt="" />
              </div>
              <div className="col-xxl-11">
                <label for="phone">PHONE NUMBER</label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  placeholder="e.g Report a problem"
                />
                <img src="../../public/imgs/navbar/phone.svg" alt="" />
              </div>
            </div>
            <div className="form-group row my-4">
              <h3 className="my-4 px-0 checkout-title">Shipping Information</h3>
              <div className="row mb-4">
                <div className="col-xxl-6 me-4">
                  <label for="firstname">FIRST NAME *</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstname"
                    placeholder="Van A"
                    required
                  />
                  <img src="../../public/imgs/navbar/mail.svg" alt="" />
                </div>
                <div className="col-xxl-5">
                  <label for="lastname">LAST NAME *</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastname"
                    placeholder="e.g Report a problem"
                  />
                  <img src="../../public/imgs/navbar/phone.svg" alt="" />
                </div>
              </div>

              <div className="row mb-4">
                <div className="col-xxl-7 me-4">
                  <label for="address">ADDRESS *</label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="123 Street name, Ward name"
                    required
                  />
                  <img src="../../public/imgs/navbar/mail.svg" alt="" />
                </div>
                <div className="col-xxl-4">
                  <label for="firstname">ADDRESS *</label>
                  <select
                    className="selectpicker form-control border-0 mb-1 rounded btn-md outline-btn"
                  >
                    <option value="danh sach quan">District1</option>
                    <option value="danh sach quan">District2</option>
                  </select>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-xxl-4 me-3">
                  <label for="city">CITY/PROVINCE *</label>
                  <select
                    className="selectpicker form-control border-0 mb-1 rounded btn-md outline-btn"
                  >
                    <option value="danh sach thanh pho">HCM</option>
                    <option value="danh sach thanh pho">HANOI</option>
                  </select>
                </div>
                <div className="col-xxl-3 me-3">
                  <label for="firstname">POSTAL CODE *</label>
                  <input
                    type="text"
                    className="p-3 form-control"
                    id="postal"
                    placeholder="70000"
                    required
                  />
                </div>
                <div className="col-xxl-4">
                  <label for="firstname">COUNTRY/REGION *</label>
                  <select
                    className="selectpicker form-control border-0 mb-1 rounded btn-md outline-btn"
                  >
                    <option value="danh sach nuoc">VIETNAM</option>
                    <option value="danh sach nuoc">LAOS</option>
                  </select>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-xxl-12">
                  <label for="title">SHIPPING NOTE</label>
                  <textarea
                    className="form-control w-100 h-100"
                    id="title"
                    placeholder="Notes about your order (e.g Special notes for delivery)"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="form-group row my-4">
              <h3 className="mb-4 px-0">Shipping Method</h3>

              <div className="row shipping-option">
                <label className="w-100 px-0">
                  <div className="col-xxl-11 p-4 btn-nm outline-btn">
                    <div className="d-flex justify-content-between mb-3">
                      <div className="shipping-title d-flex">
                        <input
                          type="radio"
                          name="product"
                          selected
                          checked
                          className="w-25 card-input-element"
                        />
                        <p className="subtitle1 ms-3">Standard Shipping</p>
                      </div>
                      <p className="subtitle1 shipping-price">$ 8.75</p>
                    </div>

                    <div className="shipping-desc">
                      <p className="p3">Giao Hang Tiet Kiem</p>
                      <p className="p3">
                        Our standard shipping option delivers your order within
                        7 business days. Expected delivery by Monday, 18/12
                      </p>
                    </div>
                  </div>
                </label>
              </div>
              <div className="row shipping-option">
                <label className="w-100 px-0">
                  <div className="col-xxl-11 p-4 btn-nm outline-btn">
                    <div className="d-flex justify-content-between mb-3">
                      <div className="shipping-title d-flex">
                        <input
                          type="radio"
                          name="product"
                          selected
                          checked
                          className="w-25 card-input-element"
                        />
                        <p className="subtitle1 ms-3">Standard Shipping</p>
                      </div>
                      <p className="subtitle1 shipping-price">$ 8.75</p>
                    </div>

                    <div className="shipping-desc">
                      <p className="p3">Giao Hang Tiet Kiem</p>
                      <p className="p3">
                        Our standard shipping option delivers your order within
                        7 business days. Expected delivery by Monday, 18/12
                      </p>
                    </div>
                  </div>
                </label>
              </div>
              <div className="row shipping-option">
                <label className="w-100 px-0">
                  <div className="col-xxl-11 p-4 btn-nm outline-btn">
                    <div className="d-flex justify-content-between mb-3">
                      <div className="shipping-title d-flex">
                        <input
                          type="radio"
                          name="product"
                          selected
                          checked
                          className="w-25 card-input-element"
                        />
                        <p className="subtitle1 ms-3">Standard Shipping</p>
                      </div>
                      <p className="subtitle1 shipping-price">$ 8.75</p>
                    </div>

                    <div className="shipping-desc">
                      <p className="p3">Giao Hang Tiet Kiem</p>
                      <p className="p3">
                        Our standard shipping option delivers your order within
                        7 business days. Expected delivery by Monday, 18/12
                      </p>
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </form>
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
                        <img
                          src="../../public/imgs/shop-28-img-1.jpg"
                          className="d-inline-block order-summary-item-img"
                          alt="Product Image"
                        />
                        <div
                          className="d-inline-block order-summary-item-info ms-3"
                        >
                          <p className="w-100 mb-0 subtitle2">
                            Singapore Dark Rattan Arm Chair
                          </p>
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
                        <img
                          src="../../public/imgs/shop-28-img-1.jpg"
                          className="d-inline-block order-summary-item-img"
                          alt="Product Image"
                        />
                        <div
                          className="d-inline-block order-summary-item-info ms-3"
                        >
                          <p className="w-100 mb-0 subtitle2">
                            Singapore Dark Rattan Arm Chair
                          </p>
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
                        <img
                          src="../../public/imgs/shop-28-img-1.jpg"
                          className="d-inline-block order-summary-item-img"
                          alt="Product Image"
                        />
                        <div
                          className="d-inline-block order-summary-item-info ms-3"
                        >
                          <p className="w-100 mb-0 subtitle2">
                            Singapore Dark Rattan Arm Chair
                          </p>
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
            <div className="invoice-counpon-section">
              <p className="title2">Discount Code or Coupon</p>
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Enter your code here"
                  aria-label="Search"
                />
                <button className="tert-i-btn tert-btn btn-sm" type="submit">
                  APPLY
                </button>
              </form>
            </div>
            <img src="../../public/imgs/navbar/line.svg" alt="line" />
            <div
              className="d-flex justify-content-between order-summary-total-section"
            >
              <p className="title1">Total Cost</p>
              <h4>$ 4,895</h4>
            </div>
            <a href="#">
              <button className="prim-btn btn-nm w-100 invoice-checkout">
                PROCEED TO CHECKOUT
              </button>
            </a>
            <a href="#">
              <div className="d-flex link-md">
                <p className="d-inline mx-auto">
                  <img
                    src="../../public/imgs/navbar/arrow-left-icon.svg"
                    alt="arrow"
                    className="me-2"
                  />BACK TO SHOPPING
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;

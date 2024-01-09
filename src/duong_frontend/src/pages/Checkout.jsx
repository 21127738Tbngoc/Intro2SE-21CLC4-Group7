import React, { useState, useEffect, useContext } from 'react';
import '../components/common.css';
import '../components/styles/Checkout.css';



import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../components/button/buttons.css';
import '../components/common.css';


import { ShopContext } from '../components/context/ShopContext';
import { Link, useNavigate } from 'react-router-dom';

const Checkout = () => {
  const navigate = useNavigate();
  const { getTotalCartItems, getTotalCartAmount, allProducts, cartItems, addToCart, removeallFromCart, remove1FromCart } = useContext(ShopContext);



  const totalCartItems = getTotalCartItems() || 0;

  const token=localStorage.getItem("Token");


  const uniqueCartItems = Array.from(new Set(cartItems));


  const [shippingInfo, setShippingInfo] = useState({
    fullName: '',
    address: '',
  });


  const handleProceedToConfirmation = async () => {
    try {
      const orderData = {
        userId: shippingInfo.fullName,
        address: shippingInfo.address,
        products: uniqueCartItems.map(productId => ({
          productId,
          quantity: cartItems.filter(id => id === productId).length,
        })),
        subtotal:getTotalCartAmount() + 8.75 + 5
      };
      console.log(orderData);

      const response = await fetch('http://localhost:5000/api/orders/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
    });


      if (response.ok) {
        // Order saved successfully, you can handle the success as needed
        console.log('Order saved successfully');
        navigate('/confirmation');
      } else {
        // Handle errors or show an error message
        console.error('Failed to save order:', response.status, response.statusText);
        // You might want to display an error message to the user
      }
    } catch (error) {
      console.error('Error while saving order:', error);
      // Handle unexpected errors
    }
  };
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
        <p className="d-inline-block p1">CONFIRMATION</p>
      </div>
      <div
        className="container-fluid-xxl d-flex justify-content-between checkout-container"
      >
        {/* <!-- Order infomation --> */}
        <div className="checkout-form">
          <form action="">
            <div className="form-group row my-4">
              <h3 className="my-4 px-0 checkout-title">Shipping Information</h3>
              <div className="row mb-4">
                <div className="col-xxl-6 me-4">
                  <label htmlFor="firstname">FULL NAME *</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstname"
                    placeholder="Le Van Duong"
                    required
                    onChange={(e) => setShippingInfo({ ...shippingInfo, fullName: e.target.value })}
                  />
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-xxl-7 me-4">
                  <label htmlFor="address">ADDRESS *</label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="123 Street name, Ward name"
                    required
                    onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })}
                  />
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
                                <p className="p3 d-inline">x{itemCount}</p>
                              </div>
                              <p className="subtitle2 d-inline">${product.price * itemCount}</p>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <a href="#">
                          </a>
                        </div>
                      </li>
                    );
                  }
                  return null;
                })}
              </ul>            </div>
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
                <p className="cost-money">$ {getTotalCartAmount()}</p>
              </li>
            </ul>
            <div
              className="d-flex justify-content-between order-summary-total-section"
            >
              <p className="title1">Total Cost</p>
              <h4>$ {getTotalCartAmount() + 8.75 + 5}</h4>
            </div>
            <a href="#">
              <a className="prim-btn btn-nm w-100 invoice-checkout"  onClick={handleProceedToConfirmation}>
                PROCEED TO COMFIRMATION
              </a>
            </a>
            <a href="#">

            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;

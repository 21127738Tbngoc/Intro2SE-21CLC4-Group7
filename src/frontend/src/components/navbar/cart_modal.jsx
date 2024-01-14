import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';


const Cartmodal = () => {
  const { getTotalCartAmount, allProducts, cartItems, addToCart, removeallFromCart, remove1FromCart } = useContext(ShopContext);

  
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
    <div className="navbar-cart">
      <div className="cart-list-section">
        <div className="d-flex flex-row-reverse">
          <h5 className="w-auto cart-close-btn">
            <img src="/imgs/navbar/close-icon.svg" onClick={closeCartModal} alt="Close" />
          </h5>
        </div>
        <h3 className="navbar-cart-title">Shopping Cart</h3>
        <ul className="cart-list-section">
          <li className="d-flex justify-content-between mb-1 cart-item">
            {uniqueCartItems.map((productId) => {
              const product = allProducts.find((p) => String(p._id) === productId);
              if (product) {
                const itemCount = cartItems.filter((id) => id === productId).length;
                return (
                  <div key={product._id}>
                    <div className="cartitems-format cartitems-format-main">
                      <img src={product.thumbnail} alt="" className="cart-item-img my-2" />
                      <p className="title2"> {product.name}</p>

                      <div className="mt-2">
                        <p className="d-inline">${product.price}</p>
                        <div className="d-inline cart-item-quantity mx-3">
                          <img
                            src="/imgs/navbar/minus.svg"
                            onClick={() => handle1RemoveFromCart(product._id)}
                            alt="Remove"
                          />
                          <p className="p3 d-inline">{itemCount}</p>
                          <img
                            src="/imgs/navbar/plus.svg"
                            onClick={() => handleAddToCart(product._id)}
                            alt="Add"
                          />
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <a href="#">
                          <button className="outline-i-btn i-btn-sm" onClick={() => handleRemoveFromCart(product._id)}>
                            <img
                              src="/imgs/navbar/trashcan.svg"

                              alt="Remove"
                            />
                          </button>
                        </a>
                      </div>
                    </div>
                    <hr />
                  </div>
                );
              }
              return null;
            })}
          </li>
        </ul>
        <div className="d-flex justify-content-between align-content-center cart-total-section">
          <p className="cart-total">TOTAL</p>
          <h4>${getTotalCartAmount()}</h4>
        </div>
        <div className="d-flex">
          <a className="prim-btn btn-md w-50 me-2"href='/cart' >VIEW CART</a>
          <a className="sec-btn btn-md w-50" href='/checkout'>CHECKOUT</a>
        </div>
      </div>
    </div>
  );
};

export default Cartmodal;
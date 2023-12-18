import React from 'react';

import './navbar.css'
import '../button/buttons.css'
import '../Utils/searchbar'
import "../searchbar/searchbar"
import Searchbar from "../searchbar/searchbar";

const Navbar = () => {
    let isOpenMenu = false;
    function toggleMenu() {
        const openIconMenu = document.querySelector('.navbar .menu-open-btn img');
        const menu = document.querySelector('.navbar-menu')

        if(isOpenMenu === false)
        {
            openIconMenu.src = '/imgs/navbar/close-icon.svg'
            menu.classList.add('open-menu');
            isOpenMenu = true;
        }
        else {
            openIconMenu.src = '/imgs/navbar/menu-icon.svg'
            menu.classList.remove('open-menu');
            isOpenMenu = false
        }
    }

    let isOpenCart = false;
    function openCartModal() {
        const cartModal = document.querySelector('.navbar-cart')
        if (isOpenCart === false)
        {
            cartModal.classList.add('open-cart-modal');
            isOpenCart = true;
        }else
        {
            cartModal.classList.remove('open-cart-modal');
            isOpenCart = false;
        }
    }

    let isSearching = false;
    function toggleSearch() {
        const searchLabel = document.querySelector('.search-label')
        const searchDropdown = document.querySelector('.search-dropdown')

        if(isSearching === false)
        {
            searchLabel.classList.remove('disable-search-label');
            searchDropdown.classList.remove('open-search-dropdown');
            isSearching = true;
        }
        else {
            searchLabel.classList.add('disable-search-label');
            searchDropdown.classList.add('open-search-dropdown');
            isSearching = false
        }
    }
    const searchTextStyle = {
        background: 'var(--scheme-background)',
        border: '1px solid var(--scheme-outline, #A1B096)'
    }
    return (
        <div>

            <div className="container-xxl  w-75" id={"nav-searchbar"}>
                <div className="search-dropdown justify-content-center flex-column gap-3 position-relative">
                    <div className="search-box" onClick={function (event) {
                        event.stopPropagation()
                    }}>
                        <div className="d-flex flex-row g-4 d-flex">
                            <div className="input-group">
                                <div className="input-group-text">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none">
                                        <path
                                            d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                                            stroke="#46692A" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <input type="text" className="form-control out" id="searchtext"
                                       placeholder="Typing something"
                                       style={searchTextStyle}/>

                                <div className="input-group-text quit-search">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none">
                                        <path
                                            d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                                            fill="#46692A"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid fixed-top navbar-container justify-content-between position-relative" onClick={function(event){
                event.stopPropagation()
            }}>
                <div className="container-xxl navbar">
                    <div className="d-flex flex-row g-4 align-items-center justify-content-between">
                        {/*// <!-- Menu & Search -->*/}
                        <div>
                            <h5 className="menu-open-btn"><img src="/imgs/navbar/menu-icon.svg"
                                                               alt="Menu" onClick={toggleMenu}/></h5>
                        </div>
                        <div className="search-label flex-row">
                        <h5 className="mx-2"><img src="/imgs/navbar/search-icon.svg" alt="Search" onClick={toggleSearch}/></h5>
                        <p className="button2 align-items-center h-100">SEARCH</p>
                        </div>
                    </div>

                    {/*// <!-- Logo -->*/}
                    <div className="d-flex flex-row g-4 align-items-center">
                        <h5><img src="/imgs/navbar/logo.svg" alt="Fitment"/></h5>
                    </div>
                    {/*// <!-- Cart & Account -->*/}
                    <div className="d-flex align-items-center">
                        <div className="d-flex flex-row align-items-center">
                            <h5 className="cart-modal-open-btn">
                                <img src="/imgs/navbar/cart-icon.svg" alt="Cart" onClick={openCartModal}/></h5>
                            <p className="button2 mx-2 align-items-center">BAG</p>
                            <div className="navbar-cart-num">
                                <p className="support align-items-center">0</p>
                            </div>
                        </div>
                        <div className="d-flex flex-row align-items-center">
                            <h5 className="mx-2"><img src="/imgs/navbar/profile-icon.svg" alt="Profile"/>
                            </h5>
                            <p className="button2 align-items-center">ACCOUNT</p>
                        </div>
                    </div>
                </div>

                {/*// <!-- Cart Modal -->*/}
                <div className="position-absolute navbar-cart">
                    <div className="cart-list-section">
                        <div className="d-flex flex-row-reverse">
                            <h5 className="w-auto cart-close-btn">
                                <img src="/imgs/navbar/close-icon.svg" alt="Close icon"/>
                            </h5>
                        </div>
                        <h2 className="navbar-cart-title">Shopping Cart</h2>
                        <ul className="cart-item-list-section">
                            <li className="d-flex justify-content-between mb-2 cart-item ">
                                <img src="/imgs/navbar/productimg.png" alt="Product Image"/>
                                <div className="cart-item-info mx-auto">
                                    <p className="subtitle2">Singapore Dark Rattan Arm Chair</p>
                                    <div className="d-inline">
                                        <p className="support d-inline">Size M</p>
                                        <p className="subtitle2 d-inline">.</p>
                                        <p className="support d-inline">Black</p>
                                        <p className="subtitle2 d-inline">.</p>
                                        <p className="support d-inline">SKU 001</p>
                                    </div>
                                    <div className="mt-2 cart-item-quantity-section">
                                        <p className="subtitle2 d-inline">$ 1,500</p>
                                        <div className="d-inline cart-item-quantity mx-3">
                                            <img src="/imgs/navbar/minus.svg" alt="Dot"/>
                                            <p className="p3 d-inline">2</p>
                                            <img src="/imgs/navbar/plus.svg" alt="Dot"/>
                                        </div>
                                        <p className="subtitle2 d-inline">$ 3,000</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <a href="#">
                                        <button className="outline-i-btn i-btn-nm">
                                            <img src="/imgs/navbar/trashcan.svg" alt="trashcan"/>
                                        </button>
                                    </a>
                                </div>
                            </li>
                            <li className="d-flex justify-content-between mb-2 cart-item ">
                                <img src="/imgs/navbar/productimg.png" alt="Product Image"/>
                                <div className="cart-item-info mx-auto">
                                    <p className="subtitle2">Singapore Dark Rattan Arm Chair</p>
                                    <div className="d-inline">
                                        <p className="support d-inline">Size M</p>
                                        <p className="subtitle2 d-inline">.</p>
                                        <p className="support d-inline">Black</p>
                                        <p className="subtitle2 d-inline">.</p>
                                        <p className="support d-inline">SKU 001</p>
                                    </div>
                                    <div className="mt-2">
                                        <p className="subtitle2 d-inline">$ 1,500</p>
                                        <div className="d-inline cart-item-quantity mx-3">
                                            <img src="/imgs/navbar/minus.svg" alt="Dot"/>
                                            <p className="p3 d-inline">2</p>
                                            <img src="/imgs/navbar/plus.svg" alt="Dot"/>
                                        </div>
                                        <p className="subtitle2 d-inline">$ 3,000</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <a href="#">
                                        <button className="outline-i-btn i-btn-nm">
                                            <img src="/imgs/navbar/trashcan.svg" alt="trashcan"/>
                                        </button>
                                    </a>
                                </div>
                            </li>
                            <li className="d-flex justify-content-between mb-2 cart-item ">
                                <img src="/imgs/navbar/productimg.png" alt="Product Image"/>
                                <div className="cart-item-info mx-auto">
                                    <p className="subtitle2">Singapore Dark Rattan Arm Chair</p>
                                    <div className="d-inline">
                                        <p className="support d-inline">Size M</p>
                                        <p className="subtitle2 d-inline">.</p>
                                        <p className="support d-inline">Black</p>
                                        <p className="subtitle2 d-inline">.</p>
                                        <p className="support d-inline">SKU 001</p>
                                    </div>
                                    <div className="mt-2">
                                        <p className="subtitle2 d-inline">$ 1,500</p>
                                        <div className="d-inline cart-item-quantity mx-3">
                                            <img src="/imgs/navbar/minus.svg" alt="Dot"/>
                                            <p className="p3 d-inline">2</p>
                                            <img src="/imgs/navbar/plus.svg" alt="Dot"/>
                                        </div>
                                        <p className="subtitle2 d-inline">$ 3,000</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <a href="#">
                                        <button className="outline-i-btn i-btn-nm">
                                            <img src="/imgs/navbar/trashcan.svg" alt="trashcan"/>
                                        </button>
                                    </a>
                                </div>
                            </li>
                        </ul>
                        <div className="d-flex justify-content-between align-content-center cart-total-section">
                            <h4>TOTAL</h4>
                            <h4> $ 4,895</h4>
                        </div>
                        <button className="prim-btn btn-nm w-100" onClick={() =>{
                            document.getElementById("navbar-signup-router").click();
                        }}><a id="navbar-signup-router" href={"/"}></a>
                            SIGN UP
                        </button>
                    </div>
                </div>
            </div>
            {/*// <!-- Megamenu -->*/}
            <div className="container-fluid navbar-menu">
                <div className="container-xxl d-flex">
                    {/*// <!--<div className="row g-4 w-100 ">-->*/}
                    <div className="col-xxl-7">
                        <div className="row">
                            <div className="col-xxl-3">
                                <d4>ABOUT</d4>
                                <ul className="flex-column mt-3">
                                    <li className="p1 mb-2"><a href="#" className="slide-border">ABOUT US</a></li>
                                    <li className="p1 mb-2"><a href="#" className="slide-border">OUR PARTNERS</a></li>
                                    <li className="p1 mb-2"><a href="#" className="slide-border">OUR DESIGNERS</a></li>
                                </ul>
                            </div>
                            <div className="col-xxl-3">
                                <d4>SHOP</d4>
                                <ul className="flex-column mt-3">
                                    <li className="p1 mb-2"><a href="#" className="slide-border">SHOP ALL</a></li>
                                    <li className="p1 mb-2"><a href="#" className="slide-border">LIVING ROOM</a></li>
                                    <li className="p1 mb-2"><a href="#" className="slide-border">BEDROOM</a></li>
                                    <li className="p1 mb-2"><a href="#" className="slide-border">DINING ROOM</a></li>
                                    <li className="p1 mb-4"><a href="#" className="slide-border">BATH ROOM</a></li>
                                </ul>
                            </div>
                            <div className="col-xxl-3 ">
                                <d4>SUPPORT</d4>
                                <ul className="flex-column mt-3">
                                    <li className="p1 mb-2"><a href="#" className="slide-border">FAQS</a></li>
                                    <li className="p1 mb-2"><a href="#" className="slide-border">CONTACT</a></li>
                                    <li className="p1 mb-2"><a href="#" className="slide-border">WARRANTY POLICY</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xxl-3">
                                <d4>SERVICE</d4>
                                <ul className="flex-column mt-3">
                                    <li className="p1 mb-2"><a href="#" className="slide-border">MAINTENANCE</a></li>
                                    <li className="p1 mb-2"><a href="#" className="slide-border">ASSEMBLY</a></li>
                                    <li className="p1 mb-2"><a href="#" className="slide-border">UPHOLSTERY</a></li>
                                    <li className="p1 mb-2"><a href="#" className="slide-border">REPAIRS</a></li>
                                </ul>
                            </div>
                            <div className="col-xxl-3 ">
                                <d4>MEDIA</d4>
                                <ul className="flex-column mt-3">
                                    <li className="p1 mb-2"><a href="#" className="slide-border">ARTICLES</a></li>
                                    <li className="p1 mb-2"><a href="#" className="slide-border">COMMUNITY</a></li>
                                </ul>
                            </div>
                            <div className="col-xxl-3 ">
                                <p className="label1">Follow Fitment at</p>
                                <ul className="d-flex flex-row mt-3">
                                    <li>
                                        <div className="menu-contact-container">
                                            <a href="#">
                                                <button className="outline-i-btn i-btn-nm">
                                                    <img src="/imgs/navbar/facebook-logo.svg" alt="facebook-logo"/>
                                                </button>
                                            </a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="menu-contact-container">
                                            <a href="#">
                                                <button className="outline-i-btn i-btn-nm">
                                                    <img src="/imgs/navbar/twitter-logo.svg" alt="twitter-logo"/>
                                                </button>
                                            </a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="menu-contact-container">
                                            <a href="#">
                                                <button className="outline-i-btn i-btn-nm">
                                                    <img src="/imgs/navbar/instagram-logo.svg" alt="instagram-logo"/>
                                                </button>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/*// <!-- Menu img -->*/}
                    <div className="col-xxl-5 menu-img">
                        <div>
                            <img src="/imgs/navbar/navimg.jpg" alt="" className="menu-img"/>
                                <a href="#" className="button1 view-more-btn">View more</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default Navbar;
import React, { useState, useEffect } from 'react';
import '../components/common.css';
import '../components/styles/Contact.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../components/button/buttons.css';
import '../components/common.css';
import '../components/styles/breadcrumb.css';

const Contact = () => {
  return (
    <div className="container-fluid">
        <div className="container">
                <ol className="breadcrumb">
                    <li style={{ color: 'var(--tone-on-background)' }}><a href="/">HOME</a></li>
                    <li style={{ color: 'var(--tone-on-background)' }}><a href="/shop">SUPPORT</a></li>
                    <li><a href="/livingroom"><strong>CONTACTUS</strong></a></li>   
                </ol>
            </div>
        <div className="page-title">
            <d3>CONTACT</d3>
        </div>
        <div className="container-xxl contact-container">
             {/* <!-- Branch stores --> */}
             <div className="store-list-section mb-5">
                <h2 className="store-list-title mb-5">Visit our store</h2>
                <div className="row">
                    <div className="col-xxl-3 store-info-container">
                        <h5>France</h5>
                        <ul className="flex-column mt-3">
                            <li className="p1 mb-2"><p className="p2">193 Boulevard Saint-Germain, Paris, France</p></li>
                            <li className="p1 mb-2">
                                <div>
                                    <p className="title2">Opening hours:</p>
                                    <p className="p2">Monday - Sunday <br/>8am - 10pm EST</p>
                                </div>
                            </li>
                            <li className="p1 mb-2"><p className="title2">Call us: +33 1 40 28 92 78</p></li>
                        </ul>
                    </div>
                    <div className="col-xxl-3 store-info-container">
                        <h5>France</h5>
                        <ul className="flex-column mt-3">
                            <li className="p1 mb-2"><p className="p2">193 Boulevard Saint-Germain, Paris, France</p></li>
                            <li className="p1 mb-2">
                                <div>
                                    <p className="title2">Opening hours:</p>
                                    <p className="p2">Monday - Sunday <br/>8am - 10pm EST</p>
                                </div>
                            </li>
                            <li className="p1 mb-2"><p className="title2">Call us: +33 1 40 28 92 78</p></li>
                        </ul>
                    </div>
                    <div className="col-xxl-3 store-info-container">
                        <h5>France</h5>
                        <ul className="flex-column mt-3">
                            <li className="p1 mb-2"><p className="p2">193 Boulevard Saint-Germain, Paris, France</p></li>
                            <li className="p1 mb-2">
                                <div>
                                    <p className="title2">Opening hours:</p>
                                    <p className="p2">Monday - Sunday <br/>8am - 10pm EST</p>
                                </div>
                            </li>
                            <li className="p1 mb-2"><p className="title2">Call us: +33 1 40 28 92 78</p></li>
                        </ul>
                    </div>
                    <div className="col-xxl-3 store-info-container">
                        <h5>France</h5>
                        <ul className="flex-column mt-3">
                            <li className="p1 mb-2"><p className="p2">193 Boulevard Saint-Germain, Paris, France</p></li>
                            <li className="p1 mb-2">
                                <div>
                                    <p className="title2">Opening hours:</p>
                                    <p className="p2">Monday - Sunday <br/>8am - 10pm EST</p>
                                </div>
                            </li>
                            <li className="p1 mb-2"><p className="title2">Call us: +33 1 40 28 92 78</p></li>
                        </ul>
                    </div>
                </div>
            </div>
             {/* <!-- Contact info --> */}
             <div className="contact-info-section">
                <h2 className="contact-info-title mb-5">Get in touch</h2>
                <div className="row">
                    <div className="col-xxl-3 contact-info-container">
                        <h5>Contact information</h5>thumbnail
                        <ul className="flex-column mt-3">
                            <li className="p1 mb-2">
                                <div>
                                    <p className="title2">Products and Services</p>
                                    <p className="p2">contact@fitment.com.vn</p>
                                    <p className="p2">(+84) 7738 5050</p>
                                </div>
                            </li>
                            <li className="p1 mb-2">
                                <div>
                                    <p className="title2">Shipping and Logistics</p>
                                    <p className="p2"><img src="/imgs/navbar/mail.svg" alt="" className="me-2"/>delivery@fitment.com.vn</p>
                                    <p className="p2"><img src="/imgs/navbar/phone.svg" alt="" className="me-2"/>(+84) 7738 5050</p>
                                </div>
                            </li>
                            <li className="p1 mb-2">
                                <div>
                                    <p className="title2">Support hours:</p>
                                    <p className="p2">Monday - Sunday <br/>
                                        7am - 17pm <br/>
                                        All days, including Sundays, Holidays & New Year</p>
                                </div>
                            </li>
                            <li className="p1 mb-2"><p className="title2">Hotline: (+84) 28 1234 5678</p></li>
                        </ul>
                    </div>
                    <div className="col-xxl-3 contact-info-container">
                        <h5>Head Office</h5>
                        <ul className="flex-column mt-3">
                            <li className="p1 mb-2">
                                <div>
                                    <p className="title2">Address</p>
                                    <p className="p2">39 Le Thanh Ton Street, Ben Nghe Ward, District 3, Ho Chi Minh City</p>
                                </div>
                            </li>
                            <li className="p1 mb-2">
                                <div>
                                    <p className="title2">Recruitment and Partnership</p>
                                    <p className="p2"><img src="/imgs/navbar/mail.svg" alt="" className="me-2"/>delivery@fitment.com.vn</p>
                                    <p className="p2"><img src="/imgs/navbar/phone.svg" alt="" className="me-2"/>(+84) 7738 5050</p>
                                </div>
                            </li>
                            <li className="p1 mb-2">
                                <div>
                                    <p className="title2">Available hours:</p>
                                    <p className="p2">Monday - Saturday <br/>
                                         8am - 5pm EST </p>
                                </div>
                            </li>
                            <li className="p1 mb-2"><p className="title2">Call us: (+84) 28 1234 5678</p></li>
                        </ul>
                    </div>
                    <div className="col-xxl-3 store-info-container">
                        <h5>Social Media</h5>
                        <ul className="d-flex flex-row mt-3">
                            <li>
                                <div className="social-contact-container">
                                    <a href="#">
                                        <button className="outline-i-btn i-btn-nm">
                                            <img src="/imgs/navbar/facebook-logo.svg" alt="facebook-logo"/>
                                        </button>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div className="social-contact-container">
                                    <a href="#">
                                        <button className="outline-i-btn i-btn-nm">
                                            <img src="/imgs/navbar/twitter-logo.svg" alt="twitter-logo"/>
                                        </button>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div className="social-contact-container">
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
        </div>
        
    </div>
  );
}

export default Contact;

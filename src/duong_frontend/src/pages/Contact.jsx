import React, { useState, useEffect } from 'react';
import '../components/common.css';
import '../components/styles/Contact.css';

import '../../public/bootstrap-5/css/bootstrap.min.css';
import '../../public/bootstrap-5/js/bootstrap.bundle.min.js';
import '../components/button/buttons.css';
import '../components/common.css';
import '../../src/components/breadcrumb/breadcrumb.css';

const Contact = () => {
  return (
    <div class="container-fluid">
        <div class="page-title">
            <d3>CONTACT</d3>
        </div>
        <nav aria-label="breadcrumb" class="navbar-breadcrumb page-breadcrumb">
            <ul class="breadcrumb">
                <li class="breadcrumb-item breadcrumb-home"><a href="#">HOME</a></li>
                <li class="breadcrumb-item breadcrumb-home"><a href="#">SUPPORT</a></li>
                <li class="breadcrumb-item breadcrumb-element"><a href="#">CONTACT US</a></li>
            </ul>
        </nav>
        <div class="container-xxl contact-container">
             {/* <!-- Branch stores --> */}
             <div class="store-list-section mb-5">
                <h2 class="store-list-title mb-5">Visit our store</h2>
                <div class="row">
                    <div class="col-xxl-3 store-info-container">
                        <h5>France</h5>
                        <ul class="flex-column mt-3">
                            <li class="p1 mb-2"><p class="p2">193 Boulevard Saint-Germain, Paris, France</p></li>
                            <li class="p1 mb-2">
                                <div>
                                    <p class="title2">Opening hours:</p>
                                    <p class="p2">Monday - Sunday <br/>8am - 10pm EST</p>
                                </div>
                            </li>
                            <li class="p1 mb-2"><p class="title2">Call us: +33 1 40 28 92 78</p></li>
                        </ul>
                    </div>
                    <div class="col-xxl-3 store-info-container">
                        <h5>France</h5>
                        <ul class="flex-column mt-3">
                            <li class="p1 mb-2"><p class="p2">193 Boulevard Saint-Germain, Paris, France</p></li>
                            <li class="p1 mb-2">
                                <div>
                                    <p class="title2">Opening hours:</p>
                                    <p class="p2">Monday - Sunday <br/>8am - 10pm EST</p>
                                </div>
                            </li>
                            <li class="p1 mb-2"><p class="title2">Call us: +33 1 40 28 92 78</p></li>
                        </ul>
                    </div>
                    <div class="col-xxl-3 store-info-container">
                        <h5>France</h5>
                        <ul class="flex-column mt-3">
                            <li class="p1 mb-2"><p class="p2">193 Boulevard Saint-Germain, Paris, France</p></li>
                            <li class="p1 mb-2">
                                <div>
                                    <p class="title2">Opening hours:</p>
                                    <p class="p2">Monday - Sunday <br/>8am - 10pm EST</p>
                                </div>
                            </li>
                            <li class="p1 mb-2"><p class="title2">Call us: +33 1 40 28 92 78</p></li>
                        </ul>
                    </div>
                    <div class="col-xxl-3 store-info-container">
                        <h5>France</h5>
                        <ul class="flex-column mt-3">
                            <li class="p1 mb-2"><p class="p2">193 Boulevard Saint-Germain, Paris, France</p></li>
                            <li class="p1 mb-2">
                                <div>
                                    <p class="title2">Opening hours:</p>
                                    <p class="p2">Monday - Sunday <br/>8am - 10pm EST</p>
                                </div>
                            </li>
                            <li class="p1 mb-2"><p class="title2">Call us: +33 1 40 28 92 78</p></li>
                        </ul>
                    </div>
                </div>
            </div>
             {/* <!-- Contact info --> */}
             <div class="contact-info-section">
                <h2 class="contact-info-title mb-5">Get in touch</h2>
                <div class="row">
                    <div class="col-xxl-3 contact-info-container">
                        <h5>Contact information</h5>
                        <ul class="flex-column mt-3">
                            <li class="p1 mb-2">
                                <div>
                                    <p class="title2">Products and Services</p>
                                    <p class="p2">contact@fitment.com.vn</p>
                                    <p class="p2">(+84) 7738 5050</p>
                                </div>
                            </li>
                            <li class="p1 mb-2">
                                <div>
                                    <p class="title2">Shipping and Logistics</p>
                                    <p class="p2"><img src="../../public/imgs/navbar/mail.svg" alt="" class="me-2"/>delivery@fitment.com.vn</p>
                                    <p class="p2"><img src="../../public/imgs/navbar/phone.svg" alt="" class="me-2"/>(+84) 7738 5050</p>
                                </div>
                            </li>
                            <li class="p1 mb-2">
                                <div>
                                    <p class="title2">Support hours:</p>
                                    <p class="p2">Monday - Sunday <br/>
                                        7am - 17pm <br/>
                                        All days, including Sundays, Holidays & New Year</p>
                                </div>
                            </li>
                            <li class="p1 mb-2"><p class="title2">Hotline: (+84) 28 1234 5678</p></li>
                        </ul>
                    </div>
                    <div class="col-xxl-3 contact-info-container">
                        <h5>Head Office</h5>
                        <ul class="flex-column mt-3">
                            <li class="p1 mb-2">
                                <div>
                                    <p class="title2">Address</p>
                                    <p class="p2">39 Le Thanh Ton Street, Ben Nghe Ward, District 3, Ho Chi Minh City</p>
                                </div>
                            </li>
                            <li class="p1 mb-2">
                                <div>
                                    <p class="title2">Recruitment and Partnership</p>
                                    <p class="p2"><img src="../../public/imgs/navbar/mail.svg" alt="" class="me-2"/>delivery@fitment.com.vn</p>
                                    <p class="p2"><img src="../../public/imgs/navbar/phone.svg" alt="" class="me-2"/>(+84) 7738 5050</p>
                                </div>
                            </li>
                            <li class="p1 mb-2">
                                <div>
                                    <p class="title2">Available hours:</p>
                                    <p class="p2">Monday - Saturday <br/>
                                         8am - 5pm EST </p>
                                </div>
                            </li>
                            <li class="p1 mb-2"><p class="title2">Call us: (+84) 28 1234 5678</p></li>
                        </ul>
                    </div>
                    <div class="col-xxl-3 store-info-container">
                        <h5>Social Media</h5>
                        <ul class="d-flex flex-row mt-3">
                            <li>
                                <div class="social-contact-container">
                                    <a href="#">
                                        <button class="outline-i-btn i-btn-nm">
                                            <img src="../../public/imgs/navbar/facebook-logo.svg" alt="facebook-logo"/>
                                        </button>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div class="social-contact-container">
                                    <a href="#">
                                        <button class="outline-i-btn i-btn-nm">
                                            <img src="../../public/imgs/navbar/twitter-logo.svg" alt="twitter-logo"/>
                                        </button>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div class="social-contact-container">
                                    <a href="#">
                                        <button class="outline-i-btn i-btn-nm">
                                            <img src="../../public/imgs/navbar/instagram-logo.svg" alt="instagram-logo"/>
                                        </button>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Map section --> */}
        <img src="../../public/imgs/other/map.png" alt="Map" class="map-section-img"/>
        {/* <!-- Inquiry section --> */}
        <div class="container-xxl mt-5 inquiry-container">
            <div class="inquiry-title">
                <d5>SEND US AN INQUIRY</d5>
            </div>
            <div class="inquiry-form">
                <p class="p3">Your data will be kept confidential. Input fields marked with * are required data</p>
                <form action="">
                    <div class="form-group row my-4">
                        <div class="col-xxl-4 me-3">
                            <label for="fullname">Full name *</label>
                            <input type="text" class="form-control" id="fullname" placeholder="Nguyen Van A" required/>
                            <img src="../../public/imgs/navbar/user.svg" alt=""/>
                        </div>
                        <div class="col-xxl-7">
                            <label for="subject">Subject (Optional)</label>
                            <input type="text" class="form-control" id="subject" placeholder="e.g Report a problem"/>
                            <img src="../../public/imgs/navbar/mail.svg" alt=""/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="form-group col-xxl-4 me-3">
                            <div class="col-xxl-12 mb-3">
                                <label for="firstName">Email Address *</label>
                                <input type="text" class="form-control" id="firstName" placeholder="nguyenvana@gmail.com" required/>
                                <img src="../../public/imgs/navbar/mail.svg" alt=""/>
                            </div>
                            <div class="col-xxl-12">
                                <label for="phoneNume">Phone Number *</label>
                                <input type="text" class="form-control" id="phoneNume" placeholder="0123 456 789" required/>
                                <img src="../../public/imgs/navbar/phone.svg" alt=""/>
                            </div>
                        </div>
                        <div class="form-group col-xxl-7">
                            <label for="title">Title</label>
                            <textarea class="form-control h-100" id="title" placeholder="Enter your information"></textarea>
                        </div>
                    </div>
                    <div class="inquiry-btn mt-5">
                        <button class="prim-btn btn-nm" type="submit">SEND INQUIRY</button>
                    </div>
                </form>
                
            </div>
        </div>
    </div>
  );
}

export default Contact;

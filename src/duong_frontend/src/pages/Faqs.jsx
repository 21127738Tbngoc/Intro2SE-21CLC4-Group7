import React, { useState, useEffect } from 'react';
import '../components/common.css';
import '../components/styles/Faqs.css';

import '../../public/bootstrap-5/css/bootstrap.min.css';
import '../../public/bootstrap-5/js/bootstrap.bundle.min.js';
import '../components/button/buttons.css';
import '../components/common.css';
import '../../src/components/breadcrumb/breadcrumb.css';

const Faqs = () => {
  return (
    <div className="container-fluid">
        <div className="page-title">
            <d3>FAQs</d3>
        </div>
        <nav aria-label="breadcrumb" className="navbar-breadcrumb page-breadcrumb">
            <ul className="breadcrumb">
                <li className="breadcrumb-item breadcrumb-home"><a href="#">HOME</a></li>
                <li className="breadcrumb-item breadcrumb-home"><a href="#">SUPPORT</a></li>
                <li className="breadcrumb-item breadcrumb-element"><a href="#">CONTACT US</a></li>
            </ul>
        </nav>
        {/* <!-- Search section --> */}
        <div className="d-flex justify-content-around">
            <div className="search-section">
                <h3 className="mt-5 mb-4 text-center">Have any questions?</h3>
                <form action="">
                    <input type="text" className="form-control search-bar" id="fullname" placeholder="Enter your question here" required/>
                    <img src="../../public/imgs/navbar/search-icon.svg" alt=""/>
                </form>
            </div>
        </div>
        {/* <!-- FAQs --> */}
        <div className="container-xxl faq-container">
            <div className="row offset-xxl-1">
                {/* <!-- Category section --> */}
                <div className="col-xxl-3 category-section">
                    <h6>CATEGORY</h6>
                    <ul className="category-section">
                        <li><p className="title1">General</p></li>
                        <li><p className="title1">Return & refunds</p></li>
                        <li><p className="title1">Shipping & delivery</p></li>
                        <li><p className="title1">Payment methods</p></li>
                        <li><p className="title1">Products</p></li>
                    </ul>
                </div>
                {/* <!-- Question section --> */}
                <div className="col-xxl-4 question-section">
                    <h6>FREQUENTLY ASKED QUESTIONS</h6>
                    <div className="accordion question-acc">
                        <div className="accordion-item">
                          <h2 className="accordion-header">
                            <button className="accordion-button collapsed acc-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <p className="title1">How do I place my order?</p>
                            </button>
                          </h2>
                          <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                          </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed acc-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseOne">
                                    <p className="title1">How do I place my order?</p>
                                </button>
                            </h2>
                          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                              </div>
                          </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed acc-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseOne">
                                    <p className="title1">How do I place my order?</p>
                                </button>
                            </h2>
                          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                              </div>
                          </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed acc-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseOne">
                                    <p className="title1">How do I place my order?</p>
                                </button>
                            </h2>
                          <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                              </div>
                          </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed acc-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseOne">
                                    <p className="title1">How do I place my order?</p>
                                </button>
                            </h2>
                          <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                              </div>
                          </div>
                        </div>
                      </div>

                      {/* <!-- <nav>
                        <ul className="pagination ">
                          <li className="page-item">
                            <a className="page-link" href="#" aria-label="Previous">
                              <span aria-hidden="true">&laquo;</span>
                            </a>
                          </li>
                          <li className="page-item"><a className="page-link" href="#">1</a></li>
                          <li className="page-item"><a className="page-link" href="#">2</a></li>
                          <li className="page-item"><a className="page-link" href="#">3</a></li>
                          <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next">
                              <span aria-hidden="true">&raquo;</span>
                            </a>
                          </li>
                        </ul>
                      </nav> --> */}
                </div>
            </div>
        </div>
        {/* <!-- Contact banner --> */}
        <div className="contact-banner">
            <img src="../../public/imgs/other/contact-banner.jpg" alt="Contact banner" className="contact-banner-img" />
            <div className="contact-banner-title">
                <h5>DID NOT FIND ANY USEFUL ANSWERS?</h5>
                <d2>FEEL FREE TO CONTACT US</d2>
            </div>
            <button className="sec-btn btn-nm">
                CONTACT US
                <img src="../../public/imgs/navbar/arrow-right-icon.svg" alt=""/>
            </button>
        </div>
    </div>
  );
}

export default Faqs;

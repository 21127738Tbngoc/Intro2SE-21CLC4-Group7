import React from 'react';

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"

import "../styles/footer.css"
import "../button/buttons.css"

const Footer = () => {
    return (
        <div>
            <div className="container-fluid footer mt-5">
                <div className="container">
                    <div className="row g-4">
                        {/* <!-- Logo --> */}
                        <div className="col-5">
                            <d2 className="footer-logo">Fitment</d2>
                            <p className="title2 footer-subtitle">The Interior Designs & Furnishings Industry Ltd.</p>
                            <div className="footer-social d-flex">
                                <button className="social-btn me-3 i-btn-nm"><i
                                    className="fa-brands fa-facebook-f"></i></button>
                                <button className="social-btn me-3 i-btn-nm"><i
                                    className="fa-brands fa-instagram"></i></button>
                                <button className="social-btn me-3 i-btn-nm"><i
                                    className="fa-brands fa-twitter"></i></button>
                            </div>
                        </div>
                        <div className="col-1"></div>
                        {/* <!-- Footer sections --> */}
                        <div className="col-2 footer-section">
                            <h4 className="footer-title">ABOUT</h4>
                            <p className="p1">ABOUT US</p>
                            <p className="p1">OUR PARTNERS</p>
                            <p className="p1">OUR DESIGNERS</p>
                            <p className="p1">ARTICLES</p>
                        </div>
                        <div className="col-2 footer-section">
                            <h4 className="footer-title">SHOP</h4>
                            <p className="p1">SHOP ALL</p>
                            <p className="p1">LIVING ROOMS</p>
                            <p className="p1">BEDROOM</p>
                            <p className="p1">DINING ROOM</p>
                            <p className="p1">BATH ROOM</p>
                        </div>

                        <div className="col-2 footer-section">
                            <h4 className="footer-title">SUPPORT</h4>
                            <p className="p1">FAQS</p>
                            <p className="p1">CONTACT</p>
                            <p className="p1">REFUND POLICY</p>
                            <p className="p1">WARRANTY POLICY</p>
                        </div>
                    </div>
                    {/* <!-- Row 2 --> */}
                    <div className="row g-4">
                        {/* <!-- Form --> */}
                        <div className="col-5">

                        </div>
                        <div className="col-1"></div>
                        {/* <!-- Footer sections --> */}
                        <div className="col-2 footer-section">
                            <h4 className="footer-title">SERVICE</h4>
                            <p className="p1">MAINTENANCE</p>
                            <p className="p1">ASSEMBLY</p>
                            <p className="p1">UPHOLSTERY</p>
                            <p className="p1">REPAIRS</p>
                        </div>
                        <div className="col-2 footer-section">
                            <h4 className="footer-title">MEDIA</h4>
                            <p className="p1">ARTICLES</p>
                            <p className="p1">GUIDELINES</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid copyright">
                <div className="container">
                    <div className="d-flex justify-content-between">
                        <p className="p2 copyright">2023 MadeinFit Furnishings Industry Ltd. | All right reserved</p>
                        <p className="p2 copyright">Privacy Policy | Terms & Conditions</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
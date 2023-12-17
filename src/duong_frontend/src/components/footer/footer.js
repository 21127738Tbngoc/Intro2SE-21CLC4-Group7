import React from 'react';

// import Img from "../../public/imgs/"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import "./footer.css"

const Footer = () => {
    return (
        <div>
            <div class="container-fluid footer">
                <div class="container">
                    <div class="row g-4">
                        {/* <!-- Logo --> */}
                        <div class="col-5">
                            <d2 class="footer-logo">Fitment</d2>
                            <p class="title2 footer-subtitle">The Interior Designs and Furnishings Industry Ltd.</p>
                            <div class="footer-social d-flex">
                                <button class="icon-btn-nm me-3"><i class="fa-brands fa-facebook-f"></i></button>
                                <button class="icon-btn-nm me-3"><i class="fa-brands fa-instagram"></i></button>
                                <button class="icon-btn-nm me-3"><i class="fa-brands fa-twitter"></i></button>
                            </div>
                        </div>
                        <div class="col-1"></div>
                        {/* <!-- Footer sections --> */}
                        <div class="col-2 footer-section">
                            <d5 class="footer-title">ABOUT</d5>
                            <p class="p1">ABOUT US</p>
                            <p class="p1">OUR PARTNERS</p>
                            <p class="p1">OUR DESIGNERS</p>
                            <p class="p1">ARTICLES</p>
                        </div>
                        <div class="col-2 footer-section">
                            <d5 class="footer-title">SHOP</d5>
                            <p class="p1">SHOP ALL</p>
                            <p class="p1">LIVING ROOMS</p>
                            <p class="p1">BEDROOM</p>
                            <p class="p1">DINING ROOM</p>
                            <p class="p1">BATH ROOM</p>
                        </div>

                        <div class="col-2 footer-section">
                            <d5 class="footer-title">SUPPORT</d5>
                            <p class="p1">FAQS</p>
                            <p class="p1">CONTACT</p>
                            <p class="p1">REFUND POLICY</p>
                            <p class="p1">WARRANTY POLICY</p>
                        </div>
                    </div>
                    {/* <!-- Row 2 --> */}
                    <div class="row g-4">
                        {/* <!-- Form --> */}
                        <div class="col-5">

                        </div>
                        <div class="col-1"></div>
                        {/* <!-- Footer sections --> */}
                        <div class="col-2 footer-section">
                            <d5 class="footer-title">SERVICE</d5>
                            <p class="p1">MAINTENANCE</p>
                            <p class="p1">ASSEMBLY</p>
                            <p class="p1">UPHOLSTERY</p>
                            <p class="p1">REPAIRS</p>
                        </div>
                        <div class="col-2 footer-section">
                            <d5 class="footer-title">MEDIA</d5>
                            <p class="p1">ARTICLES</p>
                            <p class="p1">GUIDELINES</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid copyright">
                <div class="container">
                    <div class="d-flex justify-content-between">
                        <p class="p2 copyright">2023 MadeinFit Furnishings Industry Ltd.  | All right reserved</p>
                        <p class="p2 copyright">Privacy Policy | Terms and Conditions</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
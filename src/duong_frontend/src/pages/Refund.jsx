import React, { useState, useEffect } from 'react';
import ProductCard from '../components/card/card';
import '../components/common.css';
import '../components/button/buttons.css';
import '../components/styles/Warranty.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';



const Refund = () => {
    // const navigate = useNavigate();
    // const [userData, setUserData] = useState([]);
    // const [orders, setOrders] = useState([]);


    // const Token = localStorage.getItem("Token")
    // const userId = localStorage.getItem("userId")

    // const handleLogout = () => {
    //     localStorage.removeItem('Token');
    //     localStorage.removeItem('userId');
    //     console.log('Logout successful.');
    //     navigate('/login/')
    // };

    // const fetchUserData = async () => {
    //     try {
    //         const response = await fetch(`http://localhost:5000/api/users/find/${userId}`, {
    //             method: 'GET',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'token': "bearer " + Token
    //             },
    //         });

    //         if (!response.ok) {
    //             throw new Error('Failed to fetch user data');
    //         }

    //         const data = await response.json();
    //         setUserData(data);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    // const fetchOrders = async () => {
    //     try {
    //         const response = await fetch(`http://localhost:5000/api/orders/find/${userId}`, {
    //             method: 'GET',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'token': "bearer " + Token
    //             },
    //         });

    //         if (!response.ok) {
    //             throw new Error('Failed to fetch orders');
    //         }

    //         const ordersData = await response.json();
    //         console.log(ordersData)
    //         setOrders(ordersData);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    // useEffect(() => {
    //     fetchUserData();
    //     fetchOrders();
    // }, []);



    return (
    <div className = "container-fluid d-flex flex-column flex-shrink-0 gap-4" style={{"background": "var(--scheme-background)"}}>
        {/* PAGE TITLE */}
        <div className = "container-xxl justify-content-center text-center">
            <div className = "row g-4">                
                <d3>REFUND POLICY</d3>
            </div>
        </div>

        {/* BREADCRUMB */}
        <ol className="breadcrumb">
            <li className="p"><a href="#">HOME</a></li>
            <li className="label"><a href="#">SUPPORT</a></li>
            <li className="button"> <a href="#">REFUND POLICY</a></li>
        </ol>
        {/* BODY */}
        <div className = "container-xxl d-flex flex-row m-5 px-4">
            {/* SIDEBAR */}
            <div className = "col col-xxl-4 sidebar d-flex flex-column align-items-center">       
                <div className = "align-items-start">
                    <div className = "row g-4 flex-shrink-0">
                        <div className ="d-flex flex-column align-items-start">
                            <h6> CUSTOMER SUPPORT </h6>
                            <p> support@example.com </p>
                            <p> (+33) 021 58 58 64</p>
                        </div>
                    </div>
                    <div className = "row g-4 flex-shrink-0">
                        <div className ="d-flex flex-column align-items-start">
                            <div className = "title2 d-flex flex-column gap-3">
                                <a href="#"> FAQs</a>
                                <a href="#"> Warranty Policy</a>
                                <a href="#"> Terms & Conditions</a>
                                <a href="#"> Order Tracking</a>
                                <a href="#"> Help & Support</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            <div className = "col col-xxl-8 body align-items-center pe-5 me-3"> 
                <div className = "section">                        
                    <p>
                        At Fitment, we are committed to providing our customers with the best possible shopping experience. We understand that occasionally, a product might not meet your expectations or requirements. To ensure your satisfaction, we have outlined our Return and Refund Policy below:
                    </p>
                </div>  
                <div className = "section">
                    <h6>
                        RETURNS
                    </h6>
                    <div className = "title2">
                        Eligibility Criteria
                    </div>    
                    <ul>       
                        <li>
                            <p>
                                Unused and Unaltered: We accept returns of unused and unaltered products within 7 days from the date of delivery.
                            </p> 
                        </li>
                        <li>
                            <p>
                                Original Packaging: Please ensure that the item is returned in its original packaging, with all tags and accessories included.
                            </p>
                        </li>
                    </ul>
                    
                    <div className = "title2">
                        Non-Returnable Items
                    </div>
                    <p>
                        Certain items are not eligible for return due to hygiene reasons, perishable nature, or specific product categories. These are:
                    </p>
                    <ol>
                        <li>
                            <p>
                                Custom or Made-to-Order Furniture: Products that are customized or specially made per customer specifications are non-returnable unless there's a manufacturing defect.
                            </p>
                        </li>
                        <li>
                            <p>
                                Assembled or Altered Furniture: Items that have been assembled, modified, or altered in any way from their original state may not be eligible for return.
                            </p>
                        </li>
                        <li>
                            <p>
                                Clearance or Final Sale Items: Products marked as clearance or final sale may not be returnable unless there's a manufacturing defect or damage.
                            </p>
                        </li>
                        <li>
                            <p>
                                Used or Damaged Furniture: Any furniture showing signs of use, damage caused by the customer, or lack of proper care and maintenance after delivery may not be accepted for return.
                            </p>
                        </li>
                    </ol>
                    <h6>
                        REFUNDS
                    </h6>
                    <div className = "title2">
                        Refund Process
                    </div>
                    <ul>
                        <li>
                            <p>
                                Initiating a Refund: Upon receipt and inspection of your return, we will process the refund to your original payment method within [number of days] days.
                            </p>
                        </li>
                        <li>
                            <p>
                                Refund Amount: Refunds will be issued for the cost of the product(s) returned, excluding shipping fees unless the return is due to an error on our part.
                            </p>
                        </li>
                    </ul>

                </div>
                <div className="section">
                    <h6> HOW TO INITIATE A RETURN </h6>
                    <div className = "title2">
                        Step-by-step Return Process
                    </div>
                    <p>
                        We understand that sometimes products may need to be returned. To initiate a return, please follow these simple steps:
                    </p>
                    <ol>
                        <li>
                            <p>
                                Contact Our Customer Service: Reach out to our Customer Service team via [Customer Service Email/Phone Number] within [number of days] days from the delivery date. Please provide your order number and details of the item(s) you wish to return.
                            </p>
                        </li>
                        <li>
                            <p>
                                Receive Return Authorization: Upon contacting us, our team will guide you through the return process and provide you with a Return Authorization (RA) number. This number is essential for processing your return request.
                            </p>
                        </li>
                        <li>
                            <p>
                                Prepare the Item for Return: Pack the item securely in its original packaging, ensuring all tags, accessories, and documents are included. Please make sure the product is in its original condition, unused, and undamaged.
                            </p>
                        </li>
                        <li>
                            <p>
                                Ship the Item: Ship the return package back to us using a reputable courier service of your choice. Remember to clearly label the package with the provided RA number.
                            </p>
                        </li>
                        <li>
                            <p>
                                Notify Us About the Return: Once the item is shipped, please inform our Customer Service team about the return shipment and provide the tracking details, if available.
                            </p>
                        </li>
                    </ol>
                </div>
                
            </div>
        </div>
    </div>
  );
}

export default Refund;
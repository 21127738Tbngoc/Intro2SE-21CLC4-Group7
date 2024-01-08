import React, { useState, useEffect } from 'react';
import ProductCard from '../components/card/card';
import '../components/common.css';
import '../components/button/buttons.css';
import '../components/styles/Warranty.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';



const Warranty = () => {
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
                <d3>WARRANTY POLICY</d3>
            </div>
        </div>

        {/* BREADCRUMB */}
        <ol className="breadcrumb">
            <li className="p"><a href="#">HOME</a></li>
            <li className="label"><a href="#">SUPPORT</a></li>
            <li className="button"> <a href="#">WARRANTY POLICY</a></li>
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
                        At Fitment, we stand behind the quality of our products and aim for our customers' complete satisfaction. This Warranty Policy outlines the terms and conditions regarding warranty coverage for the products purchased through our website.
                    </p>
                </div>  
                <div className = "section">
                    <h6>
                        WARRANTY COVERAGE
                    </h6>
                    <div className = "title2">
                        Duration of Warranty
                    </div>    
                    <ul>       
                        <li>
                            <p>
                                Our products are covered by a limited warranty for a period of [X months/years] from the date of purchase. This warranty covers manufacturing defects and faults under normal use conditions
                            </p> 
                        </li>
                    </ul>
                    
                    <div className = "title2">
                        What is covered
                    </div>
                    <ul>
                        <li>
                            <p>
                                Manufacturing Defects: Our warranty covers defects in materials and workmanship, including but not limited to Structural deficiencies, Material flaws, Finishing or Coating problems.
                            </p>
                        </li>
                        <li>
                            <p>
                                Functional Issues: Products should function as intended under normal use, and our warranty covers any functional issues arising from defects.
                            </p>
                        </li>
                    </ul>
                    <div className = "title2">
                        What is not covered
                    </div>
                    <ul>
                        <li>
                            <p>
                                Exclusions: The warranty does not cover damages resulting from misuse, mishandling, accidents, modifications, neglect, or unauthorized repairs.
                            </p>
                        </li>
                        <li>
                            <p>
                                Normal Wear and Tear: Natural wear and tear, cosmetic damages, or damages due to improper maintenance are not covered under this warranty.
                            </p>
                        </li>
                    </ul>

                </div>
                <div className="section">
                    <h6> HOW TO CLAIM WARRANTY </h6>
                    <div className = "title2">
                        Step-by-step Warranty Submission Process
                    </div>
                    <ol>
                        <li>
                            <div>
                                <p>Contact Us: Navigate to the Contact page or reach out to our Customer Service team at    
                                <a href="#" className="button2">support@example.com</a> 
                                with your proof of purchase and a detailed description of the issue.</p>

                            </div>
                        </li>
                        <li>
                            <p>
                                Evaluation and Approval: Our team will evaluate the claim and, if applicable, provide instructions on how to proceed with the warranty claim process.
                            </p>
                        </li>
                        <li>
                            <p>
                                Resolution: If the product is found to be covered under warranty, we will repair or replace the item at our discretion, at no cost to you.
                            </p>
                        </li>
                    </ol>
                </div>
                <div className="section">
                    <h6>
                        EXCLUSIONS & DISCLAIMER
                    </h6>
                    <ul>
                        <li>
                            <p>
                                Modification of Policy: Fitment reserves the right to modify or update this Warranty Policy at any time without prior notice.
                            </p>
                        </li>
                        <li>
                            <p>
                                Limitation of Liability: Our liability is limited to the repair or replacement of the product as stated under the terms of this warranty.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    </div>

  );
}

export default Warranty;
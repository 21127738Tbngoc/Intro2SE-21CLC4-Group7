import React, { useState, useEffect } from 'react';
import ProductCard from '../components/card/card';
import '../components/common.css';
import '../components/button/buttons.css';
import '../components/styles/OrderHistory.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import '/icons/fontawesome/css/all.min.css'; 
import { toast } from 'react-toastify';


const OrderHistory = () =>{
    // const [ordersData, setOrdersData] = useState([]);
    // const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
        // fetchData();
    }, []);

    // const fetchData = async () => {
    //     try {
    //         const response = await fetch('http://localhost:5000/api/orders/');

    //         if (!response.ok) {
    //             throw new Error('Failed to fetch data');
    //         }
            
    //         const data = await response.json();
    //         setOrdersData(data);
    //         setLoading(false);
    //     } catch (error) {
    //         toast.error('Error fetching data');
    //         setLoading(false);
    //     }
    // };

    // const createComponents = (data) => {
    //     const components = [];
    //     for (let i = 0; i < data.length - 4; i += 4) {
    //         components.push(
    //             <div className="row g-4">
    //                  <td> </td>
    //             </div>
    //         );
    //     }
    //     return components;
    // };

    return (
        <div className = "container-fluid d-flex flex-row flex-shrink-0">
            {/* USER SECTION */}
            <div className = "col col-xxl-4 align-items-center">
                <div className = "row g-4 d-flex justify-content-center flex-column gap-4">
                    <div className="d-flex flex-column gap-3">
                        <img src="/imgs/avatars/avt-1.svg" width="300px" className="useravt" />
                        <h4 className="text-center m-0">Emily Rose Johnson</h4>
                    </div>
                    <h5 className ="m-0"> Profile</h5>    
                    <div className ="d-flex flex-column gap-3 m-0">
                        <a href="#" className ="title1">My profile</a>
                        <a href="#" className ="title1">Order History</a>
                        <a href="#" className ="title1">Track Order</a>
                    </div>
                    <button className ="btn prim-btn m-0">SIGN OUT</button>
                </div>
            </div>

            {/* ORDER HISTORY SECTION */}
            <div className="col col-xxl-8 d-flex flex-column gap-4 orderhistory">
                <div>
                    <h2>
                    Order History
                    </h2>
                    <p1>
                    The record of your past orders are displayed in the table below.
                    </p1>
                </div>
                <div className="d-flex flex-row justify-content-around gap-5">
                    <input type="text" id="orderid" name="orderid" placeholder="Search by Order ID" />
                    <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="orderdate" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Order Date
                    </button>
                    <div className="dropdown-menu" aria-labelledby="orderdate">
                        <a className="dropdown-item" href="#">Option 1</a>
                        <a className="dropdown-item" href="#">Option 2</a>
                        <a className="dropdown-item" href="#">Option 3</a>
                    </div>
                    </div>
                    <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="status" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Status
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="status">
                        <li><a className="dropdown-item" href="#">Option 1</a></li>
                        <li><a className="dropdown-item" href="#">Option 2</a></li>
                        <li><a className="dropdown-item" href="#">Option 3</a></li>
                    </ul>
                    </div>
                </div>
                <div>
                    <table className="table borderless">
                    <thead>
                        <tr>
                            <th scope="col" className="p3" style = {{background: "var(--scheme-background)"}}>ORDER #</th>
                            <th scope="col" className="p3">ORDER DATE</th>
                            <th scope="col" className="p3">STATUS</th>
                            <th scope="col" className="p3">REVIEWS</th>
                            <th scope="col" className="p3">TRACK ORDER</th>
                        </tr>
                    </thead>
                    <tbody className="title2">
                        <tr>
                        <td>#ETD1001</td>
                        <td>18 MAY, 2023</td>
                        <td> <div className="tag tag-prepairing">PREPAIRING TO SHIP</div></td>
                        <td> <a href="#" className="rate-off">RATE PRODUCT <span className="fa fa-arrow-right" /></a></td>
                        <td><a href="#" className="fa fa-arrow-up-right-from-square" /></td>
                        </tr>
                        <tr>
                        <td>#ETD1001</td>
                        <td>18 MAY, 2023</td>
                        <td> <div className="tag tag-transit">IN TRANSIT</div></td>                            
                        <td><a href="#" className="rate-off">RATE PRODUCT <span className="fa fa-arrow-right" /></a></td>
                        <td><a href="#" className="fa fa-arrow-up-right-from-square" /></td>
                        </tr>
                        <tr>
                        <td>#ETD1001</td>
                        <td>18 MAY, 2023</td>
                        <td> <div className="tag tag-delivered">DELIVERED</div></td>
                        <td><a href="#" className="rate-on">RATE PRODUCT <span className="fa fa-arrow-right" /></a></td>
                        <td><a href="#" className="fa fa-arrow-up-right-from-square" /></td>
                        </tr>
                        <tr>
                        <td>#ETD1001</td>
                        <td>18 MAY, 2023</td>
                        <td> <div className="tag tag-canceled">CANCELED</div></td>
                        <td><a href="#" className="rate-off">RATE PRODUCT <span className="fa fa-arrow-right" /></a></td>
                        <td><a href="#" className="fa fa-arrow-up-right-from-square" /></td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default OrderHistory
import React, { useState, useEffect } from 'react';
import ProductCard from '../components/card/card';
import '../components/common.css';
import '../components/button/buttons.css';
import '../components/styles/OrderHistory.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';



const OrderHistory = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState([]);
    const [orders, setOrders] = useState([]);


    const Token = localStorage.getItem("Token")
    const userId = localStorage.getItem("userId")

    const handleLogout = () => {
        localStorage.removeItem('Token');
        localStorage.removeItem('userId');
        console.log('Logout successful.');
        navigate('/login/')
    };

    const fetchUserData = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/users/find/${userId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'token': "bearer " + Token
                },
            });

            if (!response.ok) {
                throw new Error('Failed to fetch user data');
            }

            const data = await response.json();
            setUserData(data);
        } catch (error) {
            console.error(error);
        }
    };

    const fetchOrders = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/orders/find/${userId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'token': "bearer " + Token
                },
            });

            if (!response.ok) {
                throw new Error('Failed to fetch orders');
            }

            const ordersData = await response.json();
            console.log(ordersData)
            setOrders(ordersData);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchUserData();
        fetchOrders();
    }, []);



    return (
        <div className="container-fluid d-flex flex-row flex-shrink-0">
            {/* USER SECTION */}
            <div className="col col-xxl-4 align-items-center">
                <div className="row g-4 d-flex justify-content-center flex-column gap-4">
                    <div className="d-flex flex-column gap-3">
                        <img src={userData.avatar} width="300px" className="useravt" />
                        <h4 className="text-center m-0">{userData.username}</h4>
                    </div>
                    <h5 className="m-0"> Profile</h5>
                    <div className="d-flex flex-column gap-3 m-0">
                        <a href="#" className="title1">My profile</a>
                        <a href="#" className="title1">Order History</a>
                        <a href="#" className="title1">Track Order</a>
                    </div>
                    <button className="btn prim-btn m-0" onClick={handleLogout}>SIGN OUT </button>
                </div>
            </div>

{/* ORDER HISTORY SECTION */}
<div className="col col-xxl-8 d-flex flex-column gap-4 orderhistory">
        <div>
          <h2>Order History</h2>
          <p1>The record of your past orders is displayed in the table below.</p1>
        </div>

        <div>
          <table className="table borderless">
            <thead>
              <tr>
                <th scope="col" className="p3" style={{ background: "var(--scheme-background)" }}>ORDER #</th>
                <th scope="col" className="p3">ORDER DATE</th>
                <th scope="col" className="p3">STATUS</th>
                <th scope="col" className="p3">REVIEWS</th>
                <th scope="col" className="p3">TRACK ORDER</th>
              </tr>
            </thead>
            <tbody className="title2">
              {orders.map((order) => (
                <tr key={order.orderNumber}>
                  <td>{order._id}</td>
                  <td>{order.createdAt}</td>
                  <td>
                    <div className={`tag tag-${order.status.toLowerCase()}`}>{order.status}</div>
                  </td>
                  <td><a href="#" className={`rate-${order.reviewed ? 'on' : 'off'}`}>RATE PRODUCT <span className="fa fa-arrow-right" /></a></td>
                  <td><a href="#" className="fa fa-arrow-up-right-from-square" /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default OrderHistory;
import React, { useState, useEffect, } from 'react';
import { toast } from 'react-toastify';
import { Helmet } from '../components/helmet/Helmet';
import { Container, Row, Col, FormGroup } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import ProductCard from "../components/card/card";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../components/button/buttons.css';
import '../components/common.css';
import '../components/styles/productDetail.css';

const productDetail = () => {
    return (
        <div>
            {/* Product detail */}
            <div className="container-fluid">
                <div className="container">
                    
                </div>
            </div>

        </div>
    );
}

export default productDetail
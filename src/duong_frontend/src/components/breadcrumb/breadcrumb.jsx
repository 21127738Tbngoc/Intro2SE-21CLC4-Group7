import React from 'react';

import '../button/buttons.css';
import '../common.css';
import "../styles/breadcrumb.css";
import '../Utils/searchbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Breadcrumb = () => {
    return (
        <div className="container-fluid">
            <div className="container">
                <nav aria-label="breadcrumb" className="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item p2"><a href="/">HOME</a></li>
                        <li className="breadcrumb-item p2"><a href="/">CART</a></li>
                        <li className="breadcrumb-item active button2" aria-current="page">ACTIVE</li>
                    </ol>
                </nav>
            </div>
        </div>
        
    );
};

export default Breadcrumb;
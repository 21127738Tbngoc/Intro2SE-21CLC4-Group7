import React, { useState, useEffect, } from 'react';
import { toast } from 'react-toastify';
import { Helmet } from '../components/helmet/Helmet';
import { Container, Row, Col, FormGroup } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import ProductCard from "../components/card/card"

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../components/button/buttons.css';
import '../components/common.css';
import '../components/styles/Home.css';

const Home = () => {

    const [productsData, setProductsData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/products/');

            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            
            const data = await response.json();
            setProductsData(data);
            setLoading(false);
        } catch (error) {
            toast.error('Error fetching data');
            setLoading(false);
        }
    };

    const createComponents = (data) => {
        const components = [];
        for (let i = 0; i < data.length - 4; i += 4) {
            components.push(
                <div className="row g-4">
                    <ProductCard key={i} id={data[i]._id} name={data[i].name} thumbnail={data[i].thumbnail} img={data[i].img} price={data[i].price} categories={data[i].categories} />
                    <ProductCard key={i + 1} id={data[i + 1]._id} name={data[i + 1].name} thumbnail={data[i + 1].thumbnail} img={data[i].img} price={data[i + 1].price} categories={data[i + 1].categories} />
                    <ProductCard key={i + 2} id={data[i + 2]._id} name={data[i + 2].name} thumbnail={data[i + 2].thumbnail} img={data[i].img} price={data[i + 2].price} categories={data[i + 2].categories} />
                    <ProductCard key={i + 3} id={data[i + 3]._id} name={data[i + 3].name} thumbnail={data[i + 3].thumbnail} img={data[i].img} price={data[i + 3].price} categories={data[i + 3].categories} />
                </div>
            );
        }
        return components;
    };

    return (
        <div>
            {/* Hero banner */}
            <div className="container-fluid hero-banner">
                <video src="/imgs/home/hero-banner.mp4" className="hero-banner" autoPlay muted loop></video>
                <div className="container">
                <d3 className="hero-display">WHERE WE TURN YOUR HOME INTO A MASTERPIECE</d3>
                <button className="sec-btn btn-md button2 hero-btn">ABOUT US</button>
                </div>
            </div>
            {/* Shop all */}
            <div className="container-fluid shop-bg">
                <d3 className="shop-display">CREATING PERFECT LINES AND IMPOSING PRESENCE</d3>
                <p className="p2 shop-text">Developed the concept of exclusivity, a Sol’ace features timeless furniture, with natural fabrics, curved lines, plenty of mirrors and classic design, which can be incorporated into any decor project. The pieces enchant for their sobriety, to last for generations, faithful to the shapes of each period, with a touch of the present.</p>
                <button className="outline-btn btn-md button2 shop-btn">SHOP ALL</button>
            </div>
            {/* Product Category */}
            <div className="container-fluid">
                <div className="row">
                    <h5 className="category-display">PRODUCT CATEGORY</h5>
                </div>
                <div className="d-flex">
                    {/* Living Room */}
                    <div className="col category-section" id="living-room">
                        <h2>Living Room</h2>
                        <p className="p2 category-text slide-border">SOFA & BENCH</p>
                        <p className="p2 category-text slide-border">ACCENT CHAIR</p>
                        <p className="p2 category-text slide-border">COFFEE & ACCENT TABLE</p>
                        <p className="p2 category-text slide-border">TV STAND & MEDIA CONSOLE</p>
                        <p className="p2 category-text slide-border">LIGHTING</p>
                        <Link to="/livingroom" className="category-link">
                            <p className="category-num">1</p>
                            <img src="/imgs/home/livingroom.jpg" className="category-img" alt="Living Room" />
                        </Link>
                    </div>
                    {/* Bed Room */}
                    <div className="col category-section" id="bed-room">
                        <h2>Bed Room</h2>
                        <p className="p2 category-text slide-border">BED & HEADBOARD</p>
                        <p className="p2 category-text slide-border">NIGHSTAND & DRESSER</p>
                        <p className="p2 category-text slide-border">CHILDREN BED</p>
                        <p className="p2 category-text slide-border">WALL DECORATIONS</p>
                        <p className="p2 category-text slide-border">TABLE LIGHTING</p>
                        <Link to="/bedroom" className="category-link">
                            <p className="category-num">2</p>
                            <img src="/imgs/home/bedroom.jpg" className="category-img" />
                        </Link>
                    </div>
                    {/* Dining Room */}
                    <div className="col category-section" id="dining-room">
                        <h2>Dining Room</h2>
                        <p className="p2 category-text slide-border">DINING TABLE</p>
                        <p className="p2 category-text slide-border">DINING CHAIR</p>
                        <p className="p2 category-text slide-border">BAR CART & CABINET</p>
                        <p className="p2 category-text slide-border">LIGHTING</p>
                        <Link to="/diningroom" className="category-link">
                            <p className="category-num">3</p>
                            <img src="/imgs/home/diningroom.jpg" className="category-img" />
                        </Link>
                    </div>
                    {/* Bath Room */}
                    <div className="col category-section" id="bath-room">
                        <h2>Bath Room</h2>
                        <p className="p2 category-text slide-border">BATH VANITIES</p>
                        <p className="p2 category-text slide-border">BATH HARDWARE</p>
                        <p className="p2 category-text slide-border">LIGHTING</p>
                        <Link to="/bathroom" className="category-link">
                            <p className="category-num" id="bathroom-num">4</p>
                            <img src="/imgs/home/bathroom.jpg" className="category-img" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Featured products */}
            <div className="container-fluid">
                <div className="container">
                    {
                        createComponents(productsData)
                    }
                </div>
            </div>

            {/* Designers */}
            <div className="container-fluid">
                <img src="/imgs/home/designer-bg.jpg" className="designer-bg" alt="designer-bg" />
                <div className="row">
                <h1 className="designer-bg-display">MEET OUR TALENTED DESIGNERS</h1>
                <button className="designer-btn sec-btn btn-nm button1">VIEW DESIGNERS</button> {/* Link to the designers section in About us page */}
                </div>
            </div>

            {/* Articles */}

            {/* Inquiry */}
            
        </div>
    );
}

export default Home
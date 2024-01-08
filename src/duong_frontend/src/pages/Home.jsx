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
                <div className="row g-4 justify-content-center">
                    <d3 className="shop-display">CREATING PERFECT LINES AND IMPOSING PRESENCE</d3>
                </div>
                <div className="row g-4 justify-content-center">
                    <p className="p2 shop-text">Developed the concept of exclusivity, a Sol’ace features timeless furniture, with natural fabrics, curved lines, plenty of mirrors and classic design, which can be incorporated into any decor project. The pieces enchant for their sobriety, to last for generations, faithful to the shapes of each period, with a touch of the present.</p>
                </div>
                <div className="row g-4 justify-content-center">
                    <button className="outline-btn btn-md button2 shop-btn">SHOP ALL</button>
                </div>
            </div>

            {/* Product Category */}
            <div className="container-fluid">
                <div className="row">
                    <h5 className="category-display">PRODUCT CATEGORY</h5>
                </div>
                <div className="d-flex">
                    {/* Living Room */}
                    <div className="col category-section" id="living-room">
                        <h2 style={{ marginBottom: '32px' }} >Living Room</h2>
                        <p className="p2 category-text slide-border">SOFA & BENCH</p>
                        <p className="p2 category-text slide-border">ACCENT CHAIR</p>
                        <p className="p2 category-text slide-border">COFFEE & ACCENT TABLE</p>
                        <p className="p2 category-text slide-border">TV STAND & MEDIA CONSOLE</p>
                        <p className="p2 category-text slide-border">LIGHTING</p>
                        <Link to="/livingroom" className="category-link">
                            <p className="category-num">1</p>
                            <img src="/imgs/home/livingroom.jpg" className="category-img" />
                        </Link>
                    </div>
                    {/* Bed Room */}
                    <div className="col category-section" id="bed-room">
                        <h2 style={{ marginBottom: '32px' }} >Bed Room</h2>
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
                        <h2 style={{ marginBottom: '32px' }}>Dining Room</h2>
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
                        <h2 style={{ marginBottom: '32px' }} >Bath Room</h2>
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
            <div className="container-fluid designer-bg">
                <div className="row justify-content-center text-center">
                    <d1 className="designer-bg-display">MEET OUR TALENTED DESIGNERS</d1>
                    <button className="designer-btn sec-btn btn-nm button1">VIEW DESIGNERS</button> {/* Link to the designers section in About us page */}
                </div>  
            </div>
            <div className="container-fluid designer-section">
                <div className="row">
                    <d5 className="designer-display">OUR DESIGNERS</d5>
                </div>
                <div className="container">
                    <div className="row g-4 mt-3"  style={{ marginBottom: '95px' }}>
                        <div className="col designer-left">
                            <d3 className="designer-name">LUCAS NILSSEN</d3>
                            <p className="designer-role title2">Product Designer</p>
                            <img className="designer-img" src="/imgs/home/designer-0.jpg" />
                        </div>
                        <div className="col designer-right flex-row-reverse">
                            <img className="designer-img" src="/imgs/home/designer-1.jpg" style={{ marginLeft: '250px' }}/>
                            <p className="designer-role title2">Product Designer</p>  
                            <d3 className="designer-name">MILLE HANSEN</d3>
                        </div>
                    </div>
                    <div className="row g-4"  style={{ marginBottom: '95px' }}>
                        <div className="col designer-left">
                            <d3 className="designer-name">HANS J. WEGNER</d3>
                            <p className="designer-role title2">Product Designer</p>
                            <img className="designer-img" src="/imgs/home/designer-2.jpg" />
                        </div>
                        <div className="col designer-right flex-row-reverse">
                            <img className="designer-img" src="/imgs/home/designer-3.jpg"  style={{ marginLeft: '330px' }} />
                            <p className="designer-role title2">Product Designer</p>
                            <d3 className="designer-name">ARNE JACOBSEN</d3>
                        </div>
                    </div>
                    <div className="row g-4"  style={{ marginBottom: '95px' }}>
                        <div className="col designer-left">
                            <d3 className="designer-name">FRANK LLOYED</d3>
                            <p className="designer-role title2">Product Designer</p>
                            <img className="designer-img" src="/imgs/home/designer-4.jpg" />
                        </div>
                        <div className="col designer-right flex-row-reverse">
                            <img className="designer-img" src="/imgs/home/designer-5.jpg" style={{ marginLeft: '280px' }}/>
                            <p className="designer-role title2">Product Designer</p>
                            <d3 className="designer-name">ANNIE STANLEY</d3>
                        </div>
                    </div>
                    <div className="row g-4"  style={{ marginBottom: '95px' }}>
                        <div className="col designer-left">
                            <d3 className="designer-name">OLIVIA RHYE</d3>
                            <p className="designer-role title2">Product Designer</p>
                            <img className="designer-img" src="/imgs/home/designer-6.jpg" />
                        </div>
                        <div className="col designer-right flex-row-reverse">
                            <img className="designer-img" src="/imgs/home/designer-7.jpg" style={{ marginLeft: '240px' }}/>
                            <p className="designer-role title2">Product Designer</p>
                            <d3 className="designer-name">EILEEN GRAY</d3>
                        </div>
                    </div>
                </div>
            </div>

            {/* Articles */}
            <div className="container-fluid mb-2 mt-4">
                <div className="row">
                    <d5 className="articles-display">ENJOY OUR ARTICLES</d5>
                </div>
            </div>

            <div className="container-fluid articles-section align-content-center">
                <div className="container">
                    <div className="row g-4 mb-0">
                        <div className="col">
                            <h5 style={{ textAlign: 'right', marginRight: '16px' }}>LATEST NEWS</h5>
                        </div>
                        <div className="col">
                            <h5 style={{ textAlign: 'right'}}>INSPIRATIONS</h5>
                        </div>
                    </div>
                    <div className="row g-4">
                        <div className="col">
                            <d3 className="article-title mb-5">MANHATTAN PIED-À-TERRE FOR A NEW CHICAGO APARTMENT</d3>
                            <div className="article-brief">
                                <img src="/imgs/home/quotation.png" className="article-quote" />
                                <p className="p1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen</p>
                            </div>
                            <button className="link-nm">CONTINUE READING</button>
                        </div>
                        <div className="col">
                            <img src="/imgs/home/articles-featured.jpg" className="article-featured" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <button className="articles-btn button1">VIEW ALL ARTICLES</button>
                </div>
                <div className="container">
                    <div className="row g-4">
                        <div className="col">
                            <div className="article-card">
                                <img src="/imgs/home/articles-1.jpg" className="article-img" />
                                <p className="subtitle1 article-tag mt-4">TOURISM</p>
                                <h5 className="article-name">Inside a playful, bohemian beach house on Martha’s Vineyard</h5>
                                <p className="p1 article-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen</p>
                                <div className="author align-items-center">
                                    <img src="/imgs/avatars/avt-23.png" className="author-avatar me-2" />
                                    <p className="label3 author-name me-1">Oliver Knight </p>
                                    <p className="article-date"> • July 14, 2023 • 3 min</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="article-card">
                                <img src="/imgs/home/articles-2.jpg" className="article-img" />
                                <p className="subtitle1 article-tag mt-4">TOURISM</p>
                                <h5 className="article-name">Inside a playful, bohemian beach house on Martha’s Vineyard</h5>
                                <p className="p1 article-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen</p>
                                <div className="author align-items-center">
                                    <img src="/imgs/avatars/avt-23.png" className="author-avatar me-2" />
                                    <p className="label3 author-name me-1">Oliver Knight </p>
                                    <p className="article-date"> • July 14, 2023 • 3 min</p>
                                </div>
                            </div>
                        </div>   
                        <div className="col">
                            <div className="article-card">
                                <img src="/imgs/home/articles-3.jpg" className="article-img" />
                                <p className="subtitle1 article-tag mt-4">TOURISM</p>
                                <h5 className="article-name">Inside a playful, bohemian beach house on Martha’s Vineyard</h5>
                                <p className="p1 article-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen</p>
                                <div className="author align-items-center">
                                    <img src="/imgs/avatars/avt-23.png" className="author-avatar me-2" />
                                    <p className="label3 author-name me-1">Oliver Knight </p>
                                    <p className="article-date"> • July 14, 2023 • 3 min</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Inquiry */}
            <div className="container-fluid inquiry-section">
                <div className="container">
                    <div className="row g-4">
                        <div className="col"></div>
                        <div className="col inquiry-content">
                            <h4 className="mb-5">Complete the information and let us get in touch with you!</h4>
                            <form>
                                <div className="form-row">
                                    {/* Full name */}
                                    <div className="col mb-3">
                                        <label for="fullName" className="form-label label1">
                                            Full name
                                        </label>
                                        <div className="input-with-icon">
                                            <input
                                                type="text"
                                                placeholder="Enter your full name"
                                                className="form-control form-nm"
                                                required
                                            />
                                        </div>
                                    </div>
                                    {/* Phone */}
                                    <div className="col mb-3">
                                        <label for="userName" className="form-label label1">
                                            Phone
                                        </label>
                                        <div className="input-with-icon">
                                            <input
                                                type="text"
                                                placeholder="Enter your phone"
                                                className="form-control form-nm"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label for="email" className="form-label label1">Email</label>
                                    <div className="input-with-icon">
                                        <input 
                                            type="email" 
                                            className="form-control form-nm" 
                                            placeholder="Enter your email address here" 
                                            required 
                                        />
                                    </div>
                                </div>
                            </form>
                            <div className="inquiry-btn justify-content-between">
                                <button className="btn-nm prim-btn me-3" id="send-btn">SEND INQUIRY</button>
                                <button className="btn-nm sec-btn" id="contact-btn">CONTACT US</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Home
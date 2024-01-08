import React, { useState, useEffect } from 'react';
import ProductCard from '../components/card/card';
import '../components/common.css';
import '../components/button/buttons.css';
import '../components/styles/Room.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import '/icons/fontawesome/css/all.min.css'; 
import { toast } from 'react-toastify';


const DiningRoom = () =>{
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
        <div className = "container-fluid d-flex flex-column flex-shrink-0 page">
        {/* BREADCRUMB */}
        <ol className="breadcrumb">
            <li><a href="#">HOME</a></li>
            <li className="label"><a href="#">SHOP ALL</a></li>
            <li className="button"> <a href="#">DINING ROOM</a></li>
        </ol>
        <div className="section row g-4">
            <div className ="d-flex flex-row justify-content-around">
                {/* HERO IMAGE */}
                <img src ="/imgs/articles/blog-big-3.jpg" style={{"width": "636px", "height": "500px", "object-fit": "cover"}}/>
                
                {/* PAGE DESCRIPTION */}
                <div className ="col col-xxl-4 d-flex flex-column justify-content-between">
                    <div>
                        <d3>
                            DINING ROOM
                        </d3>
                    </div>
                    <div className ="gap-4">
                        <p>
                            Quia id omnis aliquid suscipit recusandae similique. Vero natus sed animi reiciendis. Ipsum voluptate Est velit et ex labori osam dolor est inventore quo numquam. Labore voluptas nihil molestiae sint delectus sint sequi voluptatem. Quia id omnis aliquid suscipit recusandae similique. Vero natus sed animi reiciendis. Quia id omnis aliquid suscipit recusandae similique. Vero natus sed animi reiciendis. Ipsum voluptate Est velit et ex labori osam dolor est inventore quo.
                        </p>
                        <p>
                            Labore voluptas nihil molestiae sint delectus sint sequi voluptatem. Quia id omnis aliquid suscipit recusandae similique. Vero natus sed animi reiciendis.
                        </p>
                        <div className ="d-flex flex-row gap-4">
                            <div>
                                <p>Client</p>
                                <p>Location</p>
                                <p>Date</p>
                                <p>Share</p>
                            </div>
                            <div>
                                <p>Quode Interactive</p>
                                <p>New York, US</p>
                                <p>March 14, 2023</p>
                                <div className = "d-flex flex-row">
                                    <a href="#" className = "mediaicon fa-brands fa-facebook"></a>
                                    <a href="#" className = "mediaicon fa-brands fa-twitter"></a>
                                    <a href="#" className = "mediaicon fa-brands fa-instagram"></a>
                                    <a href="#" className = "mediaicon fa-brands fa-pinterest"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        {/* DINING TABLES SECTION */}
        <div className ="section row g-4">
            <div className ="d-flex justify-content-center">
                <div className ="d-flex flex-column justify-content-center flex-shrink-0 flex-grow-1">
                    <div className ="title text-center">
                        <div className ="title1">
                            DESK & TABLES
                        </div>
                        <h2>
                            Dining Tables
                        </h2>
                    </div>                    
                    <div className ="row g-4 d-flex flex-row justify-content-center gap-5">                        
                        <div className="card d-flex flex-column p-0">
                            <div className ="cardcontent d-flex flex-column gap-4">
                                <img className="card-img-top" src="/imgs/product/measurement.png"/>
                                <div className="card-body d-flex flex-column justify-content-around p-0">                                
                                    <h6 className="card-title">Native Iron Chair</h6>
                                    <div className="d-flex flex-row justify-content-between">
                                        <p className="card-text p3">Dining Room • CHAIR & STOOL</p>
                                        <p className ="title2"> 4990.0</p>
                                    </div>
                                    <div className="d-flex flex-row justify-content-start gap-3">
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                    </div>
                                </div>
                            </div>                 
                            <div className="d-flex flex-row justify-content-between">
                                <a href="#" className="button2 cardlink" >VIEW ITEM</a>
                                <a href="#" className="button2 cardlink" >ADD TO CART</a>
                            </div>
                        </div>
                        <div className="card d-flex flex-column p-0">
                            <div className ="cardcontent d-flex flex-column gap-4">
                                <img className="card-img-top" src="/imgs/product/measurement.png"/>
                                <div className="card-body d-flex flex-column justify-content-around p-0">                                
                                    <h6 className="card-title">Native Iron Chair</h6>
                                    <div className="d-flex flex-row justify-content-between">
                                        <p className="card-text p3">Dining Room • CHAIR & STOOL</p>
                                        <p className ="title2"> 4990.0</p>
                                    </div>
                                    <div className="d-flex flex-row justify-content-start gap-3">
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                    </div>
                                </div>
                            </div>                 
                            <div className="d-flex flex-row justify-content-between">
                                <a href="#" className="button2 cardlink" >VIEW ITEM</a>
                                <a href="#" className="button2 cardlink" >ADD TO CART</a>
                            </div>
                        </div>
                        <div className="card d-flex flex-column p-0">
                            <div className ="cardcontent d-flex flex-column gap-4">
                                <img className="card-img-top" src="/imgs/product/measurement.png"/>
                                <div className="card-body d-flex flex-column justify-content-around p-0">                                
                                    <h6 className="card-title">Native Iron Chair</h6>
                                    <div className="d-flex flex-row justify-content-between">
                                        <p className="card-text p3">Dining Room • CHAIR & STOOL</p>
                                        <p className ="title2"> 4990.0</p>
                                    </div>
                                    <div className="d-flex flex-row justify-content-start gap-3">
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                    </div>
                                </div>
                            </div>                 
                            <div className="d-flex flex-row justify-content-between">
                                <a href="#" className="button2 cardlink" >VIEW ITEM</a>
                                <a href="#" className="button2 cardlink" >ADD TO CART</a>
                            </div>
                        </div>
                        <div className="card d-flex flex-column p-0">
                            <div className ="cardcontent d-flex flex-column gap-4">
                                <img className="card-img-top" src="/imgs/product/measurement.png"/>
                                <div className="card-body d-flex flex-column justify-content-around p-0">                                
                                    <h6 className="card-title">Native Iron Chair</h6>
                                    <div className="d-flex flex-row justify-content-between">
                                        <p className="card-text p3">Dining Room • CHAIR & STOOL</p>
                                        <p className ="title2"> 4990.0</p>
                                    </div>
                                    <div className="d-flex flex-row justify-content-start gap-3">
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                    </div>
                                </div>
                            </div>                 
                            <div className="d-flex flex-row justify-content-between">
                                <a href="#" className="button2 cardlink" >VIEW ITEM</a>
                                <a href="#" className="button2 cardlink" >ADD TO CART</a>
                            </div>
                        </div>
                    </div>
                    <div className ="row g-4 d-flex flex-row justify-content-center gap-5">                        
                        <div className="card d-flex flex-column p-0">
                            <div className ="cardcontent d-flex flex-column gap-4">
                                <img className="card-img-top" src="/imgs/product/measurement.png"/>
                                <div className="card-body d-flex flex-column justify-content-around p-0">                                
                                    <h6 className="card-title">Native Iron Chair</h6>
                                    <div className="d-flex flex-row justify-content-between">
                                        <p className="card-text p3">Dining Room • CHAIR & STOOL</p>
                                        <p className ="title2"> 4990.0</p>
                                    </div>
                                    <div className="d-flex flex-row justify-content-start gap-3">
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                    </div>
                                </div>
                            </div>                 
                            <div className="d-flex flex-row justify-content-between">
                                <a href="#" className="button2 cardlink" >VIEW ITEM</a>
                                <a href="#" className="button2 cardlink" >ADD TO CART</a>
                            </div>
                        </div>
                        <div className="card d-flex flex-column p-0">
                            <div className ="cardcontent d-flex flex-column gap-4">
                                <img className="card-img-top" src="/imgs/product/measurement.png"/>
                                <div className="card-body d-flex flex-column justify-content-around p-0">                                
                                    <h6 className="card-title">Native Iron Chair</h6>
                                    <div className="d-flex flex-row justify-content-between">
                                        <p className="card-text p3">Dining Room • CHAIR & STOOL</p>
                                        <p className ="title2"> 4990.0</p>
                                    </div>
                                    <div className="d-flex flex-row justify-content-start gap-3">
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                    </div>
                                </div>
                            </div>                 
                            <div className="d-flex flex-row justify-content-between">
                                <a href="#" className="button2 cardlink" >VIEW ITEM</a>
                                <a href="#" className="button2 cardlink" >ADD TO CART</a>
                            </div>
                        </div>
                        <div className="card d-flex flex-column p-0">
                            <div className ="cardcontent d-flex flex-column gap-4">
                                <img className="card-img-top" src="/imgs/product/measurement.png"/>
                                <div className="card-body d-flex flex-column justify-content-around p-0">                                
                                    <h6 className="card-title">Native Iron Chair</h6>
                                    <div className="d-flex flex-row justify-content-between">
                                        <p className="card-text p3">Dining Room • CHAIR & STOOL</p>
                                        <p className ="title2"> 4990.0</p>
                                    </div>
                                    <div className="d-flex flex-row justify-content-start gap-3">
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                    </div>
                                </div>
                            </div>                 
                            <div className="d-flex flex-row justify-content-between">
                                <a href="#" className="button2 cardlink" >VIEW ITEM</a>
                                <a href="#" className="button2 cardlink" >ADD TO CART</a>
                            </div>
                        </div>
                        <div className="card d-flex flex-column p-0">
                            <div className ="cardcontent d-flex flex-column gap-4">
                                <img className="card-img-top" src="/imgs/product/measurement.png"/>
                                <div className="card-body d-flex flex-column justify-content-around p-0">                                
                                    <h6 className="card-title">Native Iron Chair</h6>
                                    <div className="d-flex flex-row justify-content-between">
                                        <p className="card-text p3">Dining Room • CHAIR & STOOL</p>
                                        <p className ="title2"> 4990.0</p>
                                    </div>
                                    <div className="d-flex flex-row justify-content-start gap-3">
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                    </div>
                                </div>
                            </div>                 
                            <div className="d-flex flex-row justify-content-between">
                                <a href="#" className="button2 cardlink" >VIEW ITEM</a>
                                <a href="#" className="button2 cardlink" >ADD TO CART</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>            
        </div>
        {/* DINING CHAIRS SECTION */}
        <div className ="section row g-4">
            <div className ="d-flex justify-content-center">
                <div className ="d-flex flex-column justify-content-center">
                    <div className ="title text-center">
                        <div className ="title1">
                            CHAIR & STOOL
                        </div>
                        <h2>
                            Dining Chairs
                        </h2>
                    </div>
                    <div className ="row g-4 d-flex flex-row justify-content-center gap-5">                        
                        <div className="card d-flex flex-column p-0">
                            <div className ="cardcontent d-flex flex-column gap-4">
                                <img className="card-img-top" src="/imgs/product/measurement.png"/>
                                <div className="card-body d-flex flex-column justify-content-around p-0">                                
                                    <h6 className="card-title">Native Iron Chair</h6>
                                    <div className="d-flex flex-row justify-content-between">
                                        <p className="card-text p3">Dining Room • CHAIR & STOOL</p>
                                        <p className ="title2"> 4990.0</p>
                                    </div>
                                    <div className="d-flex flex-row justify-content-start gap-3">
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                    </div>
                                </div>
                            </div>                 
                            <div className="d-flex flex-row justify-content-between">
                                <a href="#" className="button2 cardlink" >VIEW ITEM</a>
                                <a href="#" className="button2 cardlink" >ADD TO CART</a>
                            </div>
                        </div>
                        <div className="card d-flex flex-column p-0">
                            <div className ="cardcontent d-flex flex-column gap-4">
                                <img className="card-img-top" src="/imgs/product/measurement.png"/>
                                <div className="card-body d-flex flex-column justify-content-around p-0">                                
                                    <h6 className="card-title">Native Iron Chair</h6>
                                    <div className="d-flex flex-row justify-content-between">
                                        <p className="card-text p3">Dining Room • CHAIR & STOOL</p>
                                        <p className ="title2"> 4990.0</p>
                                    </div>
                                    <div className="d-flex flex-row justify-content-start gap-3">
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                    </div>
                                </div>
                            </div>                 
                            <div className="d-flex flex-row justify-content-between">
                                <a href="#" className="button2 cardlink" >VIEW ITEM</a>
                                <a href="#" className="button2 cardlink" >ADD TO CART</a>
                            </div>
                        </div>
                        <div className="card d-flex flex-column p-0">
                            <div className ="cardcontent d-flex flex-column gap-4">
                                <img className="card-img-top" src="/imgs/product/measurement.png"/>
                                <div className="card-body d-flex flex-column justify-content-around p-0">                                
                                    <h6 className="card-title">Native Iron Chair</h6>
                                    <div className="d-flex flex-row justify-content-between">
                                        <p className="card-text p3">Dining Room • CHAIR & STOOL</p>
                                        <p className ="title2"> 4990.0</p>
                                    </div>
                                    <div className="d-flex flex-row justify-content-start gap-3">
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                    </div>
                                </div>
                            </div>                 
                            <div className="d-flex flex-row justify-content-between">
                                <a href="#" className="button2 cardlink" >VIEW ITEM</a>
                                <a href="#" className="button2 cardlink" >ADD TO CART</a>
                            </div>
                        </div>
                        <div className="card d-flex flex-column p-0">
                            <div className ="cardcontent d-flex flex-column gap-4">
                                <img className="card-img-top" src="/imgs/product/measurement.png"/>
                                <div className="card-body d-flex flex-column justify-content-around p-0">                                
                                    <h6 className="card-title">Native Iron Chair</h6>
                                    <div className="d-flex flex-row justify-content-between">
                                        <p className="card-text p3">Dining Room • CHAIR & STOOL</p>
                                        <p className ="title2"> 4990.0</p>
                                    </div>
                                    <div className="d-flex flex-row justify-content-start gap-3">
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                    </div>
                                </div>
                            </div>                 
                            <div className="d-flex flex-row justify-content-between">
                                <a href="#" className="button2 cardlink" >VIEW ITEM</a>
                                <a href="#" className="button2 cardlink" >ADD TO CART</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
        {/* BAR CARTS & CARBINETS SECTION */}
        <div className ="section row g-4">
            <div className ="d-flex justify-content-center">
                <div className ="d-flex flex-column justify-content-center">
                    <div className ="title text-center">
                        <div className ="title1">
                            STORAGE & SHELF
                        </div>
                        <h2>
                            Bar Carts & Cabinets
                        </h2>
                    </div>
                    <div className ="row g-4 d-flex flex-row justify-content-center gap-5">                        
                        <div className="card d-flex flex-column p-0">
                            <div className ="cardcontent d-flex flex-column gap-4">
                                <img className="card-img-top" src="/imgs/product/measurement.png"/>
                                <div className="card-body d-flex flex-column justify-content-around p-0">                                
                                    <h6 className="card-title">Native Iron Chair</h6>
                                    <div className="d-flex flex-row justify-content-between">
                                        <p className="card-text p3">Dining Room • CHAIR & STOOL</p>
                                        <p className ="title2"> 4990.0</p>
                                    </div>
                                    <div className="d-flex flex-row justify-content-start gap-3">
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                    </div>
                                </div>
                            </div>                 
                            <div className="d-flex flex-row justify-content-between">
                                <a href="#" className="button2 cardlink" >VIEW ITEM</a>
                                <a href="#" className="button2 cardlink" >ADD TO CART</a>
                            </div>
                        </div>
                        <div className="card d-flex flex-column p-0">
                            <div className ="cardcontent d-flex flex-column gap-4">
                                <img className="card-img-top" src="/imgs/product/measurement.png"/>
                                <div className="card-body d-flex flex-column justify-content-around p-0">                                
                                    <h6 className="card-title">Native Iron Chair</h6>
                                    <div className="d-flex flex-row justify-content-between">
                                        <p className="card-text p3">Dining Room • CHAIR & STOOL</p>
                                        <p className ="title2"> 4990.0</p>
                                    </div>
                                    <div className="d-flex flex-row justify-content-start gap-3">
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                    </div>
                                </div>
                            </div>                 
                            <div className="d-flex flex-row justify-content-between">
                                <a href="#" className="button2 cardlink" >VIEW ITEM</a>
                                <a href="#" className="button2 cardlink" >ADD TO CART</a>
                            </div>
                        </div>
                        <div className="card d-flex flex-column p-0">
                            <div className ="cardcontent d-flex flex-column gap-4">
                                <img className="card-img-top" src="/imgs/product/measurement.png"/>
                                <div className="card-body d-flex flex-column justify-content-around p-0">                                
                                    <h6 className="card-title">Native Iron Chair</h6>
                                    <div className="d-flex flex-row justify-content-between">
                                        <p className="card-text p3">Dining Room • CHAIR & STOOL</p>
                                        <p className ="title2"> 4990.0</p>
                                    </div>
                                    <div className="d-flex flex-row justify-content-start gap-3">
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                    </div>
                                </div>
                            </div>                 
                            <div className="d-flex flex-row justify-content-between">
                                <a href="#" className="button2 cardlink" >VIEW ITEM</a>
                                <a href="#" className="button2 cardlink" >ADD TO CART</a>
                            </div>
                        </div>
                        <div className="card d-flex flex-column p-0">
                            <div className ="cardcontent d-flex flex-column gap-4">
                                <img className="card-img-top" src="/imgs/product/measurement.png"/>
                                <div className="card-body d-flex flex-column justify-content-around p-0">                                
                                    <h6 className="card-title">Native Iron Chair</h6>
                                    <div className="d-flex flex-row justify-content-between">
                                        <p className="card-text p3">Dining Room • CHAIR & STOOL</p>
                                        <p className ="title2"> 4990.0</p>
                                    </div>
                                    <div className="d-flex flex-row justify-content-start gap-3">
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                    </div>
                                </div>
                            </div>                 
                            <div className="d-flex flex-row justify-content-between">
                                <a href="#" className="button2 cardlink" >VIEW ITEM</a>
                                <a href="#" className="button2 cardlink" >ADD TO CART</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
        {/* KITCHEN ISLANDS SECTION */}
        <div className ="section row g-4">
            <div className ="d-flex justify-content-center">
                <div className ="d-flex flex-column justify-content-center">
                    <div className ="title text-center">
                        <div className ="title1">
                            STORAGE & SHELF
                        </div>
                        <h2>
                            Kitchen Islands
                        </h2>
                    </div>
                    <div className ="row g-4 d-flex flex-row justify-content-center gap-5">                        
                        <div className="card d-flex flex-column p-0">
                            <div className ="cardcontent d-flex flex-column gap-4">
                                <img className="card-img-top" src="/imgs/product/measurement.png"/>
                                <div className="card-body d-flex flex-column justify-content-around p-0">                                
                                    <h6 className="card-title">Native Iron Chair</h6>
                                    <div className="d-flex flex-row justify-content-between">
                                        <p className="card-text p3">Dining Room • CHAIR & STOOL</p>
                                        <p className ="title2"> 4990.0</p>
                                    </div>
                                    <div className="d-flex flex-row justify-content-start gap-3">
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                    </div>
                                </div>
                            </div>                 
                            <div className="d-flex flex-row justify-content-between">
                                <a href="#" className="button2 cardlink" >VIEW ITEM</a>
                                <a href="#" className="button2 cardlink" >ADD TO CART</a>
                            </div>
                        </div>
                        <div className="card d-flex flex-column p-0">
                            <div className ="cardcontent d-flex flex-column gap-4">
                                <img className="card-img-top" src="/imgs/product/measurement.png"/>
                                <div className="card-body d-flex flex-column justify-content-around p-0">                                
                                    <h6 className="card-title">Native Iron Chair</h6>
                                    <div className="d-flex flex-row justify-content-between">
                                        <p className="card-text p3">Dining Room • CHAIR & STOOL</p>
                                        <p className ="title2"> 4990.0</p>
                                    </div>
                                    <div className="d-flex flex-row justify-content-start gap-3">
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                    </div>
                                </div>
                            </div>                 
                            <div className="d-flex flex-row justify-content-between">
                                <a href="#" className="button2 cardlink" >VIEW ITEM</a>
                                <a href="#" className="button2 cardlink" >ADD TO CART</a>
                            </div>
                        </div>
                        <div className="card d-flex flex-column p-0">
                            <div className ="cardcontent d-flex flex-column gap-4">
                                <img className="card-img-top" src="/imgs/product/measurement.png"/>
                                <div className="card-body d-flex flex-column justify-content-around p-0">                                
                                    <h6 className="card-title">Native Iron Chair</h6>
                                    <div className="d-flex flex-row justify-content-between">
                                        <p className="card-text p3">Dining Room • CHAIR & STOOL</p>
                                        <p className ="title2"> 4990.0</p>
                                    </div>
                                    <div className="d-flex flex-row justify-content-start gap-3">
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                    </div>
                                </div>
                            </div>                 
                            <div className="d-flex flex-row justify-content-between">
                                <a href="#" className="button2 cardlink" >VIEW ITEM</a>
                                <a href="#" className="button2 cardlink" >ADD TO CART</a>
                            </div>
                        </div>
                        <div className="card d-flex flex-column p-0">
                            <div className ="cardcontent d-flex flex-column gap-4">
                                <img className="card-img-top" src="/imgs/product/measurement.png"/>
                                <div className="card-body d-flex flex-column justify-content-around p-0">                                
                                    <h6 className="card-title">Native Iron Chair</h6>
                                    <div className="d-flex flex-row justify-content-between">
                                        <p className="card-text p3">Dining Room • CHAIR & STOOL</p>
                                        <p className ="title2"> 4990.0</p>
                                    </div>
                                    <div className="d-flex flex-row justify-content-start gap-3">
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                    </div>
                                </div>
                            </div>                 
                            <div className="d-flex flex-row justify-content-between">
                                <a href="#" className="button2 cardlink" >VIEW ITEM</a>
                                <a href="#" className="button2 cardlink" >ADD TO CART</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
        {/* BAR & COUNTER STOOLS SECTION */}
        <div className ="section row g-4">
            <div className ="d-flex justify-content-center">
                <div className ="d-flex flex-column justify-content-center">
                    <div className ="title text-center">
                        <div className ="title1">
                            CHAIR & STOOL
                        </div>
                        <h2>
                            Bar & Counter Stools
                        </h2>
                    </div>
                    <div className ="row g-4 d-flex flex-row justify-content-center gap-5">                        
                        <div className="card d-flex flex-column p-0">
                            <div className ="cardcontent d-flex flex-column gap-4">
                                <img className="card-img-top" src="/imgs/product/measurement.png"/>
                                <div className="card-body d-flex flex-column justify-content-around p-0">                                
                                    <h6 className="card-title">Native Iron Chair</h6>
                                    <div className="d-flex flex-row justify-content-between">
                                        <p className="card-text p3">Dining Room • CHAIR & STOOL</p>
                                        <p className ="title2"> 4990.0</p>
                                    </div>
                                    <div className="d-flex flex-row justify-content-start gap-3">
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                    </div>
                                </div>
                            </div>                 
                            <div className="d-flex flex-row justify-content-between">
                                <a href="#" className="button2 cardlink" >VIEW ITEM</a>
                                <a href="#" className="button2 cardlink" >ADD TO CART</a>
                            </div>
                        </div>
                        <div className="card d-flex flex-column p-0">
                            <div className ="cardcontent d-flex flex-column gap-4">
                                <img className="card-img-top" src="/imgs/product/measurement.png"/>
                                <div className="card-body d-flex flex-column justify-content-around p-0">                                
                                    <h6 className="card-title">Native Iron Chair</h6>
                                    <div className="d-flex flex-row justify-content-between">
                                        <p className="card-text p3">Dining Room • CHAIR & STOOL</p>
                                        <p className ="title2"> 4990.0</p>
                                    </div>
                                    <div className="d-flex flex-row justify-content-start gap-3">
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                    </div>
                                </div>
                            </div>                 
                            <div className="d-flex flex-row justify-content-between">
                                <a href="#" className="button2 cardlink" >VIEW ITEM</a>
                                <a href="#" className="button2 cardlink" >ADD TO CART</a>
                            </div>
                        </div>
                        <div className="card d-flex flex-column p-0">
                            <div className ="cardcontent d-flex flex-column gap-4">
                                <img className="card-img-top" src="/imgs/product/measurement.png"/>
                                <div className="card-body d-flex flex-column justify-content-around p-0">                                
                                    <h6 className="card-title">Native Iron Chair</h6>
                                    <div className="d-flex flex-row justify-content-between">
                                        <p className="card-text p3">Dining Room • CHAIR & STOOL</p>
                                        <p className ="title2"> 4990.0</p>
                                    </div>
                                    <div className="d-flex flex-row justify-content-start gap-3">
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                    </div>
                                </div>
                            </div>                 
                            <div className="d-flex flex-row justify-content-between">
                                <a href="#" className="button2 cardlink" >VIEW ITEM</a>
                                <a href="#" className="button2 cardlink" >ADD TO CART</a>
                            </div>
                        </div>
                        <div className="card d-flex flex-column p-0">
                            <div className ="cardcontent d-flex flex-column gap-4">
                                <img className="card-img-top" src="/imgs/product/measurement.png"/>
                                <div className="card-body d-flex flex-column justify-content-around p-0">                                
                                    <h6 className="card-title">Native Iron Chair</h6>
                                    <div className="d-flex flex-row justify-content-between">
                                        <p className="card-text p3">Dining Room • CHAIR & STOOL</p>
                                        <p className ="title2"> 4990.0</p>
                                    </div>
                                    <div className="d-flex flex-row justify-content-start gap-3">
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                    </div>
                                </div>
                            </div>                 
                            <div className="d-flex flex-row justify-content-between">
                                <a href="#" className="button2 cardlink" >VIEW ITEM</a>
                                <a href="#" className="button2 cardlink" >ADD TO CART</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        </div>     
        {/* LIGHTINGS SECTION */}
        <div className ="section row g-4">
            <div className ="d-flex justify-content-center">
                <div className ="d-flex flex-column justify-content-center">
                    <div className ="title text-center">
                        <div className ="title1">
                            LIGHTING & DECOR
                        </div>
                        <h2>
                            Lightings
                        </h2>
                    </div>
                    <div className ="row g-4 d-flex flex-row justify-content-center gap-5">                        
                        <div className="card d-flex flex-column p-0">
                            <div className ="cardcontent d-flex flex-column gap-4">
                                <img className="card-img-top" src="/imgs/product/measurement.png"/>
                                <div className="card-body d-flex flex-column justify-content-around p-0">                                
                                    <h6 className="card-title">Native Iron Chair</h6>
                                    <div className="d-flex flex-row justify-content-between">
                                        <p className="card-text p3">Dining Room • CHAIR & STOOL</p>
                                        <p className ="title2"> 4990.0</p>
                                    </div>
                                    <div className="d-flex flex-row justify-content-start gap-3">
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                    </div>
                                </div>
                            </div>                 
                            <div className="d-flex flex-row justify-content-between">
                                <a href="#" className="button2 cardlink" >VIEW ITEM</a>
                                <a href="#" className="button2 cardlink" >ADD TO CART</a>
                            </div>
                        </div>
                        <div className="card d-flex flex-column p-0">
                            <div className ="cardcontent d-flex flex-column gap-4">
                                <img className="card-img-top" src="/imgs/product/measurement.png"/>
                                <div className="card-body d-flex flex-column justify-content-around p-0">                                
                                    <h6 className="card-title">Native Iron Chair</h6>
                                    <div className="d-flex flex-row justify-content-between">
                                        <p className="card-text p3">Dining Room • CHAIR & STOOL</p>
                                        <p className ="title2"> 4990.0</p>
                                    </div>
                                    <div className="d-flex flex-row justify-content-start gap-3">
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                    </div>
                                </div>
                            </div>                 
                            <div className="d-flex flex-row justify-content-between">
                                <a href="#" className="button2 cardlink" >VIEW ITEM</a>
                                <a href="#" className="button2 cardlink" >ADD TO CART</a>
                            </div>
                        </div>
                        <div className="card d-flex flex-column p-0">
                            <div className ="cardcontent d-flex flex-column gap-4">
                                <img className="card-img-top" src="/imgs/product/measurement.png"/>
                                <div className="card-body d-flex flex-column justify-content-around p-0">                                
                                    <h6 className="card-title">Native Iron Chair</h6>
                                    <div className="d-flex flex-row justify-content-between">
                                        <p className="card-text p3">Dining Room • CHAIR & STOOL</p>
                                        <p className ="title2"> 4990.0</p>
                                    </div>
                                    <div className="d-flex flex-row justify-content-start gap-3">
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                    </div>
                                </div>
                            </div>                 
                            <div className="d-flex flex-row justify-content-between">
                                <a href="#" className="button2 cardlink" >VIEW ITEM</a>
                                <a href="#" className="button2 cardlink" >ADD TO CART</a>
                            </div>
                        </div>
                        <div className="card d-flex flex-column p-0">
                            <div className ="cardcontent d-flex flex-column gap-4">
                                <img className="card-img-top" src="/imgs/product/measurement.png"/>
                                <div className="card-body d-flex flex-column justify-content-around p-0">                                
                                    <h6 className="card-title">Native Iron Chair</h6>
                                    <div className="d-flex flex-row justify-content-between">
                                        <p className="card-text p3">Dining Room • CHAIR & STOOL</p>
                                        <p className ="title2"> 4990.0</p>
                                    </div>
                                    <div className="d-flex flex-row justify-content-start gap-3">
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                    </div>
                                </div>
                            </div>                 
                            <div className="d-flex flex-row justify-content-between">
                                <a href="#" className="button2 cardlink" >VIEW ITEM</a>
                                <a href="#" className="button2 cardlink" >ADD TO CART</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </div>   
    </div>
    );
}

export default DiningRoom
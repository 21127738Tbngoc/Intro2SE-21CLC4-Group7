import React, { useState, useEffect } from 'react';
import ProductCard from '../components/card/card';
import '../components/common.css';
import '../components/button/buttons.css';
import '../components/styles/Room.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import '/icons/fontawesome/css/all.min.css'; 
import { toast } from 'react-toastify';


const Bathroom = () =>{
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
        <div class = "container-fluid d-flex flex-column flex-shrink-0 page">
        {/* BREADCRUMB */}
        <ol class="breadcrumb">
            <li class="p"><a href="#">HOME</a></li>
            <li class="label"><a href="#">SHOP ALL</a></li>
            <li class="button"> <a href="#">BATHROOM</a></li>
        </ol>
        <div class="section row g-4">
            <div class ="d-flex flex-row justify-content-around">
                {/* HERO IMAGE */}
                <img src ="/imgs/articles/blog-h5-2.jpg" style={{"width": "636px", "height": "500px", "object-fit": "cover"}}/>
                
                {/* PAGE DESCRIPTION */}
                <div class ="col col-xxl-4 d-flex flex-column justify-content-between">
                    <div>
                        <d3>
                            BATHROOM
                        </d3>
                    </div>
                    <div class ="gap-4">
                        <p>
                            Quia id omnis aliquid suscipit recusandae similique. Vero natus sed animi reiciendis. Ipsum voluptate Est velit et ex labori osam dolor est inventore quo numquam. Labore voluptas nihil molestiae sint delectus sint sequi voluptatem. Quia id omnis aliquid suscipit recusandae similique. Vero natus sed animi reiciendis. Quia id omnis aliquid suscipit recusandae similique. Vero natus sed animi reiciendis. Ipsum voluptate Est velit et ex labori osam dolor est inventore quo.
                        </p>
                        <p>
                            Labore voluptas nihil molestiae sint delectus sint sequi voluptatem. Quia id omnis aliquid suscipit recusandae similique. Vero natus sed animi reiciendis.
                        </p>
                        <div class ="d-flex flex-row gap-4">
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
                                <div>
                                    <a href="#" class = "mediaicon fa-brands fa-facebook"></a>
                                    <a href="#" class = "mediaicon fa-brands fa-twitter"></a>
                                    <a href="#" class = "mediaicon fa-brands fa-instagram"></a>
                                    <a href="#" class = "mediaicon fa-brands fa-pinterest"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
         {/* BATHTUBS SECTION */}
        <div class ="section row g-4">
            <div class ="d-flex justify-content-center">
                <div class ="d-flex flex-column justify-content-center flex-shrink-0 flex-grow-1">
                    <div class ="title text-center">
                        <div class ="title1">
                            STORAGE & SHELF
                        </div>
                        <h2>
                            Bathtubs
                        </h2>
                    </div>                    
                    <div class ="row g-4 d-flex flex-row justify-content-center gap-5">                        
                        <div class="card d-flex flex-column p-0">
                            <div class ="cardcontent d-flex flex-column gap-4">
                                <img class="card-img-top" src="/imgs/product/measurement.png"/>
                                <div class="card-body d-flex flex-column justify-content-around p-0">                                
                                    <h6 class="card-title">Native Iron Chair</h6>
                                    <div class="d-flex flex-row justify-content-between">
                                        <p class="card-text p3">Dining Room • CHAIR & STOOL</p>
                                        <p class ="title2"> 4990.0</p>
                                    </div>
                                    <div class="d-flex flex-row justify-content-start gap-3">
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                    </div>
                                </div>
                            </div>                 
                            <div class="d-flex flex-row justify-content-between">
                                <a href="#" class="button2 cardlink" >VIEW ITEM</a>
                                <a href="#" class="button2 cardlink" >ADD TO CART</a>
                            </div>
                        </div>
                        <div class="card d-flex flex-column p-0">
                            <div class ="cardcontent d-flex flex-column gap-4">
                                <img class="card-img-top" src="/imgs/product/measurement.png"/>
                                <div class="card-body d-flex flex-column justify-content-around p-0">                                
                                    <h6 class="card-title">Native Iron Chair</h6>
                                    <div class="d-flex flex-row justify-content-between">
                                        <p class="card-text p3">Dining Room • CHAIR & STOOL</p>
                                        <p class ="title2"> 4990.0</p>
                                    </div>
                                    <div class="d-flex flex-row justify-content-start gap-3">
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                    </div>
                                </div>
                            </div>                 
                            <div class="d-flex flex-row justify-content-between">
                                <a href="#" class="button2 cardlink" >VIEW ITEM</a>
                                <a href="#" class="button2 cardlink" >ADD TO CART</a>
                            </div>
                        </div>
                        <div class="card d-flex flex-column p-0">
                            <div class ="cardcontent d-flex flex-column gap-4">
                                <img class="card-img-top" src="/imgs/product/measurement.png"/>
                                <div class="card-body d-flex flex-column justify-content-around p-0">                                
                                    <h6 class="card-title">Native Iron Chair</h6>
                                    <div class="d-flex flex-row justify-content-between">
                                        <p class="card-text p3">Dining Room • CHAIR & STOOL</p>
                                        <p class ="title2"> 4990.0</p>
                                    </div>
                                    <div class="d-flex flex-row justify-content-start gap-3">
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                    </div>
                                </div>
                            </div>                 
                            <div class="d-flex flex-row justify-content-between">
                                <a href="#" class="button2 cardlink" >VIEW ITEM</a>
                                <a href="#" class="button2 cardlink" >ADD TO CART</a>
                            </div>
                        </div>
                        <div class="card d-flex flex-column p-0">
                            <div class ="cardcontent d-flex flex-column gap-4">
                                <img class="card-img-top" src="/imgs/product/measurement.png"/>
                                <div class="card-body d-flex flex-column justify-content-around p-0">                                
                                    <h6 class="card-title">Native Iron Chair</h6>
                                    <div class="d-flex flex-row justify-content-between">
                                        <p class="card-text p3">Dining Room • CHAIR & STOOL</p>
                                        <p class ="title2"> 4990.0</p>
                                    </div>
                                    <div class="d-flex flex-row justify-content-start gap-3">
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                    </div>
                                </div>
                            </div>                 
                            <div class="d-flex flex-row justify-content-between">
                                <a href="#" class="button2 cardlink" >VIEW ITEM</a>
                                <a href="#" class="button2 cardlink" >ADD TO CART</a>
                            </div>
                        </div>
                    </div>
                    <div class ="row g-4 d-flex flex-row justify-content-center gap-5">                        
                        <div class="card d-flex flex-column p-0">
                            <div class ="cardcontent d-flex flex-column gap-4">
                                <img class="card-img-top" src="/imgs/product/measurement.png"/>
                                <div class="card-body d-flex flex-column justify-content-around p-0">                                
                                    <h6 class="card-title">Native Iron Chair</h6>
                                    <div class="d-flex flex-row justify-content-between">
                                        <p class="card-text p3">Dining Room • CHAIR & STOOL</p>
                                        <p class ="title2"> 4990.0</p>
                                    </div>
                                    <div class="d-flex flex-row justify-content-start gap-3">
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                    </div>
                                </div>
                            </div>                 
                            <div class="d-flex flex-row justify-content-between">
                                <a href="#" class="button2 cardlink" >VIEW ITEM</a>
                                <a href="#" class="button2 cardlink" >ADD TO CART</a>
                            </div>
                        </div>
                        <div class="card d-flex flex-column p-0">
                            <div class ="cardcontent d-flex flex-column gap-4">
                                <img class="card-img-top" src="/imgs/product/measurement.png"/>
                                <div class="card-body d-flex flex-column justify-content-around p-0">                                
                                    <h6 class="card-title">Native Iron Chair</h6>
                                    <div class="d-flex flex-row justify-content-between">
                                        <p class="card-text p3">Dining Room • CHAIR & STOOL</p>
                                        <p class ="title2"> 4990.0</p>
                                    </div>
                                    <div class="d-flex flex-row justify-content-start gap-3">
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                    </div>
                                </div>
                            </div>                 
                            <div class="d-flex flex-row justify-content-between">
                                <a href="#" class="button2 cardlink" >VIEW ITEM</a>
                                <a href="#" class="button2 cardlink" >ADD TO CART</a>
                            </div>
                        </div>
                        <div class="card d-flex flex-column p-0">
                            <div class ="cardcontent d-flex flex-column gap-4">
                                <img class="card-img-top" src="/imgs/product/measurement.png"/>
                                <div class="card-body d-flex flex-column justify-content-around p-0">                                
                                    <h6 class="card-title">Native Iron Chair</h6>
                                    <div class="d-flex flex-row justify-content-between">
                                        <p class="card-text p3">Dining Room • CHAIR & STOOL</p>
                                        <p class ="title2"> 4990.0</p>
                                    </div>
                                    <div class="d-flex flex-row justify-content-start gap-3">
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                    </div>
                                </div>
                            </div>                 
                            <div class="d-flex flex-row justify-content-between">
                                <a href="#" class="button2 cardlink" >VIEW ITEM</a>
                                <a href="#" class="button2 cardlink" >ADD TO CART</a>
                            </div>
                        </div>
                        <div class="card d-flex flex-column p-0">
                            <div class ="cardcontent d-flex flex-column gap-4">
                                <img class="card-img-top" src="/imgs/product/measurement.png"/>
                                <div class="card-body d-flex flex-column justify-content-around p-0">                                
                                    <h6 class="card-title">Native Iron Chair</h6>
                                    <div class="d-flex flex-row justify-content-between">
                                        <p class="card-text p3">Dining Room • CHAIR & STOOL</p>
                                        <p class ="title2"> 4990.0</p>
                                    </div>
                                    <div class="d-flex flex-row justify-content-start gap-3">
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                    </div>
                                </div>
                            </div>                 
                            <div class="d-flex flex-row justify-content-between">
                                <a href="#" class="button2 cardlink" >VIEW ITEM</a>
                                <a href="#" class="button2 cardlink" >ADD TO CART</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>            
        </div>
        {/* BATHROOM VANITIES SECTION */}
        <div class ="section row g-4">
            <div class ="d-flex justify-content-center">
                <div class ="d-flex flex-column justify-content-center">
                    <div class ="title text-center">
                        <div class ="title1">
                            CHAIR & STOOL
                        </div>
                        <h2>
                            Bathroom Vanities
                        </h2>
                    </div>
                    <div class ="row g-4 d-flex flex-row justify-content-center gap-5">                        
                        <div class="card d-flex flex-column p-0">
                            <div class ="cardcontent d-flex flex-column gap-4">
                                <img class="card-img-top" src="/imgs/product/measurement.png"/>
                                <div class="card-body d-flex flex-column justify-content-around p-0">                                
                                    <h6 class="card-title">Native Iron Chair</h6>
                                    <div class="d-flex flex-row justify-content-between">
                                        <p class="card-text p3">Dining Room • CHAIR & STOOL</p>
                                        <p class ="title2"> 4990.0</p>
                                    </div>
                                    <div class="d-flex flex-row justify-content-start gap-3">
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                    </div>
                                </div>
                            </div>                 
                            <div class="d-flex flex-row justify-content-between">
                                <a href="#" class="button2 cardlink" >VIEW ITEM</a>
                                <a href="#" class="button2 cardlink" >ADD TO CART</a>
                            </div>
                        </div>
                        <div class="card d-flex flex-column p-0">
                            <div class ="cardcontent d-flex flex-column gap-4">
                                <img class="card-img-top" src="/imgs/product/measurement.png"/>
                                <div class="card-body d-flex flex-column justify-content-around p-0">                                
                                    <h6 class="card-title">Native Iron Chair</h6>
                                    <div class="d-flex flex-row justify-content-between">
                                        <p class="card-text p3">Dining Room • CHAIR & STOOL</p>
                                        <p class ="title2"> 4990.0</p>
                                    </div>
                                    <div class="d-flex flex-row justify-content-start gap-3">
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                    </div>
                                </div>
                            </div>                 
                            <div class="d-flex flex-row justify-content-between">
                                <a href="#" class="button2 cardlink" >VIEW ITEM</a>
                                <a href="#" class="button2 cardlink" >ADD TO CART</a>
                            </div>
                        </div>
                        <div class="card d-flex flex-column p-0">
                            <div class ="cardcontent d-flex flex-column gap-4">
                                <img class="card-img-top" src="/imgs/product/measurement.png"/>
                                <div class="card-body d-flex flex-column justify-content-around p-0">                                
                                    <h6 class="card-title">Native Iron Chair</h6>
                                    <div class="d-flex flex-row justify-content-between">
                                        <p class="card-text p3">Dining Room • CHAIR & STOOL</p>
                                        <p class ="title2"> 4990.0</p>
                                    </div>
                                    <div class="d-flex flex-row justify-content-start gap-3">
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                    </div>
                                </div>
                            </div>                 
                            <div class="d-flex flex-row justify-content-between">
                                <a href="#" class="button2 cardlink" >VIEW ITEM</a>
                                <a href="#" class="button2 cardlink" >ADD TO CART</a>
                            </div>
                        </div>
                        <div class="card d-flex flex-column p-0">
                            <div class ="cardcontent d-flex flex-column gap-4">
                                <img class="card-img-top" src="/imgs/product/measurement.png"/>
                                <div class="card-body d-flex flex-column justify-content-around p-0">                                
                                    <h6 class="card-title">Native Iron Chair</h6>
                                    <div class="d-flex flex-row justify-content-between">
                                        <p class="card-text p3">Dining Room • CHAIR & STOOL</p>
                                        <p class ="title2"> 4990.0</p>
                                    </div>
                                    <div class="d-flex flex-row justify-content-start gap-3">
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                    </div>
                                </div>
                            </div>                 
                            <div class="d-flex flex-row justify-content-between">
                                <a href="#" class="button2 cardlink" >VIEW ITEM</a>
                                <a href="#" class="button2 cardlink" >ADD TO CART</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
        {/* LIGHTINGS SECTION */}
        <div class ="section row g-4">
            <div class ="d-flex justify-content-center">
                <div class ="d-flex flex-column justify-content-center">
                    <div class ="title text-center">
                        <div class ="title1">
                            LIGHTING & DECOR
                        </div>
                        <h2>
                            Lightings
                        </h2>
                    </div>
                    <div class ="row g-4 d-flex flex-row justify-content-center gap-5">                        
                        <div class="card d-flex flex-column p-0">
                            <div class ="cardcontent d-flex flex-column gap-4">
                                <img class="card-img-top" src="/imgs/product/measurement.png"/>
                                <div class="card-body d-flex flex-column justify-content-around p-0">                                
                                    <h6 class="card-title">Native Iron Chair</h6>
                                    <div class="d-flex flex-row justify-content-between">
                                        <p class="card-text p3">Dining Room • CHAIR & STOOL</p>
                                        <p class ="title2"> 4990.0</p>
                                    </div>
                                    <div class="d-flex flex-row justify-content-start gap-3">
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                    </div>
                                </div>
                            </div>                 
                            <div class="d-flex flex-row justify-content-between">
                                <a href="#" class="button2 cardlink" >VIEW ITEM</a>
                                <a href="#" class="button2 cardlink" >ADD TO CART</a>
                            </div>
                        </div>
                        <div class="card d-flex flex-column p-0">
                            <div class ="cardcontent d-flex flex-column gap-4">
                                <img class="card-img-top" src="/imgs/product/measurement.png"/>
                                <div class="card-body d-flex flex-column justify-content-around p-0">                                
                                    <h6 class="card-title">Native Iron Chair</h6>
                                    <div class="d-flex flex-row justify-content-between">
                                        <p class="card-text p3">Dining Room • CHAIR & STOOL</p>
                                        <p class ="title2"> 4990.0</p>
                                    </div>
                                    <div class="d-flex flex-row justify-content-start gap-3">
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                    </div>
                                </div>
                            </div>                 
                            <div class="d-flex flex-row justify-content-between">
                                <a href="#" class="button2 cardlink" >VIEW ITEM</a>
                                <a href="#" class="button2 cardlink" >ADD TO CART</a>
                            </div>
                        </div>
                        <div class="card d-flex flex-column p-0">
                            <div class ="cardcontent d-flex flex-column gap-4">
                                <img class="card-img-top" src="/imgs/product/measurement.png"/>
                                <div class="card-body d-flex flex-column justify-content-around p-0">                                
                                    <h6 class="card-title">Native Iron Chair</h6>
                                    <div class="d-flex flex-row justify-content-between">
                                        <p class="card-text p3">Dining Room • CHAIR & STOOL</p>
                                        <p class ="title2"> 4990.0</p>
                                    </div>
                                    <div class="d-flex flex-row justify-content-start gap-3">
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                    </div>
                                </div>
                            </div>                 
                            <div class="d-flex flex-row justify-content-between">
                                <a href="#" class="button2 cardlink" >VIEW ITEM</a>
                                <a href="#" class="button2 cardlink" >ADD TO CART</a>
                            </div>
                        </div>
                        <div class="card d-flex flex-column p-0">
                            <div class ="cardcontent d-flex flex-column gap-4">
                                <img class="card-img-top" src="/imgs/product/measurement.png"/>
                                <div class="card-body d-flex flex-column justify-content-around p-0">                                
                                    <h6 class="card-title">Native Iron Chair</h6>
                                    <div class="d-flex flex-row justify-content-between">
                                        <p class="card-text p3">Dining Room • CHAIR & STOOL</p>
                                        <p class ="title2"> 4990.0</p>
                                    </div>
                                    <div class="d-flex flex-row justify-content-start gap-3">
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                    </div>
                                </div>
                            </div>                 
                            <div class="d-flex flex-row justify-content-between">
                                <a href="#" class="button2 cardlink" >VIEW ITEM</a>
                                <a href="#" class="button2 cardlink" >ADD TO CART</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    </div>
    );
}

export default Bathroom
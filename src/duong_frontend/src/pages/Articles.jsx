import React, { useState, useEffect } from 'react';
import ProductCard from '../components/card/card';
import '../components/common.css';
import '../components/button/buttons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import '/icons/fontawesome/css/all.min.css'; 
import { toast } from 'react-toastify';


const Articles = () =>{
    // const [ordersData, setOrdersData] = useState([]);
    // const [loading, setLoading] = useState(true);

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
            <li className="button"> <a href="#">ARTICLES</a></li>
        </ol>
        <div className="section row g-4 mx-5">
            <div className ="d-flex flex-row justify-content-around gap-5">
                {/* ARTICLES */}
                <div className="col col-xxl-7">
                    <div className = "d-flex flex-column" style={{"gap":"4rem"}}>
                        <div className = "d-flex flex-column justify-content-center gap-2">
                            <img src="/imgs/articles/blog-big-3.jpg" />
                            {/* ARTICLE TYPE */}
                            <a href="" className ="button">MAINTENANCE</a>
                            <h4>How We Keep Brand Consistency in Our Visual Language — A Design System for Illustrations</h4>
                            <p1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et justo sed ipsum rhoncus varius. Vivamus scelerisque ipsum a ullamcorper iaculis. Sed eget tincidunt urna. Sed vestibulum ligula in turpis ultricies, quis volutpat lectus malesuada. Nulla facilisi. Cras sit amet nunc id enim faucibus bibendum. Quisque consectetur, odio non aliquam tincidunt.</p1>
                            <div className = "d-flex flex-row justify-content-between">
                                {/* PUBLISHER INFORMATION */}
                                <div className = "d-flex flex-row gap-2">
                                    <img src = "/imgs/avatars/avt-1.svg" width="65px" className ="useravt"/>
                                    <div className = "d-flex flex-column justify-content-around">
                                        <div className = "title2">Jane Cooper</div>
                                        <div className = "label3">Jul 25, 2023</div>
                                    </div>
                                </div>
                                <div class = "d-flex flex-column justify-content-center">
                                    <a href="" className='button'>READ ARTICLE</a>
                                </div>
                            </div>
                        </div>
                        <div className = "d-flex flex-column justify-content-center gap-2">
                            <img src="/imgs/articles/blog-big-3.jpg" />
                            {/* ARTICLE TYPE */}
                            <a href="" className ="button">MAINTENANCE</a>
                            <h4>How We Keep Brand Consistency in Our Visual Language — A Design System for Illustrations</h4>
                            <p1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et justo sed ipsum rhoncus varius. Vivamus scelerisque ipsum a ullamcorper iaculis. Sed eget tincidunt urna. Sed vestibulum ligula in turpis ultricies, quis volutpat lectus malesuada. Nulla facilisi. Cras sit amet nunc id enim faucibus bibendum. Quisque consectetur, odio non aliquam tincidunt.</p1>
                            <div className = "d-flex flex-row justify-content-between">
                                {/* PUBLISHER INFORMATION */}
                                <div className = "d-flex flex-row gap-2">
                                    <img src = "/imgs/avatars/avt-1.svg" width="65px" className ="useravt"/>
                                    <div className = "d-flex flex-column justify-content-around">
                                        <div className = "title2">Jane Cooper</div>
                                        <div className = "label3">Jul 25, 2023</div>
                                    </div>
                                </div>
                                <div class = "d-flex flex-column justify-content-center">
                                    <a href="" className='button'>READ ARTICLE</a>
                                </div>
                            </div>
                        </div>
                        <div className = "d-flex flex-column justify-content-center gap-2">
                            <img src="/imgs/articles/blog-big-3.jpg" />
                            {/* ARTICLE TYPE */}
                            <a href="" className ="button">MAINTENANCE</a>
                            <h4>How We Keep Brand Consistency in Our Visual Language — A Design System for Illustrations</h4>
                            <p1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et justo sed ipsum rhoncus varius. Vivamus scelerisque ipsum a ullamcorper iaculis. Sed eget tincidunt urna. Sed vestibulum ligula in turpis ultricies, quis volutpat lectus malesuada. Nulla facilisi. Cras sit amet nunc id enim faucibus bibendum. Quisque consectetur, odio non aliquam tincidunt.</p1>
                            <div className = "d-flex flex-row justify-content-between">
                                {/* PUBLISHER INFORMATION */}
                                <div className = "d-flex flex-row gap-2">
                                    <img src = "/imgs/avatars/avt-1.svg" width="65px" className ="useravt"/>
                                    <div className = "d-flex flex-column justify-content-around">
                                        <div className = "title2">Jane Cooper</div>
                                        <div className = "label3">Jul 25, 2023</div>
                                    </div>
                                </div>
                                <div class = "d-flex flex-column justify-content-center">
                                    <a href="" className='button'>READ ARTICLE</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>  
                <div className="col col-xxl-5 align-items-center" >
                    <div className = "d-flex flex-column" style={{"gap":"5rem"}}>
                        {/* LATEST POSTS */}
                        <div className='d-flex flex-column gap-3'>
                            <div className='title1'>LATEST POSTS</div>
                            <div className='d-flex flex-row justify-content-between gap-4'>
                                <img src="/imgs/articles/portfolio-lista-10.jpg" style={{"width":"166px", "height":"106px"}}/>
                                <div className='d-flex flex-column'>
                                    {/* ARTICLE TYPE */}
                                    <a href="" className ="button">ARCHITECTURE</a>
                                    <div className='d-flex flex-column gap-1'>
                                        <div className='title1'>Modern Texas home is beautiful and extremely kid-friendly</div>
                                        {/* PUBLISHER INFORMATION */}
                                        <div className = "d-flex flex-row gap-2">
                                            <img src = "/imgs/avatars/avt-1.svg" width="28px" className ="useravt"/>
                                            <div className = "d-flex flex-row gap-1">
                                                <div className = "label3">Jane Cooper</div>
                                                <div className = "label3">Jul 25, 2023</div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className='d-flex flex-row justify-content-between gap-4'>
                                <img src="/imgs/articles/portfolio-lista-10.jpg" style={{"width":"166px", "height":"106px"}}/>
                                <div className='d-flex flex-column'>
                                    {/* ARTICLE TYPE */}
                                    <a href="" className ="button">ARCHITECTURE</a>
                                    <div className='d-flex flex-column gap-1'>
                                        <div className='title1'>Modern Texas home is beautiful and extremely kid-friendly</div>
                                        {/* PUBLISHER INFORMATION */}
                                        <div className = "d-flex flex-row gap-2">
                                            <img src = "/imgs/avatars/avt-1.svg" width="28px" className ="useravt"/>
                                            <div className = "d-flex flex-row gap-1">
                                                <div className = "label3">Jane Cooper</div>
                                                <div className = "label3">Jul 25, 2023</div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className='d-flex flex-row justify-content-between gap-4'>
                                <img src="/imgs/articles/portfolio-lista-10.jpg" style={{"width":"166px", "height":"106px"}}/>
                                <div className='d-flex flex-column'>
                                    {/* ARTICLE TYPE */}
                                    <a href="" className ="button">ARCHITECTURE</a>
                                    <div className='d-flex flex-column gap-1'>
                                        <div className='title1'>Modern Texas home is beautiful and extremely kid-friendly</div>
                                        {/* PUBLISHER INFORMATION */}
                                        <div className = "d-flex flex-row gap-2">
                                            <img src = "/imgs/avatars/avt-1.svg" width="28px" className ="useravt"/>
                                            <div className = "d-flex flex-row gap-1">
                                                <div className = "label3">Jane Cooper</div>
                                                <div className = "label3">Jul 25, 2023</div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className='d-flex flex-row justify-content-between gap-4'>
                                <img src="/imgs/articles/portfolio-lista-10.jpg" style={{"width":"166px", "height":"106px"}}/>
                                <div className='d-flex flex-column'>
                                    {/* ARTICLE TYPE */}
                                    <a href="" className ="button">ARCHITECTURE</a>
                                    <div className='d-flex flex-column gap-1'>
                                        <div className='title1'>Modern Texas home is beautiful and extremely kid-friendly</div>
                                        {/* PUBLISHER INFORMATION */}
                                        <div className = "d-flex flex-row gap-2">
                                            <img src = "/imgs/avatars/avt-1.svg" width="28px" className ="useravt"/>
                                            <div className = "d-flex flex-row gap-1">
                                                <div className = "label3">Jane Cooper</div>
                                                <div className = "label3">Jul 25, 2023</div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* POPULAR POSTS */}
                        <div className = "d-flex flex-column" style={{"gap":"3rem"}}>
                            <div className ="d-flex flex-column gap-4 p-4">
                                <img src="/imgs/articles/portfolio-lista-10.jpg" style={{"height":"255px", "object-fit":"cover"}}/>

                                <div className='d-flex flex-column gap-2'>
                                    {/* ARTICLE TYPE */}
                                    <a href="" className ="button">LIFE STYLE</a>
                                    <h5>A Guide To Starting a Bamboo Building Project</h5>
                                    {/* PUBLISHER INFORMATION */}
                                    <div className = "d-flex flex-row justify-content-between">
                                        <div className = "d-flex flex-row gap-2">
                                            <img src = "/imgs/avatars/avt-1.svg" width="43px" className ="useravt"/>
                                            <div className = "d-flex flex-row gap-1">
                                                <div className = "title2">Jane Cooper</div>
                                                <div className = "label3">Jul 25, 2023</div>
                                            </div>

                                        </div>
                                        <a href=""><span className="fa fa-arrow-right" style={{"font-size":"48px"}}/></a>
                                    </div>
                                </div>
                            </div>
                            <div className ="d-flex flex-column gap-4 p-4">
                                <img src="/imgs/articles/portfolio-lista-10.jpg" style={{"height":"255px", "object-fit":"cover"}}/>

                                <div className='d-flex flex-column gap-2'>
                                    {/* ARTICLE TYPE */}
                                    <a href="" className ="button">LIFE STYLE</a>
                                    <h5>A Guide To Starting a Bamboo Building Project</h5>
                                    {/* PUBLISHER INFORMATION */}
                                    <div className = "d-flex flex-row justify-content-between">
                                        <div className = "d-flex flex-row gap-2">
                                            <img src = "/imgs/avatars/avt-1.svg" width="43px" className ="useravt"/>
                                            <div className = "d-flex flex-row gap-1">
                                                <div className = "title2">Jane Cooper</div>
                                                <div className = "label3">Jul 25, 2023</div>
                                            </div>

                                        </div>
                                        <a href=""><span className="fa fa-arrow-right" style={{"font-size":"48px"}}/></a>
                                    </div>
                                </div>
                            </div>
                            <div className ="d-flex flex-column gap-4 p-4">
                                <img src="/imgs/articles/portfolio-lista-10.jpg" style={{"height":"255px", "object-fit":"cover"}}/>

                                <div className='d-flex flex-column gap-2'>
                                    {/* ARTICLE TYPE */}
                                    <a href="" className ="button">LIFE STYLE</a>
                                    <h5>A Guide To Starting a Bamboo Building Project</h5>
                                    {/* PUBLISHER INFORMATION */}
                                    <div className = "d-flex flex-row justify-content-between">
                                        <div className = "d-flex flex-row gap-2">
                                            <img src = "/imgs/avatars/avt-1.svg" width="43px" className ="useravt"/>
                                            <div className = "d-flex flex-row gap-1">
                                                <div className = "title2">Jane Cooper</div>
                                                <div className = "label3">Jul 25, 2023</div>
                                            </div>

                                        </div>
                                        <a href=""><span className="fa fa-arrow-right" style={{"font-size":"48px"}}/></a>
                                    </div>
                                </div>
                            </div>
                            

                        </div>
                    </div>
                </div>  
            </div>            
        </div>   
    </div>
    );
}

export default Articles
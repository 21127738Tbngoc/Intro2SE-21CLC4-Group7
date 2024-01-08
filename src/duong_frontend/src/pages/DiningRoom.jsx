import React, {useState, useEffect, useContext} from 'react';
import ProductCard from '../components/card/card';
import '../components/common.css';
import '../components/button/buttons.css';
import '../components/styles/Room.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../components/styles/Shop.css';
import {toast} from 'react-toastify';
import {Link, useNavigate} from 'react-router-dom';
import { ShopContext } from '../components/context/ShopContext'

const DiningRoom = () => {
    let [Data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const {addToCart}=useContext(ShopContext);
    useEffect(() => {
        document.title = "Dining Room";
        window.scrollTo(0, 0);
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/products/');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            let temp = await response.json();
            let data = []
            for (let i = 0; i < temp.length; i++) {
                if (temp[i].room === 'Dining Room') {
                    data.push(temp[i])
                }
            }
            setData(data);
            setLoading(false);
        } catch (error) {
            toast.error('Error fetching data');
            setLoading(false);
        }
    };

    const createARowOf4 = (category, ) => {
        let row = Data.filter(item => item.categories.includes(category))
        let components = []
        for (let i = 0; i < row.length; i++) {
            if (row[i]) {
                components.push(
                    <div className="card d-flex flex-column p-0 m-2" style={{marginTop: "0"}}>
                        <div className="cardcontent d-flex flex-column gap-4">
                            <img className="card-img-top" src={row[i].thumbnail}/>
                            <div className="card-body d-flex flex-column justify-content-around p-0">
                                <h6 className="card-title" style={{"height": "3em"}}>{row[i].name}</h6>
                                <div className="d-flex flex-row justify-content-between">
                                    <p className="card-text p3">{row[i].categories.join(" & ")}</p>
                                    <p className="title2 py-1 product-price">{row[i].price}</p>
                                </div>
                                <div className="justify-content-start">
                                    <img style={{width: "50%", height:"auto"}} src={`https://res.cloudinary.com/dxsvumas8/image/upload/v1703921412/rating-${Math.round(row[i].rating)}`}/>
                                </div>
                            </div>
                        </div>
                        <div className="product-buttons d-flex flex-row justify-content-between">
                            <div onClick = {()=> {addToCart(row[i]._id)}} className="product-btn button2 no-right-border">ADD TO CART</div>
                            <a href={`/product/${row[i]._id}`} className="product-btn button2"> VIEW PRODUCT </a>
                        </div>
                    </div>
                )
            }
        }
        if (components.length===0) {components.push
        (
            <h3 className={"justify-content-center"} style={{fontStyle:"italic", color:"gray"}}>Coming soon!</h3>
        )}
        return components;
    };

    return (
        <div className="container-fluid d-flex flex-column flex-shrink-0 page">
            {/* BREADCRUMB */}
            <ol className="breadcrumb">
                <li><a href="/">HOME</a></li>
                <li className="label"><a href="/shop">SHOP ALL</a></li>
                <li className="button"><a href="/dining-room">DINING ROOM</a></li>
            </ol>
            <div className="section row g-4">
                <div className="d-flex flex-row justify-content-around">
                    {/* HERO IMAGE */}
                    <img src="/imgs/room/diningroom.jpg"
                         style={{"width": "636px", "height": "500px", "object-fit": "cover"}}/>

                    {/* PAGE DESCRIPTION */}
                    <div className="col-12 col-xxl-4 d-flex flex-column">
                        <d3 style={{marginBottom:"0.5em"}}>
                            Dining Room
                        </d3>
                        <div>
                            <p>
                                Quia id omnis aliquid suscipit recusandae similique. Vero natus sed animi reiciendis.
                                Ipsum voluptate Est velit et ex labori osam dolor est inventore quo numquam. Labore
                                voluptas nihil molestiae sint delectus sint sequi voluptatem. Quia id omnis aliquid
                                suscipit recusandae similique. Vero natus sed animi reiciendis. Quia id omnis aliquid
                                suscipit recusandae similique. Vero natus sed animi reiciendis. Ipsum voluptate Est
                                velit et ex labori osam dolor est inventore quo.
                            </p>
                            <br/>
                            <p>
                                Labore voluptas nihil molestiae sint delectus sint sequi voluptatem. Quia id omnis
                                aliquid suscipit recusandae similique. Vero natus sed animi reiciendis.
                            </p>
                            <br/>
                            <div className="d-flex flex-row gap-4">
                                <div>
                                    <p>Client</p><br/>
                                    <p>Location</p><br/>
                                    <p>Date</p><br/>
                                    <p>Share</p><br/>
                                </div>
                                <div>
                                    <p>Quode Interactive</p> <br/>
                                    <p>New York, US</p><br/>
                                    <p>March 14, 2023</p><br/>
                                    <div className="d-flex flex-row">
                                        <a href="#" className="mediaicon fa-brands fa-facebook"></a>
                                        <a href="#" className="mediaicon fa-brands fa-twitter"></a>
                                        <a href="#" className="mediaicon fa-brands fa-instagram"></a>
                                        <a href="#" className="mediaicon fa-brands fa-pinterest"></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* DINING TABLES SECTION */}
                <div className="justify-content-center">
                    <div className="d-flex flex-column justify-content-center flex-shrink-0 flex-grow-1">
                        <div className="title text-center">
                            <div className="title1">
                                DESK & TABLES
                            </div>
                            <h2>
                                Dining Tables
                            </h2>
                        </div>
                        {/*Dining Table*/}
                        <div className={"col-12 d-flex flex-row flex-wrap justify-content-center"}>
                            {createARowOf4('Dining Table')}
                        </div>
                    </div>
                </div>
            {/* DINING CHAIRS SECTION */
            }
            <div className="section row g-4">
                <div className="d-flex justify-content-center">
                    <div className="d-flex flex-column justify-content-center">
                        <div className="title text-center">
                            <div className="title1">
                                CHAIR & STOOL
                            </div>
                            <h2>
                                Dining Chairs
                            </h2>
                        </div>
                        <div className={"col-12 d-flex flex-row flex-wrap justify-content-center"}>
                            {createARowOf4('Dining Chair')}
                        </div>
                    </div>
                </div>
            </div>
            {/* BAR CARTS & CARBINETS SECTION */
            }
            <div className="section row g-4">
                <div className="d-flex justify-content-center">
                    <div className="d-flex flex-column justify-content-center">
                        <div className="title text-center">
                            <div className="title1">
                                STORAGE & SHELF
                            </div>
                            <h2>
                                Bar Carts & Cabinets
                            </h2>
                        </div>
                        <div className={"col-12 d-flex flex-row flex-wrap justify-content-center"}>
                            {createARowOf4('Carbinet')}
                        </div>
                    </div>
                </div>
            </div>
            {/* KITCHEN ISLANDS SECTION */
            }
            <div className="section row g-4">
                <div className="d-flex justify-content-center">
                    <div className="d-flex flex-column justify-content-center">
                        <div className="title text-center">
                            <div className="title1">
                                STORAGE & SHELF
                            </div>
                            <h2>
                                Kitchen Islands
                            </h2>
                        </div>
                        <div className={"col-12 d-flex flex-row flex-wrap justify-content-center"}>
                            {createARowOf4('Kitchen Islands')}
                        </div>
                    </div>
                </div>
            </div>
            {/* BAR & COUNTER STOOLS SECTION */
            }
            <div className="section row g-4">
                <div className="d-flex justify-content-center">
                    <div className="d-flex flex-column justify-content-center">
                        <div className="title text-center">
                            <div className="title1">
                                CHAIR & STOOL
                            </div>
                            <h2>
                                Bar & Counter Stools
                            </h2>
                        </div>
                        <div className={"col-12 d-flex flex-row flex-wrap justify-content-center"}>
                            {createARowOf4('Bar')}
                        </div>
                    </div>
                </div>
            </div>
            {/* LIGHTINGS SECTION */
            }
            <div className="section row g-4">
                <div className="d-flex justify-content-center">
                    <div className="d-flex flex-column justify-content-center">
                        <div className="title text-center">
                            <div className="title1">
                                LIGHTING & DECOR
                            </div>
                            <h2>
                                Lightings
                            </h2>
                        </div>
                        <div className={"col-12 d-flex flex-row flex-wrap justify-content-center"}>
                            {createARowOf4('Ceiling Lighting')}
                        </div>
                    </div>
                </div>
            </div>
            <div className="m-2"></div>
        </div>
    )
        ;
}

export default DiningRoom
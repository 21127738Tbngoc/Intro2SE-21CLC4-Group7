import React, {useState, useEffect, useContext} from 'react';
import '../components/common.css';
import '../components/button/buttons.css';
import '../components/styles/Room.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../components/styles/Shop.css';
import {toast} from 'react-toastify';

import {ShopContext} from '../components/context/ShopContext'

const Bedroom = () => {
    let [Data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const {addToCart} = useContext(ShopContext);
    useEffect(() => {
        document.title = "Bathroom";
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
                if (temp[i].room === 'Bathroom') {
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

    const createARowOf4 = (category) => {
        let row = Data.filter(item => item.categories.includes(category))
        let components = []
        for (let i = 0; i < row.length; i++) {
            if (row[i]) {
                components.push(
                    <div className="card d-flex flex-column p-0 m-2" style={{marginTop: "0"}}>
                        <div className="cardcontent d-flex flex-column gap-4">
                            <img className="card-img-top" src={row[i].thumbnail}/>
                            <div className="card-body d-flex flex-column justify-content-around p-0">
                                <h6 className="card-title" style={{height: "3em"}}>{row[i].name}</h6>
                                <div className="d-flex flex-row justify-content-between">
                                    <p className="card-text p3">{row[i].categories.join(" & ")}</p>
                                    <p className="title2 py-1 product-price">{row[i].price}</p>
                                </div>
                                <div className="justify-content-start">
                                    <img style={{width: "50%", height: "auto"}}
                                         src={`https://res.cloudinary.com/dxsvumas8/image/upload/v1703921412/rating-${Math.round(row[i].rating)}`}/>
                                </div>
                            </div>
                        </div>
                        <div className="product-buttons d-flex flex-row justify-content-between">
                            <div onClick={() => {
                                addToCart(row[i]._id)
                            }} className="product-btn button2 no-right-border">ADD TO CART
                            </div>
                            <a href={`/product/${row[i]._id}`} className="product-btn button2"> VIEW PRODUCT </a>
                        </div>
                    </div>
                )
            }
        }
        if (components.length === 0) {
            components.push
            (
                <div className={"col-12 d-flex flex-row flex-wrap justify-content-center"}>
                    <h3 className="justify-content-center text-center"
                        style={{fontStyle: "italic", color: "gray", alignContent: "center"}}>Coming
                        soon!</h3>
                </div>
            )
        }
        return components;
    };
    const createSection = (title1, _h2, category) => {
        return (
            <div className="container">
                <div className="d-flex justify-content-center">
                    <div className="d-flex flex-column">
                        <div className="title text-center">
                            <div className="title1">
                                {title1}
                            </div>
                            <h2>
                                {_h2}
                            </h2>
                        </div>
                        <div className={"col-12 d-flex flex-row flex-wrap"}>
                            {createARowOf4(category)}
                        </div>
                    </div>
                </div>
            </div>)
    }

    return (
        <div className="container-fluid d-flex flex-column flex-shrink-0 page">
            {/* BREADCRUMB */}
            <ol className="breadcrumb">
                <li><a href="/">HOME</a></li>
                <li className="label"><a href="/shop">SHOP ALL</a></li>
                <li className="button"><a href="/bathroom">BATHROOM</a></li>
            </ol>
            <div className="section row g-4">
                <div className="d-flex flex-row justify-content-around">
                    {/* HERO IMAGE */}
                    <img src="/imgs/shop/bathroom.jpg"
                         style={{"width": "636px", "height": "500px", "object-fit": "cover"}}/>

                    {/* PAGE DESCRIPTION */}
                    <div className="col-12 col-xxl-4 d-flex flex-column">
                        <d3 style={{marginBottom: "0.5em"}}>
                            Bathroom
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
            {createSection('BATH', 'Bath Vanities',  "Bath Vanities")}
            {createSection('STORAGE & SHELF', 'Bath shelf', "Bath Shelf")}
            {createSection('LIGHT', "Wall Lighting", "Wall Lighting")}
            {createSection('DECORATION', "Wall Decorations", "Wall Decorations")}
            <div className="m-2"></div>

        </div>
    )

}

export default Bedroom
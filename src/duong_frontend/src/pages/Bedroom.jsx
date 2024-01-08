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
import {ShopContext} from '../components/context/ShopContext'

const Bedroom = () => {
    let [Data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const {addToCart} = useContext(ShopContext);
    useEffect(() => {
        document.title = "Bedroom";
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
                if (temp[i].room === 'Bedroom') {
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

    const createARowOf4 = (categories) => {
        let row = [];
        for (let i = 0; i < categories.length; i++) {
            row.push(...Data.filter(item => item.categories.includes(categories[i])))
        }
        row = [...new Set(row.map(obj => obj._id))]
            .map(id => {
                return row.find(obj => obj._id === id);
            });

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
        <div className="container-fluid d-flex flex-column flex-shrink-0 page mb-5">
            {/* BREADCRUMB */}
            <ol className="breadcrumb">
                <li className="col-1"></li>
                <li style={{color: "var(--tone-neutral-variant-60)"}}><a href="/">HOME</a></li>
                <li style={{color: "var(--tone-neutral-variant-60)"}}><a href="/shop">SHOP ALL</a></li>
                <li><a href="/bedroom">BEDROOM</a></li>
            </ol>

            <div className="container-fluid">
                <div className="container">
                    <div className="row g-4 d-flex">
                        <div className="col-6">
                            <img src="/imgs/room/bedroom.jpg" alt="bedroom"
                                 style={{width: '100%', height: 'auto'}}/>
                        </div>
                        <div className="col-1"></div>
                        <div className="col-5">
                            <d3>BEDROOM</d3>
                            <p className="p2" style={{
                                marginTop: '48px',
                                marginBottom: '20px',
                                color: 'var(--scheme-on-background)'
                            }}>Quia id omnis aliquid suscipit recusandae similique. Vero natus sed animi reiciendis.
                                Ipsum voluptate Est velit et ex labori osam dolor est inventore quo numquam. Labore
                                voluptas nihil molestiae sint delectus sint sequi voluptatem. Quia id omnis aliquid
                                suscipit recusandae similique. Vero natus sed animi reiciendis. Quia id omnis aliquid
                                suscipit recusandae similique. Vero natus sed animi reiciendis. Ipsum voluptate Est
                                velit et ex labori osam dolor est inventore quo.</p>
                            <p className="p2" style={{marginBottom: '20px', color: 'var(--scheme-on-background)'}}>
                                Labore voluptas nihil molestiae sint delectus sint sequi voluptatem. Quia id omnis
                                aliquid suscipit recusandae similique. Vero natus sed animi reiciendis.
                            </p>
                            <div className="d-flex flex-row gap-4">
                                <div className='flex-column'>
                                    <p className="p2" style={{marginBottom: '20px'}}>Client</p>
                                    <p className="p2" style={{marginBottom: '20px'}}>Location</p>
                                    <p className="p2" style={{marginBottom: '20px'}}>Date</p>
                                    <p className="p2" style={{marginBottom: '20px'}}>Share</p>
                                </div>
                                <div className='flex-column'>
                                    <p className="p2" style={{marginBottom: '20px'}}>Qode Interactive</p>
                                    <p className="p2" style={{marginBottom: '20px'}}>Newyork, US</p>
                                    <p className="p2" style={{marginBottom: '20px'}}>March 14, 2023</p>
                                    <div className="mediaIcon">
                                        <a href="#" class="fa-brands fa-facebook"></a>
                                        <a href="#" class="fa-brands fa-twitter"></a>
                                        <a href="#" class="fa-brands fa-instagram"></a>
                                        <a href="#" class="fa-brands fa-pinterest"></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {createSection('BED', 'Bed & Headboards', ['Bed'])}
            {createSection('STORAGE & SHELF', 'Dressers & Chests', ['Dresser'])}
            {createSection('TABLE LIGHTING & NIGHTSTAND', 'Table lighting & Nightstands', ['Nightstand', 'Table Lighting'])}
            {createSection('BED', 'Children Bed', ['Children Bed'])}
            {createSection('DECORATION', 'Wall Decorations', ['Wall Decorations'])}

        </div>
    )

}

export default Bedroom
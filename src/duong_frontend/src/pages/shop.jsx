import React, { useState, useEffect, } from 'react';
import { ProductCardDark } from "../components/card/card"
import "../components/common.css"
import { toast } from 'react-toastify';

const Shop = () => {

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
      
            console.log(data)
            setProductsData(data);
            setLoading(false);
        } catch (error) {
            toast.error('Error fetching data');
            setLoading(false);
        }
    };

    return (
        <div class="container-fluid" onClick={() => { }}>
            <div class="container">
                <div class="row g-4">
                    {
                        
                        productsData.map((item, i) => {
                            return <ProductCardDark key={i} id={item.id} name={item.name} img={item.img} price={item.price} categories={item.categories} />
                        })

                    }
                </div>
            </div>
        </div>
    );

}

export default Shop
import React, { useState, useEffect, } from 'react';
import { ProductCard } from '../components/card/card';
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
            setProductsData(data);
            setLoading(false);
        } catch (error) {
            toast.error('Error fetching data');
            setLoading(false);
        }
    };


    const createComponents = (data) => {
        const components = [];
        for (let i = 0; i < data.length - 3; i += 3) {
            components.push(
                <div className="container-fluid">
                    <div className="container">
                        <div className="row g-4">
                            <ProductCard key={i} id={data[i].id} name={data[i].name} img={data[i].img} price={data[i].price} categories={data[i].categories} />
                            <ProductCard key={i + 1} id={data[i + 1].id} name={data[i + 1].name} img={data[i + 1].img} price={data[i + 1].price} categories={data[i + 1].categories} />
                            <ProductCard key={i + 2} id={data[i + 2].id} name={data[i + 2].name} img={data[i + 2].img} price={data[i + 2].price} categories={data[i + 2].categories} />
                            <ProductCard key={i + 3} id={data[i + 3].id} name={data[i + 3].name} img={data[i + 3].img} price={data[i + 3].price} categories={data[i + 3].categories} />
                        </div>
                    </div>
                </div>         
            );
        }
        return components;
    };

    return (
        <div class="container-fluid">
            <div class="container">
                {
                    // productsData.map((item, i) => {
                    //     return (
                    //         <ProductCard key={i} id={newData[i].id} name={newData[i].name} img={newData[i].img} price={newData[i].price} categories={newData[i].categories} />

                    //     )
                    // })
                    createComponents(productsData)
                }
            </div>
        </div>
    );

}

export default Shop
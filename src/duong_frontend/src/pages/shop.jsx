import React, { useState, useEffect, } from 'react';
import { ProductCardDark } from "../components/card/card"
import "../components/common.css"
import { toast } from 'react-toastify';

const Shop = () => {

    const [productsData, setProductsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [numProducts, setNumProducts] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response =  fetch('URL_API')
            .then(response => {
            //   Kiểm tra nếu phản hồi không thành công (không có lỗi HTTP 200 OK)
              if (!response.ok) {
                console.log(response)
                throw new Error('Network response was not ok');
              }
            //   Nếu thành công, trả về phản hồi dưới dạng JSON hoặc text
              return response.json(); // Hoặc response.text() nếu phản hồi là text
            })

            if (!response.ok) {
                console.log(response)
                throw new Error('Failed to fetch data');
            }

            const data = response;

            console.log(data);
            setProductsData(data);
            const totalProducts = data.length;
            setNumProducts(totalProducts);
            localStorage.setItem('numProducts', totalProducts);

            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            toast.error('Error fetching data');
            setLoading(false);
        }
    };

    return (
        <div class="container-fluid" onClick={()=> {console.log(productsData)}}>
            <div class="container">
                <div class="row g-4">
                    {
                        productsData.map((item, i) => {
                            return <ProductCardDark key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                        })
                    }
                </div>
             </div>
         </div>
    );

}

export default Shop
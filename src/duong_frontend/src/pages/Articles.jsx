import React, { useState, useEffect } from 'react';
import ProductCard from '../components/card/card';
import '../components/common.css';
import '../components/button/buttons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { toast } from 'react-toastify';


const Articles = () => {
    const Token = localStorage.getItem('Token');
    const [articlesData, setArticlesData] = useState([]);
    const [loading, setLoading] = useState(true);


    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/article/');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
    
            const data = await response.json();
    
            console.log(data); // Thêm dòng này để kiểm tra giá trị của data
    
            if (data && data.length > 0) {
                setArticlesData(data);
            } else {
                console.log('No articles found');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            toast.error('Error fetching data');
            setLoading(false);
        }
    };
    
    useEffect(() => {
        document.title = "Articles";
        window.scrollTo(0, 0);
        fetchData();
    }, []);

    if (!articlesData || articlesData.length ===0) {
        return <div>Loading...</div>; 
    }
    else {
        return (
            <div className="container-fluid d-flex flex-column flex-shrink-0 page">
                {/* BREADCRUMB */}
                <ol className="breadcrumb">
                    <li><a href="#">HOME</a></li>
                    <li className="button"> <a href="#">ARTICLES</a></li>
                </ol>
                <div className="section row g-4 mx-5">
                    <div className="d-flex flex-row justify-content-around gap-5">
                        {/* ARTICLES */}
                        <div className="col col-xxl-7">
                        <div className="d-flex flex-column" style={{ gap: '4rem' }}>
                            {articlesData.map((article) => (
                                <div key={article.id} className="d-flex flex-column justify-content-center gap-2">
                                    <img src={article.thumbnail} alt={article.title} />
                                    <a href="" className="button">
                                        {article.category}
                                    </a>
                                    <h4>{article.title}</h4>
                                    <div className="d-flex flex-row justify-content-between">
                                        <div className="d-flex flex-row gap-2">
                                            <img src="/imgs/avatars/avt-1.svg" width="65px" className="useravt" />
                                            <div className="d-flex flex-column justify-content-around">
                                                <div className="title2">{article.author}</div>
                                                <div className="label3">{article.createdAt}</div>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column justify-content-center">
                                            <a href={`/articles/${article._id}`} className="button">
                                                READ ARTICLE
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        </div>
                        <div className="col col-xxl-5 align-items-center" >
                            <div className="d-flex flex-column" style={{ "gap": "5rem" }}>
                                {/* LATEST POSTS */}
                            <div className="d-flex flex-column gap-3">
                                <div className="title1">LATEST POSTS</div>
                                {articlesData.slice(0, 4).map((latestArticle) => (
                                    <div key={latestArticle.id} className="d-flex flex-row justify-content-between gap-4">
                                        <img
                                            src={latestArticle.thumbnail}
                                            style={{ width: '166px', height: '106px' }}
                                            alt={latestArticle.title}
                                        />
                                        <div className="d-flex flex-column">
                                            <p href="" className="title2">ARCHITECTURE</p>
                                            <div className="d-flex flex-column gap-1">
                                                <div className="title1">{latestArticle.title}</div>
                                                <div className="d-flex flex-row gap-2">
                                                    <img src="/imgs/avatars/avt-1.svg" width="28px" className="useravt" />
                                                    <div className="d-flex flex-row gap-1">
                                                        <div className="label3">{latestArticle.author}</div>
                                                        <div className="label3">{latestArticle.createdAt}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Articles
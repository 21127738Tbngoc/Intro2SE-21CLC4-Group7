import React, { useState, useEffect } from 'react';
import ProductCard from '../components/card/card';
import '../components/common.css';
import '../components/button/buttons.css';
import '../components/styles/ArticleDetail.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';



const ArticleDetail = () => {
    const { articleId } = useParams();
    console.log(articleId);
    const navigate = useNavigate();
    const [article, setArticle] = useState([]);

    const HtmlRenderer = ({ htmlString }) => {
        return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
      };

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/article/find/${articleId}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch article');
                }
                const Article = await response.json();

                setArticle(Article);
                console.log(Article)
            } catch (error) {
                console.error(error);
            }
        };
        fetchArticle();
    }, [articleId]);



    return (
        <div className = "container-fluid d-flex flex-column flex-shrink-0 gap-3" style={{"background": "var(--scheme-background)"}}>
        {/* BREADCRUMB */}
        <ol className="breadcrumb">
            <li className="p"><a href="#">HOME</a></li>
            <li className="label"><a href="#">ARTICLES</a></li>
            <li className="button"> <a href="#">ARTICLE DETAIL</a></li>
        </ol>
        {/* ARTICLE TITLE */}
        <div className = "container-xxl justify-content-center text-center">
            <div className = "row g-4">                
                <d3 className ="text-start">{article.title}</d3>
            </div>
        </div>
        {/* PAGE CONTENT*/}
        <div className = "container-xxl d-flex flex-column m-5 px-4 pagecontent">
            <div className ="row g-4">
                <div className = "d-flex flex-row justify-content-between flex-shrink-0 flex-grow-1">
                    {/* PUBLISH INFORMATION */}
                    <div className = "d-flex flex-row gap-3">
                        <img src = "/imgs/avatars/avt-1.svg" width="65px" className ="useravt"/>
                        <div className = "d-flex flex-column justify-content-center">
                            <div className = "label3">Posted by</div>
                            <div className = "title2">{article.author}</div>
                        </div>
                        <div className = "d-flex flex-column justify-content-center">
                            <div className = "label3">Date posted</div>
                            <div className = "title2">{article.createdAt}</div>
                        </div>  
                    </div>
    
                    {/* MEDIA BUTTONS */}
                    <div className = "d-flex flex-row gap-5">
                        <a href = "#" className="mediaicon fa-brands fa-facebook-f"></a>
                        <a href = "#" className="mediaicon fa-brands fa-twitter"></a>
                        <a href = "#" className="mediaicon fa-brands fa-instagram"></a>
                    </div>
    
                </div>

            </div>

            {/* CONTENT */}
            <div className ="row g-4">
                <div className="col col-xxl-8 offset-xxl-2">
                    <p>
                    <HtmlRenderer htmlString={article.description} />
                    </p>
                </div>
            </div>
            {/* TAGS */}
            <div className ="row g-4">
                <div className="col col-xxl-8 offset-xxl-2 tags">
                    <div className ="d-flex flex-row gap-3">
                        <a href="#" className ="label1 tag">HOME DECOR</a>
                        <a href="#" className ="label1 tag">IDEAS</a>
                        <a href="#" className ="label1 tag">MODERN</a>
                        <a href="#" className ="label1 tag">NEWS</a>

                    </div>
                </div>
            </div>
    </div>
</div>

  );
}

export default ArticleDetail;
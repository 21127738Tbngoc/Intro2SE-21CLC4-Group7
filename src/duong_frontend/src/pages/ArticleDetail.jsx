import React, { useState, useEffect } from 'react';
import ProductCard from '../components/card/card';
import '../components/common.css';
import '../components/button/buttons.css';
import '../components/styles/ArticleDetail.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';



const ArticleDetail = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState([]);
    const [orders, setOrders] = useState([]);


    const Token = localStorage.getItem("Token")
    const userId = localStorage.getItem("userId")

    const handleLogout = () => {
        localStorage.removeItem('Token');
        localStorage.removeItem('userId');
        console.log('Logout successful.');
        navigate('/login/')
    };

    const fetchUserData = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/users/find/${userId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'token': "bearer " + Token
                },
            });

            if (!response.ok) {
                throw new Error('Failed to fetch user data');
            }

            const data = await response.json();
            setUserData(data);
        } catch (error) {
            console.error(error);
        }
    };

    const fetchOrders = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/orders/find/${userId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'token': "bearer " + Token
                },
            });

            if (!response.ok) {
                throw new Error('Failed to fetch orders');
            }

            const ordersData = await response.json();
            console.log(ordersData)
            setOrders(ordersData);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchUserData();
        fetchOrders();
    }, []);



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
                <d3 className ="text-start">The Art of Storytelling: Techniques and Tips for Creative Writing Students</d3>
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
                            <div className = "title2">Oliver Knight</div>
                        </div>
                        <div className = "d-flex flex-column justify-content-center">
                            <div className = "label3">Date posted</div>
                            <div className = "title2">July 14, 2023</div>
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
            {/* HERO IMG*/}
            <div className ="row g-4">
                <img src = "/imgs/articles/blog-big-3.jpg"/>
            </div>
            {/* CONTENT */}
            <div className ="row g-4">
                <div className="col col-xxl-8 offset-xxl-2">
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
                        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
                        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
                        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                    </p>
                </div>
            </div>
            {/* QUOTE */}
            <div className ="row g-4">
                <div className="col col-xxl-8 offset-xxl-2 border-start border-dark border-3 border-success ">
                    <h5 className ="p-4">
                        "Lorem ipsum dolor sit amet, consetetur sadi pscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore erat."
                    </h5>
                </div>
            </div>
            {/* CONTENT */}
            <div className ="row g-4">
                <div className="col col-xxl-8 offset-xxl-2">
                    <p className="p1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at convallis lorem. Nulla eu tincidunt magna, sed porta erat. Nullam turpis justo, cursus vel tempor id, consequat quis leo. 
                        Morbi sagittis viverra est et auctor. Aenean nibh dui, blandit eget molestie ut, ultricies nec libero. Praesent scelerisque turpis ac augue rhoncus ultricies. Suspendisse potenti. 
                        Curabitur sed placerat magna. Morbi rutrum fringilla dapibus. Ut pulvinar ac augue a dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                        Etiam dignissim, dui eget dapibus malesuada, ante risus iaculis nunc, ut tristique dui ex a ante. Vivamus nisl enim, dapibus id elit in, iaculis lobortis nisi. Suspendisse at enim dolor.
                    </p>
                </div>
            </div>
            {/* CONTENT */}
            <div className ="row g-4">
                <div className = "d-flex flex-row justify-content-between gap-4">
                    <div >
                        <img src = "/imgs/articles/blog-masonry-1.jpg" style={{"width": "636px", "height": "328px", "object-fit": "cover", "margin-bottom":"3rem"}}/>
                        <h5 className ="offset-xxl-4">
                            Labore volup tas nihil molest iae sint delectus sint sequi vol up tatem. Quia id omnis aliq uid sus cipit recusandae simi lique vero natus.
                        </h5>
                    </div>
                    <div>
                        <img src = "/imgs/articles/blog-masonry-1.jpg" style={{"width": "636px", "height": "328px", "object-fit": "cover", "margin-bottom":"3rem"}}/>
                        <p className ="p1 col-xxl-8">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
                            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr. 
                        </p>
                    </div>
                </div>
            </div>
            {/* CONTENT */}
            <div className ="row g-4">
                <div className="col col-xxl-8 offset-xxl-2">
                    <p className="p1">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                        At vero eos et lorem dolor null accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
                        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
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
            {/* AUTHOR */}
            <div className ="row g-4">
                <div className="col col-xxl-8 offset-xxl-2">
                    <div className ="d-flex flex-row gap-4">
                        <div>
                            <img src = "/imgs/avatars/avt-1.svg"/>
                        </div>
                        <div className = "d-flex flex-column justify-content-center gap-3">
                            <h5>HANS J.WEGNER</h5>
                            <p className="p1">Quia id omnis aliquid suscipit recusandae similique. Vero natus sed animi reiciendis. Ipsum voluptate Est velit et ex labori osam dolor est inventore quo numquam. Labore voluptas nihil molestiae sint delectus sint sequi voluptatem.</p>
                            {/* MEDIA BUTTONS */}
                            <div className = "d-flex flex-row gap-5">
                                <a href = "#" className="fa-brands fa-facebook-f" style={{"font-size": "24px", "color":"black"}}></a>
                                <a href = "#" className="fa-brands fa-twitter" style={{"font-size": "24px", "color":"black"}}></a>
                                <a href = "#" className="fa-brands fa-instagram" style={{"font-size": "24px", "color":"black"}}></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</div>

  );
}

export default ArticleDetail;
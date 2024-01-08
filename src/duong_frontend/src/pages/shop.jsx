import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import ProductCard from '../components/card/card';
import { Link, useNavigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../components/button/buttons.css';
import '../components/common.css';
import '../components/styles/Shop.css';

const Shop = () => {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState([]);

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

  const handleCategoryChange = (category) => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category];

    setSelectedCategories(updatedCategories);
  };

  const filterProducts = (data) => {
    if (selectedCategories.length === 0) {
      return data;
    }

    return data.filter((product) =>
    selectedCategories.some((category) => product.categories.includes(category))
  );
  
  };

  const createComponents = (data) => {
    const filteredData = filterProducts(data);

    const components = [];
    for (let i = 0; i < filteredData.length - 3; i += 3) {
      components.push(
        <div className="row g-4">
          <ProductCard
            key={i}
            id={filteredData[i]._id}
            name={filteredData[i].name}
            thumbnail={filteredData[i].thumbnail}
            img={filteredData[i].img}
            price={filteredData[i].price}
            categories={filteredData[i].categories}
            rating = {filteredData[i].rating}
          />
          <ProductCard
            key={i + 1}
            id={filteredData[i + 1]._id}
            name={filteredData[i + 1].name}
            thumbnail={filteredData[i + 1].thumbnail}
            img={filteredData[i + 1].img}
            price={filteredData[i + 1].price}
            categories={filteredData[i + 1].categories}
            rating = {filteredData[i+1].rating}
          />
          <ProductCard
            key={i + 2}
            id={filteredData[i + 2]._id}
            name={filteredData[i + 2].name}
            thumbnail={filteredData[i + 2].thumbnail}
            img={filteredData[i + 2].img}
            price={filteredData[i + 2].price}
            categories={filteredData[i + 2].categories}
            rating = {filteredData[i+2].rating}
          />
        </div>
      );
    }
    return components;
  };
  const categoryData = [
    { value: "Sofa", id: 'check1', name: 'SOFA & BENCH' },
    { value: 'Chair', id: 'check2', name: 'ACCENT CHAIR' },
    { value: 'Table', id: 'check3', name: 'ACCENT TABLE' },
    { value: 'Media', id: 'check4', name: 'TV STAND & MEDIA CONSOLE' },
    { value: 'Bed', id: 'check5', name: 'BED & HEADBOARD' },
    { value: 'Children Bed', id: 'check6', name: 'CHILDREN BED' },
    { value: 'Nightstand', id: 'check7', name: 'NIGHTSTAND & DRESSER' },
    { value: 'Dining Table', id: 'check8', name: 'DINING TABLE' },
    { value: 'Dining Chair', id: 'check9', name: 'DINING CHAIR' },
    { value: 'Shelf', id: 'check10', name: 'SHELF & CARBINET' },
    { value: 'Bath Vanities', id: 'check11', name: 'BATH VANITIES' },
    { value: 'Bath Hardware', id: 'check12', name: 'BATH HARDWARE' },
    { value: 'Ceiling Lighting', id: 'check13', name: 'CEILING LIGHTING' },
    { value: 'Table Lighting', id: 'check14', name: 'TABLE LIGHTING' },
    { value: 'Wall Lighting', id: 'check15', name: 'WALL LIGHTING' },
    { value: 'Floor Lighting', id: 'check16', name: 'FLOOR LIGHTING' },
    { value: 'Wall Decor', id: 'check17', name: 'WALL DECORATION' },
  ];
  
return (
    <div>
        {/* Breadcrumb */}
  
        {/* Page name */}
        <div className="container-fluid justify-content-center text-center">
            <d3 className="page-name">SHOP ALL</d3>
        </div>

        {/* New arrivals */}
        <div className="container-fluid banner-container">
            <div className="banner-wrapper">
                <img src="/imgs/shop/new-arrivals.jpg" class="banner" />
                <video src="/imgs/shop/new-arrivals.mp4" className="banner-video" autoPlay loop muted></video>
                <div className="banner-text">NEW ARRIVALS</div>
            </div>
        </div>

        {/* Shop by room */}
        <div className="container-fluid justify-content-center category">
            <p className="title1 shop-title">SHOP BY ROOM</p>
            <h2 className="shop-headline">Furniture by Rooms</h2>
            {/* Living room */}
            <div className="category-section justify-content-center">
                <Link to="/livingroom" className="livingroom-link">
                    <p className="living-room">LIVING ROOM</p>
                    <img src="/imgs/shop/livingroom.jpg" alt="Living Room" className="living-img" />
                </Link>
            </div>
            {/* Bedroom */}
            <div className="category-section justify-content-center">
                <Link to="/bedroom" className="bedroom-link">
                    <p className="bed-room">BEDROOM</p>
                    <img src="/imgs/shop/bedroom.jpg" alt="Bedroom" className="bed-img" />
                </Link>
            </div>
            {/* Dining room */}
            <div className="category-section justify-content-center">
                <Link to="/diningroom" className="diningroom-link">
                    <p className="dining-room">DINING ROOM</p>
                    <img src="/imgs/shop/diningroom.jpg" alt="Dining Room" className="dining-img" />
                </Link>
            </div>
            {/* Bathroom */}
            <div className="category-section justify-content-center">
                <Link to="/bathroom" className="bathroom-link">
                    <p className="bath-room">BATHROOM</p>
                    <img src="/imgs/shop/bathroom.jpg" alt="Bathroom" className="bath-img" />
                </Link>
            </div>
        </div>

        {/* All products */}
        <div className="container-fluid justify-content-center">
            <p class="title1 shop-title">SHOP ALL</p>
            <h2 class="shop-headline">All Products</h2>
            <div className="container">
                <div className="row g-4">
                    {/* Product filter */}
                    <div className="col-3">
                        <div className="product-filter">
                        <h5 className="mb-4" style={{ marginTop: '3em' }}>CATEGORIES</h5>
                        {/* Add event handlers for checkbox changes */}
                        {categoryData.map((category) => (
                            <div className="form-check" key={category.value}>
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id={category.id}
                                    name={category.name}
                                    value={category.value}
                                    checked={selectedCategories.includes(category.value)}
                                    onChange={() => handleCategoryChange(category.value)}
                                />
                                <label className="form-check-label p1" for={category.id}>
                                    {category.name}
                                </label>
                            </div>
                      ))}
                      <h5 className="mt-5 mb-4">TAGS</h5>
                      <h5 className="mt-5 mb-4">PRICE RANGE</h5>
                      <h5 className="mt-5 mb-4">RATING</h5>
                    </div>
                    </div>
      
                    {/* Product cards */}
                    <div className="col-9">{createComponents(productsData)}</div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Shop;

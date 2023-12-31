import React, { useState, useEffect } from 'react';
import ProductCard from '../components/card/card';
import '../components/common.css';
import { toast } from 'react-toastify';

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
        <div class="row g-4">
          <ProductCard
            key={i}
            id={filteredData[i]._id}
            name={filteredData[i].name}
            thumbnail={filteredData[i].thumbnail}
            img={filteredData[i].img}
            price={filteredData[i].price}
            categories={filteredData[i].categories}
          />
          <ProductCard
            key={i + 1}
            id={filteredData[i + 1]._id}
            name={filteredData[i + 1].name}
            thumbnail={filteredData[i + 1].thumbnail}
            img={filteredData[i + 1].img}
            price={filteredData[i + 1].price}
            categories={filteredData[i + 1].categories}
          />
          <ProductCard
            key={i + 2}
            id={filteredData[i + 2]._id}
            name={filteredData[i + 2].name}
            thumbnail={filteredData[i + 2].thumbnail}
            img={filteredData[i + 2].img}
            price={filteredData[i + 2].price}
            categories={filteredData[i + 2].categories}
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
    <div class="container-fluid">
      <div class="container">
        <div class="row">
          {/* Product filter */}
          <div class="col-3">
            <div class="product-filter">
              <h5 class="mb-4">CATEGORIES</h5>
              {/* Add event handlers for checkbox changes */}
              {categoryData.map((category) => (
                <div class="form-check" key={category.value}>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id={category.id}
                    name={category.name}
                    value={category.value}
                    checked={selectedCategories.includes(category.value)}
                    onChange={() => 
                        handleCategoryChange(category.value)}
                  />
                  <label class="form-check-label p1" for={category.id}>
                    {category.name}
                  </label>
                </div>
              ))}
              <h5 class="mt-5 mb-4">TAGS</h5>
            </div>
          </div>
  
          {/* Product cards */}
          <div class="col-9">{createComponents(productsData)}</div>
        </div>
      </div>
    </div>
  );
};

export default Shop;

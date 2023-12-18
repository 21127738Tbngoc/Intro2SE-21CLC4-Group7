import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { toast } from 'react-toastify';




const Token = localStorage.getItem("Token")



export const AllProducts = () => {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/products/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Add your token here if needed
          // 'Authorization': 'Bearer YOUR_TOKEN',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();
      setProductsData(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      toast.error('Error fetching data');
      setLoading(false);
    }
  };




  const deleteProduct = async (id) => {
    try {
      console.log(id);
      const response = await fetch(`http://localhost:5000/api/products/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          token: " bearer " + Token
        },
      });

      if (!response.ok) {
        throw new Error('Failed to delete product');
      }

      toast.success('Deleted');
      fetchData(); // Fetch data again after deletion
      window.location.reload();
    } catch (error) {
      console.error('Error deleting product:', error);
      toast.error('Error deleting product');
    }
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            {loading ? (
              <h4 className='pt-4'>Loading......</h4>
            ) : (
              <table className='table'>
                <thead>
                  <tr className='tuble'>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Desc</th>
                    <th>Price</th>
                    <th>Tags</th>
                    <th>Categories</th>
                    <th>Size</th>
                    <th>Color</th>
                    <th>Pattern</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {productsData.map((data, index) => (
                    <tr className='table' key={index}>
                      <td>
                        <img src={data.img} alt='product' style={{ width: '50px', height: '50px' }} />                      
                      </td>
                      <td>{data.name}</td>
                      <td>{data.desc}</td>
                      <td>{data.price}</td>
                      <td>{data.tags}</td>
                      <td>{data.categories}</td>
                      <td>{data.size}</td>
                      <td>{data.color}</td>
                      <td>{data.pattern}</td>
                      <td>
                        <button
                          className='btn btn-danger'
                          onClick={() => {
                            deleteProduct(data._id);
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

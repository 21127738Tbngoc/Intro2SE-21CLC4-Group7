import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../styles/Dashboard.css';


const Dashboard = () => {
  const Token = localStorage.getItem("Token")
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalArticle, setTotalArticle] = useState(0);
  const [numUser, setnumUser] = useState(0);
  const [ordersData, setOrdersData] = useState([]);
  const [incomeData, setIncomeData] = useState([]);


    const getCurrentMonth = () => {
      const currentDate = new Date();
      const currentMonth = currentDate.getMonth() + 1; // Tháng trong JavaScript bắt đầu từ 0
      return currentMonth;
    };


  useEffect(() => {
    const fetchData = async () => {
      // Fetch total products in real-time
      try {
        const responseProduct = await fetch('http://localhost:5000/api/products/');
        const responseUser = await fetch('http://localhost:5000/api/users/', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            token: " bearer " + Token
          },
        });
        const responseArticle = await fetch('http://localhost:5000/api/article/');
        const responseOrder = await fetch('http://localhost:5000/api/orders', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            token: " bearer " + Token
          },
        });
        const responseIncome = await fetch('http://localhost:5000/api/orders/income/', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            token: " bearer " + Token
          },
        });







        if (!responseIncome.ok) {
          throw new Error('Failed to fetch data');
        }
        if (!responseOrder.ok) {
          throw new Error('Failed to fetch data');
        }
        if (!responseProduct.ok) {
          throw new Error('Failed to fetch data');
        }

        if (!responseUser.ok) {
          throw new Error('Failed to fetch user data');
        }
        if (!responseArticle.ok) {
          throw new Error('Failed to fetch data');
        }





        const dataUser = await responseUser.json();
        setnumUser(dataUser.length);

        const dataProduct = await responseProduct.json();
        setTotalProducts(dataProduct.length);

        const dataArticle = await responseArticle.json();
        setTotalArticle(dataArticle.length);

        const dataOrder = await responseOrder.json();
        setOrdersData(dataOrder.length);

        const dataIncome = await responseIncome.json();
        const thisMonth=getCurrentMonth()
        setIncomeData(dataIncome[thisMonth].total)
        console.log(incomeData)




      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Fetch data initially
    fetchData();

    // Set up interval to fetch data every 5 minutes (adjust as needed)
    const intervalId = setInterval(fetchData, 5 * 60 * 1000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <section>
          <a href="http://localhost:3000/dashboard/add-articles" target="_self" rel="noopener noreferrer">
            <button>Add Article</button>
          </a>        
          
          <a href="http://localhost:3000/dashboard/add-products" target="_self" rel="noopener noreferrer">
            <button>Add Product</button>
          </a>   
          
          <a href="http://localhost:3000/dashboard/all-products" target="_self" rel="noopener noreferrer">
            <button>Manage Products</button>
          </a>   
          
          <a href="http://localhost:3000/dashboard/all-orders" target="_self" rel="noopener noreferrer">
            <button>Manage Orders</button>
          </a>   
          
          <a href="http://localhost:3000/dashboard/all-articles" target="_self" rel="noopener noreferrer">
            <button>Manage Articles</button>
          </a>   
          
          <a href="https://www.example.com" target="_self" rel="noopener noreferrer">
            <button>Manage Contact</button>
          </a>   
          
          <a href="http://localhost:3000/dashboard/user" target="_self" rel="noopener noreferrer">
            <button>Manage Users</button>
          </a>   
        <Container>
          <Row>
            <Col lg='3' md='4'>
              <div className='revenue__box mb-4'>
                <h5>This month income</h5>
                <h3>${incomeData}</h3>
              </div>
            </Col>
            <Col lg='3' md='4'>
              <div className='orders__box mb-4'>
                <h5>Total Orders</h5>
                <h3>{ordersData}</h3>
              </div>
            </Col>
            <Col lg='3' md='4'>
              <div className='products__box mb-4'>
                <h5>Total Products</h5>
                <h3>{totalProducts}</h3>
              </div>
            </Col>

            <Col lg='3' md='4'>
              <div className='products__box mb-4'>
                <h5>Total Articles</h5>
                <h3>{totalArticle}</h3>
              </div>
            </Col>

            <Col lg='3' md='4'>
              <div className='users__box mb-4'>
                <h5>Total Users</h5>
                <h3>{numUser}</h3>
              </div>
            </Col>
          </Row>

          
          

          
          
          
          </Container>

      </section>
    </>
  );
};

export default Dashboard;

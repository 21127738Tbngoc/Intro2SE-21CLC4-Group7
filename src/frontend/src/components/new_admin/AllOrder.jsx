import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Modal, ModalHeader, ModalBody, FormGroup, Label, Input } from 'reactstrap';
import { toast } from 'react-toastify';



export const AllOrder = () => {
  const Token = localStorage.getItem('Token');
  const [ordersData, setOrdersData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [numOrders, setNumOrders] = useState(0);

  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editedOrder, setEditedOrder] = useState({});

  const [modifiedOrderStatus, setModifiedOrderStatus] = useState({ orderId: '', status: '' });


  useEffect(() => {
    window.scrollTo(0, 0);
    fetchData();
  }, []);

  const handleStatusChange = (orderId, newStatus) => {
    setModifiedOrderStatus({ orderId, status: newStatus });
    updateOrderStatus(orderId, newStatus)
  };

  const updateOrderStatus = async (orderId, newStatus) => {
    try {
      const headers = {
        'Content-Type': 'application/json',
        token: ' bearer ' + Token,
      };

      const response = await fetch(`http://localhost:5000/api/orders/${orderId}`, {
        method: 'PUT',
        headers,
        body: JSON.stringify({ status: newStatus }),
      });

      if (!response.ok) {
        throw new Error('Failed to update order status');
      }

      toast.success('Order status updated');
      fetchData();
    } catch (error) {
      console.error('Error updating order status:', error);
      toast.error('Error updating order status');
    }
  };



  const fetchData = async () => {
    try {
      const headers = {
        token: ' bearer ' + Token,
      };

      const response = await fetch('http://localhost:5000/api/orders', { headers });

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();

      console.log(data);
      setOrdersData(data);
      const totalOrders = data.length;
      setNumOrders(totalOrders);
      localStorage.setItem('numOrders', totalOrders);

      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      toast.error('Error fetching data');
      setLoading(false);
    }
  };

  const cancelOrder = async (orderId) => {
    try {
      const headers = {
        'Content-Type': 'application/json',
        token: ' bearer ' + Token,
      };

      const response = await fetch(`http://localhost:5000/api/orders/${orderId}`, {
        method: 'DELETE',
        headers,
      });

      if (!response.ok) {
        throw new Error('Failed to cancel order');
      }

      toast.success('Order canceled');
      fetchData();
    } catch (error) {
      console.error('Error canceling order:', error);
      toast.error('Error canceling order');
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
              <>
                <table className='table'>
                  <thead>
                    <tr className='tuble'>
                      <th>User ID</th>
                      <th>Phone</th>
                      <th>Email</th>
                      <th>Products</th>
                      <th>Subtotal</th>
                      <th>Address</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ordersData.map((data, index) => (
                      <tr className='table' key={index}>
                        <td>{data.userId}</td>
                        <td>{data.phone}</td>
                        <td>{data.email}</td>
                        <td>
                          <ul>
                            {data.products.map((product, productIndex) => (
                              <li key={productIndex}>
                                Product ID: {product.productId}, Quantity: {product.quantity}
                              </li>
                            ))}
                          </ul>
                        </td>
                        <td>{data.subtotal}</td>
                        <td>{data.address}</td>
                        <td>
                        <FormGroup>
                            <Input
                              type="select"
                              value={data.status}
                              onChange={(e) => handleStatusChange(data._id, e.target.value)}
                            >
                              <option value="PREPARING TO SHIP">PREPARING TO SHIP</option>
                              <option value="IN TRANSIT">IN TRANSIT</option>
                              <option value="DELIVERED">DELIVERED</option>
                              <option value="CANCELED">CANCELED</option>
                            </Input>
                          </FormGroup>
                        </td>
                        <td>
                          <button
                            className='btn btn-danger'
                            onClick={() => {
                              cancelOrder(data._id);
                            }}
                          >
                            DELETE ORDER
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};
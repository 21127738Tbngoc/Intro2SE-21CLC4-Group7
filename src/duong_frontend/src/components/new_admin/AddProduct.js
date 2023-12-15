import React, { useState} from 'react'
import { Container, Row, Col, FormGroup } from 'reactstrap';
import {toast} from "react-toastify"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddProduct = () => {
  const navigate=useNavigate();
  const [loading,setLoading]=useState(false)

  const [image,setimage]=useState(null);
  const [name,setname]=useState('');
  const [description,setdescription]=useState('');
  const [price,setprice]=useState('');
  const [category,setcategory]=useState('');
  const [brand,setbrand]=useState('');
  const [size,setsize]=useState('');
  const [color,setcolor]=useState('');
  const [pattern,setpattern]=useState('');



  
  const [api_key] = useState("739115358895497");
  const [cloud_name] = useState("dxsvumas8");
  const [photoDataArray, setPhotoDataArray] = useState([]);
  
  const AddProductHandler=async (e)=>{
    setLoading(true);
    e.preventDefault();

    try {

      
      // Upload image to Cloudinary
      const signatureResponse = await axios.get("http://localhost:5000/get-signature");
      const files = document.querySelector("#file-field").files;
      console.log(files);
      // Check if there are files to upload
      if (files.length === 0) {
        console.log("No files selected for upload");
        return;
      }

      const newPhotoDataArray = [];

      for (const file of files) {
        const data = new FormData();
        data.append("file", file);
        data.append("api_key", api_key);
        data.append("signature", signatureResponse.data.signature);
        data.append("timestamp", signatureResponse.data.timestamp);

        const cloudinaryResponse = await axios.post(
          `https://api.cloudinary.com/v1_1/${cloud_name}/auto/upload`,
          data,
          {
            headers: { "Content-Type": "multipart/form-data" },
            onUploadProgress: function (e) {
              console.log(e.loaded / e.total);
            },
          }
        );

        const photoData = {
          public_id: cloudinaryResponse.data.public_id,
          version: cloudinaryResponse.data.version,
          signature: cloudinaryResponse.data.signature,
        };

        newPhotoDataArray.push(photoData);
      }

      setPhotoDataArray(newPhotoDataArray);

      // send the array of image info back to our server
      await axios.post("http://localhost:5000/do-something-with-photos", { photos: newPhotoDataArray });
      console.log("Photos uploaded successfully");

      const cloudinaryImageUrl = newPhotoDataArray;




      function generateImageURL(publicId) {
        return `https://res.cloudinary.com/${cloud_name}/image/upload/${publicId}.jpg`;
      }
      
      // Save product info to MongoDB
      const productData = {
        name,
        desc: description,
        category,
        price,
        img: newPhotoDataArray.map(item => generateImageURL(item.public_id)),
        brand,
        size,
        color,
        pattern,
      };
      console.log(productData);

      const headers = {
        token: " bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NjZmOGMzYTU1NzVkZjI3NTdiMzMzYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwMjQ1ODAyNSwiZXhwIjoxNzAyNzE3MjI1fQ.HAlCWuQq_b0tVEQTKR9aavZnZiLVjtqteBpsSX1EyyE"
      };


      const mongoResponse = await axios.post('http://localhost:5000/api/products/', productData, { headers });









      setLoading(false);
      toast('🦄 Wow so easy!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      //navigate('/dashboard/all-products');
      
    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    }

  }
  return (
<section>
  <Container>
    <Row>
      <Col lg="12">
        <h4 className='mb-5'>Add Product</h4>
         <form onSubmit={AddProductHandler}>
            <FormGroup className='form__group'>
              <span>Product Name</span>
              <input type="text" placeholder='Double Sofa' onChange={(e)=>(setname(e.target.value))} required />
            </FormGroup>
            <FormGroup className='form__group'>
              <span>Description</span>
              <input type="text" placeholder='Description' onChange={(e)=>(setdescription(e.target.value))} required/>
            </FormGroup>
            <div className='d-flex align-items-center justify-content-between gap-5'>
            <FormGroup className='form__group w-50'>
              <span>Price</span>
              <input type="number" placeholder='$100'onChange={(e)=>(setprice(e.target.value))} required/>
            </FormGroup>
            <FormGroup className='form__group w-50 '>
              <span>Category</span>
              <select className='w-100 p-2'onChange={(e)=>(setcategory(e.target.value))} required>
                <option>Select Category</option>
                <option value="sofa">Sofa</option>
                <option value="chair">Chair</option>
                <option value="table">Table</option>
                <option value="khong biet category gi nua ...">khong biet category gi nua ...</option>
                </select>
            </FormGroup>
            </div>

            <div>
            <FormGroup className='form__group'>
              <span>Product Image</span>
              <input type="file"  id='file-field' onChange={(e)=>{setimage(e.target.files[0])}} multiple  required/>
            </FormGroup>
            </div>
            <FormGroup className='form__group w-50'>
              <span>Brand</span>
              <input type="text" placeholder='$100'onChange={(e)=>(setbrand(e.target.value))} required/>
            </FormGroup>

            <FormGroup className='form__group w-50'>
              <span>Size</span>
              <input type="text" placeholder='XL'onChange={(e)=>(setsize(e.target.value))} required/>
            </FormGroup>

            <FormGroup className='form__group w-50'>
              <span>Color</span>
              <input type="color" onChange={(e)=>(setcolor(e.target.value))} required/>
            </FormGroup>

            <FormGroup className='form__group w-50'>
              <span>Pattern</span>
              <input type="text" placeholder='none'onChange={(e)=>(setpattern(e.target.value))} required/>
            </FormGroup>

            <button type="submit" onClick={AddProductHandler} className='buy__btn text-white'>Add Product</button>
          </form>
      </Col>
    </Row>
  </Container>
</section>
  )
}

export {AddProduct};
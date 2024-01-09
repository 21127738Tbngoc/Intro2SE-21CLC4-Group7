import React, { useState } from 'react';
import { Container, Row, Col, FormGroup } from 'reactstrap';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ReactQuill from 'react-quill';  // Import ReactQuill

import 'react-quill/dist/quill.snow.css';  // Import styles for ReactQuill

const AddArticle = () => {

  const [api_key] = useState("739115358895497");
  const [cloud_name] = useState("dxsvumas8");
  const [photoDataArray, setPhotoDataArray] = useState([]);



  const [image, setimage] = useState(null);
  const Token = localStorage.getItem('Token');
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [subtitle, setSubtitle] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');

  const AddArticleHandler = async (e) => {
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




      const articleData = {
        subtitle,
        title,
        author,
        description,
        thumbnail: newPhotoDataArray.length > 0 ? generateImageURL(newPhotoDataArray[0].public_id) : null,
      };


      const headers = {
        token: ' bearer ' + Token,
      };

      const response = await axios.post('http://localhost:5000/api/article/', articleData, { headers });


      setLoading(false);
      toast.success('Article added successfully!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });


    } catch (err) {
      toast.error(err.message || 'Error adding article');
      setLoading(false);
    }
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <h4 className="mb-5">Add Article</h4>
            <form onSubmit={AddArticleHandler}>
              {/* Update form fields for article information */}
              <FormGroup className="form__group">
                <span>Subtitle</span>
                <input type="text" placeholder="Subtitle" onChange={(e) => setSubtitle(e.target.value)} required />
              </FormGroup>
              <FormGroup className="form__group">
                <span>Title</span>
                <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} required />
              </FormGroup>
              <FormGroup className="form__group">
                <span>Author</span>
                <input type="text" placeholder="Author" onChange={(e) => setAuthor(e.target.value)} required />
              </FormGroup>

                <FormGroup className='form__group'>
                  <span>Thumbnail Image</span>
                  <input type="file" id='file-field' onChange={(e) => { setimage(e.target.files[0]) }}  />
                </FormGroup>

              <FormGroup className="form__group">
                <span>Description</span>
                {/* Use ReactQuill for rich text editing */}
                <ReactQuill
                  value={description}
                  onChange={(value) => setDescription(value)}
                  theme="snow"
                  modules={{
                    toolbar: [
                      [{ header: [1, 2, false] }],
                      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                      [{ list: 'ordered' }, { list: 'bullet' }],
                      ['link', 'image'],
                      ['clean'],
                    ],
                  }}
                />
              </FormGroup>

              <button type="submit" className="buy__btn text-white">
                Add Article
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export { AddArticle };

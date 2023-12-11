import React, { useState } from 'react';
import axios from 'axios';

const Admin = () => {
  const [api_key] = useState("739115358895497");
  const [cloud_name] = useState("dxsvumas8");
  const [photoDataArray, setPhotoDataArray] = useState([]);

  const handleUpload = async (e) => {
    e.preventDefault();

    try {
      const signatureResponse = await axios.get("/get-signature");
      const files = document.querySelector("#file-field").files;

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
      await axios.post("/do-something-with-photos", { photos: newPhotoDataArray });
      console.log("Photos uploaded successfully");
    } catch (error) {
      console.error("Error uploading photos:", error);
    }
  };

  return (
    <div>
      <form id="upload-form" onSubmit={handleUpload}>
        <input type="file" id="file-field" multiple />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default Admin;

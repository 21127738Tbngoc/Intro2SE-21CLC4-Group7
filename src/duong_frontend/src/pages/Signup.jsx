import React, { useEffect, useState } from 'react';
import { Helmet } from '../components/helmet/Helmet';
import { Container, Row, Col, FormGroup } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../components/button/buttons.css';
import '../components/common.css';
import '../components/navbar/navbar.css';


const Signup = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [password, setPassword] = useState('');
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);

    const api_key = useState("739115358895497");
    const cloud_name = useState("dxsvumas8");

    const SignUpHandler = async (e) => {
        setLoading(true);
        e.preventDefault();

        try {

            // Upload image to Cloudinary
            const signatureResponse = await axios.get("http://localhost:5000/get-signature");
            const files = document.querySelector("#file-field").files;
            // Check if there are files to upload
            if (files.length === 0) {
                console.log("No files selected for upload");
                return;
            }

            const data = new FormData();
            data.append("file", files[0]);
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

        }
    

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
            categories,
            tags,
            price,
            img: newPhotoDataArray.map(item => generateImageURL(item.public_id)),
            brand,
            qty,
            color,
            pattern,
        };
        console.log(productData);

        const headers = {
            token: " bearer " + Token
        };


        const mongoResponse = await axios.post('http://localhost:5000/api/products/', productData, { headers });

        setLoading(false);

        //navigate('/dashboard/all-products');

    } catch (err) {
        toast.error(err.message);
        setLoading(false);
    }

    setLoading(true);
    const signupData = {
        username,
        fullname,
        email,
        phone,
        address,
        image,
        password,
    };

    try {
        const response = await axios.post('http://localhost:5000/api/auth/signup/', signupData);

        const token = response.data.accessToken;
        localStorage.setItem('Token', token);

        console.log(token);

        setLoading(false);
        toast.success('Successfully logged in');
        navigate('/home');
    } catch (error) {
        setLoading(false);
        toast.error(error.message || 'Signup failed');
    }
};

return (
    // Signup
    <div className="container-fluid d-flex">
        <img src="/imgs/signup/Img.jpg" className="modal-img" alt="signup-img" />
        <div className="container">
            <div className="modal-content-signup">
                <h3 className="mb-5">Sign Up</h3>
                <form>
                    <div className="form-row">
                        {/* Username */}
                        <div className="col mb-3">
                            <label for="userName" className="form-label label1">
                                Username
                            </label>
                            <div className="input-with-icon">
                                <img src="/imgs/signup/id.svg" alt="userName" className="leading-icon" />
                                <input
                                    type="text"
                                    placeholder="Enter your username"
                                    className="form-control form-md-icon"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        {/* Full name */}
                        <div className="col mb-3">
                            <label for="fullName" className="form-label label1">
                                Full name
                            </label>
                            <div className="input-with-icon">
                                <img src="/imgs/signup/user.svg" alt="fullName" className="leading-icon" />
                                <input
                                    type="text"
                                    placeholder="Enter your full name"
                                    className="form-control form-md-icon"
                                    value={fullname}
                                    onChange={(e) => setFullname(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        {/* Email */}
                        <div className="col mb-3">
                            <label for="userName" className="form-label label1">
                                Email
                            </label>
                            <div className="input-with-icon">
                                <img src="/imgs/signup/email.svg" alt="email" className="leading-icon" />
                                <input
                                    type="text"
                                    placeholder="user@example.com"
                                    className="form-control form-md-icon"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        {/* Phone */}
                        <div className="col mb-3">
                            <label for="phoneNum" className="form-label label1">
                                Phone
                            </label>
                            <div className="input-with-icon">
                                <img src="/imgs/signup/phone.svg" alt="phoneNum" className="leading-icon" />
                                <input
                                    type="text"
                                    placeholder="XXX XXX XXXX"
                                    className="form-control form-md-icon"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    {/* Password */}
                    <div className="mb-3">
                        <label for="password" className="form-label label1">
                            Password
                        </label>
                        <div className="input-with-icon">
                            <img src="/imgs/signup/lock.svg" alt="password" className="leading-icon" />
                            <input
                                type="password"
                                className="form-control form-md-icon"
                                placeholder="•••••••••••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <img src="/imgs/signup/eye-open.svg" alt="password" className="trailing-icon" />
                        </div>
                    </div>

                    {/* Address */}
                    <div className="mb-3">
                        <label for="address" className="form-label label1">
                            Address
                        </label>
                        <div className="input-with-icon">
                            <img src="/imgs/signup/address.svg" alt="address" className="leading-icon" />
                            <input
                                type="text"
                                className="form-control form-md-icon"
                                placeholder="123 Street, Ward, District, City, Country"
                                value={address}
                                onChange={(e) => setImage(e.files[0])}
                                required
                            />
                        </div>

                        <p className="signup-link">
                            Already have an account? <Link to="/login" className="slide-border">Sign in</Link> here!
                        </p>
                    </div>
                    {/* Avatar */}
                    <div className="file-input-container mt-4">
                        <div className="file-input">
                            <input
                                type="file"
                                id="formFile"
                                className="form-control form-md"
                                value={avatar}
                                onChange={(e) => setAvatar(e.target.value)}
                            />
                            <label for="formFile" className="file-button sec-btn btn-md button2">BROWSE FILE</label>
                        </div>
                    </div>
                </form>
                <button onClick={signupHandler} className="prim-btn btn-md signup-btn w-100">
                    SIGN UP
                </button>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="check1" name="option1" value="something" />
                    <label className="form-check-label p1">I Agree to the Terms & Conditions</label>
                </div>
            </div>
        </div>
    </div>
)
};

export default Signup;

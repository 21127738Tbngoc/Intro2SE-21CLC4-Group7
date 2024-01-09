import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {Link, useNavigate} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../components/button/buttons.css';
import '../components/common.css';
import '../components/styles/UserProfile.css';
import {toast} from "react-toastify";
import axios from "axios";

const UserProfile = () => {

    const [editable, setEditable] = useState(false);
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState({
            username: '',
            name: '',
            email: '',
            phone: '',
            address: '',
            avatar: '',
            password: '',
            district: '',
            city: '',
            country: ''
    })

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Profile";
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/users/find/${userId}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'token': "bearer " + Token
                    },
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                let temp = await response.json();
                setUserData(temp);
                setLoading(false);
            } catch (error) {
                toast.error('Error fetching data');
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const [username, setUsername] = useState(userData.username);
    const [name, setName] = useState(userData.name);
    const [email, setEmail] = useState(userData.email);
    const [phone, setPhone] = useState(userData.phone);
    const [address, setAddress] = useState(userData.address);
    const [avatar, setAvatar] = useState(userData.avatar);
    const [password, setPassword] = useState(userData.password);
    const [district, setDistrict] = useState('')
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')
    const navigate = useNavigate();


    let userId = localStorage.getItem("userId")
    let Token = localStorage.getItem('Token')

    if (!userId || userId === null) {
        return (
            <h1>ERROR 401: Unauthorized</h1>
        )
    }
    const api_key = "739115358895497";
    const cloud_name = "dxsvumas8";
    const handleIconClick = () => {
        setEditable(true);
    };
    const handleFileForm = () => {
        document.querySelector("#formFile").click()
    }
    const UpdateProfileHandler = async (e) => {
        try {
            // Upload image to Cloudinary
            const signatureResponse = await axios.get("http://localhost:5000/get-signature");
            const files = document.querySelector("#formFile").files;
            console.log("93 running")
            // Check if there are files to upload
            if (files.length > 0) {
                const data = new FormData();
                data.append("file", files[0]);
                data.append("api_key", api_key);
                data.append("signature", signatureResponse.data.signature);
                data.append("timestamp", signatureResponse.data.timestamp);

                const cloudinaryResponse = await axios.post(
                    `https://api.cloudinary.com/v1_1/${cloud_name}/auto/upload`,
                    data,
                    {
                        headers: {"Content-Type": "multipart/form-data"},
                        onUploadProgress: function (e) {
                            console.log(e.loaded / e.total);
                        },
                    }
                );

                function generateImageURL(publicId) {
                    return `https://res.cloudinary.com/${cloud_name}/image/upload/${publicId}.jpg`;
                }

                setAvatar(generateImageURL(cloudinaryResponse.data.public_id))
            } else {
                setAvatar(userData.avatar)
            }
            console.log("121 running")
            setLoading(true);
            const updateData = {
                username: userData.username,
                name: userData.name,
                email: userData.email,
                phone: userData.phone,
                address: userData.address + (district ===''? "" : ", " + district) + (city===''? "" : ", " + city) + (country===''? "." : ", " + country+"."),
                avatar: userData.avatar,
            };
            console.log("132 running")
            try {
                console.log(updateData)
                const headers = {
                    'Content-Type': 'application/json',
                    token: ' bearer ' + Token,
                };
                console.log("139 running")
                const response = await fetch(`http://localhost:5000/api/users/${userId}`, {
                    method: 'PUT',
                    headers,
                    body: JSON.stringify(updateData),
                });
                console.log("success")
                if (response.ok) {
                    alert("Information updated successfully!")
                }
                setLoading(false);
                toast.success('Data has been changed successfully');
            } catch (error) {
                setLoading(false);
                toast.error(error.message || 'Data changing failed');
            }
        } catch (error) {
            setLoading(false);
            toast.error(error.message || 'Data changing failed');
        }
    };

    return (
        <div className="container-fluid" style={{marginTop: '56px'}}>
            <div className="container">
                <div className="row g-4 d-flex flex-row">
                    {/* Profile menu */}
                    <div className="col-3 d-flex flex-column">
                        <input
                            style={{display: "none"}}
                            type="file"
                            id="formFile" // Corrected id
                            className="form-control form-md"
                            files={userData.avatar}
                            onChange={(e) => {
                                if (e.target.files.length > 0) {
                                    setUserData({...userData,"avatar": e.target.files[0]})
                                }
                                else {
                                    setUserData(userData)
                            }
                            }}
                        />
                        <img src="/imgs/profile/camera-btn.png" alt="camera-btn" style={{
                            width: '60px',
                            height: '60px',
                            float: 'right',
                            position: 'absolute',
                            top: '25%',
                            left: '24%'
                        }} onClick={handleFileForm}/>
                        <img src={userData.avatar} alt="profile-img" className="profile-img"
                             style={{"width": "300px", height: "300px", "object-fit": "cover"}}/>
                        <h4 className="mt-4" style={{color: 'var(--tone-primary-40)'}}>{}</h4>
                        <h5 style={{marginTop: '32px', marginBottom: '32px'}}>Profile</h5>
                        <div className="d-flex flex-column gap-3" style={{color: 'var(--tone-neutral-60)'}}>
                            <Link to="/" className="title1">My Profile</Link>
                            <Link to="/order-history" className="title1">Order History</Link>
                            <Link to="/track-order" className="title1">Track Order</Link>
                        </div>
                    </div>
                    {/* Profile info */}
                    <div className="col-9" style={{paddingLeft: '5em'}}>
                        <h2 style={{color: 'var(--tone-primary-40)', marginBottom: '24px'}}>My Profile</h2>
                        {/* Contact info */}
                        <h5 style={{color: 'var(--scheme-on-surface-variant)', marginBottom: '24px'}}>Contact
                            Information</h5>
                        <form>
                            <div className="form-row mt-4">
                                {/* Name */}
                                <div className="col">
                                    <label htmlFor="name" className="form-label label1">
                                        Full Name
                                    </label>
                                    <div className="input-with-icon">
                                        <input
                                            type="text"
                                            placeholder="name"
                                            className="form-control form-md"
                                            disabled={!editable}
                                            value={userData.name}
                                            onChange={(e) => {
                                                setUserData({...userData, "name": e.target.value})
                                            }}
                                        />
                                        <img src="/imgs/profile/edit.svg" alt="edit" className="trailing-icon"
                                             onClick={handleIconClick}/>
                                    </div>
                                </div>
                                {/* Username */}
                                <div className="col">
                                    <label htmlFor="name" className="form-label label1">
                                        Username
                                    </label>
                                    <div className="input-with-icon">
                                        <input
                                            type="text"
                                            placeholder="example@email.us.com"
                                            className="form-control form-md"
                                            disabled
                                            value={userData.username}
                                            // onChange={(e) => {
                                            //     setUserData({...userData, "username": e.target.value})
                                            // }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="form-row mt-4">
                                {/* Email */}
                                <div className="col">
                                    <label htmlFor="name" className="form-label label1">
                                        Email
                                    </label>
                                    <div className="input-with-icon">
                                        <input
                                            type="text"
                                            placeholder="name"
                                            className="form-control form-md"
                                            disabled={!editable}
                                            value={userData.email}
                                            onChange={(e) => {
                                                setUserData({...userData, "email": e.target.value})
                                            }}
                                        />
                                        {/*<img src="/imgs/profile/edit.svg" alt="edit" className="trailing-icon"*/}
                                        {/*     onClick={handleIconClick}/>*/}
                                    </div>
                                </div>
                                {/* Phone */}
                                <div className="col">
                                    <label htmlFor="name" className="form-label label1">
                                        Phone Number
                                    </label>
                                    <div className="input-with-icon">
                                        <input
                                            type="text"
                                            placeholder="example@email.us.com"
                                            className="form-control form-md"
                                            disabled={!editable}
                                            value={userData.phone}
                                            onChange={(e) => {
                                                setUserData({...userData, "phone": e.target.value})
                                            }}
                                        />
                                        {/*<img src="/imgs/profile/edit.svg" alt="edit" className="trailing-icon"*/}
                                        {/*     onClick={handleIconClick}/>*/}
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4">
                                {/* Password */}
                                <label for="password" className="form-label label1">
                                    Password
                                </label>
                                <div className="input-with-icon">
                                    <input
                                        type="password"
                                        className="form-control form-md"
                                        placeholder="•••••••••••••••••"
                                        // onChange={(e) => setUserData({...userData, "password": e.target.value})}
                                        disabled
                                    />
                                    {/*<img src="/imgs/profile/edit.svg" alt="edit" className="trailing-icon"*/}
                                    {/*     onClick={handleIconClick}/>*/}
                                </div>
                            </div>
                        </form>

                        {/* Shipping address */}
                        <h5 style={{
                            color: 'var(--scheme-on-surface-variant)',
                            marginBottom: '24px',
                            marginTop: '56px'
                        }}>Shipping Address</h5>
                        <form>
                            <div className="mb-4">
                                {/* Home */}
                                <label for="password" className="form-label label1">
                                    Home Address
                                </label>
                                <div className="input-with-icon">
                                    <input
                                        type="text"
                                        className="form-control form-md"
                                        placeholder="1234 Elm Street, Spring Field"
                                        value={userData.address}
                                        onChange={(e) => setUserData({...userData, "address": e.target.value})}
                                        disabled={!editable}
                                    />
                                    {/*<img src="/imgs/profile/edit.svg" alt="edit" className="trailing-icon"*/}
                                    {/*     onClick={handleIconClick}/>*/}
                                </div>
                            </div>
                            <div className="form-row mb-4">
                                {/* District */}
                                <div className="col">
                                    <label for="password" className="form-label label1">
                                        District
                                    </label>
                                    <div className="input-with-icon">
                                        <input
                                            type="text"
                                            className="form-control form-md"
                                            placeholder="District 1"
                                            onChange={(e) => setDistrict(e.target.value)}
                                            disabled={!editable}
                                        />
                                        {/*<img src="/imgs/profile/edit.svg" alt="edit" className="trailing-icon"*/}
                                        {/*     onClick={handleIconClick}/>*/}
                                    </div>
                                </div>
                                {/* City */}
                                <div className="col">
                                    <label for="password" className="form-label label1">
                                        City / Province
                                    </label>
                                    <div className="input-with-icon">
                                        <input
                                            type="text"
                                            className="form-control form-md"
                                            placeholder="HCM City"
                                            onChange={(e) => setCity(e.target.value)}
                                            disabled={!editable}
                                        />
                                        {/*<img src="/imgs/profile/edit.svg" alt="edit" className="trailing-icon"*/}
                                        {/*     onClick={handleIconClick}/>*/}
                                    </div>
                                </div>
                                {/* Country */}
                                <div className="col">
                                    <label for="password" className="form-label label1">
                                        Country
                                    </label>
                                    <div className="input-with-icon">
                                        <input
                                            type="text"
                                            className="form-control form-md"
                                            placeholder="Vietnam"
                                            //value={password}
                                            onChange={(e) => setCountry(e.target.value)}
                                            disabled={!editable}
                                        />
                                        {/*<img src="/imgs/profile/edit.svg" alt="edit" className="trailing-icon"*/}
                                        {/*     onClick={handleIconClick}/>*/}
                                    </div>
                                </div>
                            </div>
                        </form>
                        {/*<div className="profile-btn">*/}
                        {/*    <button className="sec-btn btn-md"><img src="/imgs/profile/plus.svg" alt="" />ADD ADDRESS</button>*/}
                        {/*</div>*/}
                        <div className="profile-btn text-center mt-5 flex-start">
                            <button className="prim-btn btn-md" onClick={UpdateProfileHandler}>SAVE CHANGES</button>
                            <button className="sec-btn btn-md" onClick={() => {
                                navigate(`/profile/${userId}`)
                            }}
                            >DISCARD ALL
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;


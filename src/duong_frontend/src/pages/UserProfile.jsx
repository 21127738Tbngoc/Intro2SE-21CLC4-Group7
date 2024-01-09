import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../components/button/buttons.css';
import '../components/common.css';
import '../components/styles/UserProfile.css';

const UserProfile = () => {
    const [editable, setEditable] = useState(false);

    const handleIconClick = () => {
        setEditable(true);
    };

    return (
        <div className="container-fluid" style={{ marginTop: '56px' }}>
            <div className="container">
                <div className="row g-4 d-flex flex-row">
                    {/* Profile menu */}
                    <div className="col-3 d-flex flex-column">
                        <img src="/imgs/profile/camera-btn.png" alt="camera-btn" style={{ width: '60px', height: '60px', float: 'right', position: 'absolute', top: '25%', left: '24%'}}/>
                        <img src="/imgs/profile/profile-img.jpg" alt="profile-img" className="profile-img" />
                        <h4 className="mt-4" style={{color: 'var(--tone-primary-40)'}}>Emily Rose Johnson</h4>
                        <h5 style={{ marginTop: '32px', marginBottom: '32px'}}>Profile</h5>
                        <div className="d-flex flex-column gap-3" style={{ color: 'var(--tone-neutral-60)' }}>
                            <Link to="/" className="title1">My Profile</Link>
                            <Link to="/order-history" className="title1">Order History</Link>
                            <Link to="/track-order" className="title1">Track Order</Link>
                        </div>
                    </div>
                    {/* Profile info */}
                    <div className="col-9" style={{ paddingLeft: '5em' }}>
                        <h2 style={{ color: 'var(--tone-primary-40)', marginBottom: '24px'}}>My Profile</h2>
                        {/* Contact info */}
                        <h5 style={{ color: 'var(--scheme-on-surface-variant)', marginBottom: '24px' }}>Contact Information</h5>
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
                                            //value={name}
                                            //onChange={handleInputChange}
                                        />
                                        <img src="/imgs/profile/edit.svg" alt="edit" className="trailing-icon" onClick={handleIconClick} />
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
                                            disabled={!editable}
                                            //value={name}
                                            //onChange={handleInputChange}
                                        />
                                        <img src="/imgs/profile/edit.svg" alt="edit" className="trailing-icon" onClick={handleIconClick} />
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
                                            //value={name}
                                            //onChange={handleInputChange}
                                        />
                                        <img src="/imgs/profile/edit.svg" alt="edit" className="trailing-icon" onClick={handleIconClick} />
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
                                            //value={name}
                                            //onChange={handleInputChange}
                                        />
                                        <img src="/imgs/profile/edit.svg" alt="edit" className="trailing-icon" onClick={handleIconClick} />
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
                                        //value={password}
                                        //onChange={(e) => setPassword(e.target.value)}
                                        disabled={!editable}
                                    />  
                                    <img src="/imgs/profile/edit.svg" alt="edit" className="trailing-icon" />
                                </div> 
                            </div>               
                        </form>
                        <button className="sec-btn btn-md mt-4">RESET PASSWORD</button>

                        {/* Shipping address */}
                        <h5 style={{ color: 'var(--scheme-on-surface-variant)', marginBottom: '24px', marginTop: '56px' }}>Shipping Address</h5>
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
                                        //value={password}
                                        //onChange={(e) => setPassword(e.target.value)}
                                        disabled={!editable}
                                    />  
                                    <img src="/imgs/profile/edit.svg" alt="edit" className="trailing-icon" />
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
                                            placeholder="Abc"
                                            //value={password}
                                            //onChange={(e) => setPassword(e.target.value)}
                                            disabled={!editable}
                                        />  
                                        <img src="/imgs/profile/edit.svg" alt="edit" className="trailing-icon" />
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
                                            placeholder="Abc"
                                            //value={password}
                                            //onChange={(e) => setPassword(e.target.value)}
                                            disabled={!editable}
                                        />  
                                        <img src="/imgs/profile/edit.svg" alt="edit" className="trailing-icon" />
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
                                            placeholder="Abc"
                                            //value={password}
                                            //onChange={(e) => setPassword(e.target.value)}
                                            disabled={!editable}
                                        />  
                                        <img src="/imgs/profile/edit.svg" alt="edit" className="trailing-icon" />
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className="profile-btn">
                            <button className="sec-btn btn-md"><img src="/imgs/profile/plus.svg" alt="" />ADD ADDRESS</button>
                        </div>
                        
                        <div className="profile-btn text-center mt-5 flex-start">
                            <button className="prim-btn btn-md">SAVE CHANGES</button>
                            <button className="sec-btn btn-md">DISCARD ALL</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;


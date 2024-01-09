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
                    <div className="col-3">
                        <img src="/imgs/profile/camera-btn.png" alt="camera-btn" style={{ width: '60px', height: '60px', float: 'right', position: 'absolute', top: '65%', left: '25%'}}/>
                        <img src="/imgs/profile/profile-img.jpg" alt="profile-img" className="profile-img" />
                        <h4 className="text-center mt-4" style={{color: 'var(--tone-primary-40)'}}>Emily Rose Johnson</h4>
                    </div>
                    {/* Profile divider */}
                    <div className="col-1">

                    </div>
                    {/* Profile info */}
                    <div className="col-8">
                        <h2 style={{ color: 'var(--tone-primary-40)', marginBottom: '24px'}}>My Profile</h2>
                        <h5 style={{ color: 'var(--scheme-on-surface-variant)', marginBottom: '24px' }}>Contact Information</h5>
                        <form>
                            {/* Full name */}
                            <label htmlFor="name" className="form-label label1">
                                Full Name
                            </label>
                            <div className="input-with-icon">
                                <input
                                    type="text"
                                    placeholder="Emily Rose Johnson"
                                    className="form-control form-md"
                                    disabled={!editable}
                                    //value={name}
                                    //onChange={handleInputChange}
                                />
                                <img src="/imgs/profile/edit.svg" alt="edit" className="trailing-icon" onClick={handleIconClick} />
                            </div> 
                            <div className="form-row">
                                {/* Email */}
                                <div className="col-3">

                                </div>
                                 {/* Phone */}
                                <div className="col-3">

                                </div>
                                 {/* Gender */}
                                <div className="col-2">

                                </div>
                            </div>                         
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;


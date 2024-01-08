import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../components/button/buttons.css';
import '../components/common.css';
import '../components/styles/LivingRoom.css';

const LivingRoom = () => {

    return (
        <div>
            {/* Breadcrumb */}

            {/* Hero img*/}
            <div className="container-fluid mt-5">
                <div className="container">
                    <div className="row g-4 d-flex">
                        <div className="col-6">
                            <img src="/imgs/room/livingroom.jpg" alt="livingroom" style={{ width: '100%', height: 'auto'}}/>
                        </div>
                        <div className="col-1"></div>
                        <div className="col-5">
                            <d3>LIVING ROOM</d3>
                            <p className="p2" style={{ marginTop: '48px', marginBottom: '20px', color: 'var(--scheme-on-background)' }}>Quia id omnis aliquid suscipit recusandae similique. Vero natus sed animi reiciendis. Ipsum voluptate Est velit et ex labori osam dolor est inventore quo numquam. Labore voluptas nihil molestiae sint delectus sint sequi voluptatem. Quia id omnis aliquid suscipit recusandae similique. Vero natus sed animi reiciendis. Quia id omnis aliquid suscipit recusandae similique. Vero natus sed animi reiciendis. Ipsum voluptate Est velit et ex labori osam dolor est inventore quo.</p>
                            <p className="p2" style={{ marginBottom: '20px', color: 'var(--scheme-on-background)' }}>
                            Labore voluptas nihil molestiae sint delectus sint sequi voluptatem. Quia id omnis aliquid suscipit recusandae similique. Vero natus sed animi reiciendis.
                            </p>
                            <div className="d-flex flex-row gap-4">
                                <div className='flex-column'>
                                    <p className="p2" style={{ marginBottom: '20px' }}>Client</p>
                                    <p className="p2" style={{ marginBottom: '20px' }}>Location</p>
                                    <p className="p2" style={{ marginBottom: '20px' }}>Date</p>
                                    <p className="p2" style={{ marginBottom: '20px' }}>Share</p>
                                </div>
                                <div className='flex-column'>
                                    <p className="p2" style={{ marginBottom: '20px' }}>Qode Interactive</p>
                                    <p className="p2" style={{ marginBottom: '20px' }}>Newyork, US</p>
                                    <p className="p2" style={{ marginBottom: '20px' }}>March 14, 2023</p>
                                    <div className="mediaIcon">
                                        <a href="#" class = "fa-brands fa-facebook"></a>
                                        <a href="#" class = "fa-brands fa-twitter"></a>
                                        <a href="#" class = "fa-brands fa-instagram"></a>
                                        <a href="#" class = "fa-brands fa-pinterest"></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sofa & lounges */}
            <div className="container-fluid justify-content-center text-center" style={{ marginTop: '120px'}}>
                <p className="title1" style={{ marginBottom: '12px'}}>LIVING ROOM</p>
                <h2>Sofas & Benches</h2>
            </div>
            <div className="container-fluid">
                <div className="container">
                    <div className="row g-4">
                        {/* Products card */}
                    </div>
                </div>
            </div>

            {/* Accent chairs */}
            <div className="container-fluid justify-content-center text-center" style={{ marginTop: '120px'}}>
                <p className="title1" style={{ marginBottom: '12px'}}>LIVING ROOM</p>
                <h2>Accent Chairs</h2>
            </div>
            <div className="container-fluid">
                <div className="container">
                    <div className="row g-4">
                        {/* Products card */}
                    </div>
                </div>
            </div>

            {/* Coffe & accent tables */}
            <div className="container-fluid justify-content-center text-center" style={{ marginTop: '120px'}}>
                <p className="title1" style={{ marginBottom: '12px'}}>LIVING ROOM</p>
                <h2>Coffe & Accent Tables</h2>
            </div>
            <div className="container-fluid">
                <div className="container">
                    <div className="row g-4">
                        {/* Products card */}
                    </div>
                </div>
            </div>

            {/* TV stands & media consoles */}
            <div className="container-fluid justify-content-center text-center" style={{ marginTop: '120px'}}>
                <p className="title1" style={{ marginBottom: '12px'}}>LIVING ROOM</p>
                <h2>Coffe & Accent Tables</h2>
            </div>
            <div className="container-fluid">
                <div className="container">
                    <div className="row g-4">
                        {/* Products card */}
                    </div>
                </div>
            </div>

            {/* Lighting & decoration */}
            <div className="container-fluid justify-content-center text-center" style={{ marginTop: '120px'}}>
                <p className="title1" style={{ marginBottom: '12px'}}>LIVING ROOM</p>
                <h2>Lighting & Decoration</h2>
            </div>
            <div className="container-fluid">
                <div className="container">
                    <div className="row g-4">
                        {/* Products card */}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default LivingRoom;

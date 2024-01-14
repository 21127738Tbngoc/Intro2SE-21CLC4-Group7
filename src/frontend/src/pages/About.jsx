import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ImageCarousel from '../components/carousel/carousel';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../components/button/buttons.css';
import '../components/common.css';
import '../components/styles/About.css';

const About = () => {
    {/* Image paths */}
    const creatorImages = [
        '/imgs/about/creator-1.jpg',
        '/imgs/about/creator-2.jpg',
        '/imgs/about/creator-3.jpg',
        '/imgs/about/creator-4.jpg',
        '/imgs/about/creator-5.jpg',
        '/imgs/about/creator-6.jpg'
    ];

    return (
        <div>
            {/* Page name */}
            <div className="container-fluid justify-content-center text-center mt-4">
                <d3 className="page-name">ABOUT US</d3>
            </div>

            {/* Breadcrumb */}

            {/* Our story */}
            <div className="container-fluid mt-5">
                <div className="container">
                    <div className="row g-4">
                        <div className="col">
                            <d5 className="mb-4" style={{ borderBottom: '1.5px solid var(--scheme-outline)', display: 'block', lineHeight: '82px' }}>OUR STORY</d5>
                            <p className="title1 mb-4" style={{ color: 'var(--tone-neutral-variant-50' }}>Welcome to Fitment – Where Your Home Becomes a Masterpiece.</p>
                            <p className="body1 mb-4" style={{ color: 'var(--tone-neutral-variant-50' }}>
                                At Fitment, our mission is a relentless pursuit to transform your living spaces into breathtaking works of art. More than just a furniture destination, Fitment embodies the fusion of aesthetics and architecture. Established in 2023 by MadeinFit Group, The Interior Designs and Furnishings Industry Ltd., our roots delve deep into a passion for revolutionizing how people engage with interior design and furniture.
                            </p>
                            <p className="body1 mb-4" style={{ color: 'var(--tone-neutral-variant-50' }}>                     
                                From its inception, Fitment has been driven by a dedication to redefine the standards in the industry. We are committed to creating an immersive experience that goes beyond the conventional, offering more than just a transactional platform. Our goal is to provide a seamless, inspiring journey that resonates with the essence of every individual's style and space.
                            </p>
                            <p className="body1 mb-4" style={{ color: 'var(--tone-neutral-variant-50' }}>                     
                                Fitment isn't just about the products; it's about crafting an ecosystem that inspires, educates, and enriches. We believe that every element of design matters and can transform a space into a personal sanctuary.
                            </p>
                        </div>
                        <div className="col">
                            <img src="/imgs/about/our-story.jpg" style={{ maxWidth: '100%', height: 'auto' }} alt="ourStory" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Vision & mission */}
            <div className="container-fluid justify-content-center text-center" style={{ margin: '56px 0', padding: '16px 0', borderTop: '1.5px solid var(--scheme-outline)', borderBottom: '1.5px solid var(--scheme-outline)' }}>
                <d5 style={{ color: 'var(--scheme-on-background', textAlign: 'center' }}>VISION & MISSION</d5>
            </div>
            <div className="container-fluid">
                <div className="container">
                    <div className="row justify-content-center g-4 text-center d-flex">
                        <h2 className="mb-2" style={{ width: '492px'}}>We Believe That Every Detail Matters</h2>
                        <p className="title1" style={{ color: 'var(--tone-neutral-variant-50' }}>We are specialized in adornments, that bring charm to any environment.</p>
                    </div>
                    <div className="row g-4 mt-3 mb-4">
                        <div className="col-4">
                            <img src="/imgs/about/vision_1.jpg" alt="vision1" style={{ maxWidth: '100%', height: 'auto' }} />
                        </div>
                        <div className="col-8 flex-column">
                            <img src="/imgs/about/vision_2.jpg" alt="vision2" style={{ maxWidth: '100%', height: 'auto' }} />
                            <p className="p1" style={{ margin: '64px 110px auto 110px', color: 'var(--tone-neutral-variant-50' }}>There are multiples of high quality pieces, with styles that transition from classic to contemporary. An exclusive selection of lampshades, vases, murals, pillows, paintings and many gifts to compose great projects. In order selection, a mix of basic style, stricter customization and more compact dimensions, composing sophisticated and exclusive environments.</p>
                        </div>
                    </div>
                    <div className="row g-4 d-flex">
                        <div className="col-2"></div>
                        <div className="col-5">
                            <img src="/imgs/about/vision_3.jpg" alt="vision3" style={{ maxWidth: '100%', height: 'auto' }} />
                        </div>
                        <div className="col-3">
                            <img src="/imgs/about/vision_4.jpg" alt="vision4" style={{ maxWidth: '100%', height: 'auto' }} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Our partners */}
            <div className="container-fluid justify-content-center text-center" style={{ margin: '56px 0', padding: '16px 0', borderTop: '1.5px solid var(--scheme-outline)', borderBottom: '1.5px solid var(--scheme-outline)' }}>
                <d5 style={{ color: 'var(--scheme-on-background', textAlign: 'center' }}>OUR PARTNERS</d5>
            </div>
            <div className="container-fluid">
                <div className="container">
                    <div className="row justify-content-center g-4 text-center">
                        <h2 className="mb-0" style={{ width: '560px'}}>We Are Collaborating With</h2>
                        <h2 className="mt-0" style={{ color: 'var(--tone-primary-40)'}}>6 Global Brands</h2>
                    </div> 
                    <div className="row g-4 align-content-center">
                        <div className="col-3"></div>
                        <div className="col-6 justify-content-center">
                            <p style={{ color: 'var(--tone-neutral-variant-50', margin: '48px auto', width: '545px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                        <div className="col-3"></div>
                        <div className="d-flex align-content-center justify-content-center gap-0">
                            <img src="/imgs/about/Eskil.png" alt="" style={{ width: '150px', height: '100%' }} />
                            <img src="/imgs/about/Crate&Barrel.png" alt="" style={{ width: '275px', height: 'auto' }} />
                            <img src="/imgs/about/Natuzzi.png" alt="" style={{ width: '121px', height: 'auto' }} />
                            <img src="/imgs/about/RH.png" alt="" style={{ width: '185px', height: 'auto' }} />
                            <img src="/imgs/about/Minotti.png" alt="" style={{ width: '185px', height: 'auto' }} />
                        </div>
                    </div>
                </div>  
            </div>

            {/* Our creator */}
            <div className="container-fluid creator-bg">
                <div className="container">
                    <h5 style={{ textAlign: 'right', margin: '20px 0 0 0px' }}>OUR CREATORS</h5>
                    <div className="row g-4">
                        <div className="col justify-content-end text-end" style={{ marginTop: '245px'}}>
                            <d3>SOME NOTES FROM<br></br> THE CREATORS</d3>
                            <div className="creator-note mb-4 text-start" >
                                <img src="/imgs/about/quotation.png" style={{ width: '45px', marginBottom: '32px' }} />
                                <p className="p1" style={{ color: 'var(--tone-neutral-variant-50)'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                            <img src="/imgs/about/signature.png" alt="signature" style={{ width: '300px' }} />
                        </div>
                        <div className="col" style={{ paddingTop: '0px', paddingLeft: '120px' }}>
                            <div className="creator-carousel">
                                <ImageCarousel images={creatorImages} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Designers */}
            <div className="container-fluid designer-section">
                <div className="row">
                    <d5 className="designer-display mb-5">OUR DESIGNERS</d5>
                </div>
                <div className="container">
                    <div className="row g-4 mt-3"  style={{ marginBottom: '95px' }}>
                        <div className="col designer-left">
                            <d3 className="designer-name">LUCAS NILSSEN</d3>
                            <p className="designer-role title2">Product Designer</p>
                            <img className="designer-img" src="/imgs/home/designer-0.jpg" />
                        </div>
                        <div className="col designer-right flex-row-reverse">
                            <img className="designer-img" src="/imgs/home/designer-1.jpg" style={{ marginLeft: '250px' }}/>
                            <p className="designer-role title2">Product Designer</p>  
                            <d3 className="designer-name">MILLE HANSEN</d3>
                        </div>
                    </div>
                    <div className="row g-4"  style={{ marginBottom: '95px' }}>
                        <div className="col designer-left">
                            <d3 className="designer-name">HANS J. WEGNER</d3>
                            <p className="designer-role title2">Product Designer</p>
                            <img className="designer-img" src="/imgs/home/designer-2.jpg" />
                        </div>
                        <div className="col designer-right flex-row-reverse">
                            <img className="designer-img" src="/imgs/home/designer-3.jpg"  style={{ marginLeft: '330px' }} />
                            <p className="designer-role title2">Product Designer</p>
                            <d3 className="designer-name">ARNE JACOBSEN</d3>
                        </div>
                    </div>
                    <div className="row g-4"  style={{ marginBottom: '95px' }}>
                        <div className="col designer-left">
                            <d3 className="designer-name">FRANK LLOYED</d3>
                            <p className="designer-role title2">Product Designer</p>
                            <img className="designer-img" src="/imgs/home/designer-4.jpg" />
                        </div>
                        <div className="col designer-right flex-row-reverse">
                            <img className="designer-img" src="/imgs/home/designer-5.jpg" style={{ marginLeft: '280px' }}/>
                            <p className="designer-role title2">Product Designer</p>
                            <d3 className="designer-name">ANNIE STANLEY</d3>
                        </div>
                    </div>
                    <div className="row g-4"  style={{ marginBottom: '95px' }}>
                        <div className="col designer-left">
                            <d3 className="designer-name">OLIVIA RHYE</d3>
                            <p className="designer-role title2">Product Designer</p>
                            <img className="designer-img" src="/imgs/home/designer-6.jpg" />
                        </div>
                        <div className="col designer-right flex-row-reverse">
                            <img className="designer-img" src="/imgs/home/designer-7.jpg" style={{ marginLeft: '240px' }}/>
                            <p className="designer-role title2">Product Designer</p>
                            <d3 className="designer-name">EILEEN GRAY</d3>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;
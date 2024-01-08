import React, { useState } from 'react';

const ImageCarousel = ({ images }) => {
    const [currentImage, setCurrentImage] = useState(0);

    const prevImage = () => {
        setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
    };

    const nextImage = () => {
        setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
    };

    return (
        <div className="creator-carousel">
            <img src={images[currentImage]} alt={`Image ${currentImage}`} />
            <div className="creator-button">
                <button onClick={prevImage}>Prev</button>
                <button onClick={nextImage}>Next</button>
            </div>
        </div>
    );
};

export default ImageCarousel;

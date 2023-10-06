import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';
import Slider from 'react-slick';

import image1 from '../images/stockweddingphoto1.jpeg';
import image2 from '../images/stockweddingphoto2.jpeg';
import image3 from '../images/stockweddingphoto3.jpeg';

function ImageCarousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    const imageStyle = {
        height: '400px',
        width: '4000px',
        maxWidth: '100%',   // Ensure the image is not bigger than its container
        objectFit: 'cover',
    };

    return (
        <div style={{ 
            width: '80%', 
            margin: '7vh auto', // centers the container vertically and horizontally

        }}>
            <Slider {...settings}>
                <div>
                    <img src={image1} alt="Image 1" style={imageStyle} />
                </div>
                <div>
                    <img src={image2} alt="Image 2" style={imageStyle} />
                </div>
                <div>
                    <img src={image3} alt="Image 3" style={imageStyle} />
                </div>
            </Slider>
        </div>
    );
}

export default ImageCarousel;

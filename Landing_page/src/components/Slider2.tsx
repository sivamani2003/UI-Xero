import React from 'react';

const Slider_2: React.FC = () => {
    const scrollLeft = () => {
        const carousel = document.querySelector<HTMLElement>('.slider-carousel');
        if (carousel) {
            carousel.scrollBy({
                left: -660, 
                behavior: 'smooth'
            });
        }
    };

    const scrollRight = () => {
        const carousel = document.querySelector<HTMLElement>('.slider-carousel');
        if (carousel) {
            carousel.scrollBy({
                left: 660,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div>
            <div className='organization-main'>
                <div className='design9'></div>
                <div className='design10'></div>
                <div className='organization-content'>
                    <p>Choose Us: Your Path to Innovation and <span>Success</span></p>
                </div>
            </div>
            <div className="slider-wrapper">
                <i className="fa-solid fa-arrow-left slider-arrow-left" onClick={scrollLeft}></i>
                <div className="slider-carousel">
                    <div className="slider-card">
                        <div className="slider-card-items">
                            <h2>Expertise Across the Tech Spectrum</h2>
                            <p>Our team consists of seasoned developers, designers, and experts who excel in various areas of technology.</p>
                        </div>
                    </div>
                    <div className="slider-card">
                        <div className="slider-card-items">
                            <h2>Proven Track Record of Success:</h2>
                            <p>Our portfolio is a testament to our ability to deliver impactful results.</p>
                        </div>
                    </div>
                    <div className="slider-card">
                        <div className="slider-card-items">
                            <h2>Collaborative Approach, Transparent Communication:</h2>
                            <p>We believe in working hand-in-hand with our clients.</p>
                        </div>
                    </div>
                    <div className="slider-card">
                        <div className="slider-card-items">
                            <h2>Expertise Across the Tech Spectrum</h2>
                            <p>Our team consists of seasoned developers, designers, and experts who excel in various areas of technology.</p>
                        </div>
                    </div>
                    <div className="slider-card">
                        <div className="slider-card-items">
                            <h2>Proven Track Record of Success:</h2>
                            <p>Our portfolio is a testament to our ability to deliver impactful results.</p>
                        </div>
                    </div>
                </div>
                <i className="fa-solid fa-arrow-right slider-arrow-right" onClick={scrollRight}></i>
            </div>
        </div>
    );
}

export default Slider_2;

import React from 'react';

const Slider: React.FC = () => {
    const scrollLeft = () => {
        const carousel = document.querySelector('.carousel') as HTMLElement;
        if (carousel) {
            carousel.scrollBy({
                left: -660, 
                behavior: 'smooth'
            });
        }
    };
  
    const scrollRight = () => {
        const carousel = document.querySelector('.carousel') as HTMLElement;
        if (carousel) {
            carousel.scrollBy({
                left: 660,
                behavior: 'smooth'
            })
        }
    }

    return (
        <div>
            <div className="wrapper">
                <i className="fa-solid fa-arrow-left" onClick={scrollLeft}></i>
                <div className="carousel">
                    {/* Your carousel content goes here */}
                </div>
                <i className="fa-solid fa-arrow-right" onClick={scrollRight}></i>
            </div>
        </div>
    );
}

export default Slider;

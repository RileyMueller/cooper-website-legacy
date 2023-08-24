import { useState, useEffect } from 'react';

function ImageDisplay({ src }) {
    return (
        <div className="image-display">
            <img src={src} alt="Category Image" />
        </div>
    );
}

function DotIndicator({ totalDots, activeDot, onClick }) {
    return (
        <div className="dot-indicator">
            {Array.from({ length: totalDots }).map((_, index) => (
                <span 
                    key={index}
                    className={`dot ${index === activeDot ? 'active' : ''}`} 
                    onClick={() => onClick(index)}
                />
            ))}
        </div>
    );
}

export default function ImageSlider({ images }) {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change every 5 seconds

        return () => clearInterval(interval); // Cleanup the interval on component unmount
    }, [images]);

    return (
        <div className="image-slider">
            <ImageDisplay src={images[activeIndex]} />
            <DotIndicator 
                totalDots={images.length} 
                activeDot={activeIndex} 
                onClick={setActiveIndex} 
            />
        </div>
    );
}

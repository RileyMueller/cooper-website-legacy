import { useState, useEffect } from 'react';

function ImageDisplay({ src, isActive, isNext }) {
    return (
        <div className={`image-display ${isActive ? 'active' : ''} ${isNext ? 'next' : ''}`}>
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

export default function ImageSlider({ images, offset = 0 }) {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000 + offset); // Change every 5 seconds

        return () => clearInterval(interval); // Cleanup the interval on component unmount    
    
        
    }, [images]);

    return (
        <div className="image-slider">
            {images.map((src, index) => (
                <ImageDisplay 
                    key={index}
                    src={src} 
                    isActive={index === activeIndex}
                    isNext={(index - 1 === activeIndex) || (activeIndex === 0 && index === images.length - 1)}
                />
            ))}
            <DotIndicator 
                totalDots={images.length} 
                activeDot={activeIndex} 
                onClick={setActiveIndex} 
            />
        </div>
    );
}

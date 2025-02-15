import React, { useEffect, useState } from "react";
import "../../Styles/hero.css";
import placeholder from "../../assets/image.png";

const Hero = () => {
  const [showcase, setShowcase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowcase((prev) => (prev + 1) % 4); // Cycles between 0 -> 1 -> 2 -> 3 -> 0
    }, 3000);

    return () => clearInterval(interval); // Cleanup when component unmounts
  }, []);

  return (
    <div className="section hero-section">
      <div className="hero-text">
        <h1>Have You Ever Been Cartoonified?</h1>
      </div>
      <div className="product-showcase-container">
        <div className="hero-image">
          <img className="hero-img-1" src={placeholder} />
        </div>
        <div className="product-showcase">
          {["1", "2", "3", "4"].map((item, index) => (
            <div
              key={index}
              className={`showcase showcase-${index + 1}`}
              style={{
                transform: `translateX(-${showcase * 100}%)`,
                transition: "transform 0.5s ease-in-out",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;

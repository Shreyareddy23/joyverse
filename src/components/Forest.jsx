import React, { useEffect, useState } from "react";
import "../styles/Forest.css";

const natureElements = ["tree", "bird", "sun", "butterfly"];

const getRandomPosition = () => ({
  top: `${Math.random() * 85}vh`,
  left: `${Math.random() * 85}vw`,
  animationDuration: `${Math.random() * 6 + 4}s`,
});

const ForestBackground = () => {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    const newElements = Array.from({ length: 10 }, () => ({
      type: natureElements[Math.floor(Math.random() * natureElements.length)],
      ...getRandomPosition(),
    }));
    setElements(newElements);
  }, []);

  return (
    <div className="forest-container">
      <div className="sun"></div> {/* Sun in the top-right corner */}

      {elements.map((item, index) => (
        <div
          key={index}
          className={`nature-item ${item.type}`}
          style={{
            top: item.top,
            left: item.left,
            animationDuration: item.animationDuration,
          }}
        />
      ))}
    </div>
  );
};

export default ForestBackground;

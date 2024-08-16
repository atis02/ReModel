import React, { useState } from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

const interpolateColor = (color1, color2, factor) => {
  const result = color1.slice();
  for (let i = 0; i < 3; i++) {
    result[i] = Math.round(result[i] + factor * (color2[i] - color1[i]));
  }
  return `rgb(${result.join(",")})`;
};

const hexToRgb = (hex) => {
  const bigint = parseInt(hex.slice(1), 16);
  return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
};

const ParallaxBackgroundColorChange = () => {
  const [backgroundColor, setBackgroundColor] = useState("#ffffff"); // Start with white

  const handleProgressChange = (progress) => {
    const startColor = hexToRgb("#ffffff"); // Start with white
    const endColor = hexToRgb("#0000ff"); // End with blue
    const newColor = interpolateColor(startColor, endColor, progress);
    setBackgroundColor(newColor);
  };

  return (
    <ParallaxProvider>
      <div style={{ height: "200vh", backgroundColor: backgroundColor }}>
        <h1 style={{ textAlign: "center", paddingTop: "50vh" }}>
          Scroll to Change Background Color
        </h1>
        <Parallax speed={0} onProgressChange={handleProgressChange}>
          <div style={{ height: "300px", marginTop: "100vh" }}>
            <h2 style={{ textAlign: "center" }}>Keep Scrolling!</h2>
          </div>
        </Parallax>
      </div>
    </ParallaxProvider>
  );
};

export default ParallaxBackgroundColorChange;

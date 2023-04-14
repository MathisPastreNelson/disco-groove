import React, { useState, useEffect } from "react";

const ScrollUpButton = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollUp = () => {
    const newPosition = scrollPosition - window.innerHeight * 0.8;
    animateScroll(newPosition);
  };

  const animateScroll = (position) => {
    let currentPosition = window.pageYOffset;
    const difference = position - currentPosition;
    const duration = 300; // Adjust the duration of the animation here
    const perTick = (difference / duration) * 10;

    const animate = () => {
      currentPosition += perTick;
      window.scrollTo(0, currentPosition);

      if (currentPosition > position) {
        window.requestAnimationFrame(animate);
      }
    };

    animate();
  };

  const showButton = scrollPosition > 0; // Check if the user has scrolled down

  return (
    <>
      {showButton && (
        <button
          className="buttonScroll scrollUpButton"
          onClick={handleScrollUp}>
          Scroll Up
        </button>
      )}
    </>
  );
};

export default ScrollUpButton;

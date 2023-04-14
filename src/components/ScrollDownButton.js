import React, { useState, useEffect } from "react";

const ScrollDownButton = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showButton, setShowButton] = useState(true);

  /*concerne le scroll*/
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollDown = () => {
    const newPosition = scrollPosition + window.innerHeight * 0.8;
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

      if (currentPosition < position) {
        window.requestAnimationFrame(animate);
      }
    };

    animate();
  };

  /*Concerne la disparition du button*/
  useEffect(() => {
    const handleScroll = () => {
      const isEndOfPage =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
      setShowButton(!isEndOfPage);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {showButton && (
        <button
          className="buttonScroll scrollDownButton"
          onClick={handleScrollDown}>
          Scroll Down
        </button>
      )}
    </>
  );
};

export default ScrollDownButton;

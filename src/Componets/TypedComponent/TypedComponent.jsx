import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypedComponent = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: [' Trending All Movies'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    // Initialize Typed.js
    const typed = new Typed(typedElement.current, options);

    // Destroy Typed.js instance on unmounting to prevent memory leaks
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <span ref={typedElement}></span>
    </div>
  );
};

export default TypedComponent;

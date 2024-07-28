import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TYpedTV = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['The trend of TV is more famous'],
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

export default TYpedTV;

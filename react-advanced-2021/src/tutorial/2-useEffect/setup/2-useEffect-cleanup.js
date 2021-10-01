import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  let size = window.screen.width;

  const [value, setValue] = useState(size);

  const changeSize = () => {
    console.log(window.innerWidth);
    setValue(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", changeSize);
    return () => {
      window.removeEventListener("resize", changeSize);
    };
  });

  return (
    <div>
      <p>My window  screen size is :</p>
      <h2>{value}</h2>
    </div>
  );
};

export default UseEffectCleanup;

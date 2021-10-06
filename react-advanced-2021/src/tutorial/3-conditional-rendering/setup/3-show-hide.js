import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [show, setShow] = useState(false);
  return (
    <React.Fragment>
      <h2>Show/Hide</h2>

      <button
        className="btn"
        onClick={() => {
          setShow(!show);
        }}
      >
        toggle
      </button>
      {show && <Item />}
    </React.Fragment>
  );
};
  const Item = () => {
    const [size, setsize] = useState(window.innerWidth);

    const checksize =()=>{
      setsize(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize',checksize);
      return () => {
        window.removeEventListener('resize', checksize);
      }
    }, [])
      return(
        <div>
          <h1>window</h1>
          <h2>size:{size}px</h2>
        </div>
      );

  }


export default ShowHide;

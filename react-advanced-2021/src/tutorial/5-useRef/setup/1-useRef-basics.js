import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => { 
  const refBasic = useRef('Null');
  const refDiv = useRef('Null');
  const handleSubmit = (e)=>{
      e.preventDefault();
      console.log(refBasic.current.value)
  }
  useEffect(() => {
    console.log(refBasic.current)
    refBasic.current.focus();
  }, []);

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <h2>useRef example </h2>
          <input type="text" ref={refBasic} />
          <button type="submit" className="btn">
          Submit
          </button>
        </div>
      </form>  
      <div ref={refDiv}>Hello World !</div>
    </>
  );
};

export default UseRefBasics;
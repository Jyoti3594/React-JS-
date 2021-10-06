import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, settext] = useState('Hello');
  const [Error, setError] = useState(false);
  //const firstValue = text || 'hello world';
  //const secondValue = text && 'hello world';

  return (
    <React.Fragment>
    
      <h1>{text || "Hi "}</h1>
      {text && <h1>How are you?</h1>}
      {!text && <h1>Do you like React.js</h1>}
      <button className="btn" onClick={()=>setError(!Error)}>
        Toggle Error
      </button>
      {Error && <h1>Oops!</h1>}
      {Error?(
        <h1>Something Wrong...</h1>
      ):(<h1>code is working fine...</h1>)}
    </React.Fragment>
  );
};

export default ShortCircuit;

import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {

  let bornAge = 0;

  const [old, setold] = useState(bornAge);

  const ChangeAge = ()=>{
    setold(old +10);
    
  }
  useEffect(() => {
    console.log('hi there');

    if(old>=1){
      document.title = `New age: ${old}`;
    }
    
  }, [old]);

  
  return (
    <div>
      <p>Age :</p>
      <h2>{old}</h2>
      <button className="btn" onClick={ChangeAge}>Click</button>

      
    </div>
  );
};

export default UseEffectBasics;

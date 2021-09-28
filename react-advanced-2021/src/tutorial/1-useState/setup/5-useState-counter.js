import React, { useState } from 'react';

const UseStateCounter = () => {

  let counterValue = 0 ;

  const [previousval, setNewval] = useState(counterValue);

  const decreaseValue= ()=>{
     setNewval(previousval-1) ;
  }
  const increaseValue= ()=>{
    setNewval(previousval+1) ;
  } 

  const resetValue = () =>{
    setNewval(counterValue)
    
  };
  const complexValue = () => {
    setTimeout(()=>{
      setNewval((lastValue)=>{
          return lastValue +1;
      });
        
    } ,2000);
  };
  
  

  return (
    <React.Fragment>
      <section style={{ margin: "4rem 0" }}>
        <h4>React - useStateCounter</h4>
        <h1>{previousval}</h1>
        <button className="btn" onClick={decreaseValue}>
          Decrese
        </button>
        <button className="btn" onClick={increaseValue}>
          Increase
        </button>
        <button className="btn" onClick={resetValue}>
          Reset
        </button>
      </section>

      <section>
        <h4>More complex counter</h4>
        <h1>{previousval}</h1>
        <button className="btn" onClick={complexValue} >Increase later</button>
      </section>
    </React.Fragment>
  );

};

export default UseStateCounter;

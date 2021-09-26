import React, { useState } from "react";

const UseStateBasics = () => {
  const [state, setstate] = useState("React Tutorial");

  const handlefunc = () => {
    const oldState = "React Tutorial";
    const newState = "New title";

    if (state === oldState) {
      setstate(newState);
    } else {
      setstate(oldState);
    }
  };

  return (
    <React.Fragment>
      <div className="container">
        <h1>{state}</h1>
        <button className="btn" onClick={handlefunc}>
          Change Tittle
        </button>
      </div>
    </React.Fragment>
  );
};

export default UseStateBasics;

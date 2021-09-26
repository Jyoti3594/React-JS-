import React from "react";

const UseStateBasics = () => {
  let title = "React tutorial";

  const handlefunc = () => {
    title = "hello world";
    console.log(title);
  };

  return (
    <React.Fragment>
      <div className="container">
        <h1>{title}</h1>
        <button className="btn" onClick={handlefunc}>
          Change Tittle
        </button>
      </div>
    </React.Fragment>
  );
};

export default UseStateBasics;

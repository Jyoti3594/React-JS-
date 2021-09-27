import React, { useState } from "react";

import { data } from "../../../data";

const UseStateArray = () => {
let [person, setPerson] = useState(data);

  const clearfunc = () => {
    console.log("clearal");
    person = [];
    setPerson(person);
    console.log(person);
  };

  const removefunc = (id) => {
    console.log(id);
    person = person.filter((row) => row.id !== id);
    setPerson(person)
    console.log(person);
  };

  return (
    <React.Fragment>
      {person.map((row) => {
        return (
          <div className="item">
            <h6>{row.id}</h6>
            <h4>{row.name}</h4>
            <button onClick={() => removefunc(row.id)}>Remove </button>
          </div>
        );
      })}
      <button className="btn" onClick={clearfunc}>
        Clear All
      </button>
    </React.Fragment>
  );
};

export default UseStateArray;

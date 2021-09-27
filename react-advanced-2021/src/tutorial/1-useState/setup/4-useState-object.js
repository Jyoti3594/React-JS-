import React, { useState } from "react";

const UseStateObject = () => {
  let details = {
    name: "Jyoti",
    age: 27,
    message: "Random message",
  };
  let [oldmsg, newmsg] = useState(details);

  const changetextFunc = () => {
    newmsg({ ...oldmsg, message: "how are you" });
  };
  return (
    <div>
      <h4>{oldmsg.name}</h4>
      <h4>{oldmsg.age}</h4>
      <h4>{oldmsg.message}</h4>
      <button className="btn" onClick={changetextFunc}>
        Change message
      </button>
    </div>
  );
};

export default UseStateObject;

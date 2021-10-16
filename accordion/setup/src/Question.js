import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, info }) => {
  const [showoption, setShowoption] = useState(false);

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setShowoption(!showoption)}>
          {showoption ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showoption && <p>{info}</p>}
    </article>
  );
};

export default Question;

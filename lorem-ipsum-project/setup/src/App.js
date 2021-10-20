import React, { useState } from 'react';
import data from './data';
function App() {
  const [text, setText] = useState([])
  const [count, setCount] = useState(0)
  const submitHandle=(e)=>{
    e.preventDefault();
    let amount = parseInt(count) 
    if (amount <=0 ){
      amount=1
    }
    if (amount > 8) {
      amount=8;
    }
    setText(data.slice(0,amount))
    console.log('hello');
  }
  
  return (
    <section className="section-center">
      <h2>Tired of boring lorem ipsum?</h2>
      <form className="lorem-form" onSubmit={submitHandle}>
        <label htmlFor="amount">Paragraph:</label>
        <input
          type="number"
          name="amount "
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="btn">
          Genetate
        </button>
      </form>
      <article className='lorem-text'>
        {text.map((item,index)=>{
          return <p key={index}>{item}</p>
        })}
      </article>
    </section>
  );
}

export default App;

import React from 'react'

const Book= ({img,title,author}) => {
const clickHandler = () =>{
  alert('hello world');
};
  return (
     <artical className='book'> 
        <img src={img} alt=''  />
        <h1>{title}</h1>
        <h4>{author} </h4>
        <button type='button' onClick={clickHandler}>Reference Example</button>
        
     </artical>
  );
};
export default Book

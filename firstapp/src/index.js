import React from 'react';
import ReactDOM from 'react-dom';

//css
import'./index.css'; 
import {books} from './books'
import Book from './Book';


function BookList() {
  return (
   <section className='booklist'>
     {books.map((book,index) => {
        return <Book key={book.id}{...book}></Book>;
     })}
   </section>
  );
}





ReactDOM.render(<BookList/>,document.getElementById('root'));

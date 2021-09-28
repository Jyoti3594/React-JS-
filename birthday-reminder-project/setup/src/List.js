import React from 'react';
import data from './data';

const List = ({listOfPeople}) => {
  
  return (
    <section>
      {listOfPeople.map((person) =>{
        const{id ,name ,age ,image }= person;

        return(
          <article key={id} className= 'person' >
              <img src={image} alt={name} />
            <div>
              <h4> {name}</h4>
              <h6>{age} years</h6>
            </div>
            </article>
        
        );

      })}

      
    </section>
  );
};

export default List;

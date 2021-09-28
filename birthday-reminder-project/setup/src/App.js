import React, { useState } from 'react';
import data from './data';
import List from './List';

function App() {
  let  [people, setPeople] = useState(data);
  const removeData = ()=>{
      people =[]
      setPeople(people);
      console.log(setPeople);
  }
  

  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthdays today</h3>
        <List listOfPeople={people} />
        <button className="btn" onClick={removeData}>
          Clear list
        </button>
      </section>
    </main>
  )
}

export default App;

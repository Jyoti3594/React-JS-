import react from "react";
import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setfirstName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeoplelist] = useState([]);

  const handleSubmitButton = (e) => {
    e.preventDefault();
    if (firstName && email) {
      const person = {
        id: new Date().getTime.toString,
        firstName: firstName,
        email: email,
      };
      console.log(person);
      setPeoplelist((people)=>{
        return [...people, person];
        

      });
      setfirstName("");
      setEmail("");
    } else {
      console.log("empty value");
    }
  };
  return (
    <React.Fragment>
      <article>
        <form className="form" onSubmit={handleSubmitButton}>
          <div className="form-control">
            <label htmlFor="firstName">Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setfirstName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button className="btn" type="submit">
            Add Person
          </button>
        </form>
        {people.map((person, index) => {
          const { id, firstName, email } = person;
          return (
            <div className="item" key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </React.Fragment>
  );
};

export default ControlledInputs;

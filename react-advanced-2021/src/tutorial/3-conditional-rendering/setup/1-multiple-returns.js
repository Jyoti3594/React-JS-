import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
  const [Loading, setLoading] = useState(true);
  const [Error, setError] = useState(false);
  const [User, setuser] = useState('defaultUser');

  
  useEffect(() => {
    fetch(url)
      .then((resp) => {
        if(resp.status >=200 && resp.status<=299 ){
          return resp.json();
        }
        else{
          setLoading(false)
          setError(true)
        }
      })

      .then((User) => {
        const{login}= User;
        setuser(login)
        setLoading(false)
      })
      .catch((Error) => console.log(Error));
  }, [])

  if(Loading){
    return (
      <div>
        <h2>Loading...</h2>;
      </div>
  )};
  if(Error){
    return (
      <div>
        <h2>Error...</h2>;
      </div>
  )};
  return (
    <div>
      <h2>{User}</h2>
    </div>
  );
    

};

export default MultipleReturns;

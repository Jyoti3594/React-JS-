import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const [user, setUser] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const user = await response.json();
    setUser(user);
    //console.log(setUser);
  };
  
  useEffect(() => {
    getUsers();
    
  }, [])
  

  return (
    <>
      <h2>GIT users list</h2>;
      <ul className="users">
        {user.map((userList) => {
            const { id, login, avatar_url, html_url } = userList;
            return <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>Profile</a>
              </div>
            </li>;
        })};
      </ul>
    </>
  );
};

export default UseEffectFetchData;

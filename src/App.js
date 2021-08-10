import React, { useEffect, useState } from 'react';
import axios from 'axios';
import empty from './utils';


function App() {

  const [users, setUsers] = useState([]);

  const fetchUsers = () => {

    axios.get(`http://localhost:3333/users`)
      .then(result => {
        if(!empty(result)){
          setUsers(result.data);
        }
      })
  }

  useEffect(() => {
    fetchUsers();
  });

  return (
    <div className="App">

      {users.map(user => (
        <div>{user.first_name}</div>
      ))}
    </div>
  );
}

export default App;

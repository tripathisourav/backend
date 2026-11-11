import { useState } from 'react'
import axios from "axios"
import { useEffect } from 'react';

const App = () => {
  const [users, setusers] = useState([]);
  useEffect(() => {
    axios.get('/api/users')
    .then(res => {
      setusers(res.data);
    })
  }, [])

  return (
    <div className='app'>
      <h1>Users</h1>
       <ul>
        {users.map(user => (
          <li  key={user.id}>{user.name}</li>
        ))} 
      </ul>
    </div>
  )
}

export default App

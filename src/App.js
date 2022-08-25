import { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header';

function App() {
  const [users,setUsers] = useState([]);
  useEffect(() => {
    // fetch data from JSON Fake API
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(response => {
        setUsers(response);
      })
  },[])

  return (
    <div className="App">
      <Header />
      <h1>Users Database</h1>
      {/* display users */}
      <div className='users'>
      {
        users.map(user => {
          return(
              <div className='user'>
                <h1>{ user.name }</h1>
                <p>{ user.email }</p>
              </div>
          )
        })
      }
    </div>

    </div>
  );
}

export default App;

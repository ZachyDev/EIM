import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Products from './Components/Products';
function App() {
  const [homeSection, setHomepageContent] = useState('Investigation Management Section');

  // change home content
  const changeHomeContent = () => {
    setHomepageContent('Enterprise Investigation System');
  }

  return (
    <div className="App">
      <Header />
     <h1>{ homeSection }</h1>
     <button onClick= { changeHomeContent }>Homepage</button>
     <Products />
    </div>
  );
}

export default App;

import { useState } from 'react';
import './App.css';
import Banner from './Banner';
import Header from './Components/Header';
function App() {
  const [homeSection, setHomeSection] = useState('Homepage');
  // learn more 
  const learnMore = () => {
    alert('Looks great');
  }
  // change home content
  const changeHomeContent = () => {
    setHomeSection('Enterprise Investigation Management');
    console.log(homeSection);
  }

  return (
    <div className="App">
      <Header />
     <h1>{ homeSection }</h1>
     <Banner firstName="Zachary"/>
     <Banner lastName="Developer"/>
     <button onClick= { learnMore }>Learn More</button>
     <button onClick= { changeHomeContent }>Homepage</button>
    </div>
  );
}

export default App;

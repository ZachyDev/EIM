import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Products from './Components/Products';
import Banner from './Components/Banner';

function App() {
  const [homeSection, setHomepageContent] = useState('Investigation Management Section');
  const [promoBanner, setPromoBanner] = useState(true);

  // change home content
  const changeHomeContent = () => {
    setHomepageContent('Enterprise Investigation System');
  }

  // hide promobanner
  const hidePromoBanner = () => {
    setPromoBanner(false);
  }

  return (
    <div className="App">
      <Header />
     <h1>{ homeSection }</h1>
     <button onClick= { changeHomeContent }>Homepage</button>
     <Products />

     {/* Banner component */}
     {
      promoBanner === true ? (<Banner discountPromo = '50% off the first purchase!'/>) : null
     }
     <button onClick={ hidePromoBanner }>Remove Banner</button>
    </div>
  );
}

export default App;

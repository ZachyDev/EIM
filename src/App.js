import './App.css';
import Banner from './Banner';
import Header from './Components/Header';
function App() {
  return (
    <div className="App">
      <Header />
     <h1>EIM</h1>
     <Banner firstName="Zachary"/>
     <Banner lastName="Developer"/>
    </div>
  );
}

export default App;

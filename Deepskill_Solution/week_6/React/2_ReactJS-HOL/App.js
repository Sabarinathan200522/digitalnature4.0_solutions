import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {
  return (
    <center>
    <div className="container">
      <Home/>
      <About/>
      <Contact/>
    </div>
    </center>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Homepage from './screens/Homepage';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Homepage/>
    </div>
  );
}

export default App;

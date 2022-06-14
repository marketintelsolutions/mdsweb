import logo from './logo.svg';
import './App.css';
import Homepage from './screens/Homepage';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Homepage/>
    </div>
  );
}

export default App;

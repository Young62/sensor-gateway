import './App.css';
import About from './components/About';
import DataForm from './components/DataForm';
import Data from './components/Data';
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Route,
  Routes
} from 'react-router-dom';

function App() {  
  return (
    <Router>
      <header className="App-header">
        <h1>Sensor Dashboard</h1>

        <div>
          <NavLink to="/data">Data</NavLink>
          <NavLink to="/create">Create Sensor</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>
      </header>
      <body>
        
        <Routes>
          <Route exact path='/about' element={< About />}></Route>
          <Route path='/data/*' element={< Data />}></Route>
          <Route exact path='/create' element={< DataForm />}></Route>
        </Routes>
      </body>
    </Router>
  );
}

export default App;

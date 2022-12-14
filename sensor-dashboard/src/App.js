import './App.css';
import About from './components/About';
import Home from './components/Home';
import Data from './components/Data';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes
} from 'react-router-dom';

function App() {  
  return (
    <Router>
      <header className="App-header">
        <h1>HERBI</h1>
      </header>
      <body>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/data">Data</Link>
          </li>
        </ul>
        
        <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/about' element={< About />}></Route>
          <Route path='/data/*' element={< Data />}></Route>
        </Routes>
      </body>
    </Router>
  );
}

export default App;

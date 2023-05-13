// import logo from './logo.svg';
// import Main from './components/Main';
import './App.css';
import Chart from './components/Demo1';
import Demo from './components/Demo';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        {/* <Main></Main> */}
        <Routes>
          <Route exact path='/' element={<Demo></Demo>} ></Route>

          <Route exact path='/chart' element={<Chart></Chart>} ></Route>
        </Routes>

      </div>
    </Router>
  );
}

export default App;

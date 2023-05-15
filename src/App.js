// import logo from './logo.svg';
import Main from './components/Main';
import Navbar from './components/Navbar';
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
        <Navbar></Navbar>
        <Routes>
          <Route exact path='/' element={<Demo></Demo>} ></Route>

          <Route exact path='/chart' element={<Chart></Chart>} ></Route>
          <Route exact path='/style' element={<Main></Main>}></Route>
        </Routes>

      </div>
    </Router>
  );
}

export default App;

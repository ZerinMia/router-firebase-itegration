import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/HOme/Home';
import Login from './components/Login/Login';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Login' element={<Login></Login>}>

        </Route>
      </Routes>
    </div>
  );
}

export default App;

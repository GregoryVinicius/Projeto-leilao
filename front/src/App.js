import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Footer from './componnents/footer/Footer';

function App() {
  return (
    <>
    <Header/>
      <BrowserRouter>
        <Routes>

          <Route path='/' Componnent={Home}/>
          <Route path='/login' Componnent={Login}/>

        </Routes>
      </BrowserRouter>
    <Footer/>
    </>
  );
}

export default App;

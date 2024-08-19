import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import ResetPassword from './pages/reset-password/Reset-password';
import ForgotPassword from './pages/forgot-password/Forgot-password';
import DefaultLayout from './componnents/DefaultLayout';
import SimpleLayout from './componnents/SimpleLayout';
import Singin from './pages/singin/Singin';
import PrivateRouter from './componnents/PrivateRouter';

function App() {
  return (
    <>
    {/* <Header/> */}
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRouter/>}><Route path='/' element={<DefaultLayout><Home/></DefaultLayout>}/></Route>
          <Route path='/login' element={<SimpleLayout><Login/></SimpleLayout>}/>
          <Route path='/forgot-password' element={<SimpleLayout><ForgotPassword/></SimpleLayout>}/>
          <Route path='/singin' element={<SimpleLayout><Singin/></SimpleLayout>} />
          <Route path='/reset-password' element={<SimpleLayout><ResetPassword/></SimpleLayout>} />

        </Routes>
      </BrowserRouter>
    {/* <Footer/> */}
    </>
  );
}

export default App;

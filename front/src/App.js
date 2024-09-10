import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import ResetPassword from './pages/reset-password/Reset-password';
import ForgotPassword from './pages/forgot-password/Forgot-password';
import DefaultLayout from './componnents/DefaultLayout';
import SimpleLayout from './componnents/SimpleLayout';
import SignIn from './pages/signIn/SignIn';
import PrivateRouter from './componnents/PrivateRouter';
import Teste from './pages/teste/Teste';
import Profile from './pages/profile/Profile';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRouter/>}><Route path='/' element={<DefaultLayout><Home/></DefaultLayout>}/></Route>
          <Route path='/login' element={<SimpleLayout><Login/></SimpleLayout>}/>
          <Route path='/forgot-password' element={<SimpleLayout><ForgotPassword/></SimpleLayout>}/>
          <Route path='/singin' element={<SimpleLayout><SignIn/></SimpleLayout>} />
          <Route path='/reset-password' element={<SimpleLayout><ResetPassword/></SimpleLayout>} />
          <Route path='/profile' element={<Profile/>}/>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

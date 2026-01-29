import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Header from './components/Header'
import VerifyEmail from './pages/VerifyEmail'
import Verify from './pages/Verify'
import About from './pages/About'
import Contact from './pages/Contact'
import Notes from './pages/Notes'
import ProtectedRouter from './components/ProtectedRouter'
import ForgotPassword from './pages/ForgotPassword'
import VerifyOTP from './pages/VerifyOTP'
import ChangePassword from './pages/ChangePassword'
import UserProfile from './pages/UserProfile'

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/signup' element={<SignUp/>}></Route>
      <Route path='/verify' element={<VerifyEmail/>}></Route>
      <Route path='/verify/:token' element={<Verify/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/notes' element={<ProtectedRouter><Notes/></ProtectedRouter>}></Route>
      <Route path='/forgotPassword' element={<ForgotPassword/>}></Route>
      <Route path='/verify-otp/:email' element={<VerifyOTP/>}></Route>
      <Route path='/change-password/:email' element={<ChangePassword/>}></Route>
      <Route path='/user-profile' element={<ProtectedRouter><UserProfile/></ProtectedRouter>}></Route>
    </Routes>
    </>
  )
}

export default App

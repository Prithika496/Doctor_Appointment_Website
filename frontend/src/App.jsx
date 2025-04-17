import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import Myprofile from './pages/Myprofile'
import MyAppointments from './pages/MyAppointments'
import Appointments from './pages/Appointments'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <ToastContainer />
      <Navbar/>
      <Routes>
        <Route path = '/' element ={<Home />} />
        <Route path = '/doctors' element ={<Doctors />} />
        <Route path = '/doctors/:speciality' element ={<Doctors/>} />
        <Route path = '/login' element ={<Login />} />
        <Route path = '/about' element ={<About />} />
        <Route path = '/contact' element ={<Contact/>} />
        <Route path = '/my-profile' element ={<Myprofile />} />
        <Route path = '/my-appointments' element ={<MyAppointments />} />
        <Route path = '/doctors/appointments/:docId' element ={<Appointments />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
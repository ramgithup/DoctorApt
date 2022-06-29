import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/shared/home/Home';
import MainNavbar from './components/shared/MainNavbar';
import Footer from './components/shared/Footer';
import Nomatch from './components/shared/Nomatch';
import Doctors from './components/doctors/Doctors';
import DoctorShow from './components/doctors/DoctorShow';
import Users from './components/users/Users';
import UserShow from './components/users/UserShow'


function App() {
  return (
    <>
    <MainNavbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Doctors' element={<Doctors />} />
      <Route path='/doctors/:id' element={<DoctorShow />} />
      <Route path='/users' element={<Users />} />
      <Route path='/users/:id' element={<UserShow />} />
      <Route path='/*' element={<Nomatch />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;

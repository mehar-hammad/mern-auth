import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Header from './components/Header';

export default function App() {
  return (
    <BrowserRouter>
    <Header /> 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Sign-in' element={<Signin />} />
        <Route path='/Sign-up' element={<Signup />} />
        <Route path='/Profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

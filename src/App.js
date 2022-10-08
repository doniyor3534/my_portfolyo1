import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {  Routes, Route } from 'react-router-dom'
import Portfolyo from './components/Portfolyo';
import Aboutme from './components/AboutMe';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App container-fluid p-0">
        <Navbar />
           <Routes>
              <Route path='/' exact element={<Home/>}></Route>
              <Route path='/' exact element={<Home/>}></Route>
              <Route path='/aboutme' element={<Aboutme/>}></Route>
              <Route path='/portfolyo' element={<Portfolyo/>}></Route>
              <Route path='/contact' element={<Contact/>}></Route>
           </Routes>
        <Footer />
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { useState} from'react'
//Elements of Home page
import Navbar from'../src/components/Navbar'
import Sidebar from'../src/components/Sidebar'

//pages
import Home from'../src/pages/Home'
import Explorer from'../src/pages/Explorer'
import SignUpForm from'../src/pages/SignUpForm'
import './App.scss';

function App() {
  const [showNav, setShownav]= useState(true);
  return (
    <Router>
      <header>
      <div className="iconMods">
      <GiHamburgerMenu onClick={()=> setShownav(!showNav)}/>
        </div>
      </header>
        <Sidebar show={showNav}/>
        <div className="aligText">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Explorer" element={<Explorer />} />
              <Route path="/SignUpForm" element={<SignUpForm />} />
            </Routes>
            </div>
    </Router>
  );
}

export default App;

import { useState } from 'react'
import './App.css'


function NavBar() {
    const [count, setCount] = useState(0)
  
    return (
      <nav id="nav-bar">
        <div id="merahund-p">
            <p>MERAHUND</p>
        </div>
            
        <div className="nav-container">
            <p className="navbar-p">HOME</p>
            <p className="navbar-p">KURSER</p>
            <p className="navbar-p">KALENDER</p>
            <p className="navbar-p">KONTAKT</p>
        </div>
      </nav>
    )
  }
  
  export default NavBar
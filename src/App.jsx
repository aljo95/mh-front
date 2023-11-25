import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './Home.jsx';
import Kurser from './components/Kurser.jsx';
import Rasthage from './components/Rasthage.jsx';

function App() {
//<Route path="/kurser/tranings-och-rasthage/" Component={Login} />

  // REACT ROUTER HERE!
  return (
    <main>
      <Routes>
        <Route path='/' Component={Home} exact/>
        <Route path='/kurser' Component={Kurser} />
        <Route path="/kurser/tranings-och-rasthage/" Component={Rasthage} />
      </Routes>
    </main>
  )
}

export default App

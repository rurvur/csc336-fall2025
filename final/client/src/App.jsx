import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom";

import Home from './Home.jsx';
import About from "./About.jsx"
import Pokemon1 from "./Pokemon1.jsx"
import Pokemon2 from "./Pokemon2.jsx"
import Pokemon3 from "./Pokemon3.jsx"


function App() {

  return (
    <>
      <BrowserRouter>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/pokemon1">Slot 1</NavLink>
          <NavLink to="/pokemon2">Slot 2</NavLink>
          <NavLink to="/pokemon3">Slot 3</NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/pokemon1" element={<Pokemon1/>}/>
          <Route path="/pokemon2" element={<Pokemon2/>}/>
          <Route path="/pokemon3" element={<Pokemon3/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

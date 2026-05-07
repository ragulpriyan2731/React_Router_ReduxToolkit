import Home from "./Components/Home"
import Firstpage from "./Components/Firstpage"
import Secondpage from "./Components/Secondpage"
import {Routes, Route, Link } from "react-router-dom"


function App() {

  return (
    <div className="flex flex-col items-center">
    
   
      <nav>
      <Link to="/">Home</Link>
      <br/>
      <Link to="/Firstpage">Firstpage</Link>
      <br />
      <Link to="/Secondpage">Secondpage</Link>
      </nav>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/Firstpage" element ={<Firstpage />} />
        <Route path="/Secondpage" element ={<Secondpage />} />
       </Routes>

  

    </div>
  )
}

export default App

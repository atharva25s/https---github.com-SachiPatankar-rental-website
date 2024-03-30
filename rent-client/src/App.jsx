import {Routes, Route} from "react-router-dom";
import { Navbar,Loginpage } from "./components";
import Layout from "./Layout";


function App(){
 return (
    <Routes>
      <Route path="/" element={<Layout/>}>
          <Route path="/login" element = {<Loginpage/>}/>
      </Route>
    </Routes>
  )
}

export default App

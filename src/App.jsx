import { Route,Routes } from "react-router";
import Home from "./Component/Home/Home";
import Work from "./Component/Pages/Work/Work";
import Conect from "./Component/Pages/Conect/Conect";
import About from "./Component/Pages/About/About";
import LoginForm from "./Component/Pages/LoginForm/LoginForm";
import Sliderr from "./Component/Sliderr/Sliderr";


function App() {
  return(
    <div>

<Sliderr />
      
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Conect"  element={<Conect />}/>
        <Route path="/Work"  element={<Work />}/>
        <Route path="/About"  element={<About />}/>
        <Route path="/LoginForm"  element={<LoginForm />}/>
      </Routes>



    </div>
  )
  
}

export default App
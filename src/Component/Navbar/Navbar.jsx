import { Link } from "react-router-dom"
import Login from "../Login/Login"
import "./nav.css"

function Navbar() {
    return(
        <div className="conteiner">
            <nav>
                <ul>
                    <Link to="/"><li>خانه</li></Link>
                    <Link to="/Conect"><li>تماس</li></Link>
                    <Link to="/Work"><li>همکاری</li></Link>
                    <Link to="/About"><li>درباره ما</li></Link>
                </ul>
            </nav>
            <Login />
        </div>
    )
    
}

export default Navbar
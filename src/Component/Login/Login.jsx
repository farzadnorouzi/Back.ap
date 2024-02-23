import { useNavigate } from "react-router";
import "./Login.css";

function Login() {
    const Navigate = useNavigate();
    const handelbtn =()=>{
        Navigate('/LoginForm')

    }
    return(
        <div className="btn"><button onClick={handelbtn} className="btn1">ورود /ثبت نام</button></div>
    )
    
}

export default Login
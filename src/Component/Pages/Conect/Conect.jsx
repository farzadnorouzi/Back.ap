import "./Conect.css";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

function Conect() {
    return(
        <>
        
        <div className="Conect1">
            <h1>rike</h1>
            <p>برای تماس با ما از طریق شماره تماس های زیر اقدام نمایید
                <br />045678490 <br />045328790</p>
                <div className="Conect2"><p>ما را در فضای مجازی دنبال کنید<br />
                <div className="Conect3"><FaInstagram /><FaTelegramPlane /><FaTwitter /><FaWhatsapp /></div></p></div>
        </div>
      
        </>
    )
    
}

export default Conect
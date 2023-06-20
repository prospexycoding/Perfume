import location from "../All images/location.png"
import gmail from "../All images/gmail.png"
import phone from "../All images/phone.png"
import peff from "../All images/qual 2.png"

export default function ContactDesign(){
    return(
        <div className="contact-container">
            <div className="contact-img">
                <div className="img-box">
                    <img src={peff}  width={100}/>
                </div>
            </div>
            <div className="contact-stuff">
               <div className="address">
                    <img src={location} width={50}/>
                    <span className="address-text">
                        <h2>Address:</h2>
                        <h4>No. 20 Koya str. Surulare Lagos.</h4>
                    </span>
                </div>

                <div className="number">
                    <img src={phone} width={50}/>
                    <span className="number-text">
                        <h2>Contact Number:</h2>
                        <h4>07061266382, 09038823237.</h4>
                    </span>
                </div>
                
                <div className="email-address">
                    <img src={gmail} width={50}/>
                    <span className="email-text">
                        <h2>Email Address:</h2>
                        <h4>idisiprosper87@gmail.com.</h4>
                    </span>
                </div>
            </div>
        </div>
    )
}
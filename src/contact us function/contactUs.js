import Header from "../header"
import "../contact us function/contactUs.css"
import ContactDesign from "./contactUsDesign"
import SecondFooter from "../secondFooter"

export default function ContactUs(){
    return(
        <div className="container">
             <Header/>
                <h1 className="contact-text">Contact Us</h1>
             <ContactDesign/>
             <SecondFooter/>
             
        </div>
    )
}
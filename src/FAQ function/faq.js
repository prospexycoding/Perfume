import Header from "../header"
import "../FAQ function/faq.css"
import FaqContainer from "./faqContainer"
import SecondFooter from "../secondFooter"

export default function Faq(){
    return(
        <div className="container">
             <Header/>
             <FaqContainer/>
             <SecondFooter/>
        </div>
    )
}
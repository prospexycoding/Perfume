import Header from "../header"
import Formdesign from "./formdesign"
import "../form/form.css"
import SecondFooter from "../secondFooter"
import "../styling/footer.css"

export default function Form(){
    return(
        <div className="container">
              <Header/>
              <Formdesign/>
              <SecondFooter/>

        </div>
    )
}
import Header from "../header"
import Categoties from "./categories"
import SecondFooter from "../secondFooter"


export default function Shop(){
    return(
        <div className="container">
               <Header/>
               <Categoties/>
               <SecondFooter/>
        </div>

    )
}
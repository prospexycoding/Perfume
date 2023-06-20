import Header from "../header"
import Banner from "./banner"
import "../home functions/home.css"
import Qualities from "./qualities"
import ReviewsContainer from "./reviewsContainer"
import Footer from "../footer"
import "../styling/footer.css"
import { useState ,useEffect} from "react"


export default function Home(){
        





    return(
        <div className="container">

            <Header/>
            <Banner/>
            <Qualities/>
            <ReviewsContainer/>
            <Footer/>
            
        </div>
    )
}
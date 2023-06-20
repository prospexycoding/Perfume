
import SecondFooter from "../secondFooter"
import Header from "../header"
import "../reviews/mainReviews.css"
import MainReviewsContainer from "./mainReviewsContainer"



export default function MainReviews(){
    return(
        <div className="container">
              <Header/>
              <MainReviewsContainer/>
              <SecondFooter/>
        </div>
    )
}
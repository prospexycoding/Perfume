import { NavLink } from "react-router-dom"
import { Array } from "./reviewsArray"
import ReviewStyling from "./reviewsStyling"

export default function ReviewsContainer(){

    const done = Array.map((vvv)=>{
        return(
              <ReviewStyling avatar={vvv.avatar}
                             star={vvv.star}
                             text={vvv.text}/>
        )
    })





    return(
        <div className="review-container">
            <h1>Customers Reviews</h1>
            <div className="maii">
                <NavLink to='/mainreviews'><button>All Reviews</button></NavLink>
               <div className="review-box">
                  {done}
                </div>
            </div>
           
        </div>
    )
}
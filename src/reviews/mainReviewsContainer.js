import { ReviewsArray } from "./mainreviewsarray"
import ReviewsDesign from "./reviewsDesign"

export default function MainReviewsContainer(){

    const finished = ReviewsArray.map((aaa)=>{
        return(
             <ReviewsDesign avatar={aaa.avatar}
                            star={aaa.star}
                            text={aaa.text}
                            one={aaa.one}
                            two={aaa.two}
                            comment={aaa.comment}/>
        )
    })


    return(
        <div className="main-review-container">
            <h1>Customers Reviews</h1>
            <div className="main-maii">
               <div className="main-review-box">
                     {finished}
                </div>
            </div>
           
        </div>
    )
}
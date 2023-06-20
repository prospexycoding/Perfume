import { FaqArray } from "./FaqArray"
import FaqStyling from "./faqStyling"

export default function FaqContainer(){

    const done = FaqArray.map((vvv)=>{
        return (
            <FaqStyling question={vvv.question}
                           answer={vvv.answer}/>
        )
    })


    return(
        <div className="faq-container">
                             <h1>FAQ</h1>

            <div className="faq-con">

                 <div className="faq-box">
                     {done}
                 </div>
            </div>
           
            
        </div>
    )
}
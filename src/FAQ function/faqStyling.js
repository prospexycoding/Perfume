import { useState } from "react"


export default function FaqStyling(props){

    const [change, setchange] = useState(false)
    const [see, Setsee] = useState(false)

     function handlechange(){
        setchange((event)=>{
            return !event

        })
     }

     function handlesee(){
        return(
            Setsee((event)=>{
                return ! event
            })
        )
     }
    
     
    return(
        <div className="faq-styling">
            <div className="question">
                <h2>{props.question}</h2>
                <small className="switch" onClick={handlechange}>{change ? "-" : "+"}</small>
            </div>
            <div className="answer" style={{display:change? "flex" : "none"}}>
                <p>{see?props.answer : `${props.answer.substring("0", "35")}   ....`}<button onClick={handlesee}>{see? "seeless" : "seemore"}</button></p>
            </div>

        </div>
    )
}
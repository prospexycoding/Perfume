import likes from "../All images/likes.png"
import comments from "../All images/comment.png"
import Whitelike from "../All images/likesWhite.png"
import { useState } from "react"

export default function ReviewsDesign(props){

    const [change,setChange] = useState(true)
    const [see, setSee] = useState(false)

    function handlechange(){
        setChange((event)=>{
            return ! event
        })
    }

    function handlesee(){
        setSee((event)=>{
            return ! event
        })
    }

    return(
        <div className="main-card">
        <img className="main-avatar" src={props.avatar} width={50}/>
        <span className="main-star">
            <img src={props.star} width={20}/>
            <img src={props.star} width={20}/>
            <img src={props.star} width={20}/>
            <img src={props.star} width={20}/>
            <img src={props.star} width={20}/>
        </span>
        <p >{see ? props.text : `${props.text.substring("0","30",)}...`} <button className="seemore-btn" onClick={handlesee}>{see ? "seeless " : "seemore"}</button></p>

        <div className="comments">
           <span><img src={comments} /> <h4>{props.comment}</h4></span>
           <span><img src={change ? Whitelike : likes} onClick={handlechange}/> <h4>{change ? props.one : props.two}</h4></span>
        </div>
    </div>
    )
}
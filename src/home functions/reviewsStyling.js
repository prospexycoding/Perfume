
export default function ReviewStyling(props){
    return(
        <div className="card">
            <img className="avatar" src={props.avatar} width={50}/>
            <span className="star">
                <img src={props.star} width={20}/>
                <img src={props.star} width={20}/>
                <img src={props.star} width={20}/>
                <img src={props.star} width={20}/>
                <img src={props.star} width={20}/>
            </span>
            <p>{props.text}</p>
        </div>
    )
}
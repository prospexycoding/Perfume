


export default function Formdesign(){
    return(
        <div className="form-container">
            <h1>Feed Back</h1>

            <form>
                <input type="text"  placeholder="First name"/>
                <input type="text"  placeholder="Last name"/>
                <input type="Email"  placeholder="Email"/>
                <input type="number"  placeholder="Phone number"/>
                <textarea cols="20" rows="10" placeholder="Write message"/>
                <input type="submit" className="submit"/>
            </form>
        </div>
    )
}
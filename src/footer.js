import Visa from "./All images/visa.png"
import mastercard from "./All images/mastercard.png"
import paypal from "./All images/paypal.png"
import twitter from "./All images/twitter.png"
import instagram from "./All images/instragram.png"
import youtube from "./All images/youtube.png"
import facebook from "./All images/facebook.png"
import { NavLink } from "react-router-dom"

export default function Footer(){
    return(
        <footer>
            <div className="footer-box">
                <div className="first">
                    <h1>Scent</h1>
                    <p>We use a blend of natural essential <br/>oil  and plant extracts to create our <br/> fregrance to ensure a pure <br/> and authentic scent.</p>
                    <div className="social">
                        <img src={twitter} width={25}/>
                        <img src={facebook} width={25}/>
                        <img src={youtube} width={25}/>
                        <img src={instagram} width={25}/>
                    </div>
                </div>

                <div className="second">
                      <h1>Our Stores</h1>
                      <h3>Lagos</h3>
                      <h3>Abuja</h3>
                      <h3>Delta</h3>
                      <h3>Texas</h3>
                      <h3>Manchester</h3>
                      <h3>Spain</h3>
                </div>

                <div className="third">
                      <h1>Useful Links</h1>
                      <NavLink to='/faq'>Faq</NavLink>
                      <NavLink to='/form'>Feed Back</NavLink>
                      <NavLink to='/contact'>Contact Us</NavLink>
                      <NavLink to='/mainreviews'>Reviews</NavLink>
                </div>

                <div className="forth">
                       <NavLink to='form'><button>Feed Back</button></NavLink>
                </div>

            </div>


            <div className="rights-reserved">
                <p>&copy; All Rights Reserved. Designed By Prosper. Powered By Codeprof Academy.</p>
                <div className="payment">
                    <img src={mastercard} width={30} />
                    <img src={paypal} className="paypal"  />
                    <img src={Visa}  width={30} />
                </div>
            </div>
        </footer>
    )
}
import { NavLink } from "react-router-dom"

import img from "../All images/banner-img.png"
import img2 from "../All images/banner_2-img.png"

export default function Banner(){
    return(
        <div className="banner">
          <img className="img1" src={img} width={700}/>
          <div className="right">
               <div className="fall">
                   <h1>Fall In Love With Our <br/> <h2>Signature Perfumes</h2></h1>
               </div>
               <div className="discover">
                   <h3>Discover the perfect fragrance <br/> for you with our wide <br/> perfect selection  ...</h3>
               </div>

               <img className="img2" src={img2} width={100}/>

               <div className="btn">
                  <NavLink to='/shop'><button>SHOP NOW</button></NavLink>
               </div>

                                    
          </div>

        </div>
    )
}
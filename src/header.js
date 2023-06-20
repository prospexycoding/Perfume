import { NavLink } from "react-router-dom"
import './styling/header.css'
import search from "./All images/search.png"
import cartimg from "./All images/cart.png"
import logo from "./All images/qual 4.png"
import menu from "./All images/menu.png"
import { useState } from "react"
import { useContext, useRef } from "react"
import { cartContext } from "./useContext"

export default function Header(){
    const {cart,setcart} = useContext(cartContext)

    const activeLink = ({isActive})=>{
        return{
            color: isActive ? "silver": "white"
        }
    }

    const [show,setShow] = useState(false)

    function handleshow(){
        setShow((event)=>{
            return ! event
        })
    }



    return(
        <header>
            <h2>Scent.ng</h2>
            <img className="logo" src={logo} width={25}/>
            <nav className={show ? "slide" : "noslide"}>
                <NavLink to='/' style={activeLink}>Home</NavLink>
                <NavLink to='/shop' style={activeLink}>Shop</NavLink>
                <NavLink to='/contact' style={activeLink}>Contact Us</NavLink>
                <NavLink to='/faq' style={activeLink}>Faq</NavLink>
            </nav>

            <div className="input-box">
                <input type="text" placeholder="Search"/>
                <img src={search} width={25}/>
            </div>


             <div className="cart-box">
                <NavLink to='/cart' style={activeLink}>
                      <img src={cartimg} width={25}/>
                      <h3>Cart</h3>
                      <small>{cart.length}</small>
                </NavLink>
              </div>

              <img className="menu" src={menu}  width={30} onClick={handleshow}/>
           
        </header>
    )
}
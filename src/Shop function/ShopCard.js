import "../Shop function/shop.css"
import { useContext, useRef } from "react"
import { cartContext } from "../useContext"



export default function ShopCard({prod}){
    const btnRef = useRef(null)

    const {cart,setcart} = useContext(cartContext)
    
        const handleclick = ()=>{
            if(btnRef.current.value === "Add to cart"){
                setcart([...cart, prod])
                btnRef.current.value = "Remove from cart "
            }else if(btnRef.current.value === "Remove from cart"){
                setcart(
                    cart.filter((item)=>{
                        return item.id !==  prod.id
                    })
                )
            }
        }


    return(
        <div className="product-card">
            <div className="product-img">
                <img src={prod.img}/>
            </div>
            <h2 className="product-name">{prod.productname}</h2>
            <h3 className="product-price">${prod.productprice}</h3>

            <input onClick={handleclick} value={cart.includes(prod)? "Remove from cart" : "Add to cart"} ref={btnRef} className="product-btn" type="button"/> 
        </div>
    )
}
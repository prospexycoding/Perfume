import Header from "../header"
import "../cart function/cart.css"
import { useContext, useRef } from "react"
import { cartContext } from "../useContext"
import ShopCard from "../Shop function/ShopCard"
import { useEffect ,useState} from "react"
import SecondFooter from "../secondFooter"

export default function Cart(){
    const {cart,setcart} = useContext(cartContext)
    const [total, setTotal] = useState()


    useEffect(()=>{
        const myTotal = cart.reduce((total, item)=>{
            return total + Number(item.productprice)
        },0)

        setTotal(myTotal.toFixed(2))
    
    },[cart])
    
    return(
        <div className="container">
            
             <Header/>

             <div className="cart-contain">
               <div className="top-cart">
                 <h1>Cart</h1>
                 <h2>Total Amount : <span className="amount">${total}</span></h2>

               </div>

             <div className="cart-main">
                    {
                        cart.map((pro)=>{
                            return <ShopCard key={pro.id} prod={pro}/>
                        })
                     }

             </div>
             </div>
           
           <SecondFooter/>
        </div>
    )
}
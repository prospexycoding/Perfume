import { createContext,useState } from "react";

export const cartContext = createContext()

export default function Context({children}){
    const [cart,setcart] = useState([])


    return(
        <cartContext.Provider value={{cart,setcart}}>
             {children}
        </cartContext.Provider>

    )
}
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./styling/app.css"
import Home from "./home functions/home"
import Shop from "./Shop function/shop"
import ContactUs from "./contact us function/contactUs"
import Faq from "./FAQ function/faq"
import Cart from "./cart function/cart"
import Form from "./form/form"
import MainReviews from "./reviews/mainReviews"





export default function App(){




    return(
        

        <BrowserRouter>

            <Routes>
               
                <Route path="/" element={<Home/>}/>
                <Route path="/shop" element={<Shop/>}/>
                <Route path="/contact" element={<ContactUs/>}/>
                <Route path="/faq" element={<Faq/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/form" element={<Form/>}/>
                <Route path="/mainreviews" element={<MainReviews/>}/>
            </Routes>
        </BrowserRouter>
        
    )
}
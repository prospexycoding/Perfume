import { useState } from "react"
import ShopCard from "./ShopCard"
import My_arry from "../Shop function/shoparray"



const categories = ["All", ...new Set(My_arry.map((color)=>{
    return color.cat
}))]

export default function Categoties(){
    const [product, setProduct] = useState(My_arry)
    const [mycategories, setmyCategories] = useState(categories)


        const filteritems = (cat)=>{
            if(cat === "All"){
                setProduct(My_arry)
                return;
            }

            const newitems = My_arry.filter((color)=> color.cat === cat)

            setProduct(newitems)
        }


    return(
        <div className=" category">

            <div className="category-box">
              {mycategories.map((category, index)=>{
                return(
                    <button onClick={()=>filteritems(category)}
                    key={index} className="product-btn">{category}</button>

                )
             })}  
            </div>

            <div className="products">
                     {
                        product.map((pro)=>{
                            return <ShopCard key={pro.id} prod={pro}/>
                        })
                     }
            </div>

        </div>
    )
}
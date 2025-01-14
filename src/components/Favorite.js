import React from "react";
import { useGlobalContext } from "../context";


export default function Favorite(){
   const { favmeals,removeMeal } = useGlobalContext()
   console.log(favmeals)
    return (       
<section className="container-fluid bg-black d-flex-row mx-auto  text-white ml-5 "> 

 <p className="text-align-center mx-auto ">Favorites</p>
 <div className="container-fluid d-inline-flex  ">
{ favmeals.map((me)=>{
            return (
                <div key={me.idMeal} className="d-flex flex-column align-items-center">
             
               
                 <img src={me.strMealThumb} alt="meal im" className="img-fluid fav-img rounded-circle  "/>
               
                 <button className="border-0 bg-transparent text-white p-2 remove-btn" onClick={()=> removeMeal(me.idMeal)}>remove</button> 
                
                 </div> 
                
            )
        })}
          </div>
       </section> 
        
    )
}
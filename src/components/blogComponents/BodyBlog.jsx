import React,{useState,useEffect} from "react";
import EventComponent from "./bodyComponents/EventComponent";
import NewsComponent from "./bodyComponents/NewsComponent";



export default function BodyBlog() {
    const [switchSection, setSwitchSection] = useState(true)

   const handleSwitchOn = () =>{
      setSwitchSection(true);
   }
   const handleSwitchOff = () =>{
    setSwitchSection(false);
 }
    
    return(
        <>
        <div className="blog-section-body" id="blog-section-body">
         <div className="button-bx">
         <button class="button-58" role="button" onClick={handleSwitchOn}>Eventos</button>
         <button class="button-58" role="button" onClick={handleSwitchOff}>Noticias</button>
         </div>
         
         {switchSection&&<EventComponent/>}
         {switchSection===false&&<NewsComponent/>}
         
        
        </div>
        </>
    )
}
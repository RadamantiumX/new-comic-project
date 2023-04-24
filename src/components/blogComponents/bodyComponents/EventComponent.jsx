import React,{useEffect,useState} from "react";
import '../../../blog.css';

import Banner1 from '../../../assets/img/banner-resize.jpg';
import Banner2 from '../../../assets/img/baner2.jpg';
import Banner3 from '../../../assets/img/banner3.jpg';

import { Link } from "react-router-dom";

export default function EventComponent() {
    
    const [hover, setHover] = useState(false);

    //Solo para pruebas
    const posts =
    [    
    {
        titulo: "Titulo1-Event",
        texto: "Texto generico para cada post, se utiliza solo para pruebas",
        imagen:`${Banner1}`
    },
   {
        titulo: "Titulo2-Event",
        texto: "Texto generico para cada post, se utiliza solo para pruebas",
        imagen:`${Banner2}`
    },
   {
        titulo: "Titulo3-Event",
        texto: "Texto generico para cada post, se utiliza solo para pruebas",
        imagen:`${Banner3}`
    } 

 ]

useEffect(()=>{
   
},[]
)
    return(
        <>
       
        {posts.map(p=>(<Link to='/post'><div onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} className="record-box" style={{backgroundImage:`linear-gradient(to top, rgba(94, 18, 216, 0.5)0%,rgba(62, 17, 167, 0.7)100%),url('${p.imagen}')`}}>
             
             <div className="inner-box-post">
             <h3 className="post-title">{p.titulo}</h3>
             
             <p className="post-text">{p.texto}</p>
             {hover&&<h4 className="hover-text" ><i class="fa-solid fa-plus"></i> Ver mas</h4>}    
             </div>

         </div></Link>))
         } 
        </>
    )
}
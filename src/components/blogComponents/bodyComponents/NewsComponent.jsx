import React from "react";

import Banner1 from '../../../assets/img/banner-resize.jpg';
import Banner2 from '../../../assets/img/baner2.jpg';
import Banner3 from '../../../assets/img/banner3.jpg';

import { Link } from "react-router-dom";

export default function NewsComponent() {
     //Solo para pruebas
     const posts =
     [    
     {
         titulo: "Titulo1-News",
         texto: "Texto generico para cada post, se utiliza solo para pruebas",
         imagen:`${Banner1}`
     },
    {
         titulo: "Titulo2-News",
         texto: "Texto generico para cada post, se utiliza solo para pruebas",
         imagen:`${Banner2}`
     },
    {
         titulo: "Titulo3-News",
         texto: "Texto generico para cada post, se utiliza solo para pruebas",
         imagen:`${Banner3}`
     } 
 
    ] 
    return(
        <>
         {posts.map(p=>(<Link to="/post"><div className="record-box" style={{backgroundImage:`linear-gradient(to top, rgba(94, 18, 216, 0.5)0%,rgba(62, 17, 167, 0.7)100%),url('${p.imagen}')`}}>
             
             <div className="inner-box-post">
             <h3 className="post-title">{p.titulo}</h3>
             <p className="post-text">{p.texto}</p>    
             </div>

         </div></Link>))
         }
        </>
    )
}
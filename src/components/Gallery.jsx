import React,{useState,useEffect} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Joker from '../assets/img/joker.jpg'
import Merlina from '../assets/img/merlina.jpg';
import Daredevil from '../assets/img/daredevil.jpg';
import Loki from '../assets/img/loki.jpg';
import Anime from '../assets/img/anime.jpg'
import Homelander from '../assets/img/homelander.jpg';
import Batman from '../assets/img/batman.jpg'
import Instagram from '../assets/icons/instagram.png'



export default function Gallery() {

   const images = [Joker,Merlina,Daredevil,Loki,Anime,Homelander,Batman,Instagram]
    const [currentIndex, setCurrentIndex] = useState(0);

   

  const handleNext =()=>{
    setCurrentIndex(currentIndex+1)
    if (currentIndex === images.length -4){
      return setCurrentIndex(0)
   }
  }

  const handlePrev =()=>{
    setCurrentIndex(currentIndex-1)
  }

  

    return(

      
       <div id="gallery">
          
            <div className="wrapper">
                <i className="arrow-left fa-solid fa-angle-left" onClick={handlePrev}></i>
               <div className="carousel-n" id="caro">

               {images.map((image, index)=>(
                <>
                <img key={index} style={{transform:`translate(-${currentIndex * 100}%)`}} src={image} alt="comic-character"/>
                </>
               ))}
                 
               </div>
               <i className="arrow-right fa-solid fa-angle-right" onClick={handleNext}></i>
            </div>
    </div>
   

    

    )
}
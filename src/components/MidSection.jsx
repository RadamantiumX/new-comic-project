import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Photo from '../assets/img/dani-fondo.jpg'

export default function MidSection() {
    return(
        <div className="about-us">
        <Container>
            <div className="content">
                <div><img src={Photo} className="dt-img img-fluid" alt="Daniel Torazza" /></div>
              <div className="block"><h3 className="subtitle"><span className="and">Acerca</span> de mi...</h3><p className="text-dt"><span className="and">Lorem</span> ipsum dolor sit amet consectetur adipisicing elit. Nam maiores ad consequuntur, distinctio officia omnis sapiente quaerat tenetur facere aliquam ea quibusdam cupiditate doloremque nostrum laboriosam fugit tempore? Libero iure illum blanditiis a laboriosam nihil. Omnis facilis perferendis quis! Explicabo optio voluptatum soluta et dolore ipsa neque architecto modi velit!</p></div> 
            </div>
        </Container>
        </div>
    )
}
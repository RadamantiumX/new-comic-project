import React from "react";
import Banner from '../../assets/img/banner.jpg';
import '../../blog.css';

export default function PostBody(params) {
    return(
        <>
        <div className="post-section">
            <div className="post-box">
                <img src={Banner} alt="imagen-post-comic-Daniel-Torazza" />
                <h3>Titulo del Post</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quia deserunt facilis quod impedit asperiores culpa suscipit non et iure.</p>
            </div>
        </div>
        </>
    )
}
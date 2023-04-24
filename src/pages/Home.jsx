import React from "react";
import Header from "../components/Header";
import Gallery from "../components/Gallery";
import MidSection from "../components/MidSection";
import News from "../components/News";

export default function Home() {
    return(
        <>
        <Header/>
        <News/>
        <MidSection/>
        <Gallery/>
        
        </>
    )
}
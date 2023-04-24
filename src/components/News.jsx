import React from "react";
import { Card } from "react-bootstrap";
import Banner from '../assets/img/banner.jpg'

export default function News() {
    return(
        <section class="blog-area pt-5 pb-5">
        <div class="container">
            <div class="row">
                <div class="col-xl-12 text-center pb-3">
                    <div class="section-title service-title">
                        <h2><span className="and">Ultimas</span> Noticias</h2>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                            alteration in some form,words which don't look even slightly believable.</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                    <div class="blog-wrapper home-blog-wrapper white-bg">
                        <div class="blog-thumb">
                            <a className="a" href="https://bit.ly/2LHKl61">
                                <img className="img" src={Banner} alt="Banner1" />
                            </a>
                        </div>
                        <div class="meta-info">
                            <ul className="ul">
                                <li class="posts-time">January 08, 2019</li>
                            </ul>
                        </div>
                        <div class="blog-content home-blog">
                            <h2 class="blog-title">
                                <a className="a" href="https://bit.ly/2LHKl61">4 Myths Rand Fishkin Wants You to Question Launching</a>
                            </h2>
                            <p>Must explain to you how all this mistaken idea of denouncing pleasure and praising pain was
                                born and I will give you a complete
                                account of the system </p>
                        </div>
                        <div class="link-box home-blog-link">
                            <a className="a" href="https://bit.ly/2LHKl61">Read More</a>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                    <div class="blog-wrapper home-blog-wrapper white-bg">
                        <div class="blog-thumb">
                            <a className="a" href="https://bit.ly/2LHKl61" >
                                <img className="img" src={Banner} alt="Banner2" />
                            </a>
                        </div>
                        <div class="meta-info">
                            <ul className="ul">
                                <li class="posts-time">January 08, 2019</li>
                            </ul>
                        </div>
                        <div class="blog-content home-blog">
                            <h2 class="blog-title">
                                <a className="a" href="https://bit.ly/2LHKl61">How To Be The Highest Marketer On Your Team And Skills</a>
                            </h2>
                            <p>Must explain to you how all this mistaken idea of denouncing pleasure and praising pain was
                                born and I will give you a complete
                                account of the system </p>
                        </div>
                        <div class="link-box home-blog-link">
                            <a className="a" href="https://bit.ly/2LHKl61">Read More</a>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                    <div class="blog-wrapper home-blog-wrapper white-bg">
                        <div class="blog-thumb">
                            <a className="a" href="https://bit.ly/2LHKl61">
                                <img className="img" src={Banner} alt="Banner3" />
                            </a>
                        </div>
                        <div class="meta-info">
                            <ul className="ul">
                                <li class="posts-time">January 08, 2019</li>
                            </ul>
                        </div>
                        <div class="blog-content home-blog">
                            <h2 class="blog-title">
                                <a className="a" href="https://bit.ly/2LHKl61">How To Be The Highest Marketer On Your Team And Skills</a>
                            </h2>
                            <p>Must explain to you how all this mistaken idea of denouncing pleasure and praising pain was
                                born and I will give you a complete
                                account of the system </p>
                        </div>
                        <div class="link-box home-blog-link">
                            <a className="a" href="https://bit.ly/2LHKl61">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
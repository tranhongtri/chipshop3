import React from "react";
import Link from 'next/link'

const Hero = () => {
    return (
        <section className="hero hero-style-1">
            <div className="hero-slider">
                <div className="slide">
                    <div className="container">
                        <div className="row">
                            <div className="col col-lg-5 slide-caption">
                                <div className="slide-title">
                                    <h2><span>Fresh</span> Organic <span>Honey</span></h2>
                                </div>
                                <div className="btns">
                                    <Link href="/shop" className="btn theme-btn">Shop Now <i className="fa fa-angle-double-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right-image">
                        <div className="simg-1"><img src='/images/slider/img-1.png' alt="slide-img" /></div>
                        <div className="simg-2"><img src='/images/slider/img-2.png' alt="slide-img" /></div>
                    </div>
                    <div className="hero-shape-img"><img src='/images/slider/img-3.png' alt="slide-img" /></div>
                </div>
            </div>
        </section>
    )
}

export default Hero;
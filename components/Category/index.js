import React from 'react'
import Link from 'next/link'


const Category = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }
    return(
        <section className="category-area section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="category-wrap">
                            <div className="category-title">
                                <h2>Our Honey Category</h2>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, eos fugit officiis
                                    error ipsum, dolor ducimus nam ratione nulla deleniti inventore blanditiis.</p>
                            </div>
                            <div className="category-item">
                                <div className="category-icon">
                                    <img src='/images/category/icon-1.png' alt="" />
                                </div>
                                <div className="category-content">
                                    <h2><Link onClick={ClickHandler} href="/shop">Queen Bee Honey</Link></h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing industry has been the industry's standard eos fugit industry's standard consectetur ipsum.</p>
                                </div>
                            </div>
                            <div className="category-item">
                                <div className="category-icon">
                                    <img src='/images/category/icon-2.png' alt="" />
                                </div>
                                <div className="category-content">
                                    <h2><Link onClick={ClickHandler} href="/shop">Sunflower Honey</Link></h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing industry has been the industry's standard eos fugit industry's standard consectetur ipsum.</p>
                                </div>
                            </div>
                            <div className="category-item">
                                <div className="category-icon">
                                    <img src='/images/category/icon-3.png' alt="" />
                                </div>
                                <div className="category-content">
                                    <h2><Link onClick={ClickHandler} href="/shop">Manuka Honey</Link></h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing industry has been the industry's standard eos fugit industry's standard consectetur ipsum.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="category-img">
                            <img src='/images/category/category.jpg' alt="" />
                            <div className="ct-img"><img src='/images/category/icon-4.png' alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Category;
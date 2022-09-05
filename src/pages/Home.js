import React from 'react'
import {Carousel} from 'react-bootstrap';
import image1 from './../assets/images/B1-2.png';
import image2 from './../assets/images/B2-1.png';
import image3 from './../assets/images/B3-1.png';
import image4 from './../assets/images/Sponge-Brownie-Slab-removebg-preview-1-min.png';
import image5 from './../assets/images/Oats-Cookie-category-1.png';
import image6 from './../assets/images/Double-Chocolate-Cake-category-2.png';
import image7 from './../assets/images/Chocolate-Brownie-category-1.png';
import image8 from './../assets/images/Blueberry-Muffin-2-category.png';
import image9 from './../assets/images/Red-Velvet-Pastry2-category.png';
import image10 from './../assets/images/all-brands-desktop.png';
import image11 from './../assets/images/B1-1.png';
import image12 from './../assets/images/B2.png';
import image13 from './../assets/images/B3.png';
import image14 from './../assets/images/domino_blue@2x.png';
import image15 from './../assets/images/dunkin-orange@2x.png';
import image16 from './../assets/images/ekdum-bottomPadded.png';
import image17 from './../assets/images/hong-grey-logo--bottomPadded.png';
import image18 from './../assets/images/Popeyes-orange@2x.png';
import image19 from './../assets/images/Insta_icon.png';
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import { Image } from "react-bootstrap";
import image20 from './../assets/images/jubilant-foodworks-logo@2x.png';


import './../assets/css/Home.css';
import './../assets/css/Desktop.css';
import './../assets/css/Navbar.css';
import Demo from './Demo';


export default function Home() {
  return (
    <>
    <div className="nav-home">
                    <div className='navbar-compo'>
                        <div class="hamburger-icon">
                            <Demo/>
                        </div>
                        <div className="logo-div">
                            <Image className='img-fluid logo-img' src={image20} />
                        </div>
                        <div class="nav-icons">
                            <a href="/login">
                                <div class="nav-side cart-icon">
                                    <AiOutlineShoppingCart size={30} color={'black'} />
                                </div>
                            </a>
                            <a href="/PLP">
                                <div class="search-icon">
                                    <AiOutlineSearch size={30} color={'black'} />
                                </div>
                            </a>
                        </div>
                    </div>
                    
                </div>
                {/* <Sidebar/> */}
    <section className='fuild-container'>
        <div className="home" style={{display: "flex", flexDirection: "column"}}>
            <div className='carousel-home'>
                <div className='row home-top'>
                    <div className="col-12 home-intro-text">    
                        <span><b>Hello,</b> <strong>Guest</strong> </span>
                        <h4 className='label'> Choose from our range in one click..</h4>
                    </div>
                </div>
                <div className="carousel-div">
                    <div className="carousel slide">
                        <div className="carousel-indicators"><button type="button" data-bs-target="" aria-label="Slide 1"
                                aria-current="true" className="active"></button><button type="button" data-bs-target=""
                                aria-label="Slide 2" aria-current="false"></button><button type="button"
                                data-bs-target="" aria-label="Slide 3" aria-current="false"></button>
                        </div>
                        <div className="carousel-inner">
                        <a href="/plp">
                        <Carousel controls={false}>
                    <Carousel.Item>
                        <img 
                        className="d-block w-100"
                        src={image11}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={image12}
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={image13}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel></a>
                            {/* <div className="active carousel-item">
                                <div><img className="d-block w-100" src={image11} alt="slide"/>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div><img className="d-block w-100" src={image12} alt="slide"/></div>
                            </div>
                            <div className="carousel-item">
                                <div><img className="d-block w-100" src={image13} alt="slide"/></div>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className="carousel-div-desktop">
                    <div className="carousel slide">
                        <div className="carousel-indicators"><button type="button" data-bs-target="" aria-label="Slide 1"
                                aria-current="true" className="active"></button><button type="button" data-bs-target=""
                                aria-label="Slide 2" aria-current="false"></button><button type="button"
                                data-bs-target="" aria-label="Slide 3" aria-current="false"></button></div>
                        <div className="carousel-inner"><a href="/plp">
                        <Carousel controls={false}>
                    <Carousel.Item>
                        <img 
                        className="d-block w-100"
                        src={image1}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={image2}
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={image3}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel></a>
                            {/* <div className="active carousel-item">
                                <div><img className="d-block w-100" src={image1} alt="slide"/>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div><img className="d-block w-100" src={image2} alt="slide"/>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div><img className="d-block w-100" src={image3} alt="slide"/>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
                {/* <Carousel controls={false}>
                    <Carousel.Item>
                        <img 
                        className="d-block w-100"
                        src={image1}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={image2}
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={image3}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel> */}
            </div>
            <div className="row home-category">
                <div className="col-12 category-title">
                    <h2><strong>Our Products </strong></h2>
                </div>
            </div>
            <div className="product-cat-div" style={{margin: '0.75rem 0.75rem 0.75rem 1rem'}}>
                <div className="product-category hm-product col-12"><a href="/valueRange">
                        <div className="cat-img-wrapper"><img
                                src={image4}
                                alt="Unable to fetch image" className="img-fluid"/>
                            <h4>Value Range</h4>
                            <p>(1 Items)</p>
                        </div>
                    </a></div>
                <div className="product-category hm-product col-12"><a href="/AmericanStyleCookie">
                        <div className="cat-img-wrapper"><img src={image5}
                                alt="Unable to fetch image" className="img-fluid"/>
                            <h4>American Style Cookie</h4>
                            <p>(2 Items)</p>
                        </div>
                    </a></div>
                <div className="product-category hm-product col-12"><a href="/CelebrationCakes">
                        <div className="cat-img-wrapper"><img src={image6}
                                alt="Unable to fetch image" className="img-fluid"/>
                            <h4>Celebration Cakes</h4>
                            <p>(0 Items)</p>
                        </div>
                    </a></div>
                <div className="product-category hm-product col-12"><a href="/Brownie">
                        <div className="cat-img-wrapper"><img src={image7}
                                alt="Unable to fetch image" className="img-fluid"/>
                            <h4>Brownie</h4>
                            <p>(2 Items)</p>
                        </div>
                    </a></div>
                <div className="product-category hm-product col-12"><a href="/muffin">
                        <div className="cat-img-wrapper"><img src={image8}
                                alt="Unable to fetch image" className="img-fluid"/>
                            <h4>Muffin</h4>
                            <p>(3 Items)</p>
                        </div>
                    </a></div>
                <div className="product-category hm-product col-12"><a href="/Pastries">
                        <div className="cat-img-wrapper"><img src={image9}
                                alt="Unable to fetch image" className="img-fluid"/>
                            <h4>Pastries</h4>
                            <p>(1 Items)</p>
                        </div>
                    </a></div>
            </div>
            <div className="other-brands-carousel">
                <div>
                    <h2>Our Company Supplies to</h2>
                </div>
                <div className="carousel slide carousel-dark">
                    <div className="carousel-indicators"><button type="button" data-bs-target="" aria-label="Slide 1"
                            aria-current="false"></button><button type="button" data-bs-target="" aria-label="Slide 2"
                            aria-current="true" className="active"></button><button type="button" data-bs-target=""
                            aria-label="Slide 3" aria-current="false"></button><button type="button" data-bs-target=""
                            aria-label="Slide 4" aria-current="false"></button><button type="button" data-bs-target=""
                            aria-label="Slide 5" aria-current="false"></button></div>
                    <div className="carousel-inner">
                        {/* <div className="carousel-item"><img className="d-block"
                                src={image14}/></div>
                        <div className="active carousel-item"><img className="d-block"
                                src={image15}/></div>
                        <div width="70" className="carousel-item"><img className="d-block"
                                src={image16}/></div>
                        <div className="carousel-item"><img className="d-block"
                                src={image17}/></div>
                        <div className="carousel-item"><img className="d-block"
                                src={image18}/></div> */}
                        <Carousel controls={false}>
                            <Carousel.Item>
                                <img 
                                className="d-block w-100"
                                src={image14}
                                alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={image15}
                                alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={image16}
                                alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={image17}
                                alt="Forth slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={image18}
                                alt="fifth slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </div><a className="carousel-control-prev" role="button" tabindex="0" href="#"><span aria-hidden="true"
                            className="carousel-control-prev-icon"></span><span
                            className="visually-hidden">Previous</span></a><a className="carousel-control-next" role="button"
                        tabindex="0" href="#"><span aria-hidden="true" className="carousel-control-next-icon"></span><span
                            className="visually-hidden">Next</span></a>
                </div>
            </div>
            <div className="desktop-brands-image">
                <div>   
                    <h2><strong>Our Company Supplies to</strong></h2>
                </div><img src={image10}/>
            </div>
            <div className="social-share-div" style={{marginBottom: '1rem'}}>
                <div className="social-text" style={{marginBottom: '0.8rem' , paddingTop: '0.8rem'}}><span>Follow us on</span>
                </div>
                <div className="social-icons-wrapper">
                    <div><a href="https://www.facebook.com/foodservices.jubilantfoodworksltd" target="_blank"
                            rel="noopener noreferrer"><svg viewBox="0 0 64 64" width="40" height="40">
                                <circle cx="32" cy="32" r="31" fill="#3b5998"></circle>
                                <path
                                    d="M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"
                                    fill="white"></path>
                            </svg></a></div>
                    <div><a href="https://www.instagram.com/fs_jfl/" target="_blank" rel="noopener noreferrer"><img
                                src={image19} width="45" height="45"/></a></div>
                    <div><a href="https://twitter.com/fs_jfl" target="_blank" rel="noopener noreferrer"><svg
                                viewBox="0 0 64 64" width="40" height="40">
                                <circle cx="32" cy="32" r="31" fill="#00aced"></circle>
                                <path
                                    d="M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"
                                    fill="white"></path>
                            </svg></a></div>
                    <div><a href="https://www.linkedin.com/company/food-services-jubilant-foodworks/" target="_blank"
                            rel="noopener noreferrer"><svg viewBox="0 0 64 64" width="40" height="40">
                                <circle cx="32" cy="32" r="31" fill="#007fb1"></circle>
                                <path
                                    d="M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z"
                                    fill="white"></path>
                            </svg></a></div>
                </div>
            </div>
            <div className="desktop-copyright-text">
                <p> © 2022 Jubilant FoodWorks Ltd. All Rights Reserved. </p>
            </div>
        </div>
    </section>
  </>
  )
}

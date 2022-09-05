import React from 'react'
import './../assets/css/PLP2.css';
import image1 from './../assets/images/jubilant-foodworks-logo@2x.png';
import { Link } from 'react-router-dom';


export default function Demo() {
  return (
    <>
    <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu"/>
    <label for="openSidebarMenu" className="sidebarIconToggle" style={{marginLeft: '25px', marginTop: '10px'}}>
           <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                    stroke-linecap="round" stroke-linejoin="round" height="30" width="30" xmlns="http://www.w3.org/2000/svg"
                    style={{cursor: 'pointer'}}>
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
    </label>
    <div id="sidebarMenu">
        <div className="pro-sidebar">
            <div className="pro-sidebar-inner">
                <div className="pro-sidebar-layout">
                    <div className="pro-sidebar-header Sidebar_header__1KB1K"
                        style={{display: 'flex', justifyContent: 'space-between', height: '150px', width: '100%', backgroundColor: 'rgb(0, 120, 172)'}}>
                        <div className="Sidebar_userDesc__HPrgs">
                            <h3>Guest User</h3>
                            <p style={{marginRight: '0.75rem', textAlign: 'left'}}> </p>
                            <p></p>
                            <p></p>
                        </div>
                    </div>
                    <div className="pro-sidebar-content sidebarContent">
                        <nav className="pro-menu Sidebar_menu__2X59C shaped square inner-submenu-arrows"
                            style={{listStyleType: 'none'}}>
                            <ul className="sidebarMenuInner">
                                <a href='/' firstchild="1" popperarrow="0" >
                                    <li className="pro-menu-item Sidebar_menuItem__37ym_">
                                        <div className="pro-inner-item" tabindex="0" role="button"><span
                                                className="pro-icon-wrapper"><span className="pro-icon"><svg stroke="currentColor"
                                                        fill="currentColor" stroke-width="0" viewBox="0 0 24 24"
                                                        className="Sidebar_icons__2Z2FR" height="25" width="25"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                                        <path d="M12 3L4 9v12h5v-7h6v7h5V9z"></path>
                                                    </svg></span></span><span className="pro-item-content"><span> Home
                                                </span></span></div>
                                    </li>
                                </a><Link firstchild="1" popperarrow="0" to="/myorder">
                                    <li className="pro-menu-item Sidebar_menuItem__37ym_">
                                        <div className="pro-inner-item" tabindex="0" role="button"><span
                                                className="pro-icon-wrapper"><span className="pro-icon"><svg stroke="currentColor"
                                                        fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24"
                                                        className="Sidebar_icons__2Z2FR" height="25" width="25"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <title></title>
                                                        <path
                                                            d="M6.816 15.126l4.703 2.715v-5.433L6.814 9.695v5.432zm-2.025 1.168l6.73 3.882v3.82L1.481 18.206V6.616l3.31 1.91v7.769zM12 6.145L7.298 8.863 12 11.579l4.704-2.717L12 6.146zm0-2.332l5.659 3.274 3.31-1.91L12 0 1.975 5.79 5.28 7.695zm7.207 12.48v-3.947l-2.023 1.167v1.614l-4.703 2.715v.005-5.436L22.518 6.62v11.587L12.48 24v-3.817l6.727-3.887z">
                                                        </path>
                                                    </svg></span></span><span className="pro-item-content"><span> My
                                                    Orders</span></span></div>
                                    </li>
                                </Link><Link firstchild="1" popperarrow="0" to="/coupons">
                                    <li className="pro-menu-item Sidebar_menuItem__37ym_">
                                        <div className="pro-inner-item" tabindex="0" role="button"><span
                                                className="pro-icon-wrapper"><span className="pro-icon"><svg stroke="currentColor"
                                                        fill="currentColor" stroke-width="0" viewBox="0 0 24 24"
                                                        className="Sidebar_icons__2Z2FR" height="25" width="25"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <g>
                                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                                            <path
                                                                d="M11 21a1.5 1.5 0 0 0-3 0H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a1.5 1.5 0 0 0 3 0h10a1 1 0 0 1 1 1v5.5a2.5 2.5 0 1 0 0 5V20a1 1 0 0 1-1 1H11zM9.5 10.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm0 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z">
                                                            </path>
                                                        </g>
                                                    </svg></span></span><span className="pro-item-content"><span>
                                                    Offers</span></span></div>
                                    </li>
                                </Link>
                            </ul>
                        </nav>
                        <nav className="pro-menu Sidebar_menu__2X59C shaped square inner-submenu-arrows"
                            style={{listStyleType: 'none'}}>
                            <ul className="sidebarMenuInner">
                                <div firstchild="1" popperarrow="0" style={{fontSize: '1.25rem', fontWeight: '600', margin: '0.75rem'}}>
                                    <span> About User
                                    </span></div><Link firstchild="1" popperarrow="0" to="/Profile">
                                    <li className="pro-menu-item Sidebar_menuItem__37ym_">
                                        <div className="pro-inner-item" tabindex="0" role="button"><span
                                                className="pro-icon-wrapper"><span className="pro-icon"><svg stroke="currentColor"
                                                        fill="currentColor" stroke-width="0" viewBox="0 0 512 512"
                                                        className="Sidebar_icons__2Z2FR" height="25" width="25"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M256 288c79.5 0 144-64.5 144-144S335.5 0 256 0 112 64.5 112 144s64.5 144 144 144zm128 32h-55.1c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16H128C57.3 320 0 377.3 0 448v16c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-16c0-70.7-57.3-128-128-128z">
                                                        </path>
                                                    </svg></span></span><span className="pro-item-content"><span>
                                                    Profile</span></span></div>
                                    </li>
                                </Link><Link firstchild="1" popperarrow="0" to="/address">
                                    <li className="pro-menu-item Sidebar_menuItem__37ym_">
                                        <div className="pro-inner-item" tabindex="0" role="button"><span
                                                className="pro-icon-wrapper"><span className="pro-icon"><svg stroke="currentColor"
                                                        fill="currentColor" stroke-width="0" viewBox="0 0 576 512"
                                                        className="Sidebar_icons__2Z2FR" height="25" width="25"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-352 96c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zm112 236.8c0 10.6-10 19.2-22.4 19.2H86.4C74 384 64 375.4 64 364.8v-19.2c0-31.8 30.1-57.6 67.2-57.6h5c12.3 5.1 25.7 8 39.8 8s27.6-2.9 39.8-8h5c37.1 0 67.2 25.8 67.2 57.6v19.2zM512 312c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16z">
                                                        </path>
                                                    </svg></span></span><span className="pro-item-content"><span>
                                                    Addresses</span></span></div>
                                    </li>
                                </Link><Link firstchild="1" popperarrow="0" to="/kyc">
                                    <li className="pro-menu-item Sidebar_menuItem__37ym_">
                                        <div className="pro-inner-item" tabindex="0" role="button"><span
                                                className="pro-icon-wrapper"><span className="pro-icon"><svg stroke="currentColor"
                                                        fill="currentColor" stroke-width="0" viewBox="0 0 512 512"
                                                        className="Sidebar_icons__2Z2FR" height="25" width="25"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M288 48H136c-22.092 0-40 17.908-40 40v336c0 22.092 17.908 40 40 40h240c22.092 0 40-17.908 40-40V176L288 48zm-16 144V80l112 112H272z">
                                                        </path>
                                                    </svg></span></span><span className="pro-item-content"><span>
                                                    KYC</span></span></div>
                                    </li>
                                </Link><Link firstchild="1" popperarrow="0" to="/fav">
                                    <li className="pro-menu-item Sidebar_menuItem__37ym_">
                                        <div className="pro-inner-item" tabindex="0" role="button"><span
                                                className="pro-icon-wrapper"><span className="pro-icon"><svg stroke="currentColor"
                                                        fill="currentColor" stroke-width="0" viewBox="0 0 512 512"
                                                        className="Sidebar_icons__2Z2FR" height="25" width="25"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z">
                                                        </path>
                                                    </svg></span></span><span className="pro-item-content"><span>
                                                    Favourites</span></span></div>
                                    </li>
                                </Link><Link firstchild="1" popperarrow="0" to="/creditManagement">
                                    <li className="pro-menu-item Sidebar_menuItem__37ym_">
                                        <div className="pro-inner-item" tabindex="0" role="button"><span
                                                className="pro-icon-wrapper"><span className="pro-icon"><svg stroke="currentColor"
                                                        fill="currentColor" stroke-width="0" viewBox="0 0 320 512"
                                                        className="Sidebar_icons__2Z2FR" height="25" width="25"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M308 96c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12H12C5.373 32 0 37.373 0 44v44.748c0 6.627 5.373 12 12 12h85.28c27.308 0 48.261 9.958 60.97 27.252H12c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h158.757c-6.217 36.086-32.961 58.632-74.757 58.632H12c-6.627 0-12 5.373-12 12v53.012c0 3.349 1.4 6.546 3.861 8.818l165.052 152.356a12.001 12.001 0 0 0 8.139 3.182h82.562c10.924 0 16.166-13.408 8.139-20.818L116.871 319.906c76.499-2.34 131.144-53.395 138.318-127.906H308c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-58.69c-3.486-11.541-8.28-22.246-14.252-32H308z">
                                                        </path>
                                                    </svg></span></span><span className="pro-item-content"><span> Credit
                                                    Management</span></span></div>
                                    </li>
                                </Link><Link firstchild="1" popperarrow="0" to="/refer">
                                    <li className="pro-menu-item Sidebar_menuItem__37ym_">
                                        <div className="pro-inner-item" tabindex="0" role="button"><span
                                                className="pro-icon-wrapper"><span className="pro-icon"><svg stroke="currentColor"
                                                        fill="currentColor" stroke-width="0" viewBox="0 0 640 512"
                                                        className="Sidebar_icons__2Z2FR" height="25" width="25"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z">
                                                        </path>
                                                    </svg></span></span><span className="pro-item-content"><span> Refer
                                                    to Friend</span></span></div>
                                    </li>
                                </Link>
                            </ul>
                        </nav>
                        <nav className="pro-menu Sidebar_menu__2X59C shaped square inner-submenu-arrows"
                            style={{listStyleType: 'none'}}>
                            <ul className="sidebarMenuInner">
                                <div firstchild="1" popperarrow="0" style={{fontSize: '1.25rem', fontWeight: '600', margin: '0.75rem'}}>
                                    <span> About
                                        Company </span></div><Link firstchild="1" popperarrow="0" to="/feedback">
                                    <li className="pro-menu-item Sidebar_menuItem__37ym_">
                                        <div className="pro-inner-item" tabindex="0" role="button"><span
                                                className="pro-icon-wrapper"><span className="pro-icon"><svg stroke="currentColor"
                                                        fill="currentColor" stroke-width="0" viewBox="0 0 24 24"
                                                        className="Sidebar_icons__2Z2FR" height="25" width="25"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <g>
                                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                                            <path
                                                                d="M2 8.994A5.99 5.99 0 0 1 8 3h8c3.313 0 6 2.695 6 5.994V21H8c-3.313 0-6-2.695-6-5.994V8.994zM14 11v2h2v-2h-2zm-6 0v2h2v-2H8z">
                                                            </path>
                                                        </g>
                                                    </svg></span></span><span className="pro-item-content"><span>Feedback</span></span>
                                        </div>
                                    </li>
                                </Link><Link firstchild="1" popperarrow="0" to="/ContactUs">
                                    <li className="pro-menu-item Sidebar_menuItem__37ym_">
                                        <div className="pro-inner-item" tabindex="0" role="button"><span
                                                className="pro-icon-wrapper"><span className="pro-icon"><svg stroke="currentColor"
                                                        fill="currentColor" stroke-width="0" viewBox="0 0 512 512"
                                                        className="Sidebar_icons__2Z2FR" height="25" width="25"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z">
                                                        </path>
                                                    </svg></span></span><span className="pro-item-content"><span>
                                                    Contact Us</span></span></div>
                                    </li>
                                </Link><Link firstchild="1" popperarrow="0" to="/AboutUs">
                                    <li className="pro-menu-item Sidebar_menuItem__37ym_">
                                        <div className="pro-inner-item" tabindex="0" role="button"><span
                                                className="pro-icon-wrapper"><span className="pro-icon"><svg stroke="currentColor"
                                                        fill="currentColor" stroke-width="0" viewBox="0 0 512 512"
                                                        className="Sidebar_icons__2Z2FR" height="25" width="25"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z">
                                                        </path>
                                                    </svg></span></span><span className="pro-item-content"><span> About
                                                    Us </span></span></div>
                                    </li>
                                </Link>
                            </ul>
                        </nav>
                    </div>
                    <div className="pro-sidebar-footer Sidebar_footer__3pqwB"><Link to="/login"><button>Login<svg stroke="currentColor"
                                    fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="Sidebar_iconPowerOff__2umpb"
                                    height="15" width="15" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z">
                                    </path>
                                </svg></button></Link><Link to="/register">
                            <div style={{display: 'flex', justifyContent: 'center'}}><span className="Sidebar_signupLink__1D0V3">New here ? <span>
                                        Signup.</span></span></div>
                        </Link>
                        <p style={{textAlign: 'center'}}> © 2022 All Rights Reserved. </p>
                    </div>
                </div>
            </div>
            <div className="overlay" role="button" tabindex="0" aria-label="overlay"></div>
        </div>
    </div>
    <div className="backdrop"></div>
    </>
  )
}

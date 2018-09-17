import React from 'react'
import {Link} from 'react-router-dom';
const Footer = () => {
    return (
        <footer>

            <div className="logoContainer logoContainer--footer ">
                    <p>Groove</p>
                    <span className="logoContainer__logo"></span>
               </div>
               <div className="footer__navs">
                    <nav className="footer__navs__left">
                        <ul>    
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/products">Products</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                   </nav>
                   <nav className="footer__navs__socialMedia">
                    <ul>
                        <li><a className="footer__navs__socialMedia--facebook" href="facebook.com">v</a></li>
                        <li><a className="footer__navs__socialMedia--twitter" href="facebook.com">v</a></li>
                        <li><a className="footer__navs__socialMedia--instagram" href="facebook.com">v</a></li>
                    </ul>
                   
                   </nav>
                   <nav className="footer__navs__right">
                        <ul>
                            <li><a href="">Customer Service</a></li>
                            <li><a href="">Blog</a></li>
                            <li><a href="">Term &amp; Conditions</a></li>
                        </ul>
                   </nav>

               </div>
    
        </footer>
    )
}

export default Footer
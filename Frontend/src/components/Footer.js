import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-address">
                        <a 
                          href="https://www.google.com/maps/place/Model+Tower,+Liluah,+Howrah,+West+Bengal" 
                          target="_blank" 
                          rel="noreferrer">
                          <p>Model Tower, 2nd Floor, Block 2, Liluah, Howrah, West Bengal - 711204</p>
                        </a>
                    </div>
                    <div className="footer-section">
                        <h3>Company</h3>
                        <ul>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">About Us</a></li>
                        </ul>
                    </div>
                    
                    <div className="footer-section">
                        <h3>Resources</h3>
                        <ul>
                            <li><a href="#">Blogs & Case Studies</a></li>
                            <li><a href="#">FAQs</a></li>
                        </ul>
                    </div>
                    
                    <div className="footer-section">
                        <h3>Legal</h3>
                        <ul>
                            <li><a href="#">Terms</a></li>
                            <li><a href="#">Refund & Cancellation</a></li>
                        </ul>
                    </div>
                    
                    <div className="footer-section">
                        <h3>Contact</h3>
                        <ul>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <a href="https://www.instagram.com/soumajit_mandal?igsh=MWc0cmR3dHBna29m" target="_blank" rel="noreferrer">
                            <img src="face.svg" className="face" alt="Facebook" />
                        </a>
                        
                        <a href="https://www.facebook.com/share/4tfEGaLWREKjiVTp/?mibextid=qi2Omg" target="_blank" rel="noreferrer">
                            <img src="insta.svg" className="face" alt="Instagram" />
                        </a>

                        <a href="https://apps.apple.com/" target="_blank" rel="noreferrer">
                            <img src="appstore.png" className="appp" alt="App Store" />
                        </a>

                        <a href="https://play.google.com/store/" target="_blank" rel="noreferrer">
                            <img src="playstore.png" className="appp" alt="Play Store" />
                        </a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© All rights reserved. Oneshop Pvt. Ltd 2024</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;

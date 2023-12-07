import React from "react";
import { FaLocationArrow, FaMobileAlt, FaEnvelope} from 'react-icons/fa';
import Payment from "../../assets/payments.png";

import "./Footer.scss";

const Footer = () => {
    return (
    <footer className="footer">
        <div className="footer-content">
            <div className="col">
            <div className="title">About</div>
            <div className="text">why did india lost this yesr shit man 
            come oon lowda bc kyaa chutyapa callahai life mai kab niklunga yaha se bc .
            </div>
             </div>
            <div className="col">
                <div className="title">Contact</div>
                <div className="c-item">
                    <FaLocationArrow/>
                    <div className="text">
                        kanive konakere post N.R pura Chickamagaluru 
                        district karnataka .
                    </div>
                </div>
                
            <div className="c-item">
                <FaMobileAlt/>
                <div className="text"> Phone: 08266 238107
                        
                    </div>
                </div>
              
                <div className="c-item">
                < FaEnvelope/>
                <div className="text"> Email: @sneak-Peek.com </div>

                </div>
              </div>
              <div className="col">
                    <div className="title"> Categories</div>
                    <div className="text"> casuals </div>
                    <div className="text"> Trainers </div>
                    <div className="text"> Canvas </div>
                    <div className="text"> Basketball Sneakers  </div>
                    <div className="text"> Slides </div>
                    <div className="text">  Formals</div>
                    

                    
              </div>
              <div className="col">
                <div className="title">Pages</div>
                <div className="text">Home  </div>
                <div className="text">About  </div>
                <div className="text">Privacy Policy  </div>
                <div className="text">Returns  </div>
                <div className="text"> Terms & Coditions </div>
                <div className="text"> Contact Us </div>
                
              </div>
                 </div>
                 <div className="bottom-bar"> 
                 <div className="bottom-bar-content"> 
                 <div className="text">
                    SNEAK-PEEK 2023 CREATED BY DHRUVA KANIVE . PREMIUM E-COMMERCE 
                     SOLUTIONS.
                 </div>
                 <img src={Payment} />
                  </div>
                 
                  </div>

            </footer>
    );
};

export default Footer;

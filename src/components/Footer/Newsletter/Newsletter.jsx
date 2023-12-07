import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn,} from "react-icons/fa";
import "./Newsletter.scss";



const Newsletter = () => {
    return (
         <div className="newsletter-section">
            <div className="newsletter-content">
                <span className="small-text">News letter</span>
                <span className="big-text">
                    Sign up for latestupdats and offers
                </span>
                <div className="from">
                    <input type="text" placeholder="Email Adress" />
                    <button> Subscribe </button>
                </div>

                <div className="text"> will be used in accordance with Privacy Policy </div>
                <div className="social-icons">
                    <div className="icon">
                        <FaFacebookF size={14}/>
                    </div>
                    <div className="icon">
                        <FaInstagram size={14}/>
                    </div>
                    <div className="icon">
                        <FaTwitter size={14}/>
                    </div>
                    <div className="icon">
                        <FaLinkedinIn size={14}/>
                    </div>
                </div>
            </div>
         </div>
    );
};

export default Newsletter;

import React from "react";
import "../App"
import Email from "../components/email/email";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import "../styles/contact-bar.css";
import "../App.css"

const Contact = () => {

    return (
        <div 
            id="contactSection"
        >


                <p style={{paddingLeft:'2.5vh'}}>
                        <span class="icon-text"> 
                        <a 
                            class="contactLink"
                            href='https://www.linkedin.com/in/madisonhan04/' 
                            target="_blank"  
                            rel="noreferrer"
                        >
                            <i class='fa fa-linkedin-square'></i>
                            {"  "} LinkedIn
                        </a> 
                        <a 
                            class="contactLink"
                            href='https://github.com/madison-han' 
                            target="_blank"  
                            rel="noreferrer">
                            <i class='fa fa-github'></i>
                            {"  "} GitHub
                        </a>
                        <Popup trigger=
                            { 
                                <a 
                                    class="messageMePopup contactLink" 
                                    href='mailto:madisonhan04@gmail.com'
                                >
                                    <i class='fa fa-envelope'></i>
                                    {"  "} Message Me
                                </a>
                            }
                            modal nested> {
                                <Email />
                            }
                        </Popup>
                        <a 
                            class="contactLink"
                            href='https://drive.google.com/file/d/1THDjYMwmuslvDOCK0MPsSNOnJZnrjJJo/view?usp=sharing'
                            target="_blank"  
                            rel="noreferrer"
                        >    
                            <i class='fa fa-file-text'></i>
                            {"  "} Resume
                        </a> 
                        </span>
                    </p>


        </div>
    );
};
 
export default Contact;

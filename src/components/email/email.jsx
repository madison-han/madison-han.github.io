import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import 'reactjs-popup/dist/index.css';
import "./email.css"

import emailSentNoise from "./emailSentNoise.mp3";
 

 
export default function Email() {
    const form = useRef();

    
    // Ensuring fields are valid
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const handleNameChange = (e) => { setName(e.target.value); };
    const handleEmailChange = (e) => { setEmail(e.target.value); };
    const handleMessageChange = (e) => { setMessage(e.target.value); };

    const isValidEmail = () => {
        if (message.trim() === '') {
          alert('Don\'t forget your message!');
          return false;
        }
        if (email.trim() === '') {
          alert('What email should I contact you with?');
          return false;
        }
        if (name.trim() === '') {
          alert('What\'s your name? :)');
          return false;
        }
    
        // Reset form fields
        setTimeout(() => {
          setMessage('');
          setName('');
          setEmail('');
        }, 200);
        return true;
    };

    const sendEmail = (e) => {
      e.preventDefault();
      if (!isValidEmail()) return;

      emailjs
      // template_ost80yt
        .sendForm('service_ixyqi7r', 'template_ost80yt', form.current, 'QbbL5B4BsepN-lr-u')
        .then((result) => {
          playEmailSent();
          console.log(result.text);
          alert("Email sent!");

          // handleSubmit();

        })
        .catch((error) => {
          console.log(error.text);
        });
    };

    // Changing name to email on hover
    const [isNameHover, setNameHover] = useState(false);
    const handleMouseEnter = () => { setNameHover(true); }
    const handleMouseLeave = () => { setNameHover(false); }

    // Copying gmail from click
    const [isEmailCopy, setEmailCopy] = useState(false);
    const handleCopyClick = () => {
        const textToCopy = 'madisonhan04@gmail.com';
        navigator.clipboard.writeText(textToCopy)
          .then(() => {
            console.log('Text copied to clipboard:', textToCopy);
          })
          .catch((error) => {
            console.error('Failed to copy text:', error);
          });

        setEmailCopy(true);

        setTimeout(()=> {
            setEmailCopy(false);
        }, 500);

    };

    // Email sent sound effect
    const[audio] = useState(new Audio(emailSentNoise));
    const playEmailSent = () => {
      audio.play();
    }


    return (
        
      <form 
        ref={form} 
        onSubmit={sendEmail}
        // className="myForm"
      >
          <div class = "email">
              <b>New Message{" "}</b> 
              
              <hr class="item-divider"></hr>

              To
              <a 
                  class="nameToEmail"
                  href="mailto:madisonhan04@gmail.com"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave} 
                  onClick={handleCopyClick} >
                  {!isEmailCopy ? 
                      !isNameHover ? 'Madison Han' : 
                        'madisonhan04@gmail.com' :
                        <span style={{color:'grey'}}>Email copied!</span>
                  }
              </a>
                
              <hr class="item-divider"></hr>

              <span style={{fontFamily:'Arial'}}>
                Hi Madison, <br /><br />
                <textarea 
                    name="message" 
                    placeholder="What would you like to say?"
                    value={message}
                    onChange={handleMessageChange}
                />
                    
                <br /><br/>
              
                Please contact me via this email:
              
                <input 
                    type="email" 
                    name="user_email" 
                    placeholder="your email."
                    value={email}
                    onChange={handleEmailChange}
                />
                <br /><br/>
              
                Best,<br />
                <input 
                    name="user_name" 
                    placeholder="Your name."
                    value={name}
                    onChange={handleNameChange}
                />
                <br />
              </span>
              <button class="send-button">
                Send
              </button>

              <br/><br/>

              
                
          </div>
      </form>
    )
    

};
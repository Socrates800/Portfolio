import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <div className='contact-main'>

            <div>
                <h1>Contact Me</h1>
            </div>

            <div className="form">
                <div className='names'>
                    <div>
                        <span>Full Name :</span>
                <input type="text" />
                    </div>

                    <div>
                        <span>Email :</span>
                <input type="email" />   

                    </div>

                </div>
                <div className="subject">
                <span>Subject :</span>
                <input type="text" /> 
                </div>

                    <div className="message">
                    <span>Your Message :</span>
               <textarea name="" id=""></textarea>
                    </div>
                    <div className='button'>

                  <button>Send Message</button>  
                    </div>
            </div>

    </div>
  )
}

export default Contact
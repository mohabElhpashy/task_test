import React from 'react'
import Inmoda from '../icons/Inmodalconf.svg'
import { BsXCircleFill } from "react-icons/bs";
import Fade from 'react-reveal/Fade';


export default function PortalConfirmation({Colseconfirm}) {
    return (
        <div className='modal '>
        <div className='modalConf'>
            <Fade top cascade>
        <div style={{marginTop:'20px'}}><img src={Inmoda} alt=''/></div> 
        <h2>Confirmation Email Sent</h2>
        <div>we sent a linke to <a href='£'>anthony2141@email.com</a>and
        <a href='£'>Jamesconor@email.com</a><br/>.Check the email to confirm the transfer</div> 
        <div style={{marginTop:'45px'}}><p>Didn't git a confirmation email?</p><br/>
        Check your spam or <span>Send Again</span>
        </div> 
        <BsXCircleFill
        
        className='Hover'                    onClick={Colseconfirm}
                    style={{
                      position: "absolute",
                      color: "gray",
                      right: 4,
                      top: 10,
                    }}
                  />
                  </Fade>
       
        </div>
    </div>
    )
}

import React from 'react'
import Nike from '../icons/Nike.svg'
import sent from '../icons/Sentto.svg'
import Fade from 'react-reveal/Fade'

export default function PortalNotification() {
    return (
        <div className='modall'>
<div className="portalnoti">
    <Fade bottom cascade>
            <h2 style={{textAlign:'left',marginLeft:'10px'}}>Notifications</h2>
            <div style={{ textAlign:'center',width:'300px', borderRadius:"8px",display:'flex',marginBottom:'6px',border:'1px solid #FE7448',justifyContent:'space-around'}}><img style={{marginLeft:'8px'}} src={Nike} alt=''/><p><b>Transfer link confirmed</b>by jamesconor@email.com <br/>just now </p></div>
            <div style={{ textAlign:'center',width:'300px',borderRadius:"8px",display:'flex',border:'1px solid #FE7448',justifyContent:'space-around'}}><img style={{marginLeft:'8px'}} src={Nike} alt=''/><p><b>Transfer link confirmed</b>by anthony2142@email.com<br/>2 min ago </p></div>
            <div style={{ width:'300px',borderRadius:"8px",display:'flex',justifyContent:'space-around'}}><img style={{marginLeft:'8px'}} src={sent} alt=''/><p><b>Confirmation email</b>sent to anthoy2142@email.com and jamesconor@email.com <br/>5 min ago </p></div>
</Fade>

            </div>
        </div>
        
    )
}

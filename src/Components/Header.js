import React,{Fragment} from 'react'
import Notification from '../icons/Test.svg';
import Notificationb from '../icons/Notiblue.svg';

import IMAGe from '../icons/Image.svg';
import Arrow from '../icons/Arrowdown.svg';


export default function Header({portalch}) {
    return (
        <Fragment>
          
            <div onClick={portalch} className='Hover' style={{marginTop:'18px'}}>
                <img src={Notification} alt=''/></div>
            <div style={{marginTop:'17px'}}><img src={IMAGe} alt=''/></div>
            <div style={{color:'white'}}>
                <p style={{textAlign:'left'}}>Anthony Mike</p>
                <p style={{color:'gray'}}>anthony2141@email.com</p>

            </div>
            <div style={{marginTop:'20px'}}><img src={Arrow} alt=''/></div>

        </Fragment>
    )
}

import React from 'react'
import Zoom from 'react-reveal/Zoom';


export default function Portaltransfeer({closeModal,openconfirm}) {
    return (
        <div className='modal '>
            <div className='modal_content'>
            <Zoom>
            <div style={{color:'white',textAlign:'left',marginLeft:'10px'}}>
         <h2>Transfer</h2>
         <label>transfer to</label><br/>
         <input  placeholder='enter the email addres' style={{width:'500px',backgroundColor:'#282C58',border:'1px solid #282C58',height:'50px'}} type='email'/>
       </div>
       <div style={{ backgroundColor:'#282C58',textAlign:'right',marginTop:'40px',height:'65px',display:'flex',alignItems:'center',justifyContent:'flex-end'}}>
    <button className='Hover' onClick={closeModal} style={{color:'white',marginRight:'15px',width:'135px',height:'48px',backgroundColor:'#2D325A',border:'1px solid #2D325A',borderRadius:'8px'}}>cancel</button>
    <button className='Hover' onClick={openconfirm} style={{color:'white',marginRight:'15px',width:'135px',height:'48px',backgroundColor:'#1EC1C3',border:'1px solid #1EC1C3',borderRadius:'8px'}}>send</button>

       </div>
       </Zoom>
            </div>
        </div>
    )
}

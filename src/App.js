import React,{useState} from 'react';
import './App.css';
import HeaderContent from './Components/Header_Content' 
import Hashheader from './Components/Hasheader'
import Table from './Components/Cotent';
import Heads from './Components/Header'
import Modal from 'react-modal'
import Portal from './Components/Portaltransfeer';
import ModalCofin from './Components/PortalConfirmation'
import {Provider} from './hooks'
import Portalll  from  './Components/PortalNotification';

function App() {
  const [ModalTransfer, setModalTransfer] = useState(false)
  const [ModalConfirmation, setModalConfirmation] = useState(false)
  const [Portalcheck,setPortalcheck]=useState(false)

  const Portalcheckk=()=>{
    setPortalcheck(!Portalcheck)
  }
  const Sendconfirm=()=>{
    setModalTransfer(false);
    setModalConfirmation(true)
  } 
  const openModall=()=>{
    setModalTransfer(true)
    
  }
  const Closemodaal=()=>{
    setModalTransfer(false)

  }
const closeConfirmationmodal=()=>{
  setModalConfirmation(false)
}
  return (
    <div className="App">
      <div className="headmain">
        <div className="inheader">
        <Heads portalch={Portalcheckk}/>

        </div>
     </div>
     <main>
       <div className='MAIN-CONTENT'>
         <div className='CONTENT'>
         <div className='Header-Content' ><HeaderContent  /></div>
         <div className='Content-body'><Table/></div>
         </div>
      
       <div className='Hash-Header'><Hashheader  openModal={openModall}
       /></div>

       </div>
      


     </main>
     {/* <Modal
     style={customStyles}
     isOpen={ModalTransfer}
     >
       <div style={{color:'white'}}>
         <h2>Transfer</h2>
         <label>transfer to</label><br/>
         <input  placeholder='enter the email addres' style={{width:'500px',backgroundColor:'#282C58',border:'1px solid #282C58',height:'50px'}} type='email'/>
       </div>
       <div style={{ backgroundColor:'#282C58',textAlign:'right',marginTop:'40px',height:'65px',display:'flex',alignItems:'center',justifyContent:'flex-end'}}>
    <button onClick={()=>setModalTransfer(false)} style={{color:'white',marginRight:'15px',width:'135px',height:'48px',backgroundColor:'#2D325A',border:'1px solid #2D325A'}}>cancel</button>
    <button style={{color:'white',marginRight:'15px',width:'135px',height:'48px',backgroundColor:'#1EC1C3',border:'1px solid #1EC1C3'}}>send</button>

       </div>


     </Modal> */}
     {ModalTransfer?<Portal openconfirm={Sendconfirm} closeModal={Closemodaal}/>:null}
     {ModalConfirmation?<ModalCofin Colseconfirm={closeConfirmationmodal}/>:null}
     {Portalcheck?<Portalll/>:null}
    </div>
  );
}

export default App;

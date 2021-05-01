import React,{useState} from 'react';
import './App.css';
import HeaderContent from './Components/Header_Content' 
import Hashheader from './Components/Hasheader'
import Table from './Components/Cotent';
import Heads from './Components/Header'
import Portal from './Components/Portaltransfeer';
import ModalCofin from './Components/PortalConfirmation'
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
      <div className='Hash-Header'><Hashheader  openModal={openModall}/></div>

       </div>
 </main>
   
     {ModalTransfer?<Portal openconfirm={Sendconfirm} closeModal={Closemodaal}/>:null}
     {ModalConfirmation?<ModalCofin Colseconfirm={closeConfirmationmodal}/>:null}
     {Portalcheck?<Portalll/>:null}
    </div>
  );
}

export default App;

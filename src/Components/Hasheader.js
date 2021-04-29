    import React,{Fragment} from 'react'
    import HIde from '../icons/Hideandshow.svg'
    import Frog from '../icons/Frog.svg';
    import Transfer from '../icons/Transfer.svg';
    import Arrow from '../icons/Arrow.svg'
    import Desck from '../icons/Descktop.svg'
    import Apple from '../icons/Apple.svg'
    import Windows from '../icons/Windows.svg'
    import Fade from 'react-reveal/Fade';


    export default function Hasheader({openModal}) {
        return (
            <Fragment>
                <Fade right cascade>
                <div className="Licience-key">
                <div style={{textAlign:'left',marginTop:'60px',marginLeft:'30px',color:'gray'}}>license Key</div>
                    <div className='one' style={{textAlign:'left',marginLeft:'30px',dispaly:'flex'}}>
                        <p> XXXX-XXXX-XXXX-XXXX</p><img src={HIde} alt=''/></div>
                       <div style={{display:'flex',justifyContent:'space-between',marginLeft:'30px'}}> 
                       <button className='Hover' style={{width:'248px',height:'38px',backgroundColor:'#01A9F4'
                       ,borderRadius:'8px',
                       outline:'none',border:'1px solid #01A9F4',color:'white'}}>
                           Renew Now</button>
                        <button className='Hover' style={{backgroundColor:'#323662',color:'#EC4165',marginRight:'30px',
                    borderRadius:'8px',width:'135px',border:'1px solid #323662'}}>Deactive</button></div>
                    <p style={{color:'white',textAlign:'left',marginLeft:'30px'}}>Next Renewal on <span style={{fontWeight:'bold'}} >22 Mar 2021</span></p>
                </div>
                <div className="Dscord-id">
                    <div>
                    <div style={{display:'flex',width:"100px"}}>
                        <img  src={Frog} alt=''/><p style={{flex:'2px'}}>Discord iD</p></div>                        
                            <p>antony#2142</p>
                    </div>
                    <button className='Hover' style={{backgroundColor:'#323662',color:'#EC4165',
                    marginLeft:'   90px',
                    marginTop:'26px',
                 borderRadius:'8px',width:'135px',height:'38px',border:'1px solid #323662'}}>Unbind</button>
                
                </div>
                <div className="transfer">

                <div>
                    <div style={{display:'flex',width:"100px"}}>
                        <img  src={Transfer} alt=''/><p style={{flex:'2px'}}>Transfer</p></div>  
                           <div > <p style={{color:'gray'}} >Current Email</p>                      
                            <p>antony#2142</p></div>
                    </div>
                    <button className='Hover' style={{backgroundColor:'#323662',color:'#19A2A4',
                    marginLeft:'   90px',
                    marginTop:'50px',
                    // textAlign:'center',
                 borderRadius:'8px',width:'135px',height:'38px',border:'1px solid #323662'}}
                 onClick={openModal}>Transfer to
                 <img src={Arrow} alt=''/>
                 </button>
               
                </div>
                
                <div className="Desck-top-add">
                    <div style={{border:'1px solid gray'}}>
                        <img src={Desck} alt=""/>
                        <p style={{color:'white'}}>Descktop App</p>
                    </div>
                    <div style={{display:'flex',flexDirection:'column',marginTop:'25px'}}>
                        <button className='Hover' style={{width:'205px',marginBottom:'8px',backgroundColor:'#1EC1C3',color:'white',borderRadius:'8px',border:'1px solid #1EC1C3'}}><img src={Apple} alt=''/>Download for MacOs</button>
                        <button className='Hover' style={{width:'205px',backgroundColor:'#1EC1C3',color:'white',borderRadius:'8px',border:'1px solid #1EC1C3'}}><img src={Windows} alt=''/>Download for Windows</button>
                    </div>
                </div>
            </Fade>
            </Fragment>
        )
    }

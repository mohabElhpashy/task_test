import React,{Fragment}  from 'react'
import SVG from '../icons/Bascket.svg'
import SVG2 from '../icons/Backettwo.svg'

export default function Header_Content({portalch}) {
    return (
        <Fragment>
            <div className='Filter_by'>
                <div style={{textAlign:'left',marginTop:'20px'}}>Filter by:</div>
                <div style={{textAlign:'left',marginTop:'10px'}}>
                    <button>1D</button>
                    <button style={{backgroundColor:'#1EC1C3'}}>1M</button>
                    <button>1Y</button> </div>
            </div>

            <div className='Totla_Check_out'>
                <div className='MAin_Checkout'> 
            <div style={{textAlign:'left',marginTop:'20px'}}>Totla Checkouts</div>
             <div style={{textAlign:'left',marginTop:'10px'}}>
                 <p> <span style={{color:'#1EC1C3',fontSize:'30px'}}> 72</span>/82</p>
                </div>
               
            </div>
            <img src={SVG} alt=''/> 

            </div>

            <div className='Totla_Failure'>
            <div className='MAin_Checkout'> 
            <div style={{textAlign:'left',marginTop:'20px'}}>Totla Failure</div>
                <div style={{textAlign:'left',marginTop:'10px'}}>
                 <p> <span style={{color:'#FE7448',fontSize:'30px'}}> 10</span>/82</p>
                </div>
               
            </div>
            <img src={SVG2} alt=''/>
            </div>


        </Fragment>
    )
}

import React,{Fragment,useState} from 'react'
import Data from '../data.json'
function Cotent() { 
    const [State]=useState(Data.DataTable)
    return (
        <Fragment>
            <div className="table-header">
                <div className='one'>DATE</div>
                <div className='two'>PRODUCT</div>
                <div className='three'>SIZE(US)</div>
                <div className='four'>WEBSITE</div>
                <div className='five'>PRICE</div>
                <div className='six'>STATUS</div>

            </div>
            <div className='main'>

            {State.map((index,ele)=>{
                 return<div key={ele} className="table-content">
                <div className='one'>{index.date}</div>
                <div className='two'>{index.product}</div>
                <div className='three'>{index.size}</div>
                <div className='four'>{index.website}</div>
                <div className='five'>{index.price}</div>
                <div className={index.status==="succes"?"six":'sixFAil'}>{index.status}</div>
                </div>
            })}
                        </div>

        {/* {DataTable.map((ele,index)=>(
            
        )} */}
        </Fragment>
           
    )
}

export default Cotent

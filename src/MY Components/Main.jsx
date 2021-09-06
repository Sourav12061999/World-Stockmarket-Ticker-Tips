import React,{useState} from 'react'
import SelectEx from './SelectEx'
import StockList from './StockList';
function Main() {
    const [ex,setex]=useState('BCBA');
    return (
        <div className="main-cont">
            <SelectEx setex={setex}/>
            <StockList ex={ex}/>
        </div>
    )
}

export default Main

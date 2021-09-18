import React from 'react'
import '../AllCSS/pagination.css'
function NextStock({totalStocks,setcurrent,current}) {
    function currentplus(){
        if(current<Math.ceil(totalStocks/35)){
            var now=current+1;
        setcurrent(now);
        }
    }
    function currentminus(){
        if(current>1){
         var now=current-1;
        setcurrent(now);
        }
    }
    return (
        <div className='paginate'>
            <div className="buttons">
            <button onClick={currentminus}>{'<'}</button>
            {current}/{Math.ceil(totalStocks/35)}
            <button onClick={currentplus}>{'>'}</button>
            </div>
        </div>
    )
}

export default NextStock

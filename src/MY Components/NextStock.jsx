import React from 'react'

function NextStock({totalStocks,setcurrent,current}) {
    var pageno=[];
    for(let i=1;i<=Math.ceil(totalStocks/50);i++){
        pageno.push(i);
    }
    function currentplus(){
        if(current<Math.ceil(totalStocks/50)){
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
        <div>
            <button onClick={currentminus}>{'<'}</button>
            <button onClick={currentplus}>{'>'}</button>
        </div>
    )
}

export default NextStock

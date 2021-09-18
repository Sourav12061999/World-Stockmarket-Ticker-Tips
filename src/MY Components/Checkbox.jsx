import React from 'react'

function Checkbox({arr,selectedOptions,setselectedOptions}) {
    var addToSelection=false;
    function remove_element_array(arr2=[],index=0){
        var out=[];
        for(let i=0;i<arr2.length;i++){
        if(i !==index){out.push(arr2[i])}
        }
        return out;
    }
    function Checkbox(e){
        var index=selectedOptions.indexOf(arr);
        if(e.target.checked && index=== -1){
            setselectedOptions([...selectedOptions,arr])
            console.log(selectedOptions);
            addToSelection=true;
        }
        else if(e.target.checked===false){
            
            setselectedOptions(remove_element_array(selectedOptions,index));
            console.log(selectedOptions);
            addToSelection=false;
        }  
    }
    return (
        <div className="filterchooser">
            <input type="checkbox" value={addToSelection} onChange={(e)=>{Checkbox(e)}}/>
            <label htmlFor="id">{arr}</label>
            
        </div>
    )
}

export default Checkbox

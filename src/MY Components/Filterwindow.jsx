import React,{useRef} from 'react'
import "../AllCSS/addFilter.css"
import Checkbox from './Checkbox'
    const arr=
        [
        ["Return on Equity","Return on Assets","Net Profit Margin","ROCE","Cost of Goods Sold"],
        ["Debt to Equity","Earning Power","Interest Coverage Ratio","Net Income/Liabilities","Cash Conversion Cycle"],
        ["5Y Historical Revenue Growth","5Y Historical EBITA Growth","1Y Historical Revenue Growth","1Y Historical EBITA Growth","3Y Historical Divident Growth"],
        ["Total Revenue","EBITA","PBIT","Earning per Share","Divident per Share"],
        ["Total Debt","Total Assets","Share Capital","Reserves & Surplus","Total Inventory"]
        ]
    

function Filterwindow({setshow_filter_window,setsorting_params,sorting_params}) {
    const option_box_refs=[];
    option_box_refs.push(useRef(null));
    option_box_refs.push(useRef(null));
    option_box_refs.push(useRef(null));
    option_box_refs.push(useRef(null));
    option_box_refs.push(useRef(null));
    function show_option_box(n=0){
        for (let index = 0; index < option_box_refs.length; index++) {
            if(n===index){
                option_box_refs[index].current.style.display="block";
            }
            else{
                option_box_refs[index].current.style.display="none";
            }
            
        }
    }
    return (
        <div className="filterwindow">
            <div className="filterwindow-heading">
                <h3>Add any Stock Filter</h3>
                <p>From over 200 filters</p>
            </div>
            <div className="filterwindow-body">
            <div className="filterwindow-optionselector">
                <div className="option-list" onClick={()=>{show_option_box(0)}}>Profitability</div>
                <div className="option-list" onClick={()=>{show_option_box(1)}}>Finantial Ratios</div>
                <div className="option-list" onClick={()=>{show_option_box(2)}}>Growth</div>
                <div className="option-list" onClick={()=>{show_option_box(3)}}>Income Statement</div>
                <div className="option-list" onClick={()=>{show_option_box(4)}}>Balancesheet {"&"} Cashflow</div>
            </div>
            <div className="filterwindow-options">
            {
                arr.map((block,j)=>{
                 return( 
                    <div className="filterwindow-option-box" ref={option_box_refs[j]}>
                        {block.map((option,i)=>{
                        return(
                            <Checkbox key={i} setselectedOptions={setsorting_params} selectedOptions={sorting_params}
                             arr={option}/>
                        )
                    })}
                    </div>
                    )
                })
                 
            }</div>
            </div>
            <div className="filterwindow-bottom">
                <button onClick={()=>{
                    setshow_filter_window(false)}}>Done</button>
            </div>
        </div>
    )
}

export default Filterwindow

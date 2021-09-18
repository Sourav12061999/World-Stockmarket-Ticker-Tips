import React, { useState } from 'react'
import '../AllCSS/StockList.css'
import Sortingparam from './Sortingparam';
import Filterwindow from './Filterwindow';
function Sorting({setstockFiltering,stockFiltering}) {
    const [sorting_params, setsorting_params] = useState(['Market Cap', 'PE', 'Net Income']);
    const [show_filter_window,setshow_filter_window]=useState(false)
    return (
        <div className='filters'>
            <div className='fillterHeding'>
                <h2>New Screen</h2>
             <div className="sorting-content">
                {
                    sorting_params.map((param) => {


                        return (
                            <Sortingparam param={param} setstockFiltering={setstockFiltering} 
                            stockFiltering={stockFiltering}/>
                        )
                    })

                }
             </div>
                <button className='add-filter-button' onClick={()=>{setshow_filter_window(true);}}>+Add Filters</button>
                {show_filter_window? 
                (<Filterwindow setsorting_params={setsorting_params}
                    sorting_params={sorting_params}
                    setshow_filter_window={setshow_filter_window}/>
                    ):null}
            </div>
        </div>
    )
}

export default Sorting
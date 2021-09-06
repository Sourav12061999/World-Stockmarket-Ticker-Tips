import React, { useState } from 'react'
import '../AllCSS/StockList.css'
import Sortingparam from './Sortingparam';
function Sorting() {
    const [sorting_params, setsorting_params] = useState(['Market Cap', 'PE Ratio', 'Net Income']);
    return (
        <div className='filters'>
            <div className='fillterHeding'>
                <h2>New Screen</h2>
            
            {
                sorting_params.map((param) => {


                    return (
                        <Sortingparam param={param} />
                    )
                })

            }
            <button className='button'>Add Filters</button>
            </div>
        </div>
    )
}

export default Sorting

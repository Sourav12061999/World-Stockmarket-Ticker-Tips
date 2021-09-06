import React, { useState } from 'react'
import '../AllCSS/StockList.css'
function Sortingparam({param}) {
    const [show_param, setshow_param] = useState(false)
    return (
        <div className='params'>
            <div id="heading">
                <h5>{param}</h5>
                <button onClick={() => {
                    if (show_param){ setshow_param(false) }
                    else { setshow_param(true) }
                }}>{'<'}</button>
            </div>
            {show_param ? (<div id="input">
                <input type="number" />
                <input type="number" />
                <button className='button'>Apply</button>
            </div>
            ) : null}
        </div>
    )
}

export default Sortingparam

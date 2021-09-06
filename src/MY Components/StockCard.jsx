import React from 'react'
import '../AllCSS/StockList.css'
function StockCard({symbol,comName,marketcap,PE,netIncome,country}) {
    return (
        <>
         <tbody>
             <tr>
                 <td>{comName}({symbol})</td>
                 <td>{marketcap.toFixed(2)}</td>
                 <td>{PE.toFixed(2)}</td>
                 <td>{netIncome.toFixed(2)}</td>
                 <td>{country}</td>
             </tr>
         </tbody>
        </>
    )
}

export default StockCard

import React, { useState } from 'react'
import '../AllCSS/StockList.css'
function Sortingparam({param,stockFiltering,setstockFiltering}) {
    const [show_param, setshow_param] = useState(false)
    const [min, setmin]=useState(retriveData(param).min);
    const [max, setmax]=useState(retriveData(param).max);
    function retriveData(data){
        switch(data){
            case "Market Cap":
                return stockFiltering.marketcap;
            case "PE":
                return stockFiltering.PE
            case "Net Income":
                return stockFiltering.NetIncome
            case "Return on Equity":
                return stockFiltering.ReturnOnEquity
            case "Return on Assets":
                return stockFiltering.ReturnOnAssets;
            case "Net Profit Margin":
                return stockFiltering.NetProfitMargin
            case "ROCE":
                return stockFiltering.ROCE
            case "Cost of Goods Sold":
                return stockFiltering.CostOfGoodsSold
            case "Debt to Equity":
                return stockFiltering.DebtToEquity
            case "Earning Power":
                return stockFiltering.EarningPower
            case "Interest Coverage Ratio":
                return stockFiltering.CoverageRatio
            case "Net Income/Liabilities":
                return stockFiltering.NetIncomeLiabilities
            case "Cash Conversion Cycle":
                return stockFiltering.CashConversionCycle
            case "5Y Historical Revenue Growth":
                return stockFiltering.FiveYHistoricalRevenueGrowth
            case "5Y Historical EBITA Growth":
                return stockFiltering.FiveYHistoricalEBITAGrowth
            case "1Y Historical Revenue Growth":
                return stockFiltering.OneYHistoricalRevenueGrowth
            case "1Y Historical EBITA Growth":
                return stockFiltering.OneYHistoricalEBITAGrowth
            case "3Y Historical Divident Growth":
                return stockFiltering.ThreeYHistoricalDividentGrowth
            case "Total Revenue":
                return stockFiltering.TotalRevenue
            case "EBITA":
                return stockFiltering.EBITA
            case "PBIT":
                return stockFiltering.PBIT
            case "Earning per Share":
                return stockFiltering.EarningPerShare
            case "Divident per Share":
                return stockFiltering.DividentPerShare
            case "Total Debt":
                return stockFiltering.TotalDebt
            case "Total Assets":
                return stockFiltering.TotalAssets
            case "Share Capital":
                return stockFiltering.ShareCapital
            case "Reserves & Surplus":
                return stockFiltering.ReservesSurplus
            case "Total Inventory":
                return stockFiltering.TotalInventory
            default:
                return data;
        }
    }
    return (
        <div className='params'>
            <div id="heading">
                <div>
                <h5>{param}</h5>
                </div>
                <div>
                <button onClick={() => {
                    if (show_param){ setshow_param(false)}
                    else { setshow_param(true) }
                }}>{'<'}</button>
                </div>
            </div>
            {show_param ? (<div id="input">
                <input value={min} onChange={(e)=>{
                 setmin(Number(e.target.value));
                }}  type="number"/>
                <input value={max} onChange={(e)=>{
                 setmax(Number(e.target.value));
                }} type="number"/>
                <div className="input-button-cont">
                <button className='button'>Low</button>
                <button className='button'>Mid</button>
                <button className='button'>High</button>
                </div>
                <button onClick={()=>{
                    if(min==null){
                        setmin()
                    }
                    setstockFiltering({type:param,minimum:min,maximum:max})
                    console.log(min+"$"+max);
                }}>Apply</button>
            </div>
            ) : null}
        </div>
    )
}

export default Sortingparam

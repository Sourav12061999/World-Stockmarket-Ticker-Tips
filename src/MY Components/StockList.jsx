import React,{useEffect,useState,useReducer} from 'react'
import axios from 'axios'
import StockCard from './StockCard';
import NextStock from './NextStock';
import Sorting from './Sorting';
import '../AllCSS/StockList.css'
const initialState={
    marketcap:{min:1000,max:16000000},
    PE:{min:5,max:80},
    NetIncome:{min:10,max:5000000},
    ReturnOnEquity:{min:-100,max:100},
    ReturnOnAssets:{min:-100,max:100},
    NetProfitMargin:{min:-100,max:100},
    ROCE:{min:-100,max:100},
    CostOfGoodsSold:{min:-100,max:100},
    DebtToEquity:{min:-100,max:100},
    EarningPower:{min:-100,max:100},
    CoverageRatio:{min:-100,max:100},
    NetIncomeLiabilities:{min:-100,max:100},
    CashConversionCycle:{min:-100,max:100},
    FiveYHistoricalRevenueGrowth:{min:-100,max:100},
    FiveYHistoricalEBITAGrowth:{min:-100,max:100},
    OneYHistoricalRevenueGrowth:{min:-100,max:100},
    OneYHistoricalEBITAGrowth:{min:-100,max:100},
    ThreeYHistoricalDividentGrowth:{min:-100,max:100},
    TotalRevenue:{min:-100,max:100},
    EBITA:{min:-100,max:100},
    PBIT:{min:-100,max:100},
    EarningPerShare:{min:-100,max:100},
    DividentPerShare:{min:-100,max:100},
    TotalDebt:{min:-100,max:100},
    TotalAssets:{min:-100,max:100},
    ShareCapital:{min:-100,max:100},
    ReservesSurplus:{min:-100,max:100},
    TotalInventory:{min:-100,max:100}
}
const reducer=(state,action)=>{
    switch(action.type){
        case "Market Cap":
            return {...state,marketcap:{min:action.minimum,max:action.maximum}}
        case "PE":
            return {...state,PE:{min:action.minimum,max:action.maximum}}
        case "Net Income":
            return {...state,NetIncome:{min:action.minimum,max:action.maximum}}
        case "Return on Equity":
            return {...state,ReturnOnEquity:{min:action.minimum,max:action.maximum}}
        case "Return on Assets":
            return {...state,ReturnOnAssets:{min:action.minimum,max:action.maximum}}
        case "Net Profit Margin":
            return {...state,NetProfitMargin:{min:action.minimum,max:action.maximum}}
        case "ROCE":
            return {...state,ROCE:{min:action.minimum,max:action.maximum}}
        case "Cost of Goods Sold":
            return {...state,CostOfGoodsSold:{min:action.minimum,max:action.maximum}}
        case "Debt to Equity":
            return {...state,DebtToEquity:{min:action.minimum,max:action.maximum}}
        case "Earning Power":
            return {...state,EarningPower:{min:action.minimum,max:action.maximum}}
        case "Interest Coverage Ratio":
            return {...state,CoverageRatio:{min:action.minimum,max:action.maximum}}
        case "Net Income/Liabilities":
            return {...state,NetIncomeLiabilities:{min:action.minimum,max:action.maximum}}
        case "Cash Conversion Cycle":
            return {...state,CashConversionCycle:{min:action.minimum,max:action.maximum}}
        case "5Y Historical Revenue Growth":
            return {...state,FiveYHistoricalRevenueGrowth:{min:action.minimum,max:action.maximum}}
        case "5Y Historical EBITA Growth":
            return {...state,FiveYHistoricalEBITAGrowth:{min:action.minimum,max:action.maximum}}
        case "1Y Historical Revenue Growth":
            return {...state,OneYHistoricalRevenueGrowth:{min:action.minimum,max:action.maximum}}
        case "1Y Historical EBITA Growth":
            return {...state,OneYHistoricalEBITAGrowth:{min:action.minimum,max:action.maximum}}
        case "3Y Historical Divident Growth":
            return {...state,ThreeYHistoricalDividentGrowth:{min:action.minimum,max:action.maximum}}
        case "Total Revenue":
            return {...state,TotalRevenue:{min:action.minimum,max:action.maximum}}
        case "EBITA":
            return {...state,EBITA:{min:action.minimum,max:action.maximum}}
        case "PBIT":
            return {...state,PBIT:{min:action.minimum,max:action.maximum}}
        case "Earning per Share":
            return {...state,EarningPerShare:{min:action.minimum,max:action.maximum}}
        case "Divident per Share":
            return {...state,DividentPerShare:{min:action.minimum,max:action.maximum}}
        case "Total Debt":
            return {...state,TotalDebt:{min:action.minimum,max:action.maximum}}
        case "Total Assets":
            return {...state,TotalAssets:{min:action.minimum,max:action.maximum}}
        case "Share Capital":
            return {...state,ShareCapital:{min:action.minimum,max:action.maximum}}
        case "Reserves & Surplus":
            return {...state,ReservesSurplus:{min:action.minimum,max:action.maximum}}
        case "Total Inventory":
            return {...state,TotalInventory:{min:action.minimum,max:action.maximum}}
        default:
            return state
    }
}
function StockList({ex}) {
    const [stockNames,setstockName]=useState([]);
    const [loading,setloading]=useState(false);
    const [current,setcurrent]=useState(1);
    const [stockFiltering,setstockFiltering]=useReducer(reducer,initialState);
    useEffect(() => {
        function random(min,max){
            let diff=max-min;
            let rand=Math.random();
            rand=rand*diff;
            rand=rand+min;
            return rand;
    
        }
        function adding_random_values(arr){
            for(let i=0;i<arr.length;i++){
                arr[i].marketcap=random(1000,16000000);
                arr[i].PE=random(5,80);
                arr[i].netIncome=random(10,5000000);
                arr[i].returnOnEquity=random(-100,100)
                arr[i].ReturnOnAssets=random(-100,100)
                arr[i].NetProfitMargin=random(-100,100)
                arr[i].ROCE=random(-100,100)
                arr[i].CostOfGoodsSold=random(-100,100)
                arr[i].DebtToEquity=random(-100,100)
                arr[i].EarningPower=random(-100,100)
                arr[i].CoverageRatio=random(-100,100)
                arr[i].NetIncomeLiabilities=random(-100,100)
                arr[i].CashConversionCycle=random(-100,100)
                arr[i].FiveYHistoricalRevenueGrowth=random(-100,100)
                arr[i].FiveYHistoricalEBITAGrowth=random(-100,100)
                arr[i].OneYHistoricalRevenueGrowth=random(-100,100)
                arr[i].OneYHistoricalEBITAGrowth=random(-100,100)
                arr[i].ThreeYHistoricalDividentGrowth=random(-100,100)
                arr[i].TotalRevenue=random(-100,100)
                arr[i].EBITA=random(-100,100)
                arr[i].PBIT=random(-100,100)
                arr[i].EarningPerShare=random(-100,100)
                arr[i].DividentPerShare=random(-100,100)
                arr[i].TotalDebt=random(-100,100)
                arr[i].TotalAssets=random(-100,100)
                arr[i].ShareCapital=random(-100,100)
                arr[i].ReservesSurplus=random(-100,100)
                arr[i].TotalInventory=random(-100,100)
            }
        }
        const options = {
            method: 'GET',
            url: 'https://twelve-data1.p.rapidapi.com/stocks',
            params: {exchange: ex, format: 'json'},
            headers: {
              'x-rapidapi-host': 'twelve-data1.p.rapidapi.com',
              'x-rapidapi-key': 'f05722fa17msh9bb06f343aed91ap145da1jsn4523ef435ed0'
            }
          };
          setloading(true);
          axios.request(options).then(function (response) {
              adding_random_values(response.data.data);
              setstockName(response.data.data);
              setloading(false);



          }).catch(function (error) {
              console.error(error);
          });  
        
    }, [ex])
    function filteringStocks(e){
        return ((e.marketcap>=stockFiltering.marketcap.min && e.marketcap<=stockFiltering.marketcap.max)&&
        (e.PE>=stockFiltering.PE.min && e.PE<=stockFiltering.PE.max)&&
        (e.netIncome>=stockFiltering.NetIncome.min && e.netIncome<=stockFiltering.NetIncome.max)&&
        (e.returnOnEquity>=stockFiltering.ReturnOnEquity.min && e.returnOnEquity<=stockFiltering.ReturnOnEquity.max)&&
        (e.ReturnOnAssets>=stockFiltering.ReturnOnAssets.min && e.ReturnOnAssets<=stockFiltering.ReturnOnAssets.max)&&
        (e.NetProfitMargin>=stockFiltering.NetProfitMargin.min && e.NetProfitMargin<=stockFiltering.NetProfitMargin.max)&&
        (e.ROCE>=stockFiltering.ROCE.min && e.ROCE<=stockFiltering.ROCE.max)&&
        (e.CostOfGoodsSold>=stockFiltering.CostOfGoodsSold.min && e.CostOfGoodsSold<=stockFiltering.CostOfGoodsSold.max)&&
        (e.DebtToEquity>=stockFiltering.DebtToEquity.min && e.DebtToEquity<=stockFiltering.DebtToEquity.max)&&
        (e.EarningPower>=stockFiltering.EarningPower.min && e.EarningPower<=stockFiltering.EarningPower.max)&&
        (e.CoverageRatio>=stockFiltering.CoverageRatio.min && e.CoverageRatio<=stockFiltering.CoverageRatio.max)&&
        (e.NetIncomeLiabilities>=stockFiltering.NetIncomeLiabilities.min && e.NetIncomeLiabilities<=stockFiltering.NetIncomeLiabilities.max)&&
        (e.CashConversionCycle>=stockFiltering.CashConversionCycle.min && e.CashConversionCycle<=stockFiltering.CashConversionCycle.max)&&
        (e.FiveYHistoricalRevenueGrowth>=stockFiltering.FiveYHistoricalRevenueGrowth.min && e.FiveYHistoricalRevenueGrowth<=stockFiltering.FiveYHistoricalRevenueGrowth.max)&&
        (e.FiveYHistoricalEBITAGrowth>=stockFiltering.FiveYHistoricalEBITAGrowth.min && e.FiveYHistoricalEBITAGrowth<=stockFiltering.FiveYHistoricalEBITAGrowth.max)&&
        (e.OneYHistoricalRevenueGrowth>=stockFiltering.OneYHistoricalRevenueGrowth.min && e.OneYHistoricalRevenueGrowth<=stockFiltering.OneYHistoricalRevenueGrowth.max)&&
        (e.OneYHistoricalEBITAGrowth>=stockFiltering.OneYHistoricalEBITAGrowth.min && e.OneYHistoricalEBITAGrowth<=stockFiltering.OneYHistoricalEBITAGrowth.max)&&
        (e.ThreeYHistoricalDividentGrowth>=stockFiltering.ThreeYHistoricalDividentGrowth.min && e.ThreeYHistoricalDividentGrowth<=stockFiltering.ThreeYHistoricalDividentGrowth.max)&&
        (e.TotalRevenue>=stockFiltering.TotalRevenue.min && e.TotalRevenue<=stockFiltering.TotalRevenue.max)&&
        (e.EBITA>=stockFiltering.EBITA.min && e.EBITA<=stockFiltering.EBITA.max)&&
        (e.PBIT>=stockFiltering.PBIT.min && e.PBIT<=stockFiltering.PBIT.max)&&
        (e.EarningPerShare>=stockFiltering.EarningPerShare.min && e.EarningPerShare<=stockFiltering.EarningPerShare.max)&&
        (e.DividentPerShare>=stockFiltering.DividentPerShare.min && e.DividentPerShare<=stockFiltering.DividentPerShare.max)&&
        (e.TotalDebt>=stockFiltering.TotalDebt.min && e.TotalDebt<=stockFiltering.TotalDebt.max)&&
        (e.TotalAssets>=stockFiltering.TotalAssets.min && e.TotalAssets<=stockFiltering.TotalAssets.max)&&
        (e.ShareCapital>=stockFiltering.ShareCapital.min && e.ShareCapital<=stockFiltering.ShareCapital.max)&&
        (e.ReservesSurplus>=stockFiltering.ReservesSurplus.min && e.ReservesSurplus<=stockFiltering.ReservesSurplus.max)&&
        (e.TotalInventory>=stockFiltering.TotalInventory.min && e.TotalInventory<=stockFiltering.TotalInventory.max)
        )
    }
    const indexOfLastStock=current*35;
    const indexOfFirstStock=indexOfLastStock-35;
    const currentStock=stockNames.filter(filteringStocks).slice(indexOfFirstStock,indexOfLastStock-1)
    return (
        <div className="stock-cont">
             <Sorting stockFiltering={stockFiltering} setstockFiltering={setstockFiltering}/>
          <div className="stock-scrool">
            <div className="stock-list">
            {loading ? (<h2>loading</h2>):
            (<table className="table">
                <thead>
                    <tr>
                        <th>Company Name</th>
                        <th>Market Cap(in Million)</th>
                        <th>PE Ratio(%)</th>
                        <th>Net Income(in Million)</th>
                        <th>Country</th>
                    </tr>
                </thead>
            
            {currentStock.map((stockName,i)=>{
              return (<StockCard key={i} 
                symbol={stockName.symbol} comName={stockName.name} 
                exchange={stockName.exchange} 
                country={stockName.country} marketcap={stockName.marketcap} 
                PE={stockName.PE} netIncome={stockName.netIncome} index={i}/>)
            })}
            </table>)}
            </div>
            <NextStock totalStocks={stockNames.filter(filteringStocks).length} setcurrent={setcurrent} current={current}/>
            </div>
        </div>
    )
}

export default React.memo(StockList)

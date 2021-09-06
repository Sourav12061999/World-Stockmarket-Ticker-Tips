import React,{useEffect,useState} from 'react'
import axios from 'axios'
import StockCard from './StockCard';
import NextStock from './NextStock';
import Sorting from './Sorting';
import '../AllCSS/StockList.css'
function StockList({ex}) {
    const [stockNames,setstockName]=useState([]);
    const [loading,setloading]=useState(false);
    const [current,setcurrent]=useState(1);
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
                arr[i].marketcap=random(100,1600000);
                arr[i].PE=random(5,80);
                arr[i].netIncome=random(1,5000000);
    
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
    const indexOfLastStock=current*50;
    const indexOfFirstStock=indexOfLastStock-50;
    const currentStock=stockNames.slice(indexOfFirstStock,indexOfLastStock)
    return (
        <div className="stock-cont">
             <Sorting/>
             <div className="stock-scrool">
            <div className="stock-list">
            {loading ? (<h2>loading</h2>):null}
            <table className="table">
                <thead>
                    <tr>
                        <th>Company Name</th>
                        <th>Market Cap(in Crore)</th>
                        <th>PE Ratio(%)</th>
                        <th>Net Income</th>
                        <th>Country</th>
                    </tr>
                </thead>
            
            {currentStock.map((stockName)=>{
              return (<StockCard key={stockName.symbol} 
                symbol={stockName.symbol} comName={stockName.name} 
                exchange={stockName.exchange} 
                country={stockName.country} marketcap={stockName.marketcap} 
                PE={stockName.PE} netIncome={stockName.netIncome}/>)
            })}
            </table>
            </div>
            <NextStock totalStocks={stockNames.length} setcurrent={setcurrent} current={current}/>
            </div>
        </div>
    )
}

export default StockList

import React,{useEffect,useState} from 'react'
import axios from 'axios'
function SelectEx({setex}) {
    const [exs,setexs]=useState([]);
    useEffect(() => {
        const options = {
          method: 'GET',
          url: 'https://twelve-data1.p.rapidapi.com/exchanges',
          params: {format: 'json'},
          headers: {
            'x-rapidapi-host': 'twelve-data1.p.rapidapi.com',
            'x-rapidapi-key': 'f05722fa17msh9bb06f343aed91ap145da1jsn4523ef435ed0'
          }
        };
        
        axios.request(options).then(function (response) {
            setexs(response.data.data);
        }).catch(function (error) {
            console.error(error);
        });

        
    }, [])

    function selectEx(e){
      setex(exs[e.target.value].name);
    }
    return (
        <div>
            <select id="Exchanges"  onChange={selectEx}>
                {exs.map((e,i)=>{
                return (<option key={i} value={i.toString()}>{e.name}({e.country})</option>)
                })}
            </select>

        </div>
    )
}

export default SelectEx

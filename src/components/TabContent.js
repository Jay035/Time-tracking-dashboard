import { useEffect, useState } from "react"
import Item from "./Item";

export default function TabContent({tab}){
    const [data, setData] = useState([]);
    const getData = () => {
        fetch('./Data.js', {
            headers : {
                'Content-Type': 'application/json',
                'Accept' : 'application/json'
            }
        }).then(res => {
            return res.json();
        }).then(myJson => {
            setData(myJson)
        })
    };

    useEffect(() => {
        getData();
    }, [])
    console.log(tab)
    return(
        <div className="tabContent" id={tab}>
            {data.map((item, index) => {
                if(tab === 'daily'){
                    return <Item title={item.title} hours={item.timeframes.daily.current} prevLog={item.timeframes.daily.previous} />
                }
            })}
            <p>{tab}</p>
        </div>
    )
}
import React,{useState, useLayoutEffect} from 'react'
import Banner from '../components/Banner'
import {getShips  as getShipsService } from '../services/serviceships'


export default function Ships() {

    const [ships, setShips] = useState([])

    useLayoutEffect(() => {
        getShips()
     }, [])
    

    const getShips = async () =>{
        let data = await getShipsService();
        setShips(data);
    }

    return (
        <div>
            <Banner titulo="Principais Naves de Star Wars"/>
            
            {ships.map( (item, key) => {
                return(
                    <div className="div-api-elements" key={key}>
                        {item.name} 
                    </div>
                )
            })}
        </div>
    )
}
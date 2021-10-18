import React,{useState, useLayoutEffect} from 'react'
import Banner from '../components/Banner'
import {getPlanets as getPlanetsService} from '../services/serviceplanets'


export default function Planets() {

    const [planets, setPlanets] = useState([])

    useLayoutEffect(() => {
        getPlanets()
     }, [])
    

    const getPlanets = async () =>{
        let data = await getPlanetsService();
        setPlanets(data);
    }

    return (
        <div>
            <Banner titulo="Principais Planetas de Star Wars"/>
            
            {planets.map( (item, key) => {
                return(
                    <div className="div-api-elements" key={key}>
                        {item.name} 
                    </div>
                )
            })}
        </div>
    )
}
import React,{useState, useLayoutEffect} from 'react'
import Banner from '../components/Banner'
import {getSpecies as getSpeciesService} from '../services/servicespecies'


export default function Species() {

    const [species, setSpecies] = useState([])

    useLayoutEffect(() => {
        getSpecies()
     }, [])
    

    const getSpecies = async () =>{
        let data = await getSpeciesService();
        setSpecies(data);
    }

    return (
        <div>
            <Banner titulo="Principais Especies de Star Wars"/>
            
            {species.map( (item, key) => {
                return(
                    <div className="div-api-elements" key={key}>
                        {item.name} - {item.classification}
                    </div>
                )
            })}
        </div>
    )
}
import React,{useState, useLayoutEffect} from 'react'
import Banner from '../components/Banner'
import {getPeople as getPeopleService } from '../services/servicepeople'


export default function People() {

    const [people, setPeople] = useState([])

    useLayoutEffect(() => {
        getPeople()
     }, [])
    

    const getPeople = async () =>{
        let data = await getPeopleService();
        setPeople(data);
    }

    return (
        <div>
            <Banner titulo="Principais Personagens de Star Wars"/>
            
            {people.map( (item, key) => {
                return(
                    <div className="div-api-elements" key={key}>
                        {item.name} 
                    </div>
                )
            })}
        </div>
    )
}
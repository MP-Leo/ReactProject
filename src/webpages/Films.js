import React,{useState, useLayoutEffect} from 'react'
import Banner from '../components/Banner'
import { getFilms as getFilmsService } from '../services/servicefilms'


export default function Films() {

    const [films, setFilms] = useState([])

    useLayoutEffect(() => {
        getFilms()
     }, [])
    

    const getFilms = async () =>{
        let data = await getFilmsService();
        setFilms(data);
    }

    return (
        <div>
            <Banner titulo="Principais Filmes de Star Wars"/>
            
            {films.map( (item, key) => {
                return(
                    <div className="div-api-elements" key={key}>
                        {item.episode_id} - {item.title}
                    </div>
                )
            })}
        </div>
    )
}

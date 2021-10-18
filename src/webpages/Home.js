import React from 'react'
import Banner from '../components/Banner';
import Sections from '../components/Sections';


export default function Home() {
    return (
        <div>
            <Banner 
                titulo="Há Muito Tempo, Numa Galáxia Muito, Muito Distante" 
                
                conteudo="Um trabalho desenvolvido para a disciplina: 
                Fundamentos De Programação Com o Marcão" 
            />

            <Sections 
                nome1="Leonardo" 
                sobrenome1="Marcondes Pereira"
                ra1="R.A. = 1120478"
                
                nome2="Gabriel" 
                sobrenome2="Forchesatto"
                ra2="R.A. = 1120445"
            />
            
        </div>
    )
}

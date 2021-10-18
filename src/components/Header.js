import React from 'react'
import { Link } from 'react-router-dom'


export default function Header() {
    return (
        <header id="header">
            <div id="elements">

                <Link to="/films">
                    Films
                </Link>

                <Link to="/starships">
                    Starships
                </Link>

                <Link to="/people">    
                    People
                </Link>

                
                <Link to="/planets">
                    Planets
                </Link>


                <Link to="/species">
                    Species
                </Link>

            </div>

            <div id="main-elements">
                <Link to="/">
                    Home
                </Link>

                <Link to="/login">
                    Login
                </Link>
            </div>

		</header>
    )
}

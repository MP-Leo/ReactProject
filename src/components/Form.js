import React from 'react'

export default function Form() {
    return (
        <div id="div-form">
            <form action="/pagina-processa-dados-do-form" method="post">

                <label for="mail">E-mail:</label>
                <input type="email" id="mail" />


                <label for="password">Senha:</label>
                <input type="password" id="password" />

                <button type="submit">Ir</button>

            </form>
        </div>
    )
}

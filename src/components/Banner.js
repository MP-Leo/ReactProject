import React from 'react'


export default function Banner({titulo, conteudo}) {
    return (
        <section id="banner">
          <h1>{titulo}</h1>
          <p>{conteudo}</p>
		    </section>
    )
}

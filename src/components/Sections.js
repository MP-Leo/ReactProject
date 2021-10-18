import React from 'react'

export default function Sections(props) {
    return (
		<div id="div-section">
				<ul id="name-list">
					<li>
						<header>
							<h3>{props.nome1}<br />{props.sobrenome1}</h3>
						</header>
						<p>{props.ra1}</p>
					</li>

					<li>
						<header>
							<h3>{props.nome2}<br />{props.sobrenome2}</h3>
						</header>
						<p>{props.ra2}</p>
					</li>
				</ul>
		</div>
    )
}

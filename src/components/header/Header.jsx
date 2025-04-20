import React from 'react'
import Logo from '../../assets/logo.png'
import { navLinks } from '../../Data'
import ScrollLink from '../link/ScrollLink'

const header = () => {
	return (

		<header className="header">

			<nav className="nav container">

				<a href="/" className="nav-logo">
				
					<img src={ Logo } alt="" className="nav-logo-img"/>

				</a>

				<div className="nav-menu">

					<ul className="nav-list">

						{navLinks.map((navLink, index) => {

							return (

								<li className="nav-item" key={index}>

									<ScrollLink to={navLink} name={navLink} className="nav-link"/>

								</li>

							);

						})}

					</ul>

				</div>

			</nav>

		</header>

	)
}

export default header
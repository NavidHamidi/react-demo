import React from 'react';
import Navitem from './Navitem';

import LoginButton from '../LoginButton'
import LogoutButton from '../LogoutButton'

class Navbar extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			ItemActive : ''
		}
	}

	setItemActive(x) {
		if (this.state.NaviItemId.length > 0) {
			document.getElementById(this.state.ItemActive).classList.remove('active')
		}

		this.setState({ ItemActive : x }, () => {
			document.getElementById(this.state.ItemActive).classList.add('active')
		})
	}

	render() {
		return (
			<div className="navbar-container">
				<nav className="navbar">
					<ul>
						<Navitem item="Home" tolink="/"></Navitem>
						<Navitem item="Profile" tolink="/profile"></Navitem>
						<LoginButton />
						<LogoutButton />
					</ul>
				</nav>
			</div>
			
		)
	}
}

export default Navbar
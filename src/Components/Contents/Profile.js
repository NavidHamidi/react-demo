import React from 'react'
import { withAuth0 } from '@auth0/auth0-react';
import Form from './Form'

class Profile extends React.Component {
	render() {
		const {user, isAuthenticated} = this.props.auth0
		if (!isAuthenticated) {
			return (
				<div className="content-container">
					Veuillez vous connecter pour voir et éditer votre profil.
				</div>
			)
		}

		return (
			<Form user={user}/>
		)
	}
}

export default withAuth0(Profile)
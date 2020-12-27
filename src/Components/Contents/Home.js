import React from 'react'
import { useAuth0 } from "@auth0/auth0-react"

const Home = () => {
	const { user, error, isAuthenticated, isLoading } = useAuth0();

	if (isLoading) {
		return <div className='content-container'>Loading...</div>;
	}

	if (error) {
		return <div>Oops... {error.message}</div>;
	}
  
	if (!isAuthenticated) {
		return(<div className='content-container'>
				Bienvenue sur la démo auth0 pour la RATP.<br/>
				Veuillez vous connecter.
			</div>
		)
	}
  
	return (
		<div className='content-container'>
		  <img src={user.picture} alt={user.name} />
		  <h2>{user.name}</h2>
		  <p>{user.email}</p>
		</div>
		//)
	);
  };

export default Home
import React from 'react';
import './errorMessage.css'

const ErrorMessage = () => {

	return (
		<>
			<img src={process.env.PUBLIC_URL + '/img/got.jpeg'} alt='error'></img>
			<span>Something goes wrong</span>
		</>
	)
}

export default ErrorMessage;
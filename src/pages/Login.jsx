import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

const LoginButton = () => {
	const { loginWithRedirect } = useAuth0();

	return (
		<a
			className="btn btn-primary btn-info me-3"
			onClick={() => loginWithRedirect()}
		>
			{console.log(loginWithRedirect)}
			Log In
		</a>
	);
};

export default LoginButton;

import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

const Login = () => {
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');

	const handleForm = (e) => {
		e.preventDefault();
		if (name === '' || password === '') {
			toast('Please Fill All Fields');
		} else {
			setName('');
			setPassword('');
			toast('Login Successful');
		}
	};
	return (
		<div className="container my-4">
			<form onSubmit={handleForm}>
				<div className="row justify-content-center">
					<div className="col-md-5">
						<div className="mb-4">
							<label className="form-label" htmlFor="username">
								User Name
							</label>
							<input
								className="form-control"
								id="username"
								placeholder="Enter Username"
								value={name}
								onChange={(e) => {
									setName(e.target.value);
								}}
							/>
						</div>
						<div className="mb-4">
							<label className="password" htmlFor="password">
								Password
							</label>
							<input
								id="password"
								type="password"
								className="form-control"
								placeholder="Enter Password"
								value={password}
								onChange={(e) => {
									setPassword(e.target.value);
								}}
							/>
						</div>
						<div className="text-end">
							<button type="submit" className="btn btn-primary">
								Submit
							</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};
export default Login;

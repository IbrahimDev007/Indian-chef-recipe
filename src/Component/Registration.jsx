import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
// import { Input, Button, Card, Form, Alert } from "daisyui";

const Registration = () => {
	const [username, setUsername] = useState("");
	const [photoUrl, setPhotoUrl] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [error, setError] = useState("");
	const { createUser, updateUserData, setLoading } = useContext(AuthContext);
	const navigate = useNavigate();
	const handleSubmit = (event) => {
		event.preventDefault();

		setError("");
		// perform form validation and submission
		if (password.length < 6) {
			setError("Passwords less then 6 character");
			return;
		}
		if (password !== confirmPassword) {
			setError("Passwords do not match");
			return;
		}
		if (!/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(username)) {
			setError("User Name Not Valid ");
			return;
		} else {
			setError("");

			createUser(email, password)
				.then((result) => {
					updateUserData(result.user, username, photoUrl)
						.then(() => {
							setLoading(false)
							navigate('/');
						}
						)
						.catch((err) => console.log(err.message));
				})
				.catch((err) => setError(err.message));

			// perform form submission
		}
		event.target.reset();
	};

	return (
		<div className="min-h-screen bg-gray-100 flex items-center justify-center w-4/6 ">
			<div className="bg-white p-6 w-[40%] rounded shadow-md flex items-center flex-col mt-4">
				<h2 className="text-2xl font-bold mb-4">Register</h2>

				<form onSubmit={handleSubmit} className="w-8/12">
					<div className="mb-4">
						<label
							className="block text-gray-700 font-bold mb-2"
							htmlFor="username"
						>
							Username
						</label>
						<input
							className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							type="text"
							placeholder="Enter your username"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							required
						/>
					</div>
					<div className="mb-4">
						<label
							className="block text-gray-700 font-bold mb-2"
							htmlFor="photoUrl"
						>
							photoUrl
						</label>
						<input
							className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							type="text"
							placeholder="Enter your photoUrl"
							value={photoUrl}
							onChange={(e) => setPhotoUrl(e.target.value)}
							required
						/>
					</div>
					<div className="mb-4">
						<label
							className="block text-gray-700 font-bold mb-2"
							htmlFor="email"
						>
							Email
						</label>
						<input
							className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							type="email"
							placeholder="Enter your email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</div>
					<div className="mb-4">
						<label
							className="block text-gray-700 font-bold mb-2"
							htmlFor="password"
						>
							Password
						</label>
						<input
							className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							type="password"
							placeholder="Enter your password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
					</div>
					<div className="mb-6">
						<label
							className="block text-gray-700 font-bold mb-2"
							htmlFor="confirmPassword"
						>
							Confirm Password
						</label>
						<input
							className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							type="password"
							placeholder="Confirm your password"
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
							required
						/>
						<div>
							<Link to="/login" className="text-sm text-blue-700">
								Click If You Have Already Account
							</Link>
						</div>
					</div>
					<div className="flex justify-center">
						<button
							className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
							type="submit"
						>
							Register
						</button>
					</div>
					{error && (
						<div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
							{error}
						</div>
					)}
				</form>
			</div>
		</div>
	);
};

export default Registration;

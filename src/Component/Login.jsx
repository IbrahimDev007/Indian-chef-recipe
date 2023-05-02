import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();
	const { googleLogin, setUser, login } = useContext(AuthContext);

	const handleSubmit = (event) => {
		event.preventDefault();
		login(email, password)
			.then(() => {
				navigate("/");
			})
			.catch((err) => console.log(err.message));
		// You can perform additional actions here, such as sending a login request to a server
	};
	const handleGoogleLogin = () => {
		googleLogin()
			.then((result) => {
				setUser(result.user.displayName);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-2/6"
		>
			<div className="mb-4  ">
				<label className="block text-gray-700 font-bold mb-2" htmlFor="email">
					Email
				</label>
				<input
					className="shadow appearance-none border border-green-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-red-500 "
					id="email"
					type="email"
					placeholder="Email"
					value={email}
					onChange={(event) => setEmail(event.target.value)}
				/>
			</div>
			<div className="mb-6">
				<label
					className="block text-gray-700 font-bold mb-2"
					htmlFor="password"
				>
					Password
				</label>
				<input
					className="shadow appearance-none border border-green-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline  "
					id="password"
					type="password"
					placeholder="Password"
					value={password}
					onChange={(event) => setPassword(event.target.value)}
				/>
			</div>
			<div className="flex items-center justify-between">
				<button
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					type="submit"
				>
					Sign In
				</button>

				<button
					className="btn btn-primary bg-green-500"
					onClick={handleGoogleLogin}
				>
					Google Login
				</button>
			</div>
		</form>
	);
};

export default Login;

import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const PrivateRoute = ({ children }) => {
	const { user, loading } = useContext(AuthContext);
	console.log("user in private route", user);
	if (loading) {
		return <h1>Loading</h1>;
	}
	if (user) {
		return children;
	}
};

export default PrivateRoute;

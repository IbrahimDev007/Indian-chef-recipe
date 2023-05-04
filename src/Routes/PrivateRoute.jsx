import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import Loader from "../Component/Loader";
import { AuthContext } from "../Provider/AuthProvider";

const PrivateRoute = ({ children }) => {
	const { user, loading } = useContext(AuthContext);
	console.log("user in private route", user);
	if (loading) {
		console.log(loading);
		return <Loader />;
	}
	if (user) {
		return children;
	}
	return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;

import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../Component/Loader";
import { AuthContext } from "../Provider/AuthProvider";

const PrivateRoute = ({ children }) => {
	const { user, loading } = useContext(AuthContext);
	const location = useLocation();
	if (loading) {
		console.log(loading);
		return <Loader />;
	}
	if (user) {
		return children;
	}
	if (!user) {
		return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
	}
};

export default PrivateRoute;

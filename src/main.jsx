import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import AuthProvider from "./Provider/AuthProvider";
import router from "./Routes/Routes";
import { ToastContainer } from "react-toastify";
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthProvider>
			<RouterProvider router={router} />
			<ToastContainer />
		</AuthProvider>
	</React.StrictMode>
);

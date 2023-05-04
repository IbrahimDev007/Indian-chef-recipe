import { createBrowserRouter } from "react-router-dom";
import Blog from "../Component/Blog";
import ChiefPage from "../Component/ChiefPage";
import ErrorPage from "../Component/ErrorPage";
import Home from "../Component/Home";
import Login from "../Component/Login";
import Registration from "../Component/Registration";
import Layout from "../Layout/Layout";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		errorElement: <ErrorPage />,

		children: [
			{
				path: "/",
				element: <Home />,
			},

			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/signup",
				element: <Registration />,
			},
			{
				path: "/blog",
				element: <Blog />,
			},
		],
	},
	{
		path: "/chef/:id",
		element: (
			<PrivateRoute>
				<ChiefPage />
			</PrivateRoute>
		),
		loader: ({ params }) => fetch(`http://localhost:5000/chef/${params.id}`),
		errorElement: <ErrorPage />,
	},
	// {
	// 	path: "*",
	// 	errorElement: <ErrorPage />,
	// },
]);

export default router;

import { createBrowserRouter } from "react-router-dom";
import Blog from "../Component/Blog";
import Home from "../Component/Home";
import Login from "../Component/Login";
import Registration from "../Component/Registration";
import Layout from "../Layout/Layout";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/home",
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
]);

export default router;

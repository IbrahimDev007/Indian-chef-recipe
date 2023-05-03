import { createBrowserRouter } from "react-router-dom";
import Blog from "../Component/Blog";
import ChiefPage from "../Component/ChiefPage";
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
				loader: () => fetch("http://localhost:5000"),
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
	{
		path: "/chef/:id",
		element: <ChiefPage />,
		loader: ({ params }) => fetch(`http://localhost:5000/chef/${params.id}`),
	},
]);

export default router;

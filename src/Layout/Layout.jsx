import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Hader from "../Component/Hader";

const Layout = () => {
	const chiefs = useLoaderData();
	console.log(chiefs);
	return (
		<div>
			<Hader />
			<div
				className="flex flex-col items-center 
            "
			>
				<Outlet />
			</div>
		</div>
	);
};

export default Layout;

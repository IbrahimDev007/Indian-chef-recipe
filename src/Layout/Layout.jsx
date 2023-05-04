import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Component/Footer";
import Hader from "../Component/Hader";

const Layout = () => {
	return (
		<div>
			<Hader />
			<div
				className="flex flex-col items-center 
            "
			>
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};

export default Layout;

import React from "react";
import { useLoaderData } from "react-router-dom";

const Home = () => {
	const chiefs = useLoaderData();
	console.log(chiefs);
	return <div>this is home</div>;
};

export default Home;

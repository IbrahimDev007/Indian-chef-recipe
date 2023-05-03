import React from "react";
import { useLoaderData } from "react-router-dom";

const ChiefPage = () => {
	const chiefdetails = useLoaderData();
	console.log(chiefdetails);

	return <div>chief page</div>;
};

export default ChiefPage;

import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Banner from "./Banner";

const Home = () => {
	const chiefs = useLoaderData();
	console.log(chiefs);
	return (
		<div>
			<Banner />
			<div className="grid gap-2  grid-cols-3">
				{chiefs.map((chief, index) => (
					<div className="card card-side bg-base-100 shadow-xl" key={index}>
						<figure>
							<img src={chief.picture} alt={chief.name} />
						</figure>
						<div className="card-body">
							<h2 className="card-title">Chiefe Name:{chief.name}</h2>
							<p> Year Of Expirence{chief.years_of_experience}</p>
							<p> Number Of Ricepies{chief.number_of_recipes}</p>
							<p className="text-red-600">Likes {chief.likes}</p>
							<div className="card-actions justify-end">
								<Link to={`/chef/${index}`}>
									<button className="btn btn-primary">View Details</button>
								</Link>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Home;

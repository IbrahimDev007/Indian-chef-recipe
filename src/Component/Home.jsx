import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AboutUs from "./about";
import Banner from "./Banner";
import ContactUs from "./ContuctUs";
import Loader from "./Loader";
// import Slider from "./Slider";

const Home = () => {
	const [chiefs, setChiefs] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// Fetch chiefs here
		fetch("http://localhost:5000")
			.then((response) => response.json())
			.then((chiefs) => {
				setChiefs(chiefs);
				setLoading(false);
			})
			.catch((error) => {
				console.error(error);
				setLoading(false);
			});
	}, []);

	if (loading) {
		return <Loader />;
	}

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
			<div className="my-4">
				<AboutUs />
			</div>

			<ContactUs />
		</div>
	);
};

export default Home;

import React from "react";
import { useLoaderData } from "react-router-dom";

const ChiefPage = () => {
	const chiefdetails = useLoaderData();
	const Recipies = chiefdetails.recipes;

	console.log(Recipies);

	return (
		<div className=" block">
			<div className="banner">
				{
					<div
						className="hero min-h-screen bg-base-200"
						style={{
							backgroundImage: `url("/images/stock/photo-1507358522600-9f71e620c44e.jpg")`,
						}}
					>
						<div className="hero-content flex-col lg:flex-row-reverse">
							<img
								src={chiefdetails.picture}
								className="max-w-sm rounded-lg shadow-2xl"
							/>
							<div>
								<h1 className="text-5xl font-bold">{chiefdetails.name}</h1>
								<p className="py-6">{chiefdetails.bio}</p>
								<p className="text-lg">
									Number of recciepies:
									<span className="px-2">{chiefdetails.number_of_recipes}</span>
								</p>
								<p className="text-lg">
									Year of Expirence:
									<span className="px-2">
										{chiefdetails.years_of_experience}
									</span>
								</p>
							</div>
						</div>
					</div>
				}
			</div>
			<div className="grid gap-2  grid-cols-3">
				{Recipies.map((recipie, index) => (
					<div className="card card-side bg-base-100 shadow-xl" key={index}>
						<figure>
							<img src={recipie.image} alt={Recipies.name} />
						</figure>
						<div className="card-body">
							<h2 className="card-title">{recipie.name}</h2>
							<p>
								{recipie.ingredients.map((ing, index) => (
									<li key={index}>{ing}</li>
								))}
							</p>
							<p className="py-2">{recipie.method}</p>
							<p className="text-red-600">Ratting: {recipie.rating}</p>
							<div className="card-actions justify-end">
								<button className="btn btn-primary" disabled>
									Favourite
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ChiefPage;

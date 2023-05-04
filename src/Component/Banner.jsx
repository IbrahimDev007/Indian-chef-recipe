import React from "react";
import LazyLoad from "react-lazy-load";
const Banner = () => {
	return (
		<div
			className="hero min-h-screen bg-base-200 text-white "
			style={{
				backgroundImage: `url("https://images.pexels.com/photos/4253312/pexels-photo-4253312.jpeg?auto=compress&cs=tinysrgb&w=600")`,
			}}
		>
			<div className="hero-content flex-col lg:flex-row-reverse  px-4">
				<LazyLoad>
					<img
						src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600"
						className="max-w-sm rounded-lg shadow-2xl"
					/>
				</LazyLoad>
				;
				<div>
					<h1 className="text-3xl font-bold">
						Explore Delicious Recipes by Top Chefs
					</h1>
					<p className="pt-6 pb-3">
						Hero Description: Welcome to our website, where you can discover
						mouth-watering recipes created by some of the world's most talented
						chefs. From traditional Indian cuisine to modern European fusion
						dishes, our collection of recipes has something for everyone.
					</p>
					<p className="pb-3">
						Whether you're a seasoned chef or a beginner in the kitchen, you'll
						find recipes that will inspire you to experiment with new
						ingredients and techniques. Our chefs have shared their favorite
						recipes, along with helpful tips and tricks to make the cooking
						process easier and more enjoyable.
					</p>
					<p className="pb-6">
						So come and join us on a culinary journey and explore the delicious
						recipes created by our top chefs.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Banner;

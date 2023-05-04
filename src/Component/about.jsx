import React from "react";

const AboutUs = () => {
	return (
		// <div className="bg-white py-16">
		// 	<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		// 		<div className="lg:text-center">
		// 			<h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
		// 				About Us
		// 			</h2>
		// 			<p className="mt-2 lg:text-lg leading-8 font-medium text-gray-900">
		// 				Meet our team of expert Indian chefs
		// 			</p>
		// 		</div>
		// 		<div className="mt-20">
		// 			<div className="lg:grid lg:grid-cols-2 lg:gap-8">
		// 				<div>
		// 					<h3 className="text-2xl font-semibold text-gray-900">
		// 						Our Head Chef
		// 					</h3>
		// 					<p className="mt-4 text-lg text-gray-500">
		// 						Rajesh Kumar Chef is the head chef at our restaurant, with over
		// 						15 years of experience in the culinary arts. She began her
		// 						career as a line cook in a Michelin-starred restaurant in Mumbai
		// 						before honing her skills at various renowned restaurants across
		// 						India. Chef Sonali is passionate about traditional Indian
		// 						cuisine and loves to experiment with flavors and ingredients to
		// 						create innovative and exciting dishes. She leads our kitchen
		// 						team with her expert knowledge, creativity, and attention to
		// 						detail, ensuring that every dish is made to perfection. Her
		// 						signature dishes, including the Chicken Biryani and Masala Dosa,
		// 						are among our most popular dishes. Chef Sonali is also committed
		// 						to using fresh, locally sourced ingredients and promoting
		// 						sustainable food practices in our restaurant.
		// 					</p>
		// 				</div>
		// 				<div className="mt-12 lg:mt-0">
		// 					<img
		// 						className="h-64 w-full object-cover lg:h-full lg:w-full"
		// 						src="https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg?auto=compress&cs=tinysrgb&w=600"
		// 						alt="Chef"
		// 					/>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</div>
		// </div>
		<div className="card card-side bg-base-100 shadow-xl">
			<figure>
				<img
					src="https://images.pexels.com/photos/6549194/pexels-photo-6549194.jpeg?auto=compress&cs=tinysrgb&w=600"
					alt="Movie"
				/>
			</figure>
			<div className="card-body">
				<h2 className="card-title"> About Us</h2>
				<h3 className="text-2xl font-semibold text-gray-900">
					Meet our team of expert Indian chefs
				</h3>

				<p>
					At Indian Chef Recipes, we believe that cooking is an art form, and we
					are dedicated to bringing you the very best in Indian cuisine. Our
					team of talented chefs has years of experience and a passion for
					creating delicious dishes that will leave you craving more..
				</p>
			</div>
		</div>
	);
};

export default AboutUs;

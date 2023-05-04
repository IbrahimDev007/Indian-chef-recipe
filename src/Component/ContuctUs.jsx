import React from "react";
import { useState } from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const ContactUs = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [submit, setSubmit] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
		// Code to submit form data to backend or send email
		// After successful submission, show a success message
		setSubmit(true);
	};

	return (
		<div className="bg-gray-100 ">
			{submit ? (
				<div className="bg-gray-100 py-16">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="text-center">
							<h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
								Contact Us
							</h2>
							<p className="mt-4 text-lg text-gray-500">
								if you not find We're here to help and answer any questions you
								might have. We look forward to hearing from you!
							</p>
						</div>
						<div className="mt-12">
							<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
								<div className="bg-white overflow-hidden shadow rounded-lg">
									<div className="px-4 py-5 sm:p-6">
										<div className="flex items-center">
											<div className="flex-shrink-0">
												<FaEnvelope className="h-6 w-6 text-gray-400" />
											</div>
											<div className="ml-4">
												<dt className="text-lg leading-6 font-medium text-gray-900">
													Email
												</dt>
												<dd className="mt-2 text-base text-gray-500">
													info@company.com
												</dd>
											</div>
										</div>
									</div>
								</div>

								<div className="bg-white overflow-hidden shadow rounded-lg">
									<div className="px-4 py-5 sm:p-6">
										<div className="flex items-center">
											<div className="flex-shrink-0">
												<FaPhoneAlt className="h-6 w-6 text-gray-400" />
											</div>
											<div className="ml-4">
												<dt className="text-lg leading-6 font-medium text-gray-900">
													Phone
												</dt>
												<dd className="mt-2 text-base text-gray-500">
													(123) 456-7890
												</dd>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			) : (
				<div className="py-20">
					<div className="max-w-lg mx-auto bg-white rounded-lg shadow-md">
						<div className="py-4 px-6 bg-gray-900 text-white rounded-t-lg">
							<h1 className="text-2xl font-bold">Contact Us</h1>
						</div>
						<div className="py-4 px-6">
							<form onSubmit={handleSubmit}>
								<div className="mb-4">
									<label htmlFor="name" className="block font-medium mb-2">
										Name
									</label>
									<input
										type="text"
										id="name"
										name="name"
										value={name}
										onChange={(e) => setName(e.target.value)}
										required
										className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
									/>
								</div>
								<div className="mb-4">
									<label htmlFor="email" className="block font-medium mb-2">
										Email
									</label>
									<input
										type="email"
										id="email"
										name="email"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										required
										className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
									/>
								</div>
								<div className="mb-4">
									<label htmlFor="message" className="block font-medium mb-2">
										Message
									</label>
									<textarea
										id="message"
										name="message"
										value={message}
										onChange={(e) => setMessage(e.target.value)}
										required
										className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
									></textarea>
								</div>
								<button
									type="submit"
									className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition-colors duration-300 ease-in-out disabled:opacity-50"
									disabled={!name || !email || !message}
								>
									Submit
								</button>
							</form>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default ContactUs;

import React, { useRef } from "react";
import Pdf from "react-to-pdf";
const Blog = () => {
	const ref = useRef();
	return (
		<>
			<Pdf targetRef={ref} filename="code-example.pdf">
				{({ toPdf }) => (
					<button className="btn btn-primary" onClick={toPdf}>
						Generate Pdf
					</button>
				)}
			</Pdf>
			<div className="flex  w-[60%] flex-col" ref={ref}>
				<h1 className="text-3xl text-red-500  py-4">
					what the differences between uncontrolled and controlled components?
				</h1>
				<p>
					In React, there are two types of components: controlled and
					uncontrolled. Controlled components are those whose form data is
					handled by the parent component, whereas uncontrolled components are
					those that manage their own form data. Controlled components are
					useful when you need to manipulate or validate the form data before
					submitting it. They require more code to be written, but they provide
					a lot of flexibility. Uncontrolled components, on the other hand, are
					simpler to write and can be useful when you need to manage a large
					number of form elements. They do not require as much code, but they
					can be harder to validate
				</p>
				<h1 className="text-3xl text-red-500  py-4">
					How to validate React props using PropTypes?
				</h1>
				<p>
					React provides a built-in library called PropTypes to validate the
					props passed to a component. PropTypes allows you to define the
					expected data type and whether the prop is required or not.
				</p>
				<h1 className="text-3xl text-red-500  py-4">
					what is the difference between Node.js and Express.js?
				</h1>
				<p>
					Node.js is a JavaScript runtime built on Chrome's V8 JavaScript
					engine. It allows developers to run JavaScript on the server-side,
					which makes it possible to build full-stack web applications using
					only JavaScript. Express.js is a popular web framework for Node.js
					that provides a set of features and tools for building web
					applications. It is built on top of Node.js and provides a simple and
					intuitive API for handling HTTP requests and responses. In short,
					Node.js is a runtime environment for JavaScript, whereas Express.js is
					a web framework built on top of Node.js.
				</p>
				<h1 className="text-3xl text-red-500  py-4">
					What is a custom hook, and why will you create a custom hook?
				</h1>
				<p className="pb-2">
					A custom hook is a JavaScript function that uses React hooks to
					provide reusable functionality to components. Custom hooks can be used
					to abstract away complex logic or to encapsulate functionality that is
					used across multiple components. Custom hooks are created by defining
					a function that uses one or more of React's built-in hooks, such as
					useState or useEffect. The function can then be exported and used in
					any React component. Custom hooks can be useful for a variety of
					reasons. For example, if you have some complex logic that you need to
					reuse across multiple components, you can create a custom hook to
					encapsulate that logic and make it easier to reuse. Alternatively, if
					you find yourself writing the same code over and over again in
					multiple components, you can create a custom hook to abstract that
					code away and reduce code duplication.
				</p>
			</div>
		</>
	);
};

export default Blog;

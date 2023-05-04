import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Hader = () => {
	const { logOut, user } = useContext(AuthContext);
	return (
		<div className="navbar bg-base-100  mb-4">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost lg:hidden"></label>
					<ul
						tabIndex={0}
						className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
					>
						<li>
							<NavLink
								to={"/"}
								className={({ isActive }) => (isActive ? "bg-amber-400" : "")}
							>
								Home
							</NavLink>
						</li>
						<li tabIndex={0}>
							<NavLink
								to={"/blog"}
								className={({ isActive }) => (isActive ? "bg-amber-400" : "")}
							>
								blog
							</NavLink>
						</li>
						<li>
							<NavLink
								to={"/login"}
								className={({ isActive }) => (isActive ? "bg-amber-400" : "")}
							>
								Login
							</NavLink>
						</li>
						<li>
							<NavLink
								to={"/signup"}
								className={({ isActive }) => (isActive ? "bg-amber-400" : "")}
							>
								Registration
							</NavLink>
						</li>
					</ul>
				</div>
				<NavLink to="/" className="btn btn-ghost normal-case text-xl">
					Indian Chef Recipie
				</NavLink>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">
					<li>
						<NavLink
							to={"/"}
							className={({ isActive }) => (isActive ? "bg-amber-400" : "")}
						>
							Home
						</NavLink>
					</li>
					<li tabIndex={0}>
						<NavLink
							to={"/blog"}
							className={({ isActive }) => (isActive ? "bg-amber-400" : "")}
						>
							blog
						</NavLink>
					</li>
					<li>
						<NavLink
							to={"/login"}
							className={({ isActive }) => (isActive ? "bg-amber-400" : "")}
						>
							Login
						</NavLink>
					</li>
					<li>
						<NavLink
							to={"/signup"}
							className={({ isActive }) => (isActive ? "bg-amber-400" : "")}
						>
							Registration
						</NavLink>
					</li>
				</ul>
			</div>
			<div className="navbar-end">
				{user ? (
					<div className="flex items-center justify-center">
						<div className="tooltip tooltip-bottom" data-tip={user.displayName}>
							<div className="w-10 rounded-full mx-1">
								<img src={user.photoURL} />
							</div>
						</div>
						<NavLink
							className="btn btn-outline btn-primary"
							to="/"
							onClick={() => logOut()}
						>
							Sign Out
						</NavLink>
					</div>
				) : (
					<NavLink className="btn btn-outline btn-error" to="/login">
						LogIn
					</NavLink>
				)}
			</div>
		</div>
	);
};

export default Hader;

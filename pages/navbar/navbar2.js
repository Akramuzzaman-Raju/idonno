//import React from "react";
import React, { useState, useEffect } from 'react';

export default function Navbar2() {
	const [name,setName] = useState();
	useEffect(() => {
		let name=localStorage.getItem('userName')
		// if(!name){
		//   window.location.href = '/user/login';
		// }
	  setName(name)
		})
		const logout=()=>{
			localStorage.clear()
			window.location.href = '/user/login';
		  }
	return (
		<div>
			<div className="navbar bg-gray-100">
				<div className="navbar-start">
					<div className="dropdown">
						<label tabIndex={0} className="btn btn-ghost lg:hidden">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</label>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
							<li>
								<a>Item 1</a>
							</li>
							<li>
								<a>Parent</a>
								<ul className="p-2">
									<li>
										<a>Submenu 1</a>
									</li>
									<li>
										<a>Submenu 2</a>
									</li>
								</ul>
							</li>
							<li>
								<a>Item 3</a>
							</li>
						</ul>
					</div>
					{/* <a className="btn btn-ghost normal-case text-xl">Study Abroad Consultation Center</a> */}
					<a href="" className="flex items-center">
					<img src="../Home.png" className="h-8 mr-3" alt="Logo" />
					<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Study Abroad</span>
					</a>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal px-1">
						<li>
							<a href="../schedule/deleteschedule" className="hover:bg-blue-500 hover:text-white font-mono text-base">Meetings</a>
						</li>
						<li>
							<a href="../scholarship/deletescholarship" className="hover:bg-blue-500 hover:text-white font-mono text-base">Scholarships</a>
						</li>
						<li tabIndex={0}>
							<details>
								<summary className="hover:bg-blue-500 hover:text-white font-mono text-base">Chat</summary>
								<ul className="p-2">
									<li>
										<a href="../Chat/email" className="hover:bg-blue-500 hover:text-white font-mono text-base">Mail</a>
									</li>
									<li>
										<a href="../Chat/message" className="hover:bg-blue-500 hover:text-white font-mono text-base">Message</a>
									</li>
								</ul>
							</details>
						</li>
						
					</ul>
				</div>
				<div className="navbar-end">
				<div className="px-2 font-bold font-serif antialiased hover:subpixel-antialiased"> {name}</div>
					<div className="dropdown dropdown-end">
						<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
							<div className="w-10 rounded-full bg-sky-500/75">
								{/* <div className="py-2  font-mono text-xl text-white justify-center">{name}</div> */}
								<img src="../Chat.jpeg" />
							</div>
						</label>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
							<li>
								<a href="../user/profile"className="justify-between hover:bg-blue-500 hover:text-white">
									Profile
									<span className="badge">New</span>
								</a>
							</li>
							<li>
								<a className=" hover:bg-blue-500 hover:text-white">Settings</a>
							</li>
							<li>
								<a onClick={logout} href="../user/logout"className="hover:bg-blue-500 hover:text-white">Logout</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
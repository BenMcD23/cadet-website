import { NavLink, useLocation  } from "react-router-dom"
import { useState } from 'react'; // Importing Modules

import "./NavbarStyles.css"

import nav_logo from "../../assets/317_logo.png"

function Navbar() {
    const location = useLocation().pathname;

    const aboutActive = location === '/adult-staff' ||  location === '/cadet-ncos';

    const resourcesActive = location === '/documents' ||  location === '/flight-points' ||  location === '/parents';

	return (
		<>
		
		<nav className="grid grid-cols-5 lg:grid-cols-11 navbar-container pt-1 pb-1.5">
				<NavLink to="/" className="absolute hidden bg-transparent lg:block m-auto lg:col-start-4"><img src={nav_logo} style={{height: "64px", width:"auto"}}/></NavLink>
					
				<NavLink to="/" className="lg:col-start-5 lg:rounded-l-3xl lg:py-4">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8 md:size-10 m-auto block lg:hidden">
					<path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
					</svg>
					<p className="text-center text-sm lg:text-xl font-semibold leading-none tracking-tight">Home</p>
				</NavLink>
				<NavLink to="/programme" className="lg:py-4">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8 md:size-10 m-auto block lg:hidden">
					<path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
					</svg>
					<p className="text-center text-sm lg:text-xl font-semibold leading-none tracking-tight">Programme</p>
				</NavLink>
				<div className={`relative dropdown lg:py-4 ${aboutActive ? 'active' : ''}`}>

					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8 md:size-10 m-auto block lg:hidden">
					<path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
					</svg>
					<p className="text-center text-sm lg:text-xl font-semibold leading-none tracking-tight">About</p>
					<div className="dropdown-content">
						<NavLink to="/adult-staff" className="text-center text-base lg:text-lg font-semibold leading-none tracking-tight">Adult Staff</NavLink>
						<NavLink to="/cadet-ncos" className="text-center text-base lg:text-lg font-semibold leading-none tracking-tight">Cadet NCO's</NavLink>
					</div>
				</div>
				<div className={`relative dropdown lg:py-4 ${resourcesActive ? 'active' : ''}`}>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8 md:size-10 m-auto block lg:hidden">
					<path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
					</svg>
					<p className="text-center text-sm lg:text-xl font-semibold leading-none tracking-tight">Resources</p>
					<div className="dropdown-content">
						<NavLink to="/documents" className="text-center text-base lg:text-lg font-semibold leading-none tracking-tight">Documents</NavLink>
						<NavLink to="/flight-points" className="text-center text-base lg:text-lg font-semibold leading-none tracking-tight">Flight Points</NavLink>
						<NavLink to="/parents" className="text-center text-base lg:text-lg font-semibold leading-none tracking-tight">Parents</NavLink>

					</div>
				</div>
				<NavLink to="/join" className="lg:rounded-r-3xl lg:py-4">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8 md:size-10 m-auto block lg:hidden">
					<path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
					</svg>
					<p className="text-center text-sm lg:text-xl font-semibold leading-none tracking-tight">Join</p>
				</NavLink>
			</nav>
		
		</>

	);
	}

export default Navbar;
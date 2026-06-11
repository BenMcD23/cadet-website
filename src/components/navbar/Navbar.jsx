import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import nav_logo from "../../assets/317_logo.png";

const aboutLinks = [
	{ to: "/adult-staff", label: "Adult Staff" },
	{ to: "/cadet-ncos", label: "Cadet NCO's" },
];

const resourceLinks = [
	{ to: "/documents", label: "Documents" },
	{ to: "/flight-points", label: "Flight Points" },
	{ to: "/parents", label: "Parents" },
];

const linkClasses = ({ isActive }) =>
	`block rounded-md px-3 py-2 text-sm font-semibold transition-colors ${
		isActive ? "text-accent" : "text-white hover:text-accent"
	}`;

function Dropdown({ label, links, active }) {
	return (
		<div className="group relative">
			<button
				type="button"
				className={`flex items-center gap-1 rounded-md px-3 py-2 text-sm font-semibold transition-colors ${
					active ? "text-accent" : "text-white group-hover:text-accent"
				}`}
			>
				{label}
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-3 transition-transform group-hover:rotate-180">
					<path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
				</svg>
			</button>
			<div className="invisible absolute left-1/2 top-full z-50 w-44 -translate-x-1/2 pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
				<div className="overflow-hidden rounded-lg bg-navy-light shadow-lg ring-1 ring-white/10">
					{links.map((l) => (
						<NavLink
							key={l.to}
							to={l.to}
							className={({ isActive }) =>
								`block px-4 py-2.5 text-sm font-semibold transition-colors ${
									isActive ? "text-accent" : "text-white hover:bg-navy hover:text-accent"
								}`
							}
						>
							{l.label}
						</NavLink>
					))}
				</div>
			</div>
		</div>
	);
}

function Navbar() {
	const location = useLocation();
	const [menuOpen, setMenuOpen] = useState(false);

	// close the mobile menu whenever the route changes
	useEffect(() => {
		setMenuOpen(false);
	}, [location.pathname]);

	const aboutActive = aboutLinks.some((l) => l.to === location.pathname);
	const resourcesActive = resourceLinks.some((l) => l.to === location.pathname);

	const mobileLink = ({ isActive }) =>
		`block rounded-md px-4 py-2.5 text-base font-semibold ${
			isActive ? "bg-navy-light text-accent" : "text-white hover:bg-navy-light"
		}`;

	return (
		<header className="fixed inset-x-0 top-0 z-50 bg-navy shadow-lg">
			<nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
				<Link to="/" className="flex min-w-0 items-center gap-3">
					<img src={nav_logo} alt="317 Squadron crest" className="h-11 w-auto shrink-0" />
					<span className="truncate text-sm font-bold leading-tight text-white sm:text-base">
						317 Failsworth &amp; Newton Heath<span className="hidden md:inline"> Squadron</span>
					</span>
				</Link>

				{/* desktop links */}
				<div className="hidden items-center gap-1 lg:flex">
					<NavLink to="/" className={linkClasses}>Home</NavLink>
					<Dropdown label="About" links={aboutLinks} active={aboutActive} />
					<NavLink to="/programme" className={linkClasses}>Programme</NavLink>
					<NavLink to="/news" className={linkClasses}>News</NavLink>
					<NavLink to="/gallery" className={linkClasses}>Gallery</NavLink>
					<Dropdown label="Resources" links={resourceLinks} active={resourcesActive} />
					<NavLink to="/contact" className={linkClasses}>Contact</NavLink>
					<NavLink to="/join" className="ml-2 rounded-lg bg-accent-dark px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-accent">
						Join Us
					</NavLink>
				</div>

				{/* mobile hamburger */}
				<button
					type="button"
					className="rounded-md p-2 text-white lg:hidden"
					aria-label={menuOpen ? "Close menu" : "Open menu"}
					aria-expanded={menuOpen}
					onClick={() => setMenuOpen((open) => !open)}
				>
					{menuOpen ? (
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-7">
							<path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
						</svg>
					) : (
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-7">
							<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
						</svg>
					)}
				</button>
			</nav>

			{/* mobile menu */}
			{menuOpen && (
				<div className="border-t border-white/10 bg-navy px-4 pb-4 pt-2 lg:hidden">
					<NavLink to="/" className={mobileLink}>Home</NavLink>
					<p className="px-4 pb-1 pt-3 text-xs font-bold uppercase tracking-wider text-accent">About</p>
					{aboutLinks.map((l) => (
						<NavLink key={l.to} to={l.to} className={mobileLink}>{l.label}</NavLink>
					))}
					<NavLink to="/programme" className={mobileLink}>Programme</NavLink>
					<NavLink to="/news" className={mobileLink}>News</NavLink>
					<NavLink to="/gallery" className={mobileLink}>Gallery</NavLink>
					<p className="px-4 pb-1 pt-3 text-xs font-bold uppercase tracking-wider text-accent">Resources</p>
					{resourceLinks.map((l) => (
						<NavLink key={l.to} to={l.to} className={mobileLink}>{l.label}</NavLink>
					))}
					<NavLink to="/contact" className={mobileLink}>Contact</NavLink>
					<NavLink to="/join" className="mt-3 block rounded-lg bg-accent-dark px-4 py-2.5 text-center text-base font-bold text-white">
						Join Us
					</NavLink>
				</div>
			)}
		</header>
	);
}

export default Navbar;

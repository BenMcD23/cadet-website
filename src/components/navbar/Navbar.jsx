import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import nav_logo from "../../assets/317_logo.png";

const aboutLinks = [
	{ to: "/adult-staff", label: "Adult Staff" },
	{ to: "/cadet-ncos", label: "Cadet NCO's" },
];

const resourceLinks = [
	{ to: "/flight-points", label: "Flight Points" },
	{ to: "/parents", label: "Parents" },
];

// Heroicons (outline) path data, keyed by nav item.
const icons = {
	home: "m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25",
	about: "M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z",
	programme: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5",
	newsletter: "M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z",
	resources: "M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z",
	join: "M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z",
};

function Icon({ d, className }) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
			<path strokeLinecap="round" strokeLinejoin="round" d={d} />
		</svg>
	);
}

const linkClasses = ({ isActive }) =>
	`block rounded-md px-3 py-2 text-sm font-semibold transition-colors ${
		isActive ? "text-accent" : "text-white hover:text-accent"
	}`;

// ── Desktop dropdown (hover) ──────────────────────────────────────────
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

// ── Mobile bottom-bar pieces ──────────────────────────────────────────
function BottomLink({ to, label, icon, accent }) {
	return (
		<NavLink
			to={to}
			className={({ isActive }) =>
				`flex flex-col items-center justify-center gap-1 py-2 transition-colors ${
					accent ? "text-accent" : isActive ? "text-accent" : "text-white/80"
				}`
			}
		>
			<Icon d={icon} className="size-6" />
			<span className="text-[10px] font-semibold leading-none">{label}</span>
		</NavLink>
	);
}

function BottomDropdown({ label, icon, links, active, open, onToggle, onNavigate }) {
	return (
		<div className="relative">
			<button
				type="button"
				onClick={onToggle}
				aria-expanded={open}
				className={`flex w-full flex-col items-center justify-center gap-1 py-2 transition-colors ${
					active || open ? "text-accent" : "text-white/80"
				}`}
			>
				<Icon d={icon} className="size-6" />
				<span className="text-[10px] font-semibold leading-none">{label}</span>
			</button>
			{open && (
				<div className="absolute bottom-full left-1/2 mb-2 w-40 -translate-x-1/2 overflow-hidden rounded-lg bg-navy-light shadow-lg ring-1 ring-white/10">
					{links.map((l) => (
						<NavLink
							key={l.to}
							to={l.to}
							onClick={onNavigate}
							className={({ isActive }) =>
								`block px-4 py-3 text-center text-sm font-semibold transition-colors ${
									isActive ? "text-accent" : "text-white hover:bg-navy hover:text-accent"
								}`
							}
						>
							{l.label}
						</NavLink>
					))}
				</div>
			)}
		</div>
	);
}

function Navbar() {
	const location = useLocation();
	const [openMenu, setOpenMenu] = useState(null); // 'about' | 'resources' | null

	// close any open bottom-bar dropdown whenever the route changes
	useEffect(() => {
		setOpenMenu(null);
	}, [location.pathname]);

	const aboutActive = aboutLinks.some((l) => l.to === location.pathname);
	const resourcesActive = resourceLinks.some((l) => l.to === location.pathname);

	const toggle = (menu) => setOpenMenu((cur) => (cur === menu ? null : menu));

	return (
		<>
			{/* top bar — full nav on desktop, branding only on mobile */}
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
						<NavLink to="/newsletter" className={linkClasses}>Newsletter</NavLink>
						<Dropdown label="Resources" links={resourceLinks} active={resourcesActive} />
						<NavLink to="/join" className="ml-2 rounded-lg bg-accent-dark px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-accent">
							Join Us
						</NavLink>
					</div>
				</nav>
			</header>

			{/* tap-away backdrop for an open bottom dropdown */}
			{openMenu && (
				<div className="fixed inset-0 z-40 lg:hidden" onClick={() => setOpenMenu(null)} />
			)}

			{/* mobile bottom nav */}
			<nav className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-6 border-t border-white/10 bg-navy pb-[env(safe-area-inset-bottom)] lg:hidden">
				<BottomLink to="/" label="Home" icon={icons.home} />
				<BottomDropdown
					label="About" icon={icons.about} links={aboutLinks}
					active={aboutActive} open={openMenu === "about"}
					onToggle={() => toggle("about")} onNavigate={() => setOpenMenu(null)}
				/>
				<BottomLink to="/programme" label="Programme" icon={icons.programme} />
				<BottomLink to="/newsletter" label="News" icon={icons.newsletter} />
				<BottomDropdown
					label="Resources" icon={icons.resources} links={resourceLinks}
					active={resourcesActive} open={openMenu === "resources"}
					onToggle={() => toggle("resources")} onNavigate={() => setOpenMenu(null)}
				/>
				<BottomLink to="/join" label="Join" icon={icons.join} accent />
			</nav>
		</>
	);
}

export default Navbar;

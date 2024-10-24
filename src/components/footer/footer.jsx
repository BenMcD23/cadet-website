import React from 'react';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Footer() {
	const [year, setYear] = useState(new Date().getFullYear());

	useEffect(() => {
		// Update the year when the component mounts
		setYear(new Date().getFullYear());
	  }, []);

    return (
        <footer className="text-center bg-dark-blue-footer ">
            <div className="mx-auto max-w-7.5xl py-4 text-center">
                {/* Grid container */}
                <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-white">             
					
                    {/* find out more section*/}
                    <div className="lg:text-center md:text-center sm:text-center">
                        <h6 className="mb-4 flex justify-center font-semibold uppercase">
                            Find Out More
                        </h6>
                        <p className="mb-2">
                            <a className="text-white" href="https://www.raf.mod.uk/aircadets/find-a-squadron/">Find Your Nearest Sqn</a>
                        </p>
                        <p className="mb-2">
							<a className="text-white" href="https://www.raf.mod.uk/aircadets/">Air Cadets Website</a>
                        </p>
                        <p className="mb-2">
                            <a className="text-white" href="https://www.facebook.com/aircadets">Air Cadets Facebook</a>
                        </p>
                        <p className="mb-2">
							<a className="text-white" href="https://x.com/aircadets">Air Cadets X</a>
                        </p>

                    </div>

                    {/* Useful links section */}
                    <div className="lg:text-center md:text-center sm:text-center">
                        
                        <h6 className="mb-4 flex justify-center font-semibold uppercase">
                            Useful links
                        </h6>
                        <p className="mb-2">
                            <a className="text-white" href="https://317atc.sumupstore.com/">317 Store</a>
                        </p>
                        <p className="mb-2">
							<a className="text-white" href="https://cadets.bader.mod.uk/">Cadet Portal</a>
                        </p>
                        <p className="mb-2">
                            <a className="text-white" href="https://learn.bader.mod.uk/login/index.php">RAFAC Learn</a>
                        </p>
                        <p className="mb-2">
							<a className="text-white" href="https://edofe.org/">EDofE</a>
                        </p>
						<p className="mb-2">
							<a className="text-white" href="https://www.strava.com/clubs/Aircadets?share_sig=FE4AFFAF1708790061&%24randomized_bundle_token=833422246677069094&channel=iOS&feature=club_share&type=0&duration=0&source=ios&data=eyJyZWRpcmVjdF9hZnRlcl9zaWdudXAiOiJ0cnVlIiwic2hhcmVfb2JqZWN0X2lkIjo2MzM4NDMsImludml0ZXJfZmlyc3RfbmFtZSI6IkdhcmV0aCIsIiRvZ19kZXNjcmlwdGlvbiI6IlJBRiBBaXIgQ2FkZXQgYXRobGV0ZXMgam9pbiB1cCBhbmQgc3RheSBhY3RpdmUhIiwic2hhcmVfc2lnIjoiRkU0QUZGQUYxNzA4NzkwMDYxIiwiJG9nX2ltYWdlX3VybCI6Imh0dHBzOi8vZGdhbHl3eXI4NjNodi5jbG91ZGZyb250Lm5ldC9waWN0dXJlcy9jbHVicy82MzM4NDMvMTQ0MzkxNDkvMi9tZWRpdW0uanBnIiwiJGlvc191cmwiOiJodHRwczovL3d3dy5zdHJhdmEuY29tL2NsdWJzL0FpcmNhZGV0cz9zaGFyZV9zaWc9RkU0QUZGQUYxNzA4NzkwMDYxIiwic2hhcmVyX2F0aGxldGVfaWQiOiI2ODI4Mjg4OSIsIiRkZXNrdG9wX3VybCI6Imh0dHBzOi8vd3d3LnN0cmF2YS5jb20vY2x1YnMvQWlyY2FkZXRzP3NoYXJlX3NpZz1GRTRBRkZBRjE3MDg3OTAwNjEiLCJpbnZpdGVyX2F2YXRhcl91cmwiOiJodHRwczovL2dyYXBoLmZhY2Vib29rLmNvbS8xMzc0ODIyNDExODM1MzEvcGljdHVyZT9oZWlnaHQ9MjU2JndpZHRoPTI1NiIsIiRhbmRyb2lkX3VybCI6Imh0dHBzOi8vd3d3LnN0cmF2YS5jb20vY2x1YnMvQWlyY2FkZXRzP3NoYXJlX3NpZz1GRTRBRkZBRjE3MDg3OTAwNjEiLCJzdHJhdmFfZGVlcGxpbmtfdXJsIjoic3RyYXZhOi8vY2x1YnMvNjMzODQzIiwiJG9nX3RpdGxlIjoiUkFGIEFpciBDYWRldHMifQ%3D%3D">Strava</a>
                        </p>
                    </div>
					
                    <div className="lg:text-center md:text-center sm:text-center">
                        <h6 className="mb-4 flex justify-center font-semibold uppercase">
                            Our Socials
                        </h6>

                        <div className="mb-2 flex items-center justify-center">
                            <a className="flex items-center text-white" href="https://www.facebook.com/317atc">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mr-3 h-5 w-5">
                                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                </svg>
                                Facebook
                            </a>
                        </div>

                        <div className="mb-2 flex items-center justify-center">
                            <a className="flex items-center text-white" href="https://www.instagram.com/317_atc/">
                                <svg xmlns="http://www.w3.org/2000/svg" className="mr-3 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                                Instagram
                            </a>
                        </div>

                        <div className="mb-2 flex items-center justify-center">
                            <a className="flex items-center text-white" href="https://x.com/317ATC">
                                <svg xmlns="http://www.w3.org/2000/svg" className="mr-3 h-5 w-5" fill="currentColor" viewBox="0 0 512 512">
                                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                                </svg>
                                X
                            </a>
                        </div>
                    </div>
                    {/* info section */}
                    <div className="lg:text-left md:text-center sm:text-center">
                        
                        <h6 className="mb-4 flex justify-center font-semibold uppercase">
                            INFO
                        </h6>
                        
                        <p className="mb-2 flex items-center justify-center lg:justify-start">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="mr-3 h-5 w-5"
                            >
                                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                            </svg>
                            317 Failsworth and Newton Heath Squadron<br/>
                            Failsworth Army Reserve Center<br/>
                            Oldham Road<br/>
                            Failsworth<br/>
                            M350BH<br/>
                        </p>
                        <p className="mb-2 flex items-center justify-center lg:justify-start">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="mr-3 h-5 w-5"
                            >
                                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                            </svg>

                            <div className="grid grid-cols-1">
                                adj.317@rafac.mod.gov.uk<br/>
                                <Link to="/contact" className="text-white">Contact Form</Link>
                            </div>
                        </p>
                        <p className="mb-2 flex items-center justify-center lg:justify-start">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="mr-3 h-5 w-5"
                            >
                                <path
                                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                                />
                            </svg>
                            0161 688 6705
                        </p>
                        <p className="mb-0 flex items-center justify-center lg:justify-start">
                            <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 24 24" 
                            fill="currentColor"
                            className="mr-3 h-5 w-5"
                            >
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clipRule="evenodd" />
                            </svg>

                            Wednesday: 19:00 - 21:30<br/>
                            Friday: 19:00 - 21:30
                        </p>
                        
                    </div>


                </div>
            </div>

            {/* Copyright section */}
            <div className="p-6 text-center bg-dark-blue-footer text-white">
				<span>{`© Crown Copyright ${year} 317 Squadron`}</span>

            </div>			
			        
		</footer>
    );
}

export default Footer;

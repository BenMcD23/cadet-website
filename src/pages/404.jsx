import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="section flex min-h-[60vh] flex-col items-center justify-center bg-surface text-center">
            <p className="text-7xl font-extrabold text-navy">404</p>
            <h1 className="mt-4 text-2xl font-bold text-navy">Oops! You seem to be lost.</h1>
            <p className="mt-2 text-ink/70">This page doesn&rsquo;t exist.</p>
            <Link to="/" className="btn-primary mt-8">Back to Home</Link>
        </div>
    )
}

export default NotFound;

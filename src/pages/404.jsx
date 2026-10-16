import { Link } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta";

function NotFound() {
    usePageMeta({ title: "Page not found" });

    return (
        <div className="section flex min-h-[60vh] flex-col items-center justify-center bg-surface text-center">
            <p className="font-display text-8xl font-bold leading-none text-navy">404</p>
            <h1 className="mt-4 text-3xl">Page not found</h1>
            <p className="mt-2 text-ink/70">That page doesn&rsquo;t exist or has moved.</p>
            <Link to="/" className="btn-primary mt-8">Back to the home page</Link>
        </div>
    )
}

export default NotFound;

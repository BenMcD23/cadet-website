import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import pageMeta, { defaultMeta } from "../../data/pageMeta";

// Keeps <title> and the meta description in sync with the current route.
const PageMeta = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        const path = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
        const meta = pageMeta[path] || defaultMeta;

        document.title = meta.title;
        document.querySelector('meta[name="description"]')?.setAttribute("content", meta.description);
    }, [pathname]);

    return null;
};

export default PageMeta;

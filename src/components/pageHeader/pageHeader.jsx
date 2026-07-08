function PageHeader({ title, intro, children }) {
    return (
        <div className="bg-navy py-10 text-center md:py-14">
            <div className="section-container">
                <h1 className="text-3xl font-extrabold text-white md:text-4xl">{title}</h1>
                <span className="mx-auto mt-3 block h-1 w-16 rounded-full bg-accent"></span>
                {intro && <p className="mx-auto mt-4 max-w-2xl text-white/85 md:text-lg">{intro}</p>}
                {children && <div className="mt-6">{children}</div>}
            </div>
        </div>
    );
}

export default PageHeader;

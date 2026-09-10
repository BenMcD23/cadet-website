function PageHeader({ title, eyebrow, intro, children }) {
    return (
        <div className="bg-navy py-10 text-white md:py-14">
            <div className="section-container">
                {eyebrow && <p className="eyebrow mb-2 text-accent">{eyebrow}</p>}
                <h1 className="text-4xl leading-none text-white md:text-5xl">{title}</h1>
                <span className="raf-flash-light mt-4"></span>
                {intro && <p className="mt-5 max-w-2xl leading-relaxed text-white/85 md:text-lg">{intro}</p>}
                {children && <div className="mt-6">{children}</div>}
            </div>
        </div>
    );
}

export default PageHeader;

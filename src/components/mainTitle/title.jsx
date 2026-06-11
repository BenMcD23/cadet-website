function Title({ title, light = false }) {

    return (
        <div className="text-center pt-4 lg:pt-5">
            <h2 className={`text-3xl md:text-4xl font-extrabold leading-tight ${light ? "text-white" : "text-navy"}`}>
                {title}
            </h2>
            <span className="mt-3 mb-4 mx-auto block h-1 w-16 rounded-full bg-accent"></span>
        </div>
    )
}

export default Title;

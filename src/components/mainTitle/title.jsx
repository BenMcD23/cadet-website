import "./titleStyles.css"

function Title(props) {

    return (
        <h1 className="title-text mb-4 text-4xl font-extrabold leading-none md:text-5xl dark:text-white pt-4 lg:pt-5">
            {props.title}
        </h1>
    )
};

export default Title;
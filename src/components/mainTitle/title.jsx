import "./titleStyles.css"

function Title(props) {

    // default to 5 if not given
    const padding = props.padding || 'pt-5';

    return (
        <h1 className={`title-text mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl dark:text-white ${padding}`}>
            {props.title}
        </h1>
    )
};

export default Title;
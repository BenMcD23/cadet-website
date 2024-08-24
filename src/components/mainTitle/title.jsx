import "./titleStyles.css"

function Title(props) {
    return (
    <h1 class="title-text mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-5xl dark:text-white pt-5">{props.title}</h1>
    )
};

export default Title;
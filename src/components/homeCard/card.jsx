
function Card(props) {
    return (
        <>
        <div className="card-container">
            <h1>{ props.title }</h1>
            <p>{ props.mainText }</p>
        </div>
        </>
    );
}

export default Card;
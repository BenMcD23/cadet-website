import "./cardStyles.css"


function Card(props) {

    return (
        <>
        <br></br>
        <div className="card-container" style={{paddingBottom: props.height + "px",
                                                width: props.width + "%",
        }}>
            <h1>{ props.title }</h1>
            <p>{ props.mainText }</p>
        </div>
        </>
    );
}

export default Card;
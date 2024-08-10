import PropTypes from "prop-types";
import "./cardStyles.css"


function Card(props) {

    return (
        <>
        <div className={`card-container ${props.secondClass}`}  style={{paddingBottom: `${props.height}px`,
                                                width: `${props.width}%`,
        }}>
            <h1>{ props.title }</h1>
            <p>{ props.mainText }</p>
        </div>
        </>
    );
}

Card.propTypes = {
    title: PropTypes.string,
    mainText: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number,
    secondClass: PropTypes.string,

};

Card.defaultProps = {
    title: "placeholder",
    mainText: "placeholder",
    height: 100,
    width: 80,
    secondClass: "default",
};

export default Card;
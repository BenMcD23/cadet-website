import PropTypes from "prop-types";
import "./clickStyles.css"

import Parade from "../../assets/parade.jpeg"


function clickCard(props) {

    return (
        <>
        <div>
            <div className="image">
                <img src={props.imageSrc}></img>
            </div>
            <div className="text">
                <h1 style={{borderLeft: "1px solid",}}>{ props.title }</h1>
                <p>{ props.mainText }</p>
                <h1>{ props.title }</h1>
                <p>{ props.mainText }</p>
                <h1>{ props.title }</h1>
                <p>{ props.mainText }</p>
                <h1>{ props.title }</h1>
                <p>{ props.mainText }</p>
            </div>
        </div>
        </>
    );
}

clickCard.propTypes = {
    title: PropTypes.string,
    mainText: PropTypes.string,
    secondClass: PropTypes.string,
    imageSrc: PropTypes.string,
};

clickCard.defaultProps = {
    title: "placeholder",
    mainText: "placeholder",
    secondClass: "default",
    imageSrc: Parade,
};

export default clickCard;
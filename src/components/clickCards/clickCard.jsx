import PropTypes from "prop-types";
import { useState } from "react";

import "./clickStyles.css"

import Parade from "../../assets/parade.jpeg"
import Drill from "../../assets/317_drill.png"
import sqn from "../../assets/sqn_photo.JPG"


function clickCard(props) {
    const images = [Parade, Drill, sqn]

    const [activeElement, setActiveElement] = useState(0);

    const updateActiveElement = (id) => {
        if (activeElement !== id) {
            setActiveElement(id);
        }
    }

    return (
        <>
        <div className="click-card-container">
            <div className="image">
                <img src={images[activeElement]}></img>
            </div>
            <div className="click-card-text-container">
                <div onClick={() => updateActiveElement(0)} className={`text ${activeElement === 0 ? "activeCard" : ""}`}>
                    <h1>{ props.title }</h1>
                    <p>{ props.mainText }</p>
                </div>
                <div onClick={() => updateActiveElement(1)} className={`text ${activeElement === 1 ? "activeCard" : ""}`}>
                    <h1>{ props.title }</h1>
                    <p>{ props.mainText }</p>
                </div>
                <div onClick={() => updateActiveElement(2)} className={`text ${activeElement === 2 ? "activeCard" : ""}`}>
                    <h1>{ props.title }</h1>
                    <p>{ props.mainText }</p>
                </div>
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
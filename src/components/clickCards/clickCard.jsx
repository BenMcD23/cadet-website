import PropTypes from "prop-types";
import { useState } from "react";

import "./clickStyles.css"

import Parade from "../../assets/parade.jpeg"


function clickCard({
    title1 = "placeholder1",
    mainText1 = "placeholder1",
    title2 = "placeholder2",
    mainText2 = "placeholder2",
    title3 = "placeholder3",
    mainText3 = "placeholder3",
    images = [Parade, Parade, Parade]})
    {

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
                    <h1>{ title1 }</h1>
                    <p>{ mainText1 }</p>
                </div>
                <div onClick={() => updateActiveElement(1)} className={`text ${activeElement === 1 ? "activeCard" : ""}`}>
                    <h1>{ title2 }</h1>
                    <p>{ mainText2 }</p>
                </div>
                <div onClick={() => updateActiveElement(2)} className={`text ${activeElement === 2 ? "activeCard" : ""}`}>
                    <h1>{ title3 }</h1>
                    <p>{ mainText3 }</p>
                </div>
            </div>
        </div>
        </>
    );
}

// Custom PropType validator to enforce array length of 3
// logs error to console
function imagesArrayLengthValidator(props, propName, componentName) {
    const images = props[propName];

    if (!Array.isArray(images)) {
        return new Error(
            `Invalid prop \`${propName}\` supplied to \`${componentName}\`. Expected an array.`
        );
    }

    if (images.length !== 3) {
        return new Error(
            `Invalid prop \`${propName}\` supplied to \`${componentName}\`. Expected array of length 3, but got ${images.length}.`
        );
    }

    return null; // Prop validation passed
}

clickCard.propTypes = {
    title1: PropTypes.string,
    mainText1: PropTypes.string,
    title2: PropTypes.string,
    mainText2: PropTypes.string,
    title3: PropTypes.string,
    mainText3: PropTypes.string,

    images: imagesArrayLengthValidator, // Using custom validator
};

export default clickCard;
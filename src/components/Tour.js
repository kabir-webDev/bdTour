import React from 'react'
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
export default function Tour({tour}) {
const {name,slug,images,price} = tour;
    
    return (
        <article className="tour">
            <div className="img-container">
                <img src ={images[0]} alt="single tour"/>
                <div className="price-top">
                    <h6>৳{price}</h6>
                    <p>3 day Trip</p>
                </div>
                <Link to={`/tours/${slug}`} className="btn-primary tour-link">
                    Features
                </Link>
            </div>
            <p className="tour-info">{name}</p>
        </article>
    );
}

Tour.propTypes={
    tour:PropTypes.shape({
        name:PropTypes.string.isRequired,
        slug:PropTypes.string.isRequired,
        images:PropTypes.arrayOf(PropTypes.string).isRequired,
        price:PropTypes.number.isRequired,
    })   
}

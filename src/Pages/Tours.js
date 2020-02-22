import React from 'react'
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import TourContainer from "../components/TourContainer";
export const Tours = () => {
    return(
        <>
        <Hero hero="toursHero">
            <Banner title="Tour Details">
                <Link to="/" className="btn-primary">
                    return home
                </Link>
            </Banner>
        </Hero>
        <TourContainer/>
        </>
    );
};

export default Tours;

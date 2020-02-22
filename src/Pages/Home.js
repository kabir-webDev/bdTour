import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import {Link} from 'react-router-dom';
import Services from '../components/Services'
import FeaturedTours from "../components/FeaturedTours";
import Booking from "../components/Booking";
import Contact from "../components/Contact";
export default function Home() {
    return (
         <>
        <Hero>
            <Banner title="Explore BanglaDesh" subtitle="The BEAUTY counts not months but moments.">
                <Link to="/tours" className="btn-primary">
                    Let's tour
                </Link>
            </Banner>
        </Hero>
        <Booking/>
        <Services/>
        <FeaturedTours/>
        <Contact/>
        </>
    );
}

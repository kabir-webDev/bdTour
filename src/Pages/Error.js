import React from 'react'
import Hero from "../components/Hero";
import Banner from "../components/Banner"
import {Link} from 'react-router-dom'

export const Error = () => {
    return( <Hero>
                <Banner title="404" subtitle="Not Found">
                    <Link to="/" className="btn-primary">
                         Return To Home
                    </Link>
                </Banner>
            </Hero>
    );
}

export default Error;
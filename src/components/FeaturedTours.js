import React, { Component } from 'react';
import { TourContext } from "../context";
import Loading from "./Loading";
import Tour from "./Tour";
import Title from "./Title";

export default class FeaturedTours extends Component {
    static contextType = TourContext;
    render() {
        let { loading, featuredTours: tours } = this.context;
        tours = tours.map(tour => {
        return <Tour key = {tour.id} tour={tour}/>    
        })

        return (
            <section className="featured-tours">
                <Title title="Our Tour Plan"/>
                <div className="featured-tours-center">
                {loading? <Loading/> : tours}
                </div>

            </section>

        );
    }
}


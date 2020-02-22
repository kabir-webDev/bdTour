import React from 'react';
import ToursFilter from "./TourFilter";
import ToursList from "./TourList";
import {withTourConsumer} from "../context";
import Loading from "./Loading";

function TourContainer({context}){
const {loading,sortedTours,tours} = context;
    if(loading){
          return <Loading/>;
            }
            
        return (
        <>
            <ToursFilter tours={tours}/>
            <ToursList tours={sortedTours}/>
        </>
        );
}


export default withTourConsumer(TourContainer);


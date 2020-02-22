import React from "react";
import {useContext} from "react";
import {TourContext} from "../context";
import Title from "../components/Title";

const getUnique = (items,value) => {
    return [...new Set(items.map(item => item[value]))]
}

export default function TourFilter({tours}) {
    const context = useContext(TourContext);
    const {
        handleChange,type,capacity,price,minPrice,maxPrice,minSize,maxSize,breakfast,pets
    } = context;

    let types = getUnique(tours,"type");

    types = ['all',...types];

    types = types.map((item,index)=>{
    return(<option value={item} key={index}>{item}</option>
        );
    });
let people = getUnique(tours,'capacity');
people = people.map((item,index)=>{
return <option key={index} value={item}>{item}</option>
})
    return(
        <section className="filter-container"> 
    <Title title="search your DREAM"/>
    <form className="filter-form">
        <div className="form-group">
            <label htmlFor="type">tour type</label>
            <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
                {types}
            </select>
        </div>

        <div className="form-group">
            <label htmlFor="capacity">Guests</label>
            <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>
                {people}
            </select>
        </div>

        
        <div className="form-group">
             <label htmlFor="price">Tour Price {price}TK</label>
                <input type="range" name="price" min={minPrice} max={maxPrice} id="price" value={price} onChange={handleChange} className="form-control"></input>
            
        </div>
    </form>
     </section>
    );
    
}



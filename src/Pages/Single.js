import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import Hero from"../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { TourContext } from "../context";
import StyledHero from "../components/StyledHero";

export class Single extends Component {
    constructor(props){
        super(props);
        this.state = {
            slug: this.props.match.params.slug, 
            defaultBcg
        };
    }
static contextType = TourContext;

    // componentDidMount(){}

    render() {
        const {getTour} = this.context;
        const tour = getTour(this.state.slug);     
        if(!tour){
            return(
            <div className="error">
                <h3>No such tour found</h3>
                <Link to ="/tours" className="btn-primary">
                    Back to tours
                </Link>
            </div>
            );
        }    
        const {name,description,capacity,size,price,extras,breakfast,pets,images}=tour;   

        const [mainImg, ...defaultImg] = images;

        return(
            <>
            <StyledHero img={images[0] || this.state.defaultBcg}>
            <Banner title={`${name} tour`}>
                <Link to='/tours' className='btn-primary'>Back to Tours
                </Link>
            </Banner>
        </StyledHero>
        <section className="single-tour">
            <div className="single-tour-images">
                {defaultImg.map((item,index)=>{
                  return  <img key={index} src={item} alt={name}/>
                })}
            </div>
            <div className="single-tour-info">
                <article className="desc">
                    <h3>Details</h3>
                    <p>{description}</p>
                </article>
                <article className="info">
                    <h3>info</h3>
            <h6>Total Cost : {price} TK</h6>
            <h6>
                Max People In A Group : {" "}
                {capacity > 1? `${capacity} people` : `${capacity} person`}
            </h6>
            <h6>{breakfast && "Free Food Included"}</h6>
                </article>
            </div>
        </section>
        <section className="tour-extras">
            <h6>Extras</h6>
            <ul className="extras">
                {extras.map((item,index)=>{
                    return <li key={index}> - {item}</li>;
                })}
            </ul>
        </section>
        </>
        ); 
    }
}
export default Single;


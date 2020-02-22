import React, { Component } from "react";
import { FaCoffee, FaHiking, FaBusAlt, FaClinicMedical } from "react-icons/fa";
import Title from "./Title";

export default class Services extends Component {
    state = {
        services:[
            {
                icon:<FaCoffee/>,
                title:"Food and Beverage",
                info:"You will get Quality Food and Beverage"
            },
            {
                icon:<FaHiking/>,
                title:"Safe Hiking",
                info:"Your Hiking Experience will be great"
            },
            {
                icon:<FaBusAlt/>,
                title:"Free Vehicles",
                info:"Journey will be top class"
            },
            {
                icon:<FaClinicMedical/>,
                title:"Necessary Things",
                info:"Other necessary things will be provided"
            }
        ]
    }
 
    render() {
        return (
            <section className="services">
               <Title title="services"/>
               <div className="services-center">
                   {this.state.services.map((item,index)=>{
                    return(
                        <article key={index} className="service">
                            <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    );
                })}
               </div>
            </section>
        );
    }
}

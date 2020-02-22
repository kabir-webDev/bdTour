import React, { Component } from 'react';
// import items from "./data";
import Client from "./Contentful";

const TourContext = React.createContext();

class TourProvider extends Component {
    state={
        tours: [],
        sortedTours: [],
        featuredTours: [],
        loading: true,
        type: "all",
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false
    };

getData = async () => {
    try{
        let response = await Client.getEntries({
            content_type: "bdTour"
        });
    let tours = this.formatData(response.items);
    let featuredTours = tours.filter(tour => tour.featured === true);
    let maxPrice=Math.max(...tours.map(item => item.price));
    let maxSize=Math.max(...tours.map(item => item.size));
    this.setState({
        tours,
        featuredTours,
        sortedTours:tours,
        loading:false,
        price:maxPrice,
        maxPrice,
        maxSize
    });
    } catch(error) {
        console.log(error);
    }
}

componentDidMount(){
    this.getData()
}

formatData(items){
    let tempItems = items.map(item => {

    let id = item.sys.id;
    let images = item.fields.images.map(image => image.fields.file.url);
    let tour = {...item.fields,images,id}
        return tour;
    });
    return tempItems;
};

    getTour = slug =>{
        let tempTours=[...this.state.tours];
        const tour = tempTours.find(tour => tour.slug===slug)
        return tour;
    };

handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ?target.checked : target.value;
    const name = event.target.name;
    this.setState(
        {
        [name]: value
    },
    this.filterTours);
};

    filterTours = () => {
        let{
            tours,type,capacity,price,minSize,minPrice,breakfast,pets
        } =this.state;
        let tempTours=[...tours];

        capacity = parseInt(capacity);
        price = parseInt(price);

        if(type !== 'all'){
            tempTours = tempTours.filter(tour=>tour.type === type);
        }

        if(capacity !==1 ){
            tempTours = tempTours.filter(tour=>tour.capacity === capacity);
        }

        tempTours=tempTours.filter(tour => tour.price <= price);

        this.setState({
            sortedTours:tempTours
        })
        
    };


    render() {
        return (
            <TourContext.Provider value={{...this.state,getTour:this.getTour,handleChange:this.handleChange}}>
                {this.props.children}
            </TourContext.Provider>
        );
    };
}

const TourConsumer = TourContext.Consumer;

export function withTourConsumer(Component){
    return function ConsumerWrapper(props){
        return <TourConsumer>
            {value => <Component {...props} context ={value}/>}
        </TourConsumer>
    }
}

export {TourProvider, TourConsumer, TourContext}; 

import React from "react";
import pet from '@frontendmasters/pet';
import Carousel from './Carousel';
import ErrorBoundary from "./ErrorBoundary"


class Details extends React.Component{

        // constructor(props){
        //         super(props)

        //         this.state = {
        //                 loading:true
        //         };
        // };

        state = {loading:true}

        componentWillMount(){
                pet.animal(this.props.id)
                        .then(({animal}) => {
                                this.setState({
                                        name: animal.name,
                                        animal:animal.type,
                                        location: `${animal.contact.address.city} , ${animal.contact.address.state}`,
                                        description: amimal.description,
                                        media:animal.photos,
                                        breed:animal.breed,
                                        loading:false
                                })
                        })
        }

   render() {
        if(this.state.loading){
                return <h1>loading ....</h1>
        }

        const { animal , breed , location , description , name , media} = this.state;

        return(
                <div className = "details">
                        <Carousel media= {media}/>
                        <div>
                                <h2>{name}</h2>
                                <h2>`${breed - animal - location}`</h2>
                                <h2>{description}</h2>
                                <button>Adopt Me !</button>
                        </div>
                </div>
        )
   }
}
export default  function DetailsWithErrorBoundary(props){
       <ErrorBoundary>
               <Details {...props}/>
       </ErrorBoundary>
}
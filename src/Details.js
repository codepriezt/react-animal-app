import React from "react";
import pet from '@frontendmasters/pet';
import {navigate} from '@reach/router';
import Modal from "./Modal";
import Carousel from './Carousel';
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";


class Details extends React.Component{

        // constructor(props){
        //         super(props)

        //         this.state = {
        //                 loading:true
        //         };
        // };

        state = {loading:true , showModal:false}

        componentWillMount(){
                pet.animal(this.props.id)
                        .then(({animal}) => {
                                this.setState({
                                        url:animal.url,
                                        name: animal.name,
                                        animal:animal.type,
                                        location: `${animal.contact.address.city} , ${animal.contact.address.state}`,
                                        description: amimal.description,
                                        media:animal.photos,
                                        breed:animal.breed,
                                        loading:false
                                });
                        } , console.Error)
        }
        toggleModal = () => this.setState({showModal: !this.state.showModal})
        adopt = () => navigate(this.state.url)

          //any function that return  markup is a react component

   render() {
        if(this.state.loading){
                return <h1>loading ....</h1>
        }

        const {
                 animal , 
                 breed , 
                 location , 
                 description , 
                 name , 
                 media , 
                  showModal} = this.state;

        return(
                <div className = "details">
                        <Carousel media= {media}/>
                        <div>
                                <h2>{name}</h2>
                                <h2>{`${breed - animal - location}`}</h2>

                                <ThemeContext.Consumer>
                                        {([theme]) => (
                                              <button  onClick={this.toggleModal} style={ {backgroundColor : theme} }> Adopt {name} </button>
                                        )}
                                </ThemeContext.Consumer>
                                
                                <h2>{description}</h2>

                                {showModal ? (
                                        <Modal>
                                                <div>
                                                <h1>Would you like to adopt {name}</h1>

                                                <idv className ="buttons">
                                                        <button onClick={this.adopt}>Yes</button>
                                                        <button onClick={this.toggleModal}>No , I am a monster </button>
                                                </idv>
                                                </div>

                                        </Modal>
                                ) :null} 

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
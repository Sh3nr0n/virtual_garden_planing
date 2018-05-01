import React from 'react';

//Import the image background for each column of a garden line
import ground from '../ico_img/icons8-vagues-filled-50.png';

//Create an image tag with the "ground" component (e.g. the image to render)
// const colBackground = <a className="modal-triger responsive-img" href="#addVegModal"><img src={this.state.caseLine} alt="groundImage" /></a>;

export class ImageLink extends React.Component {

    constructor(props) {
        //Use the method super() to execute the parent constructor and inherit properties and methods from the React.Component
        super(props);
        // Create a new property named state to fix the initial state of the object
        this.state = {
            image:ground
        };
    }

    updateColImage = (dataFromChild) => {

        this.setState({
            image:dataFromChild
        });

        console.log("updateColImage",this.sate.image);

        // Call the callback using this.props.updateColImage in the child and pass in the data as the argument.

        // this.props.updateColImage(img);

    }


        render(){
            return(
                <a className="modal-triger responsive-img" href="#addVegModal"><img src={this.state.image} alt="groundImage" /></a>

            );

        }
    
}

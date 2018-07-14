import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

//Import the image background for each column of a garden line
import ground from '../ico_img/icons8-vagues-filled-50.png';
import { withStyles } from '@material-ui/core/styles';

//Create an image tag with the "ground" component (e.g. the image to render)
// const colBackground = <a className="modal-triger responsive-img" href="#addVegModal"><img src={this.state.caseLine} alt="groundImage" /></a>;

const styles = {
    gridList: {
        //
      },
  };

class ImageLink extends React.Component {

    constructor(props) {
        //Use the method super() to execute the parent constructor and inherit properties and methods from the React.Component
        super(props);
        // Create a new property named state to fix the initial state of the object
        this.state = {
            src:ground,
            alt:'ground image'
        };
    }

    updateColImage = (dataFromChild) => {
        console.log('image src is : ', dataFromChild)
        this.setState({
            image:dataFromChild
        });
    }


        render(){

            const {id} = this.props
            
            return(
                <Fragment>
                    <img
                        id={id} 
                        src={this.state.src}
                        alt={this.state.alt} 
                        onClick={() => this.updateColImage(this.state.src)}
                    />
                </Fragment>
            );

        }
    
}

ImageLink.propTypes = {
    // id : PropTypes.key.isRequired,
    // src : PropTypes.string.isRequired,
    // alt : PropTypes.string.isRequired
  };

export default withStyles(styles) (ImageLink);
import React, {Fragment} from 'react';
// import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';


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
            // src:ground,
            alt:'ground image'
        };
    }

        render(){

            const { id, src } = this.props
            
            return(
                <Fragment>
                    <img
                        id={id} 
                        src={src}
                        alt={this.state.alt} 
                    />
                </Fragment>
            );

        }
    
}

// ImageLink.propTypes = {
    // id : PropTypes.key.isRequired,
    // src : PropTypes.string.isRequired,
    // alt : PropTypes.string.isRequired
//   };

export default withStyles(styles) (ImageLink);
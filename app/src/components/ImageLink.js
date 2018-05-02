import React from 'react';
import ground from '../ico_img/icons8-vagues-filled-50.png';


export class ImageLink extends React.Component {


     render(){
        return(
            <a className="modal-triger responsive-img" href="#addVegModal"><img src={this.props.VegImage} alt="groundImage" /></a>
        );
    }
}
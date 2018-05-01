import React from 'react';
import { Line } from './Line';
import { Container } from 'react-materialize';
import { VegetableNames } from './VegetableNames';
import { Modal } from 'react-materialize';

//Import the images used o display the vegetable icons
import tomatImg from '../ico_img/icons8-tomate-48.png';
import carotImg from '../ico_img/icons8-carotte-48.png';
import auberImg from '../ico_img/icons8-aubergine-48.png';
import radisImg from '../ico_img/icons8-radis-48.png';

import ground from '../ico_img/icons8-vagues-filled-50.png';


export class Home extends React.Component {

    // constructor(props){
    //     super(props);
    //     this.sate = {
    //         colImage:ground
    //     };
    // }


    // getVegetableImg = (img) => {

    //     this.setState({
    //         colImage:img

    //     });

    //     console.log("this.sate.colImage",this.sate.colImage);

    //     // Call the callback using this.props.updateColImage in the child and pass in the data as the argument.

    //     // this.props.updateColImage(img);

    // }

    //Define a calback in the parent which takes the data I need in as a parameter
    //Pass that callback as a prop to the child : updateColImage={this.getVegetableImg}

    getVegetableImg = (plop) => {
      console.log(plop);
    }
  


    render() {

        //Define the vegetable list needed for the Vegetable component
        //Pass it as a props in the VegetableNames component with vegList={vegetables}

        const vegetables = [{
            id: 1,
            name: 'tomate',
            img: tomatImg,
            src: '../ico_img/icons8-tomate-48.png'
        }, {
            id: 2,
            name: 'carotte',
            img: carotImg
        }, {
            id: 3,
            name: 'aubergine',
            img: auberImg
    
        }, {
            id: 4,
            name: 'radis',
            img: radisImg
    
        }]

        return (
            <div>
                <Container>
                    <Line />
                </Container>
                <Modal id='addVegModal' header='Sélectionnez un légume'>
                    <ul>
                        <VegetableNames vegList={vegetables} updateColImage={this.getVegetableImg}/>
                    </ul>
                </Modal>
            </div>
        );
    }
}
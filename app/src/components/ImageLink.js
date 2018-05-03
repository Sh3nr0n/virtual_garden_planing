import React from 'react';

import { Row, Col, Button, Modal } from 'react-materialize';

import ground from '../ico_img/icons8-vagues-filled-50.png';
import tomatImg from '../ico_img/icons8-tomate-48.png';
import carotImg from '../ico_img/icons8-carotte-48.png';
import auberImg from '../ico_img/icons8-aubergine-48.png';
import radisImg from '../ico_img/icons8-radis-48.png';


export class ImageLink extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            vegImage: ground,
        };
    }


    onChooseVegetable = (image) => {
        this.setState({
            vegImage: image
        })
        console.log("vegImage", this.state.vegImage);
        console.log("ID", this.props.identifier);

    }


    render() {

        // Vegetable objects:
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

        }];


        return (
            <div>
                <a className="modal-triger responsive-img" href={"#idModal" + this.props.identifier}><img src={this.state.vegImage} alt="groundImage" /></a>
                <Modal id={"idModal" + this.props.identifier}>
                    <ul>
                        {vegetables.map(((vegetable, i) =>
                            <li key={i}>
                                <img src={vegetable.img} alt={"Image_" + vegetable.id} name={vegetable.name} onClick={() => this.onChooseVegetable(vegetable.img)} /><span>{vegetable.name}</span>

                            </li>))
                        }

                    </ul>
                </Modal>
            </div>

        );
    }
}
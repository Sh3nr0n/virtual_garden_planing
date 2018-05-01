import React from 'react';
import {Line} from './Line';
import {Container} from 'react-materialize';
import {VegetableNames} from './VegetableNames';

//Import the image background for each column of a garden line
import ground from '../ico_img/icons8-vagues-filled-50.png';
import tomatImg from '../ico_img/icons8-tomate-48.png';
import carotImg from '../ico_img/icons8-carotte-48.png';
import auberImg from '../ico_img/icons8-aubergine-48.png';
import radisImg from '../ico_img/icons8-radis-48.png';


export class Home extends React.Component{
    render(){

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

        console.log("VegNameList : ",vegetables);


        return(
            <div>
            <Container>
                <Line/>
            </Container>
            <VegetableNames VegNameList={vegetables}/>
            </div>
        );
    }
}
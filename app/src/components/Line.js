//######################
//Done: Create a component containing one line
//Done: Create buttons to add or delete a new line in the garden
//Done: Add the "add" and "delete" buttons in the latest added line and make them dispear from the previous line
//To Do: Change the ground image
//To Do: Add animations + sounds around the garden area
//To Do: Maybe in another component : add a fruit/vegetable onClick on a line
//######################

import React from 'react';

//Import components row, columns and button from react-materialize
import { Row, Col, Button, Modal } from 'react-materialize';

//Import the image background for each column of a garden line
import ground from '../ico_img/icons8-vagues-filled-50.png';
import tomatImg from '../ico_img/icons8-tomate-48.png';
import carotImg from '../ico_img/icons8-carotte-48.png';
import auberImg from '../ico_img/icons8-aubergine-48.png';
import radisImg from '../ico_img/icons8-radis-48.png';



export class Line extends React.Component {
    //Use the constructor() method from React to create a specific property of the class
    constructor() {
        //Use the method super() to execute the parent constructor and inherit properties and methods from the React.Component
        super();
        // Create a new property named state to fix the initial state of the object
        this.state = {
            // Set up a property called "numLine" equal to 0
            numLine: 0
        };
    }

    //Create two methods to add and remove an element (e.g a line)

    onAddLine = () => {

        //Calls the setState method (from React) to set a new state (update) to "numLine" (or whatever to be changed in the object) whenever the "onAddLine" method is called

        // Each time the setState method is called React will re-render the UI with the new state
        this.setState({
            numLine: this.state.numLine + 1
        });
    }

    onRemoveLine = () => {
        this.setState({
            numLine: this.state.numLine - 1
        });
    }


    render() {

        //A const can't be declared twice in the same block nor change its value after it has been declared, however we can add an element to an array declared with "const" e.g. the []

        //Create an image tag with the "ground" component (e.g. the image to render)
        const colBackground = <a className="modal-triger responsive-img" href="#addVegModal"><img src={ground} alt="groundImage" /></a>;

        // onClick={() => this.getVegetables()}

        const vegetables = [{
            id:1,
            name:'tomate',
            img:tomatImg
        },{
            id:2,
            name:'carotte',
            img:carotImg
        },{
            id:3,
            name:'aubergine',
            img:auberImg

        },{
            id:4,
            name:'radis',
            img:radisImg

        }];

        const vegetableNames = vegetables.map(((vegetable,i) => 
        <li key={i}>
            <img src={vegetable.img} alt={"Image_"+vegetable.id} />{vegetable.name}
        </li>));

        console.log(vegetableNames);


        
        //##########################
        //A terme : Créer un nouveau composant de type modale pour afficher une liste de légumes
        //Done : créer un objet const legumes = []; entrer les valeurs test
        //Done : faire une fonction map pour afficher la liste des propositions dans la modale
        //To Do : Au click sur un légume, l'afficher dans une ligne

        //Test : Ajouter un event onclick + test console
        // onClick={() => console.log('click')}

        //##########################


        //Create a "newLines" variable containing an array of element to render
        const newLines = [];

        //React good practices : each property displayed must receive a key so that React is able to uniquely identify it, it enhances React performances (delete key for demo)

        //Add a state "key" to "numLine" to the "newLines" object 
        for (let i = 0; i < this.state.numLine; i += 1) {

            console.log(this.state.numLine);

            //Push a new element (object) into the "newLines" variable, pass a new key to each new element to render

            //For testing purpose : Add a js expression with {} to display the key property of the corresponding line

            newLines.push(
                <div key={i}>
                    <Row style={{backgroundColor:'brown'}}>
                    <Col s={2} m={2}>{colBackground}</Col>
                    <Col s={2} m={2}>{colBackground}</Col>
                    <Col s={2} m={2}>{colBackground}</Col>
                    <Col s={2} m={2}>{colBackground}</Col>
                    <Col s={2} m={2}>{colBackground}</Col>
                    <Col s={2} m={2}>{colBackground}</Col>
                    </Row>
                </div>
            );
        };

        console.log(newLines);

        //
        return (
            //Return the main element e.g. the first line of the garden with 2 buttons

            //Buttons : Add an event listener with onClick (JS) and link it to the the corresponding method ("onAddLine" and "onRemoveLine") that we call with arrow functions

            //Then display the newLines object into the next div with {newLines}
            <div>
                <br/>
                <div>
                    {newLines}
                    <Button className="btn-floating right btn-large waves-effect waves-light yellow" onClick={() => this.onRemoveLine()}><i className="material-icons">remove</i>
                    </Button>
                    <Button className="btn-floating right btn-large waves-effect waves-light red" onClick={() => this.onAddLine()}><i className="material-icons">add</i>
                    </Button>
                    <Modal
                        id='addVegModal'
                        header='Sélectionnez un légume'>
                        <ul>
                            {vegetableNames}
                        </ul>
                    </Modal>
                </div>
            </div>

        );
    }
}
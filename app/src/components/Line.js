//######################
//Done: Create a component containing one line
//Done: Create buttons to add or delete a new line in the garden
//Done: Add the "add" and "delete" buttons in the latest added line and make them dispear from the previous line
//Done :Show the "delete" button when there is at least one line in the view (this.state >0), use of a ternary operator "?"" to display the "removeButton" or to hide it 
//Done: Change the ground image
//Done : Create a vegetable test object
//Done : Add a <Modal/> component to call on click on a line
//Done : Use the map() method to loop through this object and display them on a modal element
//Done : On click on a vegetable from modal, add it into the lines
//To Do : On click on a vegetable from modal, add it into the specific line it was clicked from
//To Do: Refactorize this component into several components
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
    constructor(props) {
        //Use the method super() to execute the parent constructor and inherit properties and methods from the React.Component
        super(props);
        // Create a new property named state to fix the initial state of the object
        this.state = {
            // Set up a property called "numLine" equal to 0
            numLine: 0,
            caseLine:ground
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
    
    onAddVegetable =(name,id,img) =>{
        this.setState({
            caseLine:img
        });
        console.log('you clicked on a vegetable!'+name+ id +img);
        console.log('this.state.caseLine : ',this.state.caseLine);
        
    }

    render() {

        console.log("Hide delete button : ", this.state.numLine < 1);

        //A const can't be declared twice in the same block nor change its value after it has been declared, however we can add an element to an array declared with "const" e.g. the []

        //Create an image tag with the "ground" component (e.g. the image to render)
        const colBackground = <a className="modal-triger responsive-img" href="#addVegModal"><img src={this.state.caseLine} alt="groundImage" /></a>;


        //Delete button

        const removeButton = <Button className="btn-floating right btn-large waves-effect waves-light yellow" onClick={() => this.onRemoveLine()}><i className="material-icons">remove</i>
        </Button>

        //Create a "newLines" variable containing an array of element to render
        const newLines = [];

        //React good practices : each property displayed must receive a key so that React is able to uniquely identify it, it enhances React performances (delete key for demo)

        //Add a state "key" to "numLine" to the "newLines" object 
        for (let i = 0; i < this.state.numLine; i += 1) {

            console.log("ligne n°",this.state.numLine);

            //Push a new element (object) into the "newLines" variable, pass a new key to each new element to render

            //For testing purpose : Add a js expression with {} to display the key property of the corresponding line

            newLines.push(
                <div key={i}>
                    <Row style={{ backgroundColor: 'brown' }}>
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

        // console.log(newLines);

        //
        return (
            //Return the main element e.g. the first line of the garden with 2 buttons

            //Buttons : Add an event listener with onClick (JS) and link it to the the corresponding method ("onAddLine" and "onRemoveLine") that we call with arrow functions

            //Then display the newLines object into the next div with {newLines}
            <div>
                <br />
                <div>
                    {newLines}
                    {this.state.numLine >0 ? removeButton: null}
                    <Button className="btn-floating right btn-large waves-effect waves-light red" onClick={() => this.onAddLine()}><i className="material-icons">add</i>
                    </Button>
                </div>
            </div>

        );
    }
}
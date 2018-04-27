//######################
//Done: Create a component containing one line
//Done: Create buttons to add or delete a new line in the garden
//To Do: Add the "add" and "delete" buttons in the latest added line and make them dispear from the previous line
//Utiliser Array map pour remplacer la boucle for (recherches)
//To Do: Change the ground image
//To Do: Add animations + sounds around the garden area
//To Do: Maybe in another component : add a fruit/vegetable onClick on a line
//######################

import React from 'react';

//Import components row, columns and button from react-materialize
import { Row, Col, Button } from 'react-materialize';

//Import the image background for each column of a garden line
import ground from './ground.png';

//Create an image tag with the "ground" component
const colBackground = <img src={ground} alt="groundImage" />;

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

    //Create two methods to add and remove a child element

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

        //Create a "newLines" variable containing an array of element to render
        const newLines = [];
        
        //React good practices : each property displayed must receive a key so that React is able to uniquely identify it, it enhances React performances (delete key for demo)

        //Add a state "key" to "numLine" to the "newLines" object 
        for (let i = 0; i < this.state.numLine; i += 1) {
            
            //Push a new element (object) into the "newLines" variable, pass a new key to each new element to render

            //For testing purpose : Add a js expression with {} to display the number property of the corresponding child

            newLines.push(
                <div key={i}>
                    <Row>
                        <Col s={1} >{colBackground}</Col>
                        <Col s={1} >{colBackground}</Col>
                        <Col s={1} >{colBackground}</Col>
                        <Col s={1} >{colBackground}</Col>
                        <Col s={1} >{colBackground}</Col>
                        <Col s={1} >{colBackground}</Col>
                        <Col s={1} >{colBackground}</Col>
                        <Col s={1} >{colBackground}</Col>
                        <Col s={1} >{colBackground}</Col>
                        <Col s={1} >{colBackground}</Col>
                        <Col s={2} >{"Ligne n°" + i}</Col>
                    </Row>
                </div>
            );
        };

        //
        return (
            //Return the main element e.g. the first line of the garden with 2 buttons
          
            //Buttons : Add an event listener with onClick (JS) and link it to the the corresponding method ("onAddLine" and "onRemoveLine") that we call with arrow functions
         
            //Then display the child component into the next div with {newLines}
            <div>
                <Row>
                    <Col s={1} className='grid-example'>{colBackground}</Col>
                    <Col s={1}>{colBackground}</Col>
                    <Col s={1}>{colBackground}</Col>
                    <Col s={1}>{colBackground}</Col>
                    <Col s={1}>{colBackground}</Col>
                    <Col s={1}>{colBackground}</Col>
                    <Col s={1}>{colBackground}</Col>
                    <Col s={1}>{colBackground}</Col>
                    <Col s={1}>{colBackground}</Col>
                    <Col s={1}>{colBackground}</Col>
                    <Col s={2}>

                        <Button className="btn-floating btn-large waves-effect waves-light red" onClick={() => this.onAddLine()}><i className="material-icons">add</i>
                        </Button>
                        <Button className="btn-floating btn-large waves-effect waves-light yellow" onClick={() => this.onRemoveLine()}><i className="material-icons">remove</i>
                        </Button>
                    </Col>
                </Row>
                <div>
                    {newLines}
                </div>
            </div>

        );
    }
}
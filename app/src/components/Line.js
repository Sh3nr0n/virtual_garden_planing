//######################
//Done: Create a component containing one line
//Done: Create buttons to add or delete a new line in the garden
//To Do: Add the "add" and "delete" buttons in the latest added line and make them dispear from the previous line
//To Do: Change the ground image
//To Do: Add animations + sounds around the garden area
//To Do: Maybe in another component : add a fruit/vegetable onClick on a line
//######################

import React from 'react';

//Import components row, columns and button from react-materialize
import { Row, Col, Button } from 'react-materialize';

//Import the image background for each column of a garden line
import ground from './ground.png';
const colBackground = <img src={ground} alt="groundImage" />;

//Create a component and set it up as a property (by calling the "props" method) of the class it will be called in. Parentheses are optional for arrow functions "()=>"" when there's only one parameter name. As we return an expression the parentheses are not mandatory after the arrow function, however it helps the understanding of the code. 


//Buttons : Add an event listener with onClick (JS) and link it to the property (props) of its component e.g. the ParentComponent which posesses the "addChild" and "removeChild" proerties which are linked to the function to call on click



//For testing purpose : Add a js expression with {} to display the number property of the corresponding child


export class Line extends React.Component {
    // Initial state of the class/object, we set up a class/property called "numChildren" equal to 0
    constructor(props) {
        super();
        this.state = {
            numChildren: 0
        };
    }

    onAddChild = () => {
        //Calls the setState method (from React) to set a new state (update) to "numChildren" (or whatever to be changed in the object) whenever the "onAddChild" function is called. Each time the setState method is called React will re-render the UI with the new state
        this.setState({
            numChildren: this.state.numChildren + 1
        });
    }

    onRemoveChild = () => {
        this.setState({
            numChildren: this.state.numChildren - 1
        });
    }

    render() {

        //A const can't be declared twice in the same block nor change its value after it has been declared, however we can add an element to an array declared with "const" e.g. the []
        //Create a children variable
        const children = [];

        //Iterate the state numChildren of the current object 
        for (let i = 0; i < this.state.numChildren; i += 1) {
            //React good practices : each property displayed must receive a key so that React is able to uniquely identify it, it enhances React performances (delete key for demo)
            //Push an element to the children variable, pass a new key and number to each new element to render, the new element is created from a component declared outside of the class
            children.push(
                <div key={i} number={i}>
                    <Row>
                        <Col s={1} className='grid-example'>{colBackground}</Col>
                        <Col s={1} className='grid-example'>{colBackground}</Col>
                        <Col s={1} className='grid-example'>{colBackground}</Col>
                        <Col s={1} className='grid-example'>{colBackground}</Col>
                        <Col s={1} className='grid-example'>{colBackground}</Col>
                        <Col s={1} className='grid-example'>{colBackground}</Col>
                        <Col s={1} className='grid-example'>{colBackground}</Col>
                        <Col s={1} className='grid-example'>{colBackground}</Col>
                        <Col s={1} className='grid-example'>{colBackground}</Col>
                        <Col s={1} className='grid-example'>{colBackground}</Col>
                        <Col s={2} className='grid-example'>{"Ligne n°" + this.number}</Col>
                    </Row>
                </div>
            );
        };

        //
        return (
            //Return the parent element declared outside of the class and pass it 2 states, Pass 2 properties to the element (addChild and removeChild) and link them to the corresponding functions, this refers to the direct parent element e.g. "ParentComponent", then insert the child component into the parent component
            <div>
                <Row>
                    <Col s={1} className='grid-example'>{colBackground}</Col>
                    <Col s={1} className='grid-example'>{colBackground}</Col>
                    <Col s={1} className='grid-example'>{colBackground}</Col>
                    <Col s={1} className='grid-example'>{colBackground}</Col>
                    <Col s={1} className='grid-example'>{colBackground}</Col>
                    <Col s={1} className='grid-example'>{colBackground}</Col>
                    <Col s={1} className='grid-example'>{colBackground}</Col>
                    <Col s={1} className='grid-example'>{colBackground}</Col>
                    <Col s={1} className='grid-example'>{colBackground}</Col>
                    <Col s={1} className='grid-example'>{colBackground}</Col>
                    <Col s={2} className='grid-example'>

                        <Button className="btn-floating btn-large waves-effect waves-light red" onClick={() => this.onAddChild()}><i className="material-icons">add</i>
                        </Button>
                        <Button className="btn-floating btn-large waves-effect waves-light yellow" onClick={() => this.onRemoveChild()}><i className="material-icons">remove</i>
                        </Button>
                    </Col>
                </Row>
                <div>
                    {children}
                </div>
            </div>

        );
    }
}
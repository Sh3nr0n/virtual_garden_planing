import React from 'react';

import { Button } from 'react-materialize';

export class VegetableNames extends React.Component {

    constructor(props) {
        super();
        this.state = {
            VegImage: props.VegImage
        }
    }

    onChooseVegetable = (image) => {
        this.setState({
            VegImage: image
        })
        console.log(this.state);
    }

    onSelectVegetable = () => {
        this.props.selectVegetable(this.state.VegImage);
        console.log("this.state.VegImage",(this.state.VegImage));
        console.log("this.props.selectVegetable",this.props.selectVegetable);
        console.log("this.props.selectVegetable((this.state.VegImage))",this.props.selectVegetable(this.state.VegImage));

    }

    // onClick={()=> this.onSelectVegetable(vegetable.name,vegetable.id,vegetable.img)}
    //Call 2 fucntions onclick in ES6:
    // onClick={(e)=>{()=>this.function1();  ()=>this.function2()}}
    // onClick={()=>this.onChooseVegetable(vegetable.img)}

    render() {

        return (

            this.props.VegNameList.map(((vegetable, i) =>
                <li key={i}>
                    <img src={vegetable.img} alt={"Image_" + vegetable.id} name={vegetable.name} onClick={() => this.onChooseVegetable(vegetable.img)} /><span>{vegetable.name}</span>
                    <Button onClick={() => this.onSelectVegetable()}>Test Envoi props</Button>
                </li>))

        );
    }
}
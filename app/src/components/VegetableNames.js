import React from 'react';

//Import components row, columns and button from react-materialize
import { Modal } from 'react-materialize';



export class VegetableNames extends React.Component {
    
    render() {
                           
        return (

            <Modal id='addVegModal' header='Sélectionnez un légume'>
                <ul>
                VegNameList.map(((vegetable, i) =>
                <li key={i}>
                    <img src={vegetable.img} alt={"Image_" + vegetable.id} name={vegetable.name} onClick={()=> this.onAddVegetable(vegetable.name,vegetable.id,vegetable.img)}/>{vegetable.name}
                </li>))
                    
                </ul>
            </Modal>

        );
    }
}
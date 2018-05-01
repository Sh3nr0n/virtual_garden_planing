import React from 'react';

import ground from '../ico_img/icons8-vagues-filled-50.png';



export class VegetableNames extends React.Component {

    constructor(props){  
        super(props);
        this.sate = {
            colImage:null,
        };
    }


    onAddVegetable = (img) => {

        // this.setState({
        //     colImage:img,

        // });

        let etat = this.props.updateColImage(img)
        console.log("etat",etat);

        this.setState((prevState, props) => ({ colImage: etat}));

        console.log("this.sate.colImage",this.sate.colImage);
        console.log("this.setSate.colImage",this.setState({colImage:img}));


        // Call the callback using this.props.updateColImage in the child and pass in the data as the argument.

        // this.props.updateColImage(img);

    }





    // onAddVegetable = (img) => {

    //     // Call the callback using this.props.updateColImage in the child and pass in the data as the argument.

    //     this.props.updateColImage(img);
    //     console.log(this.props.updateColImage(img));
    

    //     // this.setState({
    //     //     image: img

    //     // });

    //     // // console.log('you clicked on a vegetable!'+name+ id +img);
    //     // console.log('this.state.image : ', this.state);
    // }




   
    


    render() {
        //Use the vegList props passed as a props from the Home component (parent component) with this.props.vegList
        //Display each element as a list with the map function (which is a faster "for loop" function)
        //Trigger onAddVegetable() with the data needed in the parent as an argument

        return (
            this.props.vegList.map(((vegetable, i) =>
                <li key={i}>
                    <img src={vegetable.img} alt={"Image_" + vegetable.id} name={vegetable.name} onClick={() => this.onAddVegetable(vegetable.img)} />{vegetable.name}
                </li>))
        );
    }
}









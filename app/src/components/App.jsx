//Import React library
import React, { Fragment } from "react";

//import the Header object from the Header.js component
import Header from "./Header";
import NewVegetableGarden from "./NewVegetableGarden";

//Import the images used to display the vegetable icons
import tomatImg from "../ico_img/icons8-tomate-48.png";
import carotImg from "../ico_img/icons8-carotte-48.png";
import auberImg from "../ico_img/icons8-aubergine-48.png";
import radisImg from "../ico_img/icons8-radis-48.png";

//Create a new class from the basic react component class (Component), "extends" allows to re-use this component and to modify it

// End of file : expoert allows to export the component and to re-use it somewhere else

class App extends React.Component {
  //Calls the render method inherited from the react Component class
  render() {
    //What should be returned by the render method e.g. here html tags (JSX)
    // Temporary array of vegetable objects, to be removed when backend exists
    const vegetables = [
      {
        id: 1,
        name: "tomate",
        img: tomatImg,
        src: "../ico_img/icons8-tomate-48.png"
      },
      {
        id: 2,
        name: "carotte",
        img: carotImg,
        src: "../ico_img/icons8-carotte-48.png"
      },
      {
        id: 3,
        name: "aubergine",
        img: auberImg,
        src: "../ico_img/icons8-aubergine-48.png"
      },
      {
        id: 4,
        name: "radis",
        img: radisImg,
        src: "../ico_img/icons8-radis-48.png"
      }
    ];

    return (
      //When calling xml in REACT always include it in <div></div> tags, here the Header and Home components are called
      <Fragment>
        <Header />
        <NewVegetableGarden vegetables={vegetables} />
      </Fragment>
    );
  }
}

export default App;

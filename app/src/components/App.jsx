//Import React library
import React, { Fragment } from "react";

//import the Header object from the Header.js component
import Header from "./Header";
import VegetableGarden from "./Containers/VegetableGarden";

//Import the images used to display the vegetable icons
import tomatImg from "../images/VegIcons/icons8-tomate-48.png";
import carotImg from "../images/VegIcons/icons8-carotte-48.png";
import auberImg from "../images/VegIcons/icons8-aubergine-48.png";
import radisImg from "../images/VegIcons/icons8-radis-48.png";

//Create a new class from the basic react component class (Component), "extends" allows to re-use this component and to modify it

// End of file : expoert allows to export the component and to re-use it somewhere else

class App extends React.Component {
  //Calls the render method inherited from the react Component class
  render() {
    //What should be returned by the render method e.g. here html tags (JSX)
    // Temporary array of vegetable objects, to be removed when backend exists
    //  replace src property in "VegSelectionDialog" with correct file url when app goes online
    const vegetables = [
      {
        id: 1,
        name: "tomate",
        img: tomatImg,
      },
      {
        id: 2,
        name: "carotte",
        img: carotImg,
      },
      {
        id: 3,
        name: "aubergine",
        img: auberImg,
      },
      {
        id: 4,
        name: "radis",
        img: radisImg,
      }
    ];

    return (
      //When calling xml in REACT always include it in <div></div> tags, here the Header and Home components are called
      <Fragment>
        <Header />
        <VegetableGarden vegetables={vegetables} />
      </Fragment>
    );
  }
}

export default App;

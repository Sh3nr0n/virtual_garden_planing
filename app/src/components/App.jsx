//Import React library
import React, { Fragment } from 'react';

//import the Header object from the Header.js component
import Header from './Header';
import NewVegetableGarden from './NewVegetableGarden';

//Create a new class from the basic react component class (Component), "extends" allows to re-use this component and to modify it

// End of file : expoert allows to export the component and to re-use it somewhere else

class App extends React.Component {
  //Calls the render method inherited from the react Component class
  render() {
    //What should be returned by the render method e.g. here html tags (JSX)
    return (
      //When calling xml in REACT always include it in <div></div> tags, here the Header and Home components are called
      <Fragment>
      <Header/>
      <NewVegetableGarden/>
      </Fragment >
    );
  }
}

export default App;
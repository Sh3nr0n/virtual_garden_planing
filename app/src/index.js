//Import eact library
import React from 'react';
//Import the virtual Dom
import ReactDOM from 'react-dom';
// Import the css file
import './index.css';
//Import the component containin the app
import App from './components/App';
//Allows to use the local cache from the client
import registerServiceWorker from './registerServiceWorker';
//Render the app in the index.html file, using the node e.g. <div> tag with id="root"
ReactDOM.render(<App />, document.getElementById('root'));
//Launch the registerServiceWorker
registerServiceWorker();

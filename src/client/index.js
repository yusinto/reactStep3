// Import the render method from react-dom so we can mount our
// component onto an html element
import React from 'react';
import {render} from 'react-dom';
import App from '../common/component/appComponent';

// This is the entry point into our react app on the client side. Again
// we use jsx to create our ReactElement and mount it onto a div called
// reactDiv on the html template.
render(<App />, document.getElementById('reactDiv'));
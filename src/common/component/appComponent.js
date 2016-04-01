/*
 Import react's default module and assign it to a variable named React.
 Additionally we also import the Component module and assign it to a
 variable named Component.
 */
import React, {Component} from 'react';

/*
 Subclass React.Component and implement the render method. This method
 must return a single child element. A react component at minimum must
 implement the render method. Also set this class as the default export
 of this file so we can import it in other files.
 */
export default class App extends Component {
    render() {
        return (
            // Nooo this looks like inline html! Are we back in the land
            // of classic asp/php? Short answer is no we are not. See
            // below for details.
            <div>
                <h1>Hello world in React!</h1>
                <p>
                    The time now is { (new Date()).toLocaleString() }
                </p>
            </div>
        );
    }
}
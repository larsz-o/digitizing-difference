import React, { Component } from 'react'; 
import '../../App.css';

class Header extends Component {
   render() {
       return(
        <div className="App">
        <header className="App-header">
            <h1>Digitizing Difference</h1>
            <nav>
                <a href="/">Home</a>
                <a href="/#/404">Nothing Here</a>
            </nav>
        </header>
      </div>
       )
    }
}
export default Header; 
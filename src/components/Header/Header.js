import React, { Component } from 'react'; 
import '../../App.css';

class Header extends Component {
   render() {
       return(
        <div className="App">
        <header className="App-header">
            <h1>Digitizing Difference</h1>
        </header>
        <div>
            {/* TODO: for mobile, display a drop down menu instead */}
            <nav className="nav-bar">
                <a href="/">Home</a>
                <a href="/#/stories">Data Stories</a>
                <a href="/#/praxis">Critical Trans Data Praxis</a>
                <a href="/#/resources">Resources</a>
            </nav>
            </div>
      </div>
       )
    }
}
export default Header; 
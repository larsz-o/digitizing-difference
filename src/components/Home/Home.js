import React, { Component } from 'react'; 
import '../../App.css';
import Quiz from '../Quiz/Quiz'; 

class Home extends Component {
   render() {
       return(
        <div>
            <img src={require('../../images/cloud.jpg')} alt="cloud" className="center" width="100%"/>
            <h2 className="jumbo center">What can data really tell us about a person?</h2>
            <Quiz/>
      </div>
       )
    }
}
export default Home; 
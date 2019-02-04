import React, { Component } from 'react'; 
import { Form } from 'react-bootstrap'; 

class Quiz extends Component {
    constructor(props){
        super(props); 
        this.state = {
            question1: 0,
            question2: 0,
        }
    }
    handleChangeFor = (event, question) => {
        let value = parseInt(event.target.value); 
        this.setState({
            ...this.state, 
            [question]: value,
        })
    }
    render(){
        let score = this.state.question1 + this.state.question2; 
        return(
        <div className="quiz-div">
        {JSON.stringify(this.state)}
            {/* create a quiz that is yes/no questions addressing bias in data collection/analysis related to identity  */}
          <h3>Question 1:</h3>
          <p>You are a landlord who owns a property that is currently vacant. You're looking for a tenant to move in as soon as possible. A couple looked at the place yesterday. They seemed nice, so you asked them to fill out an application and consent to a background and credit check. Everything seems pretty normal, except that you notice that one of the applicants, Tim, is listed as 'also known as' Elena on his background check. What do you do?</p>
            <Form.Check type="radio" name="question1" onChange={(event)=>this.handleChangeFor(event, 'question1')} value={0} label="This seems suspicious. I better call Tim to see what this is about. I remember having another tenant with a criminal record that used multiple names."/>
            <Form.Check type="radio" name="question1" onChange={(event)=>this.handleChangeFor(event, 'question1')} value={-1} label="Reject the application and continue showing the apartment to other interested tenants."/>
            <Form.Check type="radio" name="question1" onChange={(event)=>this.handleChangeFor(event, 'question1')} value={1} label="I don't see any reason to bring this up. I'll offer them the apartment. Everything else checks out fine."/>
        <h3>Question 2: </h3>
        <p>You are an insurance claims assesser for a major health insurance company. You just received a request for a prostate exam procedure billed to a female patient. What do you do?</p>
        <Form.Check type="radio" name="question2" onChange={(event)=>this.handleChangeFor(event, 'question2')} value={-1} label="Deny the claim and issue a warning to the attending physician. I've been told that all billable procedures must adhere to our internal standards. This claim looks like medical fraud to me."/>
            <Form.Check type="radio" name="question2" onChange={(event)=>this.handleChangeFor(event, 'question2')} value={0} label="Ask my supervisor for help. This does not seem right and I do not want to get fired."/>
            <Form.Check type="radio" name="question2" onChange={(event)=>this.handleChangeFor(event, 'question2')} value={1} label="Call the doctor's office to obtain more information about the claim. This could be a legitimate procedure but I don't have enough evidence yet to approve it without risking my job."/>
            <h3>Score: {score}</h3>
        </div>
        ); 
    }
}
export default Quiz; 
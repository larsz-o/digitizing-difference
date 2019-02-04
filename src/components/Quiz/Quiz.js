import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question1: 0,
            question2: 0,
            question3: 0,
            showScore: false
        }
    }
    handleChangeFor = (event, question) => {
        let value = parseInt(event.target.value);
        this.setState({
            ...this.state,
            [question]: value,
        })
    }
    hideScore = () => {
        this.setState({
            ...this.state, 
            showScore: false
        })
    }
    showScore = () => {
        this.setState({
            ...this.state, 
            showScore: true
        })
    }
    render() {
        let score = this.state.question1 + this.state.question2 + this.state.question3;
        return (
            <div className="quiz-div">
                {JSON.stringify(this.state)}
                {/* create a quiz that is yes/no questions addressing bias in data collection/analysis related to identity  */}
                <div>
                    <h3>Question 1:</h3>
                    <p>You are a landlord who owns a property that is currently vacant. You're looking for a tenant to move in as soon as possible. A couple looked at the place yesterday. They seemed nice, so you asked them to fill out an application and consent to a background and credit check. Everything seems pretty normal, except that you notice that one of the applicants, Tim, is listed as 'also known as' Elena on his background check. What do you do?</p>
                    <Form.Check type="radio" name="question1" onChange={(event) => this.handleChangeFor(event, 'question1')} value={0} label="This seems suspicious. I better call Tim to see what this is about. I remember having another tenant with a criminal record that used multiple names." />
                    <Form.Check type="radio" name="question1" onChange={(event) => this.handleChangeFor(event, 'question1')} value={-1} label="Reject the application and continue showing the apartment to other interested tenants." />
                    <Form.Check type="radio" name="question1" onChange={(event) => this.handleChangeFor(event, 'question1')} value={1} label="I don't see any reason to bring this up. I'll offer them the apartment. Everything else checks out fine." />
                </div>
                <div>
                    <h3>Question 2: </h3>
                    <p>You are an insurance claims assesser for a major health insurance company. You just received a request for a prostate exam procedure billed to a female patient. What do you do?</p>
                    <Form.Check type="radio" name="question2" onChange={(event) => this.handleChangeFor(event, 'question2')} value={-1} label="Deny the claim and issue a warning to the attending physician. I've been told that all billable procedures must adhere to our internal standards. This claim looks like medical fraud to me." />
                    <Form.Check type="radio" name="question2" onChange={(event) => this.handleChangeFor(event, 'question2')} value={0} label="Ask my supervisor for help. This does not seem right and I do not want to get fired." />
                    <Form.Check type="radio" name="question2" onChange={(event) => this.handleChangeFor(event, 'question2')} value={1} label="Call the doctor's office to obtain more information about the claim. This could be a legitimate procedure as I know some trans women have prostates, but I don't have enough evidence yet to approve it without risking my job." />
                </div>
                <div>
                    <h3>Question 3:</h3>
                    <p>One Saturday night, you are working the door at a concert venue in a neighborhood frequented by college-aged kids. Your boss warns you not to let anyone in without ID. Last week, your coworker got fired after he got caught serving underaged people at the bar and your boss got fined thousands of dollars. A group of young looking people hand over their IDs and they're all weird. None of the pictures look like the people standing in front of you. They have shorter hair, more piercings, and you're not even sure one of the IDs is real: it has an X instead of an M or F for sex. What do you do?</p>
                    <Form.Check type="radio" name="question3" onChange={(event) => this.handleChangeFor(event, 'question3')} value={1} label="Take a closer look at the group. They seem like they've changed their looks since they got their IDs issued, and you remember hearing a story about the X sex marker in the news. Seems kind of cool. You let them in without hassle." />
                    <Form.Check type="radio" name="question3" onChange={(event) => this.handleChangeFor(event, 'question3')} value={0} label="You're not getting fired for this tonight. Call your manager over and make the group wait outside until he arrives. Meanwhile, others in line are beginning to stare and harass the kids." />
                    <Form.Check type="radio" name="question3" onChange={(event) => this.handleChangeFor(event, 'question3')} value={-1} label="Accuse them of forging the IDs and ban them from the venue." />
                </div>
                {!this.state.showScore && <button onClick={this.showScore}>Submit</button>}
                {this.state.showScore && <button onClick={this.hideScore}>Reset</button>}
                {this.state.showScore && <div><h3>Score: {score}</h3> <br/> {this.state.message} </div>}
            </div>
        );
    }
}
export default Quiz; 
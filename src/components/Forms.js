import React, { Component } from 'react'

export class Forms extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: "",
             age: null,
        }
    }
    mySubmithand=(event)=>{
        event.preventDefault();
        let age = this.state.age;
        if(!Number(age)){
            alert("You have to enter number!")
        }
    
    }
    myChangeHand=(event)=>{
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val})
    }
    render() {
        return (
            <div>
                <form onSubmit={this.mySubmithand}>
                    <h1>Hello {this.state.username} and {this.state.age}</h1>
                    <p>Enter your username: </p>
                    <input type="text" name="username" onChange={this.myChangeHand}/>
                    <p>Enter your age! </p>
                    <input type='text' name='age' onChange={this.myChangeHand}/>
                    <input type='submit'/>
                </form>
            </div>
        )
    }
}

export default Forms

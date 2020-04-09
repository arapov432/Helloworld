import React, { Component } from "react"
 class Message extends Component{
constructor(){
    super()
        this.state = {
            messages: "Welcome to React la la la"
        }
    
}
changeMessage(){
    this.setState({
       messages:"Thank you for subscribing!"
    })
}
    render(){
    return(
        <div><h1>{this.state.messages}</h1>
        <button onClick={()=>this.changeMessage()}>Subscribe</button>
        
    </div>
    )
}
 }
 export default Message;
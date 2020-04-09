import React, { Component } from 'react'

export class Unmount extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
             display: true,
             color: "yellow",
        }
    }
componentDidMount(){
    setTimeout(()=>{this.setState({color: "White"})}, 1000);
}
getSnapshotBeforeUpdate(prevProps, prevState){
    return document.getElementById("div2").innerHTML = "Before update color was " +prevState.color;
    }
componentDidUpdate(){
    document.getElementById("div1").innerHTML = "Color is changed to " +this.state.color;
}

    delettheheader=()=>{
        this.setState({display:false})
    }
    shoot =(a)=>{
      alert(a);
      
    }
    render() {
        let headers;
        if(this.state.display){
            headers = <Head/>
        }
        return (
            <div>
                {headers}
                <button type="button" onClick={this.delettheheader}>Delete header</button>
        <h1>This color is {this.state.color} </h1>
        <h2 id="div1"></h2>

        <h2 id="div2"></h2>
        <button onClick={(b)=>this.shoot("Welcome to React hell")}>Welcome alert</button>
            </div>
        )
    }
}
class Head extends React.Component{
    render(){
        return (
            <div>
            <p>The EventEmitter Object
            You can assign event handlers to your own events with the EventEmitter object.
            
            In the example below we have created a function that will be
             executed when a "scream" event is fired.</p>
         
        </div>
        )
    }
}

export default Unmount


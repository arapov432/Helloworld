import React, { Component } from 'react'

class Cars extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             brnd: "Ford",
             model: "Mustang",
             color: "Red",
             year: 1991
        }
    }
    changeColor = ()=>{
        this.setState({color:"Blue"});
    }
    componentDidMount(){
        setTimeout(()=>{this.setState({color:"black"})},10000)
    }
  
    render() {
        return (
            <div>
                <h1>I'm the {this.props.brand} car.</h1>
                <h1>I'm the {this.props.mdl.model} car.</h1>
                <h2>This cars brand is {this.state.brnd} and {this.state.color} 
                <br/>color and model is {this.state.model} and year {this.state.year}</h2>
                <button onClick={this.changeColor}>Change Color</button>
        
            </div>
          
        )
    }
}
class Garage extends React.Component{
    constructor(props) {
        super(props)
    
        this.state = {
            
             color: "Red",
         
        }
    }
   
    
    render(){
        var carinfo = { name:"Mercedez-Benz", model:"Mercedes S300" };
        return (
        <div> 
            <h1>Who live is in my Garage? </h1>
            <Cars brand="Toyota Camry" mdl={carinfo}/>
           
    
        </div>  
        )
    }
}

export default Garage

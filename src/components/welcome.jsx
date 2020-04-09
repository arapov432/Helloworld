import React, { Component } from "react"
 class Welcome extends Component{
     constructor(props) {
     super(props)   
    
        this.state = {
            fname: "Azamat",
          lname: "Arapov",
        age: 30
     }
     }
     displayData(){
       return (" First Name: " +this.state.fname +" Last Name: " +this.state.lname +" Age: " +this.state.age)
        
    } 
   
     
render(){
    return(
        <div>
        <h1>Welcome {this.props.name} a.k.a {this.props.heroName}</h1>
        {this.props.children} 
        {this.displayData()}
    </div>
    )
}
 }
 export default Welcome;
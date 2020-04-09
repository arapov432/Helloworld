import React, { Component } from 'react'

 class Counter extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              count: 0
         }
     }
     increment(){
       if(this.state.count<10){
         this.setState({count: this.state.count + 1},()=>{console.log('Callback value', this.state.count)})
       }
     }
     decrem(){
         if(this.state.count>0){
         this.setState({count: this.state.count-1},()=>{console.log('Callback value', this.state.count)})
     }}
    render() {
        return (
            <div><div>Count - {this.state.count}</div>
                <button onClick={()=> this.increment()}>Increment</button>
                <button onClick={()=>this.decrem()}>Decrement</button>
            </div>
        )
    }
}

export default Counter

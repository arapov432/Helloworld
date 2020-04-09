import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Welcome from './components/welcome';
import './App.css';
import Greet from './components/greet'
import Message from './components/message'
import Counter from './components/counter';
import Garage from './components/cars'

import Unmount from './components/Unmount';
import Forms from './components/Forms';
function App() {
  return (
    
    <div className="container-fluid">
        <div className="jumbotron">
                <h1>IWirless Solution with 11/7 services.</h1>
            </div>


<div className="container">
<Router>
<ul className="nax nav-pills" role="tablist">

      <li className="nav-item">
        <Link  to="/" className="nav-link active" data-toggle="pill">Home</Link>
      </li>
      <li className="nav-item">
      <Link to="/garage" className="nav-link" data-toggle="pill">Garage</Link>
   </li>
   <li className="nav-item">
    <Link to="/menu2" className="nav-link" data-toggle="pill">Menu2</Link>
    </li>
 </ul>

<Switch className="tab-content">


  <Route exact path="/" className="container tab-pane active">
  
      <Message />
      <Greet />
     <Unmount />

    </Route>
    <Route path="/garage"  className="container tab-pane fade">

    
     <Garage />
  
    </Route>
    <Route path="/menu2"  className="container tab-pane fade">
    <Counter />
      <Forms />
      <Welcome name='Cholpon'><p>This is props children</p></Welcome>

    </Route>
 
  </Switch>
  </Router>
  </div>
   </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Navbar } from './Navbar';
import { Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { Hireatechnician } from './Hireatechnician';
import Common from './Common';
import { FindWork } from './FindWork';
import Customer from './Customer';
import Register from './Register';
import Profile from './Profile';
import { Profiles } from './Profiles';
import Television from './Television';
import Smartphone from './Smartphone';
import Fan from './Fan'
import Refrigirator from './Refrigrator';
import Airconditioner from './Airconditioner'
import Microwave from './Microwave';
import Other from './Other';
import Mixer from './Mixer';


function App() {
  return (
      <div className="body">
        <Navbar />
        
        <Switch>
      <Route exact path = "/" component={Home}/>  
      <Route exact path = "/hireatechnician" component={Hireatechnician}/>  
      <Route exact path = "/findwork" component={FindWork}/>  
      <Route exact path = "/customer" component={Customer}/> 
      <Route exact path = "/register" component={Register}/>   
      <Route exact path = "/television" component={Television}/> 
      <Route exact path ="/smartphone"   component={Smartphone}/>
      <Route exact path ="/Fan"   component={Fan}/>
      <Route exact path ="/Refrigirator"   component={Refrigirator}/>
      <Route exact path ="/Airconditioner"   component={Airconditioner}/>
      <Route exact path ="/Microwave"   component={Microwave}/>
      <Route exact path ="/Mixer"   component={Mixer}/>
      <Route exact path ="/Other"   component={Other}/>
    </Switch>

    </div>


  );
}

export default App;

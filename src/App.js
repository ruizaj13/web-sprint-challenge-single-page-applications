import React from "react";
import {Route, Switch} from 'react-router-dom';
import Nav from './components/Nav'
import Home from './components/Home'
import PizzaForm from './components/PizzaForm'
import './App.css'


const App = () => {
  return (
    <div className='App'>
      <Nav/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/PizzaForm' component={PizzaForm}/>
      </Switch>
    </div>
  );
};
export default App;

import React from 'react';
import './App.css';
import Home from './Pages/Home';
import Single from './Pages/Single';
import { Tours } from './Pages/Tours';
import { Error } from './Pages/Error';
import {Route,Switch} from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './components/Contact';


function App() {
  return (
      <>
      <Navbar/> 
      <Switch>

      <Route exact path="/" component={Home}/>
      <Route exact path="/tours/"component={Tours}/>
      <Route exact path="/tours/:slug" component={Single}/>
      <Route component={Error}/>
      </Switch>
      <Footer/>
    </>
  );
}

export default App;

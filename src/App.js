import React from "react";
import { Route, Switch ,Redirect} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Contact from './Contact';
import Service from './Service';
import Home from './Home';
import hero from '../src/image/hero.svg';
import hero1 from '../src/image/hero1.png';
const aname = "Welcome to About Page";
const hname = "Grow your business With";
const hbtn = 'Get Started';
const abtn = 'Contact Now';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={() => <Home name={hname} src={hero} btn={hbtn}/>}/>
        <Route exact path='/Service' component={() =><Service />}/>
        <Route exact path='/About' component={() => <Home name={aname} src={hero1} btn={abtn}/>}/>
        <Route exact path='/Contact' component={() => <Contact />} />    
        <Redirect to="/"/>
      </Switch>                       
    </>
  );
}
export default App;

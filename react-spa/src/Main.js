import React, {Component} from "react";
import {Route, NavLink, HasRouter, HashRouter} from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Stuff from "./Stuff";
class Main extends Component{
    render(){
        return(
            <HashRouter>
                <div>
                    
                    <h1>Simple SPA</h1>
                    <ul className="header">
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink to="/stuff">Stuff</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                    <div className="content">
                        <Route exact path="/" component={Home}/>
                        <Route path="/stuff" component={Stuff}/>
                        <Route path="/contact" component={Contact}/>

                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;
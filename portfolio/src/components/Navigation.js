import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import React from 'react'

export default function Navigation() {
    return (
        <Router>
      <div>
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/products">About</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>

          <Route path="/About">
            {/* <Items/> */}
            <About />
          </Route>

          <Route path="/contact">
           
            <Contacts />
          </Route>
        </Switch>
      </div>
    </Router>
    )
}

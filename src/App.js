import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import './App.css'

export default function App(){
    return(
        <Router>
        <Navbar />
        <Hero />
        <Card />
        <Footer />
            <Switch>
                <Route path='#Card' />
               


            </Switch>
        </Router>

    )
}



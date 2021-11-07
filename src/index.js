import React from "react";
import  ReactDOM  from "react-dom";
import App from './App'

export default function renderApp(){

    ReactDOM.render(<App />, document.getElementById('root'));
}
renderApp()

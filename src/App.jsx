import React from "react";
import "./App.css";
import Nav from "./Nav";
import Navbar from "./components/Navbar";
import img from './assets/Product teardown-bro.svg'

const App = () => {
  return (
    <div className="app">
      <div className="items">
        <Nav />
        <div className="container">
          <div className="text-items">
            <h1>Did you Know?</h1>
            <p>
              67% of the phone <br />
              number's submitted <br />
              through online <br />
              froms are invalid <br />
            </p>
            {/* <button className="btn">Check mobile number validity</button> */}
            <Navbar />
          </div>
          
          <img className="item-logo" src={img}/>
      
        </div>
      </div>
      <h1 className="big-text">PHONE NUMBER</h1>
    </div>
  );
};

export default App;

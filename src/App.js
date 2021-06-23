import React, { useState } from "react";
import "./App.css";
import Homepage from "./Components/Home_Page/Home";
import { BrowserRouter, Route,Switch } from "react-router-dom";

import diploma from "./Components/DeploamPage/DeploamPage"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
              <Route exact path='/' component={Homepage} />
              <Route path='/diploma' component={diploma} />
          </Switch>
      </BrowserRouter>
     
  
     <></> 
    </div>
  );
}

export default App;

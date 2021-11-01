import { BrowserRouter , Route } from "react-router-dom";
import React, { Component} from "react";


import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contact/Contact";
import Index from "./components/Index";

class App  extends Component {
render(){

  return (
  
    <BrowserRouter>

        <Navbar />
         <Route exact path="/" component={Index} />
         <Route path="/contact"  component={Contact} />
     </BrowserRouter>
  );
}
}
export default App;

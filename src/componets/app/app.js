import { Component } from "react";

import Footer from "../footer/footer";
import HeaderContent from "../header-content/header-content";
import About from "../about/about";

import "./app.sass"

class App extends Component{


render() {
    return (
        <div className="app">
            <HeaderContent/>
            <About/>
            <Footer/>
        </div> 
    )
}

}

export default App;
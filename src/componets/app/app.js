import { Component } from "react";

// Static Coffee Images
import Solimo from "../../images/coffee-items/Solimo.png"
import Presto from "../../images/coffee-items/Presto.png"
import Aromi from "../../images/coffee-items/Aromi.png"


import Footer from "../footer/footer";
import HeaderContent from "../header-content/header-content";
import About from "../about/about";
import Bestsellers from "../bestsellers/bestsellers"
import Filter from "../filter/filter";

import "./app.sass"

class App extends Component{
    constructor(props) {
        super(props)
        this.state = {
            all: [
                {name: "AROMISTICO Coffee 1 kg", 
                img: Aromi, price: 10, bestseller: false,id: 4},
                {name: "AROMISTICO Coffee 1 kg", 
                img: Aromi, price: 10, bestseller: false,id: 5},
                {name: "AROMISTICO Coffee 1 kg", 
                img: Aromi, price: 10, bestseller: false,id: 6},
                {name: "Solimo Coffee Beans 2 kg", 
                img: Solimo, 
                price: 10, bestseller: true,id: 1},
                {name: "Presto Coffee Beans 1 kg", 
                img: Presto, price: 10, bestseller: true,id: 2},
                {name: "AROMISTICO Coffee 1 kg", 
                img: Aromi, price: 10, bestseller: true,id: 3}
            ],
            currentPage: null
        }
    }

    changePage = ( (currentPage) => {
        this.setState({currentPage})
    })

    render() {
        const {all, currentPage} = this.state
        return (
            <div className="app">
                <Filter/>
                <HeaderContent 
                currentPage={currentPage}
                changePage={this.changePage}/>
                <About currentPage={currentPage}/>
                <Bestsellers all={all} />
                <Footer/>
            </div> 
        )
    }

}

export default App;
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
import CoffeeList from "../coffee-list/coffee-list";


import "./app.sass"

class App extends Component{
    constructor(props) {
        super(props)
        this.state = {
            all: [
                {name: "AROMISTICO Coffee 1 kg", 
                img: Aromi, price: "10$", bestseller: false,kenya:true,id: 4},
                {name: "AROMISTICO Coffee 1 kg", 
                img: Aromi, price: "10$", bestseller: false,id: 7},
                {name: "AROMISTICO Coffee 1 kg", 
                img: Aromi, price: "10$", bestseller: false,kenya:true,id: 8},
                {name: "AROMISTICO Coffee 1 kg", 
                img: Aromi, price: "10$", bestseller: false,brazil: true,id: 9},
                {name: "AROMISTICO Coffee 1 kg", 
                img: Aromi, price: "10$", bestseller: false,id: 10},
                {name: "AROMISTICO Coffee 1 kg", 
                img: Aromi, price: "10$", bestseller: false,id: 11},
                {name: "AROMISTICO Coffee 1 kg", 
                img: Aromi, price: "10$", bestseller: false,columbia: true,id: 5},
                {name: "AROMISTICO Coffee 1 kg", 
                img: Aromi, price: "10$", bestseller: false,id: 6},
                {name: "Solimo Coffee Beans 2 kg", 
                img: Solimo, 
                price: "10$", bestseller: true,id: 1},
                {name: "Presto Coffee Beans 1 kg", 
                img: Presto, price: "10$", bestseller: true,id: 2},
                {name: "AROMISTICO Coffee 1 kg", 
                img: Aromi, price: "10$", bestseller: true,id: 3}
            ],
            currentPage: null,
            filter: null,
            filterByName: ""
        }
    }

    filterVisibleData = (filter) => {
        const {all} = this.state
        switch(filter) {
            case "brazil":
                console.log([...all].filter((item) => {
                    return item.brazil
                }))
                return [...all].filter((item) => {
                    return item.brazil
                })
            case "kenya":
                return [...all].filter((item) => {
                    return item.kenya
                })
            case "columbia":
                return [...all].filter((item) => {
                    return item.columbia
                })
            default:
                return all.slice(0, 6)

        }
        
    }
    changePage = ( (currentPage) => {
        this.setState({currentPage})
    })
    onFilterClick = (filter) => {
        this.setState({filter})
    }
    render() {
        const {all, currentPage} = this.state
        const visibleData = this.filterVisibleData(this.state.filter)
        const elements = () => {
            switch(currentPage) {
                case "ourCoffee":
                    return(
                        <CoffeeList 
                        onFilterClick={this.onFilterClick}
                        visibleData ={visibleData}/>
                    )
                case "forYourPleasure":
                    return(
                        null
                    )
                default:
                    return(
                        <Bestsellers all={all} />
                    )
            }
        }
        return (
            <div className="app">
                <HeaderContent 
                currentPage={currentPage}
                changePage={this.changePage}/>
                <About currentPage={currentPage}/>
                {elements()}
                <Footer/>
            </div> 
        )
    }

}

export default App;
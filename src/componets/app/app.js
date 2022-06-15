import { Component } from "react";

// Static Coffee Images
import solimo from "../../images/coffee-items/Solimo.png"
import presto from "../../images/coffee-items/Presto.png"
import aromi from "../../images/coffee-items/Aromi.png"
import blaserCafe from "../../images/coffee-items/new-coffee-items/blasercafe.png"
import dallmayr from "../../images/coffee-items/new-coffee-items/dallmayr.png"
import foundation from "../../images/coffee-items/new-coffee-items/foundation.png"
import foundationAprilNero from "../../images/coffee-items/new-coffee-items/foundation-april-nero.png"
import lOR from "../../images/coffee-items/new-coffee-items/l-o-r.png"
import lavazza from "../../images/coffee-items/new-coffee-items/lavazza.png"
import lavazzaCrema from "../../images/coffee-items/new-coffee-items/lavazza-crema.png"
import lavazzaOro from "../../images/coffee-items/new-coffee-items/lavazza-oro.png"
import royalLife from "../../images/coffee-items/new-coffee-items/royal-life.png"
import wildKopi from "../../images/coffee-items/new-coffee-items/wild-kopi.png"


import Footer from "../footer/footer";
import HeaderContent from "../header-content/header-content";
import About from "../about/about";
import Bestsellers from "../bestsellers/bestsellers"
import CoffeeList from "../coffee-list/coffee-list";


import "./app.sass"

class App extends Component{
    constructor(props) {
        super(props)
        this.state = {
            all: [
                {name: "AROMISTICO Coffee 1 kg", 
                img: aromi, price: "10$", 
                bestseller: false, brazil: true, id: 1},
                {name: "Solimo Coffee Beans 2 kg", 
                img: solimo, price: "10$", 
                bestseller: false, kenya: true, id: 2},
                {name: "Presto Coffee Beans 1 kg", 
                img: presto, price: "10$", 
                bestseller: false, brazil: true, id: 3},

                {name: "Blasercafe Coffee Beans 1 kg", 
                img: blaserCafe, price: "24$", 
                bestseller: true, brazil: true, id: 4},
                {name: "Dallmayr Coffee  1 kg", 
                img: dallmayr, price: "17$", 
                bestseller: true, columbia: true, id: 5},
                {name: "Foundation Ethiopia Coffee Beans 1 kg", 
                img: foundation, price: "30$", 
                bestseller: true, columbia: true, id: 6},
                {name: "Foundation April Nero Coffee Beans 1 kg", 
                img: foundationAprilNero, price: "35$", 
                bestseller: false, brazil: true, id: 7},
                {name: "L'o'R Coffee Beans 1 kg", 
                img: lOR, price: "42$", 
                bestseller: true, brazil: true, id: 8},
                {name: "Lavazza Oro Coffee Beans 1 kg", 
                img: lavazza, price: "15$", 
                bestseller: false, brazil: true, id: 9},
                {name: "Lavazza Crema Coffee 1 kg", 
                img: lavazzaCrema, price: "16$", 
                bestseller: false, kenya: true, id: 10},
                {name: "Lavazza Oro Coffee Beans 1 kg", 
                img: lavazzaOro, price: "14$", 
                bestseller: false, columbia: true, id: 11},
                {name: "Royal LIfe Coffee Beans 250 g", 
                img: royalLife, price: "2$", 
                bestseller: false, kenya: true, id: 12},
                {name: "Wild Coffee Beans 1 kg", 
                img: wildKopi, price: "275$", 
                bestseller: false, brazil: true, id: 13},
                
            ],
            currentPage: null,
            filter: null,
            filterByName: "",
            filterCurrentPage: 6 
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
                return all.slice()

        }
        
    }
    filterVisibleDataByName = (array, value) => {
        if (value.length === 0 ) {
            return array
        }
        return array.filter((item) => {
            console.log(item.name)
            return item.name.toLowerCase().includes(value.toLowerCase())
        })
    }
    changePage = ( (currentPage) => {
        this.setState({currentPage})
    })
    onFilterClick = (filter) => {
        this.setState({filter})
    }
    onFilterChange = (filterByName) => {
        this.setState({filterByName})
    }
    onFilterChangePage = (value) => {
        if ((this.state.filterCurrentPage + +value) > 0) {
            this.setState(({filterCurrentPage}) => ({
                filterCurrentPage: filterCurrentPage + +value
            }) )
        } 
    }
    render() {
        const {all, currentPage,filter, filterByName, filterCurrentPage} = this.state
        const visibleData = this.filterVisibleDataByName(this.filterVisibleData(filter), filterByName).slice(filterCurrentPage-6, filterCurrentPage)
        const elements = () => {
            switch(currentPage) {
                case "ourCoffee":
                    return(
                        <CoffeeList
                        onFilterChangePage={this.onFilterChangePage}
                        onFilterChange={this.onFilterChange} 
                        onFilterClick={this.onFilterClick}
                        visibleData ={visibleData}/>
                    )
                case "forYourPleasure":
                    return(
                        <CoffeeList
                        onFilterChangePage={this.onFilterChangePage}
                        onFilterChange={this.onFilterChange} 
                        onFilterClick={this.onFilterClick}
                        visibleData ={visibleData}/>
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
import { Component } from "react";
import Filter from "../filter/filter";
import CoffeeItem from "../coffee-item/coffee-item";


import "./coffee-list.sass"

class CoffeeList extends Component{
    
    
    render() {

        const {visibleData, onFilterClick, onFilterChangePage} = this.props
        const elements = visibleData.map((item) => {
            const {id, ...itemProps} = item
            return (
                <CoffeeItem
                    key={id}
                    {...itemProps}/>
            )
        })
        return(
            <div className="coffee-list">
                <Filter
                    onFilterChange={this.props.onFilterChange}
                    onFilterClick={onFilterClick}/>
                <div className="coffee-list__items-wrapper">
                    {elements}
                </div>
                <div className="coffee-list__nav-buttons">
                    <button value={-6}
                    onClick={(e) => onFilterChangePage(e.target.value)}
                    className="coffee-list__button" >Prev</button>
                    <button value={6}
                    onClick={(e) => onFilterChangePage(e.target.value)}
                    className="coffee-list__button" >Next</button>
                </div>
            </div>
        )
    }
}

export default CoffeeList;
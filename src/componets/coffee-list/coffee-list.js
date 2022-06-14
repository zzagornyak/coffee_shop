import { Component } from "react";
import Filter from "../filter/filter";
import CoffeeItem from "../coffee-item/coffee-item";


import "./coffee-list.sass"

class CoffeeList extends Component{
    
    
    render() {

        const {visibleData, onFilterClick} = this.props
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
                    onFilterClick={onFilterClick}/>
                <div className="coffee-list__items-wrapper">
                    {elements}
                </div>
            </div>
        )
    }
}

export default CoffeeList;
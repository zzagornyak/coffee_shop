import { Component } from "react";
import "./bestsellers.sass"


import CoffeeItem from "../coffee-item/coffee-item"


class Bestsellers extends Component{
    constructor(props) {
        super(props)
        
    }

    render() {
        const {all} = this.props
        const elements = all.map((item) => {
            const {id, bestseller, ...itemProps} = item
            if (bestseller) {
                return (
                    <CoffeeItem
                    key={id}
                    {...itemProps}
                    />
                )
            }
        })
        return(
            <div className="bestsellers">
                <div className="bestsellers__content">
                    <h1>Our best</h1>
                    <div className="bestsellers__items">
                        {elements}
                    </div>
                </div>
            </div>
        )
    }
}

export default Bestsellers


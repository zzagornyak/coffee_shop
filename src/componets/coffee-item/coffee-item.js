import { Component } from "react";

import "./coffee-item.sass";


class CoffeeItem extends Component{
    constructor(props) {
        super(props)
    }

    render() {
        const {img, name, price} = this.props
        return(
            
            <div className="coffee-item">
                <div className="coffee-item__wrapper">
                    <img className="coffee-item__img" src={img} alt="" />
                    <span className="coffee-item__name">{name}</span>
                    <span className="coffee-item__price" >{price}</span>
                </div>
            </div>
        )
    }
}

export default CoffeeItem;
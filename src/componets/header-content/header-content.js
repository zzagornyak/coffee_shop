import { Component } from "react"

import BeanInsert from "../bean-insert/bean-insert";
import Header from "../header/header"


import "./header-content.sass"


class HeaderContent extends Component{

    render() {
        const {onHeaderClick, toCoffeeShop} = this.props
        // Клик на coffee shop
        const headerContentCN = toCoffeeShop ? "header-content header-content__to-coffee-shop" : "header-content"
        const hide = toCoffeeShop ? "hide" : null
        const unhide = toCoffeeShop ? "header-content__tittle header-content__tittle_to-coffee" : "hide"
        // 
        return(
            <div className={headerContentCN}>
                <Header onHeaderClick={onHeaderClick}/>
                <div className={unhide}>
                    <span>
                        Our Coffee
                    </span>
                </div>
                <div className={hide}>
                    <div className="header-content__tittle-wrapper">
                        <h1 className="header-content__tittle">
                            Everything You Love About Coffee
                        </h1>

                        <BeanInsert filter/>
                        
                    </div>
                    <div className="header-content__span-wrapper">
                        <span className="header-content__tittle-span">
                            We makes every day full of energy and taste
                        </span>
                        <span className="header-content__tittle-span">
                            Want to try our beans?
                        </span>
                    </div>
                    <div className="header-content__tittle-button">
                        <button className="header-content__button-text">More</button>
                    </div>
                </div>


                
            </div>
        )
    }
}

export default HeaderContent;
import { Component } from "react"

import BeanInsert from "../bean-insert/bean-insert";
import Header from "../header/header"


import "./header-content.sass"


class HeaderContent extends Component{


    render() {
        return(
            <div className="header-content">
                <Header/>
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
        )
    }
}

export default HeaderContent;
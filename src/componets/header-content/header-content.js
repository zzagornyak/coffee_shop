import { Component } from "react"

import BeanInsert from "../bean-insert/bean-insert";
import Header from "../header/header"


import "./header-content.sass"


class HeaderContent extends Component{

    render() {
        const {changePage, currentPage} = this.props

        const elements = () => {
            switch (currentPage) {
                case "ourCoffee":
                    return (
                        <div className="header-content header-content__to-our-coffee">
                            <Header changePage={changePage}/>
                            <div className="header-content__tittle header-content__tittle_to-our-coffee">
                                <span>
                                    Our Coffee
                                </span>
                            </div>
                            <div className="hide">
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
                case "forYourPleasure":
                    return null
                default:
                    return (
                        <div className="header-content">
                            <Header changePage={changePage}/>
                            <div className="hide">
                                <span>
                                    Our Coffee
                                </span>
                            </div>
                            <div className="">
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
        return(
            elements()
        )
    }
}

export default HeaderContent;
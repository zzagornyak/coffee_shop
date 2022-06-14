import { Component } from "react";

// import logo from "../../images/coffee_bean_image/coffeeBean.svg"
import "./header.sass"


class Header extends Component{


    render() {
        return (
            <header className="header">
                <nav className="header__navigation">
                    <ul className="header__list">
                        <li data-page="coffeeHouse"
                            className="header__item"
                            onClick={(e) => {this.props.changePage(e.currentTarget.getAttribute("data-page"))}}>
                            <span >Coffee house</span>
                        </li>
                        <li data-page="ourCoffee"
                            className="header__item" 
                            onClick={(e) => {this.props.changePage(e.currentTarget.getAttribute("data-page"))}}>
                                Our coffee</li>
                        <li data-page="forYourPleasure"
                            className="header__item" 
                            onClick={(e) => {this.props.changePage(e.currentTarget.getAttribute("data-page"))}}>
                                For your pleasure</li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header;
import { Component } from "react";

// import logo from "../../images/coffee_bean_image/coffeeBean.svg"
import "./header.sass"


class Header extends Component{


    render() {
        return (
            <header className="header">
                <nav className="header__navigation">
                    <ul className="header__list">
                        <li 
                            className="header__item"
                            onClick={(e) => {this.props.onHeaderClick(e)}}>
                            <span >Coffee house</span>
                        </li>
                        <li 
                            className="header__item" 
                            onClick={(e) => {this.props.onHeaderClick(e)}}>
                                Our coffee</li>
                        <li 
                            className="header__item" 
                            onClick={(e) => {this.props.onHeaderClick(e)}}>
                                For your pleasure</li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header;
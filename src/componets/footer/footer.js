import { Component } from "react";

import BeanInsert from "../bean-insert/bean-insert";

// import logo from "../../images/coffee_bean_image/coffeeBean.svg"
import "./footer.sass"


class Footer extends Component{


    render() {
        return (
            <footer className="footer">
                <nav className="footer__navigation">
                    <ul className="footer__list">
                        <li className="footer__item footer__item-first">
                            <span>Coffee house</span>
                        </li>
                        <li className="footer__item">Our coffee</li>
                        <li className="footer__item">For your pleasure</li>
                    </ul>
                </nav>
                <BeanInsert/>  
            </footer>
        )
    }
}

export default Footer;
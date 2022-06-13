import { Component } from "react";

import logo from "../../images/coffee_bean_image/bean-insert.svg";
import line from "../../images/coffee_bean_image/cofee-bean-line.svg";

import "./bean-insert.sass";

class BeanInsert extends Component{
    constructor(props) {
        super(props)
        this.classNames = this.props.filter ? "bean-insert bean-insert--white"  : "bean-insert"
    }
    render() {
        return (
            <div className={this.classNames}>
                <div>
                    <img src={line} alt="" />
                </div>
                <img className="bean-insert__coffee" src={logo} alt="coffee bean" />
                <div>
                    <img src={line} alt="" />
                </div>
            </div>
        )
    }
}

export default BeanInsert;
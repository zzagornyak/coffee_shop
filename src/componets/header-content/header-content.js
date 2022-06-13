import { Component } from "react"

import Header from "../header/header"

import startPageLogo from "../../images/start_page_image/bgImage.jpg"

import "./header-content.sass"


class HeaderContent extends Component{


    render() {
        return(
            <div className="header-content">
                <Header/>
                <img src={startPageLogo} alt="" className="header-content__background-image" />
            </div>
        )
    }
}

export default HeaderContent;
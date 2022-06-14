import { Component } from "react";


import "./filter.sass"

class Filter extends Component{

    render() {
        return (
            <div className="filter">
                <div className="filter__line">
                </div>
                <div className="filter__filters-wrapper">
                    <div className="filter__filter-by-name">
                        <span className="filter__tittle">Lookiing for</span>
                        <input placeholder="start typing here..." type="text" className="filter__input-place" />
                    </div>
                    <div className="filter__filter-by-click">
                        <span className="filter__tittle">Or filter</span>
                        <div className="filter__buttons">
                            <button className="filter__button">Brazil</button>
                            <button className="filter__button">Kenya</button>
                            <button className="filter__button">Columbia</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Filter;
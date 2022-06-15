import { Component } from "react";


import "./filter.sass"

class Filter extends Component{
    constructor(props) {
        super(props)
        this.state = {
            filterByName: ""
        }
    }

    onFilterChange = (e) => {
        const filterByName = e.target.value
        this.setState({filterByName})  
        this.props.onFilterChange(filterByName)  
    }

    render() {
        const {onFilterClick} = this.props
        return (
            <div className="filter">
                <div className="filter__line">
                </div>
                <div className="filter__filters-wrapper">
                    <div className="filter__filter-by-name">
                        <span className="filter__tittle">Lookiing for</span>
                        <input 
                            value={this.state.filterByName}
                            onChange={this.onFilterChange}
                            placeholder="start typing here..." 
                            type="text" 
                            className="filter__input-place" />
                    </div>
                    <div className="filter__filter-by-click">
                        <span className="filter__tittle">Or filter</span>
                        <div className="filter__buttons">
                            <button
                                data-filter="brazil" 
                                onClick={(e)=>{
                                    onFilterClick(e.currentTarget.getAttribute("data-filter"))
                                }} 
                                className="filter__button">
                                    Brazil
                            </button>
                            <button
                                data-filter="kenya" 
                                onClick={(e)=>{
                                    onFilterClick(e.currentTarget.getAttribute("data-filter"))
                                }} 
                                className="filter__button">
                                    Kenya
                            </button>
                            <button
                                data-filter="columbia" 
                                onClick={(e)=>{
                                    onFilterClick(e.currentTarget.getAttribute("data-filter"))
                                }} 
                                className="filter__button">
                                    Columbia
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Filter;
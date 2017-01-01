import React from 'react'
import OrientationFilter from './OrientationFilter.jsx'
import ColorFilter from './ColorFilter.jsx'
import StarRating from '../general/StarRating.jsx'

export default class FilterValuesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: this.props.type === 'radio'
                ? ''
                : (this.props.type === 'checkbox' ? [] : null)
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onFilterChange(e, this.props.type)
    }

    render() {
        let filter;
        if (this.props.type === 'orientation') {
            filter = <OrientationFilter />
        }
        else if (this.props.type === 'color') {
            filter = <ColorFilter />
        }
        else {
            filter = this.props.filterValues.map((filterValue, index) => (
                <div className="FilterValues">
                    <label>
                        {
                            this.props.type === 'checkbox'
                                ? <input
                                checked={this.props.selected && this.props.selected.indexOf(filterValue.name) + 1}
                                type={this.props.type} value={filterValue.name || filterValue.rate}
                                onChange={this.handleChange} name={this.props.filterKey}
                            />
                                : <input
                                type={this.props.type} value={filterValue.name || filterValue.rate}
                                onChange={this.handleChange} name={this.props.filterKey}
                            />
                        }
                        <span className="LabelContent">
                            {filterValue.name || (filterValue.rate ? <StarRating rate={filterValue.rate}/> : null)}
                        </span>
                    </label>
                    <span className="FilteredProductsNumber">{filterValue.filteredElementsAmount}</span>
                </div>
            ))
        }
        return (
            <form className="FilterValuesList">
                {filter}
            </form>
        )
    }
}
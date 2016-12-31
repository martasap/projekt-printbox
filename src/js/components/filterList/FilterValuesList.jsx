import React from 'react'
import OrientationFilter from './OrientationFilter.jsx'
import ColorFilter from './ColorFilter.jsx'
import StarRating from '../general/StarRating.jsx'

export default class FilterValuesList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selected: this.props.type === 'radio'
                ? ''
                : (this.props.type === 'checkbox' ? [] : null)
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            selected: this.props.type === 'radio'
                ? e.target.value
                : (this.props.type === 'checkbox'
                    ? (this.state.selected.indexOf(e.target.value) + 1
                        ? ([].concat(this.state.selected.slice(0, this.state.selected.indexOf(e.target.value)),
                            this.state.selected.slice(this.state.selected.indexOf(e.target.value) + 1,this.state.selected.length)))
                        : this.state.selected.concat(e.target.value))
                    : null
            )
        });
    }

    componentDidUpdate() {
        console.log(this.state.selected)
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
                <div>
                    <label>
                        <input type={this.props.type} value={index} onChange={this.handleChange} name={this.props.filterKey}/>
                        <span className="label-text">
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
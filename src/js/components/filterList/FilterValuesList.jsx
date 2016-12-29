import React from 'react'
import OrientationFilter from './OrientationFilter.jsx'
import ColorFilter from './ColorFilter.jsx'

export default function FilterValuesList(props) {
    let list;
    if(props.type === 'orientation'){
        list = <OrientationFilter />
    }
    else if(props.type === 'color'){
        list = <ColorFilter />
    }
    else{
        list = props.filterValues.map((filterValue, index) => (
            <div>
                <label><input type={props.type} value={index}/> {filterValue.name}</label>
                <span className="FilteredProductsNumber">{filterValue.filteredElementsAmount}</span>
            </div>
        ))
    }
    return (
        <div className="FilterValuesList">
            {
                list
            }
        </div>
    )
}
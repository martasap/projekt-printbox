import React from 'react'

export default function FilterValuesList(props) {
    return (
        <div className="filterValuesList">
            {
                props.filterValues.map((filterValue, index) => (
                    <div>
                        <label><input type={props.type} value={index}/> {filterValue.name}</label>
                        <span className="filteredProductsNumber">{filterValue.filteredElementsAmount}</span>
                    </div>
                ))
            }

        </div>
    )
}
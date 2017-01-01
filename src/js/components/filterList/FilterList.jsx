import React from 'react'
import Filter from './Filter.jsx'
import FilterValuesList from './FilterValuesList.jsx'

export default function FilterList(props) {
    const filterKeys = Object.keys(props.filterListData);

    return (
        <div className="FilterList">
            <h4>Narrow Results</h4>
            {
                filterKeys.map(filterKey =>
                    <Filter name={props.filterListData[filterKey].name}>
                        <FilterValuesList
                            selected={props.selected}
                            onFilterChange = {props.filterChange}
                            filterKey = {filterKey}
                            type={props.filterListData[filterKey].type}
                            filterValues={props.filterListData[filterKey].filterValues || null}
                        />
                    </Filter>
                )
            }
        </div>
    )
}
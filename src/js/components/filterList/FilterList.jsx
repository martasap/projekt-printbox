import React from 'react'
import Filter from './Filter.jsx'
import FilterValuesList from './FilterValuesList.jsx'

export default function FilterList(props) {
    const filterKeys = Object.keys(props.filterListData);
    const filterListView = filterKeys.map(filterKey =>
        <Filter name={filterKey}>
            <FilterValuesList
                type={props.filterListData[filterKey].type}
                filterValues={props.filterListData[filterKey].filterValues || null}
            />
        </Filter>
    );
    return (
        <div className="FilterList">
            <h4>Narrow Results</h4>
            {filterListView}
        </div>
    )
}
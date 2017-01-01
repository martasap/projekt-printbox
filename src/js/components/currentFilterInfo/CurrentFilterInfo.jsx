import React from 'react'
import Chip from '../general/Chip.jsx'

export default class CurrentFilterInfo extends React.Component
{
    render()
    {
        return (
            <div className="CurrentFilterInfo">
                <p className="NumberOfResults">Search results: 72</p>
                <p className="CurrentFilters">
                    <p>Showing filters:</p>
                    <div className="CurrentFiltersViewWrapper">
                        {
                            this.props.filters.map(filter => <Chip onClick={this.props.chipFilterClose}>{filter}</Chip>)
                        }
                    </div>
                </p>
                <div className="verticalLine"/>
            </div>
        )
    }
}
import React from 'react'
import Chip from '../general/Chip.jsx'

export default class CurrentFilterInfo extends React.Component
{
    render()
    {
        return (
            <div className="CurrentFilterInfo">
                <p>Search results: 72</p>
                <p>Showing filters: <Chip>Chosen filter</Chip></p>
            </div>
        )
    }
}
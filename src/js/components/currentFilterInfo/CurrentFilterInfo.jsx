import React from 'react'
import Chip from '../general/Chip.jsx'

export default function CurrentFilterInfo() {
    return(
        <div className="currentFilterInfo">
            <p>Search results: 72</p>
            <p>Showing filters: <Chip>Chosen filter</Chip></p>
        </div>
    )
}
import React from 'react'
import Pagination from '../general/Pagination.jsx'

export default function ProductListFooter() {
    return (
        <div className="ProductListFooter">
            <Pagination />
            <button className="BackToTop">Back to top</button>
        </div>
    )
}
import React from 'react'
import Pagination from '../general/Pagination.jsx'

export default function ProductListFooter() {
    return (
        <div className="productListFooter">
            <Pagination />
            <button className="backToTop">Back to top</button>
        </div>
    )
}
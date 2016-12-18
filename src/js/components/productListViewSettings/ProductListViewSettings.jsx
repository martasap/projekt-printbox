import React from 'react'

export default function ProductListViewSettings() {
    return (
        <div className="productListViewSettings">
            <select className="displayedProductsNumber">
                <option value="20" selected>20</option>
                <option value="40">40</option>
                <option value="80">80</option>
                <option value="all">All</option>
            </select>
            <button className="fourProductsInRow">4 in row</button>
            <button className="threeProductsInRow">3 in row</button>
            <button className="twoProductsInRow">2 in row</button>
        </div>
    )
}
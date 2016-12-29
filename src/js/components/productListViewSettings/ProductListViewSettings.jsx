import React from 'react'

export default function ProductListViewSettings() {
    return (
        <div className="ProductListViewSettings">
            <select className="DisplayedProductsNumber">
                <option value="20" selected>20</option>
                <option value="40">40</option>
                <option value="80">80</option>
                <option value="all">All</option>
            </select>
            <button className="FourProductsInRow">4 in row</button>
            <button className="ThreeProductsInRow">3 in row</button>
            <button className="TwoProductsInRow">2 in row</button>
        </div>
    )
}
import React from 'react'

export default function ProductListViewSettings() {
    return (
        <div className="ProductListViewSettings">
            <div className="SelectField">
                <select className="DisplayedProductsNumber">
                    <option value="20" selected>20</option>
                    <option value="40">40</option>
                    <option value="80">80</option>
                    <option value="all">All</option>
                </select>
            </div>
            <input type="image" src="icons/grid-four-up-14.ico" alt="4" />
            <input type="image" src="icons/grid-three-up-14.ico" alt="3" />
            <input type="image" src="icons/grid-two-up-14.ico" alt="2" />
        </div>
    )
}
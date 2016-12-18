import React from 'react'
import Filter from './filter/Filter.jsx'
import FilterValuesList from './filter/filterValuesList/FilterValuesList.jsx'
import StarRating from '../general/StarRating.jsx'
import Orientation from './filter/orientation/Orientation.jsx'
import Color from './filter/color/Color.jsx'

export default function FilterList() {
    return (
        <div className="filterList">
            <Filter name="Orientation">
                <Orientation />
            </Filter>
            <Filter name="Size">
                <FilterValuesList
                    type="checkbox"
                    filterValues={[
                        { name: '90x50mm', filteredElementsAmount: 112 },
                        { name: '85x55mm', filteredElementsAmount: 67 }
                        ]}
                />
            </Filter>
            <Filter name="Customer Rating">
                <FilterValuesList
                    type="radio"
                    filterValues={
                        [
                            { name: <StarRating />, filteredElementsAmount: 83 },
                            { name: <StarRating />, filteredElementsAmount: 230 },
                            { name: <StarRating />, filteredElementsAmount: 18 },
                            { name: <StarRating />, filteredElementsAmount: 66 }
                        ]
                    }
                />
            </Filter>
            <Filter name="Favorite">
                <FilterValuesList
                    type="checkbox"
                    filterValues={[{ name: 'Only favorites', filteredElementsAmount: 22 }]}
                />
            </Filter>
            <Filter name="Industry">
                <FilterValuesList
                    type="checkbox"
                    filterValues={[{ name: 'All', filteredElementsAmount: 840 },
                        { name: 'Automotive', filteredElementsAmount: 112 },
                        { name: 'Fashion', filteredElementsAmount: 83 },
                        { name: 'Law', filteredElementsAmount: 230 },
                        { name: 'IT', filteredElementsAmount: 18 },
                        { name: 'Sport', filteredElementsAmount: 66 },
                        { name: 'Art', filteredElementsAmount: 20 }]}
                />
            </Filter>
            <Filter name="Color">
                <Color />
            </Filter>
            <Filter name="Style">
                <FilterValuesList
                    type="checkbox"
                    filterValues={[{ name: 'All', filteredElementsAmount: 208 },
                        { name: 'Abstraction', filteredElementsAmount: 12 },
                        { name: 'Geometry', filteredElementsAmount: 7 },
                        { name: 'Men', filteredElementsAmount: 18 },
                        { name: 'Women', filteredElementsAmount: 28 },
                        { name: 'Children', filteredElementsAmount: 3 },
                        { name: 'Music', filteredElementsAmount: 36 },
                        { name: 'Vintage', filteredElementsAmount: 14 },
                        { name: 'Flower', filteredElementsAmount: 11 },]}
                />
            </Filter>
        </div>
    )
}
import React from 'react'
import ProductList from './components/productList/ProductList.jsx'
import CurrentFilterInfo from './components/currentFilterInfo/CurrentFilterInfo.jsx'
import FilterList from './components/filterList/FilterList.jsx'
import ProductListFooter from './components/productList/ProductListFooter.jsx'
import ProductListViewSettings from './components/productList/ProductListViewSettings.jsx'

const productData=[
    {name: "Automobil", size: '90x50mm'},
    {name: "Killum", size: '90x50mm'},
    {name: "Severamagenition", size: '90x55mm'},
    {name: "Abrahamoska", size: '85x55mm'},
    {name: "Fifth", size: '90x50mm'},
    {name: "Runner", size: '90x50mm'},
    {name: "Strategist", size: '90x55mm'},
    {name: "Jumper", size: '85x55mm'},
    {name: "Omater", size: '90x50mm'},
    {name: "Driver", size: '90x50mm'},
    {name: "Seven", size: '90x50mm'},
    {name: "Plummer", size: '85x55mm'},
    {name: "Swimmer", size: '90x50mm'},
    {name: "Eleven", size: '85x55mm'},
    {name: "Vater", size: '90x50mm'},
    {name: "Jumper", size: '85x55mm'},
    {name: "Automobil", size: '90x50mm'},
    {name: "Killum", size: '90x50mm'},
    {name: "Severamagenition", size: '90x50mm'},
    {name: "Abrahamoska", size: '85x55mm'}
];

const filterListData = {
    orientationFilter: {
        name: 'Orientation',
        type: 'orientation'
    },
    size: {
        name: 'Size',
        type: 'checkbox',
        filterValues: [
            {name: '90x50mm', filteredElementsAmount: 112},
            {name: '85x55mm', filteredElementsAmount: 67}
        ]
    },
    customerRating: {
        name: 'Customer Rating',
        type: 'radio',
        filterValues: [
            {rate: 4, filteredElementsAmount: 83},
            {rate: 3, filteredElementsAmount: 230},
            {rate: 2, filteredElementsAmount: 18},
            {rate: 1, filteredElementsAmount: 66}
        ]
    },
    favourite: {
        name: 'Favourite',
        type: 'checkbox',
        filterValues: [
            {name: 'Only favorites', filteredElementsAmount: 22}
        ]
    },
    industry: {
        name: 'Industry',
        type: 'checkbox',
        filterValues: [
            {name: 'All', filteredElementsAmount: 840},
            {name: 'Automotive', filteredElementsAmount: 112},
            {name: 'Fashion', filteredElementsAmount: 83},
            {name: 'Law', filteredElementsAmount: 230},
            {name: 'IT', filteredElementsAmount: 18},
            {name: 'Sport', filteredElementsAmount: 66},
            {name: 'Art', filteredElementsAmount: 20}
        ]
    },
    color: {
        name: 'Color',
        type: 'color'
    },
    style: {
        name: 'Style',
        type: 'checkbox',
        filterValues: [
            {name: 'All', filteredElementsAmount: 208},
            {name: 'Abstraction', filteredElementsAmount: 12},
            {name: 'Geometry', filteredElementsAmount: 7},
            {name: 'Men', filteredElementsAmount: 18},
            {name: 'Women', filteredElementsAmount: 28},
            {name: 'Children', filteredElementsAmount: 3},
            {name: 'Music', filteredElementsAmount: 36},
            {name: 'Vintage', filteredElementsAmount: 14},
            {name: 'Flower', filteredElementsAmount: 11}
        ]
    }
};

export default class Site extends React.Component {
    constructor(){
        super();

        this.state = {filters: []};

        this.filterChange = this.filterChange.bind(this);
        this.chipFilterClose = this.chipFilterClose.bind(this);

    }

    chipFilterClose (value) {
        const filters = this.state.filters;
        this.setState({
            filters: [].concat(filters.slice(0, filters.indexOf(value)),
                    filters.slice(filters.indexOf(value) + 1, filters.length)
            )
        });

    }

    filterChange(e, type) {
        const filters = this.state.filters;
        this.setState({
            filters: type === 'radio'
                ? this.state.filters
                : (type === 'checkbox' || 'color'
                    ? (filters.indexOf(e.target.value) + 1
                    ? ([].concat(filters.slice(0, filters.indexOf(e.target.value)),
                    filters.slice(filters.indexOf(e.target.value) + 1, filters.length)))
                    : filters.concat(e.target.value))
                    : null
            )
        });
    }

    render () {
        return (
            <div className="Site">
                <div className="Columns">
                    <div className="FilterColumn">
                        <FilterList
                            selected={this.state.filters}
                            filterListData={filterListData}
                            filterChange={this.filterChange}
                        />
                    </div>
                    <div className="Separator" />
                    <div className="ProductListColumn">
                        <div className="ProductListHeader">
                            <CurrentFilterInfo chipFilterClose={this.chipFilterClose} filters={this.state.filters} />
                            <ProductListViewSettings />
                        </div>
                        <ProductList productData={productData} />
                        <ProductListFooter />
                    </div>
                </div>
            </div>
        )
    }
}

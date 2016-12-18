import React from 'react'
import ProductList from './components/productList/ProductList.jsx'
import CurrentFilterInfo from './components/currentFilterInfo/CurrentFilterInfo.jsx'
import FilterList from './components/filterList/FilterList.jsx'
import ProductListFooter from './components/productListFooter/ProductListFooter.jsx'
import ProductListViewSettings from './components/productListViewSettings/ProductListViewSettings.jsx'

export default function Site() {
    return (
        <div className="site">
            <div className="filterColumn">
                <FilterList className="filterList"/>
            </div>
            <div className="productListColumn">
                <CurrentFilterInfo className="currentFilterInfo"/>
                <ProductListViewSettings className="productListViewSettings"/>
                <ProductList className="productList"/>
            </div>
            <ProductListFooter className="productListFooter"/>
        </div>
    )
}

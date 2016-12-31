import React from 'react'
import Product from './Product.jsx'

export default function ProductList(props) {
    return (
        <div className="ProductList">
            {props.productData.map(item => <Product name={item.name} size={item.size}/>)}
        </div>
    )
}
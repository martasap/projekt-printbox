import React from 'react'
import Product from './product/Product.jsx'

export default function ProductList(props) {
    const products = props.productData.map(item => <Product name={item.name} size={item.size}/>);
    return (
        <div className="ProductList">
            {products}
        </div>
    )
}
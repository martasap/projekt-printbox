import React from 'react'
import Product from './product/Product.jsx'

const productData=[
    {name: "Automobil", size: '90x55mm'},
    {name: "Killum", size: '90x55mm'},
    {name: "Severamagenition", size: '90x55mm'},
    {name: "Abrahamoska", size: '90x55mm'},
    {name: "Fifth", size: '90x55mm'},
    {name: "Runner", size: '90x55mm'},
];

export default function ProductList() {
    const products = productData.map(item => <Product name={item.name} size={item.size}/>);
    return (
        <div className="productList">
            {products}
        </div>
    )
}
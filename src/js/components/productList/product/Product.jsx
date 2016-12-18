import React from 'react'
import StarRating from '../../general/StarRating.jsx'

export default function Product(props) {
    return (
        <div className="product">
            <img src="" alt="Product photo"/>
            <div>
                <StarRating />
                <span>Heart icon</span>
            </div>
            <h5>{props.name || "No name"}</h5>
            <p>{props.size}</p>
        </div>
    )
}
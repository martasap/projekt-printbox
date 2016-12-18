import React from 'react'

export default function Filter(props) {
    return (
        <div className="filter">
            <span>{props.name}</span>
            <div>
                {props.children}
            </div>
        </div>
    )
}
import React from 'react'

export default function Filter(props) {
    return (
        <div className="Filter">
            <span>{props.name}</span>
            <div>
                {props.children}
            </div>
        </div>
    )
}
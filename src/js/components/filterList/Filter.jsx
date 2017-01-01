import React from 'react'
import CrossIcon from '../../../../public/icons/CrossIcon.jsx'

export default function Filter(props) {
    return (
        <div className="Filter">
            <div className="FilterHeader">
                <span className="FilterTitle">{props.name}</span>
                <CrossIcon className="Cross" />
            </div>
            <div className="FilterContent">
                {props.children}
            </div>
        </div>
    )
}
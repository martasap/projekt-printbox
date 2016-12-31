import React from 'react'
import _ from 'lodash'
import StarIcon from '../../../../public/icons/StarIcon.jsx'

export default function StarRating(props) {
    const rate = props.rate || 0
    const activeStars = _.times(rate, () => <StarIcon className="StarIconActive" />);
    const inactiveStars = _.times(5 - rate, () => <StarIcon className="StarIconInactive" />);
    return (
        <div className="StarRating">
            {activeStars}
            {inactiveStars}
        </div>
    )
}
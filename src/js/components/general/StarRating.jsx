import React from 'react'
import _ from 'lodash'
import StarIcon from '../../../../public/icons/StarIcon.jsx'

export default function StarRating(props) {
    const activeStars = _.times(props.rate, () => <StarIcon className="StarIconActive" />);
    const inactiveStars = _.times(5 - props.rate, () => <StarIcon className="StarIconInactive" />);
    return (
        <div className="StarRating">
            {activeStars}
            {inactiveStars}
        </div>
    )
}
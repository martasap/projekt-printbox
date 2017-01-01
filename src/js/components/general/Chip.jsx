import React from 'react'
import CrossIcon from '../../../../public/icons/CrossIcon.jsx'

export default class Chip extends React.Component {
    constructor(){
        super();

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.onClick(this.props.children)
    }

    render () {
        return (
            <span className="Chip">
            {this.props.children}
            <span onClick={this.handleClick}>
                <CrossIcon className="Cross" />
            </span>
        </span>
        )
    }
}
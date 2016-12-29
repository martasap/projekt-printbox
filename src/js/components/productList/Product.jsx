import React from 'react'
import StarRating from '../general/StarRating.jsx'
import HeartIcon from '../../../../public/icons/HeartIcon.jsx'

export default class Product extends React.Component {
    constructor(){
        super();
        this.state = {favorite: false};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({favorite: !this.state.favorite})
    }

    render() {
        return (
            <div className="Product">
                <img src="/img/product.png" alt="Product photo"/>
                <div className="IconRow">
                    <StarRating rate={3}/>
                    <div onClick={this.handleClick}>
                        <HeartIcon className={this.state.favorite ? "HeartIconActive" : "HeartIconInactive"} />
                    </div>
                </div>
                <h5>{this.props.name || "No name"}</h5>
                <p>{this.props.size}</p>
            </div>
        )
    }
}
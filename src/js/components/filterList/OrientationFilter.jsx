import React from 'react'

export default class OrientationFilter extends React.Component {
    constructor(){
        super();
        this.state = {selected: ''};

        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.setState(e.target.value);
    }
    render() {
        return (
            <form className="OrientationFilter">
                <label>
                    <input type="radio" value="Horizontal" onChange={this.handleChange} name="Orientation" />
                    <div className="OrientationInputWrapper">
                        <div className="HorizontalFilter"></div>
                    </div>
                    <div className="HorizontalLabel">horizontal</div>
                </label>
                <label>
                    <input type="radio" value="Vertical" onChange={this.handleChange} name="Orientation" />
                    <div className="OrientationInputWrapper">
                        <div className="VerticalFilter"></div>
                    </div>
                    <div className="VerticalLabel">vertical</div>
                </label>
            </form>
        )
    }
}
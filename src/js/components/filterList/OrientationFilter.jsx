import React from 'react'

export default class OrientationFilter extends React.Component {
    render() {
        return (
            <form className="OrientationFilter">
                <label>
                    <input type="radio" value="Horizontal" name="Orientation" />
                    <div className="OrientationInputWrapper">
                        <div className="HorizontalFilter"></div>
                    </div>
                    <div className="HorizontalLabel">horizontal</div>
                </label>
                <label>
                    <input type="radio" value="Vertical" name="Orientation" />
                    <div className="OrientationInputWrapper">
                        <div className="VerticalFilter"></div>
                    </div>
                    <div className="VerticalLabel">vertical</div>
                </label>
            </form>
        )
    }
}
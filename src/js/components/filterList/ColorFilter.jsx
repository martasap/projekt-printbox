import React from 'react'

export default class ColorFilter extends React.Component {
    constructor(){
        super();
        this.state = {selected: []};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const selected = this.state.selected;
        this.setState(
        (selected.indexOf(e.target.value) + 1
            ? ([].concat(selected.slice(0, selected.indexOf(e.target.value)),
            selected.slice(selected.indexOf(e.target.value) + 1, selected.length)))
            : selected.concat(e.target.value)));
    }

    render() {
        const colors = ['#6a71e6','#0192ff', '#61d2fe','#48dc6c','#fe4a65','#ff5534','#ffa500','#fed201','#9fa0a4'];
        return (
            <form className="ColorFilter">
                Choose color(s)
                <div className="ColorsTable">
                    {colors.map(color =>
                    <label>
                        <input type="checkbox" value="Color" onChange={this.handleChange} />
                        <span className="Colors" style={{backgroundColor: color}} />
                    </label>
                    )}
                    <label>
                        <input type="checkbox" value="Color" onChange={this.handleChange} />
                        <span className="AddColor" />
                    </label>
                </div>
                or
                <div className="CustomColorName">Use colors from your logo</div>
                <button className="UploadLogo">UPLOAD LOGO</button>
            </form>
        )
    }
}
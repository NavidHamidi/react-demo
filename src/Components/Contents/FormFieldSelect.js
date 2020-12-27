import React from 'react'

class FormFieldSelect extends React.Component {
	constructor(props) {
		super(props)

		this.secondaryValue = this.props.value == "M" ? "F" : "M"
	}

	componentDidMount() {
		if (this.props.disabled) {
			document.getElementById(this.props.id).setAttribute("disabled", "disabled")
		}
		console.log(document.getElementById("1").offsetHeight)
	}

	render() {
		console.log(this.props.disabled)
		return (
			<div id="1" className="form-field">
				<label className="text-label">{this.props.name}</label>
				<select className="form-select" id={this.props.id} name="civility">
					<option selected="selected">{this.props.value}</option>
					<option>{this.secondaryValue}</option>
				</select>
			</div>
		)
	}
}

export default FormFieldSelect
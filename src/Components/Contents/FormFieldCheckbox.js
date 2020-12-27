import React from 'react'

class FormFieldCheckbox extends React.Component {
	constructor(props) {
		super(props)

		this.secondaryValue = this.props.value == "M" ? "F" : "M"
	}

	componentDidMount() {
		if (this.props.value) {
			document.getElementById(this.props.id).setAttribute("checked", "checked")
		}
		if (this.props.disabled) {
			document.getElementById(this.props.id).setAttribute("disabled", "disabled")
		}
		console.log(document.getElementById("1").offsetHeight)
	}

	render() {
		console.log(this.props.disabled)
		return (
			<div className="form-field-checkbox">
				<label className="text-label" for={this.props.id}>{this.props.name}</label>
				<input className="form-switch" type="checkbox" id={this.props.id} />
			</div>
		)
	}
}

export default FormFieldCheckbox
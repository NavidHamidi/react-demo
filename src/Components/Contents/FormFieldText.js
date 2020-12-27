import React from 'react'

class FormFieldText extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			value : this.props.value
		}
	}

	componentDidMount() {
		if (this.props.disabled) {
			document.getElementById(this.props.id).setAttribute("disabled", "disabled")
		}
		console.log(document.getElementById("1").offsetHeight)
	}

	updateValue(value) {
		this.setState({
			value : value
		})
	}

	render() {
		return (
			<div id="2" className="form-field">
				<label className="text-label">{this.props.name}</label>
				<input 
					className="form-text"
					type="text"
					id={this.props.id}
					value={this.state.value}
					onChange={e => this.updateValue(e.target.value)}
				/>
			</div>
		)
	}
}

export default FormFieldText
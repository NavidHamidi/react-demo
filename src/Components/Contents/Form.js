import React from 'react'
import FormFieldText from './FormFieldText'
import FormFieldSelect from './FormFieldSelect'
import FormFieldCheckbox from './FormFieldCheckbox'

class Form extends React.Component {
	constructor(props) {
		super(props)
	}

	// Send changes to the api
	SaveChanges() {
	}

	render() {
		return (
			<div className="profile-container">
				<form>
					<fieldset>
						<legend>Informations principales</legend>
						<FormFieldSelect name="Civilité" id="form-civility" value="M" disabled={false}/>
						<FormFieldText name="Nom" id="form-lastname" value={this.props.user.name} disabled={false}/>
						{/*<FormFieldText name="Prénom" id="form-firstname" value="Navid" disabled={false}/>*/}
						<FormFieldText name="Date de naissance" id="form-birth" value="06/11/1996" disabled={false}/>
						<FormFieldText name="Email" id="form-email" value={this.props.user.email} disabled={true}/>
					</fieldset>
					<fieldset>
						<legend>Adresse</legend>
						<FormFieldText name="Rue" id="form-street" value="14 rue de la Paix" disabled={false}/>
						<FormFieldText name="Code postale" id="form-postcode" value="94800" disabled={false}/>
						<FormFieldText name="Ville" id="form-city"  value="Villejuif" disabled={false}/>
						<FormFieldText name="Pays" id="form-country" value="France" disabled={false}/>
					</fieldset>
					<fieldset>
						<legend>Gestion du compte</legend>
						<FormFieldCheckbox name="Email vérifié" id="form-email-verified" value={false} disabled={false}/>
					</fieldset>
					<div className="submit-field">
					<button className="form-submit" onClick={this.SaveChanges}>Enregistrer</button>
					</div>
					
					
				</form>
			</div>
		)
	}
}

export default Form
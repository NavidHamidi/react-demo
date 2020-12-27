import React from 'react';
import { Link } from "react-router-dom";

class Navitem extends React.Component {
	render() {
		return (
			<li>
				<Link to={this.props.tolink}
					//onClick={this.props.activec.bind(this, this.props.item)}
				>
					{this.props.item}
				</Link>
			</li>
		)
	}
}

export default Navitem
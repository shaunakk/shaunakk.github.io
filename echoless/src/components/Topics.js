import React, { Component } from 'react';
import './styles.css';

export default class Topic extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return <div className="Topic">{this.props.topic}</div>;
	}
}
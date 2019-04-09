import React from 'react';
import {Button} from './Button';

const style = {
	display: 'inline-block',
	height: 60,
	width: 60,
	margin: 5,
	padding: 10,
	borderRadius: 10,
	textAlign: 'center'
}

export class GameButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		  highlight: false
		};
		this.handleMouseEnter = this.handleMouseEnter.bind(this);
		this.handleMouseLeave = this.handleMouseLeave.bind(this);
	}

	handleMouseEnter() {
		this.setState({
		  highlight: true
		});
	}
	handleMouseLeave() {
		this.setState({
		  highlight: false
		});
	}

	componentDidUpdate() {
		if (this.state.highlight == true) {
			this.sleep(500).then(() => {
			  this.setState({
			    highlight: false
			  })
			});
		}
	}

	render() {
		var listeners = [this.props.handleClick, this.handleMouseEnter, this.handleMouseLeave];
		if (!this.props.allowInput) {
			return <Button 
				 id={this.props.id}
				 style={style} 
				 highlight={this.props.highlight}/>;
		} else {
			return <Button 
				 id={this.props.id}
			 	 style={style} 
				 highlight={this.state.highlight} 
				 listeners={listeners}/>;
		}
	}

	sleep(ms) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}
}

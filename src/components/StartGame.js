import React from 'react';
import {Button} from './Button';
import {Content} from './Content';

const style = {
	position: 'absolute',
	top: 80,
	display: 'inline-block',
	height: 20,
	width: 100,
	padding: 10,
	borderRadius: 10,
	textAlign: 'center',
	transform: 'translate(-50%, 0)',
	lineHeight: '20px',
	color: 'navy',
	fontWeight: 700
}

export class StartGame extends React.Component {
	constructor(props) {
		super(props);
		this.onMouseEnter = this.onMouseEnter.bind(this);
		this.onMouseLeave = this.onMouseLeave.bind(this);
		this.state = {
		  highlight: false
		};
	}

	onMouseEnter() {
	  	this.setState({
	    	  highlight: true
	  	});
	}
	onMouseLeave() {
	  	this.setState({
	    	  highlight: false
	  	});
	}

	render() {
		var msg;
		var sTemp;
		if (this.props.restart) {
			msg = "Restart Game!";
			sTemp = {
			  transform: "translate(10%, 0)",
			  width: 125
			};
		} else {
			msg = "Start Game!";
			if (this.props.restartExists) {
				sTemp = {
				  transform: "translate(-110%, 0)",
				  width: 125
				};
			} else {
				sTemp = {
				  transform: "translate(-50%, 0)",
				  width: 100
				};
			}
		}
		var bStyle = {...style, ...sTemp};
		return <Button
			 style={bStyle}
			 highlight={this.state.highlight}
		 	 allowInput={true}
			 handleClick={this.props.handleClick}
			 handleMouseEnter={this.onMouseEnter}
			 handleMouseLeave={this.onMouseLeave}
			 msg={msg}/>;
	}
}

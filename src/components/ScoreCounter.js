import React from 'react';

const style = {
	width: 50,
	height: 50,
	background: 'blue',
	borderRadius: 15,
	lineHeight: '50px',
	fontWeight: 700,
	color: 'navy'
}

const conStyle = {
	position: 'absolute',
	top: 20,
	width: 50,
	color: 'blue'
}

export class ScoreCounter extends React.Component {
	render() {
		var pos;
		var msg;
		if(this.props.high) {
			msg = "High Score:";
			pos = {left: 20};
		} else {
			msg = "Score:";
			pos = {right: 20};
		}
		var cStyle = {...conStyle, ...pos};
		return (
			<div style={cStyle}>
			  <h4>{msg}</h4>
			  <div style={style}>
			    {this.props.score}
			  </div>
			</div>
		);
	}
}

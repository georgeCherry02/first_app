import React, { Component } from 'react';
import { StartGame } from './StartGame';

const style = {
	background: 'navy',
	textAlign: 'center',
	borderBottom: '1px solid black',
	height: 140
};

const tStyle = {
	position: 'absolute',
	top: 0,
	display: 'inline-block',
	color: 'lightBlue',
	lineHeight: '80px',
	margin: 0,
	transform: 'translate(-50%, 0)'
};

export class NavBar extends Component {
	render() {
		if (this.props.game) {
			return (
				<div style={style}>
					<h1 style={tStyle}>Memory Game</h1>
					<StartGame handleClick={this.props.startGame} restart={false} restartExists={true}/>
					<StartGame handleClick={this.props.restartGame} restart={true}/>
				</div>
			);
		} else {
			return (
				<div style={style}>
					<h1 style={tStyle}>Memory Game</h1>
					<StartGame handleClick={this.props.startGame} restart={false} restartExists={false}/>
				</div>
			);
		}
	}
}

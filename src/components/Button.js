import React, { Component } from 'react';

export class Button extends Component {
	render() {
		var bCol = this.props.highlight ? 'lightBlue' : 'blue';
		const nStyle = {...this.props.style, ...{background: bCol}};
		if (this.props.listeners != null) {
			var hMC = this.props.listeners[0];
			var hME = this.props.listeners[1];
			var hML = this.props.listeners[2];
		} else {
			var hMC = this.props.handleClick;
			var hME = this.props.handleMouseEnter;
			var hML = this.props.handleMouseLeave;
		}
		return (
			<div
			  id={this.props.id}
 			  onMouseEnter={hME}
			  onMouseLeave={hML}
			  onClick={hMC}
			  style={nStyle}>
			    {this.props.msg}
			</div>
		);
	};
}
